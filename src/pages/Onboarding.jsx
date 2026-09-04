import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getClasses } from '../data/curriculum';
import Logo from '../components/common/Logo';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Target,
  Clock,
  Globe,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Onboarding() {
  const navigate = useNavigate();
  const { user, completeOnboarding } = useAuth();
  const classes = getClasses();

  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState(user?.currentClass || 'Class 10');
  const [targetGoal, setTargetGoal] = useState(user?.targetGoal || 'Board Exam Preparation & Coding Skills');
  const [language, setLanguage] = useState(user?.preferredLanguage || 'en');
  const [dailyMinutes, setDailyMinutes] = useState(30);

  const goals = [
    {
      id: 'board_prep',
      title: 'Board Exam Preparation & Syllabus',
      description: 'Master core concepts in Mathematics, Science, and Social Studies with high-yield revision notes.',
      icon: GraduationCap,
    },
    {
      id: 'engineering_coding',
      title: 'Computer Science, Coding & Engineering',
      description: 'Data Structures, Operating Systems, Database Systems, and Python Programming.',
      icon: Sparkles,
    },
    {
      id: 'vocational_skills',
      title: 'Vocational Skills & Practical Literacy',
      description: 'Web Development, Financial Literacy, Spoken English, and Career Preparation.',
      icon: Target,
    },
    {
      id: 'self_paced',
      title: 'General Offline Self-Study',
      description: 'Explore lessons and practice adaptive quizzes at your own natural pace.',
      icon: BookOpen,
    },
  ];

  const handleFinish = async () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });

    await completeOnboarding({
      currentClass: selectedClass,
      targetGoal: targetGoal,
      preferredLanguage: language,
      dailyTargetMinutes: dailyMinutes,
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 select-none">
      <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-fade-in">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <Logo size="default" />
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === num
                    ? 'bg-emerald-800 text-white ring-4 ring-emerald-100 shadow-xs'
                    : step > num
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {step > num ? '✓' : num}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 1: Select Class / Academic Grade */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Step 1 of 3
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Select Your Class or Learning Level
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                We will personalize your textbooks, formula sheets, and chapter recommendations accordingly.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {classes.map((cls) => {
                const isSelected = selectedClass === cls.id;
                return (
                  <button
                    key={cls.id}
                    onClick={() => setSelectedClass(cls.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                        : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-slate-900 text-sm block mb-0.5">
                        {cls.name}
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight">
                        {cls.badge}
                      </span>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-3 self-end" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <span>Continue to Goals</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Target Goal */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Step 2 of 3
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                What is Your Primary Study Goal?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Your dashboard adaptive algorithms will align with this focus.
              </p>
            </div>

            <div className="space-y-3">
              {goals.map((g) => {
                const isSelected = targetGoal === g.title;
                const Icon = g.icon;
                return (
                  <button
                    key={g.id}
                    onClick={() => setTargetGoal(g.title)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30 shadow-xs'
                        : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-bold text-slate-900 text-sm block">
                        {g.title}
                      </span>
                      <span className="text-xs text-slate-500 block leading-relaxed mt-0.5">
                        {g.description}
                      </span>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <span>Continue to Preferences</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Language & Daily Study Habit */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Step 3 of 3
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Language & Daily Study Target
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Set your preferred notes language and daily learning commitment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-2 block flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-700" />
                  <span>Language Format</span>
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`w-full p-3.5 rounded-2xl border text-left font-bold text-xs flex items-center justify-between ${
                      language === 'en'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-2 ring-emerald-600/30'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>English (Standard & Bilingual Notes)</span>
                    {language === 'en' && <CheckCircle2 className="w-4 h-4 text-emerald-700" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguage('hi')}
                    className={`w-full p-3.5 rounded-2xl border text-left font-bold text-xs flex items-center justify-between ${
                      language === 'hi'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-2 ring-emerald-600/30'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>हिंदी (Hindi Explanation Support)</span>
                    {language === 'hi' && <CheckCircle2 className="w-4 h-4 text-emerald-700" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 mb-2 block flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>Daily Study Habit Target</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[15, 30, 45, 60].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDailyMinutes(mins)}
                      className={`p-3 rounded-2xl border text-center font-bold text-xs transition-all ${
                        dailyMinutes === mins
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      {mins} mins / day
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs text-emerald-950 space-y-1">
              <span className="font-bold block">Your Learning Profile:</span>
              <div>Level: <strong>{selectedClass}</strong> • Goal: <strong>{targetGoal}</strong></div>
              <div>Daily Target: <strong>{dailyMinutes} minutes</strong> • Offline Storage: <strong>IndexedDB Ready</strong></div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Back
              </button>
              <button
                onClick={handleFinish}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <span>Launch My Dashboard</span>
                <Sparkles className="w-4 h-4 text-emerald-300" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
