import React, { useState } from 'react';
import { 
  ENGINEERING_YEARS, 
  PROGRAMMING_PIPELINE_STAGES,
  PROGRAMMING_LANGUAGES_GUIDE, 
  DSA_ROADMAP_STEPS, 
  ENGINEERING_PROJECT_ROADMAP, 
  GIT_GITHUB_ROADMAP, 
  COMMUNICATION_ROADMAP, 
  ENGINEERING_STUDENT_PROBLEMS,
  REPUTABLE_LEARNING_PLATFORMS,
  ENGINEERING_CAREER_PATHS
} from '../data/engineeringRoadmaps.js';

export default function Engineering() {
  const [activeTab, setActiveTab] = useState('4year');
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedLangId, setSelectedLangId] = useState('cpp');
  const [selectedProjectTier, setSelectedProjectTier] = useState('beginner');
  const [problemSearch, setProblemSearch] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Local storage checklist for DSA topics or milestones
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ruralearn_engineering_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (id) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    try {
      localStorage.setItem('ruralearn_engineering_progress', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const tabs = [
    { id: '4year', label: '4-Year Journey', icon: '🎓' },
    { id: 'languages', label: 'Programming Guide', icon: '💻' },
    { id: 'dsa', label: 'DSA Roadmap', icon: '⚡' },
    { id: 'projects', label: 'Project Blueprints', icon: '🛠️' },
    { id: 'git', label: 'Git & GitHub', icon: '🐙' },
    { id: 'communication', label: 'English & Interviews', icon: '🎙️' },
    { id: 'problems', label: 'Student Problems', icon: '💡' },
    { id: 'careers', label: 'Career Paths & Platforms', icon: '🚀' }
  ];

  const currentLang = (PROGRAMMING_LANGUAGES_GUIDE || []).find(l => l.id === selectedLangId) || PROGRAMMING_LANGUAGES_GUIDE[0] || {};
  const currentProjects = (ENGINEERING_PROJECT_ROADMAP && ENGINEERING_PROJECT_ROADMAP[selectedProjectTier]) || [];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 transition-colors py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-r from-[#12432d] via-[#1b5e3f] to-[#0d3121] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl mb-6 sm:mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3 sm:mb-4">
              🏛️ Industry-Ready Engineering Portal • 100% Free & Open Access
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 sm:mb-3">
              Engineering & College Mastery Blueprint
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              A complete, practical roadmap designed for tier-2/3 college and rural students to master computational thinking, DSA, real-world projects, Git, English communication, and placement preparation without expensive coaching.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-emerald-200">
              <span className="flex items-center gap-1">💾 Progress saved on this device</span>
              <span>•</span>
              <span className="flex items-center gap-1">🌐 100% Offline Accessible</span>
              <span>•</span>
              <span className="flex items-center gap-1">🚀 Zero Login Required</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Menu (Horizontally scrollable on mobile) */}
        <div className="sticky top-16 z-20 bg-neutral-50 dark:bg-neutral-900 pt-1 pb-3 sm:pb-4">
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 p-1.5 bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-xs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#12432d] text-white shadow-md'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: 4-YEAR JOURNEY */}
        {/* ========================================================================= */}
        {activeTab === '4year' && (
          <div className="space-y-6 animate-fade-in">
            {/* Year Selector Pills */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
              {(ENGINEERING_YEARS || []).map((yr, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedYear(idx)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                    selectedYear === idx
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {yr.year}: {yr.title}
                </button>
              ))}
            </div>

            {(() => {
              const currentYr = (ENGINEERING_YEARS || [])[selectedYear] || ENGINEERING_YEARS[0] || {};
              return (
                <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-xs space-y-6">
                  <div className="border-b border-neutral-200 dark:border-neutral-700 pb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {currentYr.year} Focus Strategy
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1">
                      {currentYr.title}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {currentYr.focus}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center gap-2">
                      <span>🎯</span> Actionable Milestones Checklist
                    </h3>

                    <div className="space-y-3 sm:space-y-4">
                      {(currentYr.milestones || []).map((m, idx) => {
                        const checkId = `yr_${selectedYear}_milestone_${idx}`;
                        const isDone = !!checkedItems[checkId];
                        return (
                          <div 
                            key={idx}
                            className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all ${
                              isDone 
                                ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800' 
                                : 'bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-700/80 hover:border-emerald-300'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="checkbox"
                                id={checkId}
                                checked={isDone}
                                onChange={() => toggleCheck(checkId)}
                                className="mt-1 h-5 w-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                              />
                              <div className="flex-1">
                                <label htmlFor={checkId} className="font-bold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base cursor-pointer">
                                  {m.title}
                                </label>
                                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mt-1 leading-relaxed">
                                  {m.desc}
                                </p>
                                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                                  <strong>Action:</strong> {m.action}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PROGRAMMING GUIDE */}
        {/* ========================================================================= */}
        {activeTab === 'languages' && (
          <div className="space-y-6 animate-fade-in">
            {/* Visual Step-by-Step Learning Pipeline */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200 dark:border-neutral-700 shadow-xs">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Universal Learning Architecture</span>
                <h2 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white mt-0.5">
                  Complete Programming Mastery Pipeline
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Follow this systematic path from raw logic to full-stack projects and technical interviews.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {(PROGRAMMING_PIPELINE_STAGES || []).map((stage) => (
                  <div key={stage.step} className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-xl border border-neutral-200 dark:border-neutral-700/70 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                        Stage {stage.step}
                      </span>
                      <h4 className="font-bold text-xs text-neutral-900 dark:text-white mt-1.5 leading-snug">{stage.title}</h4>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2">{stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Selector Buttons */}
            <div>
              <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2.5">
                Select Language Guide (Master ONE language first):
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {(PROGRAMMING_LANGUAGES_GUIDE || []).map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLangId(lang.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedLangId === lang.id
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 ring-2 ring-emerald-500 shadow-sm'
                        : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-emerald-400'
                    }`}
                  >
                    <div className="font-black text-sm text-neutral-900 dark:text-white">{lang.name}</div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium line-clamp-1">{lang.category}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Language In-Depth Guide */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 dark:border-neutral-700 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-neutral-900 dark:text-white">{currentLang.name}</h2>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300">
                      {currentLang.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400 mt-1">{currentLang.category}</p>
                </div>
              </div>

              {/* Start Recommendation */}
              <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 p-4 rounded-xl">
                <span className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300 block mb-1">🎯 Which Student Should Pick {currentLang.name}?</span>
                <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed">{currentLang.startRecommendation}</p>
              </div>

              {/* Why Learn & When to Move */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white mb-1.5">💡 Why Learn It?</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentLang.why}</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white mb-1.5">🚀 When to Move to the Next Stage?</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentLang.whenToMove}</p>
                </div>
              </div>

              {/* 3-Tier Topic Syllabus (Beginner, Intermediate, Advanced) */}
              <div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-3">📚 Detailed Topic-by-Topic Syllabus</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Beginner */}
                  <div className="bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">1. Beginner Topics</span>
                    <ul className="space-y-1.5 mt-2.5">
                      {(currentLang.beginnerTopics || []).map((t, i) => (
                        <li key={i} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Intermediate */}
                  <div className="bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase">2. Intermediate Topics</span>
                    <ul className="space-y-1.5 mt-2.5">
                      {(currentLang.intermediateTopics || []).map((t, i) => (
                        <li key={i} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold">✓</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advanced */}
                  <div className="bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <span className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase">3. Advanced Topics</span>
                    <ul className="space-y-1.5 mt-2.5">
                      {(currentLang.advancedTopics || []).map((t, i) => (
                        <li key={i} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-1.5">
                          <span className="text-purple-600 font-bold">✓</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project Ideas & Practice Platforms */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-bold text-xs uppercase text-neutral-800 dark:text-neutral-200 mb-2">🛠️ Recommended Starter Projects:</h4>
                  <ul className="space-y-1.5">
                    {(currentLang.projectIdeas || []).map((proj, i) => (
                      <li key={i} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                        <span className="text-emerald-500">▸</span> {proj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-900/40 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-bold text-xs uppercase text-neutral-800 dark:text-neutral-200 mb-2">🌐 Free Practice Platforms:</h4>
                  <div className="space-y-2">
                    {(currentLang.practicePlatforms || []).map((plat, i) => (
                      <a
                        key={i}
                        href={plat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs font-medium hover:border-emerald-500 transition-colors"
                      >
                        <span className="font-bold text-emerald-800 dark:text-emerald-300">{plat.name}</span>
                        <span className="text-[11px] text-neutral-400">{plat.note} ↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: DSA ROADMAP */}
        {/* ========================================================================= */}
        {activeTab === 'dsa' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200 dark:border-neutral-700 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Step-by-Step 15-Topic Mastery Path
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1">
                  Data Structures & Algorithms Roadmap
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                  Master every foundational data structure and algorithmic pattern required to crack software engineering interviews.
                </p>
              </div>
              <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-200 rounded-xl text-xs font-bold self-start sm:self-auto shrink-0">
                {Object.keys(checkedItems).filter(k => k.startsWith('dsa_') && checkedItems[k]).length} of {(DSA_ROADMAP_STEPS || []).length} Topics Completed
              </div>
            </div>

            {/* 15 DSA Steps */}
            <div className="space-y-4">
              {(DSA_ROADMAP_STEPS || []).map((step) => {
                const checkId = `dsa_step_${step.step}`;
                const isDone = !!checkedItems[checkId];
                return (
                  <div key={step.step} className={`bg-white dark:bg-neutral-800 rounded-2xl p-5 sm:p-6 border transition-all ${isDone ? 'border-emerald-400 dark:border-emerald-700 bg-emerald-50/30' : 'border-neutral-200 dark:border-neutral-700 shadow-xs'}`}>
                    <div className="flex items-start justify-between gap-3 border-b border-neutral-200 dark:border-neutral-700/60 pb-3 mb-4">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id={checkId}
                          checked={isDone}
                          onChange={() => toggleCheck(checkId)}
                          className="mt-1 h-5 w-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                        <div>
                          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                            Topic {step.step} of 15
                          </span>
                          <h3 className={`text-base sm:text-lg font-black ${isDone ? 'line-through text-neutral-400 dark:text-neutral-500' : 'text-neutral-900 dark:text-white'}`}>
                            {step.topic}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 rounded-md shrink-0">
                        Interview Weight: {step.interviewRelevance?.includes('100%') ? '🔥 Crucial' : '⭐ High'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-3">
                        <div>
                          <strong className="text-neutral-800 dark:text-neutral-200 block mb-1">📖 What it is:</strong>
                          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{step.whatItIs}</p>
                        </div>

                        <div>
                          <strong className="text-neutral-800 dark:text-neutral-200 block mb-1">🔑 What to Learn:</strong>
                          <ul className="space-y-1 text-neutral-600 dark:text-neutral-300">
                            {(step.whatToLearn || []).map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-emerald-600">✓</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700/60">
                          <strong className="text-emerald-800 dark:text-emerald-300 block mb-1">💡 Practice Approach:</strong>
                          <p className="text-neutral-600 dark:text-neutral-300">{step.practiceApproach}</p>
                        </div>

                        <div>
                          <strong className="text-neutral-800 dark:text-neutral-200 block mb-1">⚡ Example Standard Problems:</strong>
                          <div className="flex flex-wrap gap-1.5">
                            {(step.exampleProblems || []).map((prob, i) => (
                              <span key={i} className="px-2.5 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-700 dark:text-neutral-300 font-mono text-[11px]">
                                {prob}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                          <strong>Interview Relevance:</strong> {step.interviewRelevance}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: PROJECT BLUEPRINTS */}
        {/* ========================================================================= */}
        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            {/* Tier Selector Pills */}
            <div className="flex gap-2">
              {['beginner', 'intermediate', 'advanced'].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedProjectTier(tier)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm capitalize transition-all ${
                    selectedProjectTier === tier
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {tier} Projects
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {(currentProjects || []).map((proj, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200 dark:border-neutral-700 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">{proj.difficulty}</span>
                      <span className="text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded">
                        {proj.tech}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-neutral-900 dark:text-white mb-2">{proj.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">{proj.whatToBuild}</p>

                    <div className="space-y-3 text-xs">
                      <div>
                        <strong className="text-neutral-800 dark:text-neutral-200">🛠️ Step-by-Step Development Plan:</strong>
                        <ol className="space-y-1 mt-1.5 text-neutral-600 dark:text-neutral-400">
                          {(proj.plan || []).map((step, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-emerald-600 font-bold">▸</span> {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700/60">
                        <strong className="text-neutral-800 dark:text-neutral-200 block mb-0.5">🐙 How to Put on GitHub:</strong>
                        <p className="text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">{proj.githubTips}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 p-3.5 rounded-xl text-xs">
                    <strong className="text-emerald-800 dark:text-emerald-300 block mb-1">💬 How to Explain in an Interview:</strong>
                    <p className="text-emerald-950 dark:text-emerald-100">{proj.interviewAngle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: GIT & GITHUB */}
        {/* ========================================================================= */}
        {activeTab === 'git' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Version Control & Open Source Roadmap</span>
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1 mb-2">
                Git & GitHub Beginner-to-Pro Mastery
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-6">
                Learn the exact terminal commands, branch management workflows, and portfolio building strategies expected in professional software companies.
              </p>

              <div className="space-y-5">
                {(GIT_GITHUB_ROADMAP || []).map((step) => (
                  <div key={step.step} className="bg-neutral-50 dark:bg-neutral-900/50 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">
                        {step.step}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">{step.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-3.5 leading-relaxed">{step.concept}</p>

                    <div className="space-y-2 mb-3">
                      {(step.commands || []).map((c, i) => (
                        <div key={i} className="bg-neutral-900 text-neutral-100 p-3 rounded-xl font-mono text-xs shadow-inner">
                          <div className="text-emerald-400 font-bold">$ {c.cmd}</div>
                          {c.desc && <div className="text-neutral-400 text-[11px] font-sans mt-0.5">{c.desc}</div>}
                        </div>
                      ))}
                    </div>

                    {step.bestPractice && (
                      <div className="text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-100/50 dark:bg-emerald-900/30 p-2.5 rounded-lg">
                        <strong>💡 Best Practice:</strong> {step.bestPractice}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: ENGLISH & INTERVIEWS */}
        {/* ========================================================================= */}
        {activeTab === 'communication' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Technical English Roadmap */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200 dark:border-neutral-700 shadow-xs space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Communication Mastery</span>
                  <h2 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white mt-1">
                    Technical English & Fluency Training
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Overcome hesitation, speak fluent technical English, and ace group discussions without fear.
                  </p>
                </div>

                <div className="space-y-4">
                  {(COMMUNICATION_ROADMAP?.pillars || []).map((pil, i) => (
                    <div key={i} className="bg-neutral-50 dark:bg-neutral-900/50 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                      <h3 className="font-bold text-sm text-neutral-900 dark:text-white">{pil.title}</h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 mb-2">{pil.desc}</p>
                      <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400 mb-2.5">
                        {(pil.tips || []).map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500">▸</span> {tip}
                          </li>
                        ))}
                      </ul>
                      <div className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100/60 dark:bg-emerald-900/30 p-2 rounded-lg">
                        🎯 Daily Habit: {pil.habit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview Preparation Frameworks & Top Questions */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200 dark:border-neutral-700 shadow-xs space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Placement Preparation</span>
                  <h2 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white mt-1">
                    Interview Frameworks & Common Questions
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    How to answer standard HR & technical interview questions naturally instead of memorizing scripts.
                  </p>
                </div>

                {/* STAR Method Box */}
                <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl">
                  <h3 className="font-bold text-xs uppercase text-emerald-900 dark:text-emerald-200 mb-2">
                    🌟 The STAR Answering Framework (Situation • Task • Action • Result)
                  </h3>
                  <div className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                    {(COMMUNICATION_ROADMAP?.interviewFrameworks?.starMethod?.steps || []).map((st, i) => (
                      <div key={i}>
                        <strong className="text-emerald-800 dark:text-emerald-300">{st.letter}:</strong> {st.detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Questions */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400">Top Interview Questions & Strategies:</h3>
                  {(COMMUNICATION_ROADMAP?.interviewFrameworks?.topQuestions || []).map((qObj, i) => (
                    <div key={i} className="p-3.5 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs">
                      <div className="font-bold text-neutral-900 dark:text-white mb-1">❓ &quot;{qObj.question}&quot;</div>
                      <div className="text-emerald-700 dark:text-emerald-400 font-semibold mb-1">{qObj.strategy}</div>
                      <p className="text-neutral-600 dark:text-neutral-400 whitespace-pre-line text-[11px]">{qObj.exampleAnswer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 7: STUDENT PROBLEMS & SOLUTIONS */}
        {/* ========================================================================= */}
        {activeTab === 'problems' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200 dark:border-neutral-700 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">13 Common Engineering Struggles</span>
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-0.5">
                  Real Student Problems & Practical Solutions
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                  Honest, field-tested guidance for tutorial hell, consistency, placement fear, and imposter syndrome.
                </p>
              </div>

              <input
                type="text"
                placeholder="Search problem (e.g. tutorial hell, resume)..."
                value={problemSearch}
                onChange={(e) => setProblemSearch(e.target.value)}
                className="px-4 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
              />
            </div>

            <div className="space-y-3">
              {(ENGINEERING_STUDENT_PROBLEMS || [])
                .filter(p => !problemSearch || p.problem.toLowerCase().includes(problemSearch.toLowerCase()) || p.solution.toLowerCase().includes(problemSearch.toLowerCase()))
                .map((prob, idx) => {
                  const isOpen = activeAccordion === idx;
                  return (
                    <div key={prob.id || idx} className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-xs">
                      <button
                        onClick={() => setActiveAccordion(isOpen ? null : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm md:text-base text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-emerald-600">❓</span> {prob.problem}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 shrink-0 font-semibold">
                          {isOpen ? '▲ Close' : '▼ Read Solution'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 border-t border-neutral-100 dark:border-neutral-700/50 bg-neutral-50/50 dark:bg-neutral-900/30 text-xs sm:text-sm space-y-3">
                          <div className="mt-3">
                            <strong className="text-neutral-700 dark:text-neutral-300">Why it happens:</strong>
                            <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">{prob.whyItHappens}</p>
                          </div>

                          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 p-3.5 rounded-xl">
                            <strong className="text-emerald-900 dark:text-emerald-200">✅ Practical Solution:</strong>
                            <p className="text-emerald-950 dark:text-emerald-100 mt-1 leading-relaxed">{prob.solution}</p>
                          </div>

                          {prob.actions && (
                            <div>
                              <strong className="text-neutral-800 dark:text-neutral-200 block mb-1">🎯 Action Steps:</strong>
                              <ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
                                {prob.actions.map((act, i) => (
                                  <li key={i} className="flex items-center gap-1.5">
                                    <span className="text-emerald-600 font-bold">▸</span> {act}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 8: CAREER PATHS & LEARNING PLATFORMS */}
        {/* ========================================================================= */}
        {activeTab === 'careers' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">High-Growth Industry Roles</span>
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1 mb-2">
                Modern Software Engineering Career Paths
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-6">
                Understand specific industry roles, expected technical skills, salary bands, and recommended starter projects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(ENGINEERING_CAREER_PATHS || []).map((role, idx) => (
                  <div key={idx} className="bg-neutral-50 dark:bg-neutral-900/60 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">{role.title}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                          {role.demand}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3">{role.desc}</p>
                      
                      <div className="text-xs space-y-1.5 mb-3">
                        <div><strong className="text-neutral-700 dark:text-neutral-300">Skills:</strong> <span className="text-neutral-600 dark:text-neutral-400">{role.skills}</span></div>
                        <div><strong className="text-neutral-700 dark:text-neutral-300">Entry Package:</strong> <span className="text-emerald-600 dark:text-emerald-400 font-bold">{role.salary}</span></div>
                      </div>
                    </div>

                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700/60">
                      <strong>Starter Project:</strong> {role.starterProject}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reputable Learning Platforms */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Curated Resources</span>
              <h3 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white mt-1 mb-2">🌐 Reputable Free Learning Platforms</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-4">Clickable links to the world&apos;s best free platforms for college engineers.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {(REPUTABLE_LEARNING_PLATFORMS || []).map((plat, idx) => (
                  <a
                    key={idx}
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 hover:shadow-xs transition-all text-left group"
                  >
                    <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white group-hover:text-emerald-600 flex items-center justify-between">
                      <span>{plat.name}</span>
                      <span className="text-[10px] text-emerald-600">↗</span>
                    </div>
                    <div className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 mt-0.5">{plat.category}</div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">{plat.purpose}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
