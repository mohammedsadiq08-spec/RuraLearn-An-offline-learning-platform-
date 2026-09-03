// RuraLearn Offline Manager
import { storageService } from './storageService';

class OfflineManager {
  constructor() {
    this.listeners = new Set();
    this.isOnline = navigator.onLine && !storageService.getOfflineOverride();

    window.addEventListener('online', () => this.handleNetworkChange());
    window.addEventListener('offline', () => this.handleNetworkChange());
    window.addEventListener('ruralearn:network-toggle', () => this.handleNetworkChange());
  }

  handleNetworkChange() {
    const override = storageService.getOfflineOverride();
    const actualStatus = navigator.onLine;
    this.isOnline = actualStatus && !override;
    this.notify();
  }

  getStatus() {
    return {
      isOnline: this.isOnline,
      isSimulatedOffline: storageService.getOfflineOverride(),
      rawOnline: navigator.onLine,
    };
  }

  toggleSimulation() {
    const current = storageService.getOfflineOverride();
    storageService.setOfflineOverride(!current);
    this.handleNetworkChange();
    return !current;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => this.listeners.delete(listener);
  }

  notify() {
    const status = this.getStatus();
    this.listeners.forEach(fn => fn(status));
  }

  getStorageStats() {
    const downloads = storageService.getDownloadedPacks();
    const keys = Object.keys(downloads);
    const totalMB = keys.reduce((acc, k) => acc + (downloads[k].sizeMB || 3.0), 0);
    return {
      totalItems: keys.length,
      totalMB: Number(totalMB.toFixed(1)),
      items: downloads,
    };
  }
}

export const offlineManager = new OfflineManager();
