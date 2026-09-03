import { useState, useEffect, useCallback } from 'react';
import { storageService } from '../services/storageService';

export function useProgress() {
  const [profile, setProfile] = useState(() => storageService.getProfile());
  const [progress, setProgress] = useState(() => storageService.getAllProgress());
  const [downloads, setDownloads] = useState(() => storageService.getDownloadedPacks());

  useEffect(() => {
    const handleProfile = (e) => setProfile(e.detail);
    const handleProgress = (e) => setProgress(e.detail);
    const handleDownloads = (e) => setDownloads(e.detail);

    window.addEventListener('ruralearn:profile-changed', handleProfile);
    window.addEventListener('ruralearn:progress-changed', handleProgress);
    window.addEventListener('ruralearn:downloads-changed', handleDownloads);

    return () => {
      window.removeEventListener('ruralearn:profile-changed', handleProfile);
      window.removeEventListener('ruralearn:progress-changed', handleProgress);
      window.removeEventListener('ruralearn:downloads-changed', handleDownloads);
    };
  }, []);

  const saveLesson = useCallback((classId, subjectId, chapterId, data) => {
    return storageService.saveLessonProgress(classId, subjectId, chapterId, data);
  }, []);

  const toggleDownload = useCallback((classId, subjectId, chapterId, title, size) => {
    return storageService.toggleDownload(classId, subjectId, chapterId, title, size);
  }, []);

  const updateProfile = useCallback((updates) => {
    return storageService.updateProfile(updates);
  }, []);

  return {
    profile,
    progress,
    downloads,
    saveLesson,
    toggleDownload,
    updateProfile,
  };
}
