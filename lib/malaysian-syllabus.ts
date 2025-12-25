// Malaysian Education Syllabus Context
// This file contains syllabus information for different education levels

export interface SyllabusContext {
  level: string
  examType: string
  questionFormat: string[]
  focusAreas: string[]
  languageContext: string
}

export const malaysianSyllabusContext: Record<string, SyllabusContext> = {
  'primary-kssr': {
    level: 'Primary School (KSSR - Kurikulum Standard Sekolah Rendah)',
    examType: 'UPSR format (though UPSR is abolished, maintain similar standard)',
    questionFormat: [
      'Simple objective questions',
      'Fill in the blanks',
      'Short answer questions',
      'Basic application questions',
      'Picture-based questions'
    ],
    focusAreas: [
      'Fundamental concepts',
      'Basic understanding',
      'Simple real-world applications',
      'Age-appropriate language'
    ],
    languageContext: 'Use simple, clear language suitable for primary school students (7-12 years old).'
  },
  
  'lower-secondary-kssm': {
    level: 'Lower Secondary (KSSM - Kurikulum Standard Sekolah Menengah)',
    examType: 'PT3 (Pentaksiran Tingkatan 3) format',
    questionFormat: [
      'Objective questions',
      'Structured questions',
      'Short essays',
      'Problem-solving questions',
      'Data analysis questions',
      'Application and synthesis questions'
    ],
    focusAreas: [
      'Conceptual understanding',
      'Application of knowledge',
      'Critical thinking',
      'Problem-solving skills',
      'KBAT (Higher Order Thinking Skills) questions'
    ],
    languageContext: 'Use appropriate language for Form 1-3 students (13-15 years old) with moderate complexity.'
  },
  
  'upper-secondary-spm': {
    level: 'Upper Secondary (Form 4-5)',
    examType: 'SPM (Sijil Pelajaran Malaysia) format',
    questionFormat: [
      'Section A: Objective/Multiple choice questions',
      'Section B: Structured questions with multiple parts',
      'Section C: Essay questions / Long-form answers',
      'KBAT (Higher Order Thinking) questions',
      'Case study analysis',
      'Application and problem-solving'
    ],
    focusAreas: [
      'In-depth understanding of concepts',
      'Analysis and evaluation',
      'Application to real-world scenarios',
      'Critical thinking and reasoning',
      'Malaysian context and examples',
      'Exam-oriented question structures',
      'Time management in answering'
    ],
    languageContext: 'Use SPM-level language complexity, appropriate for Form 4-5 students (16-17 years old). Include Malaysian contexts and examples where relevant.'
  },
  
  'pre-university-stpm': {
    level: 'Pre-University (STPM / Matrikulasi)',
    examType: 'STPM (Sijil Tinggi Persekolahan Malaysia) / Matriculation format',
    questionFormat: [
      'Essay questions requiring detailed explanations',
      'Complex problem-solving',
      'Critical analysis and evaluation',
      'Research-based questions',
      'Multi-step calculations and derivations',
      'Comparative analysis',
      'Hypothesis and theory application'
    ],
    focusAreas: [
      'Advanced conceptual understanding',
      'Research and analytical skills',
      'University-level critical thinking',
      'Comprehensive problem-solving',
      'Integration of multiple concepts',
      'Theoretical and practical applications',
      'Preparation for tertiary education'
    ],
    languageContext: 'Use advanced academic language suitable for pre-university students (18+ years old). Expect university-level comprehension.'
  }
}

export function getSyllabusContext(educationLevel: string): SyllabusContext | null {
  return malaysianSyllabusContext[educationLevel] || null
}

