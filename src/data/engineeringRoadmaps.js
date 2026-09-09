// RuraLearn Comprehensive Engineering & College Roadmap Database
// Complete 4-Year Industry Blueprint, Programming Languages, DSA Topics, Project Blueprints, Git/GitHub, Communication & Interviews, Student Problems & Solutions

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
        action: 'Give 1 technical presentation per month in college/study group.'
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
        action: 'Deploy live on Vercel/Render/AWS and add custom demo videos.'
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

export const PROGRAMMING_PIPELINE_STAGES = [
  { step: '1', title: 'Programming Fundamentals', desc: 'Understanding how computers execute code, memory representation, binary, and problem decomposition.' },
  { step: '2', title: 'Choose First Language', desc: 'Pick ONE language based on your immediate focus: C++ for DSA/Contests, Python for AI/Data, Java for Enterprise, or JavaScript for Web.' },
  { step: '3', title: 'Syntax & Basic I/O', desc: 'Learning data types, print statements, console inputs, math operators, and code formatting.' },
  { step: '4', title: 'Variables & Data Types', desc: 'Integers, floats, characters, booleans, strings, and variable scope (local vs global).' },
  { step: '5', title: 'Conditional Statements', desc: 'if-else logic, nested conditions, switch cases, and boolean logic gates (AND, OR, NOT).' },
  { step: '6', title: 'Loops & Iteration', desc: 'for loops, while loops, do-while, break, continue, and nested loop patterns.' },
  { step: '7', title: 'Functions & Modular Code', desc: 'Parameter passing (by value vs by reference), return types, scope, recursion, and writing reusable code.' },
  { step: '8', title: 'Object-Oriented Programming', desc: 'Classes, objects, encapsulation, inheritance, polymorphism, abstraction, and interfaces.' },
  { step: '9', title: 'Data Structures', desc: 'Arrays, vectors, linked lists, stacks, queues, hash maps, trees, and graphs.' },
  { step: '10', title: 'Algorithms', desc: 'Binary search, sorting, two pointers, sliding window, BFS/DFS, recursion, and dynamic programming.' },
  { step: '11', title: 'Practical Projects', desc: 'Building standalone tools, CLI scripts, GUI software, REST APIs, or full-stack web apps.' },
  { step: '12', title: 'Version Control (Git)', desc: 'Publishing repositories on GitHub, managing branches, writing documentation, and collaborating.' },
  { step: '13', title: 'Interview Preparation', desc: 'Solving standard coding problems under time limits and articulating logic aloud.' }
];

export const PROGRAMMING_LANGUAGES_GUIDE = [
  {
    id: 'cpp',
    name: 'C & C++',
    category: 'Foundations & DSA Mastery',
    badge: 'Industry Standard for DSA & Speed',
    startRecommendation: 'Highly Recommended starting language for 1st/2nd-year college students who want to master Data Structures & Algorithms, competitive programming, and clear company coding tests.',
    why: 'Direct memory manipulation with pointers, high execution speed, and the powerful Standard Template Library (STL) make C++ the dominant choice in technical coding rounds.',
    beginnerTopics: ['Syntax & Standard I/O (cin/cout)', 'Primitive Data Types & Type Casting', 'Conditionals & Logical Operators', 'Loops (for, while, nested loops)', 'Functions & Pass by Reference', '1D & 2D Arrays, Strings'],
    intermediateTopics: ['Pointers & Dynamic Memory (new/delete)', 'Structs & Enums', 'OOP Concepts (Classes, Encapsulation, Inheritance, Polymorphism)', 'C++ STL (vector, pair, map, set, unordered_map, priority_queue, stack, queue)', 'Recursion & Basic Backtracking'],
    advancedTopics: ['Templates & Generic Programming', 'Move Semantics & Rvalue References', 'Smart Pointers (unique_ptr, shared_ptr)', 'Memory Leaks & Valgrind profiling', 'Graph algorithms with STL adjacency lists'],
    whenToMove: 'Move to the next stage when you can comfortably solve Easy-Medium array/string problems using C++ STL vectors and maps without looking up syntax.',
    practicePlatforms: [
      { name: 'LeetCode (C++)', url: 'https://leetcode.com/', note: 'Premier technical interview platform' },
      { name: 'GeeksforGeeks C++', url: 'https://www.geeksforgeeks.org/c-plus-plus/', note: 'Comprehensive syntax & STL tutorials' },
      { name: 'Codeforces', url: 'https://codeforces.com/', note: 'Global competitive programming contests' }
    ],
    projectIdeas: ['Student Record System (File I/O)', 'Custom Shell / Terminal in C', 'Huffman File Compression Tool', 'Snake Game with OOP Architecture', 'Custom Graph Pathfinding Visualizer']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'AI, Data Science & Fast Prototyping',
    badge: 'Most Beginner-Friendly & Versatile',
    startRecommendation: 'Best starting language for students interested in Artificial Intelligence, Machine Learning, Data Analytics, Automation scripts, or rapid project building.',
    why: 'Clean English-like syntax eliminates boilerplate code. Has the world\'s largest ecosystem of libraries for Data Science (NumPy, Pandas, PyTorch, Scikit-Learn) and backend web (FastAPI, Django).',
    beginnerTopics: ['Python Syntax & Indentation rules', 'Data Types (int, float, str, bool)', 'Lists, Tuples, Dictionaries, Sets', 'Conditionals (if-elif-else)', 'for & while loops, list comprehensions', 'Functions & Default arguments'],
    intermediateTopics: ['File Handling (read/write JSON/CSV)', 'Object-Oriented Python (Classes, __init__, dunder methods)', 'Error Handling (try-except-finally)', 'Modules, pip & Virtual Environments (venv)', 'Working with REST APIs (requests library)'],
    advancedTopics: ['Decorators, Generators & Iterators', 'Multithreading & Asyncio (async/await)', 'Data Stack (NumPy, Pandas, Matplotlib)', 'Building REST APIs with FastAPI', 'Machine Learning pipelines with Scikit-Learn & PyTorch'],
    whenToMove: 'Move to building projects when you can parse CSV datasets, manipulate dictionaries, and write clean modular functions.',
    practicePlatforms: [
      { name: 'Python.org Tutorial', url: 'https://docs.python.org/3/tutorial/', note: 'Official authoritative guide' },
      { name: 'Kaggle Python', url: 'https://www.kaggle.com/learn/python', note: 'Interactive hands-on exercises' },
      { name: 'HackerRank Python', url: 'https://www.hackerrank.com/domains/python', note: 'Graded language challenges' }
    ],
    projectIdeas: ['Web Scraper with BeautifulSoup', 'Automated WhatsApp/Email Reminder Bot', 'Personal Expense Tracker with SQLite', 'Crop Disease Image Classifier', 'FastAPI REST Service with JWT']
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Enterprise Software & Android',
    badge: 'Enterprise Backend Workhorse',
    startRecommendation: 'Best starting language for students aiming for enterprise multinational software companies (Amazon, Oracle, Infosys, TCS, Banks) or Android development.',
    why: 'Strongly typed, class-based OOP enforcement teaches clean architectural patterns. Powers millions of enterprise microservices worldwide with Spring Boot.',
    beginnerTopics: ['Java Syntax, main() method & JVM architecture', 'Primitive Data Types & Wrapper classes', 'Control Flow (if, switch, for, while)', 'Arrays & String manipulation', 'Static vs Instance methods'],
    intermediateTopics: ['OOP Deep Dive (Encapsulation, Inheritance, Abstract classes, Interfaces)', 'Exception Handling (checked vs unchecked)', 'Java Collections Framework (ArrayList, HashMap, HashSet, LinkedList, PriorityQueue)', 'File I/O & Streams', 'Generics & Lambda Expressions'],
    advancedTopics: ['Multithreading & Concurrency (ExecutorService, synchronized, volatile)', 'Spring Boot Framework & REST Controllers', 'JPA / Hibernate ORM & Database relationships', 'Unit Testing with JUnit 5 & Mockito', 'Microservices architecture'],
    whenToMove: 'Move to backend development when you understand Java Collections, Interfaces, and Exception handling thoroughly.',
    practicePlatforms: [
      { name: 'University of Helsinki Java MOOC', url: 'https://java-programming.mooc.fi/', note: 'World-renowned free University course' },
      { name: 'Baeldung Java', url: 'https://www.baeldung.com/', note: 'Industry standard Spring & Java guides' },
      { name: 'LeetCode (Java)', url: 'https://leetcode.com/', note: 'DSA practice in Java' }
    ],
    projectIdeas: ['ATM / Banking Transaction Simulation', 'Library Management Desktop App (JavaFX)', 'Student Information REST API with Spring Boot', 'E-Commerce Order Management Microservice', 'Real-Time Android Chat App']
  },
  {
    id: 'javascript',
    name: 'JavaScript & TypeScript',
    category: 'Full-Stack Web & Mobile Apps',
    badge: 'Language of the Modern Web',
    startRecommendation: 'Best starting language for students who want to see visual results immediately, build websites, full-stack web applications, and freelance.',
    why: 'The only language native to web browsers. With Node.js, React, and TypeScript, a developer can build full-stack web apps, mobile apps, and backend APIs using a single language.',
    beginnerTopics: ['HTML5 & CSS3 layout basics (Flexbox, Grid)', 'JS Syntax, Variables (let, const)', 'Data Types, Arrays & Objects', 'Conditionals & Loops', 'Functions & Arrow Functions', 'DOM Manipulation & Event Listeners'],
    intermediateTopics: ['ES6+ Features (Destructuring, Spread, Template Literals, Modules)', 'Asynchronous JS (Callbacks, Promises, Async/Await)', 'Fetch API & Consuming REST endpoints', 'LocalStorage & Browser APIs', 'React Fundamentals (JSX, Components, Props, useState, useEffect)'],
    advancedTopics: ['TypeScript (Interfaces, Types, Generics)', 'React Architecture (Custom Hooks, Context, React Router)', 'Backend Node.js & Express REST APIs', 'Database Integration (PostgreSQL / MongoDB)', 'Full-Stack Deployment on Vercel/Render'],
    whenToMove: 'Move to React/Node.js after you can build an interactive JavaScript app with dynamic DOM updates and API data fetching without relying on frameworks.',
    practicePlatforms: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', note: 'The definitive web documentation' },
      { name: 'JavaScript.info', url: 'https://javascript.info/', note: 'Deep conceptual explanations' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', note: 'Interactive full-stack curriculum' }
    ],
    projectIdeas: ['Interactive Quiz Application', 'Responsive Weather Forecast App', 'Kanban Task Management Board', 'Full-Stack E-Commerce Store with Cart', 'Real-Time Chat App with WebSockets']
  },
  {
    id: 'sql',
    name: 'SQL (Structured Query Language)',
    category: 'Database Management & Analytics',
    badge: 'Universal Data Foundation',
    startRecommendation: 'Essential complementary skill for EVERY engineering student regardless of chosen primary language.',
    why: 'Every real-world software product stores data. Knowing how to design normalized tables, write complex JOINs, and optimize queries is mandatory for backend, full-stack, and data engineering.',
    beginnerTopics: ['Relational Database concepts (Tables, Rows, Columns, Primary/Foreign Keys)', 'Basic Queries (SELECT, FROM, WHERE)', 'Filtering & Sorting (ORDER BY, LIMIT, LIKE, BETWEEN, IN)', 'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)', 'GROUP BY & HAVING clauses'],
    intermediateTopics: ['JOINs (INNER, LEFT, RIGHT, FULL OUTER)', 'Subqueries & Nested Queries', 'Database Normalization (1NF, 2NF, 3NF, BCNF)', 'Constraints (UNIQUE, NOT NULL, CHECK, DEFAULT)', 'CRUD Operations (INSERT, UPDATE, DELETE)'],
    advancedTopics: ['Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG)', 'Indexes & Query Optimization (EXPLAIN ANALYZE)', 'Transactions & ACID properties', 'Stored Procedures & Triggers', 'Database Schema Design for complex apps'],
    whenToMove: 'Move to backend integration once you can write multi-table joins and aggregations comfortably.',
    practicePlatforms: [
      { name: 'SQLZoo', url: 'https://sqlzoo.net/', note: 'Interactive in-browser SQL tutor' },
      { name: 'LeetCode Database', url: 'https://leetcode.com/problemset/database/', note: 'Top SQL interview questions' },
      { name: 'Mode Analytics SQL Tutorial', url: 'https://mode.com/sql-tutorial/', note: 'Real-world data analytics queries' }
    ],
    projectIdeas: ['E-Commerce Schema Design & Normalization', 'Hospital Management Database System', 'Sales Analytics Dashboard Queries', 'University Course Registration System', 'Social Network Relationship Database']
  }
];

