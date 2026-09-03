import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/skillsData';
import {
  Sparkles,
  Code,
  Globe,
  Landmark,
  Cpu,
  MessageSquare,
  CheckCircle2,
  FolderGit2,
  BookOpen,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const ICON_MAP = {
  Code,
  Globe,
  Landmark,
  Cpu,
  MessageSquare,
};

export default function Skills() {
  const [selectedSkillId, setSelectedSkillId] = useState(SKILLS_DATA[0].id);
  const [selectedTier, setSelectedTier] = useState('Beginner'); // Beginner | Intermediate | Advanced

  const currentSkill = SKILLS_DATA.find((s) => s.id === selectedSkillId) || SKILLS_DATA[0];
  const currentMilestone = currentSkill.milestones.find((m) => m.level === selectedTier) || currentSkill.milestones[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Vocational & Modern Skills</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Practical Skills for Future Livelihoods
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Structured 5-step learning path: Concept → Example → Practice → Mini Project → Assessment.
        </p>
      </div>

      {/* Skill Track Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {SKILLS_DATA.map((skill) => {
          const isSelected = skill.id === selectedSkillId;
          const Icon = ICON_MAP[skill.icon] || Code;

          return (
            <button
              key={skill.id}
              onClick={() => { setSelectedSkillId(skill.id); setSelectedTier('Beginner'); }}
              className={`p-4 rounded-3xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-50/80 border-emerald-600 shadow-xs ring-2 ring-emerald-600/30'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                  {skill.title}
                </h3>
                <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">
                  {skill.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Skill Detail Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
              Active Skill Track
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentSkill.title}
            </h2>
            <p className="text-slate-600 text-sm mt-1">{currentSkill.description}</p>
          </div>

          {/* Tier Switcher (Beginner / Intermediate / Advanced) */}
          <div className="inline-flex rounded-2xl border border-slate-200 p-1.5 bg-slate-50 self-start sm:self-center">
            {['Beginner', 'Intermediate', 'Advanced'].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedTier === tier
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Step Learning Roadmap Workflow */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              {selectedTier} Milestone Roadmap ({currentMilestone.duration})
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
              Offline Ready Guide
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1: Concept */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center mb-3">
                  1
                </span>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                  Core Concept
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentMilestone.concept}
                </p>
              </div>
            </div>

            {/* Step 2: Example */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mb-3">
                  2
                </span>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                  Real-World Example
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentMilestone.example}
                </p>
              </div>
            </div>

            {/* Step 3: Practice */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center mb-3">
                  3
                </span>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                  Practical Task
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentMilestone.practice}
                </p>
              </div>
            </div>

            {/* Step 4: Mini Project */}
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mb-3">
                  4
                </span>
                <h4 className="font-bold text-emerald-950 text-xs uppercase tracking-wider mb-1">
                  Mini Project
                </h4>
                <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                  {currentMilestone.miniProject}
                </p>
              </div>
            </div>

            {/* Step 5: Assessment */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center mb-3">
                  5
                </span>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                  Assessment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentMilestone.assessment}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Callout Banner */}
        <div className="bg-gradient-to-r from-emerald-900 to-[#12432d] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <FolderGit2 className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">
                Ready to build {currentMilestone.miniProject}?
              </h4>
              <p className="text-xs text-emerald-200 mt-0.5">
                Download starter templates, documentation, and offline checklists.
              </p>
            </div>
          </div>

          <button
            onClick={() => alert(`Starter files for "${currentMilestone.miniProject}" have been packaged for offline study!`)}
            className="px-5 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors shrink-0"
          >
            Download Project Kit
          </button>
        </div>
      </div>
    </div>
  );
}
