// Comprehensive syllabus prompts for all SPM subjects

export const SUBJECT_SYLLABUS_PROMPTS: Record<string, string> = {
  mathematics: `
You are generating SPM Mathematics questions following the Malaysian secondary school curriculum (KSSM).

FORMAT REQUIREMENTS:
- Generate exactly 40 objective questions (multiple choice A, B, C, D)
- Questions should be in English or Bahasa Melayu as appropriate
- Each question must have exactly ONE correct answer
- Include detailed explanations showing step-by-step solutions
- Mark difficulty level: Easy (40%), Medium (40%), Hard (20%)

CONTENT COVERAGE (Form 4 & 5):
1. Standard Form & Significant Figures
2. Quadratic Expressions, Equations & Inequalities
3. Sets (Venn diagrams, operations)
4. Mathematical Reasoning (statements, implications, arguments)
5. Graphs of Functions (linear, quadratic, cubic)
6. Progressions (arithmetic, geometric)
7. Linear Law
8. Coordinate Geometry
9. Differentiation (gradient, turning points, max/min)
10. Solution of Triangles (sine rule, cosine rule)
11. Index Numbers & Consumer Mathematics
12. Probability & Statistics

QUESTION TYPES:
- Calculation questions requiring numerical answers
- Graph interpretation and sketching
- Problem-solving with real-world applications
- Conceptual understanding questions

SPM EXAM STYLE:
- Clear, unambiguous questions
- Diagrams where necessary (describe in question)
- Multiple steps requiring mathematical reasoning
- Applications in daily life contexts
`,

  addMath: `
You are generating SPM Additional Mathematics questions following the Malaysian secondary school curriculum (KSSM).

FORMAT REQUIREMENTS:
- Generate exactly 40 objective questions (multiple choice A, B, C, D)
- Questions in English/Bahasa Melayu
- Each question must have exactly ONE correct answer
- Show complete working in explanations
- Mark difficulty level: Easy (30%), Medium (50%), Hard (20%)

CONTENT COVERAGE (Form 4 & 5):
1. Functions (composite, inverse, absolute value)
2. Quadratic Functions & Equations
3. Simultaneous Equations
4. Indices & Logarithms
5. Coordinate Geometry (advanced)
6. Statistics (measures of dispersion, correlation)
7. Circular Measures
8. Differentiation (chain rule, product rule, applications)
9. Integration (indefinite, definite, area, volume of revolution)
10. Vectors (2D & 3D operations)
11. Trigonometric Functions (identities, equations, graphs)
12. Progressions (applications)
13. Linear Law
14. Permutations & Combinations
15. Probability Distributions
16. Motion Along a Straight Line

QUESTION TYPES:
- Multi-step algebraic manipulations
- Proving mathematical statements
- Optimization problems
- Graph sketching and interpretation
- Real-world applications requiring modeling

SPM EXAM STYLE:
- Rigorous mathematical reasoning
- Questions testing multiple concepts
- Emphasis on understanding, not just memorization
`,

  physics: `
You are generating SPM Physics questions following the Malaysian secondary school curriculum (KSSM).

FORMAT REQUIREMENTS:
- Generate exactly 40 objective questions (multiple choice A, B, C, D)
- Questions in English or Bahasa Melayu
- Each question must have exactly ONE correct answer
- Provide clear scientific explanations
- Mark difficulty level: Easy (40%), Medium (40%), Hard (20%)

CONTENT COVERAGE (Form 4 & 5):
FORM 4:
1. Introduction to Physics (measurements, SI units, prefixes)
2. Force and Motion (velocity, acceleration, graphs, Newton's laws, momentum)
3. Gravitation (weight, mass, satellites, gravitational field)
4. Heat (thermal equilibrium, heat capacity, latent heat, gas laws)
5. Light (reflection, refraction, lenses, optical instruments)

FORM 5:
6. Waves (transverse, longitudinal, sound, electromagnetic spectrum)
7. Electricity (charge, current, voltage, resistance, Ohm's law, power, circuits)
8. Electromagnetism (magnetic fields, electromagnetic induction, transformers, AC/DC)
9. Electronics (diodes, transistors, logic gates, applications)
10. Radioactivity (types of radiation, decay, half-life, nuclear energy)

QUESTION TYPES:
- Conceptual understanding questions
- Calculation with formulas and units
- Graph interpretation and analysis
- Experimental design and safety
- Applications of physics in technology
- Problem-solving with multiple steps

IMPORTANT FOCUS AREAS:
- Proper use of SI units and prefixes
- Vector vs scalar quantities
- Energy transformations
- Circuit analysis (series/parallel)
- Wave properties (wavelength, frequency, speed)
- Safety in experiments

SPM EXAM STYLE:
- Clear scenarios with diagrams (describe diagram in text)
- Real-world applications
- Require understanding of concepts, not just formula memorization
- Experimental situations and data analysis
`,

  chemistry: `
You are generating SPM Chemistry questions following the Malaysian secondary school curriculum (KSSM).

FORMAT REQUIREMENTS:
- Generate exactly 40 objective questions (multiple choice A, B, C, D)
- Questions in English or Bahasa Melayu
- Each question must have exactly ONE correct answer
- Include chemical equations and formulas where relevant
- Mark difficulty level: Easy (40%), Medium (40%), Hard (20%)

CONTENT COVERAGE (Form 4 & 5):
FORM 4:
1. Introduction to Chemistry (matter, atomic structure, isotopes)
2. Structure of the Atom (subatomic particles, electron arrangement)
3. Chemical Formulae and Equations (balanced equations, mole concept)
4. Periodic Table (arrangement, groups, periods, trends)
5. Chemical Bonds (ionic, covalent, dative bonds)
6. Electrochemistry (electrolysis, applications)
7. Acids and Bases (properties, pH, neutralization, salts)
8. Manufactured Substances (alloys, polymers, glass, ceramics)

FORM 5:
9. Rate of Reaction (factors, collision theory, catalysts)
10. Carbon Compounds (hydrocarbons, alcohols, carboxylic acids, esters)
11. Oxidation and Reduction (redox reactions, electrochemical series)
12. Thermochemistry (exothermic, endothermic reactions)
13. Industrial Processes (ammonia, sulfuric acid)

QUESTION TYPES:
- Chemical equations (balancing, ionic equations)
- Calculations (mole, concentration, yield)
- Experimental procedures and observations
- Properties and uses of substances
- Conceptual understanding of chemical principles
- Applications in daily life and industry

KEY FOCUS AREAS:
- Mole concept and stoichiometry
- Writing chemical formulae correctly
- Understanding periodic trends
- Predicting chemical reactions
- Laboratory safety and techniques
- Environmental chemistry

SPM EXAM STYLE:
- Practical laboratory scenarios
- Industrial applications
- Environmental issues
- Real-life contexts (household chemicals, manufacturing)
- Questions requiring analysis and prediction
`,

  biology: `
You are generating SPM Biology questions following the Malaysian secondary school curriculum (KSSM).

FORMAT REQUIREMENTS:
- Generate exactly 40 objective questions (multiple choice A, B, C, D)
- Questions in English or Bahasa Melayu
- Each question must have exactly ONE correct answer
- Provide biological explanations with proper terminology
- Mark difficulty level: Easy (40%), Medium (40%), Hard (20%)

CONTENT COVERAGE (Form 4 & 5):
FORM 4:
1. Introduction to Biology (scientific investigation, cell structure, organization)
2. Movement of Substances (diffusion, osmosis, active transport)
3. Chemical Composition of Cell (carbohydrates, proteins, lipids, enzymes)
4. Cell Division (mitosis, meiosis, chromosomes, DNA)
5. Nutrition (balanced diet, digestive system, photosynthesis)

FORM 5:
6. Respiration (gas exchange, cellular respiration, respiratory system)
7. Transport (circulatory system, blood, lymphatic system, plant transport)
8. Coordination and Response (nervous system, endocrine system, homeostasis)
9. Reproduction (asexual, sexual reproduction, human reproduction, plant reproduction)
10. Genetics and Inheritance (genes, alleles, monohybrid inheritance, variation, mutation)
11. Growth and Development
12. Biodiversity

QUESTION TYPES:
- Diagram interpretation (cells, organs, systems)
- Process explanations (photosynthesis, respiration, reproduction)
- Experimental analysis (controlled variables, observations)
- Genetics problems (Punnett squares, inheritance patterns)
- Ecological relationships and adaptations
- Health and disease questions

KEY FOCUS AREAS:
- Cell structure and functions
- Enzyme activity and factors affecting it
- Photosynthesis and respiration equations
- Human body systems (digestive, circulatory, respiratory, reproductive, nervous, endocrine)
- Genetics (dominant, recessive alleles, genotype, phenotype)
- Plant and animal adaptations
- Biodiversity and conservation

SPM EXAM STYLE:
- Diagrams of biological structures (describe in text)
- Experimental scenarios and data interpretation
- Health and lifestyle applications
- Environmental and conservation issues
- Questions connecting multiple topics
`,

  islam: `
You are generating SPM Pendidikan Islam questions following the Malaysian secondary school curriculum (KSSM).

FORMAT REQUIREMENTS:
- Generate exactly 40 objective questions (multiple choice A, B, C, D)
- Questions must be in Bahasa Melayu
- Each question must have exactly ONE correct answer
- Provide explanations with dalil (evidence) from Al-Quran and Hadith where appropriate
- Mark difficulty level: Easy (40%), Medium (40%), Hard (20%)

CONTENT COVERAGE (Form 4 & 5):
FORM 4:
1. Al-Quran (tilawah, tajwid, hafazan, tafsir surah-surah tertentu)
2. Hadith (hadith pilihan dan pengajaran)
3. Aqidah (rukun iman, tawhid, syirik)
4. Ibadah (solat, zakat, puasa, haji, tatacara dan hukum)
5. Akhlak (akhlak mahmudah dan mazmumah, adab pergaulan)
6. Jawi dan kaligrafi Islam

FORM 5:
7. Sirah Nabi Muhammad SAW (kelahiran, dakwah, hijrah, peristiwa penting)
8. Tamadun Islam (sumbangan ulama, pencapaian tamadun Islam)
9. Muamalat (jual beli, riba, harta, ekonomi Islam)
10. Fiqh (sumber hukum, ijtihad, fatwa)
11. Isu semasa dalam Islam (sains dan teknologi, cabaran semasa, perpaduan ummah)
12. Dakwah dan kepimpinan

QUESTION TYPES:
- Pemahaman ayat Al-Quran dan hadith
- Hukum-hakam dan tatacara ibadah
- Akhlak dan nilai-nilai murni
- Sejarah dan tokoh Islam
- Aplikasi Islam dalam kehidupan seharian
- Isu kontemporari dari perspektif Islam

KEY FOCUS AREAS:
- Rukun Iman dan Rukun Islam
- Hukum bersuci, solat, puasa, zakat, haji
- Akhlak terpuji dan tercela
- Sejarah perjuangan Rasulullah
- Adab dan etika Islam
- Muamalat dan ekonomi Islam
- Sumbangan ulama dan cendekiawan Islam
- Peranan Islam dalam masyarakat moden

SPM EXAM STYLE:
- Soalan berasaskan dalil dan nas
- Aplikasi dalam situasi kehidupan sebenar
- Analisis isu semasa dari perspektif Islam
- Pemahaman konsep dan prinsip Islam
- Penghayatan nilai dan akhlak Islamiah
`,

  sejarah: `
You are generating SPM Sejarah (History) questions following the Malaysian secondary school curriculum (KSSM).

FORMAT REQUIREMENTS:
- Generate exactly 40 objective questions (Bahagian A format)
- Questions must be in Bahasa Melayu
- Multiple choice format: A, B, C, D
- Each question must have exactly ONE correct answer
- Questions should test understanding, not just memorization
- Mark difficulty level: Easy (40%), Medium (40%), Hard (20%)

CONTENT COVERAGE (Form 4 & 5):
FORM 4:
1. Tamadun Awal Manusia (Paleolitik, Neolitik, Zaman Logam)
2. Kerajaan Alam Melayu (Srivijaya, Melaka, Johor-Riau, Acheh)
3. Perkembangan Nasionalisme (penjajahan, perjuangan awal, pergerakan)
4. Kemerdekaan Tanah Melayu (rundingan, tokoh, Merdeka 1957)
5. Perkembangan Ekonomi (kolonial, selepas merdeka)
6. Pembinaan Negara (politik, ekonomi, sosial, pendidikan)

FORM 5:
7. Pembentukan Malaysia (latar belakang, perjanjian, 16 September 1963)
8. Cabaran Perpaduan (kaum, wilayah, politik)
9. Dasar Luar dan Dalam Negeri (Dasar Luar Malaysia, dasar-dasar pembangunan)
10. Malaysia dalam Kancah Antarabangsa (ASEAN, PBB, Komanwel, OIC)
11. Kelangsungan Warisan (warisan kebudayaan, pemeliharaan)

QUESTION TYPES:
- Soalan fakta (tarikh, tokoh, peristiwa)
- Soalan kefahaman (sebab-akibat, kepentingan)
- Soalan analisis (membanding, membeza, menilai)
- Soalan kronologi (urutan peristiwa)
- Soalan interpretasi (gambar, sumber, petikan)

KEY FOCUS AREAS:
- Tarikh-tarikh penting dan peristiwa bersejarah
- Tokoh-tokoh dan peranan mereka
- Sebab dan kesan peristiwa sejarah
- Perkembangan politik, ekonomi, sosial
- Dasar-dasar kerajaan dan impaknya
- Peranan Malaysia di peringkat antarabangsa
- Warisan dan pemeliharaan budaya

SPM EXAM STYLE:
- Soalan berasaskan fakta dan interpretasi
- Menggunakan peta, gambar, petikan sumber
- Menguji pemahaman sebab-musabab
- Aplikasi pengetahuan sejarah
- Nilai patriotisme dan semangat kenegaraan
`,
};

// Get syllabus prompt for a subject
export function getSubjectSyllabusPrompt(subjectId: string): string {
  return SUBJECT_SYLLABUS_PROMPTS[subjectId] || SUBJECT_SYLLABUS_PROMPTS.sejarah;
}
