import React, { useState } from 'react';
import { Wifi, WifiOff, HardDrive, HelpCircle } from 'lucide-react';
import { useOfflineStatus } from '../../hooks/useOfflineStatus';
import { offlineManager } from '../../services/offlineManager';

export default function OfflineIndicator() {
  const { isOnline, isSimulatedOffline, toggleSimulation } = useOfflineStatus();
  const [showTooltip, setShowTooltip] = useState(false);

  const stats = offlineManager.getStorageStats();

  return (
    <div className="relative inline-flex items-center gap-2">
      <button
        onClick={toggleSimulation}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border shadow-2xs ${
          isOnline
            ? 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100'
            : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 ring-2 ring-amber-200 animate-pulse'
        }`}
        title="Click to toggle simulated Offline mode for testing"
      >
        {isOnline ? (
          <>
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <Wifi className="w-3.5 h-3.5 text-emerald-700" />
            <span>Online</span>
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            <WifiOff className="w-3.5 h-3.5 text-amber-700" />
            <span>Offline Mode</span>
          </>
        )}
      </button>

      {/* Offline storage badge */}
      <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
        <HardDrive className="w-3 h-3 text-slate-400" />
        <span>{stats.totalItems} Cached</span>
      </span>
    </div>
  );
}
