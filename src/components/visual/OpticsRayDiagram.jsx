import React, { useState } from 'react';

export default function OpticsRayDiagram() {
  const [objectDist, setObjectDist] = useState(25); // distance u in cm (positive magnitude)
  const focalLength = 15; // f = 15 cm for concave mirror
  const centerOfCurvature = 30; // C = 2f = 30 cm

  // Mirror formula: 1/v = 1/f - 1/u (with signs: f = -15, u = -objectDist)
  // 1/v = -1/f - (-1/u) = -1/15 + 1/u = (15 - u) / (15u) -> v = - (15u)/(u - 15)
  const u = -objectDist;
  const f = -focalLength;
  const isAtFocus = Math.abs(objectDist - focalLength) < 0.5;

  let imageDist = 0;
  let magnification = 0;
  let imageNature = '';

  if (isAtFocus) {
    imageNature = 'At Infinity (Real, Inverted, Extremely Enlarged)';
  } else if (objectDist < focalLength) {
    imageDist = (objectDist * focalLength) / (focalLength - objectDist); // positive behind mirror
    magnification = imageDist / objectDist;
    imageNature = 'Behind Mirror (Virtual, Erect, Enlarged)';
  } else {
    imageDist = -(objectDist * focalLength) / (objectDist - focalLength); // negative in front of mirror
    magnification = -(Math.abs(imageDist) / objectDist);
    imageNature = objectDist > centerOfCurvature
      ? 'Between C & F (Real, Inverted, Diminished)'
      : objectDist === centerOfCurvature
      ? 'At C (Real, Inverted, Same Size)'
      : 'Beyond C (Real, Inverted, Magnified)';
  }

  // Scale: Pole is at SVG x = 380, principal axis at y = 130. 1 cm = 8 px
  const poleX = 380;
  const axisY = 130;
  const objX = poleX - objectDist * 8;
  const objHeight = 40;
  const focusX = poleX - focalLength * 8;
  const cX = poleX - centerOfCurvature * 8;

  let imgX = isAtFocus ? 20 : objectDist < focalLength ? poleX + imageDist * 8 : poleX - Math.abs(imageDist) * 8;
  let imgHeight = isAtFocus ? 120 : objHeight * Math.abs(magnification);
  if (imgHeight > 90) imgHeight = 90;
  const isErect = objectDist < focalLength;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block"></span>
            Interactive Optics: Concave Mirror Ray Tracer
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Slide the candle object along the principal axis to observe real/virtual image formation and ray paths.
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
          f = 15 cm | C = 30 cm
        </span>
      </div>

      {/* SVG Ray Diagram */}
      <div className="overflow-x-auto py-2">
        <svg viewBox="0 0 540 260" className="w-full min-w-[500px] bg-slate-950 rounded-xl select-none">
          {/* Principal Axis */}
          <line x1="10" y1={axisY} x2="520" y2={axisY} stroke="#475569" strokeWidth="2" strokeDasharray="5,5" />

          {/* Concave Mirror Arc */}
          <path d="M 380,30 Q 360,130 380,230" fill="none" stroke="#93c5fd" strokeWidth="5" strokeLinecap="round" />
          {/* Silvering hatched lines */}
          <path d="M 383,40 L 393,45 M 381,80 L 391,85 M 378,130 L 388,135 M 381,180 L 391,185 M 383,220 L 393,225" stroke="#64748b" strokeWidth="2" />

          {/* Key Reference Points */}
          <circle cx={poleX} cy={axisY} r="4" fill="#ffffff" />
          <text x={poleX - 5} y={axisY + 18} fill="#e2e8f0" fontSize="11" fontWeight="bold">P</text>

          <circle cx={focusX} cy={axisY} r="4" fill="#f59e0b" />
          <text x={focusX - 4} y={axisY + 18} fill="#fbbf24" fontSize="11" fontWeight="bold">F (15cm)</text>

          <circle cx={cX} cy={axisY} r="4" fill="#38bdf8" />
          <text x={cX - 4} y={axisY + 18} fill="#38bdf8" fontSize="11" fontWeight="bold">C (30cm)</text>

          {/* Incident Ray 1: Parallel to Principal Axis -> reflects through Focus */}
          <line x1={objX} y1={axisY - objHeight} x2={poleX - 8} y2={axisY - objHeight} stroke="#38bdf8" strokeWidth="2" />
          <line x1={poleX - 8} y1={axisY - objHeight} x2={20} y2={axisY + (objHeight * 1.5)} stroke="#38bdf8" strokeWidth="2" />

          {/* Object (Candle Arrow) */}
          <g>
            <line x1={objX} y1={axisY} x2={objX} y2={axisY - objHeight} stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
            <polygon points={`${objX},${axisY - objHeight - 6} ${objX - 5},${axisY - objHeight} ${objX + 5},${axisY - objHeight}`} fill="#22c55e" />
            <text x={objX} y={axisY - objHeight - 12} textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="bold">
              Object (u = -{objectDist}cm)
            </text>
          </g>

          {/* Image Arrow */}
          {!isAtFocus && (
            <g>
              <line
                x1={imgX} y1={axisY}
                x2={imgX} y2={isErect ? axisY - imgHeight : axisY + imgHeight}
                stroke="#f43f5e"
                strokeWidth="4"
                strokeDasharray={isErect ? "4,4" : "none"}
                strokeLinecap="round"
              />
              <polygon
                points={
                  isErect
                    ? `${imgX},${axisY - imgHeight - 6} ${imgX - 5},${axisY - imgHeight} ${imgX + 5},${axisY - imgHeight}`
                    : `${imgX},${axisY + imgHeight + 6} ${imgX - 5},${axisY + imgHeight} ${imgX + 5},${axisY + imgHeight}`
                }
                fill="#f43f5e"
              />
              <text x={imgX} y={isErect ? axisY - imgHeight - 12 : axisY + imgHeight + 16} textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="bold">
                Image ({imageDist > 0 ? `+${imageDist.toFixed(1)}` : `${imageDist.toFixed(1)}`}cm)
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Interactive Controls & Diagnosis */}
      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 mb-1 flex justify-between">
            <span>Slide Object Distance (u):</span>
            <span className="text-emerald-700 font-bold">{objectDist} cm from Pole</span>
          </label>
          <input
            type="range" min="5" max="45" step="1" value={objectDist}
            onChange={(e) => setObjectDist(parseInt(e.target.value))}
            className="w-full accent-emerald-600 cursor-pointer"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setObjectDist(38)}
              className="px-2 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              Beyond C (38cm)
            </button>
            <button
              onClick={() => setObjectDist(30)}
              className="px-2 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              At C (30cm)
            </button>
            <button
              onClick={() => setObjectDist(22)}
              className="px-2 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              Between C & F (22cm)
            </button>
            <button
              onClick={() => setObjectDist(8)}
              className="px-2 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              Behind F (Virtual, 8cm)
            </button>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs space-y-1">
          <div className="font-bold text-slate-900">Image Characteristics:</div>
          <div className="text-slate-700"><span className="font-semibold">Nature:</span> {imageNature}</div>
          <div className="text-slate-700">
            <span className="font-semibold">Magnification (m = -v/u):</span>{' '}
            <span className="font-mono">{isAtFocus ? '∞' : magnification.toFixed(2)}</span>
          </div>
          <div className="text-slate-500 text-[11px] pt-1">
            Notice: When the object is inside the focal length (u &lt; 15 cm), the reflected rays diverge, producing an erect, magnified virtual image behind the mirror (used in dental mirrors & shaving mirrors).
          </div>
        </div>
      </div>
    </div>
  );
}
