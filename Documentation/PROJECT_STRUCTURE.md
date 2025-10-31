# Acceptopia - Project Structure Documentation

## 📁 File Organization

```
landingpage/
│
├── index.html              # Main HTML file with semantic markup
├── styles.css              # Comprehensive stylesheet (organized by sections)
├── script.js               # Interactive JavaScript modules
│
├── README.md               # Project overview and setup
├── PROJECT_STRUCTURE.md    # This file - detailed structure
├── PROJECT_SUMMARY.md      # Project summary
└── QUICKSTART.md           # Quick start guide
```

## 🏗️ Architecture

### HTML Structure (`index.html`)
```
├── <head>
│   ├── Meta Tags (SEO, Social Media, PWA)
│   ├── Favicon
│   └── Stylesheet Link
│
├── <body>
│   ├── Skip to Content Link (Accessibility)
│   ├── Header (Navigation)
│   │
│   ├── Main Content
│   │   ├── Hero Section
│   │   ├── Features Section
│   │   ├── Showcase Section
│   │   ├── Testimonials Section
│   │   └── CTA Section
│   │
│   ├── Footer
│   │   ├── Brand Information
│   │   ├── Navigation Links (4 columns)
│   │   ├── Social Media Links
│   │   └── Copyright
│   │
│   ├── Back to Top Button
│   └── JavaScript
```

### CSS Structure (`styles.css`)
```
1. CSS Variables & Reset
2. Accessibility Features
3. Typography
4. Layout & Grid System
5. Header & Navigation
6. Hero Section
7. Features Section
8. Showcase Section
9. Testimonials Section
10. CTA Section
11. Footer
12. Animations & Transitions
13. Media Queries (Responsive)
14. Utility Classes
```

### JavaScript Modules (`script.js`)
```
├── Utility Functions
│   ├── throttle()
│   ├── debounce()
│   ├── lerp()
│   └── mapRange()
│
├── Core Classes
│   ├── SmoothScroll
│   ├── MobileNav
│   ├── HeaderScroll
│   ├── BackToTop
│   │
│   ├── Animation Classes
│   │   ├── ScrollReveal
│   │   ├── TypingAnimation
│   │   ├── ParallaxEffect
│   │   ├── FeatureCardAnimations
│   │   ├── TestimonialAnimations
│   │   └── DeviceTilt
│   │
│   ├── Interactive Effects
│   │   ├── ParticleEffect
│   │   ├── CursorTrail
│   │   └── FormAnimations
│   │
│   └── Performance
│       ├── CounterAnimation
│       └── PerformanceMonitor
│
└── App Initializer (AcceptopiaApp)
```

## 🎨 Design System

### Color Palette
- **Primary:** `#00eaff` (Neon Blue)
- **Secondary:** `#a020f0` (Neon Violet)
- **Accent:** `#ff00aa` (Neon Pink)
- **Success:** `#39ff14` (Neon Green)
- **Dark Background:** `#0a0a23`
- **Dark Secondary:** `#1a1a40`

### Typography
- **Headings:** Orbitron, Audiowide
- **Body:** Poppins
- **Monospace:** System monospace stack

### Spacing Scale
- **Container:** 1280px max-width
- **Section Padding:** 120px vertical
- **Grid Gap:** 24px - 60px (responsive)

### Breakpoints
```css
/* Mobile First Approach */
Mobile:   0px - 479px
Tablet:   480px - 767px
Desktop:  768px - 991px
Large:    992px+
```

## 🔧 Key Features

### 1. **Performance Optimizations**
- Lazy loading for images
- Deferred JavaScript loading
- CSS containment for complex animations
- Intersection Observer for scroll animations
- RequestAnimationFrame for smooth animations

### 2. **Accessibility (WCAG 2.1 AA)**
- Semantic HTML5 markup
- ARIA labels and roles
- Skip-to-content link
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support
- High contrast mode support

### 3. **Responsive Design**
- Mobile-first approach
- Fluid typography
- Flexible grid layouts
- Touch-friendly interactions
- Responsive images

### 4. **SEO Optimization**
- Semantic HTML structure
- Meta tags (Open Graph, Twitter Cards)
- Optimized heading hierarchy
- Alt text for images
- Clean URL structure

### 5. **Browser Compatibility**
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Graceful degradation for older browsers
- CSS fallbacks for unsupported features

## 📊 Code Quality Standards

### HTML
✅ Semantic markup
✅ Proper heading hierarchy
✅ Valid HTML5
✅ Accessibility attributes
✅ SEO meta tags
✅ Organized comments

### CSS
✅ BEM-inspired naming convention
✅ CSS custom properties (variables)
✅ Mobile-first responsive design
✅ Organized by sections
✅ Performance-optimized animations
✅ Comprehensive comments

### JavaScript
✅ ES6+ syntax
✅ Class-based architecture
✅ Modular design
✅ JSDoc-style comments
✅ Error handling
✅ Performance monitoring

## 🚀 Performance Metrics

Target Metrics:
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms

## 🔐 Security Best Practices

- No inline JavaScript
- External resource validation
- Form input sanitization (client-side)
- HTTPS recommended
- Content Security Policy ready

## 📝 Code Conventions

### Naming
- **CSS Classes:** kebab-case (`.feature-card`)
- **JavaScript:** camelCase (variables), PascalCase (classes)
- **IDs:** camelCase (`#navMenu`)
- **Constants:** SCREAMING_SNAKE_CASE

### Comments
- Section headers with clear boundaries
- Inline comments for complex logic
- JSDoc-style function documentation
- TODO markers for future improvements

### Formatting
- Indentation: 4 spaces
- Line length: 100 characters max (flexible)
- Consistent spacing around operators
- Trailing commas in multiline arrays/objects

## 🧪 Testing Checklist

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (iOS, Android)
- [ ] Accessibility audit (WAVE, axe DevTools)
- [ ] Performance audit (Lighthouse)
- [ ] SEO audit (Lighthouse, SEMrush)
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Form validation
- [ ] Link testing

## 📚 Resources & Dependencies

### External Resources
- **Google Fonts:** Orbitron, Audiowide, Poppins
- **SVG Icons:** Inline (no external dependencies)

### Browser APIs Used
- Intersection Observer API
- Performance API
- Canvas API (for particle effects)
- Request Animation Frame
- Local Storage (if needed)

---

**Version:** 1.0.0  
**Last Updated:** 2025-10-31  
**Maintained by:** Acceptopia Team

