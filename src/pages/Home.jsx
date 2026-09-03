import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Award,
  BookOpen,
  PenTool,
  ArrowRight,
  CheckCircle2,
  HardDrive,
  Sparkles,
  TrendingUp,
  Clock
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { useOfflineStatus } from '../hooks/useOfflineStatus';
import { adaptiveEngine } from '../services/adaptiveEngine';
import { offlineManager } from '../services/offlineManager';
import { getChapters } from '../data/curriculum';

export default function Home() {
  const { profile, progress, downloads } = useProgress();
  const { isOnline } = useOfflineStatus();
  const storageStats = offlineManager.getStorageStats();
  const recommendation = adaptiveEngine.getRecommendation();
  const topicStats = adaptiveEngine.getTopicAnalytics();

  // Compute overall progress
  const progressEntries = Object.values(progress);
  const totalCompleted = progressEntries.filter((p) => p.completed).length;
  const overallPercent = Math.min(
    100,
    Math.round(
      progressEntries.reduce((acc, curr) => acc + (curr.percent || 0), 0) /
        Math.max(1, progressEntries.length)
    ) || 72
  );

  // Active continuation lesson
  const continueLesson = {
    classId: profile.currentClass || 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Real Numbers',
    title: 'Real Numbers',
    subtitle: 'Divisibility, Fundamental Theorem of Arithmetic & Irrational Numbers',
    percent: progress['Class 10_Mathematics_Real Numbers']?.percent || 65,
  };

  const recentLessons = [
    { classId: 'Class 10', subjectId: 'Mathematics', chapterId: 'Polynomials', percent: 70, readTime: '20 min' },
    { classId: 'Class 10', subjectId: 'Science', chapterId: 'Chemical Reactions and Equations', percent: 100, readTime: '25 min' },
    { classId: 'Engineering', subjectId: 'Computer Science', chapterId: 'Data Structures', percent: 45, readTime: '30 min' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Offline Mode Banner when disconnected */}
      {!isOnline && (
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 flex items-center justify-between gap-3 text-amber-950 shadow-xs animate-fade-in">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-ping"></span>
            <div>
              <span className="font-bold text-sm block">You are currently in Offline Mode</span>
              <span className="text-xs text-amber-800">
                All downloaded lessons, visual interactives, and practice quizzes remain fully functional without internet.
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-bold">
            {storageStats.totalItems} Lessons Cached
          </span>
        </div>
      )}

      {/* Hero Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#12432d] via-[#164e32] to-[#0c3120] text-white rounded-3xl p-6 sm:p-10 shadow-lg">
        {/* Subtle decorative geometry matching brand roof motif */}
        <div className="absolute right-[-20px] top-[-30px] opacity-10 pointer-events-none hidden md:block">
          <svg width="340" height="280" viewBox="0 0 100 80" fill="none">
            <path d="M12 45 L50 12 L88 45" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
            <path d="M26 47 L50 26 L74 47" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold mb-4 border border-white/10">
            <span>WELCOME BACK 👋</span>
            <span>•</span>
            <span>{profile.currentClass}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-3">
            Learn smarter. <br />
            <span className="text-emerald-300">Grow stronger.</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base font-normal mb-6 leading-relaxed">
            Personalized offline-first education designed for students in every village, town, and college. Master your curriculum without internet barriers.
          </p>

          {/* Key Metric Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs font-semibold">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{profile.streakDays} Day Learning Streak</span>
            </div>
            <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs font-semibold">
              <Award className="w-4 h-4 text-emerald-300" />
              <span>{topicStats.totalSolved} Questions Solved</span>
            </div>
            <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs font-semibold">
              <HardDrive className="w-4 h-4 text-sky-300" />
              <span>{storageStats.totalMB} MB Offline Storage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continuation & Overall Progress Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Learning Featured Card (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Continue Learning
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                {continueLesson.subjectId}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {continueLesson.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6 leading-relaxed">
              {continueLesson.subtitle}
            </p>

            {/* Progress status bar */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Chapter Progress</span>
                <span className="text-emerald-700">{continueLesson.percent}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-emerald-700 h-full rounded-full transition-all duration-500"
                  style={{ width: `${continueLesson.percent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-medium">
              Next up: Euclid's Division Lemma & Quick Check
            </span>
            <Link
              to={`/learn/${encodeURIComponent(continueLesson.classId)}/${encodeURIComponent(continueLesson.subjectId)}/${encodeURIComponent(continueLesson.chapterId)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <span>Resume Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Overall Progress Summary Card (1 col) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Overall Progress
              </span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                Active Term
              </span>
            </div>

            <div className="flex items-center justify-center my-4">
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="40"
                    stroke="#f1f5f9" strokeWidth="10" fill="transparent"
                  />
                  <circle
                    cx="50" cy="50" r="40"
                    stroke="#12432d" strokeWidth="10" fill="transparent"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 * (1 - overallPercent / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-black text-slate-900 font-mono">
                    {overallPercent}%
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">
                    Completed
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs border-t border-slate-100 pt-3 text-slate-600 font-medium">
              <div className="flex justify-between">
                <span>Chapters Completed:</span>
                <span className="font-bold text-slate-900">{totalCompleted} Chapters</span>
              </div>
              <div className="flex justify-between">
                <span>Practice Accuracy:</span>
                <span className="font-bold text-emerald-700">{topicStats.overallAccuracy}%</span>
              </div>
              <div className="flex justify-between">
                <span>Current Difficulty:</span>
                <span className="font-bold text-amber-700">Adaptive (Medium)</span>
              </div>
            </div>
          </div>

          <Link
            to="/progress"
            className="mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 transition-colors"
          >
            <span>View Full Analytics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Adaptive Recommendation Callout */}
      {recommendation && (
        <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  {recommendation.badge}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {recommendation.title}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                {recommendation.reason}
              </p>
            </div>
          </div>

          <Link
            to={`/practice?class=${encodeURIComponent(profile.currentClass)}&subject=Mathematics`}
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs transition-all shrink-0"
          >
            {recommendation.actionLabel}
          </Link>
        </div>
      )}

      {/* Quick Access Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/learn"
          className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Curriculum & Lessons</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Browse Class 6-12, Science, Mathematics & Engineering
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/practice"
          className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Practice Question Bank</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Adaptive quizzes from Easy to Hard with instant step-by-step solutions
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* Recently Studied Lessons */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-900 text-lg">Recently Studied Lessons</h3>
          <Link to="/learn" className="text-xs font-bold text-emerald-800 hover:underline">
            View All Chapters
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recentLessons.map((item, idx) => (
            <Link
              key={idx}
              to={`/learn/${encodeURIComponent(item.classId)}/${encodeURIComponent(item.subjectId)}/${encodeURIComponent(item.chapterId)}`}
              className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
                  <span>{item.classId}</span>
                  <span className="text-emerald-800 font-bold">{item.subjectId}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 leading-snug mb-3">
                  {item.chapterId}
                </h4>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.readTime}
                </span>
                <span className="font-bold text-emerald-700">{item.percent}% complete</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