export const DSA_ROADMAP_STEPS = [
  {
    step: 1,
    topic: 'Programming Basics & Complexity Analysis',
    whatItIs: 'The mathematical language used to measure how execution time and memory usage scale as the input size (n) grows.',
    whatToLearn: ['Big-O, Big-Theta, Big-Omega notations', 'Time Complexity rules (O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ))', 'Space Complexity & Call Stack memory', 'Bitwise operations (&, |, ^, ~, <<, >>)'],
    practiceApproach: 'Calculate the time and space complexity for every single function you write before submitting.',
    exampleProblems: ['Find Fibonacci using Iteration vs Recursion', 'Check Prime in O(√n)', 'Single Number (using XOR bit manipulation)', 'Power of Two check in O(1)'],
    interviewRelevance: 'Mandatory in 100% of technical interviews. Interviewers always ask: "What is the time and space complexity of your solution?"',
    resources: ['NeetCode Big-O Guide', 'GeeksforGeeks Time Complexity', 'LeetCode Explore']
  },
  {
    step: 2,
    topic: 'Arrays',
    whatItIs: 'Contiguous memory blocks storing elements of the same type with instant O(1) index-based access.',
    whatToLearn: ['1D & 2D Arrays memory layout', 'Two Pointer Technique (Opposite ends & Same direction)', 'Sliding Window Pattern (Fixed & Variable size)', 'Prefix Sum Array & Difference Array', 'Kadane\'s Algorithm for Maximum Subarray'],
    practiceApproach: 'Start with Two Pointers to avoid nested O(n²) loops.',
    exampleProblems: ['Two Sum (Sorted array)', 'Best Time to Buy and Sell Stock', 'Maximum Subarray (Kadane\'s Algorithm)', 'Trapping Rain Water', 'Container With Most Water'],
    interviewRelevance: 'Highest frequency in preliminary screening rounds (over 65% of test questions).',
    resources: ['LeetCode Array Tag', 'NeetCode 150 Arrays', 'Striver SDE Sheet']
  },
  {
    step: 3,
    topic: 'Strings',
    whatItIs: 'Sequences of characters stored as immutable or mutable arrays depending on the programming language.',
    whatToLearn: ['String immutability vs StringBuilder', 'Character frequency hashing (array of size 26/256)', 'Anagrams & Palindrome verification', 'Sliding Window on substrings', 'String matching algorithms (KMP basic concept)'],
    practiceApproach: 'Use an integer array of size 26 as a lightweight hash map for lowercase alphabets.',
    exampleProblems: ['Valid Anagram', 'Valid Palindrome', 'Longest Substring Without Repeating Characters', 'Group Anagrams', 'Longest Palindromic Substring'],
    interviewRelevance: 'Very common in string parsing, tokenization, and web data validation questions.',
    resources: ['LeetCode String Tag', 'GeeksforGeeks String DSA']
  },
  {
    step: 4,
    topic: 'Searching Algorithms',
    whatItIs: 'Techniques for finding target elements efficiently within collections.',
    whatToLearn: ['Linear Search (O(n))', 'Binary Search (O(log n)) on sorted arrays', 'Binary Search on Answer / Search Space', 'Order-Agnostic Binary Search', 'Lower Bound and Upper Bound calculations'],
    practiceApproach: 'Master the template: `while (low <= high)` and careful mid calculation `mid = low + (high - low) / 2` to prevent integer overflow.',
    exampleProblems: ['Binary Search implementation', 'Search in Rotated Sorted Array', 'Find First and Last Position of Element', 'Koko Eating Bananas (Search on Answer)', 'Find Peak Element'],
    interviewRelevance: 'Binary search is one of the most frequently tested optimization paradigms in tech interviews.',
    resources: ['Errichto Binary Search Tutorial', 'LeetCode Binary Search']
  },
  {
    step: 5,
    topic: 'Sorting Algorithms',
    whatItIs: 'Systematic algorithms for arranging elements in ascending or descending order.',
    whatToLearn: ['Bubble, Selection, Insertion Sort (O(n²) - for foundational understanding)', 'Merge Sort (O(n log n) divide and conquer, stable)', 'Quick Sort (O(n log n) average, partition logic)', 'Counting Sort & Radix Sort (Non-comparison O(n))', 'Custom Comparators in STL / Java'],
    practiceApproach: 'Understand the difference between in-place sorting and stable sorting.',
    exampleProblems: ['Merge Sort implementation', 'Sort Colors (Dutch National Flag Algorithm)', 'Merge Intervals', 'Kth Largest Element in an Array', 'Top K Frequent Elements'],
    interviewRelevance: 'Sorting is often used as a preliminary preprocessing step to simplify complex problems.',
    resources: ['Visualgo Sorting Animations', 'GeeksforGeeks Sorting Algorithms']
  },
  {
    step: 6,
    topic: 'Linked Lists',
    whatItIs: 'Linear data structure where elements (nodes) are stored non-contiguously in memory, linked together by pointers.',
    whatToLearn: ['Singly Linked List & Doubly Linked List node creation', 'Pointer manipulation & Head/Tail tracking', 'Fast and Slow Pointer Technique (Floyd\'s Cycle Finding)', 'In-place List Reversal', 'Dummy Head Node pattern to handle edge cases'],
    practiceApproach: 'Always draw pointer arrows on paper before writing pointer reassignment code.',
    exampleProblems: ['Reverse a Linked List', 'Detect Cycle in Linked List', 'Merge Two Sorted Lists', 'Remove Nth Node From End of List', 'LRU Cache (using Doubly Linked List + HashMap)'],
    interviewRelevance: 'Tests precise pointer manipulation, memory allocation, and edge-case handling (null pointers).',
    resources: ['LeetCode Linked List Tag', 'NeetCode Linked List Playlist']
  },
  {
    step: 7,
    topic: 'Stacks',
    whatItIs: 'Linear data structure following the Last-In, First-Out (LIFO) order.',
    whatToLearn: ['Stack operations (push, pop, peek, isEmpty in O(1))', 'Call Stack & Recursion simulation', 'Parentheses & Bracket matching', 'Monotonic Stack Pattern (Increasing / Decreasing)', 'Infix to Postfix expression conversion'],
    practiceApproach: 'When a problem asks for "next greater element" or "previous smaller element", immediately think Monotonic Stack.',
    exampleProblems: ['Valid Parentheses', 'Min Stack (O(1) retrieval)', 'Daily Temperatures (Monotonic Stack)', 'Next Greater Element', 'Largest Rectangle in Histogram'],
    interviewRelevance: 'Crucial for parser design, compiler syntax trees, and undo/redo operations.',
    resources: ['NeetCode Stack Playlist', 'GeeksforGeeks Stack Data Structure']
  },
  {
    step: 8,
    topic: 'Queues & Deques',
    whatItIs: 'Linear data structure following the First-In, First-Out (FIFO) order.',
    whatToLearn: ['Standard Queue operations (enqueue, dequeue)', 'Circular Queue implementation with array', 'Deque (Double-Ended Queue)', 'Queue implementation using Stacks', 'Breadth-First Search (BFS) queue mechanics'],
    practiceApproach: 'Use Deque for maintaining sliding window maximum in O(n) time.',
    exampleProblems: ['Implement Queue using Stacks', 'Sliding Window Maximum (using Deque)', 'Rotting Oranges (BFS with Queue)', 'Design Circular Queue'],
    interviewRelevance: 'Foundation of Breadth-First Search (BFS), task scheduling, and message queue architectures.',
    resources: ['LeetCode Queue Tag', 'GeeksforGeeks Queue DSA']
  },
  {
    step: 9,
    topic: 'Recursion & Backtracking',
    whatItIs: 'A problem-solving method where a function calls itself with smaller sub-problems until reaching a base condition; backtracking explores all possible candidates and abandons invalid paths.',
    whatToLearn: ['Base Case definition & Recursion Tree', 'Call Stack overflow prevention', 'Subsets & Permutations generation', 'State Restoration (Backtracking step)', 'Pruning unnecessary branches'],
    practiceApproach: 'Draw the recursion decision tree for every branching choice.',
    exampleProblems: ['Subsets (Power Set)', 'Permutations of Array', 'Combination Sum', 'N-Queens Problem', 'Word Search on Grid', 'Sudoku Solver'],
    interviewRelevance: 'Key test for deep algorithmic thinking, state management, and combinatorial search.',
    resources: ['Striver Recursion & Backtracking Series', 'LeetCode Backtracking Tag']
  },
  {
    step: 10,
    topic: 'Binary Trees & Binary Search Trees (BST)',
    whatItIs: 'Hierarchical tree data structure where each node has at most two children; in a BST, left child < root < right child.',
    whatToLearn: ['Tree Traversals: Inorder, Preorder, Postorder (DFS) & Level Order (BFS)', 'Tree Height, Maximum Depth & Diameter', 'BST Insertion, Search, and Deletion', 'Lowest Common Ancestor (LCA)', 'Balanced Trees (AVL & Red-Black concepts)'],
    practiceApproach: 'Most tree problems can be solved cleanly using recursion on left and right subtrees.',
    exampleProblems: ['Maximum Depth of Binary Tree', 'Invert / Flip Binary Tree', 'Validate Binary Search Tree', 'Lowest Common Ancestor in BST', 'Binary Tree Level Order Traversal', 'Serialize and Deserialize Binary Tree'],
    interviewRelevance: 'Appears in over 80% of technical interview rounds at Google, Amazon, Microsoft, and Meta.',
    resources: ['NeetCode Trees Playlist', 'Striver Tree Series', 'LeetCode Trees Tag']
  },
  {
    step: 11,
    topic: 'Heaps & Priority Queues',
    whatItIs: 'Complete binary tree maintaining the Heap property (Min-Heap: parent ≤ children; Max-Heap: parent ≥ children).',
    whatToLearn: ['Min Heap vs Max Heap mechanics', 'Heapify algorithm in O(n)', 'Insertion and Extraction in O(log n)', 'Top-K Elements Pattern', 'Two Heaps Pattern for running median'],
    practiceApproach: 'Whenever you need the "Kth largest" or "Kth most frequent" element without full sorting, use a Heap of size K.',
    exampleProblems: ['Kth Largest Element in an Array', 'Top K Frequent Elements', 'Find Median from Data Stream', 'Merge K Sorted Lists', 'Task Scheduler'],
    interviewRelevance: 'Frequently used in scheduling engines, Dijkstra\'s algorithm, and real-time streaming analytics.',
    resources: ['LeetCode Heap Tag', 'NeetCode Priority Queue Playlist']
  },
  {
    step: 12,
    topic: 'Hashing & Hash Tables',
    whatItIs: 'Data structure that maps keys to values for average O(1) time complexity lookups using a hash function.',
    whatToLearn: ['Hash function design & collision handling (Chaining vs Open Addressing)', 'HashSet (unique elements) vs HashMap (key-value pairs)', 'Frequency Maps & Prefix Sum with HashMaps', 'Custom Hash Functions for pairs/objects'],
    practiceApproach: 'Trade memory (space) for speed (O(1) time lookups) using HashMaps.',
    exampleProblems: ['Two Sum', 'Group Anagrams', 'Subarray Sum Equals K', 'Longest Consecutive Sequence', 'Insert Delete GetRandom O(1)'],
    interviewRelevance: 'The most universally used optimization data structure in software engineering.',
    resources: ['LeetCode Hash Table Tag', 'GeeksforGeeks Hashing Tutorial']
  },
  {
    step: 13,
    topic: 'Graphs & Graph Algorithms',
    whatItIs: 'Non-linear network structure consisting of vertices (nodes) connected by edges (directed, undirected, weighted, or unweighted).',
    whatToLearn: ['Adjacency Matrix vs Adjacency List representations', 'Graph Traversal: BFS (Queue) & DFS (Recursion)', 'Cycle Detection in Directed and Undirected Graphs', 'Topological Sort (Kahn\'s BFS Algorithm & DFS)', 'Shortest Path Algorithms: Dijkstra (Weighted) & Bellman-Ford', 'Disjoint Set Union (DSU / Union-Find) & Minimum Spanning Tree (Kruskal)'],
    practiceApproach: 'Convert word ladders, dependency resolution, and matrix grids into graph nodes and edges.',
    exampleProblems: ['Number of Islands (Grid BFS/DFS)', 'Clone Graph', 'Course Schedule (Topological Sort / Cycle Detection)', 'Network Delay Time (Dijkstra Algorithm)', 'Redundant Connection (Union-Find)'],
    interviewRelevance: 'Essential for senior roles, social networks, navigation systems, and cloud infrastructure modeling.',
    resources: ['Striver Graph Series', 'WilliamFiset Graph Theory Playlist', 'LeetCode Graph Tag']
  },
  {
    step: 14,
    topic: 'Greedy Algorithms',
    whatItIs: 'Algorithmic paradigm that makes the locally optimal choice at each stage with the hope of finding a global optimum.',
    whatToLearn: ['Greedy Choice Property & Optimal Substructure', 'Activity Selection & Interval Scheduling', 'Gas Station / Circular Tour Problem', 'Jump Game techniques'],
    practiceApproach: 'Sort the input first by end-time, profit, or weight to make greedy decisions easy.',
    exampleProblems: ['Jump Game & Jump Game II', 'Gas Station', 'Non-overlapping Intervals', 'Hand of Straights', 'Task Scheduler'],
    interviewRelevance: 'Common in resource scheduling, interval merging, and optimization challenges.',
    resources: ['LeetCode Greedy Tag', 'GeeksforGeeks Greedy Algorithms']
  },
  {
    step: 15,
    topic: 'Dynamic Programming (DP)',
    whatItIs: 'Algorithmic optimization technique that breaks problems into overlapping subproblems, solves each subproblem once, and stores the answer (Memoization or Tabulation).',
    whatToLearn: ['Identifying DP: Overlapping Subproblems + Optimal Substructure', '1D DP: Climbing Stairs, House Robber, Coin Change', '2D DP: Unique Paths, Minimum Path Sum', 'Classic Patterns: 0/1 Knapsack, Unbounded Knapsack, Longest Common Subsequence (LCS), Longest Increasing Subsequence (LIS)', 'State Transition Equations & Space Optimization (O(1) space)'],
    practiceApproach: 'Write the pure recursive solution first → Memoize with a cache table (Top-Down) → Convert to iterative loops (Bottom-Up Tabulation).',
    exampleProblems: ['Climbing Stairs', 'Coin Change', 'House Robber', 'Longest Increasing Subsequence (LIS)', 'Edit Distance', '0/1 Knapsack Problem', 'Partition Equal Subset Sum'],
    interviewRelevance: 'The benchmark challenge in competitive programming and top-tier technical interviews (Google, Microsoft, Amazon).',
    resources: ['NeetCode DP Playlist', 'Striver Dynamic Programming Series', 'LeetCode DP Tag']
  }
];

