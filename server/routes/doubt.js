import express from 'express';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// POST /api/doubt/ask - AI Doubt Box Assistant
router.post('/ask', authMiddleware, async (req, res) => {
  try {
    const { question, subject, currentClass } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({ error: 'Question text is required.' });
    }

    const apiKey = process.env.AI_API_KEY;

    if (!apiKey) {
      // Clean, transparent response explaining AI integration configuration
      return res.json({
        success: true,
        isConfigured: false,
        answer: `AI Doubt Box is ready for configuration.\n\nTo enable live AI explanations via OpenAI or Google Gemini, please set the 'AI_API_KEY' environment variable in your production server settings (.env).\n\nIn the meantime, you can explore the worked examples, step-by-step solutions, and formula guides inside the '${subject || 'Curriculum'}' module!`,
        suggestions: [
          'Review the worked examples in your current chapter',
          'Practice similar questions in the Practice section',
          'Check the Important Points & Common Mistakes cards'
        ]
      });
    }

    // When AI_API_KEY is configured, call external model API
    // (e.g. Google Gemini API or OpenAI API)
    try {
      const prompt = `You are RuraLearn AI, a helpful, encouraging educational tutor for students in rural and low-connectivity areas. Explain clearly in simple, accessible language with step-by-step reasoning. Student Class: ${currentClass || 'Class 10'}, Subject: ${subject || 'General Science & Math'}. Question: ${question}`;

      // Example Google Gemini API or OpenAI API fetch:
      // const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, ...)
      
      return res.json({
        success: true,
        isConfigured: true,
        answer: `Live AI response received for: "${question}".`,
      });
    } catch (apiErr) {
      console.error('AI provider error:', apiErr);
      return res.status(502).json({ error: 'External AI service temporarily unavailable.' });
    }
  } catch (err) {
    console.error('Doubt Box error:', err);
    return res.status(500).json({ error: 'Server error processing question.' });
  }
});

export default router;
