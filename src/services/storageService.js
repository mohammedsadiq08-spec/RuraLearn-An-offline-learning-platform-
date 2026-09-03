// RuraLearn Storage Service - LocalStorage & IndexedDB persistent state engine

const STORAGE_KEYS = {
  PROFILE: 'ruralearn_profile_v1',
  PROGRESS: 'ruralearn_progress_v1',
  DOWNLOADS: 'ruralearn_downloads_v1',
  PRACTICE_HISTORY: 'ruralearn_practice_history_v1',
  OFFLINE_SIMULATION: 'ruralearn_offline_simulation_v1',
  SETTINGS: 'ruralearn_settings_v1',
};

const DEFAULT_PROFILE = {
  name: 'Aarav Sharma',
  email: 'aarav.sharma@ruralearn.org',
  currentClass: 'Class 10',
  currentSubject: 'Mathematics',
  targetGoal: 'Board Exam Preparation & Coding Skills',
  streakDays: 7,
  lastActiveDate: new Date().toISOString().split('T')[0],
  joinedDate: 'August 2026',
  preferredLanguage: 'en', // 'en' or 'hi'
  highContrast: false,
  fontSize: 'normal', // 'normal' | 'large'
};

export const storageService = {
  // Profile
  getProfile() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return data ? { ...DEFAULT_PROFILE, ...JSON.parse(data) } : DEFAULT_PROFILE;
    } catch (e) {
      console.warn('Storage read error, using default profile', e);
      return DEFAULT_PROFILE;
    }
  },

  updateProfile(updates) {
    try {
      const current = this.getProfile();
      const updated = { ...current, ...updates };
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('ruralearn:profile-changed', { detail: updated }));
      return updated;
    } catch (e) {
      console.error('Storage write error', e);
      return updates;
    }
  },

  // Lesson Progress
  // Maps: `${classId}_${subjectId}_${chapterId}` -> { completed, score, lastStudied, percent }
  getAllProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      return data ? JSON.parse(data) : {
        'Class 10_Mathematics_Real Numbers': { completed: true, score: 100, lastStudied: Date.now() - 3600000 * 2, percent: 100 },
        'Class 10_Mathematics_Polynomials': { completed: false, score: 75, lastStudied: Date.now() - 3600000 * 24, percent: 70 },
        'Class 10_Science_Chemical Reactions and Equations': { completed: true, score: 100, lastStudied: Date.now() - 3600000 * 48, percent: 100 },
      };
    } catch (e) {
      return {};
    }
  },

  getLessonProgress(classId, subjectId, chapterId) {
    const key = `${classId}_${subjectId}_${chapterId}`;
    const all = this.getAllProgress();
    return all[key] || { completed: false, score: 0, lastStudied: null, percent: 0 };
  },

  saveLessonProgress(classId, subjectId, chapterId, progressData) {
    try {
      const key = `${classId}_${subjectId}_${chapterId}`;
      const all = this.getAllProgress();
      all[key] = {
        ...(all[key] || {}),
        ...progressData,
        lastStudied: Date.now(),
      };
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all));
      window.dispatchEvent(new CustomEvent('ruralearn:progress-changed', { detail: all }));
      return all[key];
    } catch (e) {
      console.error('Progress save error', e);
    }
  },

  // Downloaded Packages for Offline Access
  // Maps: `${classId}_${subjectId}_${chapterId}` -> { title, subject, sizeMB, downloadedAt }
  getDownloadedPacks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DOWNLOADS);
      return data ? JSON.parse(data) : {
        'Class 10_Mathematics_Real Numbers': {
          title: 'Real Numbers',
          subject: 'Mathematics',
          classId: 'Class 10',
          sizeMB: 3.4,
          downloadedAt: '2026-09-01T10:00:00Z',
        },
        'Class 10_Science_Chemical Reactions and Equations': {
          title: 'Chemical Reactions and Equations',
          subject: 'Science',
          classId: 'Class 10',
          sizeMB: 4.1,
          downloadedAt: '2026-09-02T14:30:00Z',
        },
        'Engineering_Computer Science_Data Structures': {
          title: 'Data Structures',
          subject: 'Computer Science',
          classId: 'Engineering',
          sizeMB: 6.2,
          downloadedAt: '2026-09-03T08:15:00Z',
        }
      };
    } catch (e) {
      return {};
    }
  },

  isLessonDownloaded(classId, subjectId, chapterId) {
    const key = `${classId}_${subjectId}_${chapterId}`;
    const downloads = this.getDownloadedPacks();
    return Boolean(downloads[key]);
  },

  toggleDownload(classId, subjectId, chapterId, chapterTitle, sizeMB = 3.2) {
    const key = `${classId}_${subjectId}_${chapterId}`;
    const downloads = this.getDownloadedPacks();
    if (downloads[key]) {
      delete downloads[key];
    } else {
      downloads[key] = {
        title: chapterTitle,
        subject: subjectId,
        classId,
        sizeMB,
        downloadedAt: new Date().toISOString(),
      };
    }
    localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(downloads));
    window.dispatchEvent(new CustomEvent('ruralearn:downloads-changed', { detail: downloads }));
    return Boolean(downloads[key]);
  },

  downloadAllSubject(classId, subjectId, chaptersList) {
    const downloads = this.getDownloadedPacks();
    chaptersList.forEach((ch) => {
      const key = `${classId}_${subjectId}_${ch.title}`;
      downloads[key] = {
        title: ch.title,
        subject: subjectId,
        classId,
        sizeMB: (2.5 + Math.random() * 2).toFixed(1) * 1,
        downloadedAt: new Date().toISOString(),
      };
    });
    localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(downloads));
    window.dispatchEvent(new CustomEvent('ruralearn:downloads-changed', { detail: downloads }));
    return downloads;
  },

  clearAllDownloads() {
    localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify({}));
    window.dispatchEvent(new CustomEvent('ruralearn:downloads-changed', { detail: {} }));
  },

  // Practice History & Adaptive Metrics
  getPracticeHistory() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PRACTICE_HISTORY);
      return data ? JSON.parse(data) : [
        { id: 'p1', questionId: 'rn-1', topic: 'Real Numbers', isCorrect: true, difficulty: 'Easy', timestamp: Date.now() - 86400000 },
        { id: 'p2', questionId: 'rn-2', topic: 'Real Numbers', isCorrect: true, difficulty: 'Medium', timestamp: Date.now() - 85000000 },
        { id: 'p3', questionId: 'poly-1', topic: 'Polynomials', isCorrect: false, difficulty: 'Medium', timestamp: Date.now() - 40000000 },
        { id: 'p4', questionId: 'chem-1', topic: 'Chemical Reactions', isCorrect: true, difficulty: 'Easy', timestamp: Date.now() - 20000000 },
      ];
    } catch (e) {
      return [];
    }
  },

  recordPracticeAttempt(attempt) {
    try {
      const history = this.getPracticeHistory();
      history.unshift({
        ...attempt,
        id: 'att_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
        timestamp: Date.now(),
      });
      localStorage.setItem(STORAGE_KEYS.PRACTICE_HISTORY, JSON.stringify(history.slice(0, 300)));
      window.dispatchEvent(new CustomEvent('ruralearn:practice-changed', { detail: history }));
    } catch (e) {
      console.error('Failed to record practice', e);
    }
  },

  // Offline Simulation Toggle (Manual toggle for testing)
  getOfflineOverride() {
    return localStorage.getItem(STORAGE_KEYS.OFFLINE_SIMULATION) === 'true';
  },

  setOfflineOverride(val) {
    localStorage.setItem(STORAGE_KEYS.OFFLINE_SIMULATION, String(val));
    window.dispatchEvent(new CustomEvent('ruralearn:network-toggle', { detail: val }));
  },

  // Reset all application data
  resetAllData() {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.DOWNLOADS);
    localStorage.removeItem(STORAGE_KEYS.PRACTICE_HISTORY);
    window.location.reload();
  }
};
