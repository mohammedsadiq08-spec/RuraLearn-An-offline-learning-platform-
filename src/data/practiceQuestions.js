// RuraLearn Practice Questions Bank
// Categorized by Class, Subject, Chapter, and Difficulty (Easy, Medium, Hard)

export const PRACTICE_QUESTIONS = [
  // Class 10 Mathematics - Real Numbers
  {
    id: 'pq-math-rn-1',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Real Numbers',
    topic: 'Real Numbers - Euclid Lemma',
    difficulty: 'Easy',
    question: "What is the HCF of 135 and 225 using Euclid's division algorithm?",
    options: ["15", "45", "75", "5"],
    correctIndex: 1,
    hint: "Apply 225 = 135 × 1 + 90, then repeat for 135 and 90.",
    explanation: "225 = 135 × 1 + 90. Next: 135 = 90 × 1 + 45. Next: 90 = 45 × 2 + 0. The divisor at remainder 0 is 45."
  },
  {
    id: 'pq-math-rn-2',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Real Numbers',
    topic: 'Real Numbers - Irrationality',
    difficulty: 'Medium',
    question: "If a and b are co-prime positive integers, what is their HCF?",
    options: ["0", "1", "a × b", "2"],
    correctIndex: 1,
    hint: "Co-prime means they share no common factors other than 1.",
    explanation: "By definition, two numbers are co-prime if their only common positive divisor is 1. Therefore, HCF(a, b) = 1."
  },
  {
    id: 'pq-math-rn-3',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Real Numbers',
    topic: 'Real Numbers - Fundamental Theorem',
    difficulty: 'Hard',
    question: "If n is any natural number, then 6ⁿ can never end with which digit?",
    options: ["6", "0", "Even numbers", "None of these"],
    correctIndex: 1,
    hint: "For a number to end in 0, its prime factorisation must contain both 2 and 5.",
    explanation: "6ⁿ = (2 × 3)ⁿ. Since prime factor 5 is absent, 6ⁿ can never end with the digit 0 for any natural number n."
  },

  // Class 10 Mathematics - Polynomials
  {
    id: 'pq-math-poly-1',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Polynomials',
    topic: 'Polynomials - Factorisation',
    difficulty: 'Easy',
    question: "What is the degree of the polynomial 4x⁴ - 3x² + 5x - 7?",
    options: ["2", "3", "4", "5"],
    correctIndex: 2,
    hint: "Degree is the highest power of the variable x in the expression.",
    explanation: "The highest exponent of variable x is 4. Thus the degree is 4."
  },
  {
    id: 'pq-math-poly-2',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Polynomials',
    topic: 'Polynomials - Factorisation',
    difficulty: 'Medium',
    question: "If the zeroes of the quadratic polynomial ax² + bx + c (c ≠ 0) are equal, then:",
    options: [
      "c and a have opposite signs",
      "c and b have opposite signs",
      "c and a have the same sign",
      "c and b have the same sign"
    ],
    correctIndex: 2,
    hint: "For equal roots, D = b² - 4ac = 0 → b² = 4ac.",
    explanation: "b² = 4ac. Since b² is always positive (b² ≥ 0), 4ac must also be positive. Hence a and c must have the SAME sign."
  },
  {
    id: 'pq-math-poly-3',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Polynomials',
    topic: 'Polynomials - Factorisation',
    difficulty: 'Hard',
    question: "If one zero of the quadratic polynomial 2x² - 3x + k is reciprocal of the other, find k.",
    options: ["2", "-2", "3", "1/2"],
    correctIndex: 0,
    hint: "If roots are α and 1/α, their product α · (1/α) = 1. What is product of roots in terms of coefficients?",
    explanation: "Product of zeroes = c/a → α × (1/α) = k / 2 → 1 = k / 2 → k = 2."
  },

  // Class 10 Mathematics - Quadratic Equations
  {
    id: 'pq-math-quad-1',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Quadratic Equations',
    topic: 'Quadratic Equations - Discriminant',
    difficulty: 'Easy',
    question: "The discriminant of the equation 3x² - 5x + 2 = 0 is:",
    options: ["1", "-1", "49", "25"],
    correctIndex: 0,
    hint: "Evaluate D = b² - 4ac where a=3, b=-5, c=2.",
    explanation: "D = (-5)² - 4(3)(2) = 25 - 24 = 1. Since D > 0, roots are real and distinct."
  },
  {
    id: 'pq-math-quad-2',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Quadratic Equations',
    topic: 'Quadratic Equations - Roots',
    difficulty: 'Medium',
    question: "If the equation x² - kx + 4 = 0 has no real roots, then the value of k lies in:",
    options: ["k > 4", "k < -4", "-4 < k < 4", "k = ±4"],
    correctIndex: 2,
    hint: "No real roots means D < 0. Evaluate b² - 4ac < 0.",
    explanation: "D = (-k)² - 4(1)(4) < 0 → k² - 16 < 0 → k² < 16 → -4 < k < 4."
  },

  // Class 10 Science - Chemical Reactions
  {
    id: 'pq-sci-chem-1',
    classId: 'Class 10',
    subjectId: 'Science',
    chapterId: 'Chemical Reactions and Equations',
    topic: 'Chemical Equations Balancing',
    difficulty: 'Easy',
    question: "When magnesium ribbon is burnt in air, the white ash formed is:",
    options: ["Magnesium Nitrate", "Magnesium Oxide", "Magnesium Carbonate", "Magnesium Sulphate"],
    correctIndex: 1,
    hint: "Magnesium reacts with atmospheric oxygen gas.",
    explanation: "2Mg(s) + O₂(g) → 2MgO(s). Magnesium burns with a dazzling white flame to form white magnesium oxide powder."
  },
  {
    id: 'pq-sci-chem-2',
    classId: 'Class 10',
    subjectId: 'Science',
    chapterId: 'Chemical Reactions and Equations',
    topic: 'Chemical Equations Balancing',
    difficulty: 'Medium',
    question: "In the reaction: CuO + H₂ → Cu + H₂O, which substance acts as the reducing agent?",
    options: ["CuO", "H₂", "Cu", "H₂O"],
    correctIndex: 1,
    hint: "The substance that removes oxygen or undergoes oxidation is the reducing agent.",
    explanation: "Hydrogen (H₂) gains oxygen to become H₂O (it is oxidized), thus acting as the reducing agent."
  },
  {
    id: 'pq-sci-elec-1',
    classId: 'Class 10',
    subjectId: 'Science',
    chapterId: 'Electricity',
    topic: 'Electricity - Ohm Law',
    difficulty: 'Easy',
    question: "If the potential difference across a 10 Ω resistor is 20 V, what is the electric current flowing through it?",
    options: ["0.5 A", "2 A", "200 A", "10 A"],
    correctIndex: 1,
    hint: "Use Ohm's Law: I = V / R.",
    explanation: "I = V / R = 20 V / 10 Ω = 2 Amperes."
  },
  {
    id: 'pq-sci-elec-2',
    classId: 'Class 10',
    subjectId: 'Science',
    chapterId: 'Electricity',
    topic: 'Electricity - Ohm Law',
    difficulty: 'Hard',
    question: "A cylindrical wire of length L and cross-sectional area A has resistance R. What is the resistance of another wire of the same material having length 2L and area A/2?",
    options: ["R", "2R", "4R", "R/4"],
    correctIndex: 2,
    hint: "R = ρL/A. Replace L with 2L and A with A/2.",
    explanation: "R' = ρ(2L) / (A/2) = 4 · [ρL / A] = 4R. Doubling length and halving thickness increases resistance 4-fold."
  },

  // Higher Ed / Engineering
  {
    id: 'pq-eng-ds-1',
    classId: 'Engineering',
    subjectId: 'Computer Science',
    chapterId: 'Data Structures',
    topic: 'Data Structures - Complexity',
    difficulty: 'Easy',
    question: "Which data structure operates strictly on the 'First In, First Out' (FIFO) principle?",
    options: ["Stack", "Queue", "Binary Tree", "Hash Table"],
    correctIndex: 1,
    hint: "Think of a queue of people at a ticket counter.",
    explanation: "A Queue is a linear data structure following the FIFO principle, where elements are inserted at the rear and removed from the front."
  },
  {
    id: 'pq-eng-ds-2',
    classId: 'Engineering',
    subjectId: 'Computer Science',
    chapterId: 'Data Structures',
    topic: 'Data Structures - Complexity',
    difficulty: 'Medium',
    question: "What is the time complexity to insert an element at the beginning (head) of a Singly Linked List with a known head pointer?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctIndex: 0,
    hint: "You only need to update the new node's next pointer to head, then update head.",
    explanation: "Insertion at the head takes O(1) constant time because it only requires updating two pointers regardless of list size."
  }
];
