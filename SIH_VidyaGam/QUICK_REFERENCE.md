# 🚀 VidyaGam - Quick Reference Guide

## ✅ Application Status: FULLY CONNECTED & OPERATIONAL

---

## 🌐 Access Points

### **Main Application**
🔗 http://localhost:3000

### **Connection Test Page**
🔗 http://localhost:3000/test-connection.html

### **API Endpoints**
- 📚 All Courses: http://localhost:3000/api/courses
- 🎓 Class 6: http://localhost:3000/api/courses/6
- 🧪 Class 6 Math Sims: http://localhost:3000/api/simulations/6/Mathematics
- 🔬 Class 7 Science Sims: http://localhost:3000/api/simulations/7/Science

---

## 📂 File Organization

### **Frontend Files (Loaded on Homepage)**

```
index.ejs loads in this order:
├── CSS Files (via <link>)
│   ├── Font Awesome 6.4.0 (CDN)
│   ├── /css/simulations.css
│   ├── /css/main.css
│   ├── /css/header.css
│   ├── /css/auth.css
│   └── /css/courses.css
│
└── JavaScript Files (via <script>)
    ├── 1. /js/utils/api.js         → API object
    ├── 2. /js/utils/storage.js     → Storage object
    ├── 3. /js/utils/helpers.js     → Helpers object
    ├── 4. /js/simulations.js       → simManager object
    ├── 5. /js/components/Header.js
    ├── 6. /js/components/AuthComponent.js
    ├── 7. /js/components/CourseNavigator.js
    └── 8. /js/app.js               → Initializes everything
```

---

## 🎮 Available Simulations

### **Class 6**
- ✅ **Math:** Shape Explorer, Fraction Visualizer
- 🔜 **Science:** Materials Lab, Separation Techniques

### **Class 7**
- 🔜 **Math:** Angles & Lines Lab, Equation Solver
- 🔜 **Science:** Heat Transfer Lab, Motion Simulator, Electric Circuit Lab

### **Class 8**
- 🔜 **Math:** Quadrilateral Explorer
- 🔜 **Science:** Force & Pressure Lab, Sound Wave Explorer

### **Class 9**
- 🔜 **Science:** Gravity Simulator, Energy Lab

### **Class 10**
- ✅ **Science:** Light & Reflection, Human Eye Lab
- 🔜 **Science:** Chemical Reactions Lab

**Legend:** ✅ Live | 🔜 Coming Soon

---

## 🧩 Global Objects Available

When page loads, these are available in browser console:

```javascript
API         // API utility methods
Storage     // LocalStorage wrapper
Helpers     // Helper functions
simManager  // SimulationManager instance
```

### **Quick Test Commands (Browser Console)**

```javascript
// Check if all loaded
console.log('API:', typeof API);
console.log('Storage:', typeof Storage);
console.log('Helpers:', typeof Helpers);
console.log('SimManager:', typeof simManager);

// Load simulations for Class 6 Math
await simManager.loadSimulations(6, 'Mathematics');
console.log('Loaded:', simManager.simulations);

// Get all courses
const courses = await API.get('/api/courses');
console.log('Courses:', courses);

// Check user login status
console.log('Logged in:', Storage.isLoggedIn());
```

---

## 🔄 User Journey

### **Path 1: Browse Simulations**
```
Home → "Game-Based Learning" → Select Class → Choose Subject → View Simulations → Start Simulation
```

### **Path 2: Play Quiz**
```
Home → "Game-Based Learning" → Select Class → Choose "GK" → Play Quiz
```

### **Path 3: Login/Signup**
```
Home → "Login / Sign Up" → Fill Form → Submit → Profile Active
```

---

## 🛠️ Development Workflow

### **1. Start Development**
```bash
cd c:\Users\KIIT0001\Downloads\SIH_VidyaGam
node server.js
```

### **2. Make Changes**
- Edit files in `public/`, `views/`, or `src/`
- Changes to static files (JS/CSS) → Just refresh browser
- Changes to EJS templates → Refresh browser
- Changes to server.js → Restart server

### **3. Test Changes**
- Open: http://localhost:3000/test-connection.html
- Check browser console for errors
- Test user flows manually

### **4. Add New Simulation**

**Step 1:** Update `src/data/courses.json`
```json
{
  "id": "new_sim_id",
  "name": "My New Simulation",
  "route": "/simulation/mysim-class-6",
  "icon": "fas fa-atom"
}
```

