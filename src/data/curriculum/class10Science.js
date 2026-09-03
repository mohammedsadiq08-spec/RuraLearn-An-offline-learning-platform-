// RuraLearn Class 10 Science Complete Curriculum

export const CLASS_10_SCIENCE = {
  'Chemical Reactions and Equations': {
    id: 'sci-10-chem-reactions',
    title: 'Chemical Reactions and Equations',
    subtitle: 'Chemical Changes, Balancing, Types of Reactions, Redox & Corrosion',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '25 min',
    visualComponent: 'CircuitVisualizer',
    objectives: [
      "Identify signs of a chemical reaction (evolution of gas, change in temperature/colour/state)",
      "Balance chemical equations according to the Law of Conservation of Mass",
      "Classify reactions: Combination, Decomposition, Displacement, Double Displacement",
      "Distinguish between Oxidation, Reduction, and Redox processes",
      "Analyze real-world effects of oxidation: Corrosion and Rancidity"
    ],
    introduction: `Whenever a chemical change occurs, we say that a chemical reaction has taken place. Whether it is milk setting into curd, iron implements rusting during the monsoon, or burning firewood in a chulha, chemical bonds are continuously rearranged. In this chapter, we learn how to balance reactions systematically and harness them safely.`,
    sections: [
      {
        title: "1. Characteristics of Chemical Reactions & Balancing",
        content: `A chemical reaction can be recognized by:
1. Change in state
2. Change in colour (e.g., copper sulphate turns green when iron nail is added)
3. Evolution of a gas (e.g., Zn + H₂SO₄ → ZnSO₄ + H₂↑)
4. Change in temperature (e.g., slaking of lime releases significant heat)

Law of Conservation of Mass:
Matter can neither be created nor destroyed in a chemical reaction. Therefore, the total number of atoms of each element must remain equal on both sides of a chemical equation.

Balancing Fe + H₂O → Fe₃O₄ + H₂:
Step 1: Balance Fe: 3Fe + H₂O → Fe₃O₄ + H₂
Step 2: Balance O: 3Fe + 4H₂O → Fe₃O₄ + H₂
Step 3: Balance H: 3Fe + 4H₂O → Fe₃O₄ + 4H₂
Final balanced equation: 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)`
      },
      {
        title: "2. Types of Chemical Reactions",
        content: `• Combination Reaction: Two or more reactants combine to form a single product.
  CaO(s) (Quicklime) + H₂O(l) → Ca(OH)₂(aq) (Slaked lime) + Heat

• Decomposition Reaction: A single reactant breaks down into two or more simpler products.
  Thermal decomposition of limestone: CaCO₃(s) —(Heat)→ CaO(s) + CO₂(g)
  Electrolytic decomposition of water: 2H₂O(l) —(Electricity)→ 2H₂(g) + O₂(g)
  Photolytic decomposition of silver chloride: 2AgCl(s) —(Sunlight)→ 2Ag(s) + Cl₂(g)

• Displacement Reaction: A more reactive element displaces a less reactive element from its compound.
  Fe(s) + CuSO₄(aq) [Blue] → FeSO₄(aq) [Light Green] + Cu(s) [Brown deposit]

• Double Displacement (Precipitation): Mutual exchange of ions between reactants.
  Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ (White precipitate) + 2NaCl(aq)`
      },
      {
        title: "3. Oxidation, Reduction & Daily Life Effects",
        content: `• Oxidation: Gain of oxygen OR loss of hydrogen (loss of electrons).
• Reduction: Gain of hydrogen OR loss of oxygen (gain of electrons).
• Redox Reaction: Reactions in which both oxidation and reduction occur simultaneously.
  CuO + H₂ —(Heat)→ Cu + H₂O
  (CuO loses oxygen → reduced; H₂ gains oxygen → oxidized).

Corrosion:
The slow eating away of metals by the action of air, moisture, or acids.
Rusting of Iron: 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O (Hydrated ferric oxide).
Prevention: Painting, greasing, galvanisation (coating with zinc), alloying.

Rancidity:
When fats and oils are oxidized, they become rancid and their smell and taste change.
Prevention: Adding antioxidants, storing in airtight containers, flushing packages with nitrogen gas.`
      }
    ],
    formulas: [
      { name: "Slaking of Lime", formula: "CaO + H₂O → Ca(OH)₂ + Heat", use: "Preparation of whitewash solution" },
      { name: "Whitewash curing with CO₂", formula: "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O", use: "Gives shiny marble-like finish to walls after 2-3 days" },
      { name: "Iron Rusting", formula: "4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O", use: "Formation of flaky brown rust" }
    ],
    examples: [
      {
        question: "Why does the blue colour of copper sulphate solution change when an iron nail is dipped in it?",
        steps: [
          "Iron is more reactive than copper according to the reactivity series.",
          "Iron displaces copper from copper sulphate solution: Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
          "The blue CuSO₄ solution turns light green due to the formation of ferrous sulphate (FeSO₄), and reddish-brown copper deposits on the iron nail."
        ],
        answer: "Displacement reaction forms green ferrous sulphate."
      }
    ],
    steps: [
      "Always count atoms of the most complex compound first when balancing.",
      "Never alter chemical subscripts (like H₂O to H₂O₂) to balance; only change balancing coefficients.",
      "Check physical state symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous."
    ],
    importantPoints: [
      "Respiration is an exothermic reaction because glucose is oxidized releasing ATP energy: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy.",
      "Decomposition of vegetable matter into compost is also an exothermic process."
    ],
    commonMistakes: [
      "Confusing quicklime (CaO) with slaked lime (Ca(OH)₂) or limestone (CaCO₃).",
      "Calling a reaction endothermic when heat is evolved (exothermic releases heat, endothermic absorbs heat)."
    ],
    realWorldApplications: [
      "Traditional Wall Whitewashing: Painting walls with slaked lime, which reacts with atmospheric carbon dioxide to form a gleaming white layer of calcium carbonate.",
      "Grain & Food Storage: Packing dry rations in airtight bins or purging with nitrogen to prevent lipid oxidation and rancidity."
    ],
    quickCheck: [
      {
        id: 'qc-sci-1',
        question: "What type of chemical reaction is the digestion of food in our body?",
        options: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Precipitation reaction"],
        correctIndex: 1,
        explanation: "During digestion, complex food molecules like carbohydrates, proteins, and fats are broken down into simpler substances like glucose and amino acids. This is a decomposition reaction.",
        hint: "Complex food items are broken down into simpler molecules."
      },
      {
        id: 'qc-sci-2',
        question: "Which gas is evolved when zinc granules react with dilute sulphuric acid?",
        options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        correctIndex: 2,
        explanation: "Zn + H₂SO₄ → ZnSO₄ + H₂↑. Hydrogen gas burns with a characteristic pop sound when a burning splinter is brought near.",
        hint: "The gas produces a 'pop' sound with a burning splinter."
      }
    ]
  },

  'Acids, Bases and Salts': {
    id: 'sci-10-acids-bases',
    title: 'Acids, Bases and Salts',
    subtitle: 'Indicators, pH Scale, Neutralization & Important Industrial Salts',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '25 min',
    visualComponent: 'CircuitVisualizer',
    objectives: [
      "Understand properties of acids (sour, turn blue litmus red, release H⁺/H₃O⁺ ions in water)",
      "Understand properties of bases (bitter, soapy, turn red litmus blue, release OH⁻ ions)",
      "Master the pH scale (0 to 14) and explain the importance of pH in soil, digestion, and tooth decay",
      "Examine preparation and uses of Bleaching Powder, Baking Soda, Washing Soda, and Plaster of Paris"
    ],
    introduction: `The sour taste of curd and tamarind, the bitter taste of soap, and the soothing relief provided by baking soda on a bee sting are all direct manifestations of acids and bases. Understanding pH is particularly vital in rural agriculture, where soil acidity directly governs crop yields and fertilizer efficiency.`,
    sections: [
      {
        title: "1. The pH Scale and Its Practical Importance",
        content: `pH stands for 'potenz' (German for power) of Hydrogen.
• pH < 7: Acidic solution (higher H⁺ concentration)
• pH = 7: Neutral solution (pure water)
• pH > 7: Basic solution (higher OH⁻ concentration)

Everyday Importance:
• Agriculture & Soil: Most crops grow best in soil with pH 6.5 to 7.5. If soil is too acidic (pH < 6), farmers treat it with slaked lime (Ca(OH)₂) or quicklime (CaO). If too alkaline, organic manure is added.
• Human Digestion: Our stomach produces hydrochloric acid (pH ~ 1.5 - 3.5) to digest food without harming the stomach lining. During indigestion, antacids like Milk of Magnesia [Mg(OH)₂] neutralize excess acid.
• Tooth Decay: Starts when mouth pH falls below 5.5. Bacteria degrade sugars producing acids that attack tooth enamel (hydroxyapatite). Toothpaste is alkaline to neutralize this acid.`
      },
      {
        title: "2. Common Salts and Their Compounds",
        content: `• Bleaching Powder (CaOCl₂): Produced by the action of chlorine on dry slaked lime:
  Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O.
  Uses: Disinfecting drinking water, bleaching cotton and wood pulp.

• Baking Soda (NaHCO₃ - Sodium Hydrogen Carbonate):
  NaCl + H₂O + CO₂ + NH₃ → NH₄Cl + NaHCO₃.
  Mild non-corrosive basic salt. On heating: 2NaHCO₃ —(Heat)→ Na₂CO₃ + H₂O + CO₂↑.
  Uses: Baking powder (with tartaric acid to prevent bitterness), antacid, soda-acid fire extinguishers.

• Washing Soda (Na₂CO₃·10H₂O):
  Recrystallisation of sodium carbonate: Na₂CO₃ + 10H₂O → Na₂CO₃·10H₂O.
  Uses: Removing permanent hardness of water, glass and soap manufacturing.

• Plaster of Paris [CaSO₄·½H₂O]:
  Prepared by heating gypsum [CaSO₄·2H₂O] at 373 K (100°C).
  On mixing with water, it rehardens into gypsum: CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O.
  Uses: Setting fractured bones, making statues and decorative ceiling moulds.`
      }
    ],
    formulas: [
      { name: "Neutralization", formula: "Acid + Base → Salt + Water", use: "HCl + NaOH → NaCl + H₂O" },
      { name: "Plaster of Paris Hydration", formula: "CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O", use: "Hardening of casting plaster" },
      { name: "Bleaching Powder Formation", formula: "Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O", use: "Water purification chemical" }
    ],
    examples: [
      {
        question: "Why does dry HCl gas not change the colour of dry litmus paper?",
        steps: [
          "Acids produce hydrogen ions (H⁺) or hydronium ions (H₃O⁺) ONLY in the presence of water.",
          "Dry HCl gas has no moisture to dissociate into ions: HCl + H₂O → H₃O⁺ + Cl⁻.",
          "Without free H⁺/H₃O⁺ ions, it cannot demonstrate acidic properties, hence dry litmus does not change."
        ],
        answer: "Free hydronium ions are required, which only form in aqueous conditions."
      }
    ],
    steps: [
      "Always add ACID to WATER slowly with constant stirring, NEVER water to concentrated acid (as intense heat may cause explosive splashing).",
      "Notice that Plaster of Paris must be stored in moisture-proof containers to prevent premature hardening into gypsum."
    ],
    importantPoints: [
      "Nettle sting leaves inject methanoic acid (formic acid), causing burning pain. Nature provides a remedy: rubbing the dock plant leaf (mildly basic) on the spot.",
      "Pure water does not conduct electricity, but rainwater or acidified water conducts due to dissolved ions."
    ],
    commonMistakes: [
      "Heating gypsum beyond 373 K destroys water of crystallisation completely, turning it into 'dead burnt plaster' (anhydrous CaSO₄), which does not set with water.",
      "Confusing baking soda (pure NaHCO₃) with baking powder (mixture of NaHCO₃ and mild edible acid like tartaric acid)."
    ],
    realWorldApplications: [
      "Soil Treatment: Adding agricultural lime to acidic fields to restore optimal nutrient absorption for wheat and paddy.",
      "Well & Tank Sanitation: Using bleaching powder to disinfect village community open wells after monsoon rains."
    ],
    quickCheck: [
      {
        id: 'qc-ab-1',
        question: "A farmer finds the soil of his field is too acidic (pH 5.0). Which compound should he add to neutralize it?",
        options: ["Gypsum", "Common salt", "Quicklime (Calcium Oxide)", "Baking soda"],
        correctIndex: 2,
        explanation: "Quicklime (CaO) or slaked lime (Ca(OH)₂) is basic in nature. Adding it neutralizes excess soil acidity and raises the pH to the healthy 6.5-7.5 range.",
        hint: "A basic compound is needed to neutralize acidity in fields."
      }
    ]
  },

  'Life Processes': {
    id: 'sci-10-life-processes',
    title: 'Life Processes',
    subtitle: 'Nutrition, Respiration, Transportation & Excretion in Living Beings',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '26 min',
    visualComponent: 'CircuitVisualizer',
    objectives: [
      "Differentiate between Autotrophic and Heterotrophic nutrition",
      "Detail the process of photosynthesis: 6CO₂ + 12H₂O + Light → C₆H₁₂O₆ + 6O₂ + 6H₂O",
      "Trace human digestion through the alimentary canal and digestive glands",
      "Compare Aerobic and Anaerobic respiration pathways in yeast, muscle cells, and mitochondria",
      "Explain double circulation in the human heart and transpiration pull in plants",
      "Describe the structure and functioning of a nephron in kidney filtration"
    ],
    introduction: `All living organisms perform maintenance processes to prevent breakdown and decay. These vital operations—nutrition, respiration, circulation, and excretion—are collectively called life processes. Understanding these biological mechanisms is fundamental to human health, agricultural crop physiology, and animal husbandry.`,
    sections: [
      {
        title: "1. Autotrophic & Heterotrophic Nutrition",
        content: `• Autotrophs (Green plants & cyanobacteria): Convert inorganic CO₂ and H₂O into complex carbohydrates using chlorophyll and solar energy.
  Equation: 6CO₂ + 12H₂O —(Chlorophyll + Sunlight)→ C₆H₁₂O₆ + 6O₂ + 6H₂O
  Events: Absorption of light energy → Conversion of light to chemical energy & water splitting → Reduction of CO₂ to carbohydrates.

• Heterotrophic Nutrition:
  - Holozoic: Ingestion of solid food (Humans, Amoeba)
  - Saprophytic: Digestion outside body followed by absorption (Fungi, Bread mould)
  - Parasitic: Nutrition derived without killing host (Cuscuta/Amarbel, Tapeworm)`
      },
      {
        title: "2. Respiration Pathways",
        content: `Glucose (6-carbon) breaks down in the cytoplasm into Pyruvate (3-carbon) + Energy (Glycolysis).
Then, pyruvate takes three distinct pathways:
1. In Absence of O₂ (Yeast fermentation):
   Pyruvate → Ethanol + CO₂ + Energy (2 ATP)
2. In Lack of O₂ (Human muscle cells during vigorous exercise):
   Pyruvate → Lactic acid + Energy (causes muscle cramps!)
3. In Presence of O₂ (Mitochondria - Aerobic):
   Pyruvate → 6CO₂ + 6H₂O + Energy (36-38 ATP - maximum energy release)`
      },
      {
        title: "3. Transportation & Human Heart",
        content: `The human heart is a four-chambered muscular pump designed to separate oxygen-rich blood from carbon dioxide-rich blood:
• Right Atrium & Ventricle: Receive and pump deoxygenated blood to lungs for oxygenation.
• Left Atrium & Ventricle: Receive oxygenated blood from lungs and pump it through the aorta to the rest of the body.
• Double Circulation: Blood passes through the heart TWICE during each complete cycle (Pulmonary circulation + Systemic circulation), ensuring high arterial pressure and efficient oxygen delivery.`
      }
    ],
    formulas: [
      { name: "Photosynthesis Equation", formula: "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O", use: "Production of food and atmospheric oxygen" },
      { name: "Aerobic Cellular Respiration", formula: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP", use: "High-yield biological energy currency" }
    ],
    examples: [
      {
        question: "Why do desert plants take up carbon dioxide at night?",
        steps: [
          "In hot arid environments, keeping stomata open during the day leads to severe water loss through transpiration.",
          "Desert plants open stomata at night to absorb CO₂ and store it as an intermediate acid (malic acid).",
          "During the day, stomata remain closed to conserve water while sunlight is absorbed by chlorophyll to complete carbohydrate synthesis."
        ],
        answer: "Adaptation to prevent transpiration water loss."
      }
    ],
    steps: [
      "Remember that bile contains NO digestive enzymes, but performs critical emulsification of large fat globules.",
      "Nephron filtration occurs in two steps: Ultrafiltration in Bowman's capsule, followed by Selective Reabsorption in the renal tubule."
    ],
    importantPoints: [
      "Arteries carry blood away from heart under high pressure (thick elastic walls, no valves). Veins carry blood towards heart (thin walls, valves present to prevent backflow).",
      "Pulmonary artery is the ONLY artery carrying deoxygenated blood; Pulmonary vein is the ONLY vein carrying oxygenated blood."
    ],
    commonMistakes: [
      "Stating that plants respire only at night (Plants respire 24 hours a day; photosynthesis occurs only in daylight).",
      "Confusing xylem (water/minerals transport upwards via transpiration pull) with phloem (food/sucrose translocation bidirectionally using ATP)."
    ],
    realWorldApplications: [
      "Athletics and Manual Field Labor: Understanding lactic acid accumulation in leg muscles and using gentle warm-down stretching to increase blood flow and remove soreness.",
      "Drip Irrigation Timing: Knowing that stomata transpiration peaks midday, irrigating early morning or evening cuts water waste by up to 50%."
    ],
    quickCheck: [
      {
        id: 'qc-lp-1',
        question: "During cellular respiration in human muscle cells when oxygen is scarce, glucose is converted into:",
        options: ["Ethanol and carbon dioxide", "Lactic acid and energy", "Carbon dioxide and water", "Pyruvate only"],
        correctIndex: 1,
        explanation: "In the lack of oxygen, pyruvate is converted into lactic acid (a 3-carbon molecule), which causes cramping in hard-working muscles.",
        hint: "This substance causes muscle cramps during heavy physical work."
      }
    ]
  },

  'Control and Coordination': {
    id: 'sci-10-control-coord',
    title: 'Control and Coordination',
    subtitle: 'Nervous System, Reflex Arc, Human Brain & Endocrine Hormones',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '22 min',
    visualComponent: 'CircuitVisualizer',
    objectives: [
      "Trace the path of an electrical nerve impulse across a neuron and synapse",
      "Map the components of a Reflex Arc (Receptor → Sensory Neuron → Spinal Cord → Motor Neuron → Effector)",
      "Explain the major regions of the human brain (Forebrain, Midbrain, Hindbrain) and their functions",
      "Analyze plant tropic movements (Phototropism, Geotropism, Hydrotropism, Thigmotropism) and plant hormones",
      "Describe key human endocrine hormones (Insulin, Thyroxine, Adrenaline, Growth Hormone)"
    ],
    introduction: `Organisms must respond swiftly and appropriately to changes in their environment. In animals, rapid coordination is achieved through electrical impulses traveling through neurons and chemical signals through hormones. In plants, directional growth movements respond to light, gravity, and moisture.`,
    sections: [
      {
        title: "1. The Neuron and Synaptic Transmission",
        content: `The neuron is the structural and functional unit of the nervous system:
• Dendrite: Receives environmental stimuli and initiates an electrical impulse.
• Cell Body (Cyton): Integrates incoming signals.
• Axon: Long conduit carrying electrical impulse away from cell body.
• Synapse: Microscopic gap between axonal end of one neuron and dendrite of the next. Electrical impulse cannot jump this gap; it triggers the release of chemical neurotransmitters which diffuse across and trigger a new impulse in the next neuron.`
      },
      {
        title: "2. Plant Hormones (Phytohormones)",
        content: `• Auxin: Synthesized at shoot tips; promotes cell elongation. When light shines on one side, auxin diffuses to the shaded side, stimulating faster elongation and causing the shoot to bend towards light (Phototropism).
• Gibberellin: Promotes stem elongation and fruit enlargement.
• Cytokinin: Promotes active cell division (found in highest concentration in fruits and seeds).
• Abscisic Acid (ABA): Stress hormone; inhibits growth and causes wilting/falling of leaves.`
      }
    ],
    formulas: [
      { name: "Reflex Arc Pathway", formula: "Stimulus → Receptor → Sensory Neuron → Relay Neuron (Spinal Cord) → Motor Neuron → Effector", use: "Instant involuntary protective reflex" }
    ],
    examples: [
      {
        question: "Why is the use of iodised salt advisable?",
        steps: [
          "Iodine is an essential mineral required by the thyroid gland to synthesize the hormone Thyroxine.",
          "Thyroxine regulates carbohydrate, protein, and fat metabolism for optimal body growth.",
          "Deficiency of iodine leads to enlargement of the thyroid gland, known as Goitre (swollen neck)."
        ],
        answer: "Prevents goitre and maintains metabolic growth balance."
      }
    ],
    steps: [
      "Identify the difference between voluntary actions (cerebrum control), involuntary actions (medulla/pons), and reflex actions (spinal cord bypass).",
      "Notice that insulin reduces blood glucose levels, secreted by the pancreas."
    ],
    importantPoints: [
      "Cerebellum coordinates voluntary motor control, body balance, posture, and precision (e.g., riding a bicycle or walking in a straight line).",
      "Adrenaline is the 'fight-or-flight' hormone secreted by adrenal glands during emergencies, accelerating heart rate and glucose release."
    ],
    commonMistakes: [
      "Assuming reflex actions are controlled by the brain (they are coordinated primarily in the spinal cord for rapid survival response).",
      "Confusing auxin (growth promoter) with abscisic acid (growth inhibitor)."
    ],
    realWorldApplications: [
      "Crop Pruning: Farmers pinch off shoot tips (apical bud removal) to reduce apical dominance (auxin inhibition), stimulating bushy lateral branch growth for higher cotton or tea yields."
    ],
    quickCheck: [
      {
        id: 'qc-cc-1',
        question: "Which part of the human brain maintains posture, equilibrium, and precision of voluntary movements?",
        options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
        correctIndex: 1,
        explanation: "The cerebellum (part of hindbrain) is responsible for precision of voluntary actions and maintaining posture and balance of the body.",
        hint: "It is located in the hindbrain and controls balance."
      }
    ]
  },

  'Light': {
    id: 'sci-10-light',
    title: 'Light – Reflection and Refraction',
    subtitle: 'Spherical Mirrors, Snell’s Law, Lenses, Ray Tracing & Optical Power',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '26 min',
    visualComponent: 'OpticsRayDiagram',
    objectives: [
      "State laws of reflection and refraction of light",
      "Construct ray diagrams for Concave and Convex spherical mirrors",
      "Apply the Mirror Formula: 1/f = 1/v + 1/u and Magnification m = -v/u",
      "State Snell's Law of Refraction: n = sin(i) / sin(r) = c / v",
      "Apply the Lens Formula: 1/f = 1/v - 1/u and calculate Optical Power P = 1/f(m)"
    ],
    introduction: `Light is an electromagnetic wave enabling us to perceive the world around us. In this chapter, we discover how curved reflective mirrors and transparent refractive lenses bend light rays, forming the operating principles behind vehicle rear-view mirrors, solar cookers, spectacles, microscopes, and telescopes.`,
    sections: [
      {
        title: "1. Spherical Mirrors & Sign Convention",
        content: `• Concave Mirror: Reflecting surface curves inwards. Converges parallel rays to a focal point F in front of the mirror (f is negative). Used in torches, vehicle headlights, dental mirrors, and large solar concentrators.
• Convex Mirror: Reflecting surface curves outwards. Diverges rays, always producing an erect, diminished, virtual image with a wide field of view (f is positive). Used as vehicle rear-view mirrors.

New Cartesian Sign Convention:
• Distances measured in direction of incident light are positive (+); opposite to incident light are negative (-).
• Object is always placed to the left: u is ALWAYS negative.
• Heights measured upwards (+), downwards (-).

Mirror Formula:
1 / f = 1 / v + 1 / u
Linear Magnification: m = h'/h = - v / u`
      },
      {
        title: "2. Refraction & Snell's Law",
        content: `Refraction is the bending of light as it passes obliquely from one transparent medium to another due to change in wave speed:
• From Rarer to Denser (e.g. Air to Glass): Bends TOWARDS the normal.
• From Denser to Rarer (e.g. Glass to Air): Bends AWAY from the normal.

Snell's Law:
sin(i) / sin(r) = Constant (n₂₁) = v₁ / v₂
Absolute Refractive Index: n = c / v (where c = 3 × 10⁸ m/s).`
      },
      {
        title: "3. Lenses & Optical Power",
        content: `• Convex Lens: Thicker at center, converging lens (f is positive).
• Concave Lens: Thicker at edges, diverging lens (f is negative).

Lens Formula:
1 / f = 1 / v - 1 / u
Magnification: m = h'/h = + v / u

Power of a Lens:
P = 1 / f (in metres).
Unit: Dioptre (D). A convex lens of f = +50 cm (+0.5 m) has power P = +2.0 D.`
      }
    ],
    formulas: [
      { name: "Mirror Formula", formula: "1/f = 1/v + 1/u", use: "Relates object distance, image distance, and focal length for mirrors" },
      { name: "Lens Formula", formula: "1/f = 1/v - 1/u", use: "Relates distances for refractive lenses" },
      { name: "Snell's Law", formula: "sin(i) / sin(r) = n₂ / n₁", use: "Calculates angular bending of light rays" },
      { name: "Optical Power", formula: "P = 1 / f (in metres)", use: "Strength of spectacle correction in Dioptres" }
    ],
    examples: [
      {
        question: "A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, find the position, nature, and size of the image.",
        steps: [
          "Radius of curvature R = +3.00 m → focal length f = R/2 = +1.50 m. Object distance u = -5.00 m.",
          "Using Mirror Formula: 1/v = 1/f - 1/u = 1/(1.50) - 1/(-5.00) = 1/1.5 + 1/5 = 10/15 + 3/15 = 13/15",
          "v = 15 / 13 = +1.15 m behind the mirror.",
          "Magnification m = -v/u = - (1.15) / (-5.00) = +0.23 (Virtual, erect, diminished)."
        ],
        answer: "Image formed 1.15 m behind mirror; virtual, erect, and reduced to 23% of original size."
      }
    ],
    steps: [
      "Always convert focal length to metres before calculating lens power in Dioptres (e.g. 25 cm = 0.25 m → P = 1/0.25 = +4 D).",
      "Remember: u is always negative in all coordinate calculations."
    ],
    importantPoints: [
      "Magnification m is negative for real & inverted images, positive for virtual & erect images.",
      "Diamonds sparkle with extraordinary brilliance because of high refractive index (2.42) and small critical angle (24.4°), trapping light via total internal reflection."
    ],
    commonMistakes: [
      "Mixing up signs between Mirror Formula (+ between terms) and Lens Formula (- between terms).",
      "Using cm directly in Dioptre calculation without dividing by 100."
    ],
    realWorldApplications: [
      "Solar Cookers: Concentrating sunlight onto a black cooking pot using a large concave mirror, reaching temperatures over 150°C without wood or gas fuel.",
      "Tractor Headlights: Placing filament bulbs at the focus of concave reflectors to produce a powerful parallel beam illuminating distant fields at night."
    ],
    quickCheck: [
      {
        id: 'qc-light-1',
        question: "What is the focal length of a lens having an optical power of -2.0 Dioptres?",
        options: ["-50 cm", "+50 cm", "-20 cm", "+20 cm"],
        correctIndex: 0,
        explanation: "P = 1/f → f = 1/P = 1/(-2.0) = -0.5 m = -50 cm. The negative sign indicates a diverging (concave) lens.",
        hint: "Use f = 1 / P (in metres) and convert to cm."
      }
    ]
  },

  'Human Eye and Colourful World': {
    id: 'sci-10-human-eye',
    title: 'The Human Eye and the Colourful World',
    subtitle: 'Eye Anatomy, Vision Defects & Corrections, Prism Dispersion & Atmospheric Phenomena',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '22 min',
    visualComponent: 'OpticsRayDiagram',
    objectives: [
      "Identify the parts of the human eye (cornea, iris, pupil, crystalline lens, ciliary muscles, retina)",
      "Explain the power of accommodation and the normal near/far points of vision",
      "Diagnose and correct Myopia, Hypermetropia, and Presbyopia using appropriate lenses",
      "Explain refraction of light through a glass prism and dispersion into VIBGYOR colors",
      "Explain why the sky appears blue, why stars twinkle, and why danger signals are red"
    ],
    introduction: `The human eye is one of the most remarkable optical instruments, allowing us to see millions of shades and adapt to bright afternoon sunshine as well as twilight stars. In this chapter, we study eye anatomy, how corrective lenses restore clear eyesight, and why the sky scatters blue while sunset glows crimson.`,
    sections: [
      {
        title: "1. Defects of Vision and Their Correction",
        content: `• Myopia (Near-sightedness): A person can see nearby objects clearly but cannot see distant objects distinctly. The far point is closer than infinity. The image of a distant object forms IN FRONT of the retina.
  Causes: Excessive curvature of the eye lens OR elongation of the eyeball.
  Correction: Concave (diverging) lens of suitable power.

• Hypermetropia (Far-sightedness): A person can see distant objects clearly but cannot see nearby objects distinctly. Near point recedes beyond 25 cm. Image forms BEHIND the retina.
  Causes: Focal length of eye lens too long OR eyeball too short.
  Correction: Convex (converging) lens of suitable power.

• Presbyopia: Aging eye loses accommodation power as ciliary muscles weaken. Corrected with bifocal lenses (upper concave for distance, lower convex for reading).`
      },
      {
        title: "2. Atmospheric Refraction & Scattering of Light",
        content: `• Twinkling of Stars: Starlight travels through varying atmospheric air layers of fluctuating temperature and refractive index. The apparent position shifts continuously, causing the intensity of light entering the eye to flicker.
• Advance Sunrise and Delayed Sunset: Because of atmospheric refraction, the sun is visible about 2 minutes before actual horizon crossing and 2 minutes after sunset, lengthening apparent day length by 4 minutes!
• Rayleigh Scattering: Intensity of scattered light is inversely proportional to the 4th power of wavelength: I ∝ 1/λ⁴. Blue light has a much shorter wavelength than red light, so it scatters nearly 16 times more, giving the sky its deep blue hue.
• Red Danger Signals: Red light has the longest visible wavelength and scatters the least by smoke or fog, remaining visible from the greatest distance.`
      }
    ],
    formulas: [
      { name: "Near Point of Normal Eye", formula: "D = 25 cm", use: "Least distance of distinct vision" },
      { name: "Rayleigh Scattering Law", formula: "I ∝ 1 / λ⁴", use: "Explains blue sky and red sunsets" }
    ],
    examples: [
      {
        question: "A person with a myopic eye cannot see objects beyond 1.2 m distinctly. What should be the type and power of the lens used to restore proper vision?",
        steps: [
          "For distant viewing, object distance u = -∞, image must form at far point v = -1.2 m.",
          "Using lens formula: 1/f = 1/v - 1/u = 1/(-1.2) - 1/(-∞) = -1/1.2",
          "f = -1.2 m",
          "Power P = 1 / f = 1 / (-1.2) = -0.83 D (Concave lens of power -0.83 D)."
        ],
        answer: "Concave lens of power -0.83 Dioptres."
      }
    ],
    steps: [
      "In myopia questions: set u = -∞, v = -(far point).",
      "In hypermetropia questions: set u = -25 cm, v = -(defective near point)."
    ],
    importantPoints: [
      "Cornea acts as the primary refractive surface, contributing about 70-80% of the eye's total optical power.",
      "If the Earth had no atmosphere, the sky would appear completely black even in daytime, exactly as seen by astronauts on the Moon."
    ],
    commonMistakes: [
      "Assuming planets twinkle like stars (Planets are closer and act as extended sources, averaging out fluctuations so they do not twinkle).",
      "Prescribing a convex lens for myopia (myopia requires a concave lens!)."
    ],
    realWorldApplications: [
      "Community Vision Camps: Mobile eye screening clinics in rural panchayats measuring refractive errors and providing subsidized spectacles to schoolchildren and elderly weavers."
    ],
    quickCheck: [
      {
        id: 'qc-eye-1',
        question: "Which type of lens is used by an optometrist to correct hypermetropia (far-sightedness)?",
        options: ["Concave lens", "Convex lens", "Cylindrical lens", "Plano-concave lens"],
        correctIndex: 1,
        explanation: "Hypermetropia causes incoming light rays from near objects to focus behind the retina. A convex (converging) lens provides extra convergence to focus images directly on the retina.",
        hint: "A converging lens is needed to pull the focal point forward onto the retina."
      }
    ]
  },

  'Electricity': {
    id: 'sci-10-electricity',
    title: 'Electricity',
    subtitle: 'Current, Potential Difference, Ohm’s Law, Circuit Combinations, Joule Heating & Power',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '26 min',
    visualComponent: 'CircuitVisualizer',
    objectives: [
      "Define electric current I = Q/t and potential difference V = W/Q",
      "State Ohm's Law (V = IR) and identify factors affecting resistance (R = ρL/A)",
      "Calculate equivalent resistance in Series (Rₛ = R₁ + R₂ + ...) and Parallel (1/Rₚ = 1/R₁ + 1/R₂ + ...)",
      "State Joule's Law of Heating: H = I²Rt",
      "Compute electric power P = VI = I²R = V²/R and calculate commercial energy consumption in kWh"
    ],
    introduction: `Electricity is one of the most versatile forms of energy powering modern life—lighting homes, running irrigation pumps, charging mobile batteries, and spinning grain flour mills. In this chapter, we master circuit laws and calculate electricity bills from first principles.`,
    sections: [
      {
        title: "1. Ohm's Law and Factors Affecting Resistance",
        content: `Ohm's Law:
The potential difference (V) across the ends of a metallic conductor is directly proportional to the current (I) flowing through it, provided temperature remains constant:
V = I · R
Where R is the resistance (measured in Ohms, Ω).

Factors determining Resistance:
R = ρ · (L / A)
1. Length (L): R ∝ L (Doubling wire length doubles resistance).
2. Cross-sectional Area (A): R ∝ 1/A (Thick wires offer less resistance).
3. Resistivity (ρ): Material property. Metals and alloys have low resistivity (10⁻⁸ to 10⁻⁶ Ω·m); insulators like rubber have extremely high resistivity (10¹² to 10¹⁷ Ω·m).
Alloys like Nichrome have high resistivity and do not oxidize (burn) at high temperatures, making them ideal heating elements.`
      },
      {
        title: "2. Resistors in Series and Parallel",
        content: `• Series Combination:
  - Same current flows through all resistors: I = I₁ = I₂ = I₃
  - Total voltage divides: V = V₁ + V₂ + V₃
  - Equivalent Resistance: Rₛ = R₁ + R₂ + R₃
  Disadvantage: If one component fails, the entire circuit breaks!

• Parallel Combination:
  - Same potential difference across all branches: V = V₁ = V₂ = V₃
  - Current divides according to branch resistance: I = I₁ + I₂ + I₃
  - Equivalent Resistance: 1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃
  Advantages for Household Circuits: Each appliance operates at full mains voltage, draws current independently, and has its own on/off switch.`
      },
      {
        title: "3. Electric Power & Commercial Units",
        content: `Electric Power: P = V · I = I²R = V² / R (Unit: Watt, W).
1 Kilowatt (kW) = 1,000 W.

Commercial Unit of Electrical Energy: Kilowatt-hour (kWh), commonly called 1 "Unit" on electricity meters:
1 kWh = 1,000 W × 3,600 s = 3.6 × 10⁶ Joules.`
      }
    ],
    formulas: [
      { name: "Ohm's Law", formula: "V = I · R", use: "Relates voltage, current, and resistance" },
      { name: "Resistance Law", formula: "R = ρ(L / A)", use: "Calculates wire resistance from material properties" },
      { name: "Series Resistance", formula: "Rₛ = R₁ + R₂ + R₃", use: "Total resistance of chain" },
      { name: "Parallel Resistance", formula: "1/Rₚ = 1/R₁ + 1/R₂", use: "Combined resistance of parallel branches" },
      { name: "Joule's Heating Law", formula: "H = I² · R · t", use: "Heat produced in electric geysers, irons, chulhas" },
      { name: "Commercial Unit", formula: "1 kWh = 3.6 × 10⁶ J", use: "Calculates monthly electricity meter units" }
    ],
    examples: [
      {
        question: "An electric refrigerator rated 400 W operates 8 hours/day. What is the cost of energy to operate it for 30 days at ₹5.00 per kWh?",
        steps: [
          "Total energy consumed in 30 days = Power × Time × Days",
          "Energy = 400 W × 8 h/day × 30 days = 96,000 Watt-hours (Wh)",
          "Convert to kWh: 96,000 / 1000 = 96 kWh (units)",
          "Cost = 96 units × ₹5.00 = ₹480.00"
        ],
        answer: "Total operational cost = ₹480.00"
      }
    ],
    steps: [
      "In parallel combinations, equivalent resistance is ALWAYS smaller than the smallest individual resistor.",
      "An ammeter is always connected in SERIES (low internal resistance); a voltmeter is connected in PARALLEL (high resistance).",
      "Electric fuses are always placed in the LIVE wire and consist of low melting point alloy to blow safely during overcurrent."
    ],
    importantPoints: [
      "Tungsten is universally chosen for incandescent filaments because of its extraordinarily high melting point (3,380°C).",
      "Pure copper and aluminium are used for long-distance electricity transmission lines due to their very low resistivity."
    ],
    commonMistakes: [
      "Calculating 1 kWh as 3.6 × 10⁵ J instead of 3.6 × 10⁶ J.",
      "Connecting an ammeter in parallel (which can blow the meter fuse due to massive short-circuit current)."
    ],
    realWorldApplications: [
      "Solar Water Pumps: Sizing wire gauge from solar panels to submersible pumps to minimize $I^2R$ power transmission drop over 50-metre trench distances.",
      "Rural Home Wiring: Wiring LED lights and charging points in parallel so turning off a barn light does not shut off domestic fans."
    ],
    quickCheck: [
      {
        id: 'qc-elec-1',
        question: "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?",
        options: ["9 Ω", "2 Ω", "4.5 Ω", "18 Ω"],
        correctIndex: 1,
        explanation: "1/Rₚ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → Rₚ = 2 Ω. Notice that 2 Ω is smaller than both 6 Ω and 3 Ω.",
        hint: "Use the parallel formula: (R₁ × R₂) / (R₁ + R₂)."
      },
      {
        id: 'qc-elec-2',
        question: "Commercial 1 'Unit' of electrical energy equals:",
        options: ["1000 Joules", "3.6 × 10⁵ Joules", "3.6 × 10⁶ Joules", "3600 Joules"],
        correctIndex: 2,
        explanation: "1 kWh = 1000 Watts × 3600 seconds = 3,600,000 Joules = 3.6 × 10⁶ J.",
        hint: "1 kilowatt × 1 hour in seconds."
      }
    ]
  },

  'Our Environment': {
    id: 'sci-10-our-environment',
    title: 'Our Environment',
    subtitle: 'Ecosystems, Food Chains & Webs, 10% Energy Flow, Biomagnification & Ozone Layer',
    classId: 'Class 10',
    subjectId: 'Science',
    readTime: '20 min',
    visualComponent: 'CircuitVisualizer',
    objectives: [
      "Define biotic and abiotic components of an ecosystem",
      "Trace trophic levels in terrestrial and aquatic food chains",
      "Apply Lindeman's 10% Energy Transfer Law between trophic levels",
      "Explain Biological Magnification of non-biodegradable agricultural pesticides",
      "Analyze Ozone Layer depletion (CFCs) and manage solid waste responsibly"
    ],
    introduction: `Everything that surrounds us forms our environment. The soil beneath our fields, the water channels we drink from, the crops we tend, and the insects that pollinate our flowers are intricately tied in fragile ecological loops. Understanding ecosystems helps rural communities protect soil fertility, water bodies, and public health.`,
    sections: [
      {
        title: "1. Food Chains and the 10% Law",
        content: `Energy enters ecosystems via solar radiation captured by green autotrophs (producers).
Trophic Levels:
Producers (Grass) → Primary Consumers (Herbivores - Deer) → Secondary Consumers (Carnivores - Tiger) → Tertiary Consumers (Top Predators).

Lindeman's 10% Law:
Only about 10% of the energy stored as organic biomass in one trophic level is transferred to the next higher level. The remaining 90% is dissipated as metabolic heat during respiration, digestion, movement, and life maintenance.
Because energy diminishes so rapidly at each transfer step, food chains rarely exceed 4 to 5 trophic levels.`
      },
      {
        title: "2. Biological Magnification & Waste Management",
        content: `• Biological Magnification:
Non-biodegradable chemicals like DDT, synthetic pesticide sprays, and heavy metals cannot be broken down by biological metabolism. These toxins enter aquatic or crop food chains and accumulate in progressively higher concentrations at each consecutive trophic level. As humans occupy the topmost trophic tier, the highest concentration of toxic residues accumulates in our bodies!

• Ozone Layer (O₃) Depletion:
Ozone in the stratosphere shields the Earth from harmful solar ultraviolet (UV) radiation (which causes skin cancer, cataract, and crop mutation).
Ozone is formed photochemically: O₂ —(UV)→ O + O;  O + O₂ → O₃.
Chlorofluorocarbons (CFCs) used in old refrigeration units split in the upper atmosphere, releasing chlorine radicals that catalytically break down millions of ozone molecules.`
      }
    ],
    formulas: [
      { name: "10% Law of Energy", formula: "Energy at Level (n+1) = 10% × Energy at Level (n)", use: "Calculates available energy up the food pyramid" },
      { name: "Ozone Photochemical Formation", formula: "O₂ —(UV)→ O + O ; O + O₂ → O₃", use: "Atmospheric protective ozone generation" }
    ],
    examples: [
      {
        question: "If 20,000 J of solar energy is available to producers, how much energy will be transferred to secondary consumers in the chain: Grass → Deer → Tiger?",
        steps: [
          "Green plants trap approximately 1% of total incident sunlight hitting leaves: 1% of 20,000 J = 200 J captured by Grass (Producers).",
          "Applying 10% Law: Deer (Primary Consumer) gets 10% of 200 J = 20 J.",
          "Tiger (Secondary Consumer) gets 10% of 20 J = 2 Joules."
        ],
        answer: "Only 2 Joules of energy reaches the tiger."
      }
    ],
    steps: [
      "Classify waste into Biodegradable (cow dung, agricultural husk, kitchen peelings) vs Non-biodegradable (plastic sheets, battery acid, synthetic nylon).",
      "Notice that flow of energy in an ecosystem is always UNIDIRECTIONAL (cannot flow backward from consumer to sun)."
    ],
    importantPoints: [
      "Decomposers (bacteria and fungi) replenish the soil by breaking down complex organic dead matter into simple inorganic nutrients.",
      "Bio-magnification affects the TOP predator the most severely."
    ],
    commonMistakes: [
      "Confusing energy flow (strictly unidirectional) with nutrient cycling (cyclic between biotic and abiotic components).",
      "Thinking ozone layer depletion is the primary cause of global warming (Ozone hole is UV protection failure; global warming is caused by greenhouse gases trapping infrared heat)."
    ],
    realWorldApplications: [
      "Composting & Biogas Plants: Converting agricultural crop stubble and cattle waste into methane fuel for lighting and high-nitrogen organic manure, eliminating hazardous stubble burning.",
      "Organic Pest Control: Replacing synthetic persistent chemical pesticides with neem extract and bio-controls to prevent poisonous pesticide biomagnification in local milk supplies."
    ],
    quickCheck: [
      {
        id: 'qc-env-1',
        question: "In a food chain consisting of Grass → Grasshopper → Frog → Snake → Hawk, which organism will have the maximum concentration of non-biodegradable pesticides due to biomagnification?",
        options: ["Grass", "Grasshopper", "Frog", "Hawk"],
        correctIndex: 3,
        explanation: "Pesticides cannot be metabolized or excreted, so their concentration progressively increases at each successive trophic tier. The top predator (Hawk) accumulates the highest biological magnification.",
        hint: "The organism at the very highest trophic tier accumulates the most toxins."
      }
    ]
  }
};
