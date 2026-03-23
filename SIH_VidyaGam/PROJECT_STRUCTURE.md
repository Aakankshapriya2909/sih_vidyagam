# VidyaGam - Project Structure Documentation

## 📁 Complete Project Structure

```
SIH_VidyaGam/
├── 📄 server.js                    # Express server (main entry point)
├── 📄 package.json                 # Node.js dependencies and scripts
├── 📄 .gitignore                   # Git ignore rules
├── 📄 .env.example                 # Environment variables template
├── 📄 README.md                    # Project documentation
├── 📄 jsconfig.json                # JavaScript configuration
├── 📄 start.bat                    # Windows startup script
│
├── 📂 config/                      # Configuration files
│   └── 📄 app.config.json         # Application configuration
│
├── 📂 src/                         # Source code
│   ├── 📂 components/             # Reusable UI components
│   │   ├── 📄 Header.js           # Header component with navigation
│   │   ├── 📄 AuthComponent.js    # Authentication modal component
│   │   ├── 📄 CourseNavigator.js  # Course navigation logic
│   │   └── 📄 QuizComponent.js    # Reusable quiz component
│   │
│   ├── 📂 utils/                  # Utility functions
│   │   ├── 📄 api.js              # API utility functions
│   │   ├── 📄 storage.js          # LocalStorage management
│   │   └── 📄 helpers.js          # Helper functions
│   │
│   └── 📂 data/                   # JSON data files
│       ├── 📄 courses.json        # Course data by class
│       └── 📂 quizzes/            # Quiz questions
│           ├── 📄 math.json       # Math quiz questions
│           ├── 📄 gk.json         # GK quiz questions
│           └── 📄 physics.json    # Physics quiz questions
│
└── 📂 public/                      # Static files (served by Express)
    ├── 📄 index.html               # Main landing page
    ├── 📄 404.html                 # Error page
    │
    ├── 📂 css/                     # Stylesheets
    │   ├── 📄 main.css            # Main application styles
    │   ├── 📄 header.css          # Header component styles
    │   ├── 📄 auth.css            # Authentication modal styles
    │   └── 📄 courses.css         # Course navigation styles
    │
    ├── 📂 js/                      # Client-side JavaScript
    │   ├── 📄 app.js              # Main application entry
    │   ├── 📂 components/         # Component scripts
    │   │   ├── 📄 Header.js
    │   │   ├── 📄 AuthComponent.js
    │   │   ├── 📄 CourseNavigator.js
    │   │   └── 📄 QuizComponent.js
    │   └── 📂 utils/              # Utility scripts
    │       ├── 📄 api.js
    │       ├── 📄 storage.js
    │       └── 📄 helpers.js
    │
    ├── 📂 pages/                   # Game pages
    │   ├── 📄 mathematics.html     # Math quiz games
    │   ├── 📄 gk.html             # GK quiz games
    │   ├── 📄 HEL.html            # Human Eye Lab simulation
    │   └── 📄 Lights.html         # Light & Reflection games
    │
    └── 📂 assets/                  # Media files
        ├── 🖼️ logoo.png           # Logo
        ├── 🖼️ student.jpg         # Hero background
        ├── 🖼️ gaming-bg.jpg       # Gaming card background
        ├── 🖼️ expert-bg.jpg       # Expert card background
        ├── 🖼️ support-bg.jpg      # Support card background
        ├── 🖼️ math-bg.jpg         # Math course background
        ├── 🖼️ science-bg.jpg      # Science course background
        ├── 🖼️ gk-bg.jpg           # GK course background
        ├── 🖼️ physics-bg.jpg      # Physics course background
        ├── 🖼️ imggg.jpg           # Class selection background
        ├── 🖼️ reflection.png      # Light reflection image
        └── 🎥 vd.mp4              # Background video
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Open the project folder**
   ```bash
   cd C:\Users\KIIT0001\Downloads\SIH_VidyaGam
   ```

2. **Install dependencies** (already done)
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   copy .env.example .env
   ```

4. **Start the server**
   
   **Option A - Using the batch file (Windows):**
   ```bash
   start.bat
   ```
   
   **Option B - Using npm:**
   ```bash
   npm start
   ```
   
   **Option C - Development mode with auto-reload:**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📋 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with auto-reload (nodemon)

## 🏗️ Architecture Overview

