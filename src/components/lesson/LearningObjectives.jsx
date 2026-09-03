import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

export default function LearningObjectives({ objectives = [] }) {
  if (!objectives || objectives.length === 0) return null;

  return (
    <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 my-6">
      <div className="flex items-center gap-2.5 mb-3 text-emerald-900">
        <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
          <Target className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">Learning Objectives</h3>
          <p className="text-xs text-slate-600">By the end of this lesson, you should be able to:</p>
        </div>
      </div>

      <ul className="space-y-2 mt-2">
        {objectives.map((obj, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="leading-snug">{obj}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