export const ENGINEERING_PROJECT_ROADMAP = {
  beginner: [
    {
      title: 'Scientific Calculator & Unit Converter',
      difficulty: 'Beginner (Year 1)',
      skills: ['C++ / Python / Java', 'Mathematical Logic', 'Error Handling', 'CLI or Simple GUI (Tkinter/Swing)'],
      tech: 'Python (Tkinter) or C++ / Java',
      whatToBuild: 'A robust desktop calculator capable of arithmetic, trigonometric functions, logarithm, bracket evaluations (BODMAS/PEMDAS), and unit conversion (currency, length, weight).',
      plan: [
        'Step 1: Implement core arithmetic logic and mathematical functions.',
        'Step 2: Add operator precedence parsing using the Shunting Yard algorithm or stack.',
        'Step 3: Build a clean user interface with numeric keypads and display screen.',
        'Step 4: Add unit conversion modules and input validation (e.g. prevent division by zero).'
      ],
      outcome: 'A working desktop utility software with zero crashes on invalid inputs.',
      learns: 'Operator precedence parsing, stack data structures, event listener binding, and input sanitization.',
      githubTips: 'Include screenshots in README, clean folder separation (src/, tests/, docs/), and compile instructions.',
      interviewAngle: 'Explain how you handled operator precedence with brackets and how you prevented division by zero crashes.'
    },
    {
      title: 'Interactive Quiz & Flashcard App',
      difficulty: 'Beginner (Year 1)',
      skills: ['JavaScript / Python / Java', 'JSON File I/O', 'Timer Logic', 'DOM / GUI State Management'],
      tech: 'HTML5, CSS3, JavaScript OR Python GUI',
      whatToBuild: 'An interactive test application with timed multiple-choice questions, category selection, local score tracking, score percentages, and instant answer explanations.',
      plan: [
        'Step 1: Design a JSON schema storing questions, options, correct answers, and explanations.',
        'Step 2: Build question rendering engine with countdown timer.',
        'Step 3: Compute final score, streak bonus, and store high scores in localStorage / file.',
        'Step 4: Add category filtering and review mode showing correct answers.'
      ],
      outcome: 'An engaging self-assessment app with instant feedback and persistent score history.',
      learns: 'State management, asynchronous timers (setInterval), JSON parsing, and UX design.',
      githubTips: 'Host on GitHub Pages for instant live demo link, add badge showing 100% test coverage.',
      interviewAngle: 'Discuss how you decoupled the quiz questions dataset from the rendering logic.'
    },
    {
      title: 'Smart To-Do & Task Priority Organizer',
      difficulty: 'Beginner (Year 1 - 2)',
      skills: ['HTML/CSS/JS or Python', 'LocalStorage / SQLite', 'CRUD Operations', 'Date & Priority Sorting'],
      tech: 'Vanilla JavaScript & Tailwind CSS or Python SQLite',
      whatToBuild: 'A responsive task manager allowing users to add, edit, delete, mark completed, filter by tags (Work, College, Personal), set deadlines, and sort by priority.',
      plan: [
        'Step 1: Build responsive task input card with category badges and date picker.',
        'Step 2: Implement CRUD operations with state arrays.',
        'Step 3: Connect LocalStorage or SQLite database for persistent offline storage.',
        'Step 4: Add search filter, completion progress bar, and overdue task warnings.'
      ],
      outcome: 'A daily productivity tool stored locally on the user\'s device.',
      learns: 'CRUD mechanics, persistent browser storage, array filter/map operations, and responsive styling.',
      githubTips: 'Provide GIF preview in README and clean commit history showing incremental feature development.',
      interviewAngle: 'Explain your data schema, how you handled offline persistence, and how you implemented priority sorting.'
    },
    {
      title: 'Student Grade & Attendance Management System',
      difficulty: 'Beginner to Intermediate (Year 2)',
      skills: ['C++ / Java / Python', 'OOP Principles', 'File I/O / SQLite', 'CSV Report Generation'],
      tech: 'C++ with File I/O or Java / Python with SQLite',
      whatToBuild: 'A menu-driven system to register students, record marks across subjects, compute CGPA/percentage, track attendance percentages, and generate student report cards.',
      plan: [
        'Step 1: Create Student, Course, and GradeBook classes adhering to OOP encapsulation.',
        'Step 2: Implement file read/write or SQLite queries for storing student records.',
        'Step 3: Add automated calculation methods for CGPA, attendance deficiency alerts (<75%).',
        'Step 4: Export student performance summaries as formatted text or CSV files.'
      ],
      outcome: 'A complete administrative tool for academic records with persistent storage.',
      learns: 'Object-Oriented Design (Classes, Inheritance, Polymorphism), File persistence, and modular structure.',
      githubTips: 'Include sample CSV data files and clear command line execution instructions.',
      interviewAngle: 'Highlight your class hierarchy and how you ensured data integrity when updating existing student records.'
    }
  ],
  intermediate: [
    {
      title: 'Personal Finance & Expense Tracker with Analytics',
      difficulty: 'Intermediate (Year 2 - 3)',
      skills: ['React / Vue / Next.js', 'Node.js or Python FastAPI', 'PostgreSQL / SQLite', 'Chart.js / Recharts', 'REST API'],
      tech: 'React, Node.js/Express, PostgreSQL, Chart.js, Tailwind CSS',
      whatToBuild: 'A full-stack financial dashboard to record daily income and expenses, categorize spending (Food, Rent, Books, Travel), visualize monthly budget pies, and export monthly CSV reports.',
      plan: [
        'Step 1: Design normalized database schema (Users, Categories, Transactions, Budgets).',
        'Step 2: Build REST API endpoints for transaction CRUD and monthly aggregation queries.',
        'Step 3: Create responsive frontend with interactive Chart.js graphs and date range pickers.',
        'Step 4: Add budget limit alerts and CSV transaction export functionality.'
      ],
      outcome: 'A production-grade financial web app with analytics and visual budget management.',
      learns: 'Full-stack REST API development, SQL aggregations (GROUP BY, SUM), Chart visualization, and async state handling.',
      githubTips: 'Include architecture diagrams, Swagger API documentation, and live deployment link on Render/Vercel.',
      interviewAngle: 'Describe how you optimized database queries for multi-month aggregations across thousands of transaction rows.'
    },
    {
      title: 'Full-Stack E-Commerce Platform with Cart & Payment',
      difficulty: 'Intermediate (Year 2 - 3)',
      skills: ['React / Next.js', 'Node.js / Express', 'MongoDB / PostgreSQL', 'Stripe / Razorpay Sandbox', 'JWT Auth'],
      tech: 'Next.js, Tailwind CSS, Node.js, PostgreSQL/MongoDB, Stripe API',
      whatToBuild: 'An online marketplace featuring product catalog, search & category filtering, shopping cart in local storage, user login/signup with JWT, and sandbox payment checkout.',
      plan: [
        'Step 1: Set up database models for Products, Orders, Users, and OrderItems.',
        'Step 2: Implement JWT authentication, password hashing with bcrypt, and protected routes.',
        'Step 3: Build responsive frontend product grid, persistent cart, and search bar.',
        'Step 4: Integrate Stripe/Razorpay payment gateway webhooks for order verification.'
      ],
      outcome: 'A fully functional multi-page online shopping platform with simulated payments.',
      learns: 'Complex state management (Cart context), JWT security, Webhook verification, and database indexing.',
      githubTips: 'Provide .env.example files, clear setup steps, and architectural flow diagram from Cart to Webhook.',
      interviewAngle: 'Explain how you handled inventory race conditions and secured payment webhook verification signatures.'
    },
    {
      title: 'Real-Time Collaborative Chat Application',
      difficulty: 'Intermediate (Year 2 - 3)',
      skills: ['Node.js', 'WebSockets (Socket.io)', 'React', 'MongoDB / Redis', 'Authentication'],
      tech: 'React, Node.js, Express, Socket.io, MongoDB, Tailwind CSS',
      whatToBuild: 'A real-time messaging application with public and private chat rooms, live typing indicators, online/offline presence status, and message history persistence.',
      plan: [
        'Step 1: Configure WebSocket server using Socket.io and handle connection events.',
        'Step 2: Implement room joining, message broadcasting, and typing events.',
        'Step 3: Store message history in MongoDB with timestamp indexing.',
        'Step 4: Build responsive chat interface with sidebar channels and auto-scrolling message stream.'
      ],
      outcome: 'A lightning-fast real-time messaging platform supporting multiple concurrent users.',
      learns: 'Bi-directional WebSocket communication, concurrency, event-driven backend architecture, and indexing.',
      githubTips: 'Include a GIF showing two browser windows chatting simultaneously in real time.',
      interviewAngle: 'Discuss how WebSockets differ from HTTP polling and how you handled client disconnections/reconnections.'
    },
    {
      title: 'Learning Management System (LMS) Portal',
      difficulty: 'Intermediate (Year 3)',
      skills: ['React / Next.js', 'Express / Spring Boot', 'PostgreSQL', 'Role-Based Access Control (RBAC)', 'Cloud Storage'],
      tech: 'React, Node.js / Java Spring Boot, PostgreSQL, AWS S3 / Cloudinary',
      whatToBuild: 'A portal with student and teacher roles. Teachers can upload course notes/videos, create assignments; students can enroll, track progress percentage, and submit assignments.',
      plan: [
        'Step 1: Implement Role-Based Access Control (Student vs Teacher vs Admin).',
        'Step 2: Create database relationships between Courses, Modules, Enrollments, and Submissions.',
        'Step 3: Integrate cloud file storage for PDF notes and assignment submissions.',
        'Step 4: Build student progress dashboard with completion checkmarks.'
      ],
      outcome: 'An institutional educational portal ready for school or college department use.',
      learns: 'RBAC security, relational schema modeling, file upload handling, and progress analytics.',
      githubTips: 'Provide demo teacher and student login credentials in README for recruiters to test instantly.',
      interviewAngle: 'Explain your RBAC authorization middleware and how you designed the database schema to track modular progress.'
    }
  ],
  advanced: [
    {
      title: 'AI Crop Disease Diagnostic & Advisory Assistant',
      difficulty: 'Advanced (Year 3 - 4)',
      skills: ['Python', 'PyTorch / TensorFlow', 'FastAPI', 'Computer Vision (CNN / ResNet)', 'React Native / React'],
      tech: 'Python, PyTorch (Transfer Learning with MobileNet/ResNet), FastAPI, React / PWA',
      whatToBuild: 'An AI-powered agricultural mobile/web tool where farmers upload leaf photos (potato, tomato, rice) to instantly detect diseases with confidence scores and receive localized remedy steps.',
      plan: [
        'Step 1: Train or fine-tune a Computer Vision model on PlantVillage dataset using PyTorch.',
        'Step 2: Optimize model with quantization (ONNX / TorchScript) for low-latency inference.',
        'Step 3: Build a FastAPI REST service to accept image uploads and return prediction JSON.',
        'Step 4: Build offline-friendly frontend UI with camera capture and bilingual remedies.'
      ],
      outcome: 'A real-world AI diagnostic solution addressing agricultural crop loss.',
      learns: 'Deep Learning for Computer Vision, Transfer Learning, model quantization, and API deployment.',
      githubTips: 'Detail training accuracy, F1-scores, confusion matrix, dataset citations, and sample test images.',
      interviewAngle: 'Explain your choice of CNN architecture, how you handled dataset class imbalances, and optimized inference latency.'
    },
    {
      title: 'NLP Document Search & Q&A Assistant (RAG Pipeline)',
      difficulty: 'Advanced (Year 3 - 4)',
      skills: ['Python', 'LangChain / LlamaIndex', 'Vector Databases (ChromaDB / Pinecone)', 'FastAPI', 'OpenAI / Ollama / Gemini'],
      tech: 'Python, FastAPI, LangChain, ChromaDB, Sentence-Transformers, React',
      whatToBuild: 'A Retrieval-Augmented Generation (RAG) system allowing students to upload textbook PDFs or government schemes, index them in a vector database, and ask semantic questions answered strictly from source text.',
      plan: [
        'Step 1: Chunk PDF text and generate semantic vector embeddings using sentence-transformers.',
        'Step 2: Store embeddings in ChromaDB and implement Cosine Similarity top-k retrieval.',
        'Step 3: Construct augmented prompt and send to LLM (Ollama / Gemini / OpenAI).',
        'Step 4: Build interactive frontend showing exact page citations and source snippet highlights.'
      ],
      outcome: 'A production-grade RAG application with accurate document citation and zero hallucination.',
      learns: 'Vector embeddings, chunking strategies, semantic similarity search, and prompt engineering.',
      githubTips: 'Include architecture pipeline diagram showing Chunking → Embedding → Vector DB → Retrieval → LLM.',
      interviewAngle: 'Discuss how you selected chunk size and overlap parameters and evaluated retrieval recall vs precision.'
    },
    {
      title: 'Collaborative Real-Time Code & Canvas Editor',
      difficulty: 'Advanced (Year 3 - 4)',
      skills: ['React', 'Node.js', 'WebSockets / WebRTC', 'CRDTs (Yjs)', 'Redis Pub/Sub', 'Docker'],
      tech: 'React, Monaco Editor (VS Code engine), Node.js, Socket.io / Yjs, Redis, Docker',
      whatToBuild: 'A Google Docs / Figma-style collaborative editor where multiple users simultaneously write code in a shared room with synchronized cursors, syntax highlighting, and live compilation.',
      plan: [
        'Step 1: Integrate Monaco Editor in React with room ID routing.',
        'Step 2: Implement Conflict-free Replicated Data Types (CRDTs) or Operational Transformation for conflict resolution.',
        'Step 3: Set up Redis Pub/Sub backend to broadcast editor state across multiple server instances.',
        'Step 4: Containerize with Docker and Docker-Compose for instant local reproduction.'
      ],
      outcome: 'A high-concurrency real-time collaborative system with zero editing conflicts.',
      learns: 'Distributed state synchronization, CRDT mechanics, Redis Pub/Sub scaling, and Docker containerization.',
      githubTips: 'Provide `docker-compose up` one-line command to run the complete stack locally, with demo video.',
      interviewAngle: 'Explain how CRDTs resolve concurrent typing collisions without locking the document.'
    },
    {
      title: 'Decentralized Offline-First Mesh File Sharing System',
      difficulty: 'Advanced (Year 3 - 4)',
      skills: ['Node.js', 'WebRTC DataChannels', 'IndexedDB', 'Service Worker PWA', 'Cryptographic Hashing'],
      tech: 'JavaScript, WebRTC, IndexedDB, Service Workers, SHA-256 Hashing',
      whatToBuild: 'A platform allowing students in low-connectivity rural schools to share digital textbooks, notes, and video lessons directly peer-to-peer over local Wi-Fi without internet access.',
      plan: [
        'Step 1: Implement WebRTC DataChannels for high-speed direct peer-to-peer binary file transfer.',
        'Step 2: Slice large files into 64KB binary chunks with SHA-256 hash verification.',
        'Step 3: Store received chunks in browser IndexedDB with resume-on-disconnect support.',
        'Step 4: Implement Service Worker caching for complete offline functionality.'
      ],
      outcome: 'A zero-bandwidth educational content distribution tool tailored for rural communities.',
      learns: 'P2P networking, WebRTC protocol, binary data chunking, cryptographic checksums, and PWA caching.',
      githubTips: 'Document real-world rural connectivity constraints, benchmark transfer speeds over local hotspot.',
      interviewAngle: 'Explain your chunking algorithm, how you verified file integrity using SHA-256, and handled dropped packets.'
    }
  ]
};

