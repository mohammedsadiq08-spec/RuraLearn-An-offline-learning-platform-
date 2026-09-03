import React from 'react';
import { Compass, Sprout } from 'lucide-react';

export default function RealWorldCard({ applications = [] }) {
  if (!applications || applications.length === 0) return null;

  return (
    <div className="my-6 bg-emerald-950 text-white rounded-2xl p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2.5 mb-4 border-b border-emerald-900 pb-3">
        <div className="w-8 h-8 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center">
          <Sprout className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-base text-emerald-100">Real-World & Rural Applications</h4>
          <p className="text-xs text-emerald-400">How these theoretical concepts solve practical daily challenges</p>
        </div>
      </div>

      <div className="space-y-3">
        {applications.map((app, idx) => (
          <div key={idx} className="bg-emerald-900/50 border border-emerald-800/80 p-3.5 rounded-xl text-xs sm:text-sm text-emerald-100 flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span>
            <div className="leading-relaxed font-normal">{app}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
