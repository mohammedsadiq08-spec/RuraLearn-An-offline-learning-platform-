import express from 'express';
import { db } from '../db/index.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// GET /api/notes
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { chapterKey } = req.query;
    const notes = await db.getUserNotes(req.userId, chapterKey);
    return res.json({ notes });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch notes.' });
  }
});

// POST /api/notes
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { chapterKey, text, tag } = req.body;
    if (!chapterKey || !text || !text.trim()) {
      return res.status(400).json({ error: 'Chapter key and note text are required.' });
    }

    const note = await db.saveNote(req.userId, { chapterKey, text, tag });
    return res.status(201).json({ success: true, note });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save note.' });
  }
});

// DELETE /api/notes/:id
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteNote(req.userId, id);
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to delete note.' });
  }
});

export default router;
