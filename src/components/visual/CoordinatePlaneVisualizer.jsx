import React, { useState } from 'react';

export default function CoordinatePlaneVisualizer() {
  const [p1, setP1] = useState({ x: -2, y: -1 });
  const [p2, setP2] = useState({ x: 3, y: 3 });

  // Scale: SVG is 400x340, coordinate bounds are -5 to +5 on both axes
  const toSvgX = (x) => 200 + x * 32;
  const toSvgY = (y) => 170 - y * 28;

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distance = Math.sqrt(dx * dx + dy * dy).toFixed(2);
  const midX = ((p1.x + p2.x) / 2).toFixed(1);
  const midY = ((p1.y + p2.y) / 2).toFixed(1);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
            Interactive Coordinate Plane: Distance & Midpoint Formula
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Adjust coordinates of Point A and Point B to visualize Euclidean distance and midpoint projection.
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
          Geometry Tool
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* SVG Grid */}
        <div className="md:col-span-2 flex justify-center overflow-x-auto">
          <svg viewBox="0 0 400 340" className="w-full max-w-[420px] bg-slate-50 rounded-xl border border-slate-200 select-none">
            {/* Grid lines */}
            {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n) => (
              <g key={n}>
                <line x1={toSvgX(n)} y1="10" x2={toSvgX(n)} y2="330" stroke={n === 0 ? "#475569" : "#e2e8f0"} strokeWidth={n === 0 ? 2 : 1} />
                <line x1="20" y1={toSvgY(n)} x2="380" y2={toSvgY(n)} stroke={n === 0 ? "#475569" : "#e2e8f0"} strokeWidth={n === 0 ? 2 : 1} />
                {n !== 0 && (
                  <>
                    <text x={toSvgX(n)} y="185" textAnchor="middle" fontSize="10" fill="#94a3b8">{n}</text>
                    <text x="188" y={toSvgY(n) + 3} textAnchor="end" fontSize="10" fill="#94a3b8">{n}</text>
                  </>
                )}
              </g>
            ))}

            {/* Right triangle projection */}
            <polygon
              points={`${toSvgX(p1.x)},${toSvgY(p1.y)} ${toSvgX(p2.x)},${toSvgY(p1.y)} ${toSvgX(p2.x)},${toSvgY(p2.y)}`}
              fill="rgba(59, 130, 246, 0.08)"
              stroke="#93c5fd"
              strokeDasharray="4,4"
            />

            {/* Connecting hypotenuse line */}
            <line
              x1={toSvgX(p1.x)}
              y1={toSvgY(p1.y)}
              x2={toSvgX(p2.x)}
              y2={toSvgY(p2.y)}
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Midpoint Marker */}
            <circle cx={toSvgX(Number(midX))} cy={toSvgY(Number(midY))} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
            <text x={toSvgX(Number(midX)) + 8} y={toSvgY(Number(midY)) - 6} fontSize="11" fontWeight="700" fill="#d97706">
              M({midX}, {midY})
            </text>

            {/* Point A */}
            <circle cx={toSvgX(p1.x)} cy={toSvgY(p1.y)} r="7" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
            <text x={toSvgX(p1.x) - 10} y={toSvgY(p1.y) - 10} fontSize="12" fontWeight="700" fill="#15803d">
              A({p1.x}, {p1.y})
            </text>

            {/* Point B */}
            <circle cx={toSvgX(p2.x)} cy={toSvgY(p2.y)} r="7" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
            <text x={toSvgX(p2.x) + 10} y={toSvgY(p2.y) + 14} fontSize="12" fontWeight="700" fill="#dc2626">
              B({p2.x}, {p2.y})
            </text>
          </svg>
        </div>

        {/* Live Calculation Panel */}
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs space-y-1">
            <div className="font-bold text-blue-900">Distance Formula Calculation:</div>
            <div className="font-mono text-blue-800">
              d = √[({p2.x} - {p1.x})² + ({p2.y} - {p1.y})²]
            </div>
            <div className="font-mono text-blue-800">
              d = √[({dx})² + ({dy})²] = √[{dx * dx + dy * dy}]
            </div>
            <div className="text-sm font-bold text-blue-950 pt-1">
              Distance = {distance} units
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs space-y-1">
            <div className="font-bold text-amber-900">Midpoint Formula:</div>
            <div className="font-mono text-amber-800">
              M = (({p1.x} + {p2.x})/2, ({p1.y} + {p2.y})/2)
            </div>
            <div className="text-sm font-bold text-amber-950 pt-1">
              Midpoint = ({midX}, {midY})
            </div>
          </div>

          {/* Coordinate Sliders */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-700">Adjust Coordinates:</div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-500">Point A: x ({p1.x})</label>
                <input
                  type="range" min="-4" max="4" value={p1.x}
                  onChange={(e) => setP1({ ...p1, x: parseInt(e.target.value) })}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
              <div>
                <label className="text-slate-500">Point A: y ({p1.y})</label>
                <input
                  type="range" min="-4" max="4" value={p1.y}
                  onChange={(e) => setP1({ ...p1, y: parseInt(e.target.value) })}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>
              <div>
                <label className="text-slate-500">Point B: x ({p2.x})</label>
                <input
                  type="range" min="-4" max="4" value={p2.x}
                  onChange={(e) => setP2({ ...p2, x: parseInt(e.target.value) })}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>
              <div>
                <label className="text-slate-500">Point B: y ({p2.y})</label>
                <input
                  type="range" min="-4" max="4" value={p2.y}
                  onChange={(e) => setP2({ ...p2, y: parseInt(e.target.value) })}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
