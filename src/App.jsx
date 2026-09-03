import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import BottomNav from './components/common/BottomNav';
import Logo from './components/common/Logo';
import Home from './pages/Home';
import Learn from './pages/Learn';
import LessonPage from './pages/LessonPage';
import Practice from './pages/Practice';
import Skills from './pages/Skills';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        {/* Top Sticky Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 pb-20 md:pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:classId/:subjectId/:chapterId" element={<LessonPage />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer (Desktop & Tablet) */}
        <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 hidden md:block">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo size="small" />
              <span className="text-slate-400">|</span>
              <span>Empowering rural and off-grid students with structured offline learning.</span>
            </div>

            <div className="flex items-center gap-6 font-medium text-slate-600">
              <Link to="/learn" className="hover:text-emerald-800 transition-colors">Class 6-12 & Higher Ed</Link>
              <Link to="/practice" className="hover:text-emerald-800 transition-colors">Practice Bank</Link>
              <Link to="/skills" className="hover:text-emerald-800 transition-colors">Vocational Skills</Link>
              <Link to="/profile" className="hover:text-emerald-800 transition-colors">Offline Cache</Link>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>© 2026 RuraLearn Platform. Built for inclusive digital literacy.</span>
            <span>Offline First PWA • IndexedDB Local Storage</span>
          </div>
        </footer>

        {/* Mobile Sticky Bottom Navigation */}
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
