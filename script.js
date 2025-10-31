/* ============================================
   ACCEPTOPIA - Interactive JavaScript
   Futuristic 3D Animations & Effects
   ============================================ */

// ============================================
// UTILITY FUNCTIONS
// ============================================

const utils = {
    // Throttle function for performance
    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Linear interpolation
    lerp(start, end, factor) {
        return start + (end - start) * factor;
    },

    // Map range
    mapRange(value, inMin, inMax, outMin, outMax) {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
};

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Get all nav links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update active nav link
                    this.updateActiveLink(link);
                    
                    // Close mobile menu if open
                    this.closeMobileMenu();
                }
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', utils.throttle(() => {
            this.updateActiveLinkOnScroll();
        }, 100));
    }

    updateActiveLink(clickedLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }

    updateActiveLinkOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    closeMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
}

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

class MobileNav {
    constructor() {
        this.init();
    }

    init() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
                
                // Animate hamburger lines
                this.animateHamburger(navToggle);
            });
        }
    }

    animateHamburger(toggle) {
        const lines = toggle.querySelectorAll('.hamburger-line');
        if (toggle.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translateY(7px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    }
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

class ScrollReveal {
    constructor() {
        this.sections = document.querySelectorAll('section, .feature-card, .testimonial-card, .showcase-feature-item');
        this.init();
    }

    init() {
        // Add initial hidden state
        this.sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });

        // Create intersection observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections
        this.sections.forEach(section => {
            this.observer.observe(section);
        });
    }

    revealElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        
        // Add a stagger effect for child elements
        const children = element.querySelectorAll('.feature-card, .testimonial-card, .stat-item');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// ============================================
// HERO TYPING ANIMATION
// ============================================

class TypingAnimation {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        // Store original text
        this.element.setAttribute('data-text', this.text);
        this.element.textContent = '';
        this.element.style.opacity = '1';
        
        // Add blinking cursor
        this.cursor = document.createElement('span');
        this.cursor.className = 'typing-cursor';
        this.cursor.textContent = '|';
        this.element.appendChild(this.cursor);
        
        // Start typing
        setTimeout(() => this.type(), 500);
    }

    type() {
        if (this.currentIndex < this.text.length) {
            const currentText = this.text.substring(0, this.currentIndex + 1);
            this.element.textContent = currentText;
            this.element.appendChild(this.cursor);
            this.currentIndex++;
            setTimeout(() => this.type(), this.speed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                if (this.cursor && this.cursor.parentNode) {
                    this.cursor.remove();
                }
            }, 1000);
        }
    }
}

// ============================================
// PARALLAX MOUSE MOVEMENT
// ============================================