**Step 2:** Create `views/simulations/mysim.ejs`

**Step 3:** Update route map in `server.js` (if needed)

**Step 4:** Restart server and test

---

## 📝 Important DOM IDs

### **Pages**
- `#main-content` - Landing page
- `#class-selection-page` - Class selector
- `#course-page` - Course/subject page

### **Containers**
- `#course-grid-main` - Course cards
- `#science-subjects` - Science subject cards
- `#simulations-display-container` - Simulation cards

### **Modals**
- `#auth-modal` - Login/signup modal

### **Forms**
- `#login-form` - Login form
- `#signup-form` - Signup container
- `#student-form` - Student registration
- `#teacher-form` - Teacher registration

---

## 🎨 CSS Classes

### **Simulations**
```css
.simulations-section     /* Outer wrapper */
.simulations-grid        /* Grid container */
.simulation-card         /* Individual card */
.sim-icon               /* Icon container */
.sim-name               /* Simulation title */
.sim-button             /* Start button */
```

### **Courses**
```css
.course-card            /* Course card */
.course-icon            /* Icon */
.course-title-text      /* Title */
```

### **Navigation**
```css
.back-btn              /* Back buttons */
.class-btn             /* Class selector buttons */
```

---

## 🐛 Common Issues & Fixes

### **Issue: Simulations not showing**
```javascript
// Debug in console:
await simManager.loadSimulations(6, 'Mathematics');
// Check: simManager.simulations.length should be > 0
```

**Fix:** Clear cache and hard refresh (Ctrl+F5)

### **Issue: "TypeError: simManager is undefined"**
**Fix:** Check `/js/simulations.js` is loaded before CourseNavigator

### **Issue: API returns empty array**
**Fix:** Check `src/data/courses.json` has correct structure

### **Issue: Styles not applying**
**Fix:** 
1. Check CSS file exists in `public/css/`
2. Verify `<link>` tag in HTML
3. Clear browser cache

---

## 📊 Performance Checklist

✅ All scripts loaded in correct order  
✅ CSS files minified (if needed)  
✅ Images optimized  
✅ API calls use async/await  
✅ Error handling in place  
✅ Console logging for debugging  
✅ Responsive design working  

---

## 🔐 Security Notes

- ⚠️ Currently no real authentication (LocalStorage only)
- ⚠️ API endpoints are public
- ⚠️ For production: Add JWT tokens, database, input validation

---

## 📚 Documentation Files

1. **SIMULATION_README.md** - Comprehensive simulation system docs
2. **IMPLEMENTATION_SUMMARY.md** - Visual implementation summary
3. **CONNECTION_MAP.md** - Complete file connection map
4. **QUICK_REFERENCE.md** - This file!

---

## ✨ Feature Highlights

🎮 **Interactive Simulations** - Canvas-based educational games  
📊 **Class-based Organization** - Content organized by grade level  
🎨 **Beautiful UI** - Gradient designs, animations, responsive  
🔄 **Smart Navigation** - Back button stack, smooth transitions  
📱 **Mobile Ready** - Responsive grid layouts  
🌐 **Multi-language Support** - Language selector integrated  
👤 **User Profiles** - Login/signup system with profiles  

---

## 🚀 Next Steps for Enhancement

1. **Add More Simulations** - Create remaining 12 simulations
2. **Database Integration** - Replace LocalStorage with real DB
3. **Progress Tracking** - Save completion status
4. **Achievements System** - Badges and rewards
5. **Multiplayer Features** - Collaborative learning
6. **Assessment Integration** - Quizzes after simulations
7. **Analytics Dashboard** - Track usage and performance

---

## 💡 Pro Tips

- Use `test-connection.html` to verify setup before coding
- Check browser console regularly for errors
- Use browser DevTools Network tab to debug API calls
- Test on different screen sizes (responsive testing)
- Keep server terminal visible to see logs
- Use `Ctrl+Shift+I` to open DevTools quickly

---

## 📞 Support

For issues:
1. Check CONNECTION_MAP.md
2. Run test-connection.html
3. Check browser console
4. Review server logs in terminal
5. Verify file paths are correct

---

**Status:** ✅ ALL SYSTEMS GO!  
**Server:** 🟢 Online at http://localhost:3000  
**Connections:** 🟢 All verified  
**Ready to Use:** 🟢 YES

---

*Happy Coding! 🎉*
