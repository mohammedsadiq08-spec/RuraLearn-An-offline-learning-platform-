// RuraLearn Production Offline Synchronization Engine
// Batches mutations made while offline and automatically replays them to PostgreSQL backend when online
import { localDB, STORES } from './localDatabase';
import { apiClient } from './apiClient';

class OfflineSyncEngine {
  constructor() {
    this.isSyncing = false;
    this.initNetworkListeners();
  }

  initNetworkListeners() {
    if (typeof window === 'undefined') return;

    window.addEventListener('online', () => {
      console.log('[SyncEngine] Internet connection restored. Initiating automatic sync...');
      this.syncPendingQueue();
    });

    // Also attempt periodic sync every 30 seconds if online
    setInterval(() => {
      if (navigator.onLine && !this.isSyncing) {
        this.syncPendingQueue();
      }
    }, 30000);
  }

  async queueAction(actionType, payload) {
    const queueItem = {
      actionType,
      payload,
      timestamp: Date.now(),
    };
    await localDB.put(STORES.SYNC_QUEUE, queueItem);
    window.dispatchEvent(new CustomEvent('ruralearn:queue-updated'));

    // If online right now, attempt immediate background flush
    if (navigator.onLine && !this.isSyncing) {
      this.syncPendingQueue();
    }
  }

  async getPendingCount() {
    const items = await localDB.getAll(STORES.SYNC_QUEUE);
    return items.length;
  }

  async syncPendingQueue() {
    if (this.isSyncing) return;
    if (!apiClient.getToken()) return; // only sync if user is authenticated

    this.isSyncing = true;
    try {
      const items = await localDB.getAll(STORES.SYNC_QUEUE);
      if (!items || items.length === 0) {
        this.isSyncing = false;
        return;
      }

      console.log(`[SyncEngine] Replaying ${items.length} offline actions to backend server...`);
      const { data, error, isOffline } = await apiClient.post('/api/sync', { items });

      if (!error && !isOffline && data?.success) {
        // Clear synced items from IndexedDB
        await localDB.clear(STORES.SYNC_QUEUE);
        console.log(`[SyncEngine] Successfully synced ${data.syncedCount} items with server database.`);
        window.dispatchEvent(new CustomEvent('ruralearn:sync-completed', { detail: data }));
      }
    } catch (err) {
      console.warn('[SyncEngine] Background sync attempt failed:', err);
    } finally {
      this.isSyncing = false;
    }
  }
}

export const syncEngine = new OfflineSyncEngine();
