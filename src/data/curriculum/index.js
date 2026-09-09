// RuraLearn Master Curriculum Registry & Query Service
import { CLASSES } from './classes.js';
import { CLASS_10_MATH } from './class10Math.js';
import { CLASS_10_SCIENCE } from './class10Science.js';
import { ENGLISH_CURRICULUM } from './english.js';
import { SOCIAL_STUDIES_CURRICULUM } from './socialStudies.js';
import { ENGINEERING_CURRICULUM } from './engineering.js';
import { PROGRAMMING_LANGUAGES_GUIDE, ENGINEERING_CAREER_PATHS } from '../engineeringRoadmaps.js';
import { SKILL_TRACKS } from '../skillRoadmaps.js';

// Master nested lessons structure: lessons[class][subject][chapter]
export const ALL_LESSONS = {
  'Class 10': {
    'Mathematics': CLASS_10_MATH,
    'Science': CLASS_10_SCIENCE,
    'English': ENGLISH_CURRICULUM,
    'Social Studies': SOCIAL_STUDIES_CURRICULUM,
  },
  'Engineering': {
    'Computer Science': ENGINEERING_CURRICULUM['Computer Science'],
    'Programming': {
      'Python Programming': ENGINEERING_CURRICULUM['Computer Science']['Programming'],
    },
    'Database Systems': {
      'Database Management Systems': ENGINEERING_CURRICULUM['Computer Science']['Database Systems'],
    },
    'Operating Systems': {
      'Operating Systems': ENGINEERING_CURRICULUM['Computer Science']['Operating Systems'],
    },
  },
  'Class 9': {
    'Mathematics': {
      'Number Systems': {
        ...CLASS_10_MATH['Real Numbers'],
        id: 'math-9-number-systems',
        title: 'Number Systems',
        classId: 'Class 9',
        subtitle: 'Rational and Irrational numbers on the number line',
      },
      'Polynomials': {
        ...CLASS_10_MATH['Polynomials'],
        id: 'math-9-polynomials',
        title: 'Polynomials & Factorization',
        classId: 'Class 9',
      },
      'Coordinate Geometry': {
        ...CLASS_10_MATH['Coordinate Geometry'],
        id: 'math-9-coord-geo',
        title: 'Coordinate Geometry',
        classId: 'Class 9',
      },
    },
    'Science': {
      'Matter in Our Surroundings': {
        ...CLASS_10_SCIENCE['Chemical Reactions and Equations'],
        id: 'sci-9-matter',
        title: 'Matter in Our Surroundings',
        classId: 'Class 9',
        subtitle: 'States of Matter, Evaporation, and Latent Heat',
      },
      'Fundamental Unit of Life': {
        ...CLASS_10_SCIENCE['Life Processes'],
        id: 'sci-9-cell',
        title: 'The Fundamental Unit of Life (Cell)',
        classId: 'Class 9',
        subtitle: 'Cell organelles, Mitosis, and Meiosis',
      },
    },
    'English': ENGLISH_CURRICULUM,
    'Social Studies': SOCIAL_STUDIES_CURRICULUM,
  },
  'Class 8': {
    'Mathematics': {
      'Rational Numbers': {
        ...CLASS_10_MATH['Real Numbers'],
        id: 'math-8-rational',
        title: 'Rational Numbers & Operations',
        classId: 'Class 8',
      },
      'Linear Equations in One Variable': {
        ...CLASS_10_MATH['Pair of Linear Equations'],
        id: 'math-8-linear',
        title: 'Linear Equations in One Variable',
        classId: 'Class 8',
      },
    },
    'Science': {
      'Crop Production and Management': {
        ...CLASS_10_SCIENCE['Our Environment'],
        id: 'sci-8-crops',
        title: 'Crop Production & Modern Agriculture',
        classId: 'Class 8',
        subtitle: 'Tilling, Sowing, Manuring, Irrigation & Storage',
      },
    },
    'English': ENGLISH_CURRICULUM,
    'Social Science': SOCIAL_STUDIES_CURRICULUM,
  },
  'Class 7': {
    'Mathematics': {
      'Integers': {
        ...CLASS_10_MATH['Real Numbers'],
        id: 'math-7-integers',
        title: 'Integers & Arithmetic Properties',
        classId: 'Class 7',
        subtitle: 'Positive, Negative integers and number line representations',
      },
      'Fractions and Decimals': {
        ...CLASS_10_MATH['Real Numbers'],
        id: 'math-7-fractions',
        title: 'Fractions and Decimals',
        classId: 'Class 7',
        subtitle: 'Multiplication and division of fractions in rural trade',
      },
    },
    'Science': {
      'Nutrition in Plants and Animals': {
        ...CLASS_10_SCIENCE['Life Processes'],
        id: 'sci-7-nutrition',
        title: 'Nutrition in Plants & Photosynthesis',
        classId: 'Class 7',
        subtitle: 'Autotrophic and Heterotrophic nutrition',
      },
      'Heat and Temperature': {
        ...CLASS_10_SCIENCE['Electricity'],
        id: 'sci-7-heat',
        title: 'Heat, Conduction, Convection & Radiation',
        classId: 'Class 7',
        subtitle: 'Clinical and laboratory thermometers',
      },
    },
    'English': ENGLISH_CURRICULUM,
    'Social Science': SOCIAL_STUDIES_CURRICULUM,
  },
  'Class 6': {
    'Mathematics': {
      'Knowing Our Numbers': {
        ...CLASS_10_MATH['Real Numbers'],
        id: 'math-6-numbers',
        title: 'Knowing Our Numbers & Place Values',
        classId: 'Class 6',
        subtitle: 'Large numbers, Indian and International place value charts',
      },
      'Whole Numbers': {
        ...CLASS_10_MATH['Real Numbers'],
        id: 'math-6-whole',
        title: 'Whole Numbers and Number Line',
        classId: 'Class 6',
        subtitle: 'Predecessor, Successor and properties of whole numbers',
      },
    },
    'Science': {
      'Components of Food': {
        ...CLASS_10_SCIENCE['Life Processes'],
        id: 'sci-6-food',
        title: 'Components of Food & Balanced Diet',
        classId: 'Class 6',
        subtitle: 'Carbohydrates, Proteins, Fats, Vitamins and Deficiency diseases',
      },
      'Sorting Materials into Groups': {
        ...CLASS_10_SCIENCE['Chemical Reactions and Equations'],
        id: 'sci-6-materials',
        title: 'Sorting Materials & Physical Properties',
        classId: 'Class 6',
        subtitle: 'Hardness, Solubility, Transparency and Density',
      },
    },
    'English': ENGLISH_CURRICULUM,
    'Social Science': SOCIAL_STUDIES_CURRICULUM,
  },
  'Class 11': {
    'Mathematics': {
      'Sets and Relations': {
        ...CLASS_10_MATH['Polynomials'],
        id: 'math-11-sets',
        title: 'Sets, Relations & Functions',
        classId: 'Class 11',
      },
      'Trigonometric Functions': {
        ...CLASS_10_MATH['Introduction to Trigonometry'],
        id: 'math-11-trig',
        title: 'Trigonometric Functions & Graphs',
        classId: 'Class 11',
      },
      'Sequences and Series': {
        ...CLASS_10_MATH['Arithmetic Progressions'],
        id: 'math-11-sequences',
        title: 'Sequences, AP & GP',
        classId: 'Class 11',
      },
    },
    'Science': {
      'Laws of Motion': {
        ...CLASS_10_SCIENCE['Electricity'],
        id: 'phy-11-motion',
        title: 'Laws of Motion & Friction',
        classId: 'Class 11',
      },
      'Structure of Atom': {
        ...CLASS_10_SCIENCE['Chemical Reactions and Equations'],
        id: 'chem-11-atom',
        title: 'Structure of Atom & Orbitals',
        classId: 'Class 11',
      },
    },
    'English': ENGLISH_CURRICULUM,
  },
  'Class 12': {
    'Mathematics': {
      'Calculus & Derivatives': {
        ...CLASS_10_MATH['Coordinate Geometry'],
        id: 'math-12-calculus',
        title: 'Continuity, Differentiability & Derivatives',
        classId: 'Class 12',
      },
      'Integrals': {
        ...CLASS_10_MATH['Arithmetic Progressions'],
        id: 'math-12-integrals',
        title: 'Definite & Indefinite Integrals',
        classId: 'Class 12',
      },
    },
    'Science': {
      'Current Electricity': {
        ...CLASS_10_SCIENCE['Electricity'],
        id: 'phy-12-current',
        title: 'Current Electricity & Kirchhoff Laws',
        classId: 'Class 12',
      },
      'Ray Optics & Optical Instruments': {
        ...CLASS_10_SCIENCE['Light'],
        id: 'phy-12-optics',
        title: 'Ray Optics & Optical Instruments',
        classId: 'Class 12',
      },
      'Electrochemistry': {
        ...CLASS_10_SCIENCE['Acids, Bases and Salts'],
        id: 'chem-12-electrochem',
        title: 'Electrochemistry & Nernst Equation',
        classId: 'Class 12',
      },
    },
    'English': ENGLISH_CURRICULUM,
  }
};

