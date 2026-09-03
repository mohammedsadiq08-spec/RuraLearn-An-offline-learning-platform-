import React from 'react';

export default function LessonProgress({ progressPercent = 0, isCompleted = false }) {
  const percent = Math.min(100, Math.max(0, Math.round(progressPercent)));

  return (
    <div className="bg-slate-50 border-b border-slate-200/80 px-4 sm:px-6 py-2.5">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <span>Lesson Progress</span>
          {isCompleted && (
            <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              COMPLETED ✓
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 flex-1 max-w-xs">
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isCompleted ? 'bg-emerald-600' : 'bg-emerald-700'
              }`}
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-xs font-bold text-slate-700 font-mono w-9 text-right">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
}
