import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Download, CheckCircle2, BookOpen, Share2 } from 'lucide-react';

export default function LessonHeader({
  classId,
  subjectId,
  chapterTitle,
  subtitle,
  readTime = '20 min',
  isDownloaded,
  onToggleDownload,
}) {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-500">
          <Link
            to={`/learn?class=${encodeURIComponent(classId)}&subject=${encodeURIComponent(subjectId)}`}
            className="inline-flex items-center gap-1.5 font-medium text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {subjectId}</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 font-semibold text-slate-700">
              {classId}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
              {subjectId}
            </span>
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                LESSON
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-xs">
                <Clock className="w-3.5 h-3.5" />
                {readTime} read
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {chapterTitle}
            </h1>
            {subtitle && (
              <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Download for Offline Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onToggleDownload}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isDownloaded
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 shadow-xs'
              }`}
              title={isDownloaded ? "Available for offline studying" : "Save this lesson locally on device"}
            >
              {isDownloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Available Offline</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-slate-600" />
                  <span>Download for Offline</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
