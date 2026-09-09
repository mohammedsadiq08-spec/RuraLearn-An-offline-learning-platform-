// RuraLearn Comprehensive Engineering & College Roadmap Database
// Complete 4-Year Industry-Ready Guide, Programming Languages, DSA, Projects, Git, Communication, Interviews, Problems & Careers

export const ENGINEERING_YEARS = [
  {
    year: 'Year 1',
    title: 'Foundation & Computational Thinking',
    focus: 'Build solid problem-solving fundamentals, choose your first programming language, master Git, and strengthen core math.',
    milestones: [
      {
        title: 'Choose First Programming Language (C / C++ or Python)',
        desc: 'Understand variables, loops, conditionals, functions, recursion, memory concepts (pointers in C/C++), and basic algorithmic thinking.',
        action: 'Write at least 50+ basic logic programs (Fibonacci, primes, matrix operations, string reversals).'
      },
      {
        title: 'Version Control & GitHub Fundamentals',
        desc: 'Learn git init, add, commit, branch, push, pull, pull requests, and write clean project README files.',
        action: 'Create a GitHub profile and push all your first-year practice code.'
      },
      {
        title: 'Linux & Command Line Mastery',
        desc: 'Learn terminal navigation (cd, ls, mkdir, grep, chmod, ssh) and basic shell scripting for developer efficiency.',
        action: 'Install WSL (Windows Subsystem for Linux) or dual-boot Ubuntu.'
      },
      {
        title: 'Engineering Mathematics & Discrete Structures',
        desc: 'Linear algebra, logic gates, set theory, combinatorics, and graph theory basics essential for algorithms.',
        action: 'Apply matrix algebra in programming simulations.'
      },
      {
        title: 'Communication & Technical English',
        desc: 'Start speaking in English daily, participate in classroom presentations, and read technical blogs/documentation.',
        action: 'Give 1 technical presentation per month in college/group.'
      }
    ]
  },
  {
    year: 'Year 2',
    title: 'Core Computer Science & Data Structures',
    focus: 'Master Data Structures & Algorithms, Object-Oriented Programming, and fundamental CS core subjects.',
    milestones: [
      {
        title: 'Data Structures & Algorithms (DSA)',
        desc: 'Arrays, Strings, Linked Lists, Stacks, Queues, Binary Trees, BSTs, Graphs, Sorting, Searching, and Dynamic Programming.',
        action: 'Solve 150+ problems across LeetCode / HackerRank / GeeksforGeeks.'
      },
      {
        title: 'Object-Oriented Programming (OOPs)',
        desc: 'Classes, Objects, Encapsulation, Abstraction, Inheritance, Polymorphism, and Design Principles (SOLID) in Java/C++.',
        action: 'Build an OOP-based system like a Library Management or Banking Simulation.'
      },
      {
        title: 'Database Management Systems (DBMS) & SQL',
        desc: 'Relational databases, SQL queries, Joins, Indexing, Normalization (1NF to BCNF), ACID properties, and Transactions.',
        action: 'Design and normalize database schemas with PostgreSQL or MySQL.'
      },
      {
        title: 'Operating Systems & Computer Networks',
        desc: 'Processes, Threads, Concurrency, Deadlocks, Memory Management, TCP/IP, OSI model, HTTP/HTTPS, and DNS.',
        action: 'Implement CPU scheduling algorithms and client-server socket programs.'
      },
      {
        title: 'First Full Intermediate Project',
        desc: 'Combine database + backend logic + frontend UI into a working software application.',
        action: 'Build a CRUD web application or desktop tool with GitHub documentation.'
      }
    ]
  },
  {
    year: 'Year 3',
    title: 'Specialization & Production Projects',
    focus: 'Specialize in a high-demand domain (Web Dev, AI/ML, Cloud/DevOps, Mobile), build end-to-end projects, and prepare for internships.',
    milestones: [
      {
        title: 'Domain Specialization',
        desc: 'Choose your track: Full Stack Web Development (MERN / Next.js / Spring Boot), AI/Data Science (Python, PyTorch, Scikit-Learn), or Cloud/DevOps (Docker, AWS, CI/CD).',
        action: 'Dedicate 6 months of focused building in your chosen domain.'
      },
      {
        title: 'Build 2-3 Production-Grade Projects',
        desc: 'Build real-world apps with authentication, database indexing, third-party APIs, responsive UI, and live deployment.',
        action: 'Deploy live on Vercel/Render/AWS and add custom domain / demo videos.'
      },
      {
        title: 'Open Source Contribution',
        desc: 'Find beginner-friendly GitHub repos (Good First Issues), read codebases, fix bugs, and submit pull requests.',
        action: 'Make at least 3 genuine open-source PRs.'
      },
      {
        title: 'Competitive Programming & Advanced DSA',
        desc: 'Graph algorithms (Dijkstra, Floyd-Warshall), Dynamic Programming, Tree DP, Greedy algorithms, and Trie.',
        action: 'Participate in weekly LeetCode/CodeChef contests to improve timed problem-solving speed.'
      },
      {
        title: 'Resume & Internship Applications',
        desc: 'Create a clean 1-page LaTeX/Overleaf resume, optimize LinkedIn/GitHub, and apply for summer internships.',
        action: 'Apply to 30+ internships and reach out for referrals.'
      }
    ]
  },
  {
    year: 'Year 4',
    title: 'Industry Readiness & Placements',
    focus: 'System Design, Mock Interviews, Aptitude, Core Subject Revision, and Securing Top Software Engineering Roles.',
    milestones: [
      {
        title: 'System Design Fundamentals (LLD & HLD)',
        desc: 'Low-Level Design (Design Patterns, Class Diagrams, Schema Design) and High-Level Design (Load Balancers, Caching, Microservices, Sharding, Message Queues).',
        action: 'Design scalable architectures for URL Shortener, Twitter Feed, or Uber Ride-Matching.'
      },
      {
        title: 'Company-Specific Coding & Technical Rounds',
        desc: 'Revise top 100 interview problems, company past papers, standard aptitude tests, and CS core viva questions.',
        action: 'Complete Blind 75 / NeetCode 150 roadmap.'
      },
      {
        title: 'Mock Technical & HR Interviews',
        desc: 'Practice speaking your thoughts aloud while coding (Think Aloud protocol), answer behavioral questions using STAR method.',
        action: 'Do 5+ peer mock interviews on platforms like Pramp / Interviewing.io.'
      },
      {
        title: 'Capstone Engineering Major Project',
        desc: 'Build a research-driven or startup-level project solving a concrete societal or industrial problem.',
        action: 'Publish a technical paper or deploy the system to real users.'
      }
    ]
  }
];

