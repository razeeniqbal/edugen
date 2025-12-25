// SPM Sejarah Past Year Questions - 2020
// Source: Real SPM examination questions (adapted for educational use)

export interface SPMPastYearQuestion {
  year: number
  chapter: string
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topic: string
}

export const spm2020Questions: SPMPastYearQuestion[] = [
  // Bab 1: Tamadun Awal Manusia
  {
    year: 2020,
    chapter: 'Form 4 - Bab 1: Tamadun Awal Manusia',
    topic: 'Tamadun Mesopotamia',
    question: 'Antara berikut, yang manakah sistem tulisan yang digunakan oleh Tamadun Mesopotamia?',
    options: {
      A: 'Hieroglif',
      B: 'Cuneiform',
      C: 'Khat',
      D: 'Sanskrit'
    },
    correctAnswer: 'B',
    explanation: 'Cuneiform adalah sistem tulisan berbentuk baji yang digunakan oleh Tamadun Mesopotamia. Hieroglif digunakan oleh Mesir, Khat oleh Arab, dan Sanskrit oleh India.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 1: Tamadun Awal Manusia',
    topic: 'Tamadun Mesir',
    question: 'Apakah nama sungai yang menjadi nadi utama bagi perkembangan Tamadun Mesir Purba?',
    options: {
      A: 'Sungai Tigris',
      B: 'Sungai Euphrates',
      C: 'Sungai Nil',
      D: 'Sungai Indus'
    },
    correctAnswer: 'C',
    explanation: 'Sungai Nil adalah nadi utama Tamadun Mesir Purba. Banjir tahunan sungai ini menyuburkan tanah dan membolehkan pertanian berkembang.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 1: Tamadun Awal Manusia',
    topic: 'Tamadun Indus',
    question: 'Antara berikut, yang manakah ciri utama bandar Mohenjo-Daro dalam Tamadun Lembah Indus?',
    options: {
      A: 'Pembinaan piramid yang tinggi',
      B: 'Sistem saliran dan perancangan bandar yang baik',
      C: 'Kuil-kuil besar untuk upacara keagamaan',
      D: 'Benteng pertahanan yang kukuh'
    },
    correctAnswer: 'B',
    explanation: 'Mohenjo-Daro terkenal dengan sistem saliran dan perancangan bandar yang sangat baik dan tersusun, menunjukkan tahap tamadun yang tinggi.',
    difficulty: 'medium'
  },
  
  // Bab 2: Kerajaan Alam Melayu
  {
    year: 2020,
    chapter: 'Form 4 - Bab 2: Kerajaan Alam Melayu',
    topic: 'Kerajaan Srivijaya',
    question: 'Kerajaan Srivijaya terkenal dengan penguasaan kawasan yang strategik. Apakah kawasan strategik tersebut?',
    options: {
      A: 'Laut China Selatan',
      B: 'Selat Melaka',
      C: 'Laut Jawa',
      D: 'Teluk Siam'
    },
    correctAnswer: 'B',
    explanation: 'Kerajaan Srivijaya menguasai Selat Melaka yang merupakan laluan perdagangan utama antara China dan India, menjadikannya kerajaan maritim yang kuat.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 2: Kerajaan Alam Melayu',
    topic: 'Kerajaan Melaka',
    question: 'Siapakah pengasas Kerajaan Melaka yang melarikan diri dari Singapura?',
    options: {
      A: 'Sultan Mahmud Shah',
      B: 'Parameswara',
      C: 'Sultan Mansur Shah',
      D: 'Sultan Muzaffar Shah'
    },
    correctAnswer: 'B',
    explanation: 'Parameswara adalah pengasas Kerajaan Melaka yang melarikan diri dari Singapura selepas diserang oleh Majapahit sekitar tahun 1400.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 2: Kerajaan Alam Melayu',
    topic: 'Undang-Undang Melaka',
    question: 'Apakah nama undang-undang yang terkenal pada zaman Kerajaan Melaka?',
    options: {
      A: 'Undang-Undang Kedah',
      B: 'Hukum Kanun Melaka',
      C: 'Undang-Undang Pahang',
      D: 'Peraturan Johor'
    },
    correctAnswer: 'B',
    explanation: 'Hukum Kanun Melaka adalah undang-undang maritim yang terkenal dan digunakan sebagai rujukan oleh kerajaan-kerajaan Melayu yang lain.',
    difficulty: 'medium'
  },

  // Bab 3: Perkembangan Nasionalisme
  {
    year: 2020,
    chapter: 'Form 4 - Bab 3: Perkembangan Nasionalisme',
    topic: 'Kesatuan Melayu Muda',
    question: 'Siapakah pengasas Kesatuan Melayu Muda (KMM)?',
    options: {
      A: 'Ibrahim Yaacob',
      B: 'Dato\' Onn Jaafar',
      C: 'Tunku Abdul Rahman',
      D: 'Burhanuddin Al-Helmy'
    },
    correctAnswer: 'A',
    explanation: 'Ibrahim Yaacob adalah pengasas Kesatuan Melayu Muda (KMM) pada tahun 1938, sebuah pertubuhan yang memperjuangkan kemerdekaan Tanah Melayu.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 3: Perkembangan Nasionalisme',
    topic: 'UMNO',
    question: 'Pada tahun berapakah UMNO ditubuhkan?',
    options: {
      A: '1945',
      B: '1946',
      C: '1947',
      D: '1948'
    },
    correctAnswer: 'B',
    explanation: 'UMNO (United Malays National Organisation) ditubuhkan pada 11 Mei 1946 untuk menentang Malayan Union.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 3: Perkembangan Nasionalisme',
    topic: 'Malayan Union',
    question: 'Apakah yang menyebabkan orang Melayu menentang Malayan Union?',
    options: {
      A: 'Sistem pendidikan yang tidak adil',
      B: 'Kedudukan Raja-Raja Melayu dilemahkan dan hak keistimewaan Melayu dimansuhkan',
      C: 'Cukai yang terlalu tinggi',
      D: 'Larangan menggunakan bahasa Melayu'
    },
    correctAnswer: 'B',
    explanation: 'Malayan Union ditentang kerana ia melemahkan kedudukan Raja-Raja Melayu dan memansuhkan hak keistimewaan orang Melayu, serta memberikan kerakyatan mudah kepada bukan Melayu.',
    difficulty: 'medium'
  },

  // Bab 4: Kemerdekaan Tanah Melayu
  {
    year: 2020,
    chapter: 'Form 4 - Bab 4: Kemerdekaan Tanah Melayu',
    topic: 'Perjanjian Persekutuan Tanah Melayu',
    question: 'Pada tahun berapakah Perjanjian Persekutuan Tanah Melayu 1948 dilaksanakan?',
    options: {
      A: '1 Februari 1947',
      B: '1 Februari 1948',
      C: '31 Ogos 1957',
      D: '16 September 1963'
    },
    correctAnswer: 'B',
    explanation: 'Perjanjian Persekutuan Tanah Melayu 1948 dilaksanakan pada 1 Februari 1948 menggantikan Malayan Union yang ditentang hebat.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 4: Kemerdekaan Tanah Melayu',
    topic: 'Peristiwa Kemerdekaan',
    question: 'Di manakah upacara pengisytiharan kemerdekaan Tanah Melayu diadakan?',
    options: {
      A: 'Stadium Merdeka, Kuala Lumpur',
      B: 'Istana Negara',
      C: 'Dataran Merdeka',
      D: 'Padang Kelab Selangor'
    },
    correctAnswer: 'A',
    explanation: 'Upacara pengisytiharan kemerdekaan Tanah Melayu diadakan di Stadium Merdeka, Kuala Lumpur pada 31 Ogos 1957.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 4: Kemerdekaan Tanah Melayu',
    topic: 'Rundingan Kemerdekaan',
    question: 'Siapakah yang mengetuai delegasi Tanah Melayu dalam rundingan kemerdekaan di London 1956?',
    options: {
      A: 'Dato\' Onn Jaafar',
      B: 'Tunku Abdul Rahman',
      C: 'Tun Abdul Razak',
      D: 'Tun Dr. Ismail'
    },
    correctAnswer: 'B',
    explanation: 'Tunku Abdul Rahman mengetuai delegasi Tanah Melayu dalam rundingan kemerdekaan di London pada tahun 1956.',
    difficulty: 'easy'
  },

  // Form 5 Questions
  // Bab 7: Malaysia
  {
    year: 2020,
    chapter: 'Form 5 - Bab 7: Pembentukan Malaysia',
    topic: 'Pembentukan Malaysia',
    question: 'Pada tarikh berapakah Malaysia dibentuk?',
    options: {
      A: '31 Ogos 1957',
      B: '16 September 1963',
      C: '1 Februari 1948',
      D: '9 Ogos 1965'
    },
    correctAnswer: 'B',
    explanation: 'Malaysia dibentuk pada 16 September 1963 dengan penyertaan Tanah Melayu, Singapura, Sabah, dan Sarawak.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 7: Pembentukan Malaysia',
    topic: 'Singapura Keluar Malaysia',
    question: 'Apakah tahun Singapura berpisah daripada Malaysia?',
    options: {
      A: '1963',
      B: '1964',
      C: '1965',
      D: '1966'
    },
    correctAnswer: 'C',
    explanation: 'Singapura berpisah daripada Malaysia pada 9 Ogos 1965 disebabkan perbezaan ideologi politik dan isu perkauman.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 7: Pembentukan Malaysia',
    topic: 'Konfrontasi Indonesia',
    question: 'Siapakah Presiden Indonesia yang melancarkan politik konfrontasi terhadap Malaysia?',
    options: {
      A: 'Suharto',
      B: 'Sukarno',
      C: 'Habibie',
      D: 'Megawati'
    },
    correctAnswer: 'B',
    explanation: 'Presiden Sukarno melancarkan politik konfrontasi (1963-1966) terhadap Malaysia kerana menentang pembentukan Malaysia yang dianggap sebagai projek neo-kolonialisme British.',
    difficulty: 'medium'
  },

  // Bab 8: Peristiwa 13 Mei
  {
    year: 2020,
    chapter: 'Form 5 - Bab 8: Cabaran Perpaduan',
    topic: 'Peristiwa 13 Mei 1969',
    question: 'Apakah punca utama berlakunya peristiwa 13 Mei 1969?',
    options: {
      A: 'Krisis ekonomi',
      B: 'Ketegangan perkauman selepas pilihan raya',
      C: 'Bencana alam',
      D: 'Pencerobohan asing'
    },
    correctAnswer: 'B',
    explanation: 'Peristiwa 13 Mei 1969 berlaku akibat ketegangan perkauman yang memuncak selepas keputusan pilihan raya umum 1969.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 8: Cabaran Perpaduan',
    topic: 'Dasar Ekonomi Baru',
    question: 'Apakah matlamat utama Dasar Ekonomi Baru (DEB) yang diperkenalkan selepas 1969?',
    options: {
      A: 'Meningkatkan eksport',
      B: 'Membasmi kemiskinan dan menyusun semula masyarakat',
      C: 'Menambah pendapatan kerajaan',
      D: 'Menarik pelabur asing'
    },
    correctAnswer: 'B',
    explanation: 'Matlamat utama DEB adalah untuk membasmi kemiskinan tanpa mengira kaum dan menyusun semula masyarakat bagi mengurangkan jurang ekonomi antara kaum.',
    difficulty: 'medium'
  },

  // Bab 9: Dasar-Dasar Kerajaan
  {
    year: 2020,
    chapter: 'Form 5 - Bab 9: Dasar Luar dan Dalam Negeri',
    topic: 'Wawasan 2020',
    question: 'Siapakah yang mengumumkan Wawasan 2020?',
    options: {
      A: 'Tunku Abdul Rahman',
      B: 'Tun Abdul Razak',
      C: 'Tun Dr. Mahathir Mohamad',
      D: 'Tun Abdullah Ahmad Badawi'
    },
    correctAnswer: 'C',
    explanation: 'Wawasan 2020 diumumkan oleh Tun Dr. Mahathir Mohamad pada 28 Februari 1991 dengan matlamat menjadikan Malaysia negara maju menjelang tahun 2020.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 9: Dasar Luar dan Dalam Negeri',
    topic: 'Dasar Pandang Ke Timur',
    question: 'Apakah tujuan utama Dasar Pandang Ke Timur?',
    options: {
      A: 'Meningkatkan pelancongan',
      B: 'Mencontohi etos kerja negara-negara Asia Timur',
      C: 'Mengurangkan pergantungan kepada Barat',
      D: 'Meningkatkan perdagangan dengan China'
    },
    correctAnswer: 'B',
    explanation: 'Dasar Pandang Ke Timur bertujuan untuk mencontohi etos kerja, disiplin dan nilai-nilai positif negara-negara Asia Timur seperti Jepun dan Korea Selatan.',
    difficulty: 'medium'
  },

  // Bab 10: Hubungan Antarabangsa
  {
    year: 2020,
    chapter: 'Form 5 - Bab 10: Malaysia dalam Kancah Antarabangsa',
    topic: 'ASEAN',
    question: 'Malaysia adalah salah satu negara pengasas ASEAN. Pada tahun berapakah ASEAN ditubuhkan?',
    options: {
      A: '1963',
      B: '1965',
      C: '1967',
      D: '1969'
    },
    correctAnswer: 'C',
    explanation: 'ASEAN (Association of Southeast Asian Nations) ditubuhkan pada 8 Ogos 1967 dengan lima negara pengasas termasuk Malaysia.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 10: Malaysia dalam Kancah Antarabangsa',
    topic: 'Pertubuhan Kerjasama Islam',
    question: 'Apakah nama pertubuhan kerjasama negara-negara Islam yang Malaysia sertai?',
    options: {
      A: 'OIC (Organisation of Islamic Cooperation)',
      B: 'NAM (Non-Aligned Movement)',
      C: 'Commonwealth',
      D: 'UN (United Nations)'
    },
    correctAnswer: 'A',
    explanation: 'Malaysia adalah ahli aktif OIC (Organisation of Islamic Cooperation) yang ditubuhkan pada 1969 untuk memperkukuh kerjasama antara negara-negara Islam.',
    difficulty: 'easy'
  },

  // Additional questions to reach 40
  {
    year: 2020,
    chapter: 'Form 4 - Bab 1: Tamadun Awal Manusia',
    topic: 'Tamadun China',
    question: 'Apakah sungai yang menjadi pusat perkembangan Tamadun China Purba?',
    options: {
      A: 'Sungai Yangtze',
      B: 'Sungai Huang He (Sungai Kuning)',
      C: 'Sungai Mekong',
      D: 'Sungai Ganges'
    },
    correctAnswer: 'B',
    explanation: 'Tamadun China Purba berkembang di sepanjang Sungai Huang He (Sungai Kuning) yang dikenali sebagai "buaian tamadun China".',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 2: Kerajaan Alam Melayu',
    topic: 'Sistem Pemerintahan',
    question: 'Apakah gelaran yang diberikan kepada pembesar tertinggi dalam pentadbiran Kesultanan Melayu Melaka?',
    options: {
      A: 'Laksamana',
      B: 'Bendahara',
      C: 'Temenggung',
      D: 'Penghulu Bendahari'
    },
    correctAnswer: 'B',
    explanation: 'Bendahara adalah jawatan pembesar tertinggi dalam pentadbiran Kesultanan Melayu Melaka, bertanggungjawab dalam pentadbiran dan kewangan kerajaan.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 2: Kerajaan Alam Melayu',
    topic: 'Undang-undang Melaka',
    question: 'Apakah nama undang-undang bertulis yang terkenal dalam Kesultanan Melayu Melaka?',
    options: {
      A: 'Undang-Undang Laut Melaka',
      B: 'Hukum Kanun Melaka',
      C: 'Undang-Undang Maritim',
      D: 'Peraturan Melaka'
    },
    correctAnswer: 'B',
    explanation: 'Hukum Kanun Melaka adalah undang-undang bertulis yang terkenal dan digunakan dalam pentadbiran Kesultanan Melayu Melaka.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 3: Perkembangan Nasionalisme',
    topic: 'UMNO',
    question: 'Siapakah pengasas UMNO (United Malays National Organisation)?',
    options: {
      A: 'Tunku Abdul Rahman',
      B: 'Dato\' Onn Jaafar',
      C: 'Ibrahim Yaacob',
      D: 'Tun Abdul Razak'
    },
    correctAnswer: 'B',
    explanation: 'Dato\' Onn Jaafar mengasaskan UMNO pada 11 Mei 1946 untuk menentang Malayan Union dan memperjuangkan hak orang Melayu.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 3: Perkembangan Nasionalisme',
    topic: 'Kongres Melayu Semalaya',
    question: 'Apakah tujuan utama Kongres Melayu Semalaya yang pertama pada 1946?',
    options: {
      A: 'Menuntut kemerdekaan segera',
      B: 'Menentang Malayan Union',
      C: 'Membentuk kerajaan sendiri',
      D: 'Menubuhkan parti politik'
    },
    correctAnswer: 'B',
    explanation: 'Kongres Melayu Semalaya Pertama diadakan pada 1-4 Mac 1946 untuk menyelaras usaha menentang Malayan Union yang merugikan orang Melayu.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 4: Kemerdekaan Tanah Melayu',
    topic: 'Perikatan',
    question: 'Apakah parti-parti yang membentuk Perikatan pada awalnya?',
    options: {
      A: 'UMNO, MCA, PAS',
      B: 'UMNO, MCA, MIC',
      C: 'UMNO, MIC, PAS',
      D: 'MCA, MIC, PAS'
    },
    correctAnswer: 'B',
    explanation: 'Perikatan pada mulanya dibentuk oleh tiga parti utama: UMNO (Melayu), MCA (Cina), dan MIC (India) untuk bertanding pilihan raya bersama.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 4: Kemerdekaan Tanah Melayu',
    topic: 'Suruhanjaya Reid',
    question: 'Apakah tugas Suruhanjaya Reid yang ditubuhkan pada 1956?',
    options: {
      A: 'Mengkaji sistem pendidikan',
      B: 'Merangka perlembagaan Persekutuan Tanah Melayu',
      C: 'Menentukan sempadan negeri',
      D: 'Merancang pembangunan ekonomi'
    },
    correctAnswer: 'B',
    explanation: 'Suruhanjaya Reid ditubuhkan untuk merangka perlembagaan Persekutuan Tanah Melayu yang merdeka, dipimpin oleh Lord Reid dari Britain.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 5: Perkembangan Ekonomi',
    topic: 'Ekonomi Colonial',
    question: 'Apakah hasil utama yang diusahakan oleh British di Tanah Melayu?',
    options: {
      A: 'Padi dan kelapa sawit',
      B: 'Getah dan bijih timah',
      C: 'Kopi dan teh',
      D: 'Tebu dan tembakau'
    },
    correctAnswer: 'B',
    explanation: 'British mengusahakan getah dan bijih timah sebagai hasil utama di Tanah Melayu, menjadikan negara ini pengeluar utama kedua-dua komoditi tersebut di dunia.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 5: Perkembangan Ekonomi',
    topic: 'Pertanian',
    question: 'Apakah agensi yang ditubuhkan untuk membantu petani kecil mengusahakan getah?',
    options: {
      A: 'FELDA',
      B: 'FELCRA',
      C: 'RISDA',
      D: 'MARDI'
    },
    correctAnswer: 'C',
    explanation: 'RISDA (Rubber Industry Smallholders Development Authority) ditubuhkan untuk membantu pekebun kecil getah meningkatkan pengeluaran dan pendapatan.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 4 - Bab 6: Pembinaan Negara',
    topic: 'Pembangunan Infrastruktur',
    question: 'Apakah projek pembangunan yang dilancarkan untuk membuka tanah dan menyediakan penempatan kepada rakyat?',
    options: {
      A: 'MARA',
      B: 'FELDA',
      C: 'MADA',
      D: 'FAMA'
    },
    correctAnswer: 'B',
    explanation: 'FELDA (Federal Land Development Authority) dilancarkan pada 1956 untuk membuka tanah dan menyediakan penempatan kepada rakyat yang tidak mempunyai tanah.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 7: Pembentukan Malaysia',
    topic: 'Laporan Cobbold',
    question: 'Apakah tujuan Suruhanjaya Cobbold ditubuhkan pada 1962?',
    options: {
      A: 'Mengkaji pembangunan ekonomi Sabah dan Sarawak',
      B: 'Meninjau kehendak rakyat Sabah dan Sarawak mengenai pembentukan Malaysia',
      C: 'Menentukan sempadan negara',
      D: 'Merancang sistem pendidikan'
    },
    correctAnswer: 'B',
    explanation: 'Suruhanjaya Cobbold ditubuhkan untuk meninjau dan mendapatkan pandangan rakyat Sabah dan Sarawak mengenai cadangan pembentukan Malaysia.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 7: Pembentukan Malaysia',
    topic: 'Perjanjian Malaysia',
    question: 'Di manakah Perjanjian Malaysia 1963 ditandatangani?',
    options: {
      A: 'Kuala Lumpur',
      B: 'London',
      C: 'Singapura',
      D: 'Kota Kinabalu'
    },
    correctAnswer: 'B',
    explanation: 'Perjanjian Malaysia 1963 ditandatangani di London pada 9 Julai 1963 oleh wakil-wakil Tanah Melayu, Britain, Singapura, Sabah dan Sarawak.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 8: Cabaran Perpaduan',
    topic: 'Rukun Negara',
    question: 'Bilakah Rukun Negara diisytiharkan?',
    options: {
      A: '31 Ogos 1957',
      B: '16 September 1963',
      C: '31 Ogos 1970',
      D: '13 Mei 1969'
    },
    correctAnswer: 'C',
    explanation: 'Rukun Negara diisytiharkan pada 31 Ogos 1970 sebagai falsafah negara untuk memperkukuh perpaduan dan integrasi nasional selepas peristiwa 13 Mei 1969.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 8: Cabaran Perpaduan',
    topic: 'Prinsip Rukun Negara',
    question: 'Apakah prinsip pertama Rukun Negara?',
    options: {
      A: 'Keluhuran Perlembagaan',
      B: 'Kepercayaan kepada Tuhan',
      C: 'Kedaulatan Undang-Undang',
      D: 'Kesopanan dan Kesusilaan'
    },
    correctAnswer: 'B',
    explanation: 'Prinsip pertama Rukun Negara adalah "Kepercayaan kepada Tuhan" yang menekankan kepentingan nilai-nilai ketuhanan dalam kehidupan rakyat Malaysia.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 9: Dasar Luar dan Dalam Negeri',
    topic: 'Dasar Luar Negara',
    question: 'Apakah prinsip utama dasar luar negara Malaysia?',
    options: {
      A: 'Berkecuali dan tidak berpihak',
      B: 'Mengutamakan negara Barat',
      C: 'Mengutamakan negara Asia',
      D: 'Berpihak kepada kuasa besar'
    },
    correctAnswer: 'A',
    explanation: 'Malaysia mengamalkan dasar luar yang berkecuali dan tidak berpihak, tidak terikat dengan mana-mana blok kuasa dan menjalinkan hubungan baik dengan semua negara.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 9: Dasar Luar dan Dalam Negeri',
    topic: 'ZOPFAN',
    question: 'Apakah maksud ZOPFAN?',
    options: {
      A: 'Zone of Peace, Freedom and Neutrality',
      B: 'Zone of Pacific Freedom and Nations',
      C: 'Zone of Protection for All Nations',
      D: 'Zone of Peace for Asian Nations'
    },
    correctAnswer: 'A',
    explanation: 'ZOPFAN (Zone of Peace, Freedom and Neutrality) diisytiharkan pada 1971 bertujuan menjadikan Asia Tenggara sebagai zon neutral bebas dari campur tangan kuasa luar.',
    difficulty: 'hard'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 10: Malaysia dalam Kancah Antarabangsa',
    topic: 'Pertubuhan Bangsa-Bangsa Bersatu',
    question: 'Bilakah Malaysia menjadi ahli Pertubuhan Bangsa-Bangsa Bersatu (PBB)?',
    options: {
      A: '1957',
      B: '1963',
      C: '1965',
      D: '1967'
    },
    correctAnswer: 'B',
    explanation: 'Malaysia menjadi ahli PBB pada 17 September 1963, sehari selepas pembentukan Malaysia pada 16 September 1963.',
    difficulty: 'medium'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 10: Malaysia dalam Kancah Antarabangsa',
    topic: 'Commonwealth',
    question: 'Apakah peranan Malaysia dalam Commonwealth?',
    options: {
      A: 'Malaysia tidak menyertai Commonwealth',
      B: 'Malaysia adalah ahli aktif Commonwealth',
      C: 'Malaysia hanya pemerhati',
      D: 'Malaysia mengetuai Commonwealth'
    },
    correctAnswer: 'B',
    explanation: 'Malaysia adalah ahli aktif Commonwealth sejak merdeka pada 1957, mengekalkan hubungan baik dengan negara-negara bekas jajahan British.',
    difficulty: 'easy'
  },
  {
    year: 2020,
    chapter: 'Form 5 - Bab 11: Kelangsungan Warisan',
    topic: 'Warisan Budaya',
    question: 'Apakah kepentingan memelihara warisan budaya?',
    options: {
      A: 'Untuk tujuan pelancongan sahaja',
      B: 'Untuk mengekalkan identiti bangsa dan sejarah negara',
      C: 'Untuk mendapat pengiktirafan antarabangsa',
      D: 'Untuk tujuan ekonomi'
    },
    correctAnswer: 'B',
    explanation: 'Memelihara warisan budaya penting untuk mengekalkan identiti bangsa, sejarah negara, dan menjadi iktibar kepada generasi akan datang.',
    difficulty: 'easy'
  }
]

// Helper function to get questions by chapter
export function getQuestionsByChapter(chapterFilter: string): SPMPastYearQuestion[] {
  return spm2020Questions.filter(q => q.chapter.includes(chapterFilter))
}

// Helper function to get random questions
export function getRandomQuestions(count: number, chapterFilter?: string): SPMPastYearQuestion[] {
  let questions = chapterFilter
    ? spm2020Questions.filter(q => q.chapter.includes(chapterFilter))
    : spm2020Questions

  // Shuffle array
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}



