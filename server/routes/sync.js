import express from 'express';
import { db } from '../db/index.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// POST /api/sync - Ingest and batch execute offline sync queue items
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.json({ success: true, syncedCount: 0, message: 'No items to sync.' });
    }

    const result = await db.batchSync(req.userId, items);
    return res.json({
      success: true,
      syncedCount: result.syncedCount,
      serverTimestamp: Date.now(),
    });
  } catch (err) {
    console.error('Batch sync error:', err);
    return res.status(500).json({ error: 'Failed to process sync queue.' });
  }
});

export default router;