export const PROGRAMMING_LANGUAGES_GUIDE = [
  {
    name: 'C Programming',
    category: 'Systems & Foundation',
    badge: 'Mother of Modern Languages',
    icon: 'Terminal',
    what: 'A procedural, low-level language that interacts directly with computer hardware and memory.',
    why: 'Teaches true computational fundamentals: memory allocation, pointers, CPU registers, and hardware interaction. Essential for understanding how OS and compilers work.',
    when: 'Best starting language in Year 1 Semester 1.',
    howLong: '4 to 6 weeks for core syntax and memory management.',
    whatToBuild: ['Command-line Calculator', 'Student Record System', 'Custom Shell', 'Text-based Tic-Tac-Toe', 'Memory Allocator Simulator'],
    practicePlatforms: [
      { name: 'HackerRank C Domain', url: 'https://www.hackerrank.com/domains/c', note: 'Graded beginner practice' },
      { name: 'W3Schools C Tutorial', url: 'https://www.w3schools.com/c/', note: 'Quick syntax reference' },
      { name: 'Learn-C.org', url: 'https://www.learn-c.org/', note: 'Interactive in-browser exercises' }
    ]
  },
  {
    name: 'C++',
    category: 'DSA & Competitive Programming',
    badge: 'Industry Standard for DSA & Speed',
    icon: 'Cpu',
    what: 'An extension of C adding Object-Oriented Programming (OOP) and the powerful Standard Template Library (STL).',
    why: 'Fast execution speed, powerful STL data structures (vector, map, set, priority_queue), and dominant in technical coding interviews and competitive programming.',
    when: 'Year 1 Semester 2 / Year 2 for Data Structures & Algorithms.',
    howLong: '6 to 8 weeks to master STL and OOP concepts.',
    whatToBuild: ['Banking Management System', 'Snake Game with OOP', 'Custom Graph Visualizer', 'Compression Tool (Huffman Coding)'],
    practicePlatforms: [
      { name: 'LeetCode', url: 'https://leetcode.com/', note: 'Premier technical interview platform' },
      { name: 'GeeksforGeeks C++', url: 'https://www.geeksforgeeks.org/c-plus-plus/', note: 'Comprehensive DSA & tutorials' },
      { name: 'Codeforces', url: 'https://codeforces.com/', note: 'Competitive programming contests' }
    ]
  },
  {
    name: 'Python',
    category: 'AI, Data Science & Scripting',
    badge: 'Most Versatile & Beginner Friendly',
    icon: 'FileCode',
    what: 'A high-level, dynamically typed language with clean English-like syntax and an immense library ecosystem.',
    why: 'Unmatched in Artificial Intelligence, Machine Learning, Data Analytics, Automation, and rapid backend web prototyping (Django/FastAPI).',
    when: 'Any year. Excellent for quick problem-solving and AI projects.',
    howLong: '3 to 4 weeks for core language; 8+ weeks for domain libraries (NumPy, Pandas, PyTorch).',
    whatToBuild: ['Web Scraper with BeautifulSoup', 'Automated Email Bot', 'Expense Tracker with SQLite', 'Movie Recommendation Engine', 'Chatbot with OpenAI/Gemini API'],
    practicePlatforms: [
      { name: 'Python.org Official Docs', url: 'https://docs.python.org/3/tutorial/', note: 'Authoritative documentation' },
      { name: 'Kaggle Python', url: 'https://www.kaggle.com/learn/python', note: 'Hands-on Data Science exercises' },
      { name: 'Real Python', url: 'https://realpython.com/', note: 'In-depth real-world guides' }
    ]
  },
  {
    name: 'Java',
    category: 'Enterprise & Android',
    badge: 'Enterprise Backend Workhorse',
    icon: 'Coffee',
    what: 'A strictly typed, class-based object-oriented language running on the Java Virtual Machine (JVM). Write Once, Run Anywhere.',
    why: 'Extensively used by multinational corporations, fintech, banking systems, Spring Boot backends, and Android app development.',
    when: 'Year 2 for Object-Oriented Design and Enterprise Software Engineering.',
    howLong: '6 to 8 weeks for Core Java and Collections framework.',
    whatToBuild: ['ATM Simulation System', 'Employee Management REST API (Spring Boot)', 'E-Commerce Backend', 'Chat Application with WebSockets'],
    practicePlatforms: [
      { name: 'Java Programming (MOOC.fi)', url: 'https://java-programming.mooc.fi/', note: 'World-renowned free University course' },
      { name: 'Baeldung', url: 'https://www.baeldung.com/', note: 'Practical Spring & Java guides' },
      { name: 'HackerRank Java', url: 'https://www.hackerrank.com/domains/java', note: 'Core Java challenges' }
    ]
  },
  {
    name: 'JavaScript & TypeScript',
    category: 'Full-Stack Web Development',
    badge: 'Language of the Modern Web',
    icon: 'Globe',
    what: 'The scripting language that powers interactive web pages, full-stack backends (Node.js), and mobile apps (React Native).',
    why: 'Every browser runs JavaScript. Allows a single developer to build frontend, backend, database scripts, and mobile apps with one unified language.',
    when: 'Year 2 or 3 for Web Development and Full-Stack projects.',
    howLong: '6 weeks for modern JS (ES6+), DOM, and Async/Await; then pick React/Node.',
    whatToBuild: ['Interactive Portfolio', 'Real-Time Chat App with Socket.io', 'Task Kanban Board', 'Full-Stack E-Commerce Store', 'SaaS Dashboard with Next.js'],
    practicePlatforms: [
      { name: 'MDN Web Docs (Mozilla)', url: 'https://developer.mozilla.org/', note: 'Gold standard web documentation' },
      { name: 'JavaScript.info', url: 'https://javascript.info/', note: 'Deep conceptual explanations' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', note: 'Interactive full-stack certifications' }
    ]
  },
  {
    name: 'SQL (Structured Query Language)',
    category: 'Database Management',
    badge: 'Universal Data Standard',
    icon: 'Database',
    what: 'The standard declarative language for storing, manipulating, and querying relational database management systems (RDBMS).',
    why: 'Every production software company relies on databases. Essential for backend developers, data engineers, and analysts.',
    when: 'Year 2 alongside DBMS course.',
    howLong: '2 to 3 weeks for core queries, aggregations, joins, subqueries, and window functions.',
    whatToBuild: ['E-Commerce Schema Design', 'Complex Analytics Reports', 'Hospital Management Database', 'Library Catalog Queries'],
    practicePlatforms: [
      { name: 'SQLZoo', url: 'https://sqlzoo.net/', note: 'Interactive SQL query tutorial' },
      { name: 'LeetCode Database', url: 'https://leetcode.com/problemset/database/', note: 'Top SQL interview problems' },
      { name: 'Mode Analytics SQL Guide', url: 'https://mode.com/sql-tutorial/', note: 'Real-world data analytics queries' }
    ]
  }
];

export const DSA_ROADMAP_STEPS = [
  {
    step: 1,
    topic: 'Programming Basics & Complexity Analysis',
    importance: 'Mandatory Foundation',
    concepts: ['Time Complexity Big-O notation (O(1), O(log n), O(n), O(n log n), O(n²))', 'Space Complexity', 'Recursion & Call Stack mechanics', 'Bit Manipulation basics'],
    keyProblems: ['Fibonacci with Recursion', 'Check Prime in O(sqrt(n))', 'Find Single Number using XOR', 'Power of Two check'],
    interviewWeight: '90% of interviewers test Big-O analysis on every solution.'
  },
  {
    step: 2,
    topic: 'Arrays & Strings',
    importance: 'Highest Frequency in Interviews',
    concepts: ['Two Pointer Technique', 'Sliding Window Pattern', 'Prefix Sum & Kadane Algorithm', 'String Matching & Hashing'],
    keyProblems: ['Two Sum', 'Best Time to Buy & Sell Stock', 'Maximum Subarray (Kadane)', 'Longest Substring Without Repeating Characters', 'Trapping Rain Water'],
    interviewWeight: 'Found in 60%+ of screening rounds.'
  },
  {
    step: 3,
    topic: 'Hashing & HashMaps',
    importance: 'Constant Time Lookup O(1)',
    concepts: ['Hash Table Collision resolution', 'Frequency Counting', 'HashSet vs HashMap', 'Custom Hash Functions'],
    keyProblems: ['Valid Anagram', 'Group Anagrams', 'Subarray Sum Equals K', 'Longest Consecutive Sequence'],
    interviewWeight: 'Core building block for optimizing brute force solutions.'
  },
  {
    step: 4,
    topic: 'Linked Lists',
    importance: 'Pointer & Node Manipulation',
    concepts: ['Singly & Doubly Linked Lists', 'Fast & Slow Pointer (Floyd Tortoise-Hare)', 'Reversal & Merge operations'],
    keyProblems: ['Reverse a Linked List', 'Detect Cycle in Linked List', 'Merge Two Sorted Lists', 'Remove Nth Node from End', 'LRU Cache (using Doubly Linked List)'],
    interviewWeight: 'Standard in technical rounds testing pointer safety and memory manipulation.'
  },
  {
    step: 5,
    topic: 'Stacks & Queues',
    importance: 'LIFO & FIFO Mechanics',
    concepts: ['Monotonic Stack', 'Queue using Stacks', 'Circular Queue', 'Deque & Sliding Window Maximum'],
    keyProblems: ['Valid Parentheses', 'Min Stack', 'Daily Temperatures (Monotonic Stack)', 'Next Greater Element', 'Sliding Window Maximum'],
    interviewWeight: 'Essential for parser design, expression evaluation, and buffer management.'
  },
  {
    step: 6,
    topic: 'Binary Trees & Binary Search Trees (BST)',
    importance: 'Hierarchical Structures',
    concepts: ['Tree Traversals (Inorder, Preorder, Postorder, Level Order BFS)', 'Tree Height & Diameter', 'BST Properties & Validation', 'LCA (Lowest Common Ancestor)'],
    keyProblems: ['Maximum Depth of Binary Tree', 'Invert Binary Tree', 'Validate Binary Search Tree', 'Lowest Common Ancestor in BST', 'Binary Tree Level Order Traversal'],
    interviewWeight: 'Appears in nearly all tier-1 tech interviews (Google, Amazon, Microsoft).'
  },
  {
    step: 7,
    topic: 'Heaps & Priority Queues',
    importance: 'Top-K & Greedy Scheduling',
    concepts: ['Min Heap vs Max Heap', 'Heapify O(n)', 'Top K Elements Pattern', 'Merge K Sorted Lists'],
    keyProblems: ['Kth Largest Element in Array', 'Top K Frequent Elements', 'Find Median from Data Stream', 'Merge K Sorted Lists'],
    interviewWeight: 'Frequent in real-time streaming, scheduler, and ranking system interviews.'
  },
  {
    step: 8,
    topic: 'Graphs & Graph Algorithms',
    importance: 'Network & Relationship Modeling',
    concepts: ['Adjacency List & Matrix', 'BFS & DFS Traversal', 'Cycle Detection (Directed & Undirected)', 'Topological Sort (Kahn Algorithm)', 'Dijkstra Shortest Path', 'Disjoint Set Union (DSU)'],
    keyProblems: ['Number of Islands', 'Course Schedule (Topological Sort)', 'Word Ladder (BFS)', 'Network Delay Time (Dijkstra)', 'Redundant Connection (DSU)'],
    interviewWeight: 'Core topic for senior roles, social network design, and mapping applications.'
  },
  {
    step: 9,
    topic: 'Dynamic Programming (DP)',
    importance: 'Optimal Substructure & Overlapping Subproblems',
    concepts: ['Memoization (Top-Down)', 'Tabulation (Bottom-Up)', '1D DP (House Robber, Climbing Stairs)', '2D DP & Grid Paths', '0/1 Knapsack & Unbounded Knapsack', 'Longest Common Subsequence (LCS)'],
    keyProblems: ['Climbing Stairs', 'Coin Change', 'Longest Increasing Subsequence (LIS)', 'Edit Distance', '0/1 Knapsack Problem'],
    interviewWeight: 'The benchmark challenge in competitive coding and hard tier interviews.'
  }
];

export const ENGINEERING_PROJECT_ROADMAP = [
  {
    level: 'Beginner Projects (Year 1 - 2)',
    description: 'Focus on language syntax, modular function design, basic file I/O, and foundational OOP.',
    projects: [
      {
        title: 'Student Grade & Attendance Management System',
        tech: 'C++ or Python + SQLite / File I/O',
        whatToBuild: 'A command-line or GUI application to register students, record test marks, compute CGPA/rank, and generate PDF report cards.',
        learnings: ['Object-Oriented Design', 'File Persistence & SQL', 'Input Validation & Error Handling'],
        githubTip: 'Include sample CSV data, screenshots of menus, and step-by-step installation instructions in README.',
        interviewPitch: 'Explain your class hierarchy (Student, Course, GradeBook) and how you ensured data persistence without corruption.'
      },
      {
        title: 'Interactive Quiz & Flashcard Desktop App',
        tech: 'Java (Swing/JavaFX) or Python (Tkinter/CustomTkinter)',
        whatToBuild: 'A desktop application with timed multiple-choice questions, category selection, local score tracking, and instant review explanations.',
        learnings: ['Event-Driven Programming', 'GUI Layout Design', 'Timer Threads & State Management'],
        githubTip: 'Add an executable JAR or single-click installer executable and GIF demo of the quiz in action.',
        interviewPitch: 'Discuss how you decoupled the quiz logic model from the UI presentation layer.'
      },
      {
        title: 'Real-Time Weather Dashboard',
        tech: 'HTML5, Tailwind CSS, Vanilla JavaScript, OpenWeatherMap API',
        whatToBuild: 'A responsive weather application fetching live forecasts, humidity, wind speed, UV index, and 5-day temperature charts.',
        learnings: ['Asynchronous JavaScript (Fetch/Async/Await)', 'REST API Integration', 'Responsive CSS Grid/Flexbox'],
        githubTip: 'Host it live for free on GitHub Pages and link the live URL at the top of your repository.',
        interviewPitch: 'Explain how you handled API rate limits, error fallbacks for invalid city names, and geolocation permissions.'
      }
    ]
  },
  {
    level: 'Intermediate Projects (Year 2 - 3)',
    description: 'Integrate relational databases, RESTful backend APIs, authentication, and responsive modern frontend frameworks.',
    projects: [
      {
        title: 'Full-Stack Task & Workflow Management App (Kanban)',
        tech: 'React, Node.js, Express, MongoDB/PostgreSQL, Tailwind CSS',
        whatToBuild: 'A Trello-style board with draggable tasks, columns (To Do, In Progress, Done), JWT user authentication, priority tags, and deadline alerts.',
        learnings: ['RESTful API Architecture', 'JWT Authentication & Protected Routes', 'Drag and Drop UI APIs', 'Database Schema Relationships'],
        githubTip: 'Provide separate frontend and backend directories, clear .env.example files, and live Vercel/Render demo link.',
        interviewPitch: 'Discuss how you structured your JWT auth tokens, prevented unauthorized task updates, and optimized state updates.'
      },
      {
        title: 'E-Commerce Platform with Cart & Payment Gateway',
        tech: 'Next.js or React, Express, PostgreSQL, Stripe / Razorpay Sandbox',
        whatToBuild: 'An online storefront with product search, category filtering, persistent cart in localStorage, checkout flow, and mock order confirmation.',
        learnings: ['Complex Global State Management', 'Payment Webhook Handling', 'Database Indexing & Fast Queries'],
        githubTip: 'Include architecture diagrams in README showing user flow from Cart to Webhook confirmation.',
        interviewPitch: 'Explain how you handled race conditions in inventory count and secured payment webhook verification signatures.'
      },
      {
        title: 'Personal Finance & Expense Tracker with Visual Analytics',
        tech: 'Python (FastAPI / Flask) + React / Chart.js + PostgreSQL',
        whatToBuild: 'An expense tracking tool that visualizes monthly budgets, category-wise spending pies, CSV export, and predictive spending alerts.',
        learnings: ['Data Visualization & Aggregations', 'FastAPI Pydantic validation', 'SQL Group By / Window Queries'],
        githubTip: 'Highlight interactive analytics charts and clean API documentation generated by Swagger/OpenAPI.',
        interviewPitch: 'Describe your database query optimizations for computing multi-month category aggregations across thousands of transactions.'
      }
    ]
  },
  {
    level: 'Advanced Projects (Year 3 - 4)',
    description: 'Production systems featuring real-time WebSockets, microservices or background workers, AI models, and scalable architectures.',
    projects: [
      {
        title: 'Collaborative Real-Time Code & Document Editor',
        tech: 'React, Node.js, WebSockets (Socket.io / Yjs), Redis, Docker',
        whatToBuild: 'A multi-user editor where multiple developers can write code or notes simultaneously with live cursor tracking, syntax highlighting, and room sharing.',
        learnings: ['Operational Transformation / CRDTs', 'WebSocket Concurrency & Reconnection', 'Redis Pub/Sub for Multi-Room Scaling'],
        githubTip: 'Include Docker Compose configuration (docker-compose up to run entire stack locally) and video demo.',
        interviewPitch: 'Explain conflict resolution strategies when two users type at the same cursor position simultaneously.'
      },
      {
        title: 'AI-Powered Resume Scanner & Job Matcher',
        tech: 'Python, FastAPI, PyTorch / HuggingFace Transformers, React, PostgreSQL',
        whatToBuild: 'An intelligent system that extracts text from student resumes (PDF), computes semantic embedding similarity against job descriptions, and gives actionable improvement scores.',
        learnings: ['NLP & Sentence Transformers', 'Cosine Similarity & Vector Search', 'PDF Parsing & Asynchronous Worker Queues'],
        githubTip: 'Detail the model architecture used, benchmark accuracy metrics, and provide sample test resumes.',
        interviewPitch: 'Discuss how semantic vector search outperformed keyword TF-IDF matching and how you optimized inference latency.'
      },
      {
        title: 'Decentralized Peer-to-Peer Educational File Sharing System',
        tech: 'Node.js, WebRTC, IndexedDB, Service Worker PWA',
        whatToBuild: 'A platform allowing students in rural off-grid areas to share textbook chapters, video notes, and quizzes directly device-to-device over local Wi-Fi without internet.',
        learnings: ['WebRTC Data Channels', 'Peer Discovery Protocols', 'Local Storage Quotas & Binary Chunking'],
        githubTip: 'Document real-world rural connectivity constraints and showcase transfer speeds over local hotspot.',
        interviewPitch: 'Explain how your chunking algorithm verified file integrity using SHA-256 hashes during interrupted wireless transfers.'
      }
    ]
  }
];

export const REPUTABLE_LEARNING_PLATFORMS = [
  {
    category: 'Coding & Technical Interview Prep',
    platforms: [
      { name: 'LeetCode', url: 'https://leetcode.com/', purpose: 'Industry-standard problem bank for technical interviews at top tech companies.', free: true },
      { name: 'NeetCode', url: 'https://neetcode.io/', purpose: 'Structured DSA roadmap (NeetCode 150) with clean video explanations.', free: true },
      { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/', purpose: 'Extensive tutorials and problem solutions across every CS subject.', free: true },
      { name: 'Codeforces', url: 'https://codeforces.com/', purpose: 'Global competitive programming contests to boost speed and algorithmic depth.', free: true }
    ]
  },
  {
    category: 'Full-Stack & Project-Based Learning',
    platforms: [
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', purpose: '100% free comprehensive interactive certifications from Web Dev to Python & Machine Learning.', free: true },
      { name: 'The Odin Project', url: 'https://www.theodinproject.com/', purpose: 'Full-stack curriculum focusing on building real projects and Git workflow from scratch.', free: true },
      { name: 'roadmap.sh', url: 'https://roadmap.sh/', purpose: 'Community-driven visual roadmaps and guides for all engineering roles (Frontend, Backend, DevOps, AI).', free: true },
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', purpose: 'The authoritative, unbiased documentation for HTML, CSS, JavaScript, and Web APIs.', free: true }
    ]
  },
  {
    category: 'Computer Science Core & University Courses',
    platforms: [
      { name: 'Harvard CS50', url: 'https://cs50.harvard.edu/x/', purpose: 'Legendary introductory computer science course by Prof. David J. Malan (C, Python, SQL, Web).', free: true },
      { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/', purpose: 'Free lecture notes, exams, and videos from MIT computer science curriculum.', free: true },
      { name: 'NPTEL India', url: 'https://nptel.ac.in/', purpose: 'Free university-level engineering lectures curated by IITs and IISc.', free: true },
      { name: 'TeachYourselfCS', url: 'https://teachyourselfcs.com/', purpose: 'Curated self-taught guide to master core CS (Architecture, OS, Networking, Compilers).', free: true }
    ]
  }
];

export const GIT_GITHUB_ROADMAP = [
  {
    step: 1,
    title: 'Understand What Git & GitHub Are',
    concept: 'Git is a local version control tool that tracks code history like save points in a game. GitHub is a cloud hosting platform for sharing Git repositories and collaborating with developers worldwide.',
    commands: ['git --version', 'git config --global user.name "Your Name"', 'git config --global user.email "your@email.com"']
  },
  {
    step: 2,
    title: 'Daily Git Workflow (Local to Remote)',
    concept: 'Initialize repository, track changes, stage them, write meaningful commit messages, and push to GitHub.',
    commands: [
      'git init  # Initialize repo',
      'git add .  # Stage all changes',
      'git commit -m "feat: add student quiz submission logic"  # Save commit',
      'git branch -M main  # Rename branch to main',
      'git remote add origin https://github.com/user/repo.git  # Link remote',
      'git push -u origin main  # Push to GitHub'
    ]
  },
  {
    step: 3,
    title: 'Branching & Team Collaboration',
    concept: 'Never write untested code directly on main. Create feature branches, test thoroughly, and open Pull Requests (PRs).',
    commands: [
      'git checkout -b feature/auth-login  # Create and switch to new branch',
      'git status  # Check changed files',
      'git diff  # View exact line changes',
      'git merge feature/auth-login  # Merge into current branch'
    ]
  },
  {
    step: 4,
    title: 'Writing Professional README Files',
    concept: 'A project without a README is invisible. Every repository should include: Project Title, 2-line Elevator Pitch, Live Demo Link, Key Features, Tech Stack Badges, Installation Steps, and Screenshots/GIFs.',
    commands: ['README.md template with Markdown badges and step-by-step setup guides.']
  },
  {
    step: 5,
    title: 'Open-Source Contributions',
    concept: 'Fork repositories, clone locally, create a branch, fix an issue or add docs, push to your fork, and submit a Pull Request to the original project.',
    commands: ['git remote add upstream <original-repo-url>', 'git fetch upstream', 'git rebase upstream/main']
  }
];

export const COMMUNICATION_ROADMAP = [
  {
    area: 'Technical English & Vocabulary',
    description: 'Learn to articulate technical terms accurately (scalability, latency, refactor, decoupled, throughput, invariants).',
    dailyPractice: 'Read 1 engineering blog post daily (e.g. Netflix TechBlog, Uber Engineering, or Medium) and note 3 new technical words.'
  },
  {
    area: 'Speaking & Thought Articulation (Think Aloud)',
    description: 'In technical interviews, interviewers judge HOW you think, not just the final code. Learn to speak your thoughts aloud continuously while solving problems.',
    dailyPractice: 'Pick 1 LeetCode problem every day. Record yourself on your phone explaining the problem, your brute force idea, and your optimization before writing code.'
  },
  {
    area: 'Project Presentation & Elevator Pitch',
    description: 'Explain any project concisely using the 30-Second Framework: Problem + Solution + Tech Stack + Impact.',
    dailyPractice: 'Practice answering: "Tell me about your project" in exactly 90 seconds without getting lost in trivial details.'
  },
  {
    area: 'Group Discussions & Team Meetings',
    description: 'Learn active listening, polite intervention ("Adding to what my colleague mentioned..."), and constructive technical disagreement.',
    dailyPractice: 'Participate in college technical debates or virtual peer study groups.'
  }
];

export const INTERVIEW_PREP_GUIDE = [
  {
    category: 'The 4 Technical Interview Rounds',
    rounds: [
      { name: '1. Online Assessment (OA)', desc: '2-3 coding questions (DSA) + 10-20 MCQ questions on OS, DBMS, OOPs within 60-90 minutes.' },
      { name: '2. Technical Coding Round (1-2 Rounds)', desc: 'Live coding on Google Docs / CoderPad with an engineer. Focus on DSA, problem clarification, and Big-O complexity analysis.' },
      { name: '3. Core CS & System / Project Round', desc: 'Deep dive into your resume projects, database schema design, indexing, OOP design patterns, and debugging scenarios.' },
      { name: '4. HR / Behavioral (STAR Framework)', desc: 'Cultural fit, conflict resolution, teamwork, passion, and communication evaluated using Situation-Task-Action-Result.' }
    ]
  },
  {
    category: 'Common HR & Behavioral Questions with Answering Strategy',
    questions: [
      {
        q: 'Tell me about yourself.',
        strategy: 'Do not repeat your resume line-by-line. Follow the Past-Present-Future structure: (1) Background & education (Past), (2) Key technical skills & standout projects (Present), (3) Why you are excited about this specific company and role (Future).'
      },
      {
        q: 'Explain your most challenging project and your contribution.',
        strategy: 'Use STAR method: State the Problem (Situation/Task), explain what YOU built and the technical bottleneck faced (Action - e.g. slow query speed or concurrency conflict), and explain the outcome (Result - e.g. 40% latency reduction).'
      },
      {
        q: 'What are your greatest strengths and weaknesses?',
        strategy: 'Strength: Pair with a concrete engineering example (e.g. debugging resilience or fast learning). Weakness: Share a genuine area of improvement + the proactive steps you are actively taking right now to fix it.'
      },
      {
        q: 'Why should we hire you over other candidates?',
        strategy: 'Highlight your strong fundamentals, hands-on project execution, consistency, and fast adaptability to company tech stacks.'
      }
    ]
  }
];

export const ENGINEERING_STUDENT_PROBLEMS = [
  {
    id: 'prob-1',
    problem: 'Overwhelmed by Too Many Languages & Frameworks (FOMO)',
    whyItHappens: 'Every week a new framework or tool trends on social media. Students jump from C++ to Python to React to Web3 without mastering any single foundation.',
    solution: 'Follow the 1-Language Rule. Pick C++ or Java for DSA, and JavaScript or Python for projects. Stick with them for 1 full year before touching anything else. Core logic transfers 100% across all languages.'
  },
  {
    id: 'prob-2',
    problem: 'Tutorial Hell (Watching Videos Without Building)',
    whyItHappens: 'Watching 40-hour tutorial videos feels productive, but you freeze when asked to build an empty file from scratch.',
    solution: 'Apply the 20/80 Rule. Watch 20% tutorial for syntax, then spend 80% time coding without looking at solutions. Break projects into tiny 10-line tasks and debug errors yourself using console logs and Google.'
  },
  {
    id: 'prob-3',
    problem: 'Fear & Anxiety of Coding / DSA Problems',
    whyItHappens: 'Trying Hard problems immediately on LeetCode and getting stuck causes demotivation and feeling "unfit for programming".',
    solution: 'Start with NeetCode Easy problems pattern-by-pattern (Two Pointers, Sliding Window). If stuck for >25 minutes, look at the concept hint, write the solution yourself, and revisit the exact problem 3 days later.'
  },
  {
    id: 'prob-4',
    problem: 'Lack of Practical Projects on Resume',
    whyItHappens: 'Copy-pasting basic tutorial clones (like standard todo apps) that recruiters instantly recognize and ignore.',
    solution: 'Take a common idea and add 1 unique real-world twist (e.g. instead of a generic todo app, build an Offline Task Sync Tool for rural clinics with export/import and visual statistics).'
  },
  {
    id: 'prob-5',
    problem: 'Poor English Communication & Interview Fear',
    whyItHappens: 'Lack of English speaking environment in school/college creates hesitation and stammering during technical interviews.',
    solution: 'Daily 10-minute Think Aloud practice. Speak your day-to-day code logic aloud in English. Join free peer mock interviews on Discord/Pramp where everyone is learning together.'
  },
  {
    id: 'prob-6',
    problem: 'Difficulty Finding Internships & No Response on Job Portals',
    whyItHappens: 'Blindly clicking "Easy Apply" on LinkedIn with a generic resume alongside 10,000 other applicants.',
    solution: 'Direct outreach strategy. Build a specific demo project relevant to the startup/company, write a polite 3-sentence message to the engineering founder/lead showing the live link, and request 10 minutes of feedback.'
  }
];

export const ENGINEERING_CAREER_PATHS = [
  {
    role: 'Full Stack Software Engineer',
    badge: 'Highest Industry Hiring Volume',
    skills: ['React / Next.js', 'Node.js / Express or Spring Boot', 'PostgreSQL / MongoDB', 'REST & GraphQL APIs', 'Docker & Git'],
    roadmap: 'Frontend basics (HTML/CSS/JS) → React → Backend Node/Java → Relational DBs → Authentication → Deployment on Cloud.',
    topPlatforms: ['freeCodeCamp', 'FullStackOpen', 'MDN Web Docs']
  },
  {
    role: 'AI & Machine Learning Engineer',
    badge: 'High Growth & Research-Oriented',
    skills: ['Python', 'Linear Algebra & Statistics', 'NumPy & Pandas', 'PyTorch / TensorFlow', 'Scikit-Learn', 'LLMs & RAG'],
    roadmap: 'Python Math Foundations → Data Analysis (Pandas) → Machine Learning algorithms → Deep Learning & Neural Networks → Model Deployment (FastAPI).',
    topPlatforms: ['Kaggle', 'Fast.ai', 'Coursera Deep Learning Specialization']
  },
  {
    role: 'Cloud & DevOps Engineer',
    badge: 'Infrastructure & High Reliability',
    skills: ['Linux System Administration', 'Docker & Kubernetes', 'AWS / Azure / GCP', 'CI/CD Pipelines (GitHub Actions)', 'Terraform (IaC)'],
    roadmap: 'Linux & Networking → Shell Scripting → Docker Containerization → CI/CD Automation → AWS Cloud Architecture → Kubernetes Orchestration.',
    topPlatforms: ['roadmap.sh/devops', 'KodeKloud', 'AWS Skill Builder']
  },
  {
    role: 'Data Analyst & Business Intelligence',
    badge: 'Data-Driven Decision Making',
    skills: ['SQL Mastery', 'Python / R', 'Power BI / Tableau', 'Excel Advanced', 'Statistical Modeling'],
    roadmap: 'Advanced Excel → SQL Joins & Window Functions → Power BI Dashboards → Python EDA (Pandas/Seaborn) → Business Case Studies.',
    topPlatforms: ['Mode Analytics', 'Kaggle Datasets', 'StrataScratch']
  },
  {
    role: 'Cybersecurity Analyst & Security Engineer',
    badge: 'Critical Defense & High Demand',
    skills: ['Network Security & Protocols', 'Linux & Bash', 'Ethical Hacking & Penetration Testing', 'Cryptography', 'OWASP Top 10'],
    roadmap: 'Computer Networks & TCP/IP → Linux Security → Web Vulnerabilities (XSS, SQLi, CSRF) → CTF Challenges → Security Auditing.',
    topPlatforms: ['TryHackMe', 'HackTheBox', 'PortSwigger Web Security Academy']
  },
  {
    role: 'Mobile App Developer (Flutter / React Native / Android)',
    badge: 'Consumer & Offline-First Apps',
    skills: ['React Native / Flutter / Kotlin', 'Mobile UI/UX Design', 'Local SQLite / Room Database', 'Push Notifications', 'App Store Deployment'],
    roadmap: 'Core JS / Dart / Kotlin → Mobile Component Lifecycle → State Management → Offline Persistence → Camera & Sensor APIs → Play Store Publishing.',
    topPlatforms: ['Flutter.dev Docs', 'React Native Official Guide', 'Android Developers Codelabs']
  }
];
