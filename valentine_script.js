// Wait for DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Playful messages for the No button
    const messages = [
        "Are you sure? 🥺",
        "Really sure?? 💔",
        "Think about it! 💭",
        "Please? 🥹",
        "Just give it a chance! ✨",
        "I'll be sad... 😢",
        "Very very sad... 💔",
        "The puppy will be sad too! 🐶",
        "Come on... 🙏",
        "Pretty please? 💕",
        "One more chance? 🌟",
        "You're breaking my heart! 💔",
        "Okay fine... but think again! 💭",
        "Last chance! ⭐",
        "You sure about this? 🤔"
    ];

    let messageIndex = 0;
    let noButtonClickCount = 0;

    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const characterImg = document.getElementById('character-img'); // This is now the dog emoji div

    // Position the No button initially
    function positionNoButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonsDiv = document.querySelector('.buttons');
        const buttonsRect = buttonsDiv.getBoundingClientRect();

        // Initial position (relative to buttons container)
        noButton.style.position = 'relative';
        noButton.style.left = '0';
        noButton.style.top = '0';
    }

    positionNoButton();

    // Make the No button dodge on hover (desktop)
    noButton.addEventListener('mouseenter', () => {
        dodgeButton();
    });

    // Make the No button dodge on touch (mobile)
    noButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        dodgeButton();
    });

    // Dodge function
    function dodgeButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();

        // Calculate safe boundaries
        const maxX = window.innerWidth - noButton.offsetWidth - 40;
        const maxY = window.innerHeight - noButton.offsetHeight - 40;
        const minX = 20;
        const minY = 20;

        // Generate random position
        const randomX = Math.random() * (maxX - minX) + minX;
        const randomY = Math.random() * (maxY - minY) + minY;

        // Update button position
        noButton.style.position = 'fixed';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
        noButton.style.transition = 'all 0.3s ease';

        // Change button text
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        // Grow the Yes button
        growYesButton();

        noButtonClickCount++;
    }

    // Grow the Yes button
    function growYesButton() {
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        const newSize = Math.min(currentSize * 1.1, 80); // Max size 80px
        yesButton.style.fontSize = `${newSize}px`;

        // Add a little bounce effect
        yesButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            yesButton.style.transform = 'scale(1)';
        }, 200);
    }

    // Handle Yes button click
    function handleYesClick() {
        // Create confetti
        createConfetti();

        // Celebrate!
        celebrate();

        // Navigate to success page after celebration
        setTimeout(() => {
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = 'yes_page.html';
            }, 500);
        }, 2000);
    }

    // Attach the Yes button click handler
    yesButton.addEventListener('click', handleYesClick);

    // Confetti creation
    function createConfetti() {
        const confettiContainer = document.getElementById('confetti-container');
        const colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#DDA0DD', '#E6E6FA', '#FFC0CB'];

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

            // Random shapes
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }

            confettiContainer.appendChild(confetti);
        }
    }

    // Celebration animation
    function celebrate() {
        // Hide No button
        noButton.style.display = 'none';

        // Animate Yes button
        yesButton.textContent = 'Yay! 🎉💕';
        yesButton.style.transform = 'scale(1.3)';
        yesButton.style.animation = 'pulse-heart 0.5s ease-in-out infinite';

        // Animate character
        characterImg.style.transform = 'scale(1.2) rotate(10deg)';
        characterImg.style.transition = 'all 0.5s ease';

        // Add celebration text
        const celebration = document.createElement('h2');
        celebration.textContent = '🎊 Woohoo! 🎊';
        celebration.style.cssText = `
        font-size: 2.5em;
        color: #FF1493;
        margin-top: 20px;
        animation: fadeIn 0.5s ease-in;
        font-family: 'Quicksand', sans-serif;
    `;
        document.querySelector('.container').appendChild(celebration);
    }

    // Add subtle character animation on hover over Yes button
    yesButton.addEventListener('mouseenter', () => {
        characterImg.style.transform = 'scale(1.1) rotate(-5deg)';
    });

    yesButton.addEventListener('mouseleave', () => {
        characterImg.style.transform = 'scale(1) rotate(0deg)';
    });

    // Prevent accidental navigation back
    window.addEventListener('load', () => {
        // Add a little welcome animation
        setTimeout(() => {
            characterImg.style.transform = 'scale(1.1)';
            setTimeout(() => {
                characterImg.style.transform = 'scale(1)';
            }, 300);
        }, 500);
    });

}); // End of DOMContentLoaded