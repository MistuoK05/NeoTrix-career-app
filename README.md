# My Career App

A personalized AI-powered career guidance application designed for students pursuing AI/ML tracks. This app leverages Google's Gemini AI to provide tailored roadmaps, skill assessments, and interactive tools for career development in artificial intelligence and machine learning fields.

## Features

### 🎯 Personalized Career Guidance

- **Profile Assessment**: Input your current skills, education, and career goals
- **AI-Generated Roadmaps**: Get customized learning paths based on your background
- **Career Match Analysis**: Receive percentage-based career fit scores with detailed reasoning

### 📊 Interactive Skill Development Tools

- **Mock Interviews**: Practice AI/ML-focused multiple-choice questions with instant AI feedback
- **Coding Sandbox**: Write and test Python code with AI-powered evaluation
- **Concept Diagnostic**: Assess understanding of key AI/ML concepts through targeted quizzes

### 📈 Real-Time Progress Tracking

- **Skill Growth Matrix**: Visualize progress in Math, Algorithms, Coding, System Design, and Interview skills
- **Dynamic Scoring**: Skills update based on tool performance and AI evaluations
- **Academic Gap Analysis**: Identify and address knowledge gaps with recommended resources

### 🎨 Modern UI/UX

- **3D Backgrounds**: Immersive Spline-based 3D environments
- **Glass Morphism Design**: Sleek, modern interface with backdrop blur effects
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Dark Theme**: Eye-friendly dark mode with cyan/purple accent colors

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash)
- **3D Graphics**: Spline Tool
- **Build Tool**: Vite
- **Linting**: ESLint

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API Key

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd my-career-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:

   ```
   VITE_YOUR_GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Fill Out the Profile Form**: Enter your personal details, current skills, education, and identify potential roadblocks
2. **View Your Dashboard**: See your personalized career roadmap and skill matrix
3. **Engage with Tools**:
   - Take mock interviews to practice AI/ML questions
   - Use the coding sandbox to write and test Python code
   - Complete concept diagnostics to assess your knowledge
4. **Track Progress**: Watch your skills grow as you complete activities
5. **Get AI Insights**: Receive real-time feedback and career guidance

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Project Structure

```
my-career-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── AdvancedTrack3Form.jsx    # Initial user profile form
│   ├── App.jsx                   # Main application component
│   ├── App.css
│   ├── CodingSandbox.jsx         # Interactive coding environment
│   ├── ConceptDiagnostic.jsx     # Concept assessment tool
│   ├── GuidanceDashboard.jsx     # Main dashboard after form submission
│   ├── geminiService.js          # AI integration service
│   ├── index.css
│   ├── main.jsx                  # Application entry point
│   └── MockInterview.jsx         # Mock interview component
├── .env                          # Environment variables (API keys)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## API Integration

The app integrates with Google's Gemini AI for:

- Career path analysis and roadmap generation
- Task evaluation and scoring
- Personalized feedback and recommendations

Ensure your API key has appropriate permissions and quota for the Gemini API.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Generative AI for powering the intelligent features
- Spline Tool for 3D graphics
- Tailwind CSS for styling
- React and Vite for the development framework
