import React, { useState, useEffect } from 'react';
import LessonHeader from './LessonHeader';
import LessonProgress from './LessonProgress';
import LearningObjectives from './LearningObjectives';
import LessonSection from './LessonSection';
import FormulaCard from './FormulaCard';
import ExampleCard from './ExampleCard';
import StepByStepCard from './StepByStepCard';
import ImportantPoints from './ImportantPoints';
import CommonMistakes from './CommonMistakes';
import RealWorldCard from './RealWorldCard';
import QuickCheck from './QuickCheck';
import LessonNavigation from './LessonNavigation';
import VisualRenderer from '../visual/VisualRenderer';
import { useProgress } from '../../hooks/useProgress';
import { getAdjacentChapters } from '../../data/curriculum';
import confetti from 'canvas-confetti';

export default function LessonViewer({ lesson, classId, subjectId, chapterId }) {
  const { progress, downloads, saveLesson, toggleDownload } = useProgress();

  const progressKey = `${classId}_${subjectId}_${chapterId}`;
  const currentProgress = progress[progressKey] || { completed: false, score: 0, percent: 30 };
  const isDownloaded = Boolean(downloads[progressKey]);

  const [completed, setCompleted] = useState(currentProgress.completed);
  const [scrollProgress, setScrollProgress] = useState(currentProgress.percent || 35);
  const [quizScore, setQuizScore] = useState(currentProgress.score || 0);

  // Sync when lesson/route changes
  useEffect(() => {
    const p = progress[`${classId}_${subjectId}_${chapterId}`];
    if (p) {
      setCompleted(p.completed);
      setScrollProgress(p.percent || 40);
      setQuizScore(p.score || 0);
    } else {
      setCompleted(false);
      setScrollProgress(35);
      setQuizScore(0);
    }
    // Scroll to top on chapter change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [classId, subjectId, chapterId, progress]);

  const { prev: prevChapter, next: nextChapter } = getAdjacentChapters(classId, subjectId, chapterId);

  const handleMarkComplete = () => {
    const newStatus = !completed;
    setCompleted(newStatus);
    setScrollProgress(newStatus ? 100 : 75);

    saveLesson(classId, subjectId, chapterId, {
      completed: newStatus,
      percent: newStatus ? 100 : 75,
      score: quizScore || 80,
    });

    if (newStatus) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleQuizCompletion = (scorePercent) => {
    setQuizScore(scorePercent);
    setScrollProgress((prev) => Math.max(prev, scorePercent >= 70 ? 95 : 75));
    saveLesson(classId, subjectId, chapterId, {
      score: scorePercent,
      completed: scorePercent >= 70,
      percent: scorePercent >= 70 ? 100 : 80,
    });
    if (scorePercent >= 70) {
      setCompleted(true);
    }
  };

  const handleToggleDownload = () => {
    toggleDownload(classId, subjectId, chapterId, lesson.title, 3.4);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Sticky Top Header */}
      <LessonHeader
        classId={classId}
        subjectId={subjectId}
        chapterTitle={lesson.title}
        subtitle={lesson.subtitle}
        readTime={lesson.readTime}
        isDownloaded={isDownloaded}
        onToggleDownload={handleToggleDownload}
      />

      {/* Progress Bar */}
      <LessonProgress
        progressPercent={completed ? 100 : scrollProgress}
        isCompleted={completed}
      />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        {/* Objectives Box */}
        <LearningObjectives objectives={lesson.objectives} />

        {/* Chapter Introduction */}
        {lesson.introduction && (
          <div className="my-8 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Introduction
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {lesson.introduction}
            </p>
          </div>
        )}

        {/* Interactive Visual Learning Tool (Pure offline SVG/Canvas) */}
        {lesson.visualComponent && (
          <VisualRenderer visualName={lesson.visualComponent} />
        )}

        {/* Detailed Sections */}
        {lesson.sections && lesson.sections.map((section, idx) => (
          <LessonSection
            key={idx}
            title={section.title}
            content={section.content}
            keyNote={section.keyNote}
          />
        ))}

        {/* Formulas & Theorems */}
        {lesson.formulas && lesson.formulas.length > 0 && (
          <FormulaCard formulas={lesson.formulas} />
        )}

        {/* Worked Examples */}
        {lesson.examples && lesson.examples.length > 0 && (
          <ExampleCard examples={lesson.examples} />
        )}

        {/* Problem Solving Steps */}
        {lesson.steps && lesson.steps.length > 0 && (
          <StepByStepCard steps={lesson.steps} />
        )}

        {/* Real-World & Rural Practical Applications */}
        {lesson.realWorldApplications && lesson.realWorldApplications.length > 0 && (
          <RealWorldCard applications={lesson.realWorldApplications} />
        )}

        {/* Important Points */}
        {lesson.importantPoints && lesson.importantPoints.length > 0 && (
          <ImportantPoints points={lesson.importantPoints} />
        )}

        {/* Common Mistakes */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <CommonMistakes mistakes={lesson.commonMistakes} />
        )}

        {/* End of Lesson Quick Check Quiz */}
        {lesson.quickCheck && lesson.quickCheck.length > 0 && (
          <QuickCheck
            questions={lesson.quickCheck}
            initialScore={quizScore}
            onCompleteQuiz={handleQuizCompletion}
          />
        )}

        {/* Bottom Pagination and Complete Actions */}
        <LessonNavigation
          classId={classId}
          subjectId={subjectId}
          prevChapter={prevChapter}
          nextChapter={nextChapter}
          isCompleted={completed}
          onMarkComplete={handleMarkComplete}
        />
      </main>
    </div>
  );
}
