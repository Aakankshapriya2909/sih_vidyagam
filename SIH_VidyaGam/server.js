const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/courses', (req, res) => {
    const courses = require('./src/data/courses.json');
    res.json(courses);
});

app.get('/api/courses/:classNumber', (req, res) => {
    const { classNumber } = req.params;
    const courses = require('./src/data/courses.json');
    const classCourses = courses.filter(course => course.class === parseInt(classNumber));
    res.json(classCourses);
});

// Get simulations for a specific class and subject
app.get('/api/simulations/:classNumber/:subject', (req, res) => {
    const { classNumber, subject } = req.params;
    const courses = require('./src/data/courses.json');
    
    // Normalize subject name for matching (handle both "math"/"Mathematics", "science"/"Science")
    const normalizedSubject = subject.toLowerCase().replace('mathematics', 'math').replace('science', 'science');
    const course = courses.find(c => 
        c.class === parseInt(classNumber) && 
        (c.subject === normalizedSubject || c.subject === subject || c.name === subject)
    );
    
    if (course && course.simulations) {
        res.json(course.simulations);
    } else {
        res.json([]);
    }
});

app.get('/api/quiz/:subject', (req, res) => {
    const { subject } = req.params;
    try {
        const quizData = require(`./src/data/quizzes/${subject}.json`);
        res.json(quizData);
    } catch (error) {
        res.status(404).json({ error: 'Quiz not found' });
    }
});

// User progress API (can be extended with database)
app.post('/api/progress', (req, res) => {
    const { userId, courseId, score } = req.body;
    // Here you would save to database
    res.json({ success: true, message: 'Progress saved' });
});

// Serve main page
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'VidyaGam - Educational Gaming Platform',
        page: 'home'
    });
});

// Serve game pages
app.get('/mathematics', (req, res) => {
    res.render('games/mathematics', { 
        title: 'Mathematics Educational Games - NCERT Curriculum',
        page: 'mathematics'
    });
});

app.get('/gk', (req, res) => {
    res.render('games/gk', { 
        title: 'General Knowledge Educational Games - NCERT Curriculum',
        page: 'gk'
    });
});

app.get('/physics-eye', (req, res) => {
    res.render('games/eye-lab', { 
        title: 'Human Eye Simulation Lab',
        page: 'eye-lab'
    });
});

app.get('/physics-light', (req, res) => {
    res.render('games/lights', { 
        title: 'Light, Shadows & Reflection - Gamified Learning',
        page: 'lights',
        classLevel: req.query.class || 10
    });
});

// Dynamic simulation route handler
app.get('/simulation/:simType', (req, res) => {
    const { simType } = req.params;
    const classLevel = req.query.class || extractClassFromSimType(simType);
    
    // Map simulation types to templates
    const simMap = {
        'shapes-class-6': 'shapes',
        'fractions-class-6': 'fractions',
        'materials-class-6': 'materials',
        'separation-class-6': 'separation',
        'angles-class-7': 'angles',
        'equations-class-7': 'equations',
        'heat-class-7': 'heat',
        'motion-class-7': 'motion',
        'electric-class-7': 'electric',
        'quadrilaterals-class-8': 'quadrilaterals',
        'force-class-8': 'force',
        'sound-class-8': 'sound',
        'gravity-class-9': 'gravity',
        'energy-class-9': 'energy',
        'chemistry-class-10': 'chemistry'
    };
    
    const template = simMap[simType] || 'default-sim';
    
    res.render(`simulations/${template}`, {
        title: `Simulation - ${simType.split('-').join(' ')}`,
        page: 'simulation',
        classLevel: classLevel,
        simType: simType
    });
});

// Helper function to extract class from simulation type
function extractClassFromSimType(simType) {
    const match = simType.match(/class-(\d+)/);
    return match ? parseInt(match[1]) : 6;
}

// Error handling
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 VidyaGam server running on http://localhost:${PORT}`);
    console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
