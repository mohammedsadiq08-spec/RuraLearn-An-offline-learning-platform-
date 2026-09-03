import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuickCheck({ questions = [], onCompleteQuiz, initialScore = 0 }) {
  if (!questions || questions.length === 0) return null;

  const [answers, setAnswers] = useState({});
  const [showHint, setShowHint] = useState({});

  const handleSelectOption = (questionIndex, optionIndex) => {
    // If already answered correctly, lock it
    if (answers[questionIndex]?.isCorrect) return;

    const q = questions[questionIndex];
    const isCorrect = optionIndex === q.correctIndex;

    const newAnswers = {
      ...answers,
      [questionIndex]: {
        selected: optionIndex,
        isCorrect,
        submitted: true,
      }
    };
    setAnswers(newAnswers);

    // Compute updated total correct
    const totalCorrect = Object.values(newAnswers).filter(a => a.isCorrect).length;
    const scorePercent = Math.round((totalCorrect / questions.length) * 100);

    if (isCorrect && totalCorrect === questions.length) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 }
      });
    }

    if (onCompleteQuiz) {
      onCompleteQuiz(scorePercent, totalCorrect, questions.length);
    }
  };

  const handleRetry = (questionIndex) => {
    const updated = { ...answers };
    delete updated[questionIndex];
    setAnswers(updated);
  };

  const totalAnswered = Object.keys(answers).length;
  const totalCorrect = Object.values(answers).filter(a => a.isCorrect).length;

  return (
    <div className="my-10 bg-white border-2 border-emerald-600/30 rounded-3xl p-6 sm:p-8 shadow-md">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
            🧠
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">Quick Check Quiz</h3>
            <p className="text-xs text-slate-500">Test your conceptual understanding before completing this chapter</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold">
          <span className="text-slate-500">Score:</span>
          <span className="text-emerald-700 font-bold">{totalCorrect} / {questions.length}</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-700">{Math.round((totalCorrect / questions.length) * 100)}%</span>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const state = answers[qIdx];
          const hasAnswered = state?.submitted;
          const isCorrect = state?.isCorrect;

          return (
            <div key={q.id || qIdx} className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {qIdx + 1}
                  </span>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                    {q.question}
                  </div>
                </div>

                {q.hint && !isCorrect && (
                  <button
                    onClick={() => setShowHint({ ...showHint, [qIdx]: !showHint[qIdx] })}
                    className="text-xs text-amber-700 hover:text-amber-800 font-medium flex items-center gap-1 shrink-0 p-1"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showHint[qIdx] ? 'Hide Hint' : 'Hint'}</span>
                  </button>
                )}
              </div>

              {/* Hint Box */}
              {showHint[qIdx] && q.hint && (
                <div className="mb-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900">
                  <span className="font-bold">💡 Hint:</span> {q.hint}
                </div>
              )}

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                {q.options.map((opt, optIdx) => {
                  const isSelected = state?.selected === optIdx;
                  const isTheCorrectOption = q.correctIndex === optIdx;

                  let optClass = 'bg-white border-slate-200 text-slate-800 hover:border-emerald-600 hover:bg-emerald-50/30';
                  if (hasAnswered) {
                    if (isTheCorrectOption) {
                      optClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-200';
                    } else if (isSelected && !isCorrect) {
                      optClass = 'bg-red-50 border-red-400 text-red-950 font-medium line-through';
                    } else {
                      optClass = 'bg-white border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  const letter = String.fromCharCode(65 + optIdx);

                  return (
                    <button
                      key={optIdx}
                      disabled={hasAnswered && isCorrect}
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                      className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center gap-3 ${optClass}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                        {letter}
                      </span>
                      <span className="leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {hasAnswered && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  {isCorrect ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs sm:text-sm text-emerald-900 flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block mb-0.5">Correct Answer! Excellent work.</span>
                        {q.explanation}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs sm:text-sm text-red-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block mb-0.5">Incorrect answer. Don't worry!</span>
                          {q.explanation}
                        </div>
                      </div>
                      <button
                        onClick={() => handleRetry(qIdx)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-red-300 text-red-700 hover:bg-red-100 text-xs font-semibold shrink-0"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Try Again</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
