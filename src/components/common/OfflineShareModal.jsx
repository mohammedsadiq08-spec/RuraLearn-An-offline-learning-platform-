import React, { useState } from 'react';
import { storageService } from '../../services/storageService';
import { Share2, Download, Upload, CheckCircle2, X, FileJson, AlertCircle } from 'lucide-react';

export default function OfflineShareModal({ isOpen, onClose }) {
  const [importStatus, setImportStatus] = useState(null);

  if (!isOpen) return null;

  const handleExport = () => {
    storageService.exportOfflineBundle();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        const success = storageService.importOfflineBundle(parsed);
        if (success) {
          setImportStatus('success');
          setTimeout(() => {
            setImportStatus(null);
            onClose();
          }, 2000);
        } else {
          setImportStatus('error');
        }
      } catch (err) {
        setImportStatus('error');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">Peer-to-Peer Offline Share</h3>
            <p className="text-xs text-slate-500">Share lessons without internet via Bluetooth or USB</p>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-6">
          In villages with zero internet, one connected student can export their downloaded lesson packages into a single file and share it with classmates.
        </p>

        {importStatus === 'success' && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Learning bundle imported into IndexedDB successfully!</span>
          </div>
        )}

        {importStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-900 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>Invalid bundle file. Please ensure it is a valid RuraLearn export.</span>
          </div>
        )}

        <div className="space-y-4">
          {/* Export Action */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex items-center justify-between gap-3">
            <div>
              <span className="font-bold text-xs text-slate-800 block">Export Lesson Package</span>
              <span className="text-[11px] text-slate-500">Creates a portable .json bundle</span>
            </div>
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Bundle</span>
            </button>
          </div>

          {/* Import Action */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex items-center justify-between gap-3">
            <div>
              <span className="font-bold text-xs text-slate-800 block">Import From Classmate</span>
              <span className="text-[11px] text-slate-500">Load bundle into local database</span>
            </div>
            <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs shadow-2xs transition-colors cursor-pointer shrink-0">
              <Upload className="w-3.5 h-3.5 text-emerald-800" />
              <span>Import File</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
