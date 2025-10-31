# Acceptopia - Coding Standards & Best Practices

## 📋 Table of Contents
1. [General Principles](#general-principles)
2. [HTML Standards](#html-standards)
3. [CSS Standards](#css-standards)
4. [JavaScript Standards](#javascript-standards)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Performance Guidelines](#performance-guidelines)
7. [Version Control](#version-control)
8. [Code Review Checklist](#code-review-checklist)

---

## 🎯 General Principles

### Core Values
- **Readability First**: Code is read more often than written
- **Maintainability**: Think about the next developer
- **Performance**: Optimize, but don't over-optimize
- **Accessibility**: Build for everyone
- **Progressive Enhancement**: Start with basics, enhance progressively

### Code Philosophy
```
Clean Code > Clever Code
Consistent Code > Perfect Code
Working Code > Optimized Code (initially)
```

---

## 📄 HTML Standards

### 1. Document Structure
```html
<!-- ✅ GOOD: Semantic, well-structured -->
<header role="banner">
    <nav role="navigation" aria-label="Main navigation">
        <!-- Navigation content -->
    </nav>
</header>

<main id="main-content" role="main">
    <section aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <!-- Section content -->
    </section>
</main>

<footer role="contentinfo">
    <!-- Footer content -->
</footer>

<!-- ❌ BAD: Non-semantic, no structure -->
<div class="header">
    <div class="nav">
        <!-- Navigation content -->
    </div>
</div>
```

### 2. Semantic Elements
**Always use semantic HTML5 elements:**
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- `<h1>` to `<h6>` in proper hierarchy
- `<button>` for clickable actions
- `<a>` for navigation links

### 3. Accessibility Attributes
```html
<!-- ✅ GOOD: Descriptive and accessible -->
<button 
    type="button" 
    aria-label="Open navigation menu" 
    aria-expanded="false"
    aria-controls="nav-menu"
>
    <span class="sr-only">Menu</span>
    <svg aria-hidden="true"><!-- Icon --></svg>
</button>

<img 
    src="image.jpg" 
    alt="Team celebrating achievement" 
    loading="lazy"
    width="600" 
    height="400"
>

<!-- ❌ BAD: Missing accessibility -->
<div onclick="openMenu()">
    <img src="image.jpg">
</div>
```

### 4. Forms
```html
<!-- ✅ GOOD: Labeled, accessible forms -->
<form method="post" action="/submit" novalidate>
    <div class="form-group">
        <label for="email-input">Email Address</label>
        <input 
            type="email" 
            id="email-input" 
            name="email"
            aria-required="true"
            aria-describedby="email-hint"
            autocomplete="email"
            required
        >
        <span id="email-hint" class="form-hint">
            We'll never share your email
        </span>
    </div>
    
    <button type="submit">Submit</button>
</form>
```

### 5. Comments
```html
<!-- ========================================
     SECTION: FEATURES - PRODUCT HIGHLIGHTS
     ======================================== -->
<section class="features-section" id="features">
    <!-- Feature cards grid -->
    <div class="features-grid">
        <!-- Individual feature card -->
        <article class="feature-card">
            <!-- Card content -->
        </article>
    </div>
</section>
```

---

## 🎨 CSS Standards

### 1. Naming Conventions (BEM-Inspired)
```css
/* ✅ GOOD: Clear, descriptive names */
.feature-card { }
.feature-card__icon { }
.feature-card__title { }
.feature-card--featured { }

.btn { }
.btn--primary { }
.btn--large { }

/* ❌ BAD: Unclear, abbreviations */
.fc { }
.fc-i { }
.b1 { }
```

### 2. Organization
```css
/* Component Structure */
.component-name {
    /* Positioning */
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    
    /* Display & Box Model */
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    
    /* Typography */
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-primary);
    
    /* Visual */
    background: var(--bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    /* Animation */
    transition: all 0.3s ease;
}
```

### 3. CSS Variables
```css
/* ✅ GOOD: Descriptive, organized variables */
:root {
    /* Colors - Organized by category */
    --neon-blue: #00eaff;
    --neon-violet: #a020f0;
    
    --text-primary: #ffffff;
    --text-secondary: #b8b8d4;
    
    /* Spacing - Consistent scale */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    
    /* Typography */
    --font-heading: 'Orbitron', sans-serif;
    --font-body: 'Poppins', sans-serif;
}
```

### 4. Media Queries (Mobile-First)
```css
/* ✅ GOOD: Mobile-first approach */
.component {
    padding: 1rem;
    font-size: 1rem;
}

@media (min-width: 768px) {
    .component {
        padding: 2rem;
        font-size: 1.125rem;
    }
}

@media (min-width: 1024px) {
    .component {
        padding: 3rem;
        font-size: 1.25rem;
    }
}

/* ❌ BAD: Desktop-first (harder to maintain) */
.component {
    padding: 3rem;
    font-size: 1.25rem;
}

@media (max-width: 1024px) {
    .component {
        padding: 2rem;
    }
}
```

### 5. Performance
```css
/* ✅ GOOD: Hardware accelerated properties */
.animated-element {
    transform: translateZ(0);
    will-change: transform;
    transition: transform 0.3s ease;
}

.animated-element:hover {
    transform: translateY(-10px);
}

/* ❌ BAD: Causes reflow/repaint */
.slow-element {
    transition: width 0.3s ease;
}

.slow-element:hover {
    width: 150%;
}
```

---

## ⚙️ JavaScript Standards

### 1. Code Structure
```javascript
/**
 * Feature card animations controller
 * Handles 3D tilt effects and hover interactions
 * 
 * @class FeatureCardAnimations
 * @example
 * const animations = new FeatureCardAnimations();
 */
class FeatureCardAnimations {
    /**
     * Creates an instance of FeatureCardAnimations
     * @constructor
     */
    constructor() {
        this.cards = document.querySelectorAll('.feature-card');
        this.init();
    }

    /**
     * Initialize event listeners
     * @private
     */
    init() {
        this.cards.forEach(card => {
            this.attachEventListeners(card);
        });
    }

    /**
     * Attach mouse event listeners to card
     * @param {HTMLElement} card - The card element
     * @private
     */
    attachEventListeners(card) {
        card.addEventListener('mouseenter', () => this.handleMouseEnter(card));
        card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
    }

    /**
     * Handle mouse enter event
     * @param {HTMLElement} card - The card element
     * @private
     */
    handleMouseEnter(card) {
        // Implementation
    }

    /**
     * Handle mouse leave event
     * @param {HTMLElement} card - The card element
     * @private
     */
    handleMouseLeave(card) {
        // Implementation
    }
}
```

### 2. Variable Naming
```javascript
// ✅ GOOD: Descriptive, camelCase
const userProfileData = fetchUserProfile();
const isAuthenticated = checkAuthStatus();
const MAX_RETRY_ATTEMPTS = 3;

// ❌ BAD: Unclear, inconsistent
const upd = fetchUserProfile();
const auth = checkAuthStatus();
const retry_max = 3;
```

### 3. Functions
```javascript
// ✅ GOOD: Single responsibility, clear purpose
function calculateTotalPrice(items) {
    return items.reduce((total, item) => total + item.price, 0);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// ❌ BAD: Does too much
function processOrder(items) {
    const total = items.reduce((t, i) => t + i.price, 0);
    const formatted = '$' + total.toFixed(2);
    sendToServer(formatted);
    updateUI(formatted);
    logAnalytics(formatted);
}
```

### 4. Error Handling
```javascript
// ✅ GOOD: Proper error handling
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Failed to fetch data:', error);
        // Handle error gracefully
        return null;
    }
}

// ❌ BAD: Silent failures
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
```

### 5. Comments
```javascript
// ✅ GOOD: Explains "why", not "what"
// Throttle scroll events to prevent performance issues on low-end devices
const handleScroll = throttle(() => {
    updateHeaderState();
}, 100);

// Calculate with buffer to prevent edge cases where
// floating point precision causes layout shifts
const width = Math.ceil(containerWidth * 1.01);

// ❌ BAD: States the obvious
// Set the width
const width = 100;

// Add event listener
button.addEventListener('click', handleClick);
```

---

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance

#### 1. Keyboard Navigation
```javascript
// Trap focus in modal
class Modal {
    trapFocus() {
        const focusableElements = this.modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        this.modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        });
    }
}
```

#### 2. ARIA Labels
```html
<!-- Dynamic content updates -->
<div 
    role="status" 
    aria-live="polite" 
    aria-atomic="true"
>
    Loading...
</div>

<!-- Interactive elements -->
<button 
    aria-expanded="false" 
    aria-controls="dropdown-menu"
    aria-haspopup="true"
>
    Options
</button>
```

#### 3. Color Contrast
- **Normal text:** Minimum 4.5:1 contrast ratio
- **Large text (18pt+):** Minimum 3:1 contrast ratio
- **Interactive elements:** Clear focus indicators

---

## ⚡ Performance Guidelines

### 1. Loading Performance
```html
<!-- Defer non-critical JavaScript -->
<script src="script.js" defer></script>

<!-- Lazy load images -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
```

### 2. Runtime Performance
```javascript
// ✅ GOOD: Throttle/Debounce expensive operations
const handleResize = debounce(() => {
    recalculateLayout();
}, 250);

// Use requestAnimationFrame for animations
function animate() {
    updatePosition();
    requestAnimationFrame(animate);
}

// ❌ BAD: No throttling
window.addEventListener('resize', () => {
    recalculateLayout(); // Called hundreds of times per second
});
```

### 3. CSS Performance
```css
/* ✅ GOOD: Efficient selectors */
.feature-card { }
.btn-primary { }

/* Use transform instead of position changes */
.element {
    transform: translate3d(0, 0, 0);
}

/* ❌ BAD: Overly specific, slow selectors */
body div.container article.post p span.highlight { }

/* Causes reflow */
.element {
    position: absolute;
    left: 100px;
}
```

---

## 🔄 Version Control

### Commit Messages
```bash
# ✅ GOOD: Clear, descriptive commits
feat: Add scroll reveal animations to feature cards
fix: Resolve mobile navigation z-index issue
docs: Update README with installation instructions
refactor: Simplify testimonial card hover effects
perf: Optimize image loading with lazy loading

# ❌ BAD: Vague commits
Update stuff
Fix bug
Changes
WIP
```

### Commit Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

---

## ✅ Code Review Checklist

### Before Submitting
- [ ] Code follows project conventions
- [ ] All functions/classes have JSDoc comments
- [ ] No console.logs in production code
- [ ] Accessibility tested (keyboard nav, screen reader)
- [ ] Cross-browser tested
- [ ] Mobile responsive
- [ ] Performance tested (Lighthouse score)
- [ ] No linter errors/warnings
- [ ] Code is self-documenting
- [ ] Edge cases handled

### Review Criteria
- **Functionality**: Does it work as expected?
- **Readability**: Can others understand it?
- **Maintainability**: Is it easy to modify?
- **Performance**: Is it optimized?
- **Security**: Are there vulnerabilities?
- **Accessibility**: Is it usable by everyone?

---

## 📚 Resources

### Tools
- **Linting**: ESLint, Stylelint
- **Formatting**: Prettier
- **Accessibility**: axe DevTools, WAVE
- **Performance**: Lighthouse, WebPageTest
- **Testing**: Jest, Cypress

### References
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

---

**Version:** 1.0.0  
**Last Updated:** 2025-10-31  
**Maintained by:** Acceptopia Team

---

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler

