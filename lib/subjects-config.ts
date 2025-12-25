// Subject configuration for all SPM subjects

export interface SubjectTopic {
  chapter: string;
  title: string;
  form: number;
  keyTopics: string[];
  keyTerms?: string[];
}

export interface Subject {
  id: string;
  name: string;
  nameBM: string;
  icon: string;
  color: string;
  description: string;
  descriptionBM: string;
  topics: SubjectTopic[];
}

export const SUBJECTS: Record<string, Subject> = {
  mathematics: {
    id: 'mathematics',
    name: 'Mathematics',
    nameBM: 'Matematik',
    icon: '📐',
    color: 'mathematics',
    description: 'Core mathematics covering algebra, geometry, statistics and more',
    descriptionBM: 'Matematik teras meliputi algebra, geometri, statistik dan banyak lagi',
    topics: [
      // Form 4
      {
        chapter: 'bab1',
        title: 'Standard Form',
        form: 4,
        keyTopics: [
          'Writing numbers in standard form',
          'Operations in standard form',
          'Significant figures',
          'Decimal places',
        ],
        keyTerms: ['Standard form', 'Significant figures', 'Decimal places', 'Scientific notation'],
      },
      {
        chapter: 'bab2',
        title: 'Quadratic Expressions and Equations',
        form: 4,
        keyTopics: [
          'Expanding algebraic expressions',
          'Factorisation',
          'Quadratic equations',
          'Completing the square',
          'Quadratic formula',
        ],
        keyTerms: ['Factorisation', 'Roots', 'Quadratic formula', 'Completing the square'],
      },
      {
        chapter: 'bab3',
        title: 'Sets',
        form: 4,
        keyTopics: [
          'Set notation and representation',
          'Venn diagrams',
          'Operations on sets',
          'Union, intersection, complement',
        ],
        keyTerms: ['Universal set', 'Subset', 'Union', 'Intersection', 'Complement', 'Venn diagram'],
      },
      {
        chapter: 'bab4',
        title: 'Mathematical Reasoning',
        form: 4,
        keyTopics: [
          'Statements',
          'Quantifiers',
          'Operations on statements',
          'Implications',
          'Arguments',
        ],
        keyTerms: ['Statement', 'Quantifier', 'Implication', 'Converse', 'Argument'],
      },
      {
        chapter: 'bab5',
        title: 'Graphs of Functions',
        form: 4,
        keyTopics: [
          'Linear functions',
          'Quadratic functions',
          'Cubic functions',
          'Reciprocal functions',
        ],
        keyTerms: ['Function', 'Domain', 'Range', 'Axis of symmetry', 'Maximum point', 'Minimum point'],
      },
      // Form 5
      {
        chapter: 'bab6',
        title: 'Progressions',
        form: 5,
        keyTopics: [
          'Arithmetic progressions',
          'Geometric progressions',
          'Sum of terms',
        ],
        keyTerms: ['Arithmetic progression', 'Geometric progression', 'Common difference', 'Common ratio'],
      },
      {
        chapter: 'bab7',
        title: 'Linear Law',
        form: 5,
        keyTopics: [
          'Reducing non-linear relations to linear form',
          'Drawing line of best fit',
          'Applications',
        ],
        keyTerms: ['Linear law', 'Gradient', 'y-intercept', 'Line of best fit'],
      },
      {
        chapter: 'bab8',
        title: 'Coordinate Geometry',
        form: 5,
        keyTopics: [
          'Distance between two points',
          'Midpoint',
          'Area of triangles and polygons',
          'Equation of straight line',
        ],
        keyTerms: ['Gradient', 'Parallel lines', 'Perpendicular lines', 'Point of intersection'],
      },
      {
        chapter: 'bab9',
        title: 'Differentiation',
        form: 5,
        keyTopics: [
          'Gradient of a curve',
          'Derivatives',
          'Small changes and approximations',
          'Rates of change',
          'Maximum and minimum',
        ],
        keyTerms: ['Derivative', 'Gradient', 'Turning point', 'Maximum', 'Minimum'],
      },
      {
        chapter: 'bab10',
        title: 'Solution of Triangles',
        form: 5,
        keyTopics: [
          'Sine rule',
          'Cosine rule',
          'Area of triangle',
        ],
        keyTerms: ['Sine rule', 'Cosine rule', 'Included angle'],
      },
    ],
  },

  addMath: {
    id: 'addMath',
    name: 'Additional Mathematics',
    nameBM: 'Matematik Tambahan',
    icon: '🧮',
    color: 'mathematics',
    description: 'Advanced mathematics for SPM students',
    descriptionBM: 'Matematik lanjutan untuk pelajar SPM',
    topics: [
      // Form 4
      {
        chapter: 'bab1',
        title: 'Functions',
        form: 4,
        keyTopics: [
          'Function notation',
          'Types of functions',
          'Composite functions',
          'Inverse functions',
        ],
        keyTerms: ['Function', 'Domain', 'Range', 'Composite function', 'Inverse function'],
      },
      {
        chapter: 'bab2',
        title: 'Quadratic Equations',
        form: 4,
        keyTopics: [
          'Solving quadratic equations',
          'Types of roots',
          'Quadratic inequalities',
          'Applications',
        ],
        keyTerms: ['Discriminant', 'Real roots', 'Equal roots', 'No real roots'],
      },
      {
        chapter: 'bab3',
        title: 'Simultaneous Equations',
        form: 4,
        keyTopics: [
          'Linear equations',
          'One linear and one non-linear',
          'Substitution and elimination methods',
        ],
        keyTerms: ['Simultaneous equations', 'Substitution', 'Elimination'],
      },
      {
        chapter: 'bab4',
        title: 'Indices and Logarithms',
        form: 4,
        keyTopics: [
          'Laws of indices',
          'Laws of logarithms',
          'Solving equations',
        ],
        keyTerms: ['Indices', 'Logarithm', 'Base', 'Exponent'],
      },
      {
        chapter: 'bab5',
        title: 'Coordinate Geometry',
        form: 4,
        keyTopics: [
          'Gradient and distance',
          'Parallel and perpendicular lines',
          'Area of polygons',
        ],
        keyTerms: ['Gradient', 'Perpendicular bisector', 'Locus'],
      },
      // Form 5
      {
        chapter: 'bab6',
        title: 'Differentiation',
        form: 5,
        keyTopics: [
          'First principles',
          'Differentiation techniques',
          'Applications of differentiation',
          'Maximum and minimum problems',
        ],
        keyTerms: ['Derivative', 'Stationary point', 'Maximum', 'Minimum', 'Point of inflexion'],
      },
      {
        chapter: 'bab7',
        title: 'Integration',
        form: 5,
        keyTopics: [
          'Indefinite integrals',
          'Definite integrals',
          'Area under curves',
          'Volume of revolution',
        ],
        keyTerms: ['Integration', 'Constant of integration', 'Definite integral', 'Area under curve'],
      },
      {
        chapter: 'bab8',
        title: 'Vectors',
        form: 5,
        keyTopics: [
          'Vector notation',
          'Magnitude and direction',
          'Vector operations',
          'Applications',
        ],
        keyTerms: ['Vector', 'Scalar', 'Magnitude', 'Unit vector', 'Position vector'],
      },
      {
        chapter: 'bab9',
        title: 'Trigonometric Functions',
        form: 5,
        keyTopics: [
          'Negative angles',
          'Angles greater than 360°',
          'Trigonometric identities',
          'Solving trigonometric equations',
        ],
        keyTerms: ['Trigonometric identity', 'Periodicity', 'Amplitude'],
      },
      {
        chapter: 'bab10',
        title: 'Permutations and Combinations',
        form: 5,
        keyTopics: [
          'Factorial notation',
          'Permutations',
          'Combinations',
          'Applications',
        ],
        keyTerms: ['Permutation', 'Combination', 'Factorial'],
      },
    ],
  },

  physics: {
    id: 'physics',
    name: 'Physics',
    nameBM: 'Fizik',
    icon: '⚛️',
    color: 'physics',
    description: 'Understanding matter, energy, and their interactions',
    descriptionBM: 'Memahami jirim, tenaga, dan interaksi mereka',
    topics: [
      // Form 4
      {
        chapter: 'bab1',
        title: 'Introduction to Physics',
        form: 4,
        keyTopics: [
          'Physical quantities and units',
          'Measurements',
          'Scientific investigation',
          'Safety in laboratory',
        ],
        keyTerms: ['Base quantity', 'Derived quantity', 'SI unit', 'Prefixes'],
      },
      {
        chapter: 'bab2',
        title: 'Force and Motion',
        form: 4,
        keyTopics: [
          'Linear motion',
          'Graphs of motion',
          'Free fall',
          'Inertia and momentum',
          'Force and acceleration',
        ],
        keyTerms: ['Velocity', 'Acceleration', 'Momentum', 'Inertia', 'Newton\'s laws'],
      },
      {
        chapter: 'bab3',
        title: 'Gravitation',
        form: 4,
        keyTopics: [
          'Gravitational force',
          'Weight',
          'Gravitational acceleration',
          'Man-made satellites',
        ],
        keyTerms: ['Gravitational field', 'Weight', 'Mass', 'Satellite', 'Orbit'],
      },
      {
        chapter: 'bab4',
        title: 'Heat',
        form: 4,
        keyTopics: [
          'Thermal equilibrium',
          'Specific heat capacity',
          'Specific latent heat',
          'Gas laws',
        ],
        keyTerms: ['Thermal equilibrium', 'Specific heat capacity', 'Latent heat', 'Gas laws'],
      },
      {
        chapter: 'bab5',
        title: 'Light',
        form: 4,
        keyTopics: [
          'Reflection',
          'Refraction',
          'Lenses',
          'Applications of lenses',
        ],
        keyTerms: ['Reflection', 'Refraction', 'Convex lens', 'Concave lens', 'Focal length'],
      },
      // Form 5
      {
        chapter: 'bab6',
        title: 'Waves',
        form: 5,
        keyTopics: [
          'Wave motion',
          'Wave properties',
          'Sound waves',
          'Electromagnetic waves',
        ],
        keyTerms: ['Wavelength', 'Frequency', 'Amplitude', 'Electromagnetic spectrum'],
      },
      {
        chapter: 'bab7',
        title: 'Electricity',
        form: 5,
        keyTopics: [
          'Electric charge',
          'Current and potential difference',
          'Resistance',
          'Electrical energy and power',
          'Series and parallel circuits',
        ],
        keyTerms: ['Current', 'Voltage', 'Resistance', 'Ohm\'s law', 'Power'],
      },
      {
        chapter: 'bab8',
        title: 'Electromagnetism',
        form: 5,
        keyTopics: [
          'Magnetic fields',
          'Electromagnetic induction',
          'Transformers',
          'Applications',
        ],
        keyTerms: ['Magnetic field', 'Electromagnetic induction', 'Transformer', 'AC', 'DC'],
      },
      {
        chapter: 'bab9',
        title: 'Electronics',
        form: 5,
        keyTopics: [
          'Semiconductor diodes',
          'Transistors',
          'Logic gates',
          'Applications',
        ],
        keyTerms: ['Diode', 'Transistor', 'Logic gate', 'AND', 'OR', 'NOT'],
      },
      {
        chapter: 'bab10',
        title: 'Radioactivity',
        form: 5,
        keyTopics: [
          'Radioactive decay',
          'Types of radiation',
          'Half-life',
          'Applications and safety',
        ],
        keyTerms: ['Radioactivity', 'Alpha', 'Beta', 'Gamma', 'Half-life'],
      },
    ],
  },

  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    nameBM: 'Kimia',
    icon: '🧪',
    color: 'chemistry',
    description: 'Study of matter, its properties and transformations',
    descriptionBM: 'Kajian jirim, sifat dan transformasinya',
    topics: [
      // Form 4
      {
        chapter: 'bab1',
        title: 'Introduction to Chemistry',
        form: 4,
        keyTopics: [
          'Matter and its states',
          'Atomic structure',
          'Proton number and nucleon number',
          'Isotopes',
        ],
        keyTerms: ['Atom', 'Molecule', 'Element', 'Compound', 'Isotope'],
      },
      {
        chapter: 'bab2',
        title: 'The Structure of the Atom',
        form: 4,
        keyTopics: [
          'Subatomic particles',
          'Electron arrangement',
          'Valence electrons',
        ],
        keyTerms: ['Proton', 'Neutron', 'Electron', 'Electron arrangement', 'Valence electron'],
      },
      {
        chapter: 'bab3',
        title: 'Chemical Formulae and Equations',
        form: 4,
        keyTopics: [
          'Chemical formulae',
          'Balanced equations',
          'Ionic equations',
          'Mole concept',
        ],
        keyTerms: ['Chemical formula', 'Balanced equation', 'Mole', 'Avogadro constant'],
      },
      {
        chapter: 'bab4',
        title: 'Periodic Table',
        form: 4,
        keyTopics: [
          'Arrangement of elements',
          'Groups and periods',
          'Trends in periodic table',
        ],
        keyTerms: ['Periodic table', 'Group', 'Period', 'Metal', 'Non-metal'],
      },
      {
        chapter: 'bab5',
        title: 'Chemical Bonds',
        form: 4,
        keyTopics: [
          'Ionic bonds',
          'Covalent bonds',
          'Dative bonds',
          'Properties of compounds',
        ],
        keyTerms: ['Ionic bond', 'Covalent bond', 'Dative bond', 'Electrovalent bond'],
      },
      // Form 5
      {
        chapter: 'bab6',
        title: 'Acids and Bases',
        form: 5,
        keyTopics: [
          'Properties of acids and bases',
          'pH scale',
          'Neutralisation',
          'Salt preparation',
        ],
        keyTerms: ['Acid', 'Base', 'pH', 'Neutralisation', 'Salt'],
      },
      {
        chapter: 'bab7',
        title: 'Rate of Reaction',
        form: 5,
        keyTopics: [
          'Factors affecting rate',
          'Collision theory',
          'Catalysts',
        ],
        keyTerms: ['Rate of reaction', 'Collision theory', 'Activation energy', 'Catalyst'],
      },
      {
        chapter: 'bab8',
        title: 'Manufactured Substances in Industry',
        form: 5,
        keyTopics: [
          'Alloys',
          'Polymers',
          'Glass and ceramics',
          'Composite materials',
        ],
        keyTerms: ['Alloy', 'Polymer', 'Monomer', 'Composite material'],
      },
      {
        chapter: 'bab9',
        title: 'Carbon Compounds',
        form: 5,
        keyTopics: [
          'Hydrocarbons',
          'Alcohols',
          'Carboxylic acids',
          'Esters',
        ],
        keyTerms: ['Hydrocarbon', 'Alcohol', 'Carboxylic acid', 'Ester', 'Organic compound'],
      },
      {
        chapter: 'bab10',
        title: 'Oxidation and Reduction',
        form: 5,
        keyTopics: [
          'Oxidation and reduction',
          'Redox reactions',
          'Electrochemical series',
        ],
        keyTerms: ['Oxidation', 'Reduction', 'Redox', 'Oxidising agent', 'Reducing agent'],
      },
    ],
  },

  biology: {
    id: 'biology',
    name: 'Biology',
    nameBM: 'Biologi',
    icon: '🧬',
    color: 'biology',
    description: 'Study of living organisms and life processes',
    descriptionBM: 'Kajian organisma hidup dan proses kehidupan',
    topics: [
      // Form 4
      {
        chapter: 'bab1',
        title: 'Introduction to Biology',
        form: 4,
        keyTopics: [
          'Scientific investigation',
          'Cell structure',
          'Cell organisation',
        ],
        keyTerms: ['Cell', 'Tissue', 'Organ', 'System', 'Microscope'],
      },
      {
        chapter: 'bab2',
        title: 'Movement of Substances Across the Plasma Membrane',
        form: 4,
        keyTopics: [
          'Diffusion',
          'Osmosis',
          'Active transport',
        ],
        keyTerms: ['Diffusion', 'Osmosis', 'Active transport', 'Plasma membrane'],
      },
      {
        chapter: 'bab3',
        title: 'Chemical Composition of the Cell',
        form: 4,
        keyTopics: [
          'Carbohydrates',
          'Proteins',
          'Lipids',
          'Water and mineral salts',
        ],
        keyTerms: ['Carbohydrate', 'Protein', 'Lipid', 'Enzyme'],
      },
      {
        chapter: 'bab4',
        title: 'Cell Division',
        form: 4,
        keyTopics: [
          'Mitosis',
          'Meiosis',
          'Chromosome',
        ],
        keyTerms: ['Mitosis', 'Meiosis', 'Chromosome', 'DNA'],
      },
      {
        chapter: 'bab5',
        title: 'Nutrition',
        form: 4,
        keyTopics: [
          'Food and nutrition',
          'Digestive system',
          'Nutrition in plants',
        ],
        keyTerms: ['Nutrition', 'Digestion', 'Photosynthesis', 'Balanced diet'],
      },
      // Form 5
      {
        chapter: 'bab6',
        title: 'Respiration',
        form: 5,
        keyTopics: [
          'Gas exchange',
          'Cellular respiration',
          'Human respiratory system',
        ],
        keyTerms: ['Respiration', 'Gas exchange', 'Aerobic', 'Anaerobic'],
      },
      {
        chapter: 'bab7',
        title: 'Transport',
        form: 5,
        keyTopics: [
          'Human circulatory system',
          'Blood',
          'Transport in plants',
        ],
        keyTerms: ['Circulatory system', 'Heart', 'Blood vessel', 'Xylem', 'Phloem'],
      },
      {
        chapter: 'bab8',
        title: 'Coordination and Response',
        form: 5,
        keyTopics: [
          'Nervous system',
          'Endocrine system',
          'Homeostasis',
        ],
        keyTerms: ['Nervous system', 'Hormone', 'Homeostasis', 'Reflex action'],
      },
      {
        chapter: 'bab9',
        title: 'Reproduction',
        form: 5,
        keyTopics: [
          'Asexual reproduction',
          'Sexual reproduction',
          'Human reproduction',
        ],
        keyTerms: ['Reproduction', 'Asexual', 'Sexual', 'Fertilisation', 'Gamete'],
      },
      {
        chapter: 'bab10',
        title: 'Genetics and Inheritance',
        form: 5,
        keyTopics: [
          'Genes and alleles',
          'Monohybrid inheritance',
          'Sex determination',
          'Variation',
        ],
        keyTerms: ['Gene', 'Allele', 'Dominant', 'Recessive', 'Genotype', 'Phenotype'],
      },
    ],
  },

  islam: {
    id: 'islam',
    name: 'Islamic Education',
    nameBM: 'Pendidikan Islam',
    icon: '☪️',
    color: 'islam',
    description: 'Islamic studies for Muslim students',
    descriptionBM: 'Pengajian Islam untuk pelajar Muslim',
    topics: [
      // Form 4
      {
        chapter: 'bab1',
        title: 'Al-Quran',
        form: 4,
        keyTopics: [
          'Tilawah and tajwid',
          'Memorisation of selected verses',
          'Understanding selected verses',
        ],
        keyTerms: ['Al-Quran', 'Tajwid', 'Tilawah', 'Surah', 'Ayat'],
      },
      {
        chapter: 'bab2',
        title: 'Hadith',
        form: 4,
        keyTopics: [
          'Understanding hadith',
          'Classification of hadith',
          'Selected hadith',
        ],
        keyTerms: ['Hadith', 'Sunnah', 'Sahih', 'Hasan', 'Daif'],
      },
      {
        chapter: 'bab3',
        title: 'Aqidah (Islamic Faith)',
        form: 4,
        keyTopics: [
          'Belief in Allah',
          'Belief in Angels',
          'Belief in Prophets',
          'Belief in Holy Books',
        ],
        keyTerms: ['Aqidah', 'Tawhid', 'Rukun Iman', 'Iman'],
      },
      {
        chapter: 'bab4',
        title: 'Ibadah (Worship)',
        form: 4,
        keyTopics: [
          'Solat (Prayer)',
          'Zakat (Alms)',
          'Puasa (Fasting)',
          'Haji (Pilgrimage)',
        ],
        keyTerms: ['Ibadah', 'Solat', 'Zakat', 'Puasa', 'Haji', 'Rukun Islam'],
      },
      {
        chapter: 'bab5',
        title: 'Akhlak (Moral Values)',
        form: 4,
        keyTopics: [
          'Good character',
          'Relationship with Allah',
          'Relationship with people',
          'Relationship with environment',
        ],
        keyTerms: ['Akhlak', 'Akhlak mahmudah', 'Akhlak mazmumah'],
      },
      // Form 5
      {
        chapter: 'bab6',
        title: 'Sirah (Prophet\'s Biography)',
        form: 5,
        keyTopics: [
          'Life of Prophet Muhammad',
          'Important events',
          'Lessons from Sirah',
        ],
        keyTerms: ['Sirah', 'Hijrah', 'Ghazwah', 'Fathu Makkah'],
      },
      {
        chapter: 'bab7',
        title: 'Adab and Islamic Civilization',
        form: 5,
        keyTopics: [
          'Islamic etiquette',
          'Islamic contributions to civilization',
          'Muslim scholars',
        ],
        keyTerms: ['Adab', 'Tamadun Islam', 'Ulama'],
      },
      {
        chapter: 'bab8',
        title: 'Muamalat (Islamic Transactions)',
        form: 5,
        keyTopics: [
          'Islamic economics',
          'Halal and haram',
          'Contemporary issues',
        ],
        keyTerms: ['Muamalat', 'Halal', 'Haram', 'Riba', 'Jual beli'],
      },
      {
        chapter: 'bab9',
        title: 'Fiqh (Islamic Jurisprudence)',
        form: 5,
        keyTopics: [
          'Sources of Islamic law',
          'Ijtihad and taqlid',
          'Contemporary rulings',
        ],
        keyTerms: ['Fiqh', 'Shariah', 'Ijtihad', 'Taqlid', 'Fatwa'],
      },
      {
        chapter: 'bab10',
        title: 'Current Issues in Islam',
        form: 5,
        keyTopics: [
          'Science and technology in Islam',
          'Islamic response to modern challenges',
          'Unity among Muslims',
        ],
        keyTerms: ['Ummah', 'Jihad', 'Wasatiyyah', 'Tolerance'],
      },
    ],
  },

  sejarah: {
    id: 'sejarah',
    name: 'History',
    nameBM: 'Sejarah',
    icon: '📜',
    color: 'sejarah',
    description: 'Malaysian and world history',
    descriptionBM: 'Sejarah Malaysia dan dunia',
    topics: [
      // Use existing sejarah chapters
      {
        chapter: 'bab1',
        title: 'Tamadun Awal Manusia',
        form: 4,
        keyTopics: ['Early civilizations', 'Archaeological evidence', 'Cultural development'],
      },
      {
        chapter: 'bab2',
        title: 'Kerajaan Alam Melayu',
        form: 4,
        keyTopics: ['Malay kingdoms', 'Trade and economy', 'Political systems'],
      },
      {
        chapter: 'bab3',
        title: 'Perkembangan Nasionalisme',
        form: 4,
        keyTopics: ['Rise of nationalism', 'Colonial resistance', 'Political movements'],
      },
      {
        chapter: 'bab4',
        title: 'Kemerdekaan Tanah Melayu',
        form: 4,
        keyTopics: ['Path to independence', 'Key figures', 'Merdeka 1957'],
      },
      {
        chapter: 'bab5',
        title: 'Perkembangan Ekonomi',
        form: 4,
        keyTopics: ['Economic development', 'Industrialization', 'Trade'],
      },
      {
        chapter: 'bab6',
        title: 'Pembinaan Negara',
        form: 4,
        keyTopics: ['Nation building', 'Unity', 'Development'],
      },
      {
        chapter: 'bab7',
        title: 'Pembentukan Malaysia',
        form: 5,
        keyTopics: ['Formation of Malaysia', 'Malaysia Agreement', '1963'],
      },
      {
        chapter: 'bab8',
        title: 'Cabaran Perpaduan',
        form: 5,
        keyTopics: ['Unity challenges', 'Racial harmony', 'Integration'],
      },
      {
        chapter: 'bab9',
        title: 'Dasar Luar dan Dalam Negeri',
        form: 5,
        keyTopics: ['Foreign policy', 'Domestic policy', 'International relations'],
      },
      {
        chapter: 'bab10',
        title: 'Malaysia dalam Kancah Antarabangsa',
        form: 5,
        keyTopics: ['Malaysia in international arena', 'ASEAN', 'UN', 'Commonwealth'],
      },
      {
        chapter: 'bab11',
        title: 'Kelangsungan Warisan',
        form: 5,
        keyTopics: ['Heritage preservation', 'Cultural continuity', 'National identity'],
      },
    ],
  },
};

// Helper function to get subject by ID
export function getSubject(id: string): Subject | undefined {
  return SUBJECTS[id];
}

// Get all subjects as array
export function getAllSubjects(): Subject[] {
  return Object.values(SUBJECTS);
}

// Get subjects by form
export function getSubjectTopicsByForm(subjectId: string, form: number): SubjectTopic[] {
  const subject = SUBJECTS[subjectId];
  if (!subject) return [];
  return subject.topics.filter(topic => topic.form === form);
}
