import React, { useState } from 'react';

export default function CircuitVisualizer() {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(4);
  const [isOpen, setIsOpen] = useState(false); // switch state

  const current = isOpen ? 0 : (voltage / resistance);
  const power = isOpen ? 0 : (voltage * current);
  const brightness = isOpen ? 0 : Math.min(1, power / 60);

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            Interactive Visualizer: Ohm's Law Circuit (V = I · R)
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Vary battery voltage and resistor load to observe electric current and bulb luminosity.
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
          Physics Circuit Simulation
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* SVG Circuit Schematic */}
        <div className="md:col-span-2 flex justify-center">
          <svg viewBox="0 0 460 260" className="w-full max-w-[460px] bg-slate-900 rounded-xl select-none p-2">
            {/* Outer wire rectangle */}
            <rect
              x="60" y="50" width="340" height="160"
              fill="none"
              stroke="#64748b"
              strokeWidth="4"
              rx="12"
            />

            {/* Battery on Left Wire */}
            <g transform="translate(60, 130)">
              {/* Gap in wire */}
              <line x1="0" y1="-25" x2="0" y2="25" stroke="#0f172a" strokeWidth="8" />
              {/* Positive Plate */}
              <line x1="-16" y1="-14" x2="16" y2="-14" stroke="#f87171" strokeWidth="4" />
              {/* Negative Plate */}
              <line x1="-8" y1="14" x2="8" y2="14" stroke="#38bdf8" strokeWidth="4" />
              <text x="-24" y="-10" fill="#f87171" fontSize="13" fontWeight="bold">+</text>
              <text x="-24" y="20" fill="#38bdf8" fontSize="14" fontWeight="bold">-</text>
              <text x="26" y="5" fill="#e2e8f0" fontSize="11" fontWeight="bold">Battery ({voltage}V)</text>
            </g>

            {/* Resistor on Top Wire */}
            <g transform="translate(230, 50)">
              <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
              {/* Color bands */}
              <line x1="-15" y1="-10" x2="-15" y2="10" stroke="#f59e0b" strokeWidth="3" />
              <line x1="0" y1="-10" x2="0" y2="10" stroke="#ef4444" strokeWidth="3" />
              <line x1="15" y1="-10" x2="15" y2="10" stroke="#10b981" strokeWidth="3" />
              <text x="0" y="-18" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">
                Resistor R = {resistance} Ω
              </text>
            </g>

            {/* Light Bulb on Right Wire */}
            <g transform="translate(400, 130)">
              {/* Glow aura */}
              {!isOpen && brightness > 0.05 && (
                <circle
                  cx="0" cy="0"
                  r={22 + brightness * 25}
                  fill="rgba(250, 204, 21, 0.35)"
                  className="transition-all duration-300"
                />
              )}
              {/* Bulb circle */}
              <circle
                cx="0" cy="0" r="16"
                fill={isOpen ? "#475569" : `rgb(${Math.round(180 + brightness * 75)}, ${Math.round(160 + brightness * 90)}, ${Math.round(30 + (1 - brightness) * 40)})`}
                stroke="#e2e8f0"
                strokeWidth="2"
              />
              {/* Filament */}
              <path d="M-6,6 Q0,-10 6,6" fill="none" stroke={isOpen ? "#64748b" : "#ffffff"} strokeWidth="2" />
              <text x="-35" y="32" fill="#f8fafc" fontSize="11" fontWeight="600">
                Lamp ({power.toFixed(1)} W)
              </text>
            </g>

            {/* Switch on Bottom Wire */}
            <g transform="translate(230, 210)" className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <line x1="-30" y1="0" x2="30" y2="0" stroke="#0f172a" strokeWidth="8" />
              <circle cx="-25" cy="0" r="4" fill="#38bdf8" />
              <circle cx="25" cy="0" r="4" fill="#38bdf8" />
              {/* Switch arm */}
              <line
                x1="-25" y1="0"
                x2="25" y2={isOpen ? "-18" : "0"}
                stroke={isOpen ? "#ef4444" : "#10b981"}
                strokeWidth="3"
                className="transition-all duration-200"
              />
              <text x="0" y="24" textAnchor="middle" fill={isOpen ? "#f87171" : "#34d399"} fontSize="11" fontWeight="700">
                Switch: {isOpen ? 'OPEN (Off)' : 'CLOSED (On)'}
              </text>
            </g>

            {/* Current Indicator arrow */}
            {!isOpen && current > 0 && (
              <g transform="translate(130, 42)">
                <polygon points="0,0 8,-4 8,4" fill="#38bdf8" />
                <text x="14" y="3" fill="#38bdf8" fontSize="10" fontWeight="bold">I →</text>
              </g>
            )}
          </svg>
        </div>

        {/* Meter Controls */}
        <div className="space-y-4">
          <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2 font-mono text-xs">
            <div className="text-slate-400 font-sans font-semibold uppercase tracking-wider text-[11px]">
              Live Multi-Meter Readings:
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span className="text-slate-300">Voltage (V):</span>
              <span className="text-red-400 font-bold">{voltage} V</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span className="text-slate-300">Resistance (R):</span>
              <span className="text-amber-400 font-bold">{resistance} Ω</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1">
              <span className="text-slate-300">Current (I = V/R):</span>
              <span className="text-sky-400 font-bold text-sm">{current.toFixed(2)} A</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-slate-300">Power (P = VI):</span>
              <span className="text-emerald-400 font-bold">{power.toFixed(1)} W</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-700 font-semibold mb-1">
                <span>Voltage Supply:</span>
                <span className="text-red-600">{voltage} Volts</span>
              </div>
              <input
                type="range" min="1" max="24" value={voltage}
                onChange={(e) => setVoltage(parseInt(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-700 font-semibold mb-1">
                <span>Circuit Resistance:</span>
                <span className="text-amber-600">{resistance} Ohms</span>
              </div>
              <input
                type="range" min="1" max="20" value={resistance}
                onChange={(e) => setResistance(parseInt(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full py-2 rounded-xl font-medium text-xs transition-colors ${
                isOpen
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {isOpen ? 'Close Switch (Turn Circuit ON)' : 'Open Switch (Break Circuit)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