export const GIT_GITHUB_ROADMAP = [
  {
    step: 1,
    title: 'What is Git vs GitHub?',
    concept: 'Git is a distributed version control tool running locally on your computer that tracks every change made to your source code files like a timeline. GitHub is a cloud platform that hosts your Git repositories online, allowing you to showcase your code, collaborate with others, and contribute to open source.',
    commands: [
      { cmd: 'git --version', desc: 'Check if Git is installed on your system' },
      { cmd: 'git config --global user.name "Your Full Name"', desc: 'Set your name for all commit authoring' },
      { cmd: 'git config --global user.email "your.email@example.com"', desc: 'Set your GitHub account email address' }
    ],
    bestPractice: 'Always use the same email on Git as your GitHub account so commits are linked to your profile graph.'
  },
  {
    step: 2,
    title: 'Creating & Initializing a Repository',
    concept: 'A repository (repo) is a folder tracked by Git. You can create a new local repo or clone an existing one from GitHub.',
    commands: [
      { cmd: 'git init', desc: 'Initialize an empty Git repository in your current project folder' },
      { cmd: 'git clone https://github.com/user/repo.git', desc: 'Download a complete copy of a remote project to your machine' }
    ],
    bestPractice: 'Always create a .gitignore file (e.g. ignoring node_modules/, .env, __pycache__/, .DS_Store) BEFORE making your first commit.'
  },
  {
    step: 3,
    title: 'The Daily Git Staging & Commit Workflow',
    concept: 'Working Directory (files you edit) → Staging Area (files prepared for save) → Local Repository (permanent snapshot commit).',
    commands: [
      { cmd: 'git status', desc: 'View which files have been modified, staged, or untracked' },
      { cmd: 'git add .', desc: 'Stage all modified and new files in the current directory' },
      { cmd: 'git add src/App.jsx', desc: 'Stage a specific single file' },
      { cmd: 'git commit -m "feat: add student quiz score calculation logic"', desc: 'Create a permanent snapshot with a descriptive message' },
      { cmd: 'git log --oneline -n 5', desc: 'View the last 5 commits in a concise timeline' }
    ],
    bestPractice: 'Use conventional commit prefixes: feat: (new feature), fix: (bug fix), docs: (documentation), refactor: (code improvement).'
  },
  {
    step: 4,
    title: 'Linking Local Code to GitHub & Pushing',
    concept: 'Connect your local repository to a new empty repository created on GitHub.com and push your code to the cloud.',
    commands: [
      { cmd: 'git branch -M main', desc: 'Rename default master branch to standard "main"' },
      { cmd: 'git remote add origin https://github.com/your-username/your-repo.git', desc: 'Link your local repo to the remote GitHub repository' },
      { cmd: 'git push -u origin main', desc: 'Push your commits to GitHub and set upstream tracking' },
      { cmd: 'git pull origin main', desc: 'Fetch and merge latest changes from GitHub into your local branch' }
    ],
    bestPractice: 'Never commit secrets, passwords, or API keys. Keep all sensitive tokens inside .env files.'
  },
  {
    step: 5,
    title: 'Branching, Merging & Team Collaboration',
    concept: 'Never write experimental code directly on main. Create feature branches, test thoroughly, and merge back into main.',
    commands: [
      { cmd: 'git checkout -b feature/user-auth', desc: 'Create and switch to a new feature branch' },
      { cmd: 'git branch', desc: 'List all local branches (current branch highlighted)' },
      { cmd: 'git checkout main', desc: 'Switch back to the main branch' },
      { cmd: 'git merge feature/user-auth', desc: 'Merge changes from feature branch into main' },
      { cmd: 'git branch -d feature/user-auth', desc: 'Delete the feature branch after successful merge' }
    ],
    bestPractice: 'Keep branches focused on one single feature or bugfix at a time.'
  },
  {
    step: 6,
    title: 'Pull Requests (PRs), Code Reviews & Open Source',
    concept: 'A Pull Request is a formal request on GitHub asking the repository owner to review and merge your branch into the project. This is the foundation of professional software engineering and open source.',
    commands: [
      { cmd: 'git push origin feature/user-auth', desc: 'Push your feature branch to GitHub to open a PR' },
      { cmd: 'git remote add upstream <original-repo-url>', desc: 'Track original upstream repository for forks' },
      { cmd: 'git fetch upstream && git merge upstream/main', desc: 'Keep your local fork synchronized with upstream' }
    ],
    bestPractice: 'Find GitHub repositories with the label "good first issue" to make your first open-source contributions.'
  },
  {
    step: 7,
    title: 'Building a Standout GitHub Portfolio',
    concept: 'Recruiters inspect your GitHub profile to verify that you write clean, well-structured, documented code rather than copying tutorials.',
    commands: [
      { cmd: 'README.md with Title, Live Demo Link, Tech Badges, Features, Setup Instructions, Screenshots', desc: 'Mandatory for every public repo' },
      { cmd: 'Pin top 3-4 best projects to your GitHub Profile overview', desc: 'Showcase diversity: 1 Full-Stack, 1 DSA/Systems, 1 AI/Specialized' }
    ],
    bestPractice: 'Deploy every frontend/full-stack project on free cloud hosting (Vercel, Render, GitHub Pages) and put the live link at the very top of your README.'
  }
];

