import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'ruralearn_database.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let pgPool = null;
const usePostgres = Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.trim().length > 0);

if (usePostgres) {
  try {
    pgPool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
    });
    console.log('Connected to PostgreSQL Database.');
  } catch (err) {
    console.warn('PostgreSQL initialization error, falling back to local persistent store:', err.message);
  }
}

// Initial structure for file-based persistent store
const defaultSchema = {
  users: [],
  profiles: [],
  categories: [],
  classes: [],
  subjects: [],
  chapters: [],
  lessons: [],
  questions: [],
  quiz_attempts: [],
  progress: [],
  bookmarks: [],
  notes: [],
  sync_queue: []
};

// Helper for local file-based database
function readLocalDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultSchema, null, 2), 'utf-8');
      return { ...defaultSchema };
    }
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading local DB:', err);
    return { ...defaultSchema };
  }
}

function writeLocalDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing local DB:', err);
  }
}

export const db = {
  isPostgres: usePostgres && Boolean(pgPool),

  // Generic Query method
  async query(text, params = []) {
    if (this.isPostgres) {
      return await pgPool.query(text, params);
    }
    return { rows: [] };
  },

  // USERS & AUTH
  async findUserByEmail(email) {
    if (!email) return null;
    const cleanEmail = email.trim().toLowerCase();

    if (this.isPostgres) {
      const res = await pgPool.query('SELECT * FROM users WHERE LOWER(email) = $1', [cleanEmail]);
      if (res.rows.length === 0) return null;
      const user = res.rows[0];
      const profRes = await pgPool.query('SELECT * FROM profiles WHERE user_id = $1', [user.id]);
      return { ...user, profile: profRes.rows[0] || null };
    }

    const local = readLocalDB();
    const user = local.users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (!user) return null;
    const profile = local.profiles.find((p) => p.user_id === user.id) || null;
    return { ...user, profile };
  },

  async getUserById(id) {
    if (!id) return null;

    if (this.isPostgres) {
      const res = await pgPool.query('SELECT id, email, role, created_at FROM users WHERE id = $1', [id]);
      if (res.rows.length === 0) return null;
      const user = res.rows[0];
      const profRes = await pgPool.query('SELECT * FROM profiles WHERE user_id = $1', [user.id]);
      return { ...user, profile: profRes.rows[0] || null };
    }

    const local = readLocalDB();
    const user = local.users.find((u) => u.id === id);
    if (!user) return null;
    const profile = local.profiles.find((p) => p.user_id === user.id) || null;
    const { password_hash, ...safeUser } = user;
    return { ...safeUser, profile };
  },

  async createUser({ email, password_hash, name, current_class = 'Class 10', target_goal = 'Board Exam Preparation', provider = 'email' }) {
    const userId = 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const cleanEmail = email.trim().toLowerCase();
    const now = new Date().toISOString();

    const newUser = {
      id: userId,
      email: cleanEmail,
      password_hash: password_hash || null,
      provider,
      role: 'student',
      created_at: now,
    };

    const newProfile = {
      user_id: userId,
      name: name?.trim() || cleanEmail.split('@')[0],
      current_class,
      target_goal,
      preferred_language: 'en',
      daily_target_minutes: 30,
      streak_days: 1,
      last_active_date: now.split('T')[0],
      onboarding_completed: false,
    };

    if (this.isPostgres) {
      await pgPool.query(
        'INSERT INTO users (id, email, password_hash, provider, role, created_at) VALUES ($1, $2, $3, $4, $5, $6)',
        [newUser.id, newUser.email, newUser.password_hash, newUser.provider, newUser.role, newUser.created_at]
      );
      await pgPool.query(
        `INSERT INTO profiles (user_id, name, current_class, target_goal, preferred_language, daily_target_minutes, streak_days, last_active_date, onboarding_completed)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          newProfile.user_id,
          newProfile.name,
          newProfile.current_class,
          newProfile.target_goal,
          newProfile.preferred_language,
          newProfile.daily_target_minutes,
          newProfile.streak_days,
          newProfile.last_active_date,
          newProfile.onboarding_completed
        ]
      );
      return { ...newUser, profile: newProfile };
    }

    const local = readLocalDB();
    local.users.push(newUser);
    local.profiles.push(newProfile);
    writeLocalDB(local);

    const { password_hash: _, ...safeUser } = newUser;
    return { ...safeUser, profile: newProfile };
  },

  async updateProfile(userId, updates) {
    if (!userId) return null;

    if (this.isPostgres) {
      const keys = Object.keys(updates);
      if (keys.length === 0) return null;
      const setClauses = keys.map((k, i) => `${k} = $${i + 2}`).join(', ');
      const values = [userId, ...Object.values(updates)];
      await pgPool.query(`UPDATE profiles SET ${setClauses} WHERE user_id = $1`, values);
      const res = await pgPool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);
      return res.rows[0] || null;
    }

    const local = readLocalDB();
    const idx = local.profiles.findIndex((p) => p.user_id === userId);
    if (idx !== -1) {
      local.profiles[idx] = { ...local.profiles[idx], ...updates };
      writeLocalDB(local);
      return local.profiles[idx];
    }
    return null;
  },

  // PROGRESS
  async getUserProgress(userId) {
    if (!userId) return {};

    if (this.isPostgres) {
      const res = await pgPool.query('SELECT * FROM progress WHERE user_id = $1', [userId]);
      const map = {};
      res.rows.forEach((r) => {
        map[r.chapter_key] = {
          completed: r.completed,
          score: r.score,
          percent: r.percent,
          lastStudied: r.last_studied,
        };
      });
      return map;
    }

    const local = readLocalDB();
    const userProgress = local.progress.filter((p) => p.user_id === userId);
    const map = {};
    userProgress.forEach((r) => {
      map[r.chapter_key] = {
        completed: r.completed,
        score: r.score,
        percent: r.percent,
        lastStudied: r.last_studied,
      };
    });
    return map;
  },

  async saveProgress(userId, chapterKey, data) {
    if (!userId || !chapterKey) return null;
    const now = Date.now();

    if (this.isPostgres) {
      await pgPool.query(
        `INSERT INTO progress (user_id, chapter_key, completed, score, percent, last_studied)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (user_id, chapter_key)
         DO UPDATE SET completed = $3, score = $4, percent = $5, last_studied = $6`,
        [userId, chapterKey, Boolean(data.completed), data.score || 0, data.percent || 0, now]
      );
      return { ...data, chapterKey, lastStudied: now };
    }

    const local = readLocalDB();
    const idx = local.progress.findIndex((p) => p.user_id === userId && p.chapter_key === chapterKey);
    const record = {
      user_id: userId,
      chapter_key: chapterKey,
      completed: Boolean(data.completed),
      score: data.score || 0,
      percent: data.percent || 0,
      last_studied: now,
    };

    if (idx !== -1) {
      local.progress[idx] = { ...local.progress[idx], ...record };
    } else {
      local.progress.push(record);
    }
    writeLocalDB(local);
    return record;
  },

  // PRACTICE ATTEMPTS
  async recordPracticeAttempt(userId, attempt) {
    if (!userId) return null;
    const attemptId = 'att_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    const record = {
      id: attemptId,
      user_id: userId,
      question_id: attempt.questionId,
      topic: attempt.topic || 'General',
      is_correct: Boolean(attempt.isCorrect),
      difficulty: attempt.difficulty || 'Medium',
      timestamp: Date.now(),
    };

    if (this.isPostgres) {
      await pgPool.query(
        `INSERT INTO quiz_attempts (id, user_id, question_id, topic, is_correct, difficulty, timestamp)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [record.id, record.user_id, record.question_id, record.topic, record.is_correct, record.difficulty, record.timestamp]
      );
      return record;
    }

    const local = readLocalDB();
    local.quiz_attempts.unshift(record);
    if (local.quiz_attempts.length > 500) local.quiz_attempts = local.quiz_attempts.slice(0, 500);
    writeLocalDB(local);
    return record;
  },

  async getUserPracticeHistory(userId) {
    if (!userId) return [];

    if (this.isPostgres) {
      const res = await pgPool.query('SELECT * FROM quiz_attempts WHERE user_id = $1 ORDER BY timestamp DESC LIMIT 100', [userId]);
      return res.rows;
    }

    const local = readLocalDB();
    return local.quiz_attempts.filter((a) => a.user_id === userId).slice(0, 100);
  },

  // BOOKMARKS
  async getUserBookmarks(userId) {
    if (!userId) return [];
    if (this.isPostgres) {
      const res = await pgPool.query('SELECT * FROM bookmarks WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
      return res.rows;
    }
    const local = readLocalDB();
    return local.bookmarks.filter((b) => b.user_id === userId);
  },

  async addBookmark(userId, bookmark) {
    const id = 'bm_' + Date.now();
    const item = {
      id,
      user_id: userId,
      class_id: bookmark.classId,
      subject_id: bookmark.subjectId,
      chapter_id: bookmark.chapterId,
      title: bookmark.title,
      created_at: new Date().toISOString()
    };

    if (this.isPostgres) {
      await pgPool.query(
        `INSERT INTO bookmarks (id, user_id, class_id, subject_id, chapter_id, title, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [item.id, item.user_id, item.class_id, item.subject_id, item.chapter_id, item.title, item.created_at]
      );
      return item;
    }

    const local = readLocalDB();
    local.bookmarks.unshift(item);
    writeLocalDB(local);
    return item;
  },

  async deleteBookmark(userId, bookmarkId) {
    if (this.isPostgres) {
      await pgPool.query('DELETE FROM bookmarks WHERE id = $1 AND user_id = $2', [bookmarkId, userId]);
      return true;
    }
    const local = readLocalDB();
    local.bookmarks = local.bookmarks.filter((b) => !(b.id === bookmarkId && b.user_id === userId));
    writeLocalDB(local);
    return true;
  },

  // STUDY NOTES
  async getUserNotes(userId, chapterKey = null) {
    if (!userId) return [];
    if (this.isPostgres) {
      const query = chapterKey
        ? 'SELECT * FROM notes WHERE user_id = $1 AND chapter_key = $2 ORDER BY created_at DESC'
        : 'SELECT * FROM notes WHERE user_id = $1 ORDER BY created_at DESC';
      const params = chapterKey ? [userId, chapterKey] : [userId];
      const res = await pgPool.query(query, params);
      return res.rows;
    }
    const local = readLocalDB();
    return local.notes.filter((n) => n.user_id === userId && (!chapterKey || n.chapter_key === chapterKey));
  },

  async saveNote(userId, note) {
    const id = 'note_' + Date.now();
    const item = {
      id,
      user_id: userId,
      chapter_key: note.chapterKey,
      text: note.text.trim(),
      tag: note.tag || 'Note',
      created_at: new Date().toISOString()
    };

    if (this.isPostgres) {
      await pgPool.query(
        `INSERT INTO notes (id, user_id, chapter_key, text, tag, created_at)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [item.id, item.user_id, item.chapter_key, item.text, item.tag, item.created_at]
      );
      return item;
    }

    const local = readLocalDB();
    local.notes.unshift(item);
    writeLocalDB(local);
    return item;
  },

  async deleteNote(userId, noteId) {
    if (this.isPostgres) {
      await pgPool.query('DELETE FROM notes WHERE id = $1 AND user_id = $2', [noteId, userId]);
      return true;
    }
    const local = readLocalDB();
    local.notes = local.notes.filter((n) => !(n.id === noteId && n.user_id === userId));
    writeLocalDB(local);
    return true;
  },

  // BATCH SYNC ENGINE (for offline queue ingestion)
  async batchSync(userId, syncItems = []) {
    if (!userId || !Array.isArray(syncItems) || syncItems.length === 0) {
      return { syncedCount: 0, success: true };
    }

    let synced = 0;
    for (const item of syncItems) {
      const { actionType, payload } = item;
      try {
        if (actionType === 'SAVE_PROGRESS' && payload?.key && payload?.data) {
          await this.saveProgress(userId, payload.key, payload.data);
          synced++;
        } else if (actionType === 'RECORD_PRACTICE' && payload) {
          await this.recordPracticeAttempt(userId, payload);
          synced++;
        } else if (actionType === 'SAVE_NOTE' && payload) {
          await this.saveNote(userId, {
            chapterKey: payload.lessonId,
            text: payload.text,
            tag: payload.tag
          });
          synced++;
        } else if (actionType === 'UPDATE_PROFILE' && payload) {
          await this.updateProfile(userId, payload);
          synced++;
        }
      } catch (err) {
        console.error('Failed to sync item:', item, err);
      }
    }

    return { syncedCount: synced, success: true };
  }
};