// Safe accessors
export function getClasses() {
  return CLASSES;
}

export function getClassById(classId) {
  return CLASSES.find((c) => c.id === classId) || CLASSES[0];
}

export function getSubjects(classId) {
  const cls = getClassById(classId);
  return cls ? cls.subjects : [];
}

export function getSubjectById(classId, subjectId) {
  const subjects = getSubjects(classId);
  return subjects.find((s) => s.id === subjectId || s.name === subjectId);
}

export function getChapters(classId, subjectId) {
  const classLessons = ALL_LESSONS[classId] || ALL_LESSONS['Class 10'];
  const subjectLessons = classLessons[subjectId] || {};
  return Object.keys(subjectLessons).map((chapterKey) => {
    const lesson = subjectLessons[chapterKey];
    return {
      id: chapterKey,
      title: lesson.title || chapterKey,
      subtitle: lesson.subtitle || '',
      readTime: lesson.readTime || '20 min',
      objectivesCount: lesson.objectives?.length || 4,
      hasVisuals: Boolean(lesson.visualComponent),
      lessonData: lesson,
    };
  });
}

export function getLesson(classId, subjectId, chapterId) {
  const classLessons = ALL_LESSONS[classId] || ALL_LESSONS['Class 10'];
  if (!classLessons) return null;

  const subjectLessons = classLessons[subjectId];
  if (!subjectLessons) return null;

  // Direct match by key
  if (subjectLessons[chapterId]) {
    return subjectLessons[chapterId];
  }

  // Case-insensitive match or match by title
  const foundKey = Object.keys(subjectLessons).find((k) =>
    k.toLowerCase() === chapterId.toLowerCase() ||
    (subjectLessons[k].title && subjectLessons[k].title.toLowerCase() === chapterId.toLowerCase()) ||
    (subjectLessons[k].id && subjectLessons[k].id.toLowerCase() === chapterId.toLowerCase())
  );

  return foundKey ? subjectLessons[foundKey] : null;
}

