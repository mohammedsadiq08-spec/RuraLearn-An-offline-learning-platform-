import React, { useState } from 'react';

export default function DataStructureVisualizer() {
  const [mode, setMode] = useState('stack'); // 'stack' | 'queue'
  const [items, setItems] = useState([24, 52, 91]);
  const [inputValue, setInputValue] = useState('');
  const [lastAction, setLastAction] = useState('Initialized with 3 elements');

  const handlePush = () => {
    const val = inputValue.trim() || Math.floor(Math.random() * 90 + 10);
    if (items.length >= 6) {
      setLastAction('Overflow! Maximum 6 elements allowed in visual buffer.');
      return;
    }
    if (mode === 'stack') {
      setItems([...items, val]);
      setLastAction(`pushed(${val}) onto Top of Stack.`);
    } else {
      setItems([...items, val]);
      setLastAction(`enqueue(${val}) at Rear of Queue.`);
    }
    setInputValue('');
  };

  const handlePop = () => {
    if (items.length === 0) {
      setLastAction('Underflow! Buffer is empty.');
      return;
    }
    if (mode === 'stack') {
      const removed = items[items.length - 1];
      setItems(items.slice(0, -1));
      setLastAction(`popped() element ${removed} from Top of Stack.`);
    } else {
      const removed = items[0];
      setItems(items.slice(1));
      setLastAction(`dequeue() element ${removed} from Front of Queue.`);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <h4 className="font-semibold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block"></span>
            Interactive Visualizer: {mode === 'stack' ? 'Stack (LIFO - Last In First Out)' : 'Queue (FIFO - First In First Out)'}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Test push/pop or enqueue/dequeue operations and observe memory pointer shifts.
          </p>
        </div>

        <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-slate-50 text-xs">
          <button
            onClick={() => { setMode('stack'); setItems([24, 52, 91]); setLastAction('Switched to Stack'); }}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              mode === 'stack' ? 'bg-white shadow-xs text-indigo-700 font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Stack (LIFO)
          </button>
          <button
            onClick={() => { setMode('queue'); setItems([10, 20, 30]); setLastAction('Switched to Queue'); }}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              mode === 'queue' ? 'bg-white shadow-xs text-indigo-700 font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Queue (FIFO)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Visual Stage */}
        <div className="md:col-span-2 min-h-[220px] bg-slate-900 rounded-xl p-6 flex flex-col justify-center items-center">
          {mode === 'stack' ? (
            /* Stack Container (Vertical cup) */
            <div className="w-48 border-x-4 border-b-4 border-indigo-400 rounded-b-xl flex flex-col-reverse p-2 gap-2 min-h-[180px] justify-start bg-slate-950/60">
              {items.length === 0 ? (
                <div className="text-slate-500 text-xs text-center py-10 font-mono">Stack is Empty</div>
              ) : (
                items.map((it, idx) => {
                  const isTop = idx === items.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`py-2 px-3 rounded-lg text-center font-mono font-bold text-sm transition-all duration-300 flex items-center justify-between ${
                        isTop ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-300' : 'bg-slate-800 text-indigo-200'
                      }`}
                    >
                      <span>{it}</span>
                      {isTop && <span className="text-[10px] bg-indigo-900 px-1.5 py-0.5 rounded font-sans uppercase">TOP</span>}
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            /* Queue Container (Horizontal conveyor) */
            <div className="w-full max-w-md border-y-4 border-cyan-400 rounded-lg flex items-center gap-2 p-3 min-h-[90px] bg-slate-950/60 overflow-x-auto justify-start">
              <span className="text-[10px] text-cyan-400 font-bold uppercase mr-1">FRONT (Out) &larr;</span>
              {items.length === 0 ? (
                <div className="text-slate-500 text-xs text-center py-4 font-mono w-full">Queue is Empty</div>
              ) : (
                items.map((it, idx) => {
                  const isFront = idx === 0;
                  const isRear = idx === items.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`min-w-[60px] py-3 px-2 rounded-lg text-center font-mono font-bold text-sm transition-all duration-300 ${
                        isFront ? 'bg-cyan-600 text-white ring-2 ring-cyan-300' : isRear ? 'bg-amber-600 text-white' : 'bg-slate-800 text-cyan-200'
                      }`}
                    >
                      <div>{it}</div>
                      <div className="text-[9px] font-sans opacity-80 uppercase mt-0.5">
                        {isFront ? 'Front' : isRear ? 'Rear' : `idx ${idx}`}
                      </div>
                    </div>
                  );
                })
              )}
              <span className="text-[10px] text-amber-400 font-bold uppercase ml-auto">&larr; REAR (In)</span>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Enter Value to Insert:
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="e.g. 77"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePush()}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <button
                onClick={handlePush}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-indigo-700 text-white hover:bg-indigo-800 transition-colors"
              >
                {mode === 'stack' ? 'Push' : 'Enqueue'}
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePop}
              className="w-full py-2 text-xs font-semibold rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors"
            >
              {mode === 'stack' ? 'Pop (Remove Top)' : 'Dequeue (Remove Front)'}
            </button>
            <button
              onClick={() => { setItems([]); setLastAction('Cleared all elements'); }}
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">Operation Log:</div>
            <div className="font-mono text-slate-800 font-medium mt-1">{lastAction}</div>
            <div className="text-slate-400 text-[10px] mt-1">Current Size: {items.length} / 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}
