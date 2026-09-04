import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db/index.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'ruralearn_jwt_secret_dev_2026_super_secure_key';

// Generate Token
function createToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30d' });
}

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, currentClass, targetGoal } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email address is required.' });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    }

    const existingUser = await db.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await db.createUser({
      email,
      password_hash: passwordHash,
      name,
      current_class: currentClass || 'Class 10',
      target_goal: targetGoal || 'Board Exam Preparation & Coding Skills',
      provider: 'email',
    });

    const token = createToken(user.id);
    return res.status(201).json({ token, user });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ error: 'Server error during registration.' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await db.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    if (user.password_hash) {
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }
    }

    const { password_hash, ...safeUser } = user;
    const token = createToken(user.id);
    return res.json({ token, user: safeUser });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Server error during login.' });
  }
});

// POST /api/auth/social (Google & Facebook)
router.post('/social', async (req, res) => {
  try {
    const { email, name, provider } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required for social login.' });
    }

    let user = await db.findUserByEmail(email);
    if (!user) {
      user = await db.createUser({
        email,
        password_hash: null,
        name: name || email.split('@')[0],
        provider: provider || 'google',
        current_class: 'Class 10',
        target_goal: 'Secondary Board Prep & Practical Skills',
      });
    }

    const { password_hash, ...safeUser } = user;
    const token = createToken(user.id);
    return res.json({ token, user: safeUser });
  } catch (err) {
    console.error('Social login error:', err);
    return res.status(500).json({ error: 'Server error during social login.' });
  }
});

// POST /api/auth/guest (Instant Offline Student Access)
router.post('/guest', async (req, res) => {
  try {
    const guestEmail = `guest_${Date.now()}@ruralearn.local`;
    const user = await db.createUser({
      email: guestEmail,
      password_hash: null,
      name: 'Offline Student',
      provider: 'offline_guest',
      current_class: 'Class 10',
      target_goal: 'Self-Paced Offline Study',
    });

    const token = createToken(user.id);
    return res.json({ token, user });
  } catch (err) {
    console.error('Guest login error:', err);
    return res.status(500).json({ error: 'Server error creating guest session.' });
  }
});

// GET /api/auth/me
router.get('/me', authMiddleware, async (req, res) => {
  return res.json({ user: req.user });
});

// PUT /api/auth/profile
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, currentClass, targetGoal, preferredLanguage, dailyTargetMinutes, onboardingCompleted, streakDays } = req.body;

    const updates = {};
    if (name !== undefined) updates.name = name;
    if (currentClass !== undefined) updates.current_class = currentClass;
    if (targetGoal !== undefined) updates.target_goal = targetGoal;
    if (preferredLanguage !== undefined) updates.preferred_language = preferredLanguage;
    if (dailyTargetMinutes !== undefined) updates.daily_target_minutes = dailyTargetMinutes;
    if (onboardingCompleted !== undefined) updates.onboarding_completed = onboardingCompleted;
    if (streakDays !== undefined) updates.streak_days = streakDays;

    const updatedProfile = await db.updateProfile(req.userId, updates);
    const updatedUser = await db.getUserById(req.userId);
    return res.json({ user: updatedUser, profile: updatedProfile });
  } catch (err) {
    console.error('Profile update error:', err);
    return res.status(500).json({ error: 'Server error updating profile.' });
  }
});

export default router;
