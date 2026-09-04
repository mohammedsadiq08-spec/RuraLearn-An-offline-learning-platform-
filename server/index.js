import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import { db } from './db/index.js';
import authRoutes from './routes/auth.js';
import curriculumRoutes from './routes/curriculum.js';
import progressRoutes from './routes/progress.js';
import practiceRoutes from './routes/practice.js';
import bookmarksRoutes from './routes/bookmarks.js';
import notesRoutes from './routes/notes.js';
import syncRoutes from './routes/sync.js';
import doubtRoutes from './routes/doubt.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '..', 'dist');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logger for API calls
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    console.log(`[API] ${req.method} ${req.path}`);
  }
  next();
});

// API Routes Mount
app.use('/api/auth', authRoutes);
app.use('/api/curriculum', curriculumRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/practice', practiceRoutes);
app.use('/api/bookmarks', bookmarksRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/sync', syncRoutes);
app.use('/api/doubt', doubtRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'RuraLearn API',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    database: db.isPostgres ? 'postgresql' : 'persistent_store',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve frontend static assets in production or if dist exists
app.use(express.static(DIST_DIR));

app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API endpoint not found.' });
  }
  const indexHtml = path.join(DIST_DIR, 'index.html');
  res.sendFile(indexHtml, (err) => {
    if (err) {
      res.status(200).send('RuraLearn API Server is running. Please run "npm run build" to serve the frontend bundle.');
    }
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`  RuraLearn Production Server Started   `);
  console.log(`  Port: ${PORT}                          `);
  console.log(`  Database: ${db.isPostgres ? 'PostgreSQL' : 'Persistent Storage'} `);
  console.log(`=========================================`);
});
