# RuraLearn – Offline Learning Platform for Rural Students

RuraLearn is a modern, responsive, offline-first educational web application built specifically for students in rural and low-connectivity environments. It supports learners from school levels (Class 6–12) to college/engineering, alongside practical career and vocational skills.

## Core Features

- **Offline-First PWA Architecture:** Operates seamlessly without continuous internet connectivity via Service Workers and client-side IndexedDB/LocalStorage caching.
- **Centralized Curriculum Hub:** Rich educational content across Class 6–12 (Mathematics, Science, English, Social Studies) and Higher Education (Computer Science, Operating Systems, DBMS, Python Programming).
- **Reusable Dynamic LessonViewer:** Structured lesson layout featuring Learning Objectives, Detailed Sections, Worked Examples with step-by-step solutions, Important Formulas, Problem-Solving Strategies, Common Mistakes, and Real-World Applications.
- **Interactive Visual Learning Tools (100% Offline SVG/Canvas):**
  - *Number Line Visualizer* (Real, rational, and irrational roots)
  - *Coordinate Plane & Geometry Visualizer* (Distance and Midpoint calculations)
  - *Ohm's Law Circuit Simulator* (Voltage, resistance, current, glowing lamp)
  - *Optics Ray Tracer* (Concave mirror image formation)
  - *Data Structures Visualizer* (Stack LIFO and Queue FIFO buffer simulation)
- **Quick Check Quizzes & Dedicated Practice:** Interactive chapter end quizzes and filtered question bank with step-by-step explanations and adaptive difficulty.
- **Skill-Based Learning:** 5-step milestone tracks for Python, Web Development, AI/ML, Financial Literacy, and Spoken English.
- **Progress Tracking & Profile:** Subject mastery metrics, learning streak counter, weak-topic identification, and an offline storage manager.

## Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack
- **Framework:** React 19 + Vite 5
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Routing:** React Router v7
- **PWA & Offline:** Service Worker + LocalStorage/IndexedDB Storage Engine
