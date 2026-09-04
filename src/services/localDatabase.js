// RuraLearn Native IndexedDB Database Engine (RuraLearnDB)
// High-capacity, transaction-safe, offline-first client-side database

const DB_NAME = 'RuraLearnDB';
const DB_VERSION = 3;

export const STORES = {
  USERS: 'users',
  SESSION: 'session',
  PROFILE: 'profile',
  PROGRESS: 'progress',
  DOWNLOADS: 'downloads',
  PRACTICE_HISTORY: 'practice_history',
  STUDY_NOTES: 'study_notes',
  SYNC_QUEUE: 'sync_queue',
};

class LocalDatabase {
  constructor() {
    this.dbPromise = this.initDB();
  }

  async initDB() {
    if (typeof window === 'undefined' || !window.indexedDB) {
      console.warn('IndexedDB is not available on this device; using localStorage fallback.');
      return null;
    }

    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Users store
        if (!db.objectStoreNames.contains(STORES.USERS)) {
          const userStore = db.createObjectStore(STORES.USERS, { keyPath: 'id' });
          userStore.createIndex('email', 'email', { unique: false });
        }

        // Active session store
        if (!db.objectStoreNames.contains(STORES.SESSION)) {
          db.createObjectStore(STORES.SESSION, { keyPath: 'key' });
        }

        // Profile store
        if (!db.objectStoreNames.contains(STORES.PROFILE)) {
          db.createObjectStore(STORES.PROFILE, { keyPath: 'id' });
        }

        // Lesson progress store
        if (!db.objectStoreNames.contains(STORES.PROGRESS)) {
          db.createObjectStore(STORES.PROGRESS, { keyPath: 'key' });
        }

        // Offline downloaded content packages
        if (!db.objectStoreNames.contains(STORES.DOWNLOADS)) {
          db.createObjectStore(STORES.DOWNLOADS, { keyPath: 'key' });
        }

        // Practice questions history
        if (!db.objectStoreNames.contains(STORES.PRACTICE_HISTORY)) {
          const practiceStore = db.createObjectStore(STORES.PRACTICE_HISTORY, {
            keyPath: 'id',
            autoIncrement: true,
          });
          practiceStore.createIndex('topic', 'topic', { unique: false });
          practiceStore.createIndex('timestamp', 'timestamp', { unique: false });
        }

        // Student personal study notes and bookmarks
        if (!db.objectStoreNames.contains(STORES.STUDY_NOTES)) {
          const notesStore = db.createObjectStore(STORES.STUDY_NOTES, {
            keyPath: 'id',
            autoIncrement: true,
          });
          notesStore.createIndex('lessonId', 'lessonId', { unique: false });
          notesStore.createIndex('createdAt', 'createdAt', { unique: false });
        }

        // Real-time offline synchronization queue
        if (!db.objectStoreNames.contains(STORES.SYNC_QUEUE)) {
          db.createObjectStore(STORES.SYNC_QUEUE, {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
      };

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        console.error('IndexedDB failed to open:', event.target.error);
        resolve(null);
      };
    });
  }

  async getStore(storeName, mode = 'readonly') {
    const db = await this.dbPromise;
    if (!db) return null;
    const tx = db.transaction(storeName, mode);
    return tx.objectStore(storeName);
  }

  // Generic Put (Insert or Update)
  async put(storeName, item) {
    try {
      const store = await this.getStore(storeName, 'readwrite');
      if (!store) return null;
      return new Promise((resolve, reject) => {
        const req = store.put(item);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn(`IndexedDB put error on ${storeName}:`, err);
    }
  }

  // Generic Get by key
  async get(storeName, key) {
    try {
      const store = await this.getStore(storeName, 'readonly');
      if (!store) return null;
      return new Promise((resolve, reject) => {
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn(`IndexedDB get error on ${storeName}:`, err);
      return null;
    }
  }

  // Generic GetAll
  async getAll(storeName) {
    try {
      const store = await this.getStore(storeName, 'readonly');
      if (!store) return [];
      return new Promise((resolve, reject) => {
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn(`IndexedDB getAll error on ${storeName}:`, err);
      return [];
    }
  }

  // Generic Delete
  async delete(storeName, key) {
    try {
      const store = await this.getStore(storeName, 'readwrite');
      if (!store) return null;
      return new Promise((resolve, reject) => {
        const req = store.delete(key);
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn(`IndexedDB delete error on ${storeName}:`, err);
    }
  }

  // Clear an entire store
  async clear(storeName) {
    try {
      const store = await this.getStore(storeName, 'readwrite');
      if (!store) return null;
      return new Promise((resolve, reject) => {
        const req = store.clear();
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn(`IndexedDB clear error on ${storeName}:`, err);
    }
  }

  // Query by index
  async getByIndex(storeName, indexName, value) {
    try {
      const store = await this.getStore(storeName, 'readonly');
      if (!store) return [];
      const index = store.index(indexName);
      return new Promise((resolve, reject) => {
        const req = index.getAll(value);
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn(`IndexedDB getByIndex error on ${storeName}:`, err);
      return [];
    }
  }

  // Log real-time event into sync queue
  async queueSyncAction(actionType, payload) {
    const queueItem = {
      actionType,
      payload,
      timestamp: Date.now(),
      synced: false,
    };
    await this.put(STORES.SYNC_QUEUE, queueItem);
    window.dispatchEvent(new CustomEvent('ruralearn:sync-queue-updated', { detail: queueItem }));
    return queueItem;
  }
}

export const localDB = new LocalDatabase();
