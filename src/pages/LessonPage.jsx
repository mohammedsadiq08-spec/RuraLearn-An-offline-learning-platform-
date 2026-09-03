import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLesson } from '../data/curriculum';
import LessonViewer from '../components/lesson/LessonViewer';
import { AlertCircle, ArrowLeft, BookOpen } from 'lucide-react';

export default function LessonPage() {
  const { classId, subjectId, chapterId } = useParams();

  const decodedClass = decodeURIComponent(classId || 'Class 10');
  const decodedSubject = decodeURIComponent(subjectId || 'Mathematics');
  const decodedChapter = decodeURIComponent(chapterId || 'Real Numbers');

  const lesson = getLesson(decodedClass, decodedSubject, decodedChapter);

  if (!lesson) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-200">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
          Lesson Not Found
        </h2>
        <p className="text-sm text-slate-600 max-w-md mb-6">
          Could not find lesson for <span className="font-semibold text-slate-800">{decodedChapter}</span> under{' '}
          <span className="font-semibold text-slate-800">{decodedClass} • {decodedSubject}</span>.
        </p>
        <Link
          to={`/learn?class=${encodeURIComponent(decodedClass)}&subject=${encodeURIComponent(decodedSubject)}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-800 text-white font-bold text-sm hover:bg-emerald-900 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Available {decodedSubject} Chapters</span>
        </Link>
      </div>
    );
  }

  return (
    <LessonViewer
      lesson={lesson}
      classId={decodedClass}
      subjectId={decodedSubject}
      chapterId={decodedChapter}
    />
  );
}
