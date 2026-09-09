// RuraLearn Practice Questions Bank
// Categorized by Class (6-12 & Engineering), Subject, Chapter, and Difficulty (Easy, Medium, Hard)

export const PRACTICE_QUESTIONS = [
  // Class 6 Mathematics
  {
    id: 'pq-c6-m-1',
    classId: 'Class 6',
    subjectId: 'Mathematics',
    chapterId: 'Knowing Our Numbers',
    topic: 'Number System',
    difficulty: 'Easy',
    question: "What is the place value of 7 in the number 45,782?",
    options: ["7", "70", "700", "7000"],
    correctIndex: 2,
    hint: "Identify the digit at the hundreds position.",
    explanation: "In 45,782, 7 is in the hundreds position, so its place value is 7 × 100 = 700."
  },
  {
    id: 'pq-c6-s-1',
    classId: 'Class 6',
    subjectId: 'Science',
    chapterId: 'Components of Food',
    topic: 'Nutrition & Nutrients',
    difficulty: 'Easy',
    question: "Which vitamin is primarily synthesized when our skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctIndex: 3,
    hint: "It helps in the absorption of calcium for strong bones.",
    explanation: "Our body synthesizes Vitamin D when sunlight strikes our skin. It helps the body absorb calcium."
  },

  // Class 7 Science & Math
  {
    id: 'pq-c7-s-1',
    classId: 'Class 7',
    subjectId: 'Science',
    chapterId: 'Nutrition in Plants',
    topic: 'Photosynthesis',
    difficulty: 'Medium',
    question: "Which green pigment in leaves captures solar energy during photosynthesis?",
    options: ["Carotene", "Chlorophyll", "Hemoglobin", "Xanthophyll"],
    correctIndex: 1,
    hint: "It gives leaves their vibrant green color.",
    explanation: "Chlorophyll is the green pigment in chloroplasts that absorbs sunlight energy for photosynthesis."
  },
  {
    id: 'pq-c7-m-1',
    classId: 'Class 7',
    subjectId: 'Mathematics',
    chapterId: 'Integers',
    topic: 'Integer Operations',
    difficulty: 'Easy',
    question: "What is the value of (-15) + (-28)?",
    options: ["-43", "13", "43", "-13"],
    correctIndex: 0,
    hint: "When adding two negative numbers, add their absolute values and keep the minus sign.",
    explanation: "(-15) + (-28) = -(15 + 28) = -43."
  },

  // Class 8 Science & Math
  {
    id: 'pq-c8-s-1',
    classId: 'Class 8',
    subjectId: 'Science',
    chapterId: 'Force and Pressure',
    topic: 'Pressure Formula',
    difficulty: 'Medium',
    question: "If a force of 100 N acts perpendicular to an area of 2 m², what is the resulting pressure?",
    options: ["200 Pa", "50 Pa", "25 Pa", "100 Pa"],
    correctIndex: 1,
    hint: "Pressure = Force / Area.",
    explanation: "Pressure = Force / Area = 100 N / 2 m² = 50 Pascals (N/m²)."
  },

  // Class 9 Science & Math
  {
    id: 'pq-c9-s-1',
    classId: 'Class 9',
    subjectId: 'Science',
    chapterId: 'Motion',
    topic: 'Equations of Motion',
    difficulty: 'Medium',
    question: "A car starts from rest (u=0) and accelerates uniformly at 2 m/s² for 5 seconds. What is its final velocity?",
    options: ["5 m/s", "10 m/s", "20 m/s", "25 m/s"],
    correctIndex: 1,
    hint: "Use the first equation of motion: v = u + at.",
    explanation: "v = u + at = 0 + (2 m/s² × 5 s) = 10 m/s."
  },
  {
    id: 'pq-c9-m-1',
    classId: 'Class 9',
    subjectId: 'Mathematics',
    chapterId: 'Number Systems',
    topic: 'Rational vs Irrational',
    difficulty: 'Easy',
    question: "Which of the following is an irrational number?",
    options: ["√4", "√9", "√2", "3/4"],
    correctIndex: 2,
    hint: "Look for a square root that does not result in an exact integer.",
    explanation: "√2 is a non-terminating, non-repeating decimal (approx 1.414...) and cannot be expressed as p/q."
  },

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
    question: "If α and β are the zeroes of the quadratic polynomial ax² + bx + c, what is the sum of zeroes (α + β)?",
    options: ["c/a", "-b/a", "b/a", "-c/a"],
    correctIndex: 1,
    hint: "Sum of zeroes is related to the coefficient of x and x².",
    explanation: "For ax² + bx + c = 0, sum of zeroes α + β = -b/a, and product α · β = c/a."
  },

  // Class 10 Science - Chemical Reactions
  {
    id: 'pq-sci-chem-1',
    classId: 'Class 10',
    subjectId: 'Science',
    chapterId: 'Chemical Reactions and Equations',
    topic: 'Chemical Reactions - Balancing',
    difficulty: 'Easy',
    question: "What type of chemical reaction is: CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat?",
    options: ["Decomposition", "Combination", "Displacement", "Double Displacement"],
    correctIndex: 1,
    hint: "Two reactants combine to form a single product.",
    explanation: "A combination reaction occurs when two or more reactants synthesize into a single compound."
  },
  {
    id: 'pq-sci-chem-2',
    classId: 'Class 10',
    subjectId: 'Science',
    chapterId: 'Chemical Reactions and Equations',
    topic: 'Chemical Reactions - Balancing',
    difficulty: 'Medium',
    question: "In the redox reaction: CuO + H₂ → Cu + H₂O, which substance is oxidized?",
    options: ["CuO", "Cu", "H₂", "H₂O"],
    correctIndex: 2,
    hint: "Oxidation is the gain of oxygen or loss of hydrogen.",
    explanation: "H₂ gains oxygen to become H₂O, so H₂ is oxidized. CuO loses oxygen to become Cu, so CuO is reduced."
  },

  // Class 10 Science - Electricity
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

  // Class 11 & 12
  {
    id: 'pq-c11-p-1',
    classId: 'Class 11',
    subjectId: 'Physics',
    chapterId: 'Kinematics',
    topic: 'Vectors & Motion',
    difficulty: 'Medium',
    question: "What is the angle of projection for which the horizontal range of a projectile is maximum?",
    options: ["30°", "45°", "60°", "90°"],
    correctIndex: 1,
    hint: "Range R = (u² sin 2θ) / g. Maximum occurs when sin 2θ = 1.",
    explanation: "sin 2θ = 1 ⇒ 2θ = 90° ⇒ θ = 45°. At 45°, horizontal range is maximized."
  },
  {
    id: 'pq-c12-m-1',
    classId: 'Class 12',
    subjectId: 'Mathematics',
    chapterId: 'Calculus - Integrals',
    topic: 'Integration by Parts',
    difficulty: 'Hard',
    question: "What is the integral ∫ ln(x) dx?",
    options: ["1/x + C", "x ln(x) - x + C", "x ln(x) + x + C", "ln(x)² / 2 + C"],
    correctIndex: 1,
    hint: "Use integration by parts: ∫ u dv = u v - ∫ v du with u = ln(x) and dv = dx.",
    explanation: "u = ln(x), du = (1/x)dx; dv = dx, v = x. Thus ∫ ln(x) dx = x·ln(x) - ∫ x·(1/x) dx = x ln(x) - x + C."
  },

  // Engineering & College
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
  },
  {
    id: 'pq-eng-py-1',
    classId: 'Engineering',
    subjectId: 'Programming',
    chapterId: 'Python & SQL',
    topic: 'SQL Joins',
    difficulty: 'Medium',
    question: "Which SQL JOIN returns all rows from the left table and the matched rows from the right table?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    correctIndex: 1,
    hint: "It guarantees that no row from the first (left) table is dropped.",
    explanation: "LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and matching records from the right table (or NULLs if no match)."
  }
];