// Subject-specific guidelines for Malaysian curriculum
export const malaysianSubjectGuidelines: Record<string, string> = {
  'bahasa-melayu': 'Follow DBP (Dewan Bahasa dan Pustaka) standards. Include tatabahasa, pemahaman, and rumusan components.',
  'islamic-studies': 'Align with Malaysian Islamic education curriculum. Include Al-Quran, Hadith, Fiqh, Akhlak, and Sirah components.',
  'moral': 'Based on Malaysian Moral Education syllabus with 16 core values (Nilai Murni).',
  'history': 'Focus on Malaysian history, Southeast Asian history, and world history as per Malaysian syllabus. Emphasize chronological understanding, cause-and-effect relationships, and historical significance.',
  'mathematics': 'Follow Malaysian mathematics curriculum with focus on problem-solving (KBAT).',
  'additional-mathematics': 'SPM Additional Mathematics syllabus including calculus, statistics, and advanced algebra.',
  'science': 'Integrated science approach covering Physics, Chemistry, Biology as per Malaysian syllabus.',
  'english': 'Follow CEFR (Common European Framework of Reference) aligned with Malaysian English curriculum.',
}

// SEJARAH (HISTORY) - Detailed Syllabus by Education Level
export interface SejarahTopic {
  chapter: string
  topics: string[]
  keyThemes: string[]
  skills: string[]
}

