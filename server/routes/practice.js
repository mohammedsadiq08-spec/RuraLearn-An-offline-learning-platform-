import express from 'express';
import { db } from '../db/index.js';
import { authMiddleware } from '../middleware/auth.js';
import { PRACTICE_QUESTIONS } from '../../src/data/practiceQuestions.js';

const router = express.Router();

// GET /api/practice/questions
router.get('/questions', (req, res) => {
  try {
    const { category, difficulty } = req.query;
    let questions = [...PRACTICE_QUESTIONS];

    if (category && category !== 'All Categories') {
      questions = questions.filter((q) => q.category === category);
    }
    if (difficulty && difficulty !== 'All Levels') {
      questions = questions.filter((q) => q.difficulty === difficulty);
    }

    return res.json({ questions });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch practice questions.' });
  }
});

// POST /api/practice/attempt - Record real student attempt
router.post('/attempt', authMiddleware, async (req, res) => {
  try {
    const { questionId, topic, isCorrect, difficulty } = req.body;

    if (!questionId) {
      return res.status(400).json({ error: 'Question ID is required.' });
    }

    const record = await db.recordPracticeAttempt(req.userId, {
      questionId,
      topic: topic || 'General',
      isCorrect: Boolean(isCorrect),
      difficulty: difficulty || 'Medium',
    });

    // Adaptive difficulty calculation
    const history = await db.getUserPracticeHistory(req.userId);
    const recentTopicAttempts = history.filter((h) => h.topic === topic).slice(0, 3);
    const recentCorrect = recentTopicAttempts.filter((h) => h.is_correct).length;

    let nextDifficulty = difficulty || 'Medium';
    if (recentTopicAttempts.length >= 2) {
      if (recentCorrect === recentTopicAttempts.length) {
        nextDifficulty = difficulty === 'Easy' ? 'Medium' : 'Hard';
      } else if (recentCorrect === 0) {
        nextDifficulty = difficulty === 'Hard' ? 'Medium' : 'Easy';
      }
    }

    return res.json({
      success: true,
      record,
      adaptive: {
        nextDifficulty,
        consecutiveCorrect: isCorrect ? recentCorrect : 0,
      }
    });
  } catch (err) {
    console.error('Record practice attempt error:', err);
    return res.status(500).json({ error: 'Failed to save practice attempt.' });
  }
});

// GET /api/practice/history - Get student's personal history
router.get('/history', authMiddleware, async (req, res) => {
  try {
    const history = await db.getUserPracticeHistory(req.userId);
    return res.json({ history });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch history.' });
  }
});

export default router;
