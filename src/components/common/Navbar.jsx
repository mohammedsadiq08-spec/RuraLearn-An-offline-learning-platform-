import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import OfflineIndicator from './OfflineIndicator';
import { Search, BookOpen, PenTool, Award, User, Sparkles, X, LogOut, Sliders, ChevronDown } from 'lucide-react';
import { searchCurriculum } from '../../data/curriculum';
import { useProgress } from '../../hooks/useProgress';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useProgress();
  const { user, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length >= 2) {
      setSearchResults(searchCurriculum(val));
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectResult = (res) => {
    navigate(`/learn/${encodeURIComponent(res.classId)}/${encodeURIComponent(res.subjectId)}/${encodeURIComponent(res.chapterId)}`);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', exact: true },
    { to: '/learn', label: 'Learn' },
    { to: '/practice', label: 'Practice' },
    { to: '/skills', label: 'Skills' },
    { to: '/progress', label: 'Progress' },
  ];

  return (
    <header className="bg-white border-b border-slate-200/90 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Logo size="default" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
          {navLinks.map((item) => {
            const isActive = item.exact
              ? location.pathname === item.to
              : location.pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar & Status */}
        <div className="flex items-center gap-3">
          {/* Quick Offline Search Input */}
          <div className="relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search topics, chapters..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchOpen(true)}
                className="w-36 sm:w-56 pl-8 pr-3 py-1.5 text-xs bg-slate-100 border border-slate-200 rounded-full focus:w-64 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); setSearchResults([]); }}
                  className="absolute right-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Search Dropdown */}
            {isSearchOpen && searchResults.length > 0 && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50">
                <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Lessons Found ({searchResults.length})
                </div>
                {searchResults.map((res, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectResult(res)}
                    className="w-full text-left px-3 py-2 hover:bg-emerald-50/50 flex flex-col border-b border-slate-50 last:border-0"
                  >
                    <span className="text-xs font-bold text-slate-900 leading-snug">{res.title}</span>
                    <span className="text-[11px] text-emerald-700 font-medium">
                      {res.classId} • {res.subjectId}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Network Indicator */}
          <OfflineIndicator />

          {/* User Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 hover:opacity-90 transition-opacity"
              title="Student Account & Options"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                {(user?.name || profile.name).charAt(0)}
              </div>
              <div className="hidden lg:block text-left text-xs leading-tight">
                <span className="font-bold text-slate-800 block truncate max-w-[100px]">
                  {user?.name || profile.name}
                </span>
                <span className="text-emerald-700 font-medium text-[10px]">
                  {user?.currentClass || profile.currentClass}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-fade-in">
                <div className="px-4 py-2 border-b border-slate-100">
                  <span className="font-bold text-xs text-slate-900 block truncate">
                    {user?.name || profile.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {user?.email || profile.email}
                  </span>
                </div>

                <Link
                  to="/profile"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50/50 hover:text-emerald-800 font-medium"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Student Profile & Storage</span>
                </Link>

                <Link
                  to="/onboarding"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50/50 hover:text-emerald-800 font-medium"
                >
                  <Sliders className="w-4 h-4 text-slate-400" />
                  <span>Change Class & Goals</span>
                </Link>

                <div className="border-t border-slate-100 my-1"></div>

                <button
                  onClick={async () => {
                    setIsUserMenuOpen(false);
                    await logout();
                    navigate('/login');
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 font-bold text-left"
                >
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span>Log Out / Switch Student</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
