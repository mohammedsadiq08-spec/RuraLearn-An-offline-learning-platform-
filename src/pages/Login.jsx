import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/common/Logo';
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
  WifiOff,
  CheckCircle2,
  Phone,
  ShieldCheck,
  X
} from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { loginWithGoogle, loginWithFacebook, loginWithEmail, loginAsGuest } = useAuth();

  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [showFbModal, setShowFbModal] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    try {
      const user = await loginWithEmail(name, emailOrPhone, password);
      navigate(user.onboardingCompleted ? '/' : '/onboarding');
    } catch (err) {
      setError('Failed to login. Please try again.');
    }
  };

  const handleGoogleSelect = async (account) => {
    setShowGoogleModal(false);
    const user = await loginWithGoogle(account);
    navigate(user.onboardingCompleted ? '/' : '/onboarding');
  };

  const handleFbSelect = async (account) => {
    setShowFbModal(false);
    const user = await loginWithFacebook(account);
    navigate(user.onboardingCompleted ? '/' : '/onboarding');
  };

  const handleGuestLogin = async () => {
    const user = await loginAsGuest();
    navigate('/onboarding');
  };

  const googlePresetAccounts = [
    { name: 'Aarav Sharma', email: 'aarav.sharma@gmail.com', role: 'Class 10 Student' },
    { name: 'Priya Verma', email: 'priya.verma26@gmail.com', role: 'Engineering Aspirant' },
    { name: 'Rohan Patel', email: 'rohan.patel@gmail.com', role: 'Class 12 Science' },
  ];

  const fbPresetAccounts = [
    { name: 'Aarav Sharma', email: 'aarav.sharma@facebook.com' },
    { name: 'Ananya Deshmukh', email: 'ananya.deshmukh@facebook.com' },
  ];

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 sm:p-6 bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
        {/* Brand Header */}
        <div className="text-center flex flex-col items-center">
          <Logo size="default" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-3">
            {mode === 'signin' ? 'Welcome to RuraLearn' : 'Create Student Account'}
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xs">
            Log in to save your personal learning progress and access offline lessons.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 font-bold">
            {error}
          </div>
        )}

        {/* Social Authentication Buttons */}
        <div className="space-y-2.5">
          {/* Google Button */}
          <button
            type="button"
            onClick={() => setShowGoogleModal(true)}
            className="w-full py-3 px-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-2xs transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Facebook Button */}
          <button
            type="button"
            onClick={() => setShowFbModal(true)}
            className="w-full py-3 px-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-2xs transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Continue with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 w-full"></div>
          <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            or with email / phone
          </span>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleEmailSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Student Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  required
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Email or Mobile Number</label>
            <div className="relative">
              <input
                type="text"
                placeholder="student@gmail.com or 9876543210"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                required
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                required
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Toggle signin / signup */}
        <div className="text-center text-xs text-slate-500">
          {mode === 'signin' ? (
            <span>
              New student?{' '}
              <button
                type="button"
                onClick={() => { setMode('signup'); setError(''); }}
                className="font-bold text-emerald-800 hover:underline"
              >
                Create an account
              </button>
            </span>
          ) : (
            <span>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => { setMode('signin'); setError(''); }}
                className="font-bold text-emerald-800 hover:underline"
              >
                Sign In
              </button>
            </span>
          )}
        </div>

        {/* Instant Offline / Guest Access */}
        <div className="pt-4 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={handleGuestLogin}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <WifiOff className="w-4 h-4 text-emerald-700" />
            <span>Instant Guest / Offline Access (No Account Needed)</span>
          </button>
          <span className="text-[10px] text-slate-400 mt-1 block">
            Designed for rural students with zero connectivity
          </span>
        </div>
      </div>

      {/* Google OAuth Modal Dialog Simulation */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-bold text-sm text-slate-800">Sign in with Google</span>
              </div>
              <button onClick={() => setShowGoogleModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Choose an account to continue to <strong>RuraLearn</strong>
            </p>

            <div className="divide-y divide-slate-100">
              {googlePresetAccounts.map((acc, i) => (
                <button
                  key={i}
                  onClick={() => handleGoogleSelect(acc)}
                  className="w-full py-3 px-2 flex items-center gap-3 text-left hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">
                    {acc.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-xs text-slate-900 block group-hover:text-emerald-800 truncate">
                      {acc.name}
                    </span>
                    <span className="text-[11px] text-slate-400 block truncate">{acc.email}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowGoogleModal(false)}
                className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Facebook Modal Simulation */}
      {showFbModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-bold text-sm text-slate-800">Log in with Facebook</span>
              </div>
              <button onClick={() => setShowFbModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {fbPresetAccounts.map((acc, i) => (
                <button
                  key={i}
                  onClick={() => handleFbSelect(acc)}
                  className="w-full p-3 rounded-2xl border border-slate-200 hover:border-blue-600 bg-slate-50 flex items-center gap-3 text-left transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                    {acc.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">{acc.name}</span>
                    <span className="text-[10px] text-slate-500">Continue as {acc.name.split(' ')[0]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
