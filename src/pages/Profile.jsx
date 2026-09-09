import React, { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import { storageService } from '../services/storageService';
import { offlineManager } from '../services/offlineManager';
import { adaptiveEngine } from '../services/adaptiveEngine';
import {
  User,
  HardDrive,
  Globe,
  Trash2,
  RotateCcw,
  CheckCircle2,
  Shield,
  Award,
  Flame,
  BookOpen,
  Save,
  Download,
  Database,
  Upload
} from 'lucide-react';

export default function Profile() {
  const { profile, downloads, updateProfile } = useProgress();
  const [formData, setFormData] = useState({ ...profile });
  const [savedMessage, setSavedMessage] = useState(false);

  const storageStats = offlineManager.getStorageStats();
  const topicStats = adaptiveEngine.getTopicAnalytics();
  const progressMap = storageService.getAllProgress();
  const completedLessonsCount = Object.values(progressMap).filter((p) => p.completed).length;

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const handleClearDownloads = () => {
    if (window.confirm('Are you sure you want to clear all offline cached lessons from device storage?')) {
      storageService.clearAllDownloads();
    }
  };

  const handleResetProgress = () => {
    if (window.confirm('WARNING: This will reset all your lesson completions and quiz scores on this device. Continue?')) {
      storageService.resetAllData();
    }
  };

  const handleExportBackup = () => {
    const data = {
      profile,
      progress: progressMap,
      practice: storageService.getPracticeHistory(),
      exportedAt: new Date().toISOString(),
      platform: 'RuraLearn'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ruralearn_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.profile) updateProfile(parsed.profile);
        alert('Learning backup successfully imported!');
      } catch (err) {
        alert('Invalid backup file format.');
      }
    };
    reader.readAsText(file);
  };

  const downloadList = Object.entries(downloads);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
          <HardDrive className="w-3.5 h-3.5" />
          <span>Local Device Storage & Settings</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Device Data & Preferences
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          RuraLearn operates 100% offline. All your completed lessons, test scores, and roadmaps are stored locally on this device.
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-20 h-20 rounded-3xl bg-[#12432d] text-white font-black text-3xl flex items-center justify-center shadow-md shrink-0">
          {(formData.name || 'S').charAt(0)}
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{profile.name || 'Self-Directed Learner'}</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                  Local Device Profile
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Focus: {profile.currentClass || 'General Studies'}</p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100 text-center sm:text-left">
            <div>
              <span className="text-[11px] text-slate-400 font-semibold block">Streak</span>
              <span className="text-lg font-black text-amber-600 flex items-center justify-center sm:justify-start gap-1">
                <Flame className="w-4 h-4" /> {profile.streakDays} Days
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold block">Chapters Finished</span>
              <span className="text-lg font-black text-emerald-800 flex items-center justify-center sm:justify-start gap-1">
                <BookOpen className="w-4 h-4" /> {completedLessonsCount}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold block">Questions Solved</span>
              <span className="text-lg font-black text-blue-700 flex items-center justify-center sm:justify-start gap-1">
                <Award className="w-4 h-4" /> {topicStats.totalSolved}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold block">Offline Cache</span>
              <span className="text-lg font-black text-slate-800 flex items-center justify-center sm:justify-start gap-1">
                <HardDrive className="w-4 h-4" /> {storageStats.totalMB} MB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Student Settings Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-800" />
            <h2 className="text-lg font-black text-slate-900">Student Profile & Goal Settings</h2>
          </div>
          {savedMessage && (
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 animate-fade-in flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Saved to Device!
            </span>
          )}
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Learner Display Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Current Primary Learning Track
              </label>
              <select
                value={formData.currentClass}
                onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              >
                <option value="Class 6">Class 6 (Middle School)</option>
                <option value="Class 7">Class 7 (Middle School)</option>
                <option value="Class 8">Class 8 (Middle School)</option>
                <option value="Class 9">Class 9 (High School)</option>
                <option value="Class 10">Class 10 (Secondary Board)</option>
                <option value="Class 11">Class 11 (Higher Secondary)</option>
                <option value="Class 12">Class 12 (Senior Board)</option>
                <option value="Engineering">Engineering (4-Year Degree)</option>
                <option value="Vocational Skills">Practical Vocational Skills</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#12432d] hover:bg-[#1b5e3f] text-white font-bold text-xs shadow-sm transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Update Preferences</span>
            </button>
          </div>
        </form>
      </div>

      {/* Offline Storage & Cache Manager */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-800" />
            <h2 className="text-lg font-black text-slate-900">Offline Storage & Cache Manager</h2>
          </div>
          <span className="text-xs font-bold text-slate-500">
            {downloadList.length} Cached Lessons
          </span>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm text-slate-800">Browser IndexedDB Storage Status</div>
            <div className="text-xs text-slate-500 mt-0.5">
              {storageStats.totalMB} MB allocated • {storageStats.totalItems} textbook chapters and interactive widgets stored offline.
            </div>
          </div>
          <button
            onClick={handleClearDownloads}
            disabled={downloadList.length === 0}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-red-50 hover:text-red-700 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Downloaded Cache</span>
          </button>
        </div>

        {/* Data Backup & Migration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <button
            onClick={handleExportBackup}
            className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/20 text-left transition-all flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-800">Export Progress Backup</div>
              <div className="text-[11px] text-slate-500">Save a JSON file to transfer to another device</div>
            </div>
          </button>

          <label className="p-4 rounded-2xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/20 text-left transition-all flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-800">Import Progress Backup</div>
              <div className="text-[11px] text-slate-500">Restore study data from an exported file</div>
            </div>
            <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
          </label>
        </div>

        {/* Danger Zone */}
        <div className="border-t border-slate-100 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-red-700 uppercase tracking-wider">Danger Zone</div>
              <div className="text-xs text-slate-500 mt-0.5">Reset all local quiz records, scores, and chapter progress.</div>
            </div>
            <button
              onClick={handleResetProgress}
              className="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Learning Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Guarantee Note */}
      <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3">
        <Shield className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block">100% Client-Side Privacy Guarantee</span>
          <span>RuraLearn collects zero telemetry, tracking scripts, or personal data. Everything runs inside your device&apos;s browser.</span>
        </div>
      </div>
    </div>
  );
}
