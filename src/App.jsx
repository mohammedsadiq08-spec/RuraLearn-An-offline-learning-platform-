import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import BottomNav from './components/common/BottomNav';
import Logo from './components/common/Logo';
import Home from './pages/Home';
import School from './pages/School';
import Engineering from './pages/Engineering';
import Skills from './pages/Skills';
import LessonPage from './pages/LessonPage';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import AIDoubtBoxModal from './components/common/AIDoubtBoxModal';
import { Sparkles as SparklesIcon } from 'lucide-react';

function AppLayout({ children }) {
  const [isDoubtOpen, setIsDoubtOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-neutral-900 text-slate-900 dark:text-neutral-100 font-sans antialiased">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pb-20 md:pb-12">
        {children}
      </main>

      {/* Floating AI Doubt Box Button */}
      <button
        onClick={() => setIsDoubtOpen(true)}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 px-4 py-2.5 rounded-full bg-[#12432d] hover:bg-[#1b5e3f] text-white font-bold text-xs shadow-lg flex items-center gap-2 border border-emerald-700 active:scale-95 transition-all"
        title="Ask AI Doubt Box"
      >
        <SparklesIcon className="w-4 h-4 text-emerald-300" />
        <span className="hidden sm:inline">AI Doubt Box</span>
      </button>

      {/* AI Doubt Box Modal */}
      <AIDoubtBoxModal isOpen={isDoubtOpen} onClose={() => setIsDoubtOpen(false)} />

      {/* Footer (Desktop & Tablet) */}
      <footer className="bg-white dark:bg-neutral-900 border-t border-slate-200 dark:border-neutral-800 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-neutral-400 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size="small" />
            <span className="text-slate-400 dark:text-neutral-600">|</span>
            <span>Empowering rural and off-grid students with structured offline learning.</span>
          </div>

          <div className="flex items-center gap-6 font-medium text-slate-600 dark:text-neutral-300">
            <Link to="/school" className="hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">School (6-12)</Link>
            <Link to="/engineering" className="hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">Engineering (4-Year)</Link>
            <Link to="/skills" className="hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">Skill Development</Link>
            <Link to="/practice" className="hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">Practice Bank</Link>
            <Link to="/profile" className="hover:text-emerald-800 dark:hover:text-emerald-400 transition-colors">Device Storage</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-neutral-500">
          <span>© 2026 RuraLearn Platform. Built for 100% free, open-access education.</span>
          <span>Offline First PWA • IndexedDB Local Storage • Zero Login Required</span>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {/* Main Open Access Learning Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/school/:classId/:subjectId/:chapterId" element={<LessonPage />} />
          
          {/* Legacy & Learn aliases */}
          <Route path="/learn" element={<Navigate to="/school" replace />} />
          <Route path="/learn/:classId/:subjectId/:chapterId" element={<LessonPage />} />

          {/* Engineering & College Portal */}
          <Route path="/engineering" element={<Engineering />} />

          {/* Skill Development Portal */}
          <Route path="/skills" element={<Skills />} />

          {/* Practice & Quizzes */}
          <Route path="/practice" element={<Practice />} />

          {/* Progress & Device Storage */}
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Profile />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