### Backend (Node.js + Express)
- **server.js**: Main server file handling routes and static file serving
- RESTful API endpoints for courses, quizzes, and progress tracking
- Serves static files from the `public` directory

### Frontend (Vanilla JavaScript)
- **Component-based architecture**: Modular, reusable components
- **No framework dependencies**: Pure JavaScript ES6+
- **Responsive design**: Works on desktop, tablet, and mobile

### Data Flow
```
Browser → Express Server → Static Files (HTML/CSS/JS)
        ↓
      API Calls → JSON Data Files
        ↓
    LocalStorage ← User Data & Progress
```

## 🎨 Key Features

### 1. Component System
- **Header**: Navigation, language selector, authentication
- **AuthComponent**: Login/Signup modal with validation
- **CourseNavigator**: Class and course selection logic
- **QuizComponent**: Reusable quiz interface with scoring

### 2. Utility Functions
- **API**: Centralized API calls
- **Storage**: LocalStorage management for user data
- **Helpers**: Common utility functions (date formatting, validation, etc.)

### 3. Routing
- `/` - Home page
- `/mathematics` - Math quiz games
- `/gk` - GK quiz games
- `/physics-eye` - Human Eye Lab simulation
- `/physics-light` - Light & Reflection games
- `/api/courses` - Get all courses
- `/api/courses/:classNumber` - Get courses by class
- `/api/quiz/:subject` - Get quiz by subject
- `/api/progress` - Save user progress

## 🔧 Configuration

### Environment Variables (.env)
```
PORT=3000
NODE_ENV=development
APP_NAME=VidyaGam
APP_URL=http://localhost:3000
```

### Application Config (config/app.config.json)
- Supported languages
- Class levels
- Subject definitions
- Feature flags

## 📚 API Endpoints

### GET /api/courses
Returns all available courses
```json
[
  {
    "id": "math_6",
    "class": 6,
    "subject": "math",
    "name": "Mathematics",
    "topics": ["Whole Numbers", "Fractions", ...]
  }
]
```

### GET /api/courses/:classNumber
Returns courses for a specific class
```
GET /api/courses/6
```

### GET /api/quiz/:subject
Returns quiz questions for a subject
```
GET /api/quiz/math
```

### POST /api/progress
Save user progress
```json
{
  "userId": "user@example.com",
  "courseId": "math_6",
  "score": 80
}
```

## 🎯 Development Guidelines

### Adding a New Component
1. Create component file in `src/components/`
2. Export the component class
3. Copy to `public/js/components/`
4. Import in `public/index.html`
5. Initialize in `public/js/app.js`

### Adding a New Quiz
1. Create JSON file in `src/data/quizzes/`
2. Follow the question format:
```json
{
  "subject": "Subject Name",
  "questions": [
    {
      "id": 1,
      "question": "Question text?",
      "options": ["A", "B", "C", "D"],
      "correct": 0,
      "difficulty": "easy"
    }
  ]
}
```

### Adding a New Page
1. Create HTML file in `public/pages/`
2. Add route in `server.js`
3. Add navigation link in appropriate component

## 🐛 Troubleshooting

### Server won't start
- Check if port 3000 is already in use
- Ensure all dependencies are installed: `npm install`
- Check for syntax errors in server.js

### Assets not loading
- Verify files are in `public/assets/`
- Check file paths in HTML/CSS (use `/assets/` prefix)
- Clear browser cache

### API not working
- Check server console for errors
- Verify JSON files exist in `src/data/`
- Check API endpoint URLs

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Security Notes
- No sensitive data in frontend code
- User authentication is simplified for demo
- In production, implement proper backend authentication
- Use HTTPS in production
- Sanitize all user inputs

## 📈 Future Enhancements
- Database integration (MongoDB/PostgreSQL)
- Real authentication with JWT
- User dashboard with analytics
- Multiplayer quiz competitions
- Mobile app (React Native)
- Admin panel for content management
- More subjects and courses
- Gamification features (badges, levels, leaderboard)

## 👥 Team
- Neha Patro
- Aakanksha Priya
- Abhishek Singh
- Harsh Pandey
- Swarnamoy Banerjee
- Aryan Shekhar

## 📄 License
MIT License - See LICENSE file for details

## 📞 Support
For issues or questions, contact: support@vidyagam.com
