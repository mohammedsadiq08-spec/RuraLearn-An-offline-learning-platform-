// RuraLearn Skill Development & Career Roadmap Database
// Comprehensive Discoverable Tracks, Visual Pathways, Projects, Practice, and Portfolio Guides

export const SKILL_CATEGORIES = [
  'All Skills',
  'Technology & AI',
  'Finance & Stock Market',
  'Design & UI/UX',
  'Communication & Career',
  'Business & Entrepreneurship'
];

export const SKILL_TRACKS = [
  {
    id: 'ai-ml',
    category: 'Technology & AI',
    title: 'Artificial Intelligence & Machine Learning',
    subtitle: 'From Python math foundations to LLMs, Neural Networks, and production AI applications.',
    badge: 'High Industry Demand',
    duration: '16-20 Weeks',
    level: 'Intermediate to Advanced',
    prerequisites: 'Basic programming logic (Python recommended) and school mathematics (algebra & statistics).',
    whyLearn: 'AI is transforming agriculture, healthcare, finance, and software engineering. AI engineers build intelligent automated systems, predictive algorithms, and generative assistants.',
    visualJourney: [
      { stage: '1. Interest', detail: 'Curiosity about how AI predicts weather, diagnoses diseases, and automates tasks.' },
      { stage: '2. Foundations', detail: 'Python, Linear Algebra, Matrix Multiplication, Calculus, Probability & Statistics.' },
      { stage: '3. Core ML', detail: 'Regression, Classification, Decision Trees, Random Forests, Scikit-Learn.' },
      { stage: '4. Deep Learning', detail: 'Neural Networks, CNNs (Vision), RNNs/Transformers (NLP), PyTorch/TensorFlow.' },
      { stage: '5. Projects', detail: 'Crop Disease Detector, Crop Yield Prediction, Document Summarizer LLM.' },
      { stage: '6. Portfolio', detail: 'GitHub repositories with Kaggle notebook demonstrations and live HuggingFace Spaces.' },
      { stage: '7. Career', detail: 'Machine Learning Engineer, Data Scientist, AI Research Associate.' }
    ],
    roadmap: [
      {
        tier: 'Beginner Phase (Weeks 1 - 5)',
        topics: ['Python Data Stack (NumPy arrays, Pandas DataFrames)', 'Data Visualization (Matplotlib & Seaborn)', 'Statistical Analysis (Mean, Variance, Distributions, Hypothesis Testing)', 'Exploratory Data Analysis (EDA) on real-world datasets.'],
        project: 'Exploratory Data Analysis Report on Agricultural Rainfall & Crop Yield Data.'
      },
      {
        tier: 'Intermediate Phase (Weeks 6 - 12)',
        topics: ['Supervised Learning (Linear Regression, Logistic Regression, KNN, SVM)', 'Tree-Based Models (Decision Trees, XGBoost, LightGBM)', 'Unsupervised Learning (K-Means Clustering, PCA Dimensionality Reduction)', 'Model Evaluation (Precision, Recall, F1-Score, ROC-AUC Curves).'],
        project: 'Predictive Bank Credit Risk & Loan Eligibility Scorer.'
      },
      {
        tier: 'Advanced Phase (Weeks 13 - 20)',
        topics: ['Deep Learning with PyTorch', 'Computer Vision with Convolutional Networks', 'Natural Language Processing & Large Language Models (LLMs)', 'RAG (Retrieval-Augmented Generation) with LangChain and Vector DBs', 'Model Deployment with FastAPI and Docker.'],
        project: 'Multilingual Rural Health Diagnostic Assistant with Image Analysis.'
      }
    ],
    resources: [
      { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', type: 'Free Interactive Notebooks' },
      { name: 'Fast.ai Practical Deep Learning', url: 'https://course.fast.ai/', type: 'Free World-Class Course' },
      { name: 'HuggingFace Course', url: 'https://huggingface.co/learn', type: 'Free NLP & Transformer Tutorials' }
    ]
  },
  {
    id: 'financial-literacy',
    category: 'Finance & Stock Market',
    title: 'Financial Literacy, Banking & Stock Market',
    subtitle: 'Master personal budgeting, rural banking schemes, mutual funds, and stock market fundamentals.',
    badge: 'Essential Life & Wealth Skill',
    duration: '8-10 Weeks',
    level: 'Beginner to Intermediate',
    prerequisites: 'Basic arithmetic and an interest in money management.',
    whyLearn: 'Understanding compound interest, micro-financing, inflation, and capital markets protects hard-earned savings, prevents predatory debt, and builds long-term generational wealth.',
    visualJourney: [
      { stage: '1. Interest', detail: 'Desire to budget wisely, grow savings, and avoid debt traps.' },
      { stage: '2. Fundamentals', detail: 'Budgeting 50/30/20 rule, Emergency Funds, Inflation, Compound Interest formula.' },
      { stage: '3. Banking & Credit', detail: 'Savings Accounts, Fixed Deposits, Credit Scores (CIBIL), Micro-loans, Self-Help Groups (SHGs).' },
      { stage: '4. Capital Markets', detail: 'Equity Stocks, NSE/BSE, Mutual Funds (SIPs), Index Funds, Bonds, Risk Diversification.' },
      { stage: '5. Practical Tasks', detail: 'Creating personal family budget sheets, calculating SIP returns over 20 years.' },
      { stage: '6. Investing', detail: 'Disciplined long-term index investing and fundamental analysis of companies.' },
      { stage: '7. Career / Financial Independence', detail: 'Personal Financial Advisor, Mutual Fund Distributor, Wealth Planner.' }
    ],
    roadmap: [
      {
        tier: 'Beginner Phase: Money Fundamentals (Weeks 1 - 3)',
        topics: ['Income vs Expense tracking', 'Inflation and why money in savings accounts loses purchasing power', 'Emergency Fund calculation (6 months living expenses)', 'Government Schemes (PM Jan Dhan Yojana, Atal Pension Yojana, Crop Insurance).'],
        project: 'Create a dynamic Excel / Google Sheets Personal & Household Budget Plan.'
      },
      {
        tier: 'Intermediate Phase: Smart Investments (Weeks 4 - 6)',
        topics: ['Power of Compounding (Rule of 72)', 'Mutual Funds vs Direct Equities', 'Systematic Investment Plans (SIP) mechanics', 'Debt Instruments (Government Bonds, Sovereign Gold Bonds, PPF)', 'Asset Allocation based on risk profile.'],
        project: '10-Year SIP Investment Portfolio Simulation with Risk Diversification.'
      },
      {
        tier: 'Advanced Phase: Stock Market & Valuation (Weeks 7 - 10)',
        topics: ['How the Stock Exchange operates (IPO, Primary vs Secondary market)', 'Fundamental Analysis (P/E Ratio, P/B Ratio, Debt-to-Equity, Free Cash Flow)', 'Reading Balance Sheets and Profit & Loss statements', 'Risk Management & Psychology of Investing.'],
        project: 'Fundamental Analysis & Valuation Report of an Indian FMCG / Agrotech Enterprise.'
      }
    ],
    resources: [
      { name: 'Zerodha Varsity', url: 'https://zerodha.com/varsity/', type: '100% Free Complete Financial & Market Education' },
      { name: 'RBI Financial Education', url: 'https://www.rbi.org.in/', type: 'Official Banking Literacy Guidelines' },
      { name: 'NISM Certifications', url: 'https://www.nism.ac.in/', type: 'Accredited Securities Certification Guides' }
    ]
  },
  {
    id: 'web-development',
    category: 'Technology & AI',
    title: 'Modern Full-Stack Web Development',
    subtitle: 'Build responsive web apps, REST APIs, databases, and launch real SaaS products from scratch.',
    badge: 'Fastest Route to Tech Employment & Freelancing',
    duration: '14-16 Weeks',
    level: 'Beginner to Advanced',
    prerequisites: 'Basic computer literacy and logical thinking.',
    whyLearn: 'Every business, school, and government service requires web software. Full-stack developers can work remotely, build freelance client websites, or launch internet startups.',
    visualJourney: [
      { stage: '1. Interest', detail: 'Desire to build websites and web applications from scratch.' },
      { stage: '2. Frontend Basics', detail: 'Semantic HTML5, CSS3, Flexbox/Grid, Responsive Design, Tailwind CSS.' },
      { stage: '3. Dynamic JavaScript', detail: 'ES6+ Syntax, DOM manipulation, Fetch API, Async/Await, Events.' },
      { stage: '4. Modern Frameworks', detail: 'React 19, Component Architecture, State Hooks, React Router, Context.' },
      { stage: '5. Backend & Databases', detail: 'Node.js, Express REST APIs, PostgreSQL / MongoDB, JWT Authentication.' },
      { stage: '6. Real Projects', detail: 'E-Commerce Store, Local Village Business Directory, School Management Portal.' },
      { stage: '7. Career', detail: 'Frontend Developer, Backend Engineer, Full-Stack Freelancer.' }
    ],
    roadmap: [
      {
        tier: 'Phase 1: Frontend Foundation (Weeks 1 - 5)',
        topics: ['Semantic HTML & Accessibility (a11y)', 'Modern CSS3, Flexbox, CSS Grid, Tailwind CSS', 'JavaScript Core, DOM Manipulation, Promises, Fetch API, LocalStorage.'],
        project: 'Responsive Multi-Page Village Artisan Marketplace Showcase with Cart.'
      },
      {
        tier: 'Phase 2: React & UI Architecture (Weeks 6 - 10)',
        topics: ['React Component Thinking, Props & State', 'Hooks (useState, useEffect, useMemo, custom hooks)', 'React Router Client-Side Navigation', 'State Management & Form Validation.'],
        project: 'Interactive Offline-First Student Learning Dashboard with Quiz Engine.'
      },
      {
        tier: 'Phase 3: Backend, DB & Cloud Deployment (Weeks 11 - 16)',
        topics: ['Node.js & Express REST API architecture', 'PostgreSQL Database Design, Joins & Indexing', 'JWT Authentication & Password Hashing with Bcrypt', 'CI/CD Pipelines, Docker Basics & Vercel/Render Cloud Deployment.'],
        project: 'Full-Stack Telemedicine / Agriculture Advisory Booking Platform.'
      }
    ],
    resources: [
      { name: 'The Odin Project', url: 'https://www.theodinproject.com/', type: 'Free Full-Stack Open Source Curriculum' },
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', type: 'Industry Standard Web Reference' },
      { name: 'fullstackopen.com', url: 'https://fullstackopen.com/en/', type: 'Free University of Helsinki Modern Full-Stack Course' }
    ]
  },
  {
    id: 'communication-english',
    category: 'Communication & Career',
    title: 'Professional English, Public Speaking & Interviews',
    subtitle: 'Overcome hesitation, build fluent English speaking skills, master workplace emails, and excel in interviews.',
    badge: 'Universal Career Multiplier',
    duration: '8-10 Weeks',
    level: 'Beginner to Professional',
    prerequisites: 'Basic reading knowledge of English letters and words.',
    whyLearn: 'Technical skills alone are not enough. Strong English fluency and confidence allow students from rural and regional backgrounds to succeed in corporate interviews, client pitches, and leadership roles.',
    visualJourney: [
      { stage: '1. Interest', detail: 'Overcoming fear of speaking in English and expressing ideas confidently.' },
      { stage: '2. Sentence Building', detail: 'Everyday vocabulary, tense clarity, active listening, and pronunciation.' },
      { stage: '3. Speaking Confidence', detail: 'Daily 10-minute self-talk, describing surroundings, shadow speaking practice.' },
      { stage: '4. Professional Writing', detail: 'Email etiquette, LinkedIn messaging, resume crafting, cover letters.' },
      { stage: '5. Public Speaking', detail: 'Slide presentations, storytelling structure, body language, voice modulation.' },
      { stage: '6. Interview Mastery', detail: 'STAR framework answering, mock HR interviews, handling unexpected questions.' },
      { stage: '7. Career Impact', detail: 'Acing Corporate Interviews, Leading Team Discussions, Client Negotiations.' }
    ],
    roadmap: [
      {
        tier: 'Phase 1: Conversational Fluency & Confidence (Weeks 1 - 3)',
        topics: ['Overcoming Mother Tongue Influence (MTI) with phonetic practice', '500 Most Common Workplace English Verbs and Phrases', 'Shadow Reading technique for natural rhythm and intonation', 'Daily 5-minute audio self-recording exercises.'],
        project: 'Record 3-Minute Daily Video Vlogs on Everyday Topics to Track Fluency.'
      },
      {
        tier: 'Phase 2: Professional Writing & Digital Presence (Weeks 4 - 6)',
        topics: ['Formal Email Writing (Subject lines, polite tone, calls to action)', 'LinkedIn Profile Optimization & Cold Outreach to Mentors/Recruiters', '1-Page ATS-Compliant Resume Writing', 'Technical Documentation and Summaries.'],
        project: 'Create a Complete Professional Portfolio Package (Resume + LinkedIn + Cover Letter).'
      },
      {
        tier: 'Phase 3: Presentations & Interview Performance (Weeks 7 - 10)',
        topics: ['Structured Presentation Design (Problem → Solution → Data → Action)', 'Group Discussion (GD) Tactics: Initiating, Moderating, and Concluding', 'Behavioral Interview STAR Framework (Situation, Task, Action, Result)', 'Handling Stress & Salary Negotiation conversations.'],
        project: 'Conduct 3 Recorded Mock Interviews with Peer Evaluation.'
      }
    ],
    resources: [
      { name: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish/', type: 'Free Audio Lessons, Grammar & Quizzes' },
      { name: 'Toastmasters International Public Speaking', url: 'https://www.toastmasters.org/', type: 'Global Public Speaking Frameworks' },
      { name: 'English with Lucy / Speak English with Vanessa', url: 'https://www.youtube.com/', type: 'Accessible Visual Speaking Lessons' }
    ]
  },
  {
    id: 'entrepreneurship',
    category: 'Business & Entrepreneurship',
    title: 'Rural & Digital Entrepreneurship',
    subtitle: 'Turn local ideas into sustainable businesses, validate market demand, and leverage digital tools.',
    badge: 'Economic Self-Reliance & Job Creation',
    duration: '10-12 Weeks',
    level: 'Beginner to Intermediate',
    prerequisites: 'Passion for problem-solving and serving community needs.',
    whyLearn: 'Instead of waiting for jobs, entrepreneurs create livelihoods. Digital tools allow rural entrepreneurs to sell agricultural produce, handicrafts, local tourism, and services directly to global buyers.',
    visualJourney: [
      { stage: '1. Opportunity', detail: 'Identifying unmet local needs in farming, supply chain, healthcare, or education.' },
      { stage: '2. Idea Validation', detail: 'Talking to 20 potential customers, prototyping a Minimal Viable Product (MVP).' },
      { stage: '3. Business Model', detail: 'Unit economics, pricing, cost structure, margins, and cash flow cycles.' },
      { stage: '4. Digital Marketing', detail: 'WhatsApp Business, Instagram storefront, Google My Business, localized SEO.' },
      { stage: '5. Operations & Legal', detail: 'GST registration, MSME Udyam registration, bank accounts, supply contracts.' },
      { stage: '6. Government Schemes', detail: 'PM MUDRA Yojana, Startup India Seed Fund, NABARD agricultural grants.' },
      { stage: '7. Growth', detail: 'Scaling operations, hiring local youth, generating sustainable revenue.' }
    ],
    roadmap: [
      {
        tier: 'Phase 1: Problem Discovery & Customer Validation (Weeks 1 - 4)',
        topics: ['Design Thinking for Rural Problem Solving', 'Lean Canvas 1-Page Business Plan', 'Conducting Customer Interviews without bias', 'Building an MVP with zero upfront capital.'],
        project: 'Create a 1-Page Lean Business Model Canvas with 20 Customer Interview Notes.'
      },
      {
        tier: 'Phase 2: Digital Marketing & Sales Channels (Weeks 5 - 8)',
        topics: ['Setting up WhatsApp for Business & Automated Catalogs', 'Social Media Marketing for Local Brands', 'Payment Gateways & UPI QR integration', 'Customer Retention & Referral Programs.'],
        project: 'Launch a Live Digital Storefront with UPI Payments & Customer Feedback Loop.'
      },
      {
        tier: 'Phase 3: Finance, Grants & Scaling (Weeks 9 - 12)',
        topics: ['Basic Bookkeeping & Cash Flow Statements', 'Accessing MUDRA, Stand-Up India & NABARD schemes', 'Team Hiring & Incentive structures', 'Scaling beyond the home district.'],
        project: 'Draft a Complete 3-Year Pitch Deck for Bank Loan / Seed Grant Application.'
      }
    ],
    resources: [
      { name: 'Startup India Hub', url: 'https://www.startupindia.gov.in/', type: 'Government Startup Mentorship & Schemes' },
      { name: 'Y Combinator Startup School', url: 'https://www.startupschool.org/', type: 'World-Renowned Free Founder Curriculum' },
      { name: 'NABARD Rural Entrepreneurship Guides', url: 'https://www.nabard.org/', type: 'Agri-Business & Micro-Enterprise Support' }
    ]
  }
];

export const PERSONALIZED_ROADMAP_PRESETS = [
  {
    title: 'Software Developer Career Path',
    icon: 'Code',
    target: 'Full Stack Software Engineer',
    steps: ['Master C++ / Python syntax & logic', 'Complete Data Structures & Algorithms (Arrays to DP)', 'Learn HTML/CSS/JS & React 19', 'Build Full-Stack REST API with Node.js & PostgreSQL', 'Create 2 Production Projects & Git Portfolio', 'Prepare LeetCode Top 100 + STAR Interview Framework']
  },
  {
    title: 'School Board Exam Topper Path',
    icon: 'GraduationCap',
    target: 'Secondary & Higher Secondary Board Excellence',
    steps: ['Complete syllabus chapter-by-chapter with structured notes', 'Solve all worked textbook examples with step-by-step reasoning', 'Take daily 5-minute topic quizzes to strengthen weak concepts', 'Review High-Yield Formula cards and Common Exam Mistakes', 'Attempt 3 Full Timed Mock Tests under exam conditions']
  },
  {
    title: 'AI & Data Science Specialist',
    icon: 'Cpu',
    target: 'Machine Learning & Data Engineer',
    steps: ['Learn Python for Data Analysis (NumPy, Pandas, Matplotlib)', 'Master Statistics, Linear Algebra & Probability', 'Implement Scikit-Learn Supervised & Unsupervised Models', 'Learn Deep Learning & Neural Networks with PyTorch', 'Build & Deploy NLP/Vision Models on Cloud with FastAPI']
  },
  {
    title: 'Financial Independence & Market Analyst',
    icon: 'TrendingUp',
    target: 'Smart Investor & Financial Advisor',
    steps: ['Implement 50/30/20 personal budget & build emergency fund', 'Learn Compound Interest & Systematic Investment Plans (SIP)', 'Understand Stock Exchange operations & fundamental company analysis', 'Learn reading Balance Sheets & Cash Flow Statements', 'Build a diversified long-term investment portfolio']
  }
];
