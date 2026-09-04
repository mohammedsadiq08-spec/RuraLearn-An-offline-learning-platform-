import bcrypt from 'bcryptjs';
import { db } from './db/index.js';
import { getClasses } from '../src/data/curriculum/index.js';

async function seed() {
  console.log('Seeding RuraLearn Database...');

  // Create demo verified student account
  const demoEmail = 'student@ruralearn.org';
  const existing = await db.findUserByEmail(demoEmail);

  if (!existing) {
    const passwordHash = await bcrypt.hash('ruralearn2026', 10);
    const user = await db.createUser({
      email: demoEmail,
      password_hash: passwordHash,
      name: 'Aarav Sharma',
      current_class: 'Class 10',
      target_goal: 'Board Exam Preparation & Coding Skills',
      provider: 'email',
    });

    console.log('Created default verified student user:', user.email);

    // Seed initial progress for demo user
    await db.saveProgress(user.id, 'Class 10_Mathematics_Real Numbers', {
      completed: true,
      score: 100,
      percent: 100,
    });
    await db.saveProgress(user.id, 'Class 10_Mathematics_Polynomials', {
      completed: false,
      score: 75,
      percent: 70,
    });
    await db.saveProgress(user.id, 'Class 10_Science_Chemical Reactions and Equations', {
      completed: true,
      score: 100,
      percent: 100,
    });

    // Seed initial quiz attempts
    await db.recordPracticeAttempt(user.id, {
      questionId: 'rn-1',
      topic: 'Real Numbers',
      isCorrect: true,
      difficulty: 'Easy'
    });
    await db.recordPracticeAttempt(user.id, {
      questionId: 'rn-2',
      topic: 'Real Numbers',
      isCorrect: true,
      difficulty: 'Medium'
    });
    await db.recordPracticeAttempt(user.id, {
      questionId: 'poly-1',
      topic: 'Polynomials',
      isCorrect: false,
      difficulty: 'Medium'
    });

    // Seed initial study notes
    await db.saveNote(user.id, {
      chapterKey: 'Class 10_Mathematics_Real Numbers',
      text: 'Remember Euclid Division Lemma: a = bq + r with 0 <= r < b. Fundamental for HCF calculations.',
      tag: 'Formula'
    });

    console.log('Seeded initial progress, practice attempts, and study notes.');
  } else {
    console.log('Default demo student already exists in database.');
  }

  const classes = getClasses();
  console.log(`Verified ${classes.length} academic classes in curriculum registry.`);
  console.log('Database Seeding Complete!');
}

seed().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