class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero-section');
        this.heroTitle = document.querySelector('.title-main');
        this.floatingElements = document.querySelectorAll('.floating-element');
        this.currentX = 0;
        this.currentY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.init();
    }

    init() {
        if (!this.hero) return;

        this.hero.addEventListener('mousemove', (e) => {
            const rect = this.hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate movement (-1 to 1 range)
            this.targetX = (x / rect.width - 0.5) * 2;
            this.targetY = (y / rect.height - 0.5) * 2;
        });

        this.hero.addEventListener('mouseleave', () => {
            this.targetX = 0;
            this.targetY = 0;
        });

        // Start animation loop
        this.animate();
    }

    animate() {
        // Smooth interpolation
        this.currentX = utils.lerp(this.currentX, this.targetX, 0.1);
        this.currentY = utils.lerp(this.currentY, this.targetY, 0.1);

        // Apply parallax to hero title
        if (this.heroTitle) {
            const moveX = this.currentX * 20;
            const moveY = this.currentY * 20;
            this.heroTitle.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        }

        // Apply parallax to floating elements with different speeds
        this.floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 15;
            const moveX = this.currentX * speed;
            const moveY = this.currentY * speed;
            element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// PARTICLE SPARKLE EFFECT
// ============================================

class ParticleEffect {
    constructor(button) {
        this.button = button;
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.isActive = false;
        this.init();
    }

    init() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'particle-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();

        window.addEventListener('resize', () => this.resizeCanvas());

        // Add event listeners
        this.button.addEventListener('mouseenter', () => this.start());
        this.button.addEventListener('mouseleave', () => this.stop());
        this.button.addEventListener('mousemove', (e) => this.createParticles(e));
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start() {
        this.isActive = true;
        this.animate();
    }

    stop() {
        this.isActive = false;
    }

    createParticles(e) {
        if (!this.isActive) return;

        const rect = this.button.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;

        // Create multiple particles
        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * 20,
                y: y + (Math.random() - 0.5) * 20,
                size: Math.random() * 4 + 2,
                speedX: (Math.random() - 0.5) * 3,
                speedY: (Math.random() - 0.5) * 3 - 1,
                life: 1,
                decay: Math.random() * 0.02 + 0.01,
                color: this.getRandomColor()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(0, 234, 255, ',
            'rgba(160, 32, 240, ',
            'rgba(255, 0, 170, ',
            'rgba(57, 255, 20, '
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        if (!this.isActive && this.particles.length === 0) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= p.decay;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color + p.life + ')';
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = p.color + '1)';
            this.ctx.fill();

            // Remove dead particles
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// ENHANCED FEATURE CARD ANIMATIONS
// ============================================

class FeatureCardAnimations {
    constructor() {
        this.cards = document.querySelectorAll('.feature-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            let isAnimating = false;

            card.addEventListener('mouseenter', (e) => {
                if (isAnimating) return;
                isAnimating = true;

                // Bounce effect
                card.style.animation = 'cardBounce 0.5s ease';
                
                // Rotate icon
                const icon = card.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(360deg)';
                }

                // Glow effect
                card.style.boxShadow = `
                    0 20px 60px rgba(0, 234, 255, 0.3),
                    0 0 40px rgba(0, 234, 255, 0.2),
                    inset 0 0 30px rgba(0, 234, 255, 0.1)
                `;

                setTimeout(() => {
                    isAnimating = false;
                    card.style.animation = '';
                }, 500);
            });

            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = '';
                }
            });

            // Add tilt effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateY(-10px) 
                    scale(1.05)
                `;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });
    }
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        if (!this.header) return;

        window.addEventListener('scroll', utils.throttle(() => {
            if (window.pageYOffset > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }, 100));
    }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        // Show/hide on scroll
        window.addEventListener('scroll', utils.throttle(() => {
            if (window.pageYOffset > 500) {
                this.button.classList.add('show');
            } else {
                this.button.classList.remove('show');
            }
        }, 100));

        // Scroll to top on click
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// GLOWING CURSOR TRAIL
// ============================================

class CursorTrail {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Create canvas for cursor trail
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'cursor-trail';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9998';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();

        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.addDot();
        });

        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addDot() {
        this.dots.push({
            x: this.mouse.x,
            y: this.mouse.y,
            size: 8,
            life: 1
        });

        // Limit number of dots
        if (this.dots.length > 15) {
            this.dots.shift();
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.dots.forEach((dot, index) => {
            dot.life -= 0.05;
            dot.size *= 0.95;

            if (dot.life > 0) {
                this.ctx.beginPath();
                this.ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                
                const gradient = this.ctx.createRadialGradient(
                    dot.x, dot.y, 0,
                    dot.x, dot.y, dot.size
                );
                gradient.addColorStop(0, `rgba(0, 234, 255, ${dot.life * 0.5})`);
                gradient.addColorStop(1, `rgba(160, 32, 240, 0)`);
                
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
            }
        });

        // Remove dead dots
        this.dots = this.dots.filter(dot => dot.life > 0);

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// TESTIMONIAL CARD ANIMATIONS
// ============================================

class TestimonialAnimations {
    constructor() {
        this.cards = document.querySelectorAll('.testimonial-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Animate stars
                const stars = card.querySelectorAll('.star-icon');
                stars.forEach((star, index) => {
                    setTimeout(() => {
                        star.style.transform = 'scale(1.3) rotate(360deg)';
                        star.style.transition = 'transform 0.5s ease';
                    }, index * 50);
                });

                // Pulse avatar
                const avatar = card.querySelector('.author-avatar');
                if (avatar) {
                    avatar.style.transform = 'scale(1.1)';
                    avatar.style.transition = 'transform 0.3s ease';
                }
            });

            card.addEventListener('mouseleave', () => {
                const stars = card.querySelectorAll('.star-icon');
                stars.forEach(star => {
                    star.style.transform = '';
                });

                const avatar = card.querySelector('.author-avatar');
                if (avatar) {
                    avatar.style.transform = '';
                }
            });
        });
    }
}

// ============================================
// FORM ANIMATIONS
// ============================================

class FormAnimations {
    constructor() {
        this.form = document.getElementById('betaForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Input focus animations
        const input = this.form.querySelector('.form-input');
        if (input) {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'scale(1.02)';
                input.parentElement.style.transition = 'transform 0.3s ease';
            });

            input.addEventListener('blur', () => {
                input.parentElement.style.transform = '';
            });
        }
    }

    handleSubmit() {
        const submitBtn = this.form.querySelector('.form-submit-btn');
        const originalText = submitBtn.innerHTML;

        // Success animation
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Joined!</span>
        `;
        submitBtn.style.background = 'linear-gradient(135deg, #39ff14, #00eaff)';

        // Create success particles
        this.createSuccessParticles(submitBtn);

        // Reset after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 3000);
    }

    createSuccessParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'success-particle';
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.borderRadius = '50%';
            particle.style.background = '#39ff14';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '10000';
            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 100 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            this.animateSuccessParticle(particle, vx, vy);
        }
    }

    animateSuccessParticle(particle, vx, vy) {
        let x = 0;
        let y = 0;
        let opacity = 1;
        const gravity = 2;

        const animate = () => {
            x += vx * 0.016;
            y += vy * 0.016;
            vy += gravity;
            opacity -= 0.02;

            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        animate();
    }
}

