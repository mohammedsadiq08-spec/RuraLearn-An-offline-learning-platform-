// RuraLearn Skill-Based Learning Tracks
// Structure: Concept -> Example -> Practice -> Mini Project -> Assessment

export const SKILLS_DATA = [
  {
    id: 'programming-python',
    title: 'Python Programming',
    category: 'Technology & Coding',
    icon: 'Code',
    color: 'emerald',
    description: 'From zero coding experience to building automated tools and scripts.',
    milestones: [
      {
        level: 'Beginner',
        duration: '2 Weeks',
        concept: 'Variables, loops, conditionals, and standard input/output.',
        example: 'Automated arithmetic calculator and student grading script.',
        practice: 'Write a loop that prints the multiplication table for any user input number.',
        miniProject: 'CLI Village Crop Harvest & Revenue Tracker',
        assessment: '15-question quiz covering syntax, conditionals, and loops.'
      },
      {
        level: 'Intermediate',
        duration: '3 Weeks',
        concept: 'Functions, dictionary lookups, list comprehensions, and CSV file reading.',
        example: 'Parsing local wholesale market price CSV files and computing averages.',
        practice: 'Build a function that filters crops with price above a specified threshold.',
        miniProject: 'Offline Inventory Management System with File Storage',
        assessment: 'Code debugging challenge: Fix 3 broken file-reading functions.'
      },
      {
        level: 'Advanced',
        duration: '4 Weeks',
        concept: 'Object-Oriented Programming (Classes/Inheritance), Exception handling, and SQLite.',
        example: 'Modeling bank accounts with deposit, withdrawal, and transaction logging.',
        practice: 'Implement an SQLite database manager with ACID transactional safety.',
        miniProject: 'Micro-Finance Self-Help Group (SHG) Ledger Application',
        assessment: 'Build a full CLI app with persistence and unit tests.'
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development & Frontend',
    category: 'Technology & Coding',
    icon: 'Globe',
    color: 'blue',
    description: 'Build fast, mobile-friendly websites using HTML5, CSS3, and JavaScript.',
    milestones: [
      {
        level: 'Beginner',
        duration: '2 Weeks',
        concept: 'Semantic HTML tags, CSS Flexbox, responsive viewports, and clean layouts.',
        example: 'Creating a clean, accessible website for a rural primary school.',
        practice: 'Style a responsive 3-column product showcase using CSS Grid and Flexbox.',
        miniProject: 'Village Handicrafts & Farmer Showcase Portfolio Page',
        assessment: 'Build an accessible mobile-friendly landing page without frameworks.'
      },
      {
        level: 'Intermediate',
        duration: '3 Weeks',
        concept: 'JavaScript DOM manipulation, event listeners, localStorage, and Fetch API.',
        example: 'Interactive dynamic todo checklist that saves items across page reloads.',
        practice: 'Create a dynamic search filter that matches table records in real-time.',
        miniProject: 'Offline-First Community Notice Board Web App',
        assessment: 'Create a functional interactive loan interest calculator.'
      },
      {
        level: 'Advanced',
        duration: '4 Weeks',
        concept: 'React components, hooks (useState, useEffect), Tailwind CSS, and Service Workers.',
        example: 'Building a Progressive Web App (PWA) that operates without internet.',
        practice: 'Implement a service worker caching shell and dynamic offline store.',
        miniProject: 'RuraLearn Sub-module: Offline Audio Storybook Player',
        assessment: 'Deploy a production-ready PWA with Lighthouse score > 90.'
      }
    ]
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy & Banking',
    category: 'Vocational & Life Skills',
    icon: 'Landmark',
    color: 'amber',
    description: 'Master budgeting, savings, bank accounts, UPI safety, and avoiding debt traps.',
    milestones: [
      {
        level: 'Beginner',
        duration: '1 Week',
        concept: 'Savings accounts vs fixed deposits, simple vs compound interest, and debit cards.',
        example: 'Calculating the difference between ₹10,000 at 4% simple vs 7% compound interest.',
        practice: 'Plan a monthly household expense budget distinguishing Needs vs Wants.',
        miniProject: 'Family Monthly Expense & Savings Planner Chart',
        assessment: 'Calculate final maturity value of a 3-year recurring deposit.'
      },
      {
        level: 'Intermediate',
        duration: '2 Weeks',
        concept: 'Digital payments (UPI, QR codes), cyber safety, avoiding OTP fraud and loan scams.',
        example: 'Verifying authentic bank SMS alerts vs phishing links.',
        practice: 'Identify 5 red flags in a predatory loan agreement or fake lottery message.',
        miniProject: 'Community Cyber Safety Guide for Village Elders',
        assessment: 'Scenario-based quiz on handling unauthorized transactions and bank disputes.'
      },
      {
        level: 'Advanced',
        duration: '3 Weeks',
        concept: 'Government agricultural schemes (Kisan Credit Card, PMFBY crop insurance), mutual funds.',
        example: 'Comparing crop loss claim procedures across various insurance providers.',
        practice: 'Compute emergency fund requirements for 6 months of living expenses.',
        miniProject: 'Agricultural Crop Loan & Risk Mitigation Roadmap',
        assessment: 'Comprehensive financial health diagnostic assessment.'
      }
    ]
  },
  {
    id: 'artificial-intelligence',
    title: 'AI & Machine Learning Basics',
    category: 'Future Skills',
    icon: 'Cpu',
    color: 'purple',
    description: 'Understand how AI models work and how they solve real-world problems.',
    milestones: [
      {
        level: 'Beginner',
        duration: '2 Weeks',
        concept: 'What is AI vs Machine Learning vs Deep Learning; Supervised vs Unsupervised learning.',
        example: 'How spam filters classify emails as junk vs normal inbox.',
        practice: 'Categorize 10 real-world datasets into regression or classification tasks.',
        miniProject: 'Crop Disease Identifier Concept Map & Rule-Based Classifier',
        assessment: 'Foundations of AI and machine learning terminology test.'
      },
      {
        level: 'Intermediate',
        duration: '3 Weeks',
        concept: 'Linear Regression, Decision Trees, training/test splits, and accuracy evaluation.',
        example: 'Predicting tomato market price based on rainfall and historical season data.',
        practice: 'Train a basic scikit-learn decision tree to classify soil fertility.',
        miniProject: 'Soil Suitability Predictor for Crop Selection',
        assessment: 'Model evaluation exercise: compute precision, recall, and F1-score.'
      },
      {
        level: 'Advanced',
        duration: '4 Weeks',
        concept: 'Neural networks, computer vision basics, and deploying lightweight models on edge devices.',
        example: 'Detecting leaf rust disease from smartphone camera images.',
        practice: 'Run an inference script with a quantized lightweight neural network.',
        miniProject: 'Offline Plant Disease Detector Prototype',
        assessment: 'End-to-end ML pipeline evaluation and ethical bias audit.'
      }
    ]
  },
  {
    id: 'communication-english',
    title: 'English Speaking & Interview Prep',
    category: 'Communication & Career',
    icon: 'MessageSquare',
    color: 'rose',
    description: 'Gain fluency, expand everyday vocabulary, and ace professional job interviews.',
    milestones: [
      {
        level: 'Beginner',
        duration: '2 Weeks',
        concept: 'Everyday greetings, introducing oneself, asking for directions, and telephone etiquette.',
        example: 'Roleplay: Introducing yourself to a college admissions counselor.',
        practice: 'Record and practice a 60-second "Tell Me About Yourself" introduction.',
        miniProject: 'Audio / Self-Introduction Video Pitch',
        assessment: 'Basic conversational fluency and pronunciation evaluation.'
      },
      {
        level: 'Intermediate',
        duration: '3 Weeks',
        concept: 'Expressing opinions politely, agreeing/disagreeing, and group discussion tactics.',
        example: 'Participating in a panel on "Renewable Energy in Rural India".',
        practice: 'Draft 5 structured arguments supporting a community development policy.',
        miniProject: 'Group Discussion Simulation Script & Presentation',
        assessment: 'Vocabulary and grammatical accuracy in spoken speech test.'
      },
      {
        level: 'Advanced',
        duration: '3 Weeks',
        concept: 'The STAR interview technique, salary negotiation basics, and formal presentations.',
        example: 'Answering: "Describe a challenge you faced and how you overcame it."',
        practice: 'Conduct a mock technical/HR interview with peer feedback.',
        miniProject: 'Complete Job Application Portfolio (Resume + Cover Letter + Video Pitch)',
        assessment: 'Full mock interview panel evaluation.'
      }
    ]
  }
];
