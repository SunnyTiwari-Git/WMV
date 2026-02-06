// Particle system
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let mouseX = 0;
let mouseY = 0;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(255, ${Math.floor(Math.random() * 100 + 105)}, ${Math.floor(Math.random() * 100 + 180)}, ${Math.random() * 0.5 + 0.3})`;
        this.life = 100;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 1;
        if (this.size > 0.2) this.size -= 0.05;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createParticles(x, y) {
    for (let i = 0; i < 3; i++) {
        particles.push(new Particle(x, y));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();

// Mouse/Touch move particle effect
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    createParticles(mouseX, mouseY);
});

document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        createParticles(mouseX, mouseY);
    }
});

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Touch event variables for swipe detection
let touchStartY = 0;
let touchEndY = 0;
const SWIPE_THRESHOLD = 50;

// Handle touch start
function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

// Handle touch move
function handleTouchMove(event) {
    touchEndY = event.touches[0].clientY;
}

// Handle touch end
function handleTouchEnd() {
    const swipeDistance = touchStartY - touchEndY;

    // Check if swipe was upward and met threshold
    if (swipeDistance > SWIPE_THRESHOLD) {
        navigateToNextPage();
    }
}

// Navigate to the next page
function navigateToNextPage() {
    // Add smooth fade-out transition
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = 'valentine.html';
    }, 500);
}

// Add touch event listeners
document.body.addEventListener('touchstart', handleTouchStart, { passive: true });
document.body.addEventListener('touchmove', handleTouchMove, { passive: true });
document.body.addEventListener('touchend', handleTouchEnd, { passive: true });

// Add click handler for the swipe indicator (desktop)
const swipeIndicator = document.querySelector('.swipe-indicator');
if (swipeIndicator) {
    swipeIndicator.addEventListener('click', navigateToNextPage);
}

// Keyboard support (up arrow or space)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === ' ') {
        event.preventDefault();
        navigateToNextPage();
    }
});

// Add subtle animation to multipoodle on load
window.addEventListener('load', () => {
    const multipoodle = document.querySelector('.multipoodle');
    if (multipoodle) {
        setTimeout(() => {
            multipoodle.style.transform = 'scale(1.1) rotate(-5deg)';
            setTimeout(() => {
                multipoodle.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        }, 1000);
    }
});
