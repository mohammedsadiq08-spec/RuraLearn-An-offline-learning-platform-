import React, { useState, useEffect } from 'react';
import { Download, Smartphone, X, CheckCircle, Sparkles } from 'lucide-react';

export default function InstallAppBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Check if already running in standalone mode (already installed as PWA)
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsStandalone(true);
      return;
    }

    // Detect iOS
    const isIosDevice = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsStandalone(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      alert('To install RuraLearn on your browser: Tap the menu (⋮ or ...) and choose "Install app" or "Add to Home Screen".');
    }
  };

  if (isStandalone || isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-[#12432d] to-emerald-900 text-white px-4 py-3 sm:py-3.5 border-b border-emerald-800 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5 text-emerald-300" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-bold text-sm text-white">Install RuraLearn App</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-700/80 text-[10px] font-bold text-emerald-200">
                100% Free • Offline Ready
              </span>
            </div>
            <p className="text-xs text-emerald-200/90 mt-0.5">
              Install directly to your phone's home screen or PC. Works completely without internet!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-4 py-2 rounded-xl bg-white text-emerald-950 font-bold text-xs shadow-sm hover:bg-emerald-50 transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-emerald-800" />
            <span>Install App</span>
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* iOS Guidance Modal if on iPhone/iPad Safari */}
      {showIOSGuide && (
        <div className="mt-3 p-3 bg-emerald-900/90 rounded-xl text-xs text-emerald-100 flex items-center justify-between">
          <span>
            📱 On iOS Safari: Tap the <strong>Share</strong> button (⎋ at bottom) then select <strong>"Add to Home Screen"</strong>!
          </span>
          <button onClick={() => setShowIOSGuide(false)} className="text-white font-bold ml-2">OK</button>
        </div>
      )}
    </div>
  );
}
