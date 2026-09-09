import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestions';
import { storageService } from '../services/storageService';
import { adaptiveEngine } from '../services/adaptiveEngine';
import {
  PenTool,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Filter,
  Lightbulb,
  Award,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Practice() {
  const [searchParams] = useSearchParams();

  const [selectedClass, setSelectedClass] = useState(searchParams.get('class') || 'Class 10');
  const [selectedSubject, setSelectedSubject] = useState(searchParams.get('subject') || 'Mathematics');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [isAdaptiveMode, setIsAdaptiveMode] = useState(true);

  // Question session state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sessionResults, setSessionResults] = useState([]);

  // Filter available questions
  const filteredQuestions = useMemo(() => {
    return PRACTICE_QUESTIONS.filter((q) => {
      const matchClass = selectedClass === 'All' || q.classId === selectedClass;
      const matchSub = selectedSubject === 'All' || q.subjectId === selectedSubject;
      const matchDiff = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
      return matchClass && matchSub && matchDiff;
    });
  }, [selectedClass, selectedSubject, selectedDifficulty]);

  const currentQ = filteredQuestions[currentIndex] || PRACTICE_QUESTIONS[0];

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctIndex;
    setIsSubmitted(true);

    const attempt = {
      questionId: currentQ.id,
      classId: currentQ.classId,
      subjectId: currentQ.subjectId,
      chapterId: currentQ.chapterId,
      topic: currentQ.topic,
      difficulty: currentQ.difficulty,
      isCorrect,
    };

    storageService.recordPracticeAttempt(attempt);

    const updatedSession = [...sessionResults, attempt];
    setSessionResults(updatedSession);

    if (isCorrect) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    // If Adaptive Mode is ON, recommend difficulty for next question
    if (isAdaptiveMode) {
      const nextDiff = adaptiveEngine.getNextDifficulty(currentQ.topic, updatedSession.slice().reverse());
      // Suggesting difficulty
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowHint(false);

    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const handleResetSession = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowHint(false);
    setCurrentIndex(0);
    setSessionResults([]);
  };

  const correctCount = sessionResults.filter((r) => r.isCorrect).length;
  const accuracy = sessionResults.length > 0
    ? Math.round((correctCount / sessionResults.length) * 100)
    : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
            <PenTool className="w-3.5 h-3.5" />
            <span>Dedicated Practice Module</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Practice & Test Your Mastery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Step-by-step problem sets with adaptive difficulty and instant explanations.
          </p>
        </div>

        {/* Adaptive Mode Switch */}
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold text-slate-800">Adaptive Engine</span>
          </div>
          <button
            onClick={() => setIsAdaptiveMode(!isAdaptiveMode)}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
              isAdaptiveMode ? 'bg-emerald-800' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                isAdaptiveMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-4 text-xs font-semibold">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Filter className="w-4 h-4" />
          <span>Filters:</span>
        </div>

        {/* Class Filter */}
        <div className="flex items-center gap-1">
          <span className="text-slate-500">Class:</span>
          <select
            value={selectedClass}
            onChange={(e) => { setSelectedClass(e.target.value); setCurrentIndex(0); }}
            className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-700"
          >
            <option value="All">All Classes</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-1">
          <span className="text-slate-500">Subject:</span>
          <select
            value={selectedSubject}
            onChange={(e) => { setSelectedSubject(e.target.value); setCurrentIndex(0); }}
            className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-700"
          >
            <option value="All">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Physics">Physics</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1">
          <span className="text-slate-500">Difficulty:</span>
          <select
            value={selectedDifficulty}
            onChange={(e) => { setSelectedDifficulty(e.target.value); setCurrentIndex(0); }}
            className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-700"
          >
            <option value="All">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Live Session Counter */}
        <div className="ml-auto flex items-center gap-3 text-slate-500">
          <span>Question {currentIndex + 1} of {filteredQuestions.length}</span>
          {sessionResults.length > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
              {accuracy}% Accuracy ({correctCount}/{sessionResults.length})
            </span>
          )}
        </div>
      </div>

      {/* Main Question Card */}
      {currentQ ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md">
          {/* Metadata pill */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                {currentQ.classId} • {currentQ.subjectId}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {currentQ.chapterId}
              </span>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                currentQ.difficulty === 'Easy'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : currentQ.difficulty === 'Medium'
                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {currentQ.difficulty} Level
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-6">
            {currentQ.question}
          </h2>

          {/* Options Grid */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;

              let style = 'bg-white border-slate-200 hover:border-emerald-700 hover:bg-emerald-50/30 text-slate-800';
              if (isSubmitted) {
                if (isCorrect) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-200';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-red-50 border-red-400 text-red-950 line-through';
                } else {
                  style = 'bg-white border-slate-200 opacity-50';
                }
              } else if (isSelected) {
                style = 'bg-emerald-50/70 border-emerald-700 text-emerald-950 ring-2 ring-emerald-600/30 font-semibold';
              }

              const letter = String.fromCharCode(65 + optIdx);

              return (
                <button
                  key={optIdx}
                  disabled={isSubmitted}
                  onClick={() => setSelectedOption(optIdx)}
                  className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base flex items-center gap-3.5 transition-all ${style}`}
                >
                  <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                    {letter}
                  </span>
                  <span className="leading-snug">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Hint Trigger */}
          {currentQ.hint && !isSubmitted && (
            <div className="mb-6">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
              >
                <Lightbulb className="w-4 h-4" />
                <span>{showHint ? 'Hide Hint' : 'Need a hint? Click here'}</span>
              </button>
              {showHint && (
                <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">Hint:</span> {currentQ.hint}
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleResetSession}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Practice Session</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {!isSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Explanation Box upon submission */}
          {isSubmitted && (
            <div className="mt-6 pt-6 border-t border-slate-100 animate-fade-in">
              {selectedOption === currentQ.correctIndex ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm text-emerald-950">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1">Correct Answer!</span>
                    {currentQ.explanation}
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm text-red-950">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1">Incorrect. Here is the step-by-step logic:</span>
                    {currentQ.explanation}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
          <p className="text-slate-600">No questions match the current filter criteria.</p>
          <button
            onClick={() => { setSelectedClass('All'); setSelectedSubject('All'); setSelectedDifficulty('All'); }}
            className="mt-4 px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
