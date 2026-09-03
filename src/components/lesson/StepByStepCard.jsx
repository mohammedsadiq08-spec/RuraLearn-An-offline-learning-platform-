import React from 'react';
import { ListOrdered } from 'lucide-react';

export default function StepByStepCard({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="my-6 bg-blue-50/70 border border-blue-200 rounded-2xl p-5">
      <div className="flex items-center gap-2.5 mb-3 text-blue-950">
        <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800">
          <ListOrdered className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-base text-slate-900">Problem-Solving Strategy</h4>
          <p className="text-xs text-slate-600">Follow these standard logical steps when tackling problems</p>
        </div>
      </div>

      <div className="space-y-2.5 mt-2">
        {steps.map((st, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-white/80 p-3 rounded-xl border border-blue-100 text-xs sm:text-sm text-slate-800 font-medium">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="leading-snug">{st}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
