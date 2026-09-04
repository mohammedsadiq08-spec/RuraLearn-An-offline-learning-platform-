import express from 'express';
import { db } from '../db/index.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// GET /api/progress - Get real user progress & analytics
router.get('/', authMiddleware, async (req, res) => {
  try {
    const progress = await db.getUserProgress(req.userId);
    const history = await db.getUserPracticeHistory(req.userId);

    // Compute real metrics from database
    const progressList = Object.values(progress);
    const completedCount = progressList.filter((p) => p.completed).length;

    const totalSolved = history.length;
    const correctCount = history.filter((h) => h.is_correct).length;
    const overallAccuracy = totalSolved > 0 ? Math.round((correctCount / totalSolved) * 100) : 0;

    // Topic analytics
    const topicMap = {};
    history.forEach((h) => {
      if (!topicMap[h.topic]) {
        topicMap[h.topic] = { correct: 0, total: 0 };
      }
      topicMap[h.topic].total++;
      if (h.is_correct) topicMap[h.topic].correct++;
    });

    const strongTopics = [];
    const weakTopics = [];

    Object.entries(topicMap).forEach(([topic, stat]) => {
      const acc = Math.round((stat.correct / stat.total) * 100);
      if (acc >= 75) {
        strongTopics.push({ topic, accuracy: acc, count: stat.total });
      } else {
        weakTopics.push({ topic, accuracy: acc, count: stat.total });
      }
    });

    return res.json({
      progress,
      stats: {
        completedCount,
        totalSolved,
        correctCount,
        overallAccuracy,
        strongTopics,
        weakTopics,
      }
    });
  } catch (err) {
    console.error('Progress fetch error:', err);
    return res.status(500).json({ error: 'Failed to load progress.' });
  }
});

// POST /api/progress/lesson - Record lesson completion
router.post('/lesson', authMiddleware, async (req, res) => {
  try {
    const { classId, subjectId, chapterId, completed, score, percent } = req.body;

    if (!classId || !subjectId || !chapterId) {
      return res.status(400).json({ error: 'Class, Subject, and Chapter are required.' });
    }

    const chapterKey = `${classId}_${subjectId}_${chapterId}`;
    const saved = await db.saveProgress(req.userId, chapterKey, {
      completed: Boolean(completed),
      score: score || 0,
      percent: percent || 0,
    });

    return res.json({ success: true, progress: saved });
  } catch (err) {
    console.error('Save progress error:', err);
    return res.status(500).json({ error: 'Failed to save progress.' });
  }
});

export default router;