export const COMMUNICATION_ROADMAP = {
  pillars: [
    {
      title: '1. English Fundamentals & Daily Vocabulary',
      desc: 'Master technical terminology and everyday conversational sentence structures without fear of grammatical errors.',
      tips: [
        'Learn 5 core technical verbs daily (e.g., refactor, decouple, optimize, parse, instantiate).',
        'Replace fillers (um, like, actually) with brief pauses to organize thoughts.',
        'Read 1 engineering blog post daily (e.g., Netflix TechBlog, Uber Engineering, freeCodeCamp).'
      ],
      habit: 'Spend 10 minutes every morning reading aloud a technical article to train vocal rhythm.'
    },
    {
      title: '2. Speaking Confidence & "Think Aloud" Protocol',
      desc: 'In technical coding interviews, interviewers evaluate your thought process. Speaking your thoughts aloud continuously while coding is the #1 differentiating skill.',
      tips: [
        'State the problem in your own words before typing any code.',
        'Explain your brute force idea first: "A naive approach would be O(n²)..."',
        'Articulate your optimization: "We can reduce this to O(n) using a hash map because..."'
      ],
      habit: 'Pick 1 LeetCode problem daily and record yourself on your phone explaining the logic without looking at code.'
    },
    {
      title: '3. Group Discussion (GD) & Professional Communication',
      desc: 'Active listening, constructive contribution, and professional email etiquette for campus placements and corporate teams.',
      tips: [
        'Use polite intervention phrases: "Adding to the valuable point made by my colleague..."',
        'Structure arguments with: Point → Explanation → Real-world Example.',
        'Write formal emails with clear subject lines, bulleted action items, and polite sign-offs.'
      ],
      habit: 'Participate in virtual peer study groups and lead 1 discussion per week.'
    },
    {
      title: '4. Presentation & Project Storytelling',
      desc: 'Deliver engaging technical presentations and project demos using the Problem-Solution-Tech-Impact framework.',
      tips: [
        'Keep slides clean: 1 key idea per slide with diagrams rather than dense text paragraphs.',
        'Structure project demos: 30s Problem → 60s Live Demo → 60s Tech Architecture → 30s Key Learnings.',
        'Maintain eye contact and open body posture.'
      ],
      habit: 'Deliver a 5-minute project pitch to a peer or mirror once a month.'
    }
  ],
  interviewFrameworks: {
    rounds: [
      { name: '1. Online Assessment (OA)', strategy: 'Timed DSA questions (60-90 mins) + Core CS MCQs. Focus on passing all edge-case test cases first, then optimize time complexity.' },
      { name: '2. Technical Coding Rounds (1-2 Rounds)', strategy: 'Live coding on Google Docs / CoderPad. Ask clarifying questions, write clean variable names, handle edge cases (null, empty), and state Big-O complexity.' },
      { name: '3. Core CS & Project Deep Dive', strategy: 'Deep interrogation of your resume projects. Be prepared to explain every line of code, database schema, trade-offs made, and alternative tools considered.' },
      { name: '4. HR & Behavioral Round', strategy: 'Evaluate culture fit, resilience, communication, and passion. Answer using the STAR framework with authentic personal stories.' }
    ],
    starMethod: {
      name: 'STAR Answering Framework',
      description: 'The global standard structure for answering behavioral and situational interview questions naturally without robotic memorization.',
      steps: [
        { letter: 'S (Situation)', detail: 'Set the scene and context. Where were you? What was the project or challenge?' },
        { letter: 'T (Task)', detail: 'What specific responsibility or technical bottleneck needed to be addressed?' },
        { letter: 'A (Action)', detail: 'What concrete steps, algorithms, tools, or decisions did YOU personally take? (Use "I", not just "we")' },
        { letter: 'R (Result)', detail: 'What was the quantifiable outcome? (e.g. reduced load time by 35%, completed 2 days ahead of schedule, zero data loss).' }
      ]
    },
    topQuestions: [
      {
        question: 'Tell me about yourself.',
        strategy: 'Follow the Past-Present-Future structure in 90 seconds:',
        exampleAnswer: 'Past: "I am a 3rd-year Computer Science student passionate about distributed systems and web architectures." \nPresent: "Recently, I built a full-stack educational platform with offline IndexedDB storage and mastered DSA with over 200 LeetCode problems solved." \nFuture: "I am excited about this role at your company because of your high-scale engineering challenges where I can contribute my backend skills."'
      },
      {
        question: 'Explain your most significant project and your specific contribution.',
        strategy: 'Use STAR method focusing on technical depth:',
        exampleAnswer: 'Explain the problem you solved, the technology stack chosen, your specific contribution (e.g. designing the database schema or WebSocket synchronization), the hardest bug you resolved, and the final impact.'
      },
      {
        question: 'What challenges or technical bottlenecks did you face, and how did you overcome them?',
        strategy: 'Show resilience, debugging skills, and learning mindset:',
        exampleAnswer: 'Describe a real bug (e.g. state synchronization race condition or slow database queries), how you debugged it using profiling tools/logs, the root cause identified, and the permanent fix implemented.'
      },
      {
        question: 'Why should we hire you over other candidates?',
        strategy: 'Combine strong fundamentals with consistency and fast adaptability:',
        exampleAnswer: 'Highlight your disciplined consistency (solving DSA daily, building production projects from scratch), strong computer science fundamentals (OS, DBMS, OOP), and proven ability to pick up new frameworks rapidly.'
      },
      {
        question: 'What are your greatest strengths and weaknesses?',
        strategy: 'Be honest and show proactive improvement:',
        exampleAnswer: 'Strength: Problem decomposition and persistence when debugging complex errors. Weakness: Historically hesitant in public speaking, but proactively overcoming it through weekly technical presentations and mock interviews.'
      }
    ]
  }
};

