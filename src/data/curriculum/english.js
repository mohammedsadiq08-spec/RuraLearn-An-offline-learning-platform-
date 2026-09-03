// RuraLearn English Curriculum

export const ENGLISH_CURRICULUM = {
  'Grammar': {
    id: 'eng-10-grammar',
    title: 'English Grammar Mastery',
    subtitle: 'Tenses, Active & Passive Voice, Direct & Indirect Speech, Subject-Verb Agreement',
    classId: 'Class 10',
    subjectId: 'English',
    readTime: '20 min',
    visualComponent: null,
    objectives: [
      "Master the 12 verb tenses and their practical communicative functions",
      "Convert sentences accurately between Active and Passive Voice",
      "Report statements, questions, and commands using Direct and Indirect Speech",
      "Apply rules of Subject-Verb concord in academic and conversational writing"
    ],
    introduction: `Grammar provides the structural blueprint for clear, persuasive communication. For rural students preparing for higher college admissions, competitive government exams, or professional job interviews, mastering grammatical foundations builds immense confidence and professional fluency.`,
    sections: [
      {
        title: "1. The 12 Verb Tenses & Timeline",
        content: `Tenses anchor actions along the timeline of past, present, and future:
• Simple Present (Habits, facts): "She studies every morning." / "The sun rises in the east."
• Present Continuous (Actions happening right now): "The technicians are installing solar panels."
• Present Perfect (Completed actions with current relevance): "We have submitted the project." (has/have + V3).
• Simple Past (Action completed at definite time): "He cleared the examination last year."
• Past Continuous: "They were irrigating the fields when it began to rain."
• Past Perfect (Earlier of two past actions): "The train had already departed before we reached the station."`
      },
      {
        title: "2. Active and Passive Voice",
        content: `• Active Voice: Focuses on the doer of the action:
  "The village council approved the digital library project."
• Passive Voice: Focuses on the receiver or outcome of the action:
  "The digital library project was approved by the village council."

Conversion Rule:
Active: Subject + Verb + Object
Passive: Object + Auxiliary Verb (be form) + Past Participle (V3) + by + Subject.
Present Continuous: "is/are being + V3"
Present Perfect: "has/have been + V3"`
      },
      {
        title: "3. Direct and Indirect (Reported) Speech",
        content: `When reporting what someone said without quoting their exact words:
1. Change in Tense (if reporting verb is past):
   - Simple Present → Simple Past
   - Present Continuous → Past Continuous
   - Simple Past → Past Perfect
2. Pronoun shifts (I → he/she, we → they)
3. Time/Place shifts (today → that day, tomorrow → the next day, here → there, now → then).

Example:
Direct: Ravi said, "I am learning Python coding."
Indirect: Ravi said that he was learning Python coding.`
      }
    ],
    formulas: [
      { name: "Passive Voice Formula", formula: "Object + [be verb] + Past Participle (V3) + by + Agent", use: "Emphasizes action rather than doer" },
      { name: "Past Perfect Precedence", formula: "Had + V3 (Earlier action) before Simple Past (Later action)", use: "Sequence of past events" }
    ],
    examples: [
      {
        question: "Convert to Passive: 'The students are planting hundred saplings in the school compound.'",
        steps: [
          "Subject: The students, Verb: are planting (Present Continuous), Object: hundred saplings",
          "Move object to front: 'Hundred saplings...'",
          "Apply passive auxiliary for plural present continuous: 'are being planted'",
          "Add by-agent: 'by the students in the school compound.'"
        ],
        answer: "Hundred saplings are being planted by the students in the school compound."
      }
    ],
    steps: [
      "In Reported Speech questions, convert question word order (verb-before-subject) back into declarative word order (subject-before-verb).",
      "Singular subjects take singular verbs: 'Neither of the applicants was selected' (not 'were')."
    ],
    importantPoints: [
      "Universal truths do not shift tenses in reported speech: The teacher said, 'The Earth revolves around the Sun' → The teacher said that the Earth revolves around the Sun.",
      "Modal verbs change: will → would, can → could, may → might."
    ],
    commonMistakes: [
      "Saying 'He did not went' instead of 'He did not go' (use base form V1 after did/do/does).",
      "Confusing 'its' (possessive) with 'it's' (contraction for it is)."
    ],
    realWorldApplications: [
      "Official Applications & Resumes: Writing clean formal applications to panchayat officers, banks for educational loans, or job recruiters."
    ],
    quickCheck: [
      {
        id: 'qc-eng-1',
        question: "Change to Indirect speech: Anita said, 'I will complete the assignment tomorrow.'",
        options: [
          "Anita said that she will complete the assignment tomorrow.",
          "Anita said that she would complete the assignment the next day.",
          "Anita told that I would complete the assignment yesterday.",
          "Anita said she completed the assignment tomorrow."
        ],
        correctIndex: 1,
        explanation: "'will' changes to 'would' and 'tomorrow' changes to 'the next day'. Hence: 'Anita said that she would complete the assignment the next day.'",
        hint: "Convert will to would, and change tomorrow to the next day."
      }
    ]
  },

  'Reading Comprehension': {
    id: 'eng-10-reading',
    title: 'Reading Comprehension & Critical Analysis',
    subtitle: 'Skimming, Scanning, Inferring Tone, Vocabulary in Context & Summarization',
    classId: 'Class 10',
    subjectId: 'English',
    readTime: '20 min',
    visualComponent: null,
    objectives: [
      "Differentiate between Skimming (finding main idea) and Scanning (locating specific facts)",
      "Infer authorial purpose, tone, and contextual vocabulary meanings",
      "Draft concise summaries from multi-paragraph informational passages"
    ],
    introduction: `Reading comprehension is the fundamental skill required to absorb textbooks, user manuals, legal notices, and research papers. Effective readers do not read word-for-word at constant speed; they adapt reading velocity based on purpose.`,
    sections: [
      {
        title: "1. Active Reading Strategies",
        content: `• Skimming: Rapidly moving eyes over the heading, first paragraph, topic sentences, and conclusion to grasp overall thesis within 60 seconds.
• Scanning: Looking specifically for designated keywords, numbers, dates, or proper nouns (like looking up a name in a phone directory).
• Contextual Clues: Figuring out unknown words from surrounding antonyms, synonyms, or illustrative examples.`
      }
    ],
    formulas: [
      { name: "P.Q.R.S.T. Method", formula: "Preview → Question → Read → Summarize → Test", use: "High-retention study technique" }
    ],
    examples: [
      {
        question: "What is the primary distinction between an author's explicit fact and an implicit inference?",
        steps: [
          "Explicit fact: Directly stated in black-and-white text without ambiguity.",
          "Implicit inference: Logical conclusion derived by reading between the lines based on evidence and context."
        ],
        answer: "Explicit is directly written; implicit is logically deduced."
      }
    ],
    steps: [
      "Read comprehension questions FIRST before reading the long passage to prime your brain for what to look for.",
      "Base your answers strictly on the text provided, never on personal outside assumptions."
    ],
    importantPoints: [
      "The topic sentence is usually the first or second sentence of each paragraph.",
      "Beware of extreme answer choices using words like 'never', 'always', or 'completely'."
    ],
    commonMistakes: [
      "Copying word-for-word sentences from the passage when asked to write in your own words."
    ],
    realWorldApplications: [
      "Analyzing Agricultural Government Notices: Reading scheme qualification criteria for subsidies, crop insurance claim documents, and digital banking terms."
    ],
    quickCheck: [
      {
        id: 'qc-eng-rc-1',
        question: "When looking for a specific year in a historical passage, which reading strategy should you employ?",
        options: ["Skimming", "Scanning", "Close analytical proofreading", "Recitation"],
        correctIndex: 1,
        explanation: "Scanning involves searching specifically for target details like dates, numbers, or names without reading every sentence.",
        hint: "You are looking for a specific target data point."
      }
    ]
  },

  'Writing Skills': {
    id: 'eng-10-writing',
    title: 'Formal Writing & Communication',
    subtitle: 'Formal Letter Writing, Email Etiquette, Notices, Articles & Analytical Paragraphs',
    classId: 'Class 10',
    subjectId: 'English',
    readTime: '18 min',
    visualComponent: null,
    objectives: [
      "Master standard format of formal letters (to Editor, Municipal Commissioner, School Principal)",
      "Compose clear, respectful email correspondence with proper subject lines and sign-offs",
      "Draft concise notices (within 50 words) with all essential details (Date, Time, Venue, Purpose)"
    ],
    introduction: `The ability to express thoughts clearly in writing is a superpower. Whether petitioning local authorities for electricity repairs, submitting an RTI query, or applying for an internship, structured formal writing ensures your voice is heard and respected.`,
    sections: [
      {
        title: "1. Standard Formal Letter Structure",
        content: `Standard 7-part layout:
1. Sender's Address
2. Date (e.g. 3 September 2026)
3. Receiver's Designation & Address
4. Subject (Crisp, underlined, 5-8 words summarizing purpose)
5. Salutation (Sir / Madam)
6. Body (3 distinct paragraphs: Introduction → Main problem & details → Action requested)
7. Complimentary Close (Yours faithfully / Yours sincerely) + Signature & Name`
      }
    ],
    formulas: [
      { name: "Formal Letter Structure", formula: "Sender Address → Date → Receiver → Subject → Salutation → Body (3 paras) → Closing", use: "Official correspondence standard" }
    ],
    examples: [
      {
        question: "Write an effective subject line for a letter complaining about irregular drinking water supply in your village.",
        steps: [
          "Avoid vague subjects like 'Complaint' or long narrative sentences.",
          "Keep it crisp: 'Subject: Complaint regarding irregular drinking water supply in Ward No. 4.'"
        ],
        answer: "Subject: Complaint regarding irregular drinking water supply in Ward No. 4"
      }
    ],
    steps: [
      "Keep formal tone neutral and courteous; avoid emotional venting or aggressive language.",
      "Ensure the subject line communicates the core issue in a single glance."
    ],
    importantPoints: [
      "Do NOT use apostrophe in 'Yours sincerely' (write 'Yours', never 'Your's')."
    ],
    commonMistakes: [
      "Writing 'Yours obediently' for editors or government officers (only use obediently for school principals).",
      "Writing informal abbreviations (u, btw, plzz) in official correspondence."
    ],
    realWorldApplications: [
      "Public Service Petitions: Drafting clear representations to the Gram Panchayat or Electricity Board requesting repair of street lighting."
    ],
    quickCheck: [
      {
        id: 'qc-eng-wr-1',
        question: "Which of the following is the correct complimentary closing for a letter addressed to the Editor of a national newspaper?",
        options: ["Your's lovingly", "Yours faithfully", "Your obedient pupil", "Thanks & regards bye"],
        correctIndex: 1,
        explanation: "'Yours faithfully' or 'Yours sincerely' is the accepted standard formal closure for public authorities and editors.",
        hint: "Look for formal standard phrasing without apostrophe."
      }
    ]
  },

  'Vocabulary': {
    id: 'eng-10-vocab',
    title: 'Vocabulary & Root Words',
    subtitle: 'Greek & Latin Roots, Synonyms, Antonyms, Idioms & Collocations',
    classId: 'Class 10',
    subjectId: 'English',
    readTime: '18 min',
    visualComponent: null,
    objectives: [
      "Decode unknown words using common Greek and Latin root words (bio, chrono, geo, bene, mal)",
      "Master high-frequency academic vocabulary words and their precise contexts",
      "Use idioms and phrasal verbs naturally in sentences"
    ],
    introduction: `A rich vocabulary expands the precision of our thinking. By learning root words, prefixes, and suffixes, you can unlock the meaning of hundreds of unfamiliar words automatically without memorizing endless lists.`,
    sections: [
      {
        title: "1. The Power of Root Words",
        content: `• 'Bene' (Good/Well): Benefit, Benevolent (kind), Benefactor, Benign.
• 'Mal' (Bad/Evil): Malicious, Malfunction, Malnutrition, Malady.
• 'Chron' (Time): Chronology, Synchronize, Chronic, Anachronism.
• 'Geo' (Earth): Geography, Geology, Geometry, Geothermal.
• 'Auto' (Self): Automatic, Autonomous, Autograph, Autobiography.`
      }
    ],
    formulas: [
      { name: "Word Architecture", formula: "Prefix (Direction/Polarity) + Root (Core Meaning) + Suffix (Part of Speech)", use: "Unlocks unfamiliar vocabulary" }
    ],
    examples: [
      {
        question: "Decode the word 'Chronometer' using its root words.",
        steps: [
          "Root 'chrono' means time.",
          "Root 'meter' means device for measuring.",
          "Combined: An instrument for measuring time with extreme accuracy."
        ],
        answer: "A precision time-measuring instrument."
      }
    ],
    steps: [
      "Break unfamiliar long words into Prefix, Root, and Suffix.",
      "Check if word polarity is positive, neutral, or negative."
    ],
    importantPoints: [
      "Collocations are words that naturally go together (e.g. 'heavy rain', not 'strong rain'; 'make a mistake', not 'do a mistake')."
    ],
    commonMistakes: [
      "Using 'big' words incorrectly when simple, accurate words express meaning more effectively."
    ],
    realWorldApplications: [
      "Competitive Exam Success: Mastering roots for vocabulary sections in SSC, Banking, Railways, and state civil services."
    ],
    quickCheck: [
      {
        id: 'qc-eng-voc-1',
        question: "The prefix 'mal-' in 'malnutrition' or 'malfunction' indicates:",
        options: ["Good / Beneficial", "Bad / Abnormal", "Large / Heavy", "Swift / Rapid"],
        correctIndex: 1,
        explanation: "The Latin root 'mal' means bad, faulty, or ill. Malnutrition means bad/insufficient nutrition.",
        hint: "Opposite of 'bene-' (good)."
      }
    ]
  },

  'Literature': {
    id: 'eng-10-lit',
    title: 'Literature & Literary Devices',
    subtitle: 'Metaphor, Simile, Personification, Alliteration, Irony & Poetic Themes',
    classId: 'Class 10',
    subjectId: 'English',
    readTime: '18 min',
    visualComponent: null,
    objectives: [
      "Identify key poetic devices: Simile, Metaphor, Personification, Alliteration, Hyperbole, and Irony",
      "Analyze themes of perseverance, rural empathy, and human connection in prose and poetry",
      "Explain the significance of symbolism in literary texts"
    ],
    introduction: `Literature reflects human emotions, struggles, and triumphs. Literary devices transform ordinary language into vivid, memorable imagery that stirs imagination and empathy.`,
    sections: [
      {
        title: "1. Core Poetic Devices",
        content: `• Simile: Explicit comparison between two different things using 'like' or 'as':
  "He was as steadfast as an ancient banyan tree."
• Metaphor: Direct implicit comparison without 'like' or 'as':
  "Hope is a candle in deep darkness."
• Personification: Attributing human qualities or emotions to inanimate objects or nature:
  "The wind whispered through the dry maize leaves."
• Alliteration: Repetition of identical consonant sounds at the start of adjacent words:
  "Bright blossoms bloomed beneath the boughs."
• Irony: A contrast between expectation and reality (situational irony).`
      }
    ],
    formulas: [
      { name: "Simile vs Metaphor", formula: "Simile uses 'like/as' | Metaphor equates directly (X is Y)", use: "Distinguishing figurative comparisons" }
    ],
    examples: [
      {
        question: "Identify the literary device: 'The tractor groaned under the heavy load.'",
        steps: [
          "Groaning is a vocal expression of pain or strain produced by living human beings.",
          "Attributing human groaning to a machine is Personification."
        ],
        answer: "Personification"
      }
    ],
    steps: [
      "Notice how figurative language enhances emotional connection and storytelling."
    ],
    importantPoints: [
      "Rhyme scheme is determined by matching the end vowel sounds of consecutive poetic lines (e.g., AABB or ABAB)."
    ],
    commonMistakes: [
      "Calling a comparison a simile when 'like' or 'as' is missing."
    ],
    realWorldApplications: [
      "Public Speaking & Storytelling: Using vivid metaphors and memorable imagery when delivering community presentations."
    ],
    quickCheck: [
      {
        id: 'qc-eng-lit-1',
        question: "'The moon danced silently on the ripple of the village pond.' Which poetic device is used?",
        options: ["Simile", "Personification", "Hyperbole", "Pun"],
        correctIndex: 1,
        explanation: "Dancing is a human activity. Giving the moon the human action of dancing is Personification.",
        hint: "The inanimate moon is given a human action."
      }
    ]
  },

  'Communication Skills': {
    id: 'eng-10-comm',
    title: 'Effective Spoken & Professional Communication',
    subtitle: 'Active Listening, Non-Verbal Cues, Interview Etiquette & Overcoming Stage Fear',
    classId: 'Class 10',
    subjectId: 'English',
    readTime: '18 min',
    visualComponent: null,
    objectives: [
      "Understand the 7 Cs of effective communication (Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous)",
      "Practice active listening strategies without premature interruption",
      "Overcome stage fear and speak clearly in group discussions and presentations",
      "Master essential professional job interview etiquette"
    ],
    introduction: `Communication is a two-way bridge. Speaking clearly, listening deeply, and projecting warmth and confidence enables rural youths to excel in higher education, secure apprenticeships, and lead community development initiatives.`,
    sections: [
      {
        title: "1. The 7 Cs of Effective Communication",
        content: `1. Clear: State purpose unambiguously.
2. Concise: Stick to the point; eliminate filler words.
3. Concrete: Support statements with facts and specific examples.
4. Correct: Use accurate facts and proper grammar.
5. Coherent: Flow logically from one thought to the next.
6. Complete: Give all necessary details so the listener can take action.
7. Courteous: Show genuine respect for the other person's perspective.`
      },
      {
        title: "2. Active Listening & Interview Preparation",
        content: `• Active Listening: Maintain eye contact, nod to acknowledge, take brief notes, and clarify before reacting: "What I hear you saying is... Is that correct?"
• Job Interview Fundamentals:
  - Firm handshake / polite Namaste
  - Upright posture (avoid slouching)
  - The 'STAR' method for answering situational questions: Situation, Task, Action, Result!`
      }
    ],
    formulas: [
      { name: "STAR Method", formula: "Situation → Task → Action Taken → Result Achieved", use: "Structure for answering interview questions" }
    ],
    examples: [
      {
        question: "How should a candidate handle an interview question when they do not know the answer?",
        steps: [
          "Never guess wildly or invent false facts.",
          "Politely acknowledge: 'I do not have the exact answer to this right now, but based on what I know about X, I would approach it by... and I will definitely look into this afterwards.'"
        ],
        answer: "Honest acknowledgment combined with logical problem-solving willingness."
      }
    ],
    steps: [
      "Breathe deeply before speaking to control nervousness and steady your vocal pitch.",
      "Pause for 2 seconds before answering complex questions to organize your thoughts."
    ],
    importantPoints: [
      "Non-verbal body language accounts for more than half of first impressions in face-to-face meetings."
    ],
    commonMistakes: [
      "Interrupting the speaker before they have finished their sentence.",
      "Speaking too fast due to adrenaline and nervousness."
    ],
    realWorldApplications: [
      "Self-Help Group Presentations: Confidently presenting micro-enterprise budget proposals to bank managers and village panchayats."
    ],
    quickCheck: [
      {
        id: 'qc-eng-com-1',
        question: "In the STAR interview methodology, what does the letter 'A' stand for?",
        options: ["Attitude", "Action", "Ability", "Agreement"],
        correctIndex: 1,
        explanation: "STAR stands for Situation, Task, Action, Result. 'Action' details the exact steps you personally took.",
        hint: "It represents the steps you took to resolve the problem."
      }
    ]
  }
};
