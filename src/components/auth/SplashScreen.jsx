import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../services/authService';
import { ArrowRight, Sparkles, WifiOff } from 'lucide-react';

export default function SplashScreen({ onComplete }) {
  const navigate = useNavigate();
  const { isAuthenticated, hasCompletedOnboarding } = useAuth();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    // Auto-advance after 1.8s
    const timer = setTimeout(() => {
      handleProceed();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isAuthenticated, hasCompletedOnboarding]);

  const handleProceed = () => {
    authService.setSplashSeen();
    if (onComplete) {
      onComplete();
    } else {
      if (!isAuthenticated) {
        navigate('/login');
      } else if (!hasCompletedOnboarding) {
        navigate('/onboarding');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-between p-6 sm:p-12 select-none animate-fade-in">
      {/* Top Brand Pill */}
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
        <WifiOff className="w-3.5 h-3.5 text-emerald-700" />
        <span>100% Offline-First Learning Platform</span>
      </div>

      {/* Central Logo & Brand Animation */}
      <div className="flex flex-col items-center text-center max-w-md animate-scale-up">
        {/* Animated Double-Roof Chevron Logo */}
        <div className="w-32 h-28 sm:w-40 sm:h-32 mb-4 flex items-center justify-center">
          <svg viewBox="0 0 100 80" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Outer Chevron / Roof */}
            <path
              d="M12 46 L50 12 L88 46"
              stroke="#12432d"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw"
            />
            {/* Inner Chevron / Roof */}
            <path
              d="M26 48 L50 26 L74 48"
              stroke="#12432d"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw delay-150"
            />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-[0.22em] text-[#12432d] uppercase font-sans mb-3">
          RURALEARN
        </h1>

        <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-sm mb-6">
          Empowering rural and off-grid students with structured offline digital learning.
        </p>

        {/* Progress loader */}
        <div className="w-48 bg-slate-100 rounded-full h-1.5 overflow-hidden mb-4">
          <div
            className="bg-emerald-800 h-full rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Action / Skip Button */}
      <div className="w-full max-w-xs flex flex-col items-center gap-3">
        <button
          onClick={handleProceed}
          className="w-full py-3.5 rounded-2xl bg-[#12432d] hover:bg-[#0c3120] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <span className="text-[11px] text-slate-400 font-semibold">
          Free Education for Every Student • No Internet Needed
        </span>
      </div>
    </div>
  );
}
