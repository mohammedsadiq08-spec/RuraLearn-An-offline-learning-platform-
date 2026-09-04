import express from 'express';
import { getClasses, getSubjects, getChapters, getLesson, searchCurriculum } from '../../src/data/curriculum/index.js';

const router = express.Router();

// GET /api/curriculum/classes
router.get('/classes', (req, res) => {
  try {
    const classes = getClasses();
    return res.json({ classes });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to load classes.' });
  }
});

// GET /api/curriculum/subjects/:classId
router.get('/subjects/:classId', (req, res) => {
  try {
    const { classId } = req.params;
    const subjects = getSubjects(decodeURIComponent(classId));
    return res.json({ subjects });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to load subjects.' });
  }
});

// GET /api/curriculum/chapters/:classId/:subjectId
router.get('/chapters/:classId/:subjectId', (req, res) => {
  try {
    const { classId, subjectId } = req.params;
    const chapters = getChapters(decodeURIComponent(classId), decodeURIComponent(subjectId));
    return res.json({ chapters });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to load chapters.' });
  }
});

// GET /api/curriculum/lesson/:classId/:subjectId/:chapterId
router.get('/lesson/:classId/:subjectId/:chapterId', (req, res) => {
  try {
    const { classId, subjectId, chapterId } = req.params;
    const lesson = getLesson(
      decodeURIComponent(classId),
      decodeURIComponent(subjectId),
      decodeURIComponent(chapterId)
    );

    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found in curriculum.' });
    }

    return res.json({ lesson });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to load lesson.' });
  }
});

// GET /api/curriculum/search?q=...
router.get('/search', (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.trim().length < 2) {
      return res.json({ results: [] });
    }
    const results = searchCurriculum(q.trim());
    return res.json({ results });
  } catch (err) {
    return res.status(500).json({ error: 'Search failed.' });
  }
});

export default router;
