// Touch event variables
let touchStartY = 0;
let touchEndY = 0;

// Minimum swipe distance (in pixels) to trigger navigation
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
        navigateToValentinePage();
    }
}

// Navigate to the Valentine page
function navigateToValentinePage() {
    // Add a smooth fade-out transition
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'valentine.html';
    }, 500);
}

// Add touch event listeners to the body
document.body.addEventListener('touchstart', handleTouchStart, false);
document.body.addEventListener('touchmove', handleTouchMove, false);
document.body.addEventListener('touchend', handleTouchEnd, false);

// Add click handler for the swipe indicator (for desktop users)
const swipeIndicator = document.querySelector('.swipe-indicator');
if (swipeIndicator) {
    swipeIndicator.addEventListener('click', navigateToValentinePage);
}

// Optional: Add keyboard support (up arrow or space)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === ' ') {
        event.preventDefault();
        navigateToValentinePage();
    }
});