export const ENGINEERING_STUDENT_PROBLEMS = [
  {
    id: 'prob-1',
    problem: 'Don\'t know what to learn / Overwhelmed by too many technologies',
    whyItHappens: 'Every week a new framework or tool trends on social media (Web3, Rust, AI, DevSecOps). Students jump frantically between tutorials without mastering any foundation.',
    solution: 'Follow the Rule of ONE. Pick ONE language for DSA (C++ or Java) and ONE stack for projects (MERN or Python). Stick with them for 1 full year. Fundamental computer science concepts transfer 100% across all languages.',
    actions: [
      'Stop following tech hype channels and focus on core foundations (DSA, OOP, DBMS, OS).',
      'Commit to a structured roadmap (e.g., Year 1-4 blueprint) for at least 6 months without switching.',
      'Measure progress by problems solved and projects deployed, not by number of tutorials watched.'
    ],
    resources: ['roadmap.sh (Structured developer paths)', 'TeachYourselfCS.com', 'Harvard CS50']
  },
  {
    id: 'prob-2',
    problem: 'Learning too many programming languages at once (Jack of all, master of none)',
    whyItHappens: 'Belief that listing 10 languages on a resume makes a candidate look impressive, resulting in superficial knowledge of all 10 and inability to solve a basic logic problem in any.',
    solution: 'Master ONE language deeply first. Understand memory allocation, pointers/references, collections/STL, and asynchronous execution in that language. Interviewers prefer deep mastery of 1 language over surface familiarity with 10.',
    actions: [
      'Pick C++ or Java if preparing for standard campus coding rounds.',
      'Pick Python or JavaScript if building rapid full-stack or AI projects.',
      'Remove languages from your resume that you cannot code in without Google.'
    ],
    resources: ['LeetCode explore language cards', 'University of Helsinki Java MOOC', 'MDN JavaScript Guide']
  },
  {
    id: 'prob-3',
    problem: 'Weak coding fundamentals & fear of starting empty code files (Tutorial Hell)',
    whyItHappens: 'Watching 50 hours of video courses feels comfortable, but writing code from a blank screen triggers fear of syntax errors and getting stuck.',
    solution: 'Apply the 20/80 Rule. Spend 20% of your time learning syntax and 80% time typing code without looking at video solutions. Break problems into 5-line sub-tasks and embrace syntax error messages as learning clues.',
    actions: [
      'Close video tutorials and code in your own editor from scratch.',
      'When stuck, read the compiler/runtime error message carefully—it tells you the exact line number and reason.',
      'Write pseudocode on paper before typing code.'
    ],
    resources: ['HackerRank 30 Days of Code', 'Edabit coding challenges', 'W3Schools interactive exercises']
  },
  {
    id: 'prob-4',
    problem: 'Poor English communication skills & fear of speaking in interviews',
    whyItHappens: 'Growing up in regional language schools and lack of English speaking environment in college creates hesitation, stammering, and anxiety.',
    solution: 'Communication is a muscle trained through daily practice, not an inborn talent. Focus on clarity of thought rather than complex accent. Practice the "Think Aloud" protocol daily.',
    actions: [
      'Spend 10 minutes every day recording yourself explaining code logic in English.',
      'Practice mock interview questions in front of a mirror or with a classmate.',
      'Read technical blogs out loud to train vocal pronunciation.'
    ],
    resources: ['BBC Learning English', 'Pramp free peer mock interviews', 'Toastmasters speaking guides']
  },
  {
    id: 'prob-5',
    problem: 'No real projects on resume / Only generic tutorial clones',
    whyItHappens: 'Copying standard Todo apps or Weather apps from YouTube tutorials that recruiters have seen 10,000 times.',
    solution: 'Take a common idea and add 1 unique real-world twist (e.g. instead of a generic todo app, build an Offline Task Sync Tool for rural clinics with export/import and visual statistics).',
    actions: [
      'Build projects that solve a real problem in your college, village, or daily life.',
      'Include authentication, database indexing, error handling, and clean responsive UI.',
      'Deploy the project live on Vercel/Render and include the live URL at the top of your resume.'
    ],
    resources: ['GitHub Awesome Projects', 'Build Your Own X (GitHub)', 'freeCodeCamp Project ideas']
  },
  {
    id: 'prob-6',
    problem: 'Poor time management & semester exam pressure vs coding time',
    whyItHappens: 'Cramming for college exams at the last minute and abandoning coding practice for months, losing problem-solving momentum.',
    solution: 'Implement the Non-Negotiable 1-Hour Rule. Dedicate 60 minutes EVERY single morning to solve 1 DSA problem or write project code before college begins.',
    actions: [
      'Protect your first hour of the day for personal skill development.',
      'Maintain study notes throughout the semester to avoid 2-week pre-exam panic.',
      'Use weekends for 3-hour deep building sprints on your portfolio projects.'
    ],
    resources: ['Pomodoro Technique', 'Atomic Habits by James Clear summary']
  },
  {
    id: 'prob-7',
    problem: 'Difficulty finding internships & zero response from job applications',
    whyItHappens: 'Blindly clicking "Easy Apply" on LinkedIn with a generic resume alongside 10,000 other applicants without any personalization or portfolio proof.',
    solution: 'Use the Direct Proof-of-Work Outreach strategy. Build a specific mini-project or fix a bug in a startup\'s product, write a concise 3-sentence email to the engineering lead showing the live link, and request 10 minutes of feedback.',
    actions: [
      'Target 10-15 high-growth early-stage startups rather than 500 massive companies blindly.',
      'Reach out directly to engineering founders or senior developers with your live project links.',
      'Request referrals from college alumni on LinkedIn by demonstrating preparation.'
    ],
    resources: ['Wellfound (formerly AngelList)', 'Y Combinator Jobs Board', 'LinkedIn Alumni Search']
  },
  {
    id: 'prob-8',
    problem: 'Resume getting rejected by ATS (Applicant Tracking Systems)',
    whyItHappens: 'Using fancy multi-column graphics templates with tables, photos, and rating bars (e.g. "Java 4/5 stars") that automated ATS parsers cannot read.',
    solution: 'Use a clean, single-column, 1-page standard LaTeX / Overleaf template (Jake\'s Resume or Deedy Resume) with clear headings: Education, Skills, Projects, Experience, Achievements.',
    actions: [
      'Format project bullet points using the Action Verb + Context + Result formula.',
      'Include live links to GitHub repositories and deployed demo URLs.',
      'Remove photos, skill rating bars, and generic hobby sections.'
    ],
    resources: ['Overleaf Jake\'s Resume Template', 'Standard Resume Guidelines (r/EngineeringResumes)', 'Jobscan ATS Checker']
  },
  {
    id: 'prob-9',
    problem: 'Fear & anxiety during live coding tests and mock interviews',
    whyItHappens: 'Trying to write perfect code immediately in silence, freezing when stuck, and fearing negative judgment.',
    solution: 'Understand that interviewers evaluate your thought process and problem decomposition. Treat the interview as a collaborative discussion with a colleague.',
    actions: [
      'Ask clarifying questions before writing code (e.g. "Can the array contain negative numbers?").',
      'Start with a simple brute-force approach and state its complexity before optimizing.',
      'Conduct at least 5 peer mock interviews before your actual placement season.'
    ],
    resources: ['Pramp.com (Free peer mocks)', 'Interviewing.io', 'NeetCode Live Mock videos']
  },
  {
    id: 'prob-10',
    problem: 'Difficulty choosing a career domain (Web vs AI vs Cloud vs Cyber)',
    whyItHappens: 'Fear of picking the "wrong" path and missing out on other lucrative fields.',
    solution: 'Build 1 beginner project in 2 different domains during Year 2. You will immediately know whether you enjoy visual frontend building, backend system architecture, or mathematical AI data analysis.',
    actions: [
      'Spend 4 weeks building a full-stack web app, then 4 weeks training a machine learning model.',
      'Notice which domain makes you lose track of time while building.',
      'Remember: Core software engineering skills (Git, DSA, DBs, clean code) apply to all domains.'
    ],
    resources: ['roadmap.sh', 'freeCodeCamp YouTube domain introductions']
  },
  {
    id: 'prob-11',
    problem: 'Lack of consistency & quitting after 1-2 weeks',
    whyItHappens: 'Setting unrealistic goals (e.g., "I will code 8 hours daily") leading to burnout and frustration.',
    solution: 'Make habits ridiculously small. Commit to solving just ONE coding problem or writing 20 lines of code every single day without breaking the streak.',
    actions: [
      'Track your daily streak on RuraLearn or GitHub commit calendar.',
      'Find an accountability partner or join a study group where you share daily updates.',
      'Focus on showing up daily even on busy college exam days.'
    ],
    resources: ['GitHub Contribution Graph', 'LeetCode Daily Challenge Streak']
  },
  {
    id: 'prob-12',
    problem: 'Comparing yourself with others on social media (Imposter Syndrome)',
    whyItHappens: 'Seeing classmates post high-paying internship offers or fancy certifications on LinkedIn and feeling inadequate.',
    solution: 'Remember that social media shows highlight reels, not the hundreds of rejections and hours of silent struggle behind them. Focus solely on being 1% better than your own self yesterday.',
    actions: [
      'Limit passive social media scrolling during learning hours.',
      'Keep a "Wins Journal" recording new concepts mastered each week.',
      'Celebrate your personal milestones regardless of what others are doing.'
    ],
    resources: ['Imposter Syndrome in Tech guides', 'HealthyGamerGG productivity discussions']
  },
  {
    id: 'prob-13',
    problem: 'Not knowing how to use Git & GitHub effectively',
    whyItHappens: 'Treating GitHub like Google Drive and using the web interface to drag-and-drop zip files instead of using Git CLI terminal commands.',
    solution: 'Learn the 5 essential terminal commands: git init, git add, git commit, git branch, and git push. Practice them daily on all code you write.',
    actions: [
      'Delete all manual zip file uploads and use Git from your terminal.',
      'Write descriptive commit messages explaining WHAT and WHY was changed.',
      'Create a polished GitHub profile README showcasing your best projects.'
    ],
    resources: ['Git Official Documentation', 'GitHub Skills Interactive Courses', 'Missing Semester of CS (MIT)']
  }
];

