import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import {
  getClasses,
  getSubjects,
  getChapters,
  getClassById,
  getSubjectById
} from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import { storageService } from '../services/storageService';
import {
  BookOpen,
  Calculator,
  Atom,
  Globe,
  Binary,
  Code,
  CheckCircle2,
  Download,
  Clock,
  Sparkles,
  ArrowRight,
  Eye
} from 'lucide-react';

const ICON_MAP = {
  Calculator,
  Atom,
  BookOpen,
  Globe,
  Binary,
  Code,
};

export default function Learn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { progress, downloads, toggleDownload } = useProgress();

  const classes = getClasses();

  // Selected Class (defaults to Class 10 or from query)
  const initialClass = searchParams.get('class') || 'Class 10';
  const [selectedClassId, setSelectedClassId] = useState(initialClass);

  const subjects = getSubjects(selectedClassId);
  const initialSubject = searchParams.get('subject') || (subjects[0]?.id || 'Mathematics');
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubject);

  // Sync state when URL params change
  useEffect(() => {
    const cls = searchParams.get('class');
    const sub = searchParams.get('subject');
    if (cls && cls !== selectedClassId) {
      setSelectedClassId(cls);
    }
    if (sub && sub !== selectedSubjectId) {
      setSelectedSubjectId(sub);
    }
  }, [searchParams]);

  const handleSelectClass = (clsId) => {
    setSelectedClassId(clsId);
    const newSubjects = getSubjects(clsId);
    const defaultSub = newSubjects[0]?.id || 'Mathematics';
    setSelectedSubjectId(defaultSub);
    setSearchParams({ class: clsId, subject: defaultSub });
  };

  const handleSelectSubject = (subId) => {
    setSelectedSubjectId(subId);
    setSearchParams({ class: selectedClassId, subject: subId });
  };

  const chapters = getChapters(selectedClassId, selectedSubjectId);
  const currentClassObj = getClassById(selectedClassId);
  const currentSubjectObj = getSubjectById(selectedClassId, selectedSubjectId);

  // Bulk download entire subject pack
  const handleDownloadAll = () => {
    storageService.downloadAllSubject(selectedClassId, selectedSubjectId, chapters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Hierarchy Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
          <span>Curriculum Hub</span>
          <span>•</span>
          <span>Learning Hierarchy</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Select Your Class & Subject
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Structured textbooks, verified formulas, and offline interactive lessons.
        </p>
      </div>

      {/* STEP 1: Class Selection Pills */}
      <div>
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 block">
          Step 1: Choose Class / Level
        </label>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {classes.map((cls) => {
            const isSelected = cls.id === selectedClassId;
            return (
              <button
                key={cls.id}
                onClick={() => handleSelectClass(cls.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{cls.name}</span>
                {cls.level === 'Higher Education' && (
                  <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.2 rounded">College</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Subject Selector Cards */}
      <div>
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 block">
          Step 2: Choose Subject
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {subjects.map((sub) => {
            const isSelected = sub.id === selectedSubjectId;
            const Icon = ICON_MAP[sub.icon] || BookOpen;

            return (
              <button
                key={sub.id}
                onClick={() => handleSelectSubject(sub.id)}
                className={`p-4 rounded-3xl border text-left transition-all flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-emerald-50/80 border-emerald-600 shadow-xs ring-2 ring-emerald-600/30'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {sub.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {sub.totalChapters} Chapters
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 3: Chapter List Header & Bulk Actions */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{selectedClassId}</span>
              <span>•</span>
              <span>{selectedSubjectId}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Chapters & Lessons ({chapters.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Select any chapter to study detailed educational content, visual diagrams, and take the Quick Check quiz.
            </p>
          </div>

          <button
            onClick={handleDownloadAll}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-colors shrink-0"
          >
            <Download className="w-4 h-4 text-emerald-700" />
            <span>Download All for Offline</span>
          </button>
        </div>

        {/* Chapter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {chapters.map((ch, index) => {
            const key = `${selectedClassId}_${selectedSubjectId}_${ch.title}`;
            const isDone = progress[key]?.completed;
            const percent = progress[key]?.percent || (isDone ? 100 : 0);
            const isDownloaded = Boolean(downloads[key]);

            return (
              <div
                key={ch.id || index}
                className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-600 hover:shadow-sm transition-all flex flex-col justify-between bg-slate-50/40 hover:bg-white group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {ch.hasVisuals && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          <Eye className="w-3 h-3" />
                          Interactive Visual
                        </span>
                      )}
                      {isDownloaded && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Offline
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-800 leading-snug">
                    {ch.title}
                  </h3>
                  {ch.subtitle && (
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {ch.subtitle}
                    </p>
                  )}
                </div>

                {/* Progress & Actions */}
                <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{ch.readTime}</span>
                    {percent > 0 && (
                      <span className="font-bold text-emerald-700 ml-1">
                        • {percent}% done
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDownload(selectedClassId, selectedSubjectId, ch.title, ch.title, 3.2);
                      }}
                      className="p-1.5 text-slate-400 hover:text-emerald-800 hover:bg-slate-100 rounded-lg transition-colors"
                      title={isDownloaded ? "Remove from offline cache" : "Download for offline"}
                    >
                      <Download className={`w-4 h-4 ${isDownloaded ? 'text-emerald-700' : ''}`} />
                    </button>

                    <Link
                      to={`/learn/${encodeURIComponent(selectedClassId)}/${encodeURIComponent(selectedSubjectId)}/${encodeURIComponent(ch.title)}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all active:scale-95"
                    >
                      <span>Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
