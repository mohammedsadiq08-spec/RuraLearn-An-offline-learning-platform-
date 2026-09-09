import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Award,
  GraduationCap,
  Cpu,
  Sparkles,
  PenTool,
  ArrowRight,
  HardDrive,
  Clock,
  Share2,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { useOfflineStatus } from '../hooks/useOfflineStatus';
import { adaptiveEngine } from '../services/adaptiveEngine';
import { offlineManager } from '../services/offlineManager';
import InstallAppBanner from '../components/common/InstallAppBanner';
import OfflineShareModal from '../components/common/OfflineShareModal';

export default function Home() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { profile, progress } = useProgress();
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
    ) || 68
  );

  const primaryPillars = [
    {
      id: 'school',
      title: 'School Education',
      subtitle: 'Class 6 to Class 12',
      desc: 'Complete NCERT & State syllabus, structured chapter notes, step-by-step worked solutions, exam prep dashboard & daily challenges.',
      link: '/school',
      icon: GraduationCap,
      accent: 'from-emerald-700 to-emerald-900',
      badge: 'CBSE & State Board Prep',
      tags: ['Mathematics', 'Science / PCB / PCM', 'Social Studies', 'Worked Examples']
    },
    {
      id: 'engineering',
      title: 'Engineering & College',
      subtitle: '4-Year Industry Blueprint',
      desc: 'Year 1-4 roadmap, C++/Java/Python/JS guides, topic-by-topic DSA mastery, portfolio project blueprints, Git tutorial & 16 career paths.',
      link: '/engineering',
      icon: Cpu,
      accent: 'from-slate-800 to-emerald-950',
      badge: 'Industry-Ready Placements',
      tags: ['4-Year Guide', 'DSA Topics', 'Git & GitHub', '15+ Student Problems']
    },
    {
      id: 'skills',
      title: 'Skill Development',
      subtitle: 'Practical Vocational Paths',
      desc: 'Visual career journeys: AI & ML, Full-Stack Web, Stock Market & Financial Literacy, Professional English Speaking & Entrepreneurship.',
      link: '/skills',
      icon: Sparkles,
      accent: 'from-teal-800 to-slate-900',
      badge: 'High-Yield Income Skills',
      tags: ['AI / Machine Learning', 'Web Dev', 'Finance & Banking', 'Public Speaking']
    }
  ];

  return (
    <div className="space-y-8">
      {/* 100% Free Offline App Install Prompt */}
      <InstallAppBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 space-y-8">
        
        {/* Offline Mode Alert */}
        {!isOnline && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-2xl p-4 flex items-center justify-between gap-3 text-amber-950 dark:text-amber-200 shadow-xs animate-fade-in">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-ping"></span>
              <div>
                <span className="font-bold text-sm block">Offline Mode Active</span>
                <span className="text-xs text-amber-800 dark:text-amber-300">
                  All downloaded lessons, visual interactives, quizzes, and blueprints remain 100% functional without internet.
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 text-xs font-bold">
              {storageStats.totalItems} Cached Lessons
            </span>
          </div>
        )}

        {/* Hero Welcome Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#12432d] via-[#1b5e3f] to-[#0d3121] text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="absolute right-[-20px] top-[-30px] opacity-10 pointer-events-none hidden md:block">
            <svg width="340" height="280" viewBox="0 0 100 80" fill="none">
              <path d="M12 45 L50 12 L88 45" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
              <path d="M26 47 L50 26 L74 47" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4 border border-emerald-400/30">
              <span>🌟 100% FREE & OPEN ACCESS • ZERO LOGIN REQUIRED</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white mb-3">
              RuraLearn Platform <br />
              <span className="text-emerald-300">Education for Every Student</span>
            </h1>

            <p className="text-emerald-100 text-sm sm:text-base font-normal mb-6 leading-relaxed">
              Structured learning, exam preparation, and industry career roadmaps stored right on your device. From Class 6 school foundations to engineering and vocational skills.
            </p>

            {/* Quick Metrics & Device Save Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs font-semibold">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>{profile.streakDays} Day Streak</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs font-semibold">
                <Award className="w-4 h-4 text-emerald-300" />
                <span>{topicStats.totalSolved} Quizzes Solved</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs font-semibold">
                <HardDrive className="w-4 h-4 text-sky-300" />
                <span>Device Storage Active</span>
              </div>
              <button
                onClick={() => setIsShareOpen(true)}
                className="flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-400/40 text-xs font-bold text-emerald-200 transition-colors"
              >
                <Share2 className="w-4 h-4 text-emerald-300" />
                <span>Share Offline Bundle</span>
              </button>
            </div>
          </div>
        </div>

        {/* The 3 Primary Educational Pillars */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Core Educational Pillars
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Choose Your Learning Path
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                      {pillar.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed mb-4">
                      {pillar.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {pillar.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-slate-100 dark:bg-neutral-700 text-slate-600 dark:text-neutral-300 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={pillar.link}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#12432d] hover:bg-[#1b5e3f] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <span>Open {pillar.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Practice & Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/practice"
            className="group bg-white dark:bg-neutral-800 p-6 rounded-3xl border border-slate-200 dark:border-neutral-700 hover:border-emerald-600 hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center group-hover:bg-[#12432d] group-hover:text-white transition-colors">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">Practice Question Bank</h3>
                <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5">
                  Adaptive quizzes with instant step-by-step solutions and offline grading
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all shrink-0" />
          </Link>

          <Link
            to="/progress"
            className="group bg-white dark:bg-neutral-800 p-6 rounded-3xl border border-slate-200 dark:border-neutral-700 hover:border-emerald-600 hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center group-hover:bg-[#12432d] group-hover:text-white transition-colors">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">Device Progress & Analytics</h3>
                <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5">
                  Inspect completed chapters, test scores, and manage offline data cache
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all shrink-0" />
          </Link>
        </div>

      </div>

      {/* Peer-to-Peer Offline Bundle Sharing Modal */}
      <OfflineShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}
