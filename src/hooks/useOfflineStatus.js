import { useState, useEffect } from 'react';
import { offlineManager } from '../services/offlineManager';

export function useOfflineStatus() {
  const [status, setStatus] = useState(() => offlineManager.getStatus());

  useEffect(() => {
    return offlineManager.subscribe((newStatus) => {
      setStatus(newStatus);
    });
  }, []);

  return {
    isOnline: status.isOnline,
    isSimulatedOffline: status.isSimulatedOffline,
    toggleSimulation: () => offlineManager.toggleSimulation(),
  };
}
