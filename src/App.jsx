import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { authService } from './services/authService';
import Navbar from './components/common/Navbar';
import BottomNav from './components/common/BottomNav';
import Logo from './components/common/Logo';
import SplashScreen from './components/auth/SplashScreen';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Learn from './pages/Learn';
import LessonPage from './pages/LessonPage';
import Practice from './pages/Practice';
import Skills from './pages/Skills';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

import AIDoubtBoxModal from './components/common/AIDoubtBoxModal';
import { Sparkles as SparklesIcon } from 'lucide-react';

function AppLayout({ children }) {
  const location = useLocation();
  const [isDoubtOpen, setIsDoubtOpen] = useState(false);
  const isAuthPage = location.pathname === '/login' || location.pathname === '/onboarding' || location.pathname === '/splash';

  if (isAuthPage) {
    return <main className="min-h-screen bg-slate-50">{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pb-20 md:pb-12">
        {children}
      </main>

      {/* Floating AI Doubt Box Button */}
      <button
        onClick={() => setIsDoubtOpen(true)}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 px-4 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-lg flex items-center gap-2 border border-emerald-700 active:scale-95 transition-all"
        title="Ask AI Doubt Box"
      >
        <SparklesIcon className="w-4 h-4 text-emerald-300" />
        <span className="hidden sm:inline">AI Doubt Box</span>
      </button>

      {/* AI Doubt Box Modal */}
      <AIDoubtBoxModal isOpen={isDoubtOpen} onClose={() => setIsDoubtOpen(false)} />

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
  );
}

function MainRoutes() {
  const { isAuthenticated, hasCompletedOnboarding } = useAuth();
  const [showInitialSplash, setShowInitialSplash] = useState(() => !authService.hasSeenSplash());

  if (showInitialSplash) {
    return <SplashScreen onComplete={() => setShowInitialSplash(false)} />;
  }

  return (
    <AppLayout>
      <Routes>
        {/* Splash & Auth Routes */}
        <Route path="/splash" element={<SplashScreen onComplete={() => setShowInitialSplash(false)} />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              hasCompletedOnboarding ? <Navigate to="/" replace /> : <Navigate to="/onboarding" replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? <Onboarding /> : <Navigate to="/login" replace />
          }
        />

        {/* Protected Student Learning Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learn"
          element={
            <ProtectedRoute>
              <Learn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learn/:classId/:subjectId/:chapterId"
          element={
            <ProtectedRoute>
              <LessonPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/practice"
          element={
            <ProtectedRoute>
              <Practice />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <Skills />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
