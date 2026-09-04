// PostgreSQL Schema Definition for RuraLearn
export const SQL_SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(64) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  provider VARCHAR(32) DEFAULT 'email',
  role VARCHAR(32) DEFAULT 'student',
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS profiles (
  user_id VARCHAR(64) PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  current_class VARCHAR(64) DEFAULT 'Class 10',
  target_goal VARCHAR(255) DEFAULT 'Board Exam Preparation & Coding Skills',
  preferred_language VARCHAR(16) DEFAULT 'en',
  daily_target_minutes INT DEFAULT 30,
  streak_days INT DEFAULT 1,
  last_active_date DATE DEFAULT CURRENT_DATE,
  onboarding_completed BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS progress (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
  chapter_key VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  score INT DEFAULT 0,
  percent INT DEFAULT 0,
  last_studied BIGINT,
  UNIQUE(user_id, chapter_key)
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
  question_id VARCHAR(64) NOT NULL,
  topic VARCHAR(128) NOT NULL,
  is_correct BOOLEAN NOT NULL,
  difficulty VARCHAR(32) DEFAULT 'Medium',
  timestamp BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS bookmarks (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
  class_id VARCHAR(64) NOT NULL,
  subject_id VARCHAR(64) NOT NULL,
  chapter_id VARCHAR(128) NOT NULL,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS notes (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
  chapter_key VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  tag VARCHAR(64) DEFAULT 'Note',
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_user ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_topic ON quiz_attempts(topic);
CREATE INDEX IF NOT EXISTS idx_notes_user_chapter ON notes(user_id, chapter_key);
`;

export async function initPostgresSchema(pool) {
  if (!pool) return;
  try {
    await pool.query(SQL_SCHEMA);
    console.log('PostgreSQL schema initialized successfully.');
  } catch (err) {
    console.error('Error initializing PostgreSQL schema:', err);
  }
}
