// RuraLearn Class 10 Mathematics Complete Curriculum

export const CLASS_10_MATH = {
  'Real Numbers': {
    id: 'math-10-real-numbers',
    title: 'Real Numbers',
    subtitle: 'Divisibility, Fundamental Theorem of Arithmetic & Irrational Numbers',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '25 min',
    visualComponent: 'NumberLineVisualizer',
    objectives: [
      "Understand Euclid's Division Lemma and Algorithm",
      "Apply the Fundamental Theorem of Arithmetic for prime factorisation",
      "Compute HCF and LCM using prime factors and relate HCF(a,b) × LCM(a,b) = a × b",
      "Rigorously prove the irrationality of numbers such as √2, √3, and 5 - √3",
      "Determine terminating and non-terminating recurring decimal expansions of rational numbers"
    ],
    introduction: `Real numbers form the very backbone of all quantitative sciences and everyday trade. From measuring agricultural land boundaries to calculating grain yields and market prices, numbers with precision are essential. In this chapter, we explore deep structural properties of integers through Euclid's Division Lemma, discover why every composite number has a unique prime fingerprint, and explore why numbers like √2 cannot be represented as simple fractions.`,
    sections: [
      {
        title: "1. Euclid's Division Lemma & Algorithm",
        content: `Given positive integers a and b, there exist unique integers q (quotient) and r (remainder) satisfying:
a = bq + r, where 0 ≤ r < b.

When we divide 17 by 3, we get quotient 5 with remainder 2: 17 = 3(5) + 2. Notice that the remainder 2 is strictly smaller than the divisor 3.

The Euclid Division Algorithm is a systematic technique to compute the Highest Common Factor (HCF) of two positive integers. We apply the lemma repeatedly until the remainder becomes 0. The divisor at that final stage is the HCF.`,
        keyNote: "If r = 0, then b divides a completely. The HCF of a and b is simply b."
      },
      {
        title: "2. The Fundamental Theorem of Arithmetic",
        content: `Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.

For instance:
120 = 2 × 2 × 2 × 3 × 5 = 2³ × 3¹ × 5¹

Relationship between HCF and LCM for two positive integers a and b:
• HCF(a, b) = Product of the smallest power of each common prime factor involved in the numbers.
• LCM(a, b) = Product of the greatest power of each prime factor involved in the numbers.
• Universal Rule: HCF(a, b) × LCM(a, b) = a × b (Only valid for 2 numbers, not 3).`,
        keyNote: "Any integer ending in digit 0 must contain both 2 and 5 in its prime factorisation. Hence 4ⁿ or 6ⁿ can never end with 0 for any natural number n."
      },
      {
        title: "3. Revisiting Irrational Numbers (Proof by Contradiction)",
        content: `A real number is called irrational if it cannot be written in the form p/q, where p and q are integers and q ≠ 0.

Theorem: Let p be a prime number. If p divides a², then p divides a, where a is a positive integer.

Classic Proof that √2 is irrational:
1. Assume the opposite: Suppose √2 is rational. Then √2 = a/b, where a and b are co-prime integers (no common factor other than 1) and b ≠ 0.
2. Squaring both sides gives 2 = a²/b², which implies 2b² = a².
3. Thus, 2 divides a². By the theorem above, 2 must also divide a.
4. Let a = 2c for some integer c. Substituting into 2b² = a² gives 2b² = 4c² → b² = 2c².
5. This implies 2 divides b², and hence 2 divides b.
6. From steps 3 and 5, both a and b share 2 as a common factor. This contradicts our assumption that a and b are co-prime!
7. Therefore, √2 is irrational.`,
        keyNote: "The sum or difference of a rational and an irrational number is always irrational (e.g., 3 + √5 is irrational)."
      },
      {
        title: "4. Decimal Expansions of Rational Numbers",
        content: `Let x = p/q be a rational number such that the prime factorisation of q is of the form:
q = 2ⁿ × 5ᵐ, where n and m are non-negative integers.

• If q contains ONLY powers of 2 and/or 5, then x has a TERMINATING decimal expansion.
• If q contains any prime factor other than 2 or 5 (like 3, 7, 11), the decimal expansion is NON-TERMINATING REPEATING (recurring).

Example:
3 / 8 = 3 / 2³ = (3 × 5³) / (2³ × 5³) = 375 / 1000 = 0.375 (terminates after 3 decimal places).
7 / 75 = 7 / (3 × 5²) (contains 3, therefore non-terminating repeating).`
      }
    ],
    formulas: [
      { name: "Euclid's Division Lemma", formula: "a = bq + r (0 ≤ r < b)", use: "Basis for division algorithm and HCF calculation" },
      { name: "Two-Number Product Rule", formula: "HCF(a, b) × LCM(a, b) = a × b", use: "Quickly finding LCM when HCF is known" },
      { name: "Terminating Condition", formula: "Denominator q = 2ⁿ · 5ᵐ", use: "Checks if a rational fraction terminates without long division" }
    ],
    examples: [
      {
        question: "Use Euclid's algorithm to find the HCF of 455 and 42.",
        steps: [
          "Step 1: Compare 455 and 42. Since 455 > 42, apply Euclid's lemma: 455 = 42 × 10 + 35",
          "Step 2: Remainder is 35 ≠ 0. Apply lemma to 42 and 35: 42 = 35 × 1 + 7",
          "Step 3: Remainder is 7 ≠ 0. Apply lemma to 35 and 7: 35 = 7 × 5 + 0",
          "Step 4: Remainder is now 0. The divisor at this stage is 7."
        ],
        answer: "HCF(455, 42) = 7"
      },
      {
        question: "Given that HCF(306, 657) = 9, find LCM(306, 657).",
        steps: [
          "We know that HCF(a, b) × LCM(a, b) = a × b",
          "9 × LCM(306, 657) = 306 × 657",
          "LCM(306, 657) = (306 × 657) / 9 = 34 × 657 = 22,338"
        ],
        answer: "LCM = 22,338"
      }
    ],
    steps: [
      "Always simplify the fraction p/q by cancelling common factors before checking the denominator's prime factors 2ⁿ × 5ᵐ.",
      "In Euclid's division algorithm, always replace dividend with previous divisor, and divisor with previous remainder.",
      "When proving irrationality of a composite like 3 + 2√5, isolate the radical on one side: √5 = (p/q - 3)/2, then contrast rational LHS with irrational RHS."
    ],
    importantPoints: [
      "0 is a whole number and an integer, but neither positive nor negative.",
      "Prime numbers have exactly two distinct positive divisors (1 and itself). 1 is neither prime nor composite.",
      "The product of two consecutive positive integers is always divisible by 2.",
      "HCF is always a factor of the LCM."
    ],
    commonMistakes: [
      "Assuming HCF(a, b, c) × LCM(a, b, c) = a × b × c (This formula is strictly false for three or more numbers).",
      "Forgetting to check if the fraction is in lowest terms before factoring the denominator (e.g. 6/15 simplifies to 2/5, which terminates!).",
      "Misplacing the inequality in Euclid's lemma (0 ≤ r < b, r cannot equal b)."
    ],
    realWorldApplications: [
      "Field Irrigation & Tile Sizing: Using HCF to calculate the largest square tile size that completely covers a rectangular courtyard or grain warehouse without cutting.",
      "Bus / Bell Schedules: Using LCM to predict when two solar pumps or scheduled village market transport buses will depart together at the same time.",
      "Computing Precision: Understanding decimal truncations and round-off errors in solar battery charge controllers."
    ],
    quickCheck: [
      {
        id: 'qc-rn-1',
        question: "Which of the following numbers has a terminating decimal expansion?",
        options: ["17 / 6", "13 / 3125", "7 / 75", "11 / 21"],
        correctIndex: 1,
        explanation: "The denominator of 13/3125 is 3125 = 5⁵ = 2⁰ × 5⁵. Since it has only powers of 5, its decimal expansion terminates.",
        hint: "Check which denominator has only prime factors of 2 and 5."
      },
      {
        id: 'qc-rn-2',
        question: "If HCF(a, b) = 12 and a × b = 1800, what is the LCM(a, b)?",
        options: ["3600", "150", "2160", "120"],
        correctIndex: 1,
        explanation: "Using HCF × LCM = a × b: 12 × LCM = 1800 → LCM = 1800 / 12 = 150.",
        hint: "Divide the product of the two numbers by their HCF."
      },
      {
        id: 'qc-rn-3',
        question: "Which of the following is an irrational number?",
        options: ["√49", "3.14159", "2 + √3", "22 / 7"],
        correctIndex: 2,
        explanation: "√3 is irrational. The sum of a rational (2) and an irrational (√3) is always irrational. Notice that 22/7 is a ratio of integers and thus rational.",
        hint: "Adding a rational number to an irrational root produces an irrational number."
      }
    ]
  },

  'Polynomials': {
    id: 'math-10-polynomials',
    title: 'Polynomials',
    subtitle: 'Zeroes, Geometric Interpretation & Quadratic Coefficient Relationships',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '20 min',
    visualComponent: 'CoordinatePlaneVisualizer',
    objectives: [
      "Understand the geometrical meaning of zeroes of a polynomial",
      "Identify the number of real zeroes by examining intersections with the x-axis",
      "Relate zeroes and coefficients of quadratic polynomials: α + β = -b/a and αβ = c/a",
      "Form a quadratic polynomial when the sum and product of zeroes are provided",
      "Apply the division algorithm for polynomials to find remaining roots"
    ],
    introduction: `A polynomial is an algebraic expression consisting of variables and coefficients combined using addition, subtraction, multiplication, and non-negative integer exponents. In real-world engineering, polynomials model trajectories of thrown objects, water fountain jets, suspension bridges, and profit curves in agriculture.`,
    sections: [
      {
        title: "1. Geometrical Meaning of the Zeroes",
        content: `A real number k is said to be a zero of a polynomial p(x) if p(k) = 0.
Geometrically, the zeroes of a polynomial p(x) are the x-coordinates of the points where the graph of y = p(x) intersects the x-axis.

• Linear Polynomial (ax + b): Graph is a straight line intersecting the x-axis at exactly 1 point (-b/a, 0).
• Quadratic Polynomial (ax² + bx + c): Graph is a parabola opening upwards (if a > 0) or downwards (if a < 0). It can intersect the x-axis at 2 distinct points, 1 point (tangent), or 0 points (no real zeroes).
• Cubic Polynomial: Can have at most 3 real zeroes.`,
        keyNote: "A polynomial of degree n can have AT MOST n real zeroes."
      },
      {
        title: "2. Relationship between Zeroes and Coefficients",
        content: `For a quadratic polynomial p(x) = ax² + bx + c (where a ≠ 0), let α and β be the zeroes:
• Sum of zeroes: α + β = -b / a = - (Coefficient of x) / (Coefficient of x²)
• Product of zeroes: α · β = c / a = (Constant term) / (Coefficient of x²)

Forming a quadratic polynomial:
If the sum S and product P of zeroes are known, the polynomial is:
p(x) = k [x² - (α + β)x + αβ] = k [x² - Sx + P], where k is any non-zero constant.`,
        keyNote: "For a cubic polynomial ax³ + bx² + cx + d with zeroes α, β, γ: α+β+γ = -b/a; αβ+βγ+γα = c/a; αβγ = -d/a."
      }
    ],
    formulas: [
      { name: "Sum of Quadratic Zeroes", formula: "α + β = -b / a", use: "Quickly checks root properties from coefficients" },
      { name: "Product of Quadratic Zeroes", formula: "α · β = c / a", use: "Verifies factors and signs of roots" },
      { name: "Polynomial Formation", formula: "p(x) = k(x² - Sx + P)", use: "Constructs quadratic equation given sum and product" }
    ],
    examples: [
      {
        question: "Find the zeroes of the quadratic polynomial x² + 7x + 10, and verify the relationship between zeroes and coefficients.",
        steps: [
          "Step 1: Factorise by splitting the middle term: x² + 5x + 2x + 10 = (x + 5)(x + 2)",
          "Step 2: Set p(x) = 0 → (x + 5)(x + 2) = 0 → x = -5 or x = -2. So α = -5, β = -2.",
          "Step 3: Verify Sum: α + β = -5 + (-2) = -7. From coefficients: -b/a = -7/1 = -7. (Verified!)",
          "Step 4: Verify Product: α · β = (-5) × (-2) = 10. From coefficients: c/a = 10/1 = 10. (Verified!)"
        ],
        answer: "Zeroes are -2 and -5. Relationships are verified."
      }
    ],
    steps: [
      "To find zeroes algebraically: Set p(x) = 0 and factorise.",
      "To find zeroes graphically: Count how many times the curve crosses or touches the horizontal x-axis.",
      "Remember that (α - β)² = (α + β)² - 4αβ, which allows finding the difference between roots without solving individually."
    ],
    importantPoints: [
      "If the graph of y = p(x) does not cut the x-axis, it has NO real zeroes.",
      "If α and β are roots of ax² + bx + c, then 1/α + 1/β = (α + β) / (αβ) = -b/c."
    ],
    commonMistakes: [
      "Forgetting the negative sign in the sum of zeroes: α + β is -b/a, NOT +b/a.",
      "Counting intersections with the y-axis instead of the x-axis when identifying zeroes."
    ],
    realWorldApplications: [
      "Trajectory Calculation: Calculating the maximum height and landing spot of a cricket ball or water sprinkler nozzle.",
      "Cost Optimization: Determining the unit production quantity that minimizes equipment maintenance expenses."
    ],
    quickCheck: [
      {
        id: 'qc-poly-1',
        question: "If α and β are the zeroes of 2x² - 8x + 6, what is the value of α + β?",
        options: ["-4", "4", "3", "-8"],
        correctIndex: 1,
        explanation: "Sum of zeroes = -b / a = -(-8) / 2 = 8 / 2 = 4.",
        hint: "Formula for sum of zeroes is -b/a."
      },
      {
        id: 'qc-poly-2',
        question: "A quadratic polynomial whose zeroes are 3 and -4 is:",
        options: ["x² - x - 12", "x² + x - 12", "x² - 7x + 12", "x² + 7x - 12"],
        correctIndex: 1,
        explanation: "Sum S = 3 + (-4) = -1. Product P = 3 × (-4) = -12. Formula: x² - Sx + P = x² - (-1)x + (-12) = x² + x - 12.",
        hint: "Use x² - (sum)x + (product)."
      }
    ]
  },

  'Pair of Linear Equations': {
    id: 'math-10-linear-equations',
    title: 'Pair of Linear Equations in Two Variables',
    subtitle: 'Graphical Consistency, Substitution, Elimination & Cross-Multiplication',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '22 min',
    visualComponent: 'CoordinatePlaneVisualizer',
    objectives: [
      "Represent pairs of linear equations graphically and algebraically",
      "Test for consistency using coefficient ratios: a₁/a₂, b₁/b₂, c₁/c₂",
      "Solve simultaneous linear equations using Substitution and Elimination methods",
      "Translate real-world word problems into mathematical pairs of equations"
    ],
    introduction: `When two unknown quantities depend upon each other through two distinct relationships, we express them as a pair of simultaneous linear equations. From pricing cattle feed and fertilizer bags to speed and current problems in rivers, solving linear equations gives unambiguous solutions.`,
    sections: [
      {
        title: "1. Algebraic Conditions for Consistency",
        content: `Consider the pair:
a₁x + b₁y + c₁ = 0
a₂x + b₂y + c₂ = 0

1. Intersecting Lines (Unique Solution):
   a₁ / a₂ ≠ b₁ / b₂
   System is Consistent.

2. Coincident Lines (Infinitely Many Solutions):
   a₁ / a₂ = b₁ / b₂ = c₁ / c₂
   System is Consistent and Dependent.

3. Parallel Lines (No Solution):
   a₁ / a₂ = b₁ / b₂ ≠ c₁ / c₂
   System is Inconsistent.`,
        keyNote: "Check ratios before attempting algebra to know if a unique solution exists."
      },
      {
        title: "2. The Elimination Method",
        content: `The elimination method is the most reliable algebraic technique:
1. Multiply one or both equations by suitable non-zero constants so that the coefficients of either x or y become numerically equal.
2. Add or subtract the equations to eliminate that variable.
3. Solve the resulting single-variable equation.
4. Substitute back into either original equation to find the second variable.`
      }
    ],
    formulas: [
      { name: "Unique Solution Ratio", formula: "a₁/a₂ ≠ b₁/b₂", use: "Lines intersect at exactly 1 point" },
      { name: "No Solution Ratio", formula: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", use: "Parallel lines; zero common solutions" },
      { name: "Infinite Solutions Ratio", formula: "a₁/a₂ = b₁/b₂ = c₁/c₂", use: "Identical coincident lines" }
    ],
    examples: [
      {
        question: "Solve for x and y: 2x + 3y = 11 and 2x - 4y = -24.",
        steps: [
          "Subtract the second equation from the first: (2x + 3y) - (2x - 4y) = 11 - (-24)",
          "7y = 35 → y = 5",
          "Substitute y = 5 into first equation: 2x + 3(5) = 11 → 2x + 15 = 11 → 2x = -4 → x = -2"
        ],
        answer: "x = -2, y = 5"
      }
    ],
    steps: [
      "Write both equations in standard form: ax + by = c or ax + by + c = 0.",
      "Check the ratio a₁/a₂ vs b₁/b₂.",
      "If unequal, choose the variable with simpler coefficients to eliminate."
    ],
    importantPoints: [
      "In speed/boat problems: Upstream speed = (x - y) km/h, Downstream speed = (x + y) km/h, where x is boat speed in still water and y is stream speed."
    ],
    commonMistakes: [
      "Sign errors when subtracting negative numbers during elimination (e.g., 11 - (-24) = 35, not -13).",
      "Forgetting to check if constant terms c₁ and c₂ are both on the same side of the equal sign before comparing ratios."
    ],
    realWorldApplications: [
      "Agriculture Budgeting: Finding individual prices of a bag of urea and DAP when given total package bills from two cooperative stores.",
      "Vehicle Speed & Stream Current: Calculating tractor travel time against heavy head-winds vs with tail-winds."
    ],
    quickCheck: [
      {
        id: 'qc-lin-1',
        question: "For what value of k will the lines 2x + 3y = 7 and 4x + ky = 14 have infinitely many solutions?",
        options: ["k = 3", "k = 6", "k = 8", "k = -6"],
        correctIndex: 1,
        explanation: "For infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂ → 2/4 = 3/k = 7/14 → 1/2 = 3/k → k = 6.",
        hint: "Set up the ratio 2/4 = 3/k."
      }
    ]
  },

  'Quadratic Equations': {
    id: 'math-10-quadratic-equations',
    title: 'Quadratic Equations',
    subtitle: 'Standard Form, Factorisation, Quadratic Formula & The Discriminant',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '25 min',
    visualComponent: 'CoordinatePlaneVisualizer',
    objectives: [
      "Recognize quadratic equations in standard form ax² + bx + c = 0 (a ≠ 0)",
      "Solve quadratic equations using the Factorisation Method (splitting the middle term)",
      "Derive and apply Sridharacharya's Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a",
      "Evaluate the Discriminant D = b² - 4ac to determine the nature of roots",
      "Model real-life problems involving areas, speeds, and consecutive numbers"
    ],
    introduction: `A quadratic equation is a second-degree polynomial equation in a single variable. Historically formulated by ancient Indian mathematicians Brahmagupta and Sridharacharya, quadratic equations provide exact solutions to problems where rates, dimensions, or physical forces vary continuously.`,
    sections: [
      {
        title: "1. The Nature of Roots & The Discriminant",
        content: `The quantity D = b² - 4ac is called the Discriminant because it discriminates between the possible types of roots:

1. D > 0: Two distinct real roots:
   x = (-b + √D) / 2a  and  x = (-b - √D) / 2a
2. D = 0: Two equal (coincident) real roots:
   x = -b / 2a  and  x = -b / 2a
3. D < 0: No real roots (roots are complex conjugate numbers).`,
        keyNote: "If D is a perfect square and a, b, c are rational, the roots are rational."
      },
      {
        title: "2. The Quadratic Formula (Sridharacharya's Rule)",
        content: `For any equation ax² + bx + c = 0:
Step 1: Divide by a: x² + (b/a)x + c/a = 0
Step 2: Complete the square by adding (b/2a)² to both sides:
[x + b/(2a)]² = b²/(4a²) - c/a = (b² - 4ac) / (4a²)
Step 3: Taking square root gives:
x = [-b ± √(b² - 4ac)] / (2a)`
      }
    ],
    formulas: [
      { name: "Discriminant", formula: "D = b² - 4ac", use: "Determines whether roots are distinct, equal, or non-real" },
      { name: "Quadratic Formula", formula: "x = (-b ± √D) / (2a)", use: "Universal formula to solve any quadratic equation" },
      { name: "Equal Roots Condition", formula: "b² - 4ac = 0", use: "Finds unknown parameter k for coincident roots" }
    ],
    examples: [
      {
        question: "Find the discriminant of 2x² - 4x + 3 = 0, and hence find the nature of its roots.",
        steps: [
          "Here a = 2, b = -4, c = 3",
          "D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8",
          "Since D < 0, the equation has NO real roots."
        ],
        answer: "D = -8; No real roots exist."
      },
      {
        question: "The diagonal of a rectangular field is 60 metres more than the shorter side. If the longer side is 30 metres more than the shorter side, find the sides of the field.",
        steps: [
          "Let shorter side = x metres. Longer side = (x + 30) m. Diagonal = (x + 60) m.",
          "By Pythagoras theorem: (x + 60)² = x² + (x + 30)²",
          "x² + 120x + 3600 = x² + x² + 60x + 900",
          "x² - 60x - 2700 = 0",
          "Factorising: (x - 90)(x + 30) = 0 → x = 90 (length cannot be negative, discard -30)."
        ],
        answer: "Shorter side = 90 m, Longer side = 120 m."
      }
    ],
    steps: [
      "Always simplify equation to standard form ax² + bx + c = 0 before computing D.",
      "Watch the sign of b when substituting into -b. If b = -6, then -b = +6.",
      "Check if problem mentions physical quantities like speed, age, or distance—reject negative values."
    ],
    importantPoints: [
      "If a and c have opposite signs, then 4ac is negative, making b² - 4ac strictly positive (always real roots!).",
      "For equal roots, vertex (-b/2a, 0) touches the x-axis."
    ],
    commonMistakes: [
      "Writing (-b ± √b² - 4ac) / 2 without dividing -b by 2a.",
      "Calculating (-4)² as -16 instead of +16."
    ],
    realWorldApplications: [
      "Field Boundaries & Enclosures: Calculating boundary fencing for maximum crop pasture area given fixed wire length.",
      "Pumping Station Rates: Finding individual times taken by two solar water pipes filling an agricultural storage reservoir."
    ],
    quickCheck: [
      {
        id: 'qc-quad-1',
        question: "If 2x² + kx + 2 = 0 has two equal real roots, what is the value of k?",
        options: ["±2", "±4", "±8", "4 only"],
        correctIndex: 1,
        explanation: "For equal roots, D = b² - 4ac = 0 → k² - 4(2)(2) = 0 → k² - 16 = 0 → k = ±4.",
        hint: "Set b² - 4ac = 0 and solve for k."
      },
      {
        id: 'qc-quad-2',
        question: "What is the discriminant of x² - 6x + 9 = 0?",
        options: ["-18", "0", "36", "18"],
        correctIndex: 1,
        explanation: "D = (-6)² - 4(1)(9) = 36 - 36 = 0. Hence roots are real and equal (x = 3).",
        hint: "Evaluate b² - 4ac."
      }
    ]
  },

  'Arithmetic Progressions': {
    id: 'math-10-ap',
    title: 'Arithmetic Progressions',
    subtitle: 'Common Difference, nth Term & Sum of First n Terms',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '20 min',
    visualComponent: 'NumberLineVisualizer',
    objectives: [
      "Define an Arithmetic Progression (AP) with first term a and common difference d",
      "Calculate the nth term: aₙ = a + (n - 1)d",
      "Find the sum of the first n terms: Sₙ = n/2 [2a + (n - 1)d] = n/2 [a + l]",
      "Apply AP formulas to savings plans, loan installments, and tiered work quotas"
    ],
    introduction: `An Arithmetic Progression is a sequence of numbers where the difference between consecutive terms remains constant. APs appear naturally in daily rural finances: monthly self-help group savings, interest schedules, tiered tractor hire rates, and rows of crops planted at uniform intervals.`,
    sections: [
      {
        title: "1. The General Term (nth Term) of an AP",
        content: `Let the first term be a and the common difference be d:
Terms: a, a + d, a + 2d, a + 3d, ...

The nth term is given by:
aₙ = a + (n - 1)d

• d can be positive, negative, or zero.
• d = aₖ - aₖ₋₁ for any term after the first.
• If an AP has m terms, the nth term from the end is (m - n + 1)th term from the beginning, or aₙ(end) = l - (n - 1)d.`,
        keyNote: "n must always be a positive integer (1, 2, 3...)."
      },
      {
        title: "2. Sum of First n Terms",
        content: `The sum Sₙ of first n terms is:
Sₙ = n / 2 · [2a + (n - 1)d]

If the last term l is known:
Sₙ = n / 2 · (a + l)

Also: The nth term can be obtained from sums:
aₙ = Sₙ - Sₙ₋₁`
      }
    ],
    formulas: [
      { name: "nth Term of an AP", formula: "aₙ = a + (n - 1)d", use: "Finds any future term without listing all values" },
      { name: "Sum of n Terms", formula: "Sₙ = n/2 [2a + (n - 1)d]", use: "Calculates total sum of sequence" },
      { name: "Sum with Last Term", formula: "Sₙ = n/2 (a + l)", use: "Fast sum when first and final terms are given" }
    ],
    examples: [
      {
        question: "Find the 20th term of the AP: 3, 8, 13, 18, ...",
        steps: [
          "First term a = 3, common difference d = 8 - 3 = 5, n = 20",
          "a₂₀ = a + (20 - 1)d = 3 + 19(5) = 3 + 95 = 98"
        ],
        answer: "a₂₀ = 98"
      },
      {
        question: "Find the sum of first 24 terms of the AP whose nth term is aₙ = 3 + 2n.",
        steps: [
          "Find a₁: a₁ = 3 + 2(1) = 5",
          "Find a₂₄: a₂₄ = 3 + 2(24) = 3 + 48 = 51 (this is our last term l)",
          "S₂₄ = n/2 (a + l) = 24/2 (5 + 51) = 12 × 56 = 672"
        ],
        answer: "S₂₄ = 672"
      }
    ],
    steps: [
      "Always verify if a sequence is an AP by checking if a₂ - a₁ = a₃ - a₂.",
      "When assuming 3 consecutive terms in an AP, pick (a - d), a, (a + d) to eliminate d when summing.",
      "When solving for n from a sum Sₙ, you get a quadratic equation; reject negative or fractional roots."
    ],
    importantPoints: [
      "The sum of the first n positive integers is Sₙ = n(n + 1) / 2.",
      "If each term of an AP is increased/decreased/multiplied by a constant k, the resulting sequence is also an AP."
    ],
    commonMistakes: [
      "Writing (n + 1) instead of (n - 1) in the formula.",
      "Treating n as the term value instead of the term index."
    ],
    realWorldApplications: [
      "Micro-Savings Schemes: Calculating total savings when depositing ₹50 in week 1, ₹100 in week 2, ₹150 in week 3.",
      "Auditorium / Seating Layouts: Finding total seats when row 1 has 20 seats and each successive row adds 2 seats."
    ],
    quickCheck: [
      {
        id: 'qc-ap-1',
        question: "Which term of the AP 21, 18, 15, ... is -81?",
        options: ["28th", "35th", "34th", "30th"],
        correctIndex: 1,
        explanation: "a = 21, d = 18 - 21 = -3. aₙ = a + (n - 1)d → -81 = 21 + (n - 1)(-3) → -102 = -3(n - 1) → 34 = n - 1 → n = 35.",
        hint: "Set aₙ = -81 and remember d = -3 is negative."
      }
    ]
  },

  'Triangles': {
    id: 'math-10-triangles',
    title: 'Triangles',
    subtitle: 'Similarity of Triangles, Thales Theorem & Criteria for Similarity',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '24 min',
    visualComponent: 'GeometryVisualizer',
    objectives: [
      "Distinguish between congruence (same shape & size) and similarity (same shape)",
      "State and prove Basic Proportionality Theorem (Thales Theorem) and its converse",
      "Apply similarity criteria: AAA (or AA), SSS, and SAS",
      "Understand the ratio of areas of similar triangles is equal to square of ratio of corresponding sides",
      "Apply Pythagoras Theorem and its converse to practical height-distance scenarios"
    ],
    introduction: `Two figures having the same shape but not necessarily the same size are called similar. Similarity is the foundation of architectural blueprints, map scale conversions, and indirect measurement (such as determining the height of a tree or minaret from shadow lengths without climbing).`,
    sections: [
      {
        title: "1. Basic Proportionality Theorem (BPT / Thales Theorem)",
        content: `Theorem: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.

In ΔABC, if line DE || BC with D on AB and E on AC:
AD / DB = AE / EC

Converse of BPT:
If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.`,
        keyNote: "Also useful in corollary form: AD / AB = AE / AC."
      },
      {
        title: "2. Criteria for Similarity of Triangles",
        content: `Two triangles ΔABC and ΔDEF are similar (ΔABC ~ ΔDEF) if:
1. AAA (or AA) Criterion: If two angles of one triangle are respectively equal to two angles of another, the triangles are similar.
2. SSS Criterion: If all three pairs of corresponding sides are proportional: AB/DE = BC/EF = AC/DF.
3. SAS Criterion: If one angle of a triangle is equal to one angle of another and the sides including these angles are proportional.`
      }
    ],
    formulas: [
      { name: "Thales Theorem (BPT)", formula: "AD / DB = AE / EC", use: "Calculates unknown segment along divided side" },
      { name: "Similar Triangle Side Ratio", formula: "AB/DE = BC/EF = AC/DF", use: "Relates lengths between scaled similar shapes" },
      { name: "Pythagoras Theorem", formula: "Hypotenuse² = Base² + Perpendicular²", use: "Right-angled triangle distance calculations" }
    ],
    examples: [
      {
        question: "In ΔABC, DE || BC. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC.",
        steps: [
          "By Basic Proportionality Theorem: AD / DB = AE / EC",
          "1.5 / 3 = 1 / EC",
          "1 / 2 = 1 / EC → EC = 2 cm"
        ],
        answer: "EC = 2 cm"
      }
    ],
    steps: [
      "Always write triangle vertices in exact corresponding order: ΔABC ~ ΔDEF implies ∠A = ∠D, ∠B = ∠E, ∠C = ∠F.",
      "Check for common angles in nested triangles before applying AA similarity.",
      "Draw parallel segments cleanly with dashed auxiliary lines to highlight ratios."
    ],
    importantPoints: [
      "All congruent triangles are similar, but all similar triangles are NOT necessarily congruent.",
      "All circles and all equilateral triangles are always similar to each other."
    ],
    commonMistakes: [
      "Mismatched vertex order when stating similarity (e.g. writing ΔABC ~ ΔEDF when ∠B = ∠D).",
      "Confusing side length with ratio segment."
    ],
    realWorldApplications: [
      "Shadow Height Estimation: Measuring the height of a village communications tower by comparing its shadow with a 1-metre vertical pole's shadow.",
      "Land Surveying: Calculating distances across a river or ravine using optical similarity triangles."
    ],
    quickCheck: [
      {
        id: 'qc-tri-1',
        question: "A vertical pole of length 6 m casts a shadow 4 m long on the ground, and at the same time a water tower casts a shadow 28 m long. Find the height of the water tower.",
        options: ["42 m", "36 m", "56 m", "48 m"],
        correctIndex: 0,
        explanation: "Since sun elevation angle is identical, the triangles are similar: Height/Shadow = 6 / 4 = H / 28 → H = (6 × 28) / 4 = 6 × 7 = 42 m.",
        hint: "Set up the proportion: pole height / pole shadow = tower height / tower shadow."
      }
    ]
  },

  'Coordinate Geometry': {
    id: 'math-10-coord-geo',
    title: 'Coordinate Geometry',
    subtitle: 'Distance Formula, Section Formula & Centroid of a Triangle',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '20 min',
    visualComponent: 'CoordinatePlaneVisualizer',
    objectives: [
      "Plot coordinates on Cartesian plane and evaluate distances between points",
      "Apply the Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
      "Apply the Section Formula to find coordinates dividing a segment in ratio m₁ : m₂",
      "Find the midpoint of a line segment and the centroid of a triangle"
    ],
    introduction: `Coordinate Geometry connects algebra and geometry. By assigning coordinate pairs (x, y) to locations, we can precisely calculate distances, split paths into equal segments, and analyze boundary maps for rural land records and GPS navigation.`,
    sections: [
      {
        title: "1. The Distance Formula",
        content: `The distance between any two points P(x₁, y₁) and Q(x₂, y₂) in a coordinate plane is given by:
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

Distance of point P(x, y) from the origin O(0, 0):
OP = √(x² + y²)

Collinearity Test:
Three points A, B, and C are collinear if the sum of lengths of two segments equals the length of the third (e.g., AB + BC = AC).`
      },
      {
        title: "2. The Section Formula & Midpoint",
        content: `Coordinates of point P(x, y) dividing the line segment joining A(x₁, y₁) and B(x₂, y₂) internally in ratio m₁ : m₂:
x = (m₁x₂ + m₂x₁) / (m₁ + m₂)
y = (m₁y₂ + m₂y₁) / (m₁ + m₂)

Midpoint Formula (when m₁ = m₂ = 1):
M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)

Centroid of a Triangle with vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):
G = ((x₁ + x₂ + x₃) / 3, (y₁ + y₂ + y₃) / 3)`
      }
    ],
    formulas: [
      { name: "Distance Formula", formula: "d = √[(x₂ - x₁)² + (y₂ - y₁)²]", use: "Distance between any two points" },
      { name: "Section Formula (Internal)", formula: "x = (m₁x₂ + m₂x₁)/(m₁+m₂)", use: "Point dividing segment in ratio m₁:m₂" },
      { name: "Midpoint Formula", formula: "((x₁+x₂)/2, (y₁+y₂)/2)", use: "Center point of line segment" }
    ],
    examples: [
      {
        question: "Find the distance between the points (2, 3) and (4, 1).",
        steps: [
          "x₁ = 2, y₁ = 3, x₂ = 4, y₂ = 1",
          "d = √[(4 - 2)² + (1 - 3)²] = √[2² + (-2)²] = √[4 + 4] = √8 = 2√2 units"
        ],
        answer: "2√2 units"
      }
    ],
    steps: [
      "Assign (x₁, y₁) and (x₂, y₂) clearly before plugging numbers into the square root.",
      "Squaring removes negative signs: (-2)² = 4.",
      "When ratio is unknown, assume the ratio is k : 1."
    ],
    importantPoints: [
      "Any point on the x-axis has y-coordinate 0: (x, 0).",
      "Any point on the y-axis has x-coordinate 0: (0, y)."
    ],
    commonMistakes: [
      "Confusing x₁ with y₁ (pairing x₁ and x₂ together).",
      "Dropping the square root sign too early."
    ],
    realWorldApplications: [
      "GPS and Boundary Mapping: Dividing land parcels and finding the geographic center of a village cluster for solar microgrid placement."
    ],
    quickCheck: [
      {
        id: 'qc-cg-1',
        question: "The midpoint of the line segment joining A(3, 4) and B(1, -2) is:",
        options: ["(2, 1)", "(2, 3)", "(4, 2)", "(1, 1)"],
        correctIndex: 0,
        explanation: "Midpoint = ((3 + 1)/2, (4 + (-2))/2) = (4/2, 2/2) = (2, 1).",
        hint: "Add corresponding coordinates and divide by 2."
      }
    ]
  },

  'Introduction to Trigonometry': {
    id: 'math-10-trigonometry',
    title: 'Introduction to Trigonometry',
    subtitle: 'Ratios, Specific Angle Values (0°-90°) & Fundamental Identities',
    classId: 'Class 10',
    subjectId: 'Mathematics',
    readTime: '25 min',
    visualComponent: 'GeometryVisualizer',
    objectives: [
      "Define the six trigonometric ratios: sin, cos, tan, cosec, sec, and cot in a right-angled triangle",
      "Memorize values of trigonometric ratios for standard angles: 0°, 30°, 45°, 60°, and 90°",
      "Prove and apply fundamental Pythagorean trigonometric identities",
      "Simplify trigonometric expressions and prove equivalences"
    ],
    introduction: `Trigonometry (from Greek words 'trigonon' = triangle and 'metron' = measure) was advanced significantly by Indian astronomer-mathematician Aryabhata (who introduced 'jya' - sine). It allows us to compute inaccessible heights and distances using angles of elevation and depression.`,
    sections: [
      {
        title: "1. Trigonometric Ratios",
        content: `In a right triangle ABC right-angled at B, with reference angle θ (at A):
• sin θ = Opposite / Hypotenuse = BC / AC
• cos θ = Adjacent / Hypotenuse = AB / AC
• tan θ = Opposite / Adjacent = BC / AB = sin θ / cos θ
• cosec θ = 1 / sin θ = Hypotenuse / Opposite
• sec θ = 1 / cos θ = Hypotenuse / Adjacent
• cot θ = 1 / tan θ = Adjacent / Opposite`
      },
      {
        title: "2. Standard Angle Table",
        content: `Values to remember:
• sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1
• cos 0° = 1, cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2, cos 90° = 0
• tan 0° = 0, tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, tan 90° = Not Defined`
      },
      {
        title: "3. Fundamental Trigonometric Identities",
        content: `For any angle 0° ≤ θ ≤ 90°:
1. sin²θ + cos²θ = 1   →   sin²θ = 1 - cos²θ,  cos²θ = 1 - sin²θ
2. 1 + tan²θ = sec²θ   →   sec²θ - tan²θ = 1
3. 1 + cot²θ = cosec²θ →   cosec²θ - cot²θ = 1`
      }
    ],
    formulas: [
      { name: "Pythagorean Identity 1", formula: "sin²θ + cos²θ = 1", use: "Core identity connecting sine and cosine" },
      { name: "Pythagorean Identity 2", formula: "sec²θ - tan²θ = 1", use: "Simplifies secant and tangent expressions" },
      { name: "Pythagorean Identity 3", formula: "cosec²θ - cot²θ = 1", use: "Simplifies cosecant and cotangent expressions" }
    ],
    examples: [
      {
        question: "Evaluate: 2 tan²45° + cos²30° - sin²60°",
        steps: [
          "Substitute standard values: tan 45° = 1, cos 30° = √3/2, sin 60° = √3/2",
          "2(1)² + (√3/2)² - (√3/2)²",
          "2(1) + 3/4 - 3/4 = 2"
        ],
        answer: "2"
      }
    ],
    steps: [
      "Always identify the hypotenuse first (opposite the 90° right angle).",
      "Notice that the opposite and adjacent sides depend strictly on which acute angle is chosen as reference θ.",
      "When proving identities, convert all terms into sin θ and cos θ if no other simplification is obvious."
    ],
    importantPoints: [
      "sin θ and cos θ can NEVER exceed 1 (since hypotenuse is the longest side).",
      "sin(A + B) is NOT equal to sin A + sin B."
    ],
    commonMistakes: [
      "Writing sin²θ as sin θ² (the entire ratio is squared, not the angle).",
      "Confusing cosec θ with sec θ."
    ],
    realWorldApplications: [
      "Rooftop Solar Panel Tilt: Calculating the optimal tilt angle of photovoltaic solar arrays towards the sun for maximum winter sunlight capture."
    ],
    quickCheck: [
      {
        id: 'qc-trig-1',
        question: "What is the value of (sin²30° + cos²30°)?",
        options: ["0", "1/2", "1", "2"],
        correctIndex: 2,
        explanation: "By the fundamental identity sin²θ + cos²θ = 1 for any angle θ. (1/2)² + (√3/2)² = 1/4 + 3/4 = 1.",
        hint: "Remember the Pythagorean identity sin²θ + cos²θ."
      }
    ]
  }
};
