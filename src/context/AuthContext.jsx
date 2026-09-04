import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getCurrentUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(authService.getCurrentUser());
    setLoading(false);

    const handleAuthChange = (e) => {
      setUser(e.detail);
    };

    window.addEventListener('ruralearn:auth-changed', handleAuthChange);
    return () => window.removeEventListener('ruralearn:auth-changed', handleAuthChange);
  }, []);

  const loginWithGoogle = async (profile) => {
    const loggedUser = await authService.loginWithGoogle(profile);
    setUser(loggedUser);
    return loggedUser;
  };

  const loginWithFacebook = async (profile) => {
    const loggedUser = await authService.loginWithFacebook(profile);
    setUser(loggedUser);
    return loggedUser;
  };

  const loginWithEmail = async (name, email, password) => {
    const loggedUser = await authService.loginWithEmail(name, email, password);
    setUser(loggedUser);
    return loggedUser;
  };

  const loginAsGuest = async () => {
    const loggedUser = await authService.loginAsGuest();
    setUser(loggedUser);
    return loggedUser;
  };

  const completeOnboarding = async (choices) => {
    const updated = await authService.completeOnboarding(choices);
    setUser(updated);
    return updated;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    hasCompletedOnboarding: Boolean(user?.onboardingCompleted),
    loading,
    loginWithGoogle,
    loginWithFacebook,
    loginWithEmail,
    loginAsGuest,
    completeOnboarding,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
