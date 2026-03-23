# VidyaGam - Simulation System Documentation

## Overview
VidyaGam now includes an interactive simulation system organized by class levels (6-10) and subjects. Students can explore educational concepts through hands-on simulations.

## Architecture

### 1. Data Structure (`src/data/courses.json`)
Each course contains a `simulations` array with:
- `id`: Unique identifier
- `name`: Display name
- `route`: URL path (format: `/simulation/{type}-class-{number}`)
- `icon`: Font Awesome icon class

Example:
```json
{
  "id": "math_6",
  "class": 6,
  "subject": "Mathematics",
  "simulations": [
    {
      "id": "shapes_sim_6",
      "name": "Shape Explorer",
      "route": "/simulation/shapes-class-6",
      "icon": "fas fa-shapes"
    }
  ]
}
```

### 2. API Endpoints

#### Get Simulations by Class and Subject
```
GET /api/simulations/:classNumber/:subject
```
Returns array of simulations for the specified class and subject.

**Example Response:**
```json
[
  {
    "id": "shapes_sim_6",
    "name": "Shape Explorer",
    "route": "/simulation/shapes-class-6",
    "icon": "fas fa-shapes"
  }
]
```

### 3. Simulation Routes

#### Dynamic Simulation Handler
```
GET /simulation/:simType?class=:classNumber
```
Renders simulation templates based on the simulation type.

**Supported Simulations:**
- `shapes-class-6` → Shape Explorer (Mathematics)
- `fractions-class-6` → Fraction Visualizer (Mathematics)
- `materials-class-6` → Materials Lab (Science) - Coming Soon
- `separation-class-6` → Separation Techniques (Science) - Coming Soon
- And more...

### 4. Frontend Components

#### SimulationManager (`public/js/simulations.js`)
JavaScript class that handles:
- Loading simulations from API
- Rendering simulation cards
- Creating simulation sections dynamically

**Usage:**
```javascript
// Load simulations for Class 6 Mathematics
await simManager.loadSimulations(6, 'Mathematics');
simManager.renderSimulations('container-id');
```

#### CourseNavigator Updates
- Enhanced to show simulations when a subject is clicked
- Handles navigation back from simulations
- Integrates with SimulationManager

### 5. Simulation Templates

Located in `views/simulations/`:
- `shapes.ejs` - Interactive shape explorer with properties
- `fractions.ejs` - Visual fraction learning tool
- `default-sim.ejs` - Placeholder for upcoming simulations

## Available Simulations by Class

### Class 6
**Mathematics:**
- Shape Explorer - Learn about 2D shapes and their properties
- Fraction Visualizer - Understand fractions through visual models

**Science:**
- Materials Lab (Coming Soon)
- Separation Techniques (Coming Soon)

### Class 7
**Mathematics:**
- Angles & Lines Lab (Coming Soon)
- Equation Solver (Coming Soon)

**Science:**
- Heat Transfer Lab (Coming Soon)
- Motion Simulator (Coming Soon)
- Electric Circuit Lab (Coming Soon)

### Class 8
**Mathematics:**
- Quadrilateral Explorer (Coming Soon)

**Science:**
- Force & Pressure Lab (Coming Soon)
- Sound Wave Explorer (Coming Soon)

### Class 9
**Science:**
- Gravity Simulator (Coming Soon)
- Energy Lab (Coming Soon)

### Class 10
**Science:**
- Light & Reflection (Available)
- Human Eye Lab (Available)
- Chemical Reactions Lab (Coming Soon)

## User Flow

1. **Select Class**: User clicks "Game-Based Learning" and selects their class
2. **Choose Subject**: User selects Mathematics or Science
3. **View Simulations**: Interactive cards display available simulations
4. **Start Simulation**: Click "Start Simulation" to launch
5. **Interactive Learning**: Engage with the simulation
6. **Navigate Back**: Use back button to return to course selection

## Styling

### Simulation Cards
- Gradient background (purple theme)
- Hover effects with elevation
- Animated entrance
- Responsive grid layout

### Simulation Pages
- Full-screen canvas for interactive content
- Clear header with class badge
- Back navigation
- Consistent color scheme

## Adding New Simulations

### Step 1: Update `courses.json`
```json
{
  "id": "new_sim_id",
  "name": "Simulation Name",
  "route": "/simulation/type-class-X",
  "icon": "fas fa-icon-name"
}
```

### Step 2: Create EJS Template
Create `views/simulations/your-sim.ejs` with interactive content.

### Step 3: Update Route Mapping (if needed)
In `server.js`, add to `simMap` if using custom template name:
```javascript
const simMap = {
  'type-class-X': 'your-sim',
  // ...
};
```

### Step 4: Test
1. Restart server
2. Navigate to class and subject
3. Verify simulation appears
4. Test simulation functionality

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Frontend**: Vanilla JavaScript, Canvas API
- **Styling**: CSS3 with animations
- **Icons**: Font Awesome 6.4.0

## API Integration Examples

### Load and Display Simulations
```javascript
// In your component
const simManager = new SimulationManager();
await simManager.loadSimulations(6, 'Mathematics');
simManager.renderSimulations('my-container');
```

### Fetch Specific Class Simulations
```javascript
fetch('/api/simulations/7/Science')
  .then(res => res.json())
  .then(sims => console.log(sims));
```

## Performance Considerations

- Simulations are loaded on-demand
- Canvas-based rendering for smooth animations
- Lazy loading of simulation templates
- Optimized asset delivery

## Future Enhancements

1. **Progress Tracking**: Save simulation completion status
2. **Assessments**: Add quiz questions after simulations
3. **Multiplayer**: Collaborative learning experiences
4. **Gamification**: Points and badges for completion
5. **Accessibility**: Enhanced keyboard navigation and screen reader support
6. **Mobile Optimization**: Touch-friendly controls
7. **Offline Support**: Service worker for offline access

## Troubleshooting

### Simulations Not Loading
- Check browser console for errors
- Verify API endpoint is accessible: `/api/simulations/:class/:subject`
- Ensure `courses.json` has correct structure

### Route Not Found
- Verify simulation route in `courses.json`
- Check `simMap` in `server.js` for custom template names
- Ensure EJS file exists in `views/simulations/`

### Canvas Not Rendering
- Check browser compatibility (Canvas API support)
- Verify canvas element ID matches JavaScript
- Check console for JavaScript errors

## Support

For issues or feature requests, please contact the development team or create an issue in the project repository.

---

**Last Updated**: 2024
**Version**: 2.0.0