export const REPUTABLE_LEARNING_PLATFORMS = [
  { name: 'LeetCode', category: 'DSA & Interview Prep', url: 'https://leetcode.com/', purpose: 'Industry standard for technical coding interview practice.' },
  { name: 'NeetCode', category: 'Structured DSA Roadmap', url: 'https://neetcode.io/', purpose: 'Curated 150 problem roadmap with clear video explanations.' },
  { name: 'freeCodeCamp', category: 'Full-Stack & Python Certifications', url: 'https://www.freecodecamp.org/', purpose: '100% free interactive full-stack web and Python courses.' },
  { name: 'The Odin Project', category: 'Project-Based Web Development', url: 'https://www.theodinproject.com/', purpose: 'Hands-on full-stack open source curriculum with Git workflow.' },
  { name: 'Harvard CS50', category: 'Computer Science Foundations', url: 'https://cs50.harvard.edu/x/', purpose: 'World-renowned introductory CS course covering C, Python, SQL, and Web.' },
  { name: 'roadmap.sh', category: 'Developer Visual Roadmaps', url: 'https://roadmap.sh/', purpose: 'Community-driven visual learning guides for all engineering roles.' },
  { name: 'MDN Web Docs', category: 'Authoritative Web Documentation', url: 'https://developer.mozilla.org/', purpose: 'The definitive reference for HTML, CSS, JavaScript, and Web APIs.' },
  { name: 'Kaggle', category: 'AI, Data Science & Machine Learning', url: 'https://www.kaggle.com/learn', purpose: 'Hands-on Jupyter notebook micro-courses on Python, ML, and Deep Learning.' },
  { name: 'GeeksforGeeks', category: 'CS Core Subjects & Algorithms', url: 'https://www.geeksforgeeks.org/', purpose: 'Comprehensive tutorials on DBMS, OS, Computer Networks, and DSA.' },
  { name: 'University of Helsinki Java MOOC', category: 'Core Java & OOP', url: 'https://java-programming.mooc.fi/', purpose: 'World-class free University course on Java programming and OOP design.' },
  { name: 'SQLZoo', category: 'Interactive SQL Practice', url: 'https://sqlzoo.net/', purpose: 'Interactive in-browser SQL queries and table join exercises.' },
  { name: 'Pramp', category: 'Free Peer Mock Interviews', url: 'https://www.pramp.com/', purpose: 'Live peer-to-peer technical coding and behavioral mock interviews.' }
];

