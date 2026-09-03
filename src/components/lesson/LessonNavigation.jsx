import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, CheckCircle2 } from 'lucide-react';

export default function LessonNavigation({
  classId,
  subjectId,
  prevChapter,
  nextChapter,
  isCompleted,
  onMarkComplete,
}) {
  return (
    <div className="my-10 pt-6 border-t border-slate-200">
      {/* Complete Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h4 className="text-base font-bold text-slate-900">Finished studying this chapter?</h4>
          <p className="text-xs text-slate-500">Record your progress in your offline student dashboard</p>
        </div>

        <button
          onClick={onMarkComplete}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all active:scale-95 ${
            isCompleted
              ? 'bg-emerald-700 text-white hover:bg-emerald-800'
              : 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow-lg'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{isCompleted ? 'Lesson Completed ✓ (Update)' : 'Mark Lesson Complete'}</span>
        </button>
      </div>

      {/* Prev / Next Pagination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevChapter ? (
          <Link
            to={`/learn/${encodeURIComponent(classId)}/${encodeURIComponent(subjectId)}/${encodeURIComponent(prevChapter.id || prevChapter.title)}`}
            className="group p-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-3 text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Previous Chapter
              </span>
              <span className="text-sm font-bold text-slate-800 truncate block group-hover:text-emerald-800">
                {prevChapter.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block"></div>
        )}

        {nextChapter ? (
          <Link
            to={`/learn/${encodeURIComponent(classId)}/${encodeURIComponent(subjectId)}/${encodeURIComponent(nextChapter.id || nextChapter.title)}`}
            className="group p-4 rounded-2xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50/80 hover:border-emerald-300 transition-all flex items-center justify-between gap-3 text-right ml-auto w-full"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">
                Next Chapter
              </span>
              <span className="text-sm font-bold text-slate-900 truncate block group-hover:text-emerald-900">
                {nextChapter.title}
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          <Link
            to={`/practice?class=${encodeURIComponent(classId)}&subject=${encodeURIComponent(subjectId)}`}
            className="group p-4 rounded-2xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 transition-all flex items-center justify-between gap-3 text-right ml-auto w-full"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">
                Practice Questions
              </span>
              <span className="text-sm font-bold text-slate-900 truncate block">
                Solve {subjectId} Practice Set
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
