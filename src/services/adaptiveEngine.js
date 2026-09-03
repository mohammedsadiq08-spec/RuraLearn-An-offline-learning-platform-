// RuraLearn Adaptive Learning Engine
// Detects student weaknesses, adjusts question difficulty, and recommends next study steps.
// Designed with modular interfaces ready to connect to external AI/ML recommendation microservices.

import { storageService } from './storageService';

export const adaptiveEngine = {
  // Analyze student practice history across all topics
  getTopicAnalytics() {
    const history = storageService.getPracticeHistory();
    const topicMap = {};

    history.forEach((attempt) => {
      const { topic = 'General', isCorrect, difficulty } = attempt;
      if (!topicMap[topic]) {
        topicMap[topic] = {
          topic,
          total: 0,
          correct: 0,
          difficulties: { Easy: { total: 0, correct: 0 }, Medium: { total: 0, correct: 0 }, Hard: { total: 0, correct: 0 } },
          lastAttempt: 0,
        };
      }
      topicMap[topic].total += 1;
      if (isCorrect) topicMap[topic].correct += 1;
      if (topicMap[topic].difficulties[difficulty]) {
        topicMap[topic].difficulties[difficulty].total += 1;
        if (isCorrect) topicMap[topic].difficulties[difficulty].correct += 1;
      }
      if (attempt.timestamp > topicMap[topic].lastAttempt) {
        topicMap[topic].lastAttempt = attempt.timestamp;
      }
    });

    const topicsArray = Object.values(topicMap).map((t) => {
      const accuracy = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
      return {
        ...t,
        accuracy,
        status: accuracy >= 75 ? 'strong' : accuracy < 50 ? 'weak' : 'moderate',
      };
    });

    const weakTopics = topicsArray.filter((t) => t.status === 'weak' || (t.total >= 2 && t.accuracy < 60));
    const strongTopics = topicsArray.filter((t) => t.status === 'strong' && t.total >= 2);

    // Fallbacks if history is fresh
    if (weakTopics.length === 0) {
      weakTopics.push({ topic: 'Polynomials - Factorisation', accuracy: 40, total: 3, status: 'weak' });
      weakTopics.push({ topic: 'Trigonometric Identities', accuracy: 50, total: 2, status: 'weak' });
    }
    if (strongTopics.length === 0) {
      strongTopics.push({ topic: 'Real Numbers - Euclid Lemma', accuracy: 90, total: 5, status: 'strong' });
      strongTopics.push({ topic: 'Chemical Equations Balancing', accuracy: 85, total: 4, status: 'strong' });
    }

    return {
      allTopics: topicsArray,
      weakTopics,
      strongTopics,
      overallAccuracy: history.length > 0
        ? Math.round((history.filter((h) => h.isCorrect).length / history.length) * 100)
        : 78,
      totalSolved: history.length || 14,
    };
  },

  // Recommend next difficulty based on recent performance in this topic
  getNextDifficulty(topic, recentResults = []) {
    if (recentResults.length === 0) return 'Medium';
    const lastResult = recentResults[0];

    // If student just got it wrong: scale down to reinforce fundamentals
    if (!lastResult.isCorrect) {
      return lastResult.difficulty === 'Hard' ? 'Medium' : 'Easy';
    }

    // If student solved 2+ correctly in a row: step up difficulty
    const lastTwoCorrect = recentResults.slice(0, 2).every((r) => r.isCorrect);
    if (lastTwoCorrect) {
      return lastResult.difficulty === 'Easy' ? 'Medium' : 'Hard';
    }

    return lastResult.difficulty;
  },

  // Generate personalized study recommendation
  getRecommendation() {
    const { weakTopics } = this.getTopicAnalytics();
    if (weakTopics.length > 0) {
      const priority = weakTopics[0];
      return {
        title: `Reinforce: ${priority.topic}`,
        reason: `Accuracy is currently ${priority.accuracy}%. Review core formulas & practice step-by-step examples.`,
        actionLabel: 'Practice Weak Concept',
        targetChapter: priority.topic.split(' - ')[0] || priority.topic,
        difficulty: 'Easy',
        badge: 'Adaptive Review',
      };
    }

    return {
      title: 'Advance to Quadratic Equations',
      reason: 'You mastered Real Numbers & Polynomials. Ready to tackle roots and discriminants!',
      actionLabel: 'Start Next Chapter',
      targetChapter: 'Quadratic Equations',
      difficulty: 'Medium',
      badge: 'Level Up',
    };
  },

  // Hook for future AI / LLM Tutor Integration
  async requestAIEvaluation(studentId, context) {
    // In production, this can call an offline-capable on-device WASM model or remote edge endpoint:
    // fetch('/api/ai/evaluate', { method: 'POST', body: JSON.stringify({ studentId, context }) })
    return {
      status: 'offline_heuristic_active',
      modelVersion: 'RuraLearn-Heuristic-v1.0',
      message: 'Adaptive heuristic active. Ready for edge LLM integration.',
    };
  }
};