export const sejarahSyllabus = {
  'primary-kssr': {
    description: 'Primary School History (KSSR) - Basic Malaysian History & Heritage',
    topics: [
      {
        chapter: 'Warisan Kebangsaan Malaysia',
        topics: [
          'Lambang dan Simbol Negara (Jalur Gemilang, Bunga Raya, Harimau Malaya)',
          'Lagu Kebangsaan - Negaraku',
          'Rukun Negara',
          'Hari Kebangsaan dan perayaan penting'
        ],
        keyThemes: ['Patriotisme', 'Identiti Nasional', 'Perpaduan']
      },
      {
        chapter: 'Tokoh-Tokoh Bersejarah',
        topics: [
          'Tunku Abdul Rahman - Bapa Kemerdekaan',
          'Tun Dr. Mahathir Mohamad',
          'Tokoh-tokoh perjuangan kemerdekaan',
          'Pahlawan tempatan'
        ],
        keyThemes: ['Kepahlawanan', 'Kepimpinan', 'Perjuangan']
      },
      {
        chapter: 'Tempat-Tempat Bersejarah',
        topics: [
          'Monumen dan Bangunan Bersejarah di Malaysia',
          'Muzium negara dan tempatan',
          'Tapak Warisan UNESCO di Malaysia',
          'Kepentingan memelihara warisan'
        ],
        keyThemes: ['Warisan', 'Pemuliharaan', 'Kebudayaan']
      }
    ],
    examFormat: 'Objective questions, gambar bercerita, isi tempat kosong, soalan mudah berkaitan tarikh dan peristiwa penting.',
    skills: ['Mengingati fakta asas', 'Mengenal pasti tokoh dan tempat', 'Memahami kepentingan peristiwa']
  },

  'lower-secondary-kssm': {
    description: 'PT3 History - Malaysian History from Early Kingdoms to Independence',
    topics: [
      {
        chapter: 'Tingkatan 1: Tamadun Awal dan Kerajaan Awal',
        topics: [
          'Tamadun Indus, Mesir, Yunani, Rom, Islam',
          'Kerajaan Awal di Malaysia: Langkasuka, Gangga Negara, Chi Tu',
          'Kerajaan Kedah Tua dan perkembangannya',
          'Pengaruh India dan Islam di Alam Melayu'
        ],
        keyThemes: ['Tamadun', 'Perdagangan', 'Pengaruh Budaya']
      },
      {
        chapter: 'Tingkatan 2: Kerajaan Melayu Melaka',
        topics: [
          'Penubuhan Kesultanan Melayu Melaka',
          'Perkembangan politik, ekonomi, dan sosial Melaka',
          'Sistem pemerintahan Melaka',
          'Undang-undang Laut Melaka dan Undang-undang Melaka',
          'Kejatuhan Melaka (1511) kepada Portugis',
          'Kerajaan selepas Melaka: Johor-Riau, Perak, Pahang'
        ],
        keyThemes: ['Kegemilangan Melaka', 'Perdagangan Maritim', 'Penjajahan']
      },
      {
        chapter: 'Tingkatan 3: Penjajahan British dan Perjuangan Kemerdekaan',
        topics: [
          'Kedatangan British ke Tanah Melayu',
          'Perjanjian Pangkor 1874',
          'Sistem Pentadbiran British',
          'Perjuangan menentang penjajah (Tok Janggut, Mat Kilau, Dato Bahaman)',
          'Pendudukan Jepun (1941-1945)',
          'Malayan Union dan pembentukan UMNO (1946)',
          'Persekutuan Tanah Melayu (1948)',
          'Darurat (1948-1960)',
          'Kemerdekaan 31 Ogos 1957',
          'Pembentukan Malaysia (16 September 1963)'
        ],
        keyThemes: ['Penjajahan', 'Perjuangan', 'Kemerdekaan', 'Nasionalisme']
      }
    ],
    examFormat: 'Bahagian A: Objektif (40 soalan). Bahagian B: Soalan struktur. Bahagian C: Esei (pilih 1 daripada 2).',
    skills: [
      'Kronologi - susun peristiwa mengikut urutan masa',
      'Sebab dan akibat - kenal pasti punca dan kesan peristiwa',
      'Analisis sumber - tafsir gambar, peta, petikan',
      'KBAT - membuat inferens, membandingkan, menilai'
    ]
  },

  'upper-secondary-spm': {
    description: 'SPM History - Form 4 & 5 Comprehensive Malaysian & World History',
    form4Topics: [
      {
        chapter: 'Bab 1: Perkembangan Awal Masyarakat di Malaysia',
        topics: [
          'Zaman Prasejarah: Paleolitik, Neolitik, Zaman Logam',
          'Bukti-bukti tamadun awal (Gua Niah, Gua Kain Hitam, Lembah Bujang)',
          'Kerajaan awal: Langkasuka, Chi Tu, Gangga Negara'
        ]
      },
      {
        chapter: 'Bab 2: Kerajaan Alam Melayu (Srivijaya & Melaka)',
        topics: [
          'Kerajaan Srivijaya dan pengaruhnya',
          'Kesultanan Melayu Melaka (1400-1511)',
          'Sistem politik: Sultan, Bendahara, Temenggung, Laksamana',
          'Ekonomi: Pelabuhan entrepot, perdagangan rempah',
          'Sosial: Sistem istiadat, undang-undang Melaka',
          'Kejatuhan Melaka kepada Portugis (1511)'
        ]
      },
      {
        chapter: 'Bab 3: Perkembangan Negeri-Negeri Melayu (Abad ke-16 hingga 18)',
        topics: [
          'Kerajaan Johor-Riau-Lingga',
          'Kesultanan Perak, Kedah, Kelantan, Terengganu',
          'Bugis di Selangor dan Johor',
          'Pengaruh Siam dan hubungan dengan negeri Melayu Utara'
        ]
      },
      {
        chapter: 'Bab 4: Campur Tangan British di Negeri-Negeri Melayu',
        topics: [
          'Faktor kedatangan British: ekonomi, strategik',
          'Perjanjian Pangkor 1874',
          'Sistem Residen British',
          'Negeri-Negeri Selat, Negeri-Negeri Melayu Bersekutu (NNMB), Negeri-Negeri Melayu Tidak Bersekutu (NNMTB)',
          'Kesan penjajahan British: ekonomi, politik, sosial'
        ]
      },
      {
        chapter: 'Bab 5: Penentangan Terhadap British',
        topics: [
          'Perang Naning (1831-1832) - Dol Said',
          'Perang Pahang (1891-1895) - Dato Bahaman, Mat Kilau, Tok Gajah',
          'Pemberontakan Tok Janggut (1915) di Kelantan',
          'Pemberontakan lain di Sabah dan Sarawak'
        ]
      },
      {
        chapter: 'Bab 6: Sabah dan Sarawak (Abad ke-19)',
        topics: [
          'Pemerintahan James Brooke di Sarawak (1841)',
          'Pemerintahan Syarikat Borneo Utara British di Sabah',
          'Perkembangan ekonomi dan sosial',
          'Penentangan penduduk tempatan (Mat Salleh, Rosli Dhobi)'
        ]
      }
    ],
    form5Topics: [
      {
        chapter: 'Bab 7: Pendudukan Jepun (1941-1945)',
        topics: [
          'Serangan Jepun ke Tanah Melayu (8 Disember 1941)',
          'Dasar pentadbiran Jepun',
          'Kesan pendudukan: ekonomi hancur, kekurangan makanan, kerahan buruh paksa',
          'Pemberontakan dan gerakan menentang Jepun (Force 136, MPAJA)',
          'Kesan pendudukan Jepun terhadap kesedaran nasionalisme'
        ]
      },
      {
        chapter: 'Bab 8: Negara Bangsa (1945-1957)',
        topics: [
          'Pentadbiran Tentera British (BMA)',
          'Malayan Union 1946 - penentangan orang Melayu',
          'Penubuhan UMNO (11 Mei 1946) oleh Dato Onn Jaafar',
          'Persekutuan Tanah Melayu (1 Februari 1948)',
          'Darurat (1948-1960) dan perjuangan menentang komunis',
          'Perkembangan parti politik: UMNO, MCA, MIC, Parti Perikatan',
          'Rundingan kemerdekaan: Misi Tunku ke London (1956)',
          'Kemerdekaan 31 Ogos 1957 - Hari Merdeka'
        ]
      },
      {
        chapter: 'Bab 9: Pembentukan Malaysia (1963)',
        topics: [
          'Cadangan Malaysia oleh Tunku Abdul Rahman (27 Mei 1961)',
          'Suruhanjaya Cobbold (1962)',
          'Laporan Jawatankuasa Antara Kerajaan (IGC)',
          'Perjanjian Malaysia 1963',
          'Malaysia terbentuk 16 September 1963 (Sabah, Sarawak, Singapura, Tanah Melayu)',
          'Tentangan: Konfrontasi Indonesia, Pihak Komunis, Brunei tidak sertai',
          'Singapura keluar dari Malaysia (9 Ogos 1965)'
        ]
      },
      {
        chapter: 'Bab 10: Cabaran Perpaduan (1963-1970)',
        topics: [
          'Isu perkauman dan ketegangan',
          'Pilihan Raya 1969',
          'Peristiwa 13 Mei 1969',
          'Penyatauan Negara: Rukun Negara (31 Ogos 1970)',
          'Dasar Ekonomi Baru (DEB) 1971'
        ]
      },
      {
        chapter: 'Bab 11: Pencapaian Negara',
        topics: [
          'Pembangunan ekonomi: Dasar Industri, Revolusi Hijau',
          'Dasar Pandang ke Timur (1982)',
          'Wawasan 2020',
          'Koridor Ekonomi',
          'Pencapaian dalam pendidikan, kesihatan, infrastruktur',
          'Malaysia di peringkat antarabangsa: PBB, ASEAN, OIC, Komanwel'
        ]
      }
    ],
    examFormat: `
STRUKTUR PEPERIKSAAN SPM SEJARAH (Kertas 3):
- Bahagian A (40 markah): 40 soalan objektif
- Bahagian B (40 markah): Soalan struktur (4-5 soalan, pilih 4)
- Bahagian C (20 markah): Esei (pilih 1 daripada 2 soalan)

FORMAT SOALAN:
1. Soalan KBAT (Higher Order Thinking):
   - Analisis (Analyze)
   - Menilai (Evaluate)
   - Membanding dan Membeza (Compare & Contrast)
   - Membuat Inferens (Make Inference)
   - Meramal (Predict)

2. Soalan Struktur biasanya:
   (a) Apakah... (2 markah)
   (b) Mengapakah... (4 markah)
   (c) Bagaimanakah... (6 markah)
   (d) Sejauh manakah... (8 markah)

3. Format Esei:
   - Pengenalan (2-3 markah)
   - Isi/Huraian (12-14 markah)
   - Penutup (2-3 markah)
`,
    skills: [
      'Kronologi - mengatur peristiwa mengikut masa',
      'Analisis sumber - tafsir petikan, gambar, peta, jadual',
      'Sebab dan akibat - mengenal pasti faktor dan kesan',
      'Perubahan dan kesinambungan',
      'Empati sejarah - memahami perspektif pada masa lalu',
      'Penulisan esei sejarah - pengenalan, isi, kesimpulan',
      'KBAT - berfikir kritis, menganalisis, menilai'
    ],
    keyHistoricalDates: {
      '1400': 'Penubuhan Kesultanan Melayu Melaka',
      '1511': 'Kejatuhan Melaka kepada Portugis',
      '1641': 'Belanda menawan Melaka',
      '1786': 'Pulau Pinang diserahkan kepada British',
      '1824': 'Perjanjian Inggeris-Belanda',
      '1841': 'James Brooke menjadi Raja Sarawak',
      '1874': 'Perjanjian Pangkor',
      '1896': 'Penubuhan Negeri-Negeri Melayu Bersekutu (NNMB)',
      '1941-1945': 'Pendudukan Jepun',
      '1946': 'Malayan Union & Penubuhan UMNO (11 Mei)',
      '1948': 'Persekutuan Tanah Melayu & Darurat bermula',
      '1955': 'Pilihan Raya Pertama',
      '1957': 'Kemerdekaan (31 Ogos)',
      '1963': 'Pembentukan Malaysia (16 Sept)',
      '1965': 'Singapura keluar dari Malaysia',
      '1969': 'Peristiwa 13 Mei',
      '1970': 'Rukun Negara',
      '1971': 'Dasar Ekonomi Baru (DEB)'
    }
  },

  'pre-university-stpm': {
    description: 'STPM History - Advanced Malaysian & World History Analysis',
    topics: [
      {
        chapter: 'Semester 1: Southeast Asian History',
        topics: [
          'Traditional Southeast Asian societies and kingdoms',
          'Western imperialism in Southeast Asia',
          'Nationalism and independence movements',
          'Post-independence developments in ASEAN countries'
        ]
      },
      {
        chapter: 'Semester 2: Malaysian History in Depth',
        topics: [
          'Pre-colonial Malay states and sultanates',
          'British colonialism: economic, social, political impact',
          'Anti-colonial movements and nationalism',
          'Formation of Malaysia and nation-building',
          'Ethnic relations and national integration',
          'Economic development and modernization'
        ]
      },
      {
        chapter: 'Semester 3: Modern World History',
        topics: [
          'World Wars and their impact',
          'Cold War and decolonization',
          'Globalization and international relations',
          'Contemporary global issues'
        ]
      }
    ],
    examFormat: 'Essay-based examination requiring critical analysis, historiographical understanding, and extensive evidence. Questions require university-level analytical skills.',
    skills: [
      'Historiography - understanding different historical interpretations',
      'Critical source analysis - primary and secondary sources',
      'Comparative analysis across regions/periods',
      'Constructing coherent historical arguments',
      'Academic essay writing with proper citations',
      'Synthesis of complex historical narratives'
    ]
  }
}

// Helper function to get Sejarah syllabus by education level
export function getSejarahSyllabus(educationLevel: string) {
  const syllabusMap: Record<string, any> = {
    'primary-kssr': sejarahSyllabus['primary-kssr'],
    'lower-secondary-kssm': sejarahSyllabus['lower-secondary-kssm'],
    'upper-secondary-spm': sejarahSyllabus['upper-secondary-spm'],
    'pre-university-stpm': sejarahSyllabus['pre-university-stpm']
  }
  
  return syllabusMap[educationLevel] || null
}






