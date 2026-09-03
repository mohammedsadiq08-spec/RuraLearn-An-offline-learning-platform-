import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function CommonMistakes({ mistakes = [] }) {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <div className="my-6 bg-red-50/70 border border-red-200 rounded-2xl p-5">
      <div className="flex items-center gap-2.5 mb-3 text-red-950">
        <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center text-red-700">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-base text-red-950">Common Student Mistakes to Avoid</h4>
          <p className="text-xs text-red-800">Watch out for these frequent conceptual and calculation pitfalls</p>
        </div>
      </div>

      <div className="space-y-2.5 mt-2">
        {mistakes.map((mistake, idx) => (
          <div key={idx} className="bg-white/90 p-3 rounded-xl border border-red-100 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5">
            <span className="text-red-600 font-bold text-sm shrink-0">✕</span>
            <span className="font-medium leading-relaxed">{mistake}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
