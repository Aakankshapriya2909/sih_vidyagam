# Node.js EJS Templating Implementation

## ✅ Completed: HTML to Node.js EJS Conversion

All HTML pages have been successfully converted to use **EJS (Embedded JavaScript)** templating engine with Node.js for dynamic server-side rendering.

---

## Changes Made

### 1. **Server Configuration** (server.js)

#### Added EJS View Engine:
```javascript
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
```

#### Updated Routes to Render Templates:
- **Before:** `res.sendFile()` serving static HTML
- **After:** `res.render()` with dynamic data passing

```javascript
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'VidyaGam - Educational Gaming Platform',
        page: 'home'
    });
});

app.get('/mathematics', (req, res) => {
    res.render('games/mathematics', { 
        title: 'Mathematics Educational Games',
        page: 'mathematics'
    });
});
```

---

### 2. **Directory Structure Created**

```
SIH_VidyaGam/
├── views/                      ✨ NEW - EJS Templates
│   ├── index.ejs              (Main homepage)
│   ├── partials/              (Reusable components)
│   │   ├── head.ejs          (Common <head> section)
│   │   └── scripts.ejs       (Common JavaScript)
│   └── games/                 (Game page templates)
│       ├── mathematics.ejs    (Math games)
│       ├── gk.ejs            (General Knowledge)
│       ├── eye-lab.ejs       (Human Eye Lab)
│       └── lights.ejs        (Light & Reflection)
│
├── public/                     (Static assets)
│   ├── css/                   (Stylesheets)
│   ├── js/                    (Client-side scripts)
│   ├── photos/                (Images)
│   └── pages/                 (Original HTML - can be removed)
│
└── server.js                   ✅ UPDATED
```

---

### 3. **EJS Templates Created**

#### **views/partials/head.ejs**
Reusable `<head>` section with:
- Dynamic title from route: `<%= title %>`
- Meta tags for responsiveness
- Font Awesome CDN
- Common scripts

#### **views/index.ejs**
- Main homepage template
- Uses partial: `<%- include('partials/head') %>`
- Loads all CSS files (main, header, auth, courses)

#### **views/games/*.ejs**
All game pages converted to EJS:
- **mathematics.ejs** - Math puzzles and quizzes
- **gk.ejs** - General knowledge games
- **eye-lab.ejs** - Human eye simulation
- **lights.ejs** - Light physics simulation

Each includes:
- Partial head section
- Game-specific CSS
- Updated back button links to `/` (home)

---

## Benefits of EJS Templating

### 1. **Dynamic Content Rendering**
- Server-side data injection into templates
- Easy to pass variables from Node.js to HTML
```javascript
res.render('page', { title: 'Dynamic Title', user: userData });
```

### 2. **Reusable Components (Partials)**
- DRY principle: Don't Repeat Yourself
- Common elements like headers, footers extracted once
- Easy maintenance - update one file, affects all pages

### 3. **Clean Separation**
- **Views** - Presentation layer (EJS templates)
- **Routes** - Business logic (server.js)
- **Static Assets** - Unchanged (public/)

### 4. **Scalability**
- Easy to add new pages
- Template inheritance
- Can integrate with databases for dynamic data

### 5. **SEO Benefits**
- Server-side rendered HTML
- Better for search engine crawling
- Faster initial page load

---

## How EJS Works

### Basic Syntax:
```ejs
<!-- Output escaped value -->
<%= variable %>

<!-- Output unescaped HTML -->
<%- htmlContent %>

<!-- JavaScript logic -->
<% if (condition) { %>
    <p>Conditional content</p>
<% } %>

<!-- Include partial -->
<%- include('partials/header') %>
```

### Example Usage in Our Project:
```ejs
<%- include('partials/head') %>
    <link rel="stylesheet" href="/css/mathematics.css">
</head>
<body>
    <h1><%= title %></h1>
    <!-- Page content -->
</body>
```

---

## Routes with Dynamic Data

### Current Implementation:
```javascript
app.get('/mathematics', (req, res) => {
    res.render('games/mathematics', { 
        title: 'Mathematics Educational Games',
        page: 'mathematics'
    });
});
```

### Future Possibilities:
```javascript
app.get('/mathematics', async (req, res) => {
    const quizData = await getQuizFromDatabase();
    const userProgress = await getUserProgress(req.user.id);
    
    res.render('games/mathematics', { 
        title: 'Mathematics Games',
        quizzes: quizData,
        progress: userProgress,
        userName: req.user.name
    });
});
```

---

## File Changes Summary

### ✨ Created:
- `views/index.ejs`
- `views/partials/head.ejs`
- `views/partials/scripts.ejs`
- `views/games/mathematics.ejs`
- `views/games/gk.ejs`
- `views/games/eye-lab.ejs`
- `views/games/lights.ejs`

### ✅ Updated:
- `server.js` - Added EJS view engine, updated routes

### 📦 Retained (Static Assets):
- `public/css/*.css` - All stylesheets
- `public/js/*.js` - Client-side JavaScript
- `public/photos/*` - All images

### ⚠️ Can Be Removed:
- `public/pages/*.html` - Original HTML files (now replaced by EJS)

---

## Testing Checklist

- [x] Server starts without errors
- [x] Homepage loads at http://localhost:3000
- [x] Mathematics game renders at /mathematics
- [x] GK game renders at /gk
- [x] Eye Lab renders at /physics-eye
- [x] Lights game renders at /physics-light
- [x] All CSS files load correctly
- [x] All JavaScript functionality works
- [x] Back buttons redirect to home page
- [x] Images display properly

---

## Next Steps (Optional Enhancements)

### 1. **Add More Partials**
- `header.ejs` - Navigation bar
- `footer.ejs` - Footer section
- `sidebar.ejs` - Side menu

### 2. **Template Layouts**
Create a base layout:
```ejs
<!-- views/layouts/main.ejs -->
<!DOCTYPE html>
<html>
<%- include('../partials/head') %>
<body>
    <%- include('../partials/header') %>
    <main>
        <%- body %>
    </main>
    <%- include('../partials/footer') %>
</body>
</html>
```

### 3. **Database Integration**
- Store user progress
- Dynamic quiz loading
- User authentication

### 4. **Session Management**
- Track user login state
- Save game progress
- Personalized experience

### 5. **API Data Integration**
```javascript
app.get('/mathematics', async (req, res) => {
    const quizzes = await loadQuizzesFromAPI();
    res.render('games/mathematics', { quizzes });
});
```

---

## Performance Comparison

### Before (Static HTML):
- Server simply serves files
- No processing overhead
- Fast but inflexible

### After (EJS Templates):
- Server renders templates on request
- Minimal overhead (EJS is very fast)
- Dynamic and flexible
- Can cache compiled templates for production

---

## Configuration for Production

### Enable View Caching:
```javascript
if (process.env.NODE_ENV === 'production') {
    app.set('view cache', true);
}
```

### Minify Output:
Use `ejs-html-minifier` package

---

## Conclusion

✅ **Successfully converted** all HTML pages to EJS templates  
✅ **Server-side rendering** now active  
✅ **Cleaner code** with reusable partials  
✅ **Foundation laid** for dynamic data integration  
✅ **Fully functional** with all features working  

The project now uses modern Node.js templating with EJS, making it easier to maintain, scale, and add dynamic features in the future.

---

**Date:** 2025-12-21  
**Status:** ✅ Complete and Running  
**Server:** http://localhost:3000
