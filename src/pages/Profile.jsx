import React, { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import { storageService } from '../services/storageService';
import { offlineManager } from '../services/offlineManager';
import { adaptiveEngine } from '../services/adaptiveEngine';
import {
  User,
  HardDrive,
  Globe,
  Bell,
  Trash2,
  RotateCcw,
  CheckCircle2,
  Shield,
  Award,
  Flame,
  BookOpen,
  Save,
  Download
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
    if (window.confirm('WARNING: This will reset all your lesson completions and quiz scores. Continue?')) {
      storageService.resetAllData();
    }
  };

  const downloadList = Object.entries(downloads);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
          <User className="w-3.5 h-3.5" />
          <span>Student Account & Device Settings</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Student Profile & Storage
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Manage your grade level, offline downloaded chapters, and accessibility options.
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-20 h-20 rounded-3xl bg-emerald-800 text-white font-black text-3xl flex items-center justify-center shadow-md shrink-0">
          {profile.name.charAt(0)}
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{profile.name}</h2>
              <p className="text-xs text-slate-500 font-medium">{profile.email} • Enrolled {profile.joinedDate}</p>
            </div>
            <span className="self-center sm:self-auto px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
              {profile.currentClass}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100 text-center sm:text-left">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Completed</span>
              <div className="text-xl font-black text-slate-900 font-mono">{completedLessonsCount} Lessons</div>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Solved</span>
              <div className="text-xl font-black text-blue-900 font-mono">{topicStats.totalSolved} Qs</div>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Accuracy</span>
              <div className="text-xl font-black text-emerald-700 font-mono">{topicStats.overallAccuracy}%</div>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Streak</span>
              <div className="text-xl font-black text-amber-600 font-mono">{profile.streakDays} Days 🔥</div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile & Preferences Form */}
      <form onSubmit={handleSaveProfile} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
          <User className="w-4 h-4 text-emerald-700" />
          <span>Edit Profile & Preferences</span>
        </h3>

        {savedMessage && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Profile and settings saved successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Full Student Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Current Class / Target</label>
            <select
              value={formData.currentClass}
              onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
            >
              <option value="Class 8">Class 8 (Middle School)</option>
              <option value="Class 9">Class 9 (Foundation)</option>
              <option value="Class 10">Class 10 (Secondary Board)</option>
              <option value="Class 11">Class 11 (Higher Secondary)</option>
              <option value="Class 12">Class 12 (Senior Secondary)</option>
              <option value="Engineering">Engineering & College</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Learning Goal</label>
            <input
              type="text"
              value={formData.targetGoal}
              onChange={(e) => setFormData({ ...formData, targetGoal: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Language Preference</label>
            <select
              value={formData.preferredLanguage}
              onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
            >
              <option value="en">English (Bilingual Notes)</option>
              <option value="hi">हिंदी (Hindi Support)</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-md hover:bg-emerald-900 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Preferences</span>
          </button>
        </div>
      </form>

      {/* Offline Storage Manager */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Offline Storage Manager</h3>
              <p className="text-xs text-slate-500">
                {storageStats.totalItems} Chapters Cached • Approx {storageStats.totalMB} MB used on this device
              </p>
            </div>
          </div>

          {downloadList.length > 0 && (
            <button
              onClick={handleClearDownloads}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 text-xs font-bold border border-red-200 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Offline Cache</span>
            </button>
          )}
        </div>

        {downloadList.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {downloadList.map(([key, item]) => (
              <div key={key} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-slate-800 block text-sm">{item.title}</span>
                  <span className="text-slate-500">{item.classId} • {item.subject}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-400 font-semibold">{item.sizeMB || 3.2} MB</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[10px]">
                    Available Offline ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-slate-400 text-xs">
            No lessons downloaded yet. Click "Download for Offline" on any chapter to study without internet.
          </div>
        )}
      </div>

      {/* Danger Zone: Reset Progress */}
      <div className="bg-red-50/50 rounded-3xl p-6 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-red-950 text-sm">Reset All Learning Progress</h4>
          <p className="text-xs text-red-800 mt-0.5">
            Erase all quiz scores, completed checks, and activity streaks to start fresh.
          </p>
        </div>

        <button
          onClick={handleResetProgress}
          className="px-4 py-2 rounded-xl bg-white border border-red-300 text-red-700 hover:bg-red-100 text-xs font-bold transition-colors shrink-0 shadow-2xs"
        >
          Reset Application Data
        </button>
      </div>
    </div>
  );
}
