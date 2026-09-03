import React from 'react';
import { BookOpen, Lightbulb } from 'lucide-react';

export default function LessonSection({ title, content, keyNote }) {
  return (
    <div className="my-8">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3.5 tracking-tight flex items-center gap-2">
        <span className="w-2 h-6 rounded-full bg-emerald-700 inline-block"></span>
        {title}
      </h3>

      <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
        {content}
      </div>

      {keyNote && (
        <div className="mt-4 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed font-medium">
            <span className="font-bold text-amber-900 block mb-0.5">Key Takeaway:</span>
            {keyNote}
          </div>
        </div>
      )}
    </div>
  );
}
