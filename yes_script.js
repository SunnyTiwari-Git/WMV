// Create falling hearts animation
function createFallingHearts() {
    const heartsRain = document.querySelector('.hearts-rain');
    const heartEmojis = ['💕', '💖', '💗', '💝', '💓', '💞', '💘'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.5 + 1) + 'em';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

        heartsRain.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200);
}

// Start the hearts rain
createFallingHearts();

// Add celebration sound effect (optional - using Web Audio API)
function playSuccessSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create a simple celebratory tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 523.25; // C note
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);

    // Second note
    setTimeout(() => {
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();

        osc2.connect(gain2);
        gain2.connect(audioContext.destination);

        osc2.frequency.value = 659.25; // E note
        osc2.type = 'sine';

        gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        osc2.start(audioContext.currentTime);
        osc2.stop(audioContext.currentTime + 0.5);
    }, 200);
}

// Play sound on load (user interaction required for some browsers)
window.addEventListener('load', () => {
    // Try to play sound
    try {
        playSuccessSound();
    } catch (e) {
        console.log('Audio not supported or blocked');
    }

    // Add extra sparkle effect
    setTimeout(() => {
        addSparkleEffect();
    }, 1000);
});

// Add sparkle effect around the character
function addSparkleEffect() {
    const character = document.querySelector('.happy-character');
    const sparkles = ['✨', '⭐', '💫', '🌟'];

    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '2em';
        sparkle.style.animation = 'sparkle-burst 1.5s ease-out forwards';
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        sparkle.style.transform = `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-100px)`;
        sparkle.style.opacity = '0';

        document.querySelector('.character-celebration').appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

// Add sparkle burst animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle-burst {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.5) translateY(-150px);
        }
    }
`;
document.head.appendChild(style);

// Add touch interaction - tap anywhere to create hearts
document.body.addEventListener('click', (e) => {
    createTapHeart(e.clientX, e.clientY);
});

document.body.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
        createTapHeart(e.touches[0].clientX, e.touches[0].clientY);
    }
});

function createTapHeart(x, y) {
    const heart = document.createElement('div');
    heart.textContent = '💕';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '2em';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'tap-heart 1s ease-out forwards';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// Add tap heart animation
const tapStyle = document.createElement('style');
tapStyle.textContent = `
    @keyframes tap-heart {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -150%) scale(0.5);
        }
    }
`;
document.head.appendChild(tapStyle);
