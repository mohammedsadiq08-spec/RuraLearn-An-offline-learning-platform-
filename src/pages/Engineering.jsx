import React, { useState, useEffect } from 'react';
import { 
  ENGINEERING_YEARS, 
  PROGRAMMING_LANGUAGES_GUIDE, 
  DSA_ROADMAP_STEPS, 
  ENGINEERING_PROJECT_ROADMAP, 
  REPUTABLE_LEARNING_PLATFORMS, 
  GIT_GITHUB_ROADMAP, 
  COMMUNICATION_ROADMAP, 
  INTERVIEW_PREP_GUIDE, 
  ENGINEERING_STUDENT_PROBLEMS, 
  ENGINEERING_CAREER_PATHS 
} from '../data/engineeringRoadmaps.js';

export default function Engineering() {
  const [activeTab, setActiveTab] = useState('4year');
  const [selectedLang, setSelectedLang] = useState('cpp');
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedProjectTier, setSelectedProjectTier] = useState('intermediate');
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
    { id: 'problems', label: '15+ Student Problems', icon: '💡' },
    { id: 'careers', label: '16 Career Paths', icon: '🚀' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 transition-colors py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#12432d] via-[#1b5e3f] to-[#0d3121] text-white rounded-2xl p-6 sm:p-10 shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-4">
              🏛️ Industry-Ready College Portal • 100% Free & Open Access
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Engineering & College Mastery Blueprint
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-4">
              A comprehensive 4-year roadmap designed for tier-2/3 college and rural students to master software development, DSA, open source, communication, and crack top industry tech roles without expensive coaching.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200">
              <span className="flex items-center gap-1">💾 Progress saved on this device</span>
              <span>•</span>
              <span className="flex items-center gap-1">🌐 100% Offline Access</span>
              <span>•</span>
              <span className="flex items-center gap-1">📚 Zero Login Required</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-all ${
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

        {/* TAB 1: 4-YEAR JOURNEY */}
        {activeTab === '4year' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {ENGINEERING_YEARS.map((yr, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedYear(idx)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    selectedYear === idx
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {yr.year}: {yr.title}
                </button>
              ))}
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <div className="border-b border-neutral-200 dark:border-neutral-700 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {ENGINEERING_YEARS[selectedYear].year} Strategy
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                  {ENGINEERING_YEARS[selectedYear].title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">
                  {ENGINEERING_YEARS[selectedYear].focus}
                </p>
              </div>

              <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center gap-2">
                <span>🎯</span> Year Milestones & Action Items
              </h3>

              <div className="space-y-4">
                {ENGINEERING_YEARS[selectedYear].milestones.map((m, idx) => {
                  const checkId = `yr_${selectedYear}_milestone_${idx}`;
                  const isDone = !!checkedItems[checkId];
                  return (
                    <div 
                      key={idx}
                      className={`p-4 sm:p-5 rounded-xl border transition-all ${
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
                          <label htmlFor={checkId} className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base cursor-pointer">
                            {m.title}
                          </label>
                          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mt-1 leading-relaxed">
                            {m.desc}
                          </p>
                          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
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
        )}

        {/* TAB 2: PROGRAMMING LANGUAGES GUIDE */}
        {activeTab === 'languages' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PROGRAMMING_LANGUAGES_GUIDE.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLang(lang.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedLang === lang.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500'
                      : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-emerald-400'
                  }`}
                >
                  <div className="font-bold text-sm text-neutral-900 dark:text-white">{lang.name}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">{lang.role}</div>
                </button>
              ))}
            </div>

            {(() => {
              const lang = PROGRAMMING_LANGUAGES_GUIDE.find(l => l.id === selectedLang) || PROGRAMMING_LANGUAGES_GUIDE[0];
              return (
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-700 pb-5">
                    <div>
                      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{lang.name}</h2>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">{lang.role}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 self-start sm:self-auto">
                      Best For: {lang.bestFor}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-neutral-50 dark:bg-neutral-900/60 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700/70">
                        <h4 className="font-bold text-sm text-neutral-900 dark:text-white mb-2">💡 Why Learn {lang.name}?</h4>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{lang.whyLearn}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-neutral-900 dark:text-white mb-2.5">🔑 Core Concepts to Master:</h4>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {lang.coreConcepts.map((c, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900/40 p-2 rounded-lg">
                              <span className="text-emerald-500">✔</span> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-sm text-neutral-900 dark:text-white mb-2.5">🗺️ Learning Pathway:</h4>
                        <ol className="space-y-2">
                          {lang.roadmap.map((step, i) => (
                            <li key={i} className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/40 p-2.5 rounded-lg flex items-start gap-2.5">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">{i + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 p-4 rounded-xl">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2">
                          🌐 Free Clickable Study Resources
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {lang.resources.map((res, i) => (
                            <a
                              key={i}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-neutral-800 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 transition-colors shadow-sm"
                            >
                              <span>🔗</span> {res.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 3: DSA MASTERY ROADMAP */}
        {activeTab === 'dsa' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Structured Data Structures & Algorithms Roadmap</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">Master all fundamental data structures and algorithmic patterns step-by-step.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 rounded-full">
                  {Object.keys(checkedItems).filter(k => k.startsWith('dsa_') && checkedItems[k]).length} Topics Completed
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {DSA_ROADMAP_STEPS.map((step) => (
                <div key={step.step} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 dark:border-neutral-700 pb-3 mb-4">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Step {step.step}</span>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{step.title}</h3>
                    </div>
                    <span className="text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 rounded-md self-start sm:self-auto">
                      Target: {step.problemCount}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400 mb-2">Core Topics</h4>
                      <div className="space-y-2">
                        {step.topics.map((top, idx) => {
                          const id = `dsa_${step.step}_${idx}`;
                          const isDone = !!checkedItems[id];
                          return (
                            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                              <input
                                type="checkbox"
                                id={id}
                                checked={isDone}
                                onChange={() => toggleCheck(id)}
                                className="h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                              />
                              <label htmlFor={id} className={`cursor-pointer ${isDone ? 'line-through text-neutral-400 dark:text-neutral-500' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                {top}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400 mb-2">Key Problem Patterns</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                        {step.keyPatterns.map((pat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500">▸</span> {pat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PROJECT BLUEPRINTS */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex gap-2 mb-4">
              {['beginner', 'intermediate', 'advanced'].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedProjectTier(tier)}
                  className={`px-5 py-2 rounded-xl font-bold text-sm capitalize transition-all ${
                    selectedProjectTier === tier
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {tier} Tier
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ENGINEERING_PROJECT_ROADMAP[selectedProjectTier]?.map((proj, idx) => (
                <div key={idx} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1.5">{proj.title}</h3>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">🛠️ Tech: {proj.stack}</p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-4">{proj.desc}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">Key Features:</span>
                        <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1 mt-1">
                          {proj.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="text-emerald-500">✓</span> {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-neutral-50 dark:bg-neutral-900/60 p-3 rounded-xl border border-neutral-200 dark:border-neutral-700/60">
                        <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">🐙 GitHub Structure:</span>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 font-mono">{proj.githubTips}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 p-3 rounded-xl">
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">💬 Interview Discussion Angle:</span>
                    <p className="text-xs text-emerald-950 dark:text-emerald-200 mt-0.5">{proj.interviewAngle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: GIT & GITHUB MASTERY */}
        {activeTab === 'git' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">Version Control & Open Source Guide</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">Learn the exact Git commands, branching workflows, and GitHub best practices required in tech companies.</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3">💻 Essential Git Commands</h3>
                  <div className="space-y-3">
                    {GIT_GITHUB_ROADMAP.commands.map((cmd, i) => (
                      <div key={i} className="bg-neutral-900 text-neutral-100 p-3.5 rounded-xl font-mono text-xs shadow-inner">
                        <div className="text-emerald-400 font-bold">$ {cmd.cmd}</div>
                        <div className="text-neutral-400 text-[11px] font-sans mt-1">{cmd.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3">🌿 Professional Branching Workflow</h3>
                    <div className="space-y-2">
                      {GIT_GITHUB_ROADMAP.workflows.map((wf, i) => (
                        <div key={i} className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl">
                          <span className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">{wf.step}</span>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">{wf.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3">✨ GitHub Profile & README Checklist</h3>
                    <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 p-4 rounded-xl space-y-2">
                      {GIT_GITHUB_ROADMAP.readmeChecklist.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                          <span className="text-emerald-600 font-bold">✔</span> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: ENGLISH & INTERVIEWS */}
        {activeTab === 'communication' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Communication Roadmap */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span>🎙️</span> Technical English & Communication
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Clear, confident communication is 50% of the hiring process. Here is how rural and tier-2/3 students can overcome fear and speak fluent technical English.
                </p>

                <div className="space-y-3">
                  {COMMUNICATION_ROADMAP.modules.map((mod, i) => (
                    <div key={i} className="bg-neutral-50 dark:bg-neutral-900/60 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                      <h4 className="font-bold text-sm text-neutral-900 dark:text-white">{mod.title}</h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1">{mod.tips}</p>
                      <div className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100/50 dark:bg-emerald-900/30 px-2.5 py-1 rounded inline-block">
                        🎯 Daily Habit: {mod.habit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview Preparation Guide */}
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span>💼</span> Placement & Interview Frameworks
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Step-by-step methodologies to answer behavioral and technical questions like top 1% candidates.
                </p>

                <div className="space-y-4">
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl">
                    <h3 className="font-bold text-sm text-emerald-900 dark:text-emerald-200 mb-1">🌟 The STAR Framework for Behavioral Questions</h3>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-2">Situation • Task • Action • Result</p>
                    <div className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <div><strong>S (Situation):</strong> Set the background and project context.</div>
                      <div><strong>T (Task):</strong> Explain what technical obstacle had to be solved.</div>
                      <div><strong>A (Action):</strong> Describe specific steps, algorithms, or tools YOU used.</div>
                      <div><strong>R (Result):</strong> Quantify the outcome (e.g., &quot;reduced latency by 35%&quot;).</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-xs uppercase text-neutral-500 dark:text-neutral-400">Interview Round Strategies:</h4>
                    {INTERVIEW_PREP_GUIDE.rounds.map((rnd, i) => (
                      <div key={i} className="p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs">
                        <span className="font-bold text-neutral-900 dark:text-white">{rnd.name}:</span>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">{rnd.strategy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: 15+ STUDENT PROBLEMS & SOLUTIONS */}
        {activeTab === 'problems' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Real Student Problems & Practical Solutions</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">Honest guidance for backlogs, poor college environment, branch changes, and career anxiety.</p>
              </div>
              <input
                type="text"
                placeholder="Search problem (e.g. backlogs, laptop)..."
                value={problemSearch}
                onChange={(e) => setProblemSearch(e.target.value)}
                className="px-4 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
              />
            </div>

            <div className="space-y-3">
              {ENGINEERING_STUDENT_PROBLEMS
                .filter(p => !problemSearch || p.problem.toLowerCase().includes(problemSearch.toLowerCase()) || p.solution.toLowerCase().includes(problemSearch.toLowerCase()))
                .map((prob, idx) => {
                  const isOpen = activeAccordion === idx;
                  return (
                    <div key={idx} className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm">
                      <button
                        onClick={() => setActiveAccordion(isOpen ? null : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-emerald-600">❓</span> {prob.problem}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 shrink-0">
                          {isOpen ? '▲ Close' : '▼ Read Solution'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 border-t border-neutral-100 dark:border-neutral-700/50 bg-neutral-50/50 dark:bg-neutral-900/30">
                          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mt-3">
                            {prob.solution}
                          </p>
                          {prob.actionItems && (
                            <div className="mt-3 bg-white dark:bg-neutral-800 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700">
                              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">✅ Action Steps:</span>
                              <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1 mt-1">
                                {prob.actionItems.map((act, i) => (
                                  <li key={i} className="flex items-center gap-1.5">
                                    <span>▸</span> {act}
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

        {/* TAB 8: 16 CAREER PATHS & LEARNING PLATFORMS */}
        {activeTab === 'careers' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">16 Modern High-Growth Tech Roles</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">Explore industry roles, what they actually do, key skills needed, and typical starting salary bands.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ENGINEERING_CAREER_PATHS.map((role, idx) => (
                  <div key={idx} className="bg-neutral-50 dark:bg-neutral-900/60 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">{role.title}</h3>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                          {role.demand}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3">{role.desc}</p>
                      
                      <div className="text-xs space-y-1 mb-3">
                        <div><strong className="text-neutral-700 dark:text-neutral-300">Required Skills:</strong> <span className="text-neutral-600 dark:text-neutral-400">{role.skills}</span></div>
                        <div><strong className="text-neutral-700 dark:text-neutral-300">Entry Package:</strong> <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{role.salary}</span></div>
                      </div>
                    </div>

                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 p-2 rounded-lg border border-neutral-200 dark:border-neutral-700/60">
                      <strong>Starter Project:</strong> {role.starterProject}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reputable Learning Platforms */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">🌐 Curated Reputable Learning Platforms</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-4">Clickable links to the world&apos;s best free and credible platforms for college engineers.</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {REPUTABLE_LEARNING_PLATFORMS.map((plat, idx) => (
                  <a
                    key={idx}
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 hover:shadow-sm transition-all text-center group"
                  >
                    <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white group-hover:text-emerald-600">{plat.name}</div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">{plat.category}</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Visit Platform ↗</div>
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