// ============================================
// NUMBER COUNTER ANIMATION
// ============================================

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number, .stats-number');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const numberMatch = text.match(/[\d.]+/);
        
        if (!numberMatch) return;

        const target = parseFloat(numberMatch[0]);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            current += increment;
            step++;

            if (step >= steps) {
                current = target;
                clearInterval(timer);
            }

            const suffix = hasPlus ? '+' : hasPercent ? '%' : '';
            element.textContent = Math.floor(current) + suffix;
        }, duration / steps);
    }
}

// ============================================
// 3D TILT EFFECT FOR SHOWCASE DEVICES
// ============================================

class DeviceTilt {
    constructor() {
        this.devices = document.querySelectorAll('.mockup-3d-hover');
        this.init();
    }

    init() {
        this.devices.forEach(device => {
            device.addEventListener('mousemove', (e) => {
                const rect = device.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                const frame = device.querySelector('.desktop-frame, .mobile-frame');
                if (frame) {
                    frame.style.transform = `
                        perspective(1000px) 
                        rotateX(${rotateX}deg) 
                        rotateY(${rotateY}deg)
                        scale(1.05)
                    `;
                }
            });

            device.addEventListener('mouseleave', () => {
                const frame = device.querySelector('.desktop-frame, .mobile-frame');
                if (frame) {
                    frame.style.transform = '';
                }
            });
        });
    }
}

// ============================================
// PERFORMANCE MONITOR
// ============================================

class PerformanceMonitor {
    constructor() {
        this.fps = 0;
        this.lastTime = performance.now();
        this.init();
    }

    init() {
        this.measure();
    }

    measure() {
        const currentTime = performance.now();
        const delta = currentTime - this.lastTime;
        this.fps = Math.round(1000 / delta);
        this.lastTime = currentTime;

        // Log FPS in development
        // console.log('FPS:', this.fps);

        requestAnimationFrame(() => this.measure());
    }
}

// ============================================
// ADD CUSTOM CSS ANIMATIONS
// ============================================

function addCustomAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cardBounce {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
        }

        .typing-cursor {
            display: inline-block;
            margin-left: 4px;
            animation: blink 1s infinite;
            color: var(--neon-blue);
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        .reveal-active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        /* Smooth transitions for all interactive elements */
        .feature-card,
        .testimonial-card,
        .btn-hero-primary,
        .btn-hero-secondary,
        .social-link {
            will-change: transform;
        }

        /* Optimize animations */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================

class AcceptopiaApp {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        console.log('🎮 Acceptopia - Initializing...');

        // Add custom animations
        addCustomAnimations();

        // Initialize all modules
        new SmoothScroll();
        new MobileNav();
        new HeaderScroll();
        new BackToTop();
        new ScrollReveal();
        new ParallaxEffect();
        new FeatureCardAnimations();
        new TestimonialAnimations();
        new FormAnimations();
        new CounterAnimation();
        new DeviceTilt();
        
        // Initialize typing animation for hero title
        const heroTitle = document.querySelector('.title-main');
        if (heroTitle) {
            const text = heroTitle.textContent;
            new TypingAnimation(heroTitle, text, 80);
        }

        // Initialize particle effect for Get Started button
        const getStartedBtn = document.querySelector('.btn-hero-primary');
        if (getStartedBtn) {
            new ParticleEffect(getStartedBtn);
        }

        // Initialize cursor trail
        new CursorTrail();

        // Performance monitoring (optional)
        // new PerformanceMonitor();

        console.log('✨ Acceptopia - Ready!');
    }
}

// Start the application
new AcceptopiaApp();

