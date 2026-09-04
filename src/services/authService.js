// RuraLearn Production Authentication Service - Integrated with Backend REST API
import { localDB, STORES } from './localDatabase';
import { storageService } from './storageService';
import { apiClient } from './apiClient';

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
    return Boolean(this.getCurrentUser() && apiClient.getToken());
  },

  hasCompletedOnboarding() {
    const user = this.getCurrentUser();
    return Boolean(user && (user.onboardingCompleted || user.profile?.onboarding_completed));
  },

  hasSeenSplash() {
    return sessionStorage.getItem(AUTH_STORAGE_KEYS.SPLASH_SEEN) === 'true';
  },

  setSplashSeen() {
    sessionStorage.setItem(AUTH_STORAGE_KEYS.SPLASH_SEEN, 'true');
  },

  // Log in or Register with Email / Mobile Number
  async loginWithEmail(name, email, password, isSignUp = false) {
    const endpoint = isSignUp ? '/api/auth/register' : '/api/auth/login';
    const payload = isSignUp ? { name, email, password } : { email, password };

    const { data, error, isOffline } = await apiClient.post(endpoint, payload);

    if (error && !isOffline) {
      // If server returned error, try fallback register if login 401
      if (!isSignUp && (error.includes('Invalid') || error.includes('not found'))) {
        const regRes = await apiClient.post('/api/auth/register', { name, email, password });
        if (regRes.data?.token) {
          return this.handleAuthSuccess(regRes.data);
        }
      }
      throw new Error(error);
    }

    if (data?.token && data?.user) {
      return this.handleAuthSuccess(data);
    }

    // Offline mode fallback
    const offlineUser = {
      id: 'usr_em_' + Date.now(),
      name: name || email.split('@')[0],
      email: email.trim(),
      provider: 'email',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Board Exam Preparation & Coding Skills',
      preferredLanguage: 'en',
    };
    return this.persistUserSession(offlineUser, 'offline_token_' + offlineUser.id);
  },

  // Log in with Google Account
  async loginWithGoogle(googleProfile = null) {
    const profile = googleProfile || {
      name: 'Aarav Sharma',
      email: 'aarav.sharma@gmail.com',
    };

    const { data, error, isOffline } = await apiClient.post('/api/auth/social', {
      email: profile.email,
      name: profile.name,
      provider: 'google',
    });

    if (data?.token && data?.user) {
      return this.handleAuthSuccess(data);
    }

    const defaultGoogleUser = {
      id: 'usr_goog_' + Date.now(),
      name: profile.name,
      email: profile.email,
      provider: 'google',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Board Exam Preparation & Coding Skills',
      preferredLanguage: 'en',
      dailyTargetMinutes: 30,
    };
    return this.persistUserSession(defaultGoogleUser, 'tok_goog_' + defaultGoogleUser.id);
  },

  // Log in with Facebook
  async loginWithFacebook(fbProfile = null) {
    const profile = fbProfile || {
      name: 'Rohan Patel',
      email: 'rohan.patel@facebook.com',
    };

    const { data } = await apiClient.post('/api/auth/social', {
      email: profile.email,
      name: profile.name,
      provider: 'facebook',
    });

    if (data?.token && data?.user) {
      return this.handleAuthSuccess(data);
    }

    const defaultFbUser = {
      id: 'usr_fb_' + Date.now(),
      name: profile.name,
      email: profile.email,
      provider: 'facebook',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Secondary School Excellence',
      preferredLanguage: 'en',
      dailyTargetMinutes: 30,
    };
    return this.persistUserSession(defaultFbUser, 'tok_fb_' + defaultFbUser.id);
  },

  // Instant Guest / Offline Student Access
  async loginAsGuest() {
    const { data } = await apiClient.post('/api/auth/guest', {});
    if (data?.token && data?.user) {
      return this.handleAuthSuccess(data);
    }

    const guestUser = {
      id: 'usr_guest_' + Date.now(),
      name: 'Offline Student',
      email: 'offline.student@ruralearn.local',
      provider: 'offline_guest',
      joinedAt: new Date().toISOString(),
      onboardingCompleted: false,
      currentClass: 'Class 10',
      targetGoal: 'Self-Paced Offline Study',
      preferredLanguage: 'en',
      dailyTargetMinutes: 20,
    };
    return this.persistUserSession(guestUser, 'tok_guest_' + guestUser.id);
  },

  // Helper for API auth responses
  async handleAuthSuccess({ token, user }) {
    apiClient.setToken(token);
    const normalizedUser = {
      id: user.id,
      name: user.profile?.name || user.name || user.email.split('@')[0],
      email: user.email,
      provider: user.provider || 'email',
      currentClass: user.profile?.current_class || user.currentClass || 'Class 10',
      targetGoal: user.profile?.target_goal || user.targetGoal || 'Board Exam Preparation',
      preferredLanguage: user.profile?.preferred_language || user.preferredLanguage || 'en',
      dailyTargetMinutes: user.profile?.daily_target_minutes || 30,
      streakDays: user.profile?.streak_days || 1,
      onboardingCompleted: Boolean(user.profile?.onboarding_completed || user.onboardingCompleted),
    };
    return this.persistUserSession(normalizedUser, token);
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

    // Update backend
    if (navigator.onLine && apiClient.getToken()) {
      await apiClient.put('/api/auth/profile', {
        name: updatedUser.name,
        currentClass: updatedUser.currentClass,
        targetGoal: updatedUser.targetGoal,
        preferredLanguage: updatedUser.preferredLanguage,
        dailyTargetMinutes: updatedUser.dailyTargetMinutes,
        onboardingCompleted: true,
      });
    }

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
  async persistUserSession(user, token = null) {
    try {
      if (token) {
        apiClient.setToken(token);
      }
      localStorage.setItem(AUTH_STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));

      localDB.put(STORES.USERS, user);
      localDB.put(STORES.SESSION, { key: 'active_user', ...user });

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
    apiClient.setToken(null);

    localDB.delete(STORES.SESSION, 'active_user');

    window.dispatchEvent(new CustomEvent('ruralearn:auth-changed', { detail: null }));
  }
};
