# EduGen - SPM Multi-Subject Question Generator

A comprehensive educational platform for Malaysian SPM students to practice and master all major subjects through AI-generated questions.

## 🎯 Features

### Multi-Subject Support
- **Mathematics** (📐) - Core mathematics topics
- **Additional Mathematics** (🧮) - Advanced mathematics
- **Physics** (⚛️) - Physical sciences
- **Chemistry** (🧪) - Chemical sciences
- **Biology** (🧬) - Life sciences
- **Pendidikan Islam** (☪️) - Islamic studies
- **Sejarah** (📜) - Malaysian history

### AI-Powered Question Generation
- Generate 40 objective questions per quiz
- Questions based on Malaysian SPM syllabus
- Multiple difficulty levels (Easy, Medium, Hard)
- Detailed explanations for each answer
- Support for Form 4 and Form 5 content

### Modern User Interface
- Beautiful, responsive design with Tailwind CSS
- Subject-specific color themes
- Smooth animations with Framer Motion
- Intuitive chapter selection
- Real-time progress tracking

### Study Dashboard
- Track quiz history across all subjects
- View average scores and progress
- Monitor strong and weak chapters
- Study statistics and analytics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/razeeniqbal/edu-gen.git
   cd edugen
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
   - Get your API key from: [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 How to Use

### Starting a Quiz

1. **Select a Subject**
   - Choose from 7 available SPM subjects
   - Each subject has a unique color theme and icon

2. **Choose Form Level**
   - Select Form 4 or Form 5
   - Content adapts to the selected level

3. **Select Chapters**
   - Choose one or multiple chapters
   - Use "Select All" for comprehensive practice
   - View key topics for each chapter

4. **Generate Questions**
   - AI generates 40 objective questions
   - Questions cover all selected topics
   - Mixed difficulty levels

5. **Take the Quiz**
   - Answer all 40 questions
   - Track your progress in real-time
   - Submit when ready

6. **Review Results**
   - See your score and performance
   - Review explanations for each question
   - Identify areas for improvement

### Viewing Dashboard

- Click "Dashboard" in the header
- View quiz history across all subjects
- Track total quizzes, questions answered, and average score
- Monitor your progress over time

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **AI:** Google Gemini 1.5 Flash
- **HTTP Client:** Axios

## 📖 Subject Coverage

### Mathematics (Form 4 & 5)
- Standard Form, Quadratic Equations, Sets
- Mathematical Reasoning, Graphs of Functions
- Progressions, Linear Law, Coordinate Geometry
- Differentiation, Solution of Triangles

### Additional Mathematics (Form 4 & 5)
- Functions, Quadratic Equations
- Indices & Logarithms, Coordinate Geometry
- Differentiation, Integration
- Vectors, Trigonometric Functions
- Permutations & Combinations

### Physics (Form 4 & 5)
- Force and Motion, Gravitation, Heat, Light
- Waves, Electricity, Electromagnetism
- Electronics, Radioactivity

### Chemistry (Form 4 & 5)
- Atomic Structure, Chemical Formulae
- Periodic Table, Chemical Bonds
- Acids and Bases, Rate of Reaction
- Carbon Compounds, Oxidation & Reduction

### Biology (Form 4 & 5)
- Cell Structure, Movement of Substances
- Chemical Composition, Cell Division, Nutrition
- Respiration, Transport, Coordination
- Reproduction, Genetics & Inheritance

### Pendidikan Islam (Form 4 & 5)
- Al-Quran, Hadith, Aqidah, Ibadah, Akhlak
- Sirah, Adab, Muamalat, Fiqh
- Current Issues in Islam

### Sejarah (Form 4 & 5)
- Tamadun Awal Manusia, Kerajaan Alam Melayu
- Perkembangan Nasionalisme, Kemerdekaan
- Pembentukan Malaysia, Cabaran Perpaduan
- Malaysia dalam Kancah Antarabangsa

## 🎨 Customization

### Subject Colors
Each subject has a unique color theme defined in `tailwind.config.js`:
- Mathematics: Amber/Yellow
- Physics: Blue
- Chemistry: Green
- Biology: Teal
- Sejarah: Red
- Islam: Purple

### Adding New Subjects
1. Define subject structure in `lib/subjects-config.ts`
2. Add syllabus prompts in `lib/multi-subject-syllabus.ts`
3. Update color theme in `tailwind.config.js`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Razeen Iqbal**
- GitHub: [@razeeniqbal](https://github.com/razeeniqbal)

## 🙏 Acknowledgments

- Malaysian Education Ministry for SPM syllabus guidelines
- Google for Gemini AI API
- All contributors and users of EduGen

---

**Made with ❤️ for Malaysian SPM students**
