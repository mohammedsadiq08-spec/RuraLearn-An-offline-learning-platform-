import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function ExampleCard({ examples = [] }) {
  if (!examples || examples.length === 0) return null;

  return (
    <div className="my-8 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
        <h4 className="font-bold text-lg text-slate-900">Worked Examples & Step-by-Step Solutions</h4>
      </div>

      {examples.map((ex, idx) => (
        <SingleExample key={idx} index={idx + 1} example={ex} />
      ))}
    </div>
  );
}

function SingleExample({ index, example }) {
  const [isRevealed, setIsRevealed] = useState(true);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="shrink-0 w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200">
            Ex {index}
          </span>
          <div className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
            {example.question}
          </div>
        </div>
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="text-slate-400 hover:text-slate-700 shrink-0 p-1"
          aria-label={isRevealed ? "Collapse solution" : "Expand solution"}
        >
          {isRevealed ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isRevealed && (
        <div className="mt-4 pt-4 border-t border-slate-100 pl-2 sm:pl-10 space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Step-by-Step Solution:
          </div>

          <div className="space-y-2">
            {example.steps.map((step, sIdx) => (
              <div key={sIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                <span className="text-slate-400 text-xs font-mono mt-0.5">•</span>
                <span className="font-mono text-slate-800 leading-relaxed">{step}</span>
              </div>
            ))}
          </div>

          {example.answer && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-emerald-900 mt-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Final Answer: {example.answer}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
