import express from 'express';
import { db } from '../db/index.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// GET /api/bookmarks
router.get('/', authMiddleware, async (req, res) => {
  try {
    const bookmarks = await db.getUserBookmarks(req.userId);
    return res.json({ bookmarks });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch bookmarks.' });
  }
});

// POST /api/bookmarks
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { classId, subjectId, chapterId, title } = req.body;
    if (!chapterId || !title) {
      return res.status(400).json({ error: 'Chapter ID and Title are required.' });
    }

    const bookmark = await db.addBookmark(req.userId, { classId, subjectId, chapterId, title });
    return res.status(201).json({ success: true, bookmark });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to add bookmark.' });
  }
});

// DELETE /api/bookmarks/:id
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteBookmark(req.userId, id);
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to delete bookmark.' });
  }
});

export default router;
