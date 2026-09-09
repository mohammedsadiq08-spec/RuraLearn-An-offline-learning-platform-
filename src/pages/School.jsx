import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getClasses, getSubjects, getChapters } from '../data/curriculum/index.js';
import { useProgress } from '../hooks/useProgress.js';
import { storageService } from '../services/storageService.js';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Download,
  CheckCircle2,
  Clock,
  Award,
  AlertCircle,
  HelpCircle,
  Zap,
  TrendingUp,
  ArrowRight,
  Flame,
  Lightbulb,
  FileText
} from 'lucide-react';

export default function School() {
  const classes = getClasses().filter((c) => c.level === 'School');
  const [selectedClassId, setSelectedClassId] = useState('Class 10');
  const [selectedSubjectId, setSelectedSubjectId] = useState('Mathematics');
  const [activeTab, setActiveTab] = useState('syllabus'); // 'syllabus' | 'examprep' | 'quizzes'

  const { progress, downloads } = useProgress();

  const currentClass = classes.find((c) => c.id === selectedClassId) || classes[0];
  const subjects = getSubjects(selectedClassId);
  const chapters = getChapters(selectedClassId, selectedSubjectId);

  // Calculate local class completion
  const completedChaptersCount = chapters.filter((ch) => {
    const key = `${selectedClassId}_${selectedSubjectId}_${ch.id}`;
    return progress[key]?.completed;
  }).length;

  const subjectProgressPercent = chapters.length > 0
    ? Math.round((completedChaptersCount / chapters.length) * 100)
    : 0;

  const handleDownloadSubject = () => {
    storageService.downloadAllSubject(selectedClassId, selectedSubjectId, chapters);
  };

  // Sample School Interest Features
  const dailyChallenge = {
    class: selectedClassId,
    subject: selectedSubjectId,
    question: "Can two irrational numbers multiply to give a rational number?",
    answer: "Yes! For example, √2 × √2 = 2 (Rational), or (3 + √5)(3 - √5) = 9 - 5 = 4.",
    tip: "Always check conjugate pairs (a+√b)(a-√b) for standard board exam proofs!"
  };

  const didYouKnow = [
    {
      fact: "Euclid's division algorithm was formulated in 300 BCE and is still the exact logic used in modern computer encryption.",
      subject: "Mathematics"
    },
    {
      fact: "Photosynthesis produces about 176 billion tons of carbohydrates every year using just solar radiation, water, and air.",
      subject: "Science"
    },
    {
      fact: "The Indian Panchayati Raj system is recognized globally as the world's largest democratic grassroots governance model.",
      subject: "Social Science"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-[#12432d] to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold mb-3 border border-white/10">
            <GraduationCap className="w-4 h-4 text-emerald-300" />
            <span>Open Access • Class 6 to 12 Exam Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
            School Learning & Board Exam Mastery
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
            Comprehensive curriculum, chapter notes, worked formulas, visual models, and exam preparation for Class 6 through 12. 100% free and offline-ready.
          </p>

          {/* Quick Notice */}
          <div className="inline-flex items-center gap-2 text-[11px] bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-xl text-emerald-200 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>No account required • Your learning progress saves locally on this device</span>
          </div>
        </div>
      </div>

      {/* Class Selector Tabs (Class 6 to 12) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Your Grade / Class
          </span>
          <span className="text-xs font-semibold text-emerald-800">
            {currentClass.name} Selected ({currentClass.badge})
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {classes.map((cls) => {
            const isSelected = selectedClassId === cls.id;
            return (
              <button
                key={cls.id}
                onClick={() => {
                  setSelectedClassId(cls.id);
                  const newSubs = getSubjects(cls.id);
                  if (newSubs.length > 0) setSelectedSubjectId(newSubs[0].id);
                }}
                className={`py-3 px-2 rounded-2xl font-bold text-xs sm:text-sm border transition-all text-center flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600/30'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-300'
                }`}
              >
                <span>{cls.name}</span>
                <span className={`text-[10px] font-normal mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                  {cls.badge.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subjects Switcher */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {currentClass.name} Subjects
            </h2>
            <p className="text-xs text-slate-500">Select a subject to view syllabus, notes, and exam prep</p>
          </div>

          <button
            onClick={handleDownloadSubject}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors self-start sm:self-auto"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download All {selectedSubjectId} Chapters</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {subjects.map((sub) => {
            const isSelected = selectedSubjectId === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                    : 'bg-slate-50/80 text-slate-800 border-slate-200 hover:bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-xs sm:text-sm block truncate">{sub.name}</span>
                  <span className={`text-[10px] block ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {sub.totalChapters || chapters.length} Chapters
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Sub-Tabs: Full Syllabus vs Exam Preparation vs Quizzes */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'syllabus'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Full Syllabus & Chapters ({chapters.length})
        </button>
        <button
          onClick={() => setActiveTab('examprep')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'examprep'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Exam Preparation Dashboard
        </button>
        <button
          onClick={() => setActiveTab('quizzes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'quizzes'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Interactive Quizzes & Challenges
        </button>
      </div>

      {/* TAB 1: Full Syllabus Chapters Grid */}
      {activeTab === 'syllabus' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((ch, idx) => {
              const chapterKey = `${selectedClassId}_${selectedSubjectId}_${ch.id}`;
              const isCompleted = progress[chapterKey]?.completed;
              const isDownloaded = downloads[chapterKey];

              return (
                <div
                  key={ch.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-emerald-800 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                        Chapter {idx + 1}
                      </span>
                      <div className="flex items-center gap-2 text-xs">
                        {isDownloaded && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                            Offline ✓
                          </span>
                        )}
                        {isCompleted && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {ch.title}
                    </h3>
                    {ch.subtitle && (
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {ch.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5" /> {ch.readTime}
                    </span>

                    <Link
                      to={`/school/${encodeURIComponent(selectedClassId)}/${encodeURIComponent(selectedSubjectId)}/${encodeURIComponent(ch.id)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-2xs transition-all"
                    >
                      <span>Study Chapter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Exam Preparation Dashboard */}
      {activeTab === 'examprep' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {selectedClassId} {selectedSubjectId} Exam Readiness
                </h3>
                <p className="text-xs text-slate-500">
                  Track completed chapters, target weak questions, and attempt mock papers.
                </p>
              </div>
              <span className="text-xl font-black text-emerald-800 font-mono">
                {subjectProgressPercent}% Completed
              </span>
            </div>

            {/* Subject Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Curriculum Coverage</span>
                <span>{completedChaptersCount} of {chapters.length} Chapters Mastered</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${subjectProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Exam Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>High-Yield Revision</span>
                </div>
                <p className="text-xs text-slate-600">
                  Focus on proof of irrational numbers, chemical balancing, and grammar rules.
                </p>
                <Link to="/practice" className="text-xs font-bold text-amber-800 hover:underline inline-block pt-1">
                  Review High-Yield Questions &rarr;
                </Link>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <Award className="w-4 h-4 text-blue-700" />
                  <span>Timed Mock Test</span>
                </div>
                <p className="text-xs text-slate-600">
                  Test your exam speed with a 20-question randomized test under real timer limits.
                </p>
                <Link to="/practice" className="text-xs font-bold text-blue-800 hover:underline inline-block pt-1">
                  Start Timed Mock Exam &rarr;
                </Link>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2">
                <div className="flex items-center gap-2 text-purple-900 font-bold text-xs">
                  <FileText className="w-4 h-4 text-purple-700" />
                  <span>Common Exam Pitfalls</span>
                </div>
                <p className="text-xs text-slate-600">
                  Learn the top 10 mistakes students make in sign conventions and unit conversions.
                </p>
                <Link to="/practice" className="text-xs font-bold text-purple-800 hover:underline inline-block pt-1">
                  View Mistake Breakdown &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Quizzes & Daily Challenges */}
      {activeTab === 'quizzes' && (
        <div className="space-y-6 animate-fade-in">
          {/* Daily 5-Min Challenge Card */}
          <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-6 text-white shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-200">
                <Flame className="w-4 h-4 text-amber-400" /> Today's 5-Minute Brain Challenge
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-emerald-100">
                {dailyChallenge.class} • {dailyChallenge.subject}
              </span>
            </div>

            <h4 className="font-bold text-base sm:text-lg text-white">
              "{dailyChallenge.question}"
            </h4>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md text-xs text-emerald-100 space-y-2 border border-white/10">
              <span className="font-bold text-white block">Explanation & Reasoning:</span>
              <p>{dailyChallenge.answer}</p>
              <p className="text-amber-200 font-medium">💡 Exam Tip: {dailyChallenge.tip}</p>
            </div>

            <div className="flex justify-end">
              <Link
                to="/practice"
                className="px-4 py-2 rounded-xl bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-2xs"
              >
                Attempt 5-Question Quiz Arena &rarr;
              </Link>
            </div>
          </div>

          {/* Did You Know Educational Insights */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Did You Know? Quick Concept Insights</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {didYouKnow.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-[10px] uppercase text-emerald-800 px-2 py-0.5 rounded-md bg-emerald-100 inline-block">
                    {item.subject}
                  </span>
                  <p className="text-slate-700 leading-relaxed">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
