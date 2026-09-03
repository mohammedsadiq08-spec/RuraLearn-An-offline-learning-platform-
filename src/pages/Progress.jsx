import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { adaptiveEngine } from '../services/adaptiveEngine';
import {
  BarChart2,
  TrendingUp,
  Flame,
  Award,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Calendar
} from 'lucide-react';

export default function Progress() {
  const { profile, progress } = useProgress();
  const topicStats = adaptiveEngine.getTopicAnalytics();

  // Subject completion metrics
  const subjectsData = [
    { name: 'Mathematics', percent: 80, color: 'bg-emerald-600', textColor: 'text-emerald-700', total: 8, done: 6 },
    { name: 'Science', percent: 65, color: 'bg-blue-600', textColor: 'text-blue-700', total: 8, done: 5 },
    { name: 'English', percent: 90, color: 'bg-amber-500', textColor: 'text-amber-700', total: 6, done: 5 },
    { name: 'Social Studies', percent: 50, color: 'bg-purple-600', textColor: 'text-purple-700', total: 4, done: 2 },
  ];

  const overallProgress = Math.round(
    subjectsData.reduce((acc, s) => acc + s.percent, 0) / subjectsData.length
  );

  // Simulated 14-day study activity map
  const activityDays = [
    { day: 'Mon', active: true },
    { day: 'Tue', active: true },
    { day: 'Wed', active: true },
    { day: 'Thu', active: true },
    { day: 'Fri', active: true },
    { day: 'Sat', active: true },
    { day: 'Sun', active: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>Student Analytics & Performance</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Learning Progress & Topic Mastery
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Track completed chapters, practice question accuracy, and target areas needing reinforcement.
        </p>
      </div>

      {/* Top Stats Overview Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Overall Progress</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-slate-900 font-mono">{overallProgress}%</div>
          <div className="text-[11px] text-slate-400 mt-1 font-medium">18 / 26 Chapters Studied</div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Practice Accuracy</span>
            <Award className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl font-black text-blue-900 font-mono">{topicStats.overallAccuracy}%</div>
          <div className="text-[11px] text-slate-400 mt-1 font-medium">{topicStats.totalSolved} Questions Solved</div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Active Streak</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-amber-600 font-mono">{profile.streakDays} Days</div>
          <div className="text-[11px] text-slate-400 mt-1 font-medium">Daily Target Achieved 🔥</div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Learning Level</span>
            <BookOpen className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900 truncate">{profile.currentClass}</div>
          <div className="text-[11px] text-slate-400 mt-1 font-medium">Secondary Board Prep</div>
        </div>
      </div>

      {/* Subject-Wise Progress Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
          <span>Subject Progress Overview</span>
          <span className="text-xs font-bold text-slate-500">Curriculum Coverage</span>
        </h2>

        <div className="space-y-6">
          {subjectsData.map((sub) => (
            <div key={sub.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-slate-800">{sub.name}</span>
                <div className="flex items-center gap-3 font-semibold text-xs">
                  <span className="text-slate-400">{sub.done} / {sub.total} Chapters</span>
                  <span className={sub.textColor}>{sub.percent}%</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${sub.color}`}
                  style={{ width: `${sub.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strong Topics vs Needs Practice (Adaptive Intelligence) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strong Topics Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-800 mb-4 pb-3 border-b border-slate-100">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-bold text-lg text-slate-900">Strong Topics</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              High accuracy (&gt;75%) on first attempts. Ready for advanced competitive tests.
            </p>

            <div className="space-y-3">
              {topicStats.strongTopics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between text-xs font-semibold"
                >
                  <span className="text-emerald-950 font-bold">{item.topic}</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    {item.accuracy}% Accuracy
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
            Great mastery! Continue consistent revision.
          </div>
        </div>

        {/* Needs Practice Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-700 mb-4 pb-3 border-b border-slate-100">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-bold text-lg text-slate-900">Needs Practice / Review</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Lower accuracy detected. System recommends practicing step-by-step questions.
            </p>

            <div className="space-y-3">
              {topicStats.weakTopics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between text-xs font-semibold"
                >
                  <div>
                    <span className="text-amber-950 font-bold block">{item.topic}</span>
                    <span className="text-[10px] text-amber-800 font-normal">
                      Recommended: Review formulas & step solutions
                    </span>
                  </div>
                  <Link
                    to="/practice"
                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 transition-colors shadow-2xs"
                  >
                    Practice
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            Adaptive engine will automatically provide reinforcement hints for these concepts.
          </div>
        </div>
      </div>
    </div>
  );
}