export const ENGINEERING_CAREER_PATHS = [
  {
    title: 'Full Stack Software Engineer',
    demand: 'Very High (Highest Hiring Volume)',
    desc: 'Designs, builds, and maintains both client-side user interfaces (React, Next.js) and server-side business logic, databases, and APIs (Node.js, Express, PostgreSQL).',
    skills: 'HTML/CSS/JS, React, Node.js / Java Spring Boot, PostgreSQL / MongoDB, REST APIs, Git, Docker',
    salary: '₹6 - 18 LPA (Entry Level)',
    starterProject: 'Full-Stack Task / E-Commerce Platform with Auth and Payment Gateway'
  },
  {
    title: 'Backend Systems Engineer',
    demand: 'High (Fintech & High-Scale Systems)',
    desc: 'Architects scalable microservices, database schemas, caching layers, high-throughput message queues, and secure API gateways.',
    skills: 'Java (Spring Boot) / Go / Python (FastAPI), PostgreSQL, Redis, Kafka / RabbitMQ, Docker, Kubernetes',
    salary: '₹7 - 20 LPA (Entry Level)',
    starterProject: 'High-Concurrency URL Shortener or Distributed Rate Limiter with Redis'
  },
  {
    title: 'AI & Machine Learning Engineer',
    demand: 'Extremely High (Fastest Growing)',
    desc: 'Builds predictive models, neural networks, computer vision systems, and Large Language Model (LLM) RAG applications deployed to production.',
    skills: 'Python, Linear Algebra & Calculus, NumPy, Pandas, PyTorch / TensorFlow, Scikit-Learn, FastAPI, LangChain',
    salary: '₹8 - 22 LPA (Entry Level)',
    starterProject: 'Document Question-Answering RAG Assistant or Crop Disease Classifier'
  },
  {
    title: 'Cloud & DevOps Engineer',
    demand: 'High (Infrastructure & Reliability)',
    desc: 'Automates CI/CD deployment pipelines, manages cloud infrastructure (AWS/Azure), containerization (Docker), and cluster orchestration (Kubernetes).',
    skills: 'Linux Administration, Shell Scripting, Docker, Kubernetes, AWS / Azure, GitHub Actions (CI/CD), Terraform',
    salary: '₹6 - 18 LPA (Entry Level)',
    starterProject: 'Automated CI/CD Pipeline deploying containerized microservices to AWS'
  },
  {
    title: 'Data Engineer',
    demand: 'High (Big Data Analytics)',
    desc: 'Constructs robust data pipelines, ETL workflows, data warehouses, and streaming infrastructure to ingest massive datasets.',
    skills: 'SQL Mastery, Python, Apache Spark, Airflow, Snowflake / BigQuery, Kafka, Data Modeling',
    salary: '₹7 - 19 LPA (Entry Level)',
    starterProject: 'Real-Time Stock or Weather Data Pipeline with Airflow and PostgreSQL'
  },
  {
    title: 'Cybersecurity Analyst & Security Engineer',
    demand: 'High (Critical National & Corporate Defense)',
    desc: 'Protects networks, applications, and cloud systems from cyber attacks, conducts penetration testing, vulnerability assessments, and security audits.',
    skills: 'Networking (TCP/IP), Linux Security, OWASP Top 10, Cryptography, Wireshark, Burp Suite, Ethical Hacking',
    salary: '₹6 - 16 LPA (Entry Level)',
    starterProject: 'Web Vulnerability Scanner & Penetration Testing Audit Report'
  }
];
