import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import OfflineIndicator from './OfflineIndicator';
import { Search, X } from 'lucide-react';
import { searchCurriculum } from '../../data/curriculum';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
    if (res.type === 'engineering') {
      navigate('/engineering');
    } else if (res.type === 'skill') {
      navigate('/skills');
    } else {
      navigate(`/school/${encodeURIComponent(res.classId)}/${encodeURIComponent(res.subjectId)}/${encodeURIComponent(res.chapterId)}`);
    }
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', exact: true },
    { to: '/school', label: 'School (6-12)' },
    { to: '/engineering', label: 'Engineering' },
    { to: '/skills', label: 'Skills' },
    { to: '/practice', label: 'Practice' },
    { to: '/progress', label: 'Progress' },
  ];

  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-slate-200/90 dark:border-neutral-800 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Logo size="default" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
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
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 font-bold'
                    : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-800'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar & Network Status Indicator */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Offline Search Input */}
          <div className="relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search school, engineering, skills..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchOpen(true)}
                className="w-36 sm:w-60 pl-8 pr-3 py-1.5 text-xs bg-slate-100 dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-full focus:w-64 focus:bg-white dark:focus:bg-neutral-900 focus:ring-2 focus:ring-emerald-700 focus:outline-none transition-all dark:text-white"
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
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-slate-200 dark:border-neutral-700 py-2 z-50 max-h-96 overflow-y-auto">
                <div className="px-3 py-1 text-[11px] font-bold text-slate-400 dark:text-neutral-400 uppercase tracking-wider">
                  Matched Topics ({searchResults.length})
                </div>
                {searchResults.map((res, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectResult(res)}
                    className="w-full text-left px-3 py-2 hover:bg-emerald-50/50 dark:hover:bg-neutral-700/50 flex flex-col border-b border-slate-50 dark:border-neutral-700/30 last:border-0"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{res.title}</span>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                      {res.type ? `[${res.type.toUpperCase()}] ` : ''}{res.classId || res.category} • {res.subjectId || res.desc || ''}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Network Indicator (Online / Offline) */}
          <OfflineIndicator />
        </div>
      </div>
    </header>
  );
}
