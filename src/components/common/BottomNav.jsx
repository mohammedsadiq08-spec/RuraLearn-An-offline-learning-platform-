import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, GraduationCap, Cpu, Sparkles, PenTool, BarChart2, HardDrive } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { to: '/', label: 'Home', icon: Home, exact: true },
    { to: '/school', label: 'School', icon: GraduationCap },
    { to: '/engineering', label: 'College', icon: Cpu },
    { to: '/skills', label: 'Skills', icon: Sparkles },
    { to: '/practice', label: 'Practice', icon: PenTool },
    { to: '/progress', label: 'Progress', icon: BarChart2 },
    { to: '/profile', label: 'Storage', icon: HardDrive },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-neutral-900 border-t border-slate-200/90 dark:border-neutral-800 shadow-lg px-1 py-1 pb-safe">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-emerald-800 dark:text-emerald-400 font-bold scale-105'
                    : 'text-slate-500 dark:text-neutral-400 hover:text-slate-800 dark:hover:text-white font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'text-slate-500 dark:text-neutral-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] mt-0.5 tracking-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
