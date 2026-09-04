// RuraLearn Authentication & Student Session Service
// Supports Google OAuth simulation, Facebook login, Email/Password, and Instant Offline Access
import { localDB, STORES } from './localDatabase';
import { storageService } from './storageService';

const AUTH_STORAGE_KEYS = {
  CURRENT_USER: 'ruralearn_auth_user_v1',
  AUTH_TOKEN: 'ruralearn_auth_token_v1',
  SPLASH_SEEN: 'ruralearn_splash_seen_v1',
};

export const authService = {
  // Get currently active logged-in student
  getCurrentUser() {
    try {
      const data = localStorage.getItem(AUTH_STORAGE_KEYS.CURRENT_USER);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  isAuthenticated() {
    return Boolean(this.getCurrentUser());
  },

  hasCompletedOnboarding() {
    const user = this.getCurrentUser();
    return Boolean(user && user.onboardingCompleted);
  },

  hasSeenSplash() {
    return sessionStorage.getItem(AUTH_STORAGE_KEYS.SPLASH_SEEN) === 'true';
  },

  setSplashSeen() {
    sessionStorage.setItem(AUTH_STORAGE_KEYS.SPLASH_SEEN, 'true');
  },

  // Log in with Google Account
  async loginWithGoogle(googleProfile = null) {
    const defaultGoogleUser = {
      id: 'usr_goog_' + Date.now(),
      name: googleProfile?.name || 'Aarav Sharma',
      email: googleProfile?.email || 'aarav.sharma@gmail.com',
      avatar: googleProfile?.picture || null,
      provider: 'google',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Board Exam Preparation & Coding Skills',
      preferredLanguage: 'en',
      dailyTargetMinutes: 30,
    };

    return this.persistUserSession(defaultGoogleUser);
  },

  // Log in with Facebook
  async loginWithFacebook(fbProfile = null) {
    const defaultFbUser = {
      id: 'usr_fb_' + Date.now(),
      name: fbProfile?.name || 'Rohan Patel',
      email: fbProfile?.email || 'rohan.patel@facebook.com',
      avatar: null,
      provider: 'facebook',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Secondary School Excellence',
      preferredLanguage: 'en',
      dailyTargetMinutes: 30,
    };

    return this.persistUserSession(defaultFbUser);
  },

  // Log in / Sign up with Email or Phone
  async loginWithEmail(name, email, password) {
    const emailUser = {
      id: 'usr_em_' + Date.now(),
      name: name?.trim() || email.split('@')[0] || 'Student User',
      email: email.trim(),
      avatar: null,
      provider: 'email',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Foundation & Exam Success',
      preferredLanguage: 'en',
      dailyTargetMinutes: 30,
    };

    return this.persistUserSession(emailUser);
  },

  // Instant Guest / Offline Student Access (Zero internet required)
  async loginAsGuest() {
    const guestUser = {
      id: 'usr_guest_' + Date.now(),
      name: 'Offline Student',
      email: 'offline.student@ruralearn.local',
      avatar: null,
      provider: 'offline_guest',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Self-Paced Offline Study',
      preferredLanguage: 'en',
      dailyTargetMinutes: 20,
    };

    return this.persistUserSession(guestUser);
  },

  // Complete Student Onboarding Choices Wizard
  async completeOnboarding(choices) {
    const current = this.getCurrentUser();
    if (!current) return null;

    const updatedUser = {
      ...current,
      ...choices,
      onboardingCompleted: true,
      updatedAt: new Date().toISOString(),
    };

    // Also update global profile state in storageService
    storageService.updateProfile({
      name: updatedUser.name,
      email: updatedUser.email,
      currentClass: updatedUser.currentClass,
      targetGoal: updatedUser.targetGoal,
      preferredLanguage: updatedUser.preferredLanguage,
    });

    return this.persistUserSession(updatedUser);
  },

  // Internal helper to persist session across IndexedDB & LocalStorage
  async persistUserSession(user) {
    try {
      localStorage.setItem(AUTH_STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      localStorage.setItem(AUTH_STORAGE_KEYS.AUTH_TOKEN, 'tok_' + user.id);

      // Async write to IndexedDB database
      localDB.put(STORES.USERS, user);
      localDB.put(STORES.SESSION, { key: 'active_user', ...user });
      localDB.queueSyncAction('USER_SESSION_LOGIN', { userId: user.id, provider: user.provider });

      window.dispatchEvent(new CustomEvent('ruralearn:auth-changed', { detail: user }));
      return user;
    } catch (e) {
      console.error('Session write error', e);
      return user;
    }
  },

  // Logout / Switch Student
  async logout() {
    localStorage.removeItem(AUTH_STORAGE_KEYS.CURRENT_USER);
    localStorage.removeItem(AUTH_STORAGE_KEYS.AUTH_TOKEN);
    sessionStorage.removeItem(AUTH_STORAGE_KEYS.SPLASH_SEEN);

    localDB.delete(STORES.SESSION, 'active_user');
    localDB.queueSyncAction('USER_SESSION_LOGOUT', {});

    window.dispatchEvent(new CustomEvent('ruralearn:auth-changed', { detail: null }));
  }
};
