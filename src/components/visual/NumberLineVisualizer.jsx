import React, { useState } from 'react';

export default function NumberLineVisualizer() {
  const [selectedNum, setSelectedNum] = useState(1.414);

  const landmarks = [
    { label: '-2', val: -2, type: 'int' },
    { label: '-1', val: -1, type: 'int' },
    { label: '0', val: 0, type: 'origin' },
    { label: '1/2', val: 0.5, type: 'rational' },
    { label: '1', val: 1, type: 'int' },
    { label: '√2 ≈ 1.414', val: 1.414, type: 'irrational' },
    { label: '√3 ≈ 1.732', val: 1.732, type: 'irrational' },
    { label: '2', val: 2, type: 'int' },
    { label: 'e ≈ 2.718', val: 2.718, type: 'irrational' },
    { label: '3', val: 3, type: 'int' },
    { label: 'π ≈ 3.141', val: 3.1415, type: 'irrational' },
    { label: '4', val: 4, type: 'int' },
  ];

  // Number line scale: maps x from -2.5 to 4.5 across SVG width 700
  const minVal = -2.5;
  const maxVal = 4.5;
  const mapX = (val) => ((val - minVal) / (maxVal - minVal)) * 620 + 40;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 inline-block"></span>
            Interactive Visualizer: Real Numbers on the Number Line
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare rational fractions, integers, and irrational roots like √2 and π in real time.
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          100% Offline SVG Tool
        </span>
      </div>

      {/* SVG Diagram */}
      <div className="overflow-x-auto py-2">
        <svg viewBox="0 0 700 130" className="w-full min-w-[500px] select-none">
          {/* Main Axis */}
          <line x1="20" y1="70" x2="680" y2="70" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          {/* Arrow Left */}
          <polygon points="20,70 30,65 30,75" fill="#334155" />
          {/* Arrow Right */}
          <polygon points="680,70 670,65 670,75" fill="#334155" />

          {/* Integer Ticks */}
          {[-2, -1, 0, 1, 2, 3, 4].map((n) => {
            const x = mapX(n);
            return (
              <g key={n}>
                <line x1={x} y1="60" x2={x} y2="80" stroke="#64748b" strokeWidth="2" />
                <text x={x} y="100" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">
                  {n}
                </text>
              </g>
            );
          })}

          {/* Preset Landmark Points */}
          {landmarks.map((pt, i) => {
            const x = mapX(pt.val);
            const isSelected = Math.abs(selectedNum - pt.val) < 0.05;
            const isIrrational = pt.type === 'irrational';

            return (
              <g key={i} className="cursor-pointer" onClick={() => setSelectedNum(pt.val)}>
                <circle
                  cx={x}
                  cy="70"
                  r={isSelected ? "8" : "5"}
                  fill={isSelected ? '#15803d' : isIrrational ? '#ea580c' : '#2563eb'}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="transition-all duration-200 hover:scale-125"
                />
                {isIrrational && (
                  <text x={x} y="45" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c2410c">
                    {pt.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Current Selection Marker */}
          <g transform={`translate(${mapX(selectedNum)}, 25)`}>
            <polygon points="-6,-5 6,-5 0,5" fill="#15803d" />
            <rect x="-35" y="-24" width="70" height="20" rx="4" fill="#15803d" />
            <text x="0" y="-10" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
              x = {Number(selectedNum).toFixed(3)}
            </text>
          </g>
        </svg>
      </div>

      {/* Interactive Controls */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1 min-w-[240px]">
          <label className="text-xs font-semibold text-slate-700 mb-1 block">
            Drag position along number line: <span className="text-emerald-700 font-bold">{Number(selectedNum).toFixed(3)}</span>
          </label>
          <input
            type="range"
            min="-2"
            max="4"
            step="0.01"
            value={selectedNum}
            onChange={(e) => setSelectedNum(parseFloat(e.target.value))}
            className="w-full accent-emerald-700 cursor-pointer"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedNum(1.414)}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100"
          >
            Plot √2 (Irrational)
          </button>
          <button
            onClick={() => setSelectedNum(3.1415)}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100"
          >
            Plot π (Irrational)
          </button>
          <button
            onClick={() => setSelectedNum(0.5)}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
          >
            Plot 1/2 (Rational)
          </button>
        </div>
      </div>
    </div>
  );
}
