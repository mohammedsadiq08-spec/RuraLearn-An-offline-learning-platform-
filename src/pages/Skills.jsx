import React, { useState } from 'react';
import { SKILL_CATEGORIES, SKILL_TRACKS, PERSONALIZED_ROADMAP_PRESETS } from '../data/skillRoadmaps.js';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [selectedTrackId, setSelectedTrackId] = useState(SKILL_TRACKS[0].id);
  
  // Custom Roadmap Generator state
  const [generatorGoal, setGeneratorGoal] = useState('Software Developer Career Path');
  const [userRole, setUserRole] = useState('college');
  const [customGoalTitle, setCustomGoalTitle] = useState('');
  const [customRoadmapGenerated, setCustomRoadmapGenerated] = useState(null);

  // Local checklist storage
  const [completedSkills, setCompletedSkills] = useState(() => {
    try {
      const saved = localStorage.getItem('ruralearn_skill_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleSkillItem = (id) => {
    const updated = { ...completedSkills, [id]: !completedSkills[id] };
    setCompletedSkills(updated);
    try {
      localStorage.setItem('ruralearn_skill_progress', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const filteredTracks = selectedCategory === 'All Skills'
    ? SKILL_TRACKS
    : SKILL_TRACKS.filter(t => t.category === selectedCategory);

  const currentTrack = SKILL_TRACKS.find(t => t.id === selectedTrackId) || SKILL_TRACKS[0];

  const handleGenerateRoadmap = () => {
    const preset = PERSONALIZED_ROADMAP_PRESETS.find(p => p.title === generatorGoal) || PERSONALIZED_ROADMAP_PRESETS[0];
    const generated = {
      title: customGoalTitle.trim() || preset.title,
      role: userRole,
      target: preset.target,
      steps: preset.steps
    };
    setCustomRoadmapGenerated(generated);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 transition-colors py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Hero */}
        <div className="bg-gradient-to-r from-[#12432d] via-[#1b5e3f] to-[#0d3121] text-white rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-4">
              🌟 Vocational & High-Yield Career Skills • 100% Free & Open
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Skill Development & Career Pathways
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-4">
              Master practical, income-generating skills through structured visual career journeys: 
              <span className="font-semibold text-emerald-300"> Interest → Skill → Practice → Projects → Portfolio → Career</span>.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200">
              <span>💾 Progress saved on this device</span>
              <span>•</span>
              <span>🌐 100% Offline Access</span>
              <span>•</span>
              <span>💼 Zero Cost or Subscriptions</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#12432d] text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Track Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTracks.map((track) => {
            const isSelected = track.id === selectedTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500 shadow-sm'
                    : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-emerald-400 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                      {track.category}
                    </span>
                    <span className="text-[11px] font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded">
                      {track.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-white mb-1.5">{track.title}</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2">{track.subtitle}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs">
                  <span className="font-medium text-emerald-700 dark:text-emerald-300">{track.badge}</span>
                  <span className="text-neutral-400 dark:text-neutral-500">View Roadmap →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Skill In-Depth Roadmap Details */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm space-y-8">
          {/* Header Info */}
          <div className="border-b border-neutral-200 dark:border-neutral-700 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {currentTrack.category} • {currentTrack.duration}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
                  {currentTrack.title}
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300">
                {currentTrack.badge}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
              {currentTrack.whyLearn}
            </p>
            <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              <strong>Prerequisites:</strong> {currentTrack.prerequisites}
            </div>
          </div>

          {/* Visual Career Journey (Interest -> Career) */}
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <span>🗺️</span> Complete Visual Learning Journey
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
              {currentTrack.visualJourney.map((step, idx) => (
                <div key={idx} className="bg-neutral-50 dark:bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 relative flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">{step.stage}</div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300">{step.detail}</p>
                  </div>
                  <div className="mt-2 text-[10px] text-neutral-400 text-right font-mono">Stage {idx + 1}/7</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Phase Curriculum & Capstone Projects */}
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <span>📚</span> Step-by-Step Learning Phases & Portfolio Projects
            </h3>
            <div className="space-y-4">
              {currentTrack.roadmap.map((phase, pIdx) => (
                <div key={pIdx} className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
                  <div className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white mb-3 flex items-center justify-between">
                    <span>{phase.tier}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase text-neutral-500 dark:text-neutral-400">Concepts to Master:</h4>
                      <div className="space-y-1.5">
                        {phase.topics.map((top, tIdx) => {
                          const id = `skill_${currentTrack.id}_${pIdx}_${tIdx}`;
                          const isDone = !!completedSkills[id];
                          return (
                            <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                              <input
                                type="checkbox"
                                id={id}
                                checked={isDone}
                                onChange={() => toggleSkillItem(id)}
                                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                              />
                              <label htmlFor={id} className={`cursor-pointer ${isDone ? 'line-through text-neutral-400 dark:text-neutral-500' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                {top}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700/70 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          🛠️ Phase Capstone Project
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium mt-1">
                          {phase.project}
                        </p>
                      </div>
                      <div className="mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
                        Upload to GitHub or showcase in your offline portfolio folder.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clickable External Free Resources */}
          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 p-5 rounded-xl">
            <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-200 mb-3 flex items-center gap-2">
              <span>🌐</span> Curated Free Online Resources & Documentation
            </h4>
            <div className="flex flex-wrap gap-3">
              {currentTrack.resources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-800 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 hover:shadow-md transition-all"
                >
                  <span>🔗 {res.name}</span>
                  <span className="text-[11px] text-neutral-500 font-normal">({res.type})</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Personalized Roadmap Generator Section */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 shadow-sm space-y-6">
          <div className="border-b border-neutral-200 dark:border-neutral-700 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              ⚡ Interactive Tool
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
              Personalized Learning Roadmap Generator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              Select your background and career ambition to create an actionable, customized study plan stored right on your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                1. Your Current Background
              </label>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-xs sm:text-sm"
              >
                <option value="school">School Student (Class 6 - 12)</option>
                <option value="college">Engineering / College Student</option>
                <option value="self">Independent / Self-Taught Learner</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                2. Target Goal Pathway
              </label>
              <select
                value={generatorGoal}
                onChange={(e) => setGeneratorGoal(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-xs sm:text-sm"
              >
                {PERSONALIZED_ROADMAP_PRESETS.map((p, idx) => (
                  <option key={idx} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                3. Custom Goal Title (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Crack TCS NQT in 6 Months"
                value={customGoalTitle}
                onChange={(e) => setCustomGoalTitle(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-xs sm:text-sm"
              />
            </div>
          </div>

          <button
            onClick={handleGenerateRoadmap}
            className="px-6 py-2.5 rounded-xl bg-[#12432d] hover:bg-[#1b5e3f] text-white font-bold text-sm shadow-md transition-all"
          >
            🚀 Generate My Personalized Roadmap
          </button>

          {/* Generated Result */}
          {customRoadmapGenerated && (
            <div className="mt-6 p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200 dark:border-emerald-800/60 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-300">Generated Pathway</span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{customRoadmapGenerated.title}</h3>
                </div>
                <span className="text-xs px-3 py-1 bg-white dark:bg-neutral-800 rounded-full text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-700 self-start sm:self-auto">
                  Target: {customRoadmapGenerated.target}
                </span>
              </div>

              <div className="space-y-2.5">
                {customRoadmapGenerated.steps.map((step, idx) => {
                  const checkId = `custom_road_${idx}`;
                  const isDone = !!completedSkills[checkId];
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700/60">
                      <input
                        type="checkbox"
                        id={checkId}
                        checked={isDone}
                        onChange={() => toggleSkillItem(checkId)}
                        className="mt-1 h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <div className="flex-1">
                        <label htmlFor={checkId} className={`text-xs sm:text-sm font-medium cursor-pointer ${isDone ? 'line-through text-neutral-400' : 'text-neutral-800 dark:text-neutral-200'}`}>
                          <strong className="text-emerald-700 dark:text-emerald-300 mr-1.5">Step {idx + 1}:</strong> {step}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