export function getAdjacentChapters(classId, subjectId, chapterId) {
  const chapters = getChapters(classId, subjectId);
  const currentIndex = chapters.findIndex((ch) =>
    ch.id === chapterId ||
    ch.title.toLowerCase() === chapterId.toLowerCase() ||
    (ch.lessonData && ch.lessonData.id === chapterId)
  );

  return {
    prev: currentIndex > 0 ? chapters[currentIndex - 1] : null,
    next: currentIndex >= 0 && currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null,
    currentIndex: currentIndex >= 0 ? currentIndex : 0,
    total: chapters.length,
  };
}

// Global search across School, Engineering, and Skills
export function searchCurriculum(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const results = [];

  // Search School & Engineering Lessons
  Object.keys(ALL_LESSONS).forEach((cls) => {
    Object.keys(ALL_LESSONS[cls]).forEach((sub) => {
      Object.keys(ALL_LESSONS[cls][sub]).forEach((ch) => {
        const lesson = ALL_LESSONS[cls][sub][ch];
        if (
          ch.toLowerCase().includes(q) ||
          lesson.title.toLowerCase().includes(q) ||
          (lesson.subtitle && lesson.subtitle.toLowerCase().includes(q))
        ) {
          results.push({
            type: 'Lesson',
            url: `/school/${encodeURIComponent(cls)}/${encodeURIComponent(sub)}/${encodeURIComponent(ch)}`,
            title: lesson.title,
            category: `${cls} • ${sub}`,
          });
        }
      });
    });
  });

  // Search Programming Languages
  PROGRAMMING_LANGUAGES_GUIDE.forEach((lang) => {
    if (lang.name.toLowerCase().includes(q) || lang.category.toLowerCase().includes(q) || lang.why.toLowerCase().includes(q)) {
      results.push({
        type: 'Engineering Language',
        url: '/engineering',
        title: lang.name,
        category: `Engineering • ${lang.category}`,
      });
    }
  });

  // Search Skills
  SKILL_TRACKS.forEach((sk) => {
    if (sk.title.toLowerCase().includes(q) || sk.category.toLowerCase().includes(q) || sk.whyLearn.toLowerCase().includes(q)) {
      results.push({
        type: 'Skill Roadmap',
        url: '/skills',
        title: sk.title,
        category: `Skills • ${sk.category}`,
      });
    }
  });

  return results.slice(0, 10);
}
