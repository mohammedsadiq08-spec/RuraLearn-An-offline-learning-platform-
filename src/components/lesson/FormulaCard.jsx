import React from 'react';
import { FunctionSquare, Sparkles } from 'lucide-react';

export default function FormulaCard({ formulas = [] }) {
  if (!formulas || formulas.length === 0) return null;

  return (
    <div className="my-8 bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2.5 mb-4 border-b border-slate-800 pb-3">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <FunctionSquare className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-base text-slate-100">Important Formulas & Invariants</h4>
          <p className="text-xs text-slate-400">Essential relations to memorize for solving exam problems</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {formulas.map((item, idx) => (
          <div key={idx} className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3.5 flex flex-col justify-between">
            <div className="text-xs font-semibold text-emerald-400 mb-1">
              {item.name}
            </div>
            <div className="font-mono text-sm sm:text-base font-bold text-white py-1.5 px-2 bg-slate-950/60 rounded border border-slate-700/50 my-1 overflow-x-auto text-center">
              {item.formula}
            </div>
            {item.use && (
              <div className="text-[11px] text-slate-300 mt-1 leading-snug">
                {item.use}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
