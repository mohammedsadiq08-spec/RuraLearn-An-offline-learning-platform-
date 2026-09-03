import React from 'react';
import { BookmarkCheck } from 'lucide-react';

export default function ImportantPoints({ points = [] }) {
  if (!points || points.length === 0) return null;

  return (
    <div className="my-6 bg-slate-100 border border-slate-300/80 rounded-2xl p-5">
      <div className="flex items-center gap-2.5 mb-3 text-slate-900">
        <div className="w-8 h-8 rounded-xl bg-slate-200 flex items-center justify-center text-slate-700">
          <BookmarkCheck className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-base text-slate-900">Important Points to Remember</h4>
          <p className="text-xs text-slate-600">High-yield revision facts commonly asked in examinations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
        {points.map((pt, idx) => (
          <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5"></span>
            <span className="font-medium leading-relaxed">{pt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
