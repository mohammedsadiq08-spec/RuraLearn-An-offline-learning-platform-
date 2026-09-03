// RuraLearn Curriculum Classes & Subjects Registry

export const CLASSES = [
  {
    id: 'Class 10',
    name: 'Class 10',
    badge: 'Secondary Board Prep',
    description: 'Core foundation subjects aligned with national and state secondary boards.',
    level: 'School',
    subjects: [
      { id: 'Mathematics', name: 'Mathematics', icon: 'Calculator', color: 'emerald', totalChapters: 8 },
      { id: 'Science', name: 'Science', icon: 'Atom', color: 'blue', totalChapters: 8 },
      { id: 'English', name: 'English', icon: 'BookOpen', color: 'amber', totalChapters: 6 },
      { id: 'Social Studies', name: 'Social Studies', icon: 'Globe', color: 'purple', totalChapters: 4 },
    ]
  },
  {
    id: 'Class 9',
    name: 'Class 9',
    badge: 'Secondary Foundation',
    description: 'Foundational concepts in algebra, geometry, physics, chemistry, and biology.',
    level: 'School',
    subjects: [
      { id: 'Mathematics', name: 'Mathematics', icon: 'Calculator', color: 'emerald', totalChapters: 6 },
      { id: 'Science', name: 'Science', icon: 'Atom', color: 'blue', totalChapters: 6 },
      { id: 'English', name: 'English', icon: 'BookOpen', color: 'amber', totalChapters: 5 },
      { id: 'Social Studies', name: 'Social Studies', icon: 'Globe', color: 'purple', totalChapters: 4 },
    ]
  },
  {
    id: 'Class 8',
    name: 'Class 8',
    badge: 'Middle School',
    description: 'Rational numbers, linear equations, cells, forces, and practical science.',
    level: 'School',
    subjects: [
      { id: 'Mathematics', name: 'Mathematics', icon: 'Calculator', color: 'emerald', totalChapters: 5 },
      { id: 'Science', name: 'Science', icon: 'Atom', color: 'blue', totalChapters: 5 },
      { id: 'English', name: 'English', icon: 'BookOpen', color: 'amber', totalChapters: 4 },
    ]
  },
  {
    id: 'Class 11',
    name: 'Class 11',
    badge: 'Higher Secondary',
    description: 'Advanced streams: Physics, Chemistry, Mathematics, and Computer Science.',
    level: 'School',
    subjects: [
      { id: 'Mathematics', name: 'Mathematics', icon: 'Calculator', color: 'emerald', totalChapters: 6 },
      { id: 'Physics', name: 'Physics', icon: 'Zap', color: 'sky', totalChapters: 5 },
      { id: 'Chemistry', name: 'Chemistry', icon: 'FlaskConical', color: 'purple', totalChapters: 5 },
    ]
  },
  {
    id: 'Class 12',
    name: 'Class 12',
    badge: 'Senior Secondary',
    description: 'Calculus, Electromagnetism, Organic Chemistry, and Board Examination mastery.',
    level: 'School',
    subjects: [
      { id: 'Mathematics', name: 'Mathematics', icon: 'Calculator', color: 'emerald', totalChapters: 6 },
      { id: 'Physics', name: 'Physics', icon: 'Zap', color: 'sky', totalChapters: 6 },
      { id: 'Chemistry', name: 'Chemistry', icon: 'FlaskConical', color: 'purple', totalChapters: 6 },
    ]
  },
  {
    id: 'Engineering',
    name: 'Engineering & Higher Ed',
    badge: 'College & Technical',
    description: 'Industry-relevant technical foundations: Data Structures, OS, DBMS, and Python.',
    level: 'Higher Education',
    subjects: [
      { id: 'Computer Science', name: 'Computer Science', icon: 'Binary', color: 'indigo', totalChapters: 4 },
      { id: 'Programming', name: 'Programming & Python', icon: 'Code', color: 'emerald', totalChapters: 4 },
      { id: 'Database Systems', name: 'Database Management (DBMS)', icon: 'Database', color: 'cyan', totalChapters: 3 },
      { id: 'Operating Systems', name: 'Operating Systems', icon: 'Cpu', color: 'amber', totalChapters: 3 },
    ]
  },
];
