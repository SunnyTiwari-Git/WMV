// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Initialize the tracker
    function initTracker() {
        loadTodaysActivity();
        updateStats();
        createFloatingHearts();
        setupEventListeners();
    }

    // Load today's activity
    function loadTodaysActivity() {
        const activity = getTodaysActivity();
        const dayName = getDayName();

        // Update day display
        document.getElementById('dayName').textContent = dayName;

        // Check if it's Saturday (special day)
        if (new Date().getDay() === 6) {
            document.getElementById('daySpecial').textContent = '✨ Special Sensual Saturday ✨';
        } else {
            document.getElementById('daySpecial').textContent = '';
        }

        // Update activity card
        document.getElementById('activityEmoji').textContent = activity.emoji;
        document.getElementById('activityTitle').textContent = activity.title;
        document.getElementById('activityDescription').textContent = activity.description;
        const timeEl = document.getElementById('activityTime');
        timeEl.textContent = '⏱️ ' + activity.time;

        const diffEl = document.getElementById('activityDifficulty');
        diffEl.textContent = '📊 ' + activity.difficulty;
        diffEl.className = 'chip ' + (activity.difficulty || '').toLowerCase();

        // Update materials list
        const materialsList = document.getElementById('materialsList');
        materialsList.innerHTML = '';
        activity.materials.forEach(material => {
            const li = document.createElement('li');
            li.textContent = material;
            materialsList.appendChild(li);
        });

        // Update tips
        document.getElementById('tipsText').textContent = activity.tips;
    }

    // Update statistics
    function updateStats() {
        const stats = getStats();

        document.getElementById('streakValue').textContent = `${stats.currentStreak} day${stats.currentStreak !== 1 ? 's' : ''}`;
        document.getElementById('completedValue').textContent = `${stats.totalCompleted} activit${stats.totalCompleted !== 1 ? 'ies' : 'y'}`;
    }

    // Get stats from localStorage
    function getStats() {
        const completedActivities = JSON.parse(localStorage.getItem('completedActivities') || '[]');
        const lastCompletedDate = localStorage.getItem('lastCompletedDate');
        const currentStreak = parseInt(localStorage.getItem('currentStreak') || '0');

        return {
            totalCompleted: completedActivities.length,
            currentStreak: currentStreak,
            lastCompletedDate: lastCompletedDate
        };
    }

    // Create floating heart-shaped soap bubbles
    function createFloatingHearts() {
        const heartsBackground = document.querySelector('.hearts-background');
        const sizes = [15, 20, 25, 30, 35]; // Smaller, delicate sizes

        // Create 30 floating heart-shaped bubbles
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const container = document.createElement('div');
                const size = sizes[Math.floor(Math.random() * sizes.length)];

                container.style.position = 'absolute';
                container.style.left = Math.random() * 100 + '%';
                container.style.width = size + 'px';
                container.style.height = size + 'px';
                container.style.animation = `float-bubble ${Math.random() * 10 + 15}s linear infinite`;
                container.style.animationDelay = Math.random() * 5 + 's';

                // Create SVG heart-shaped neon outline
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', '0 0 100 100');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');

                // Heart path
                const heartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                heartPath.setAttribute('d', 'M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 50,25 50,25 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z');

                // Neon effect - no fill, only glowing stroke
                heartPath.setAttribute('fill', 'none');
                heartPath.setAttribute('stroke', '#FF6B9D');
                heartPath.setAttribute('stroke-width', '2');
                heartPath.setAttribute('stroke-linecap', 'round');
                heartPath.setAttribute('stroke-linejoin', 'round');

                // Multiple glowing layers for neon effect
                heartPath.style.filter = `
                    drop-shadow(0 0 2px #FF6B9D)
                    drop-shadow(0 0 4px #FF6B9D)
                    drop-shadow(0 0 6px #FF6B9D)
                    drop-shadow(0 0 10px rgba(255, 107, 157, 0.5))
                    drop-shadow(0 0 15px rgba(255, 107, 157, 0.3))
                `;

                svg.appendChild(heartPath);
                container.appendChild(svg);
                heartsBackground.appendChild(container);
            }, i * 300);
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Complete button
        document.getElementById('completeBtn').addEventListener('click', handleComplete);

        // Skip button
        document.getElementById('skipBtn').addEventListener('click', handleSkip);

        // History button
        document.getElementById('historyBtn').addEventListener('click', showHistory);

        // Close modal button
        document.getElementById('closeModal').addEventListener('click', closeHistory);

        // Close modal when clicking outside
        document.getElementById('historyModal').addEventListener('click', function (e) {
            if (e.target === this) {
                closeHistory();
            }
        });

        // Close celebration overlay when clicking on it
        document.getElementById('celebrationOverlay').addEventListener('click', function () {
            this.classList.remove('show');
        });
    }

    // Handle complete button
    function handleComplete() {
        const activity = getTodaysActivity();

        // Add to completed activities
        const completed = JSON.parse(localStorage.getItem('completedActivities') || '[]');
        if (!completed.includes(activity.id)) {
            completed.push(activity.id);
            localStorage.setItem('completedActivities', JSON.stringify(completed));
        }

        // Update streak
        updateStreak();

        // Show celebration
        showCelebration();

        // Reload activity (will show next one or first one if all completed)
        setTimeout(() => {
            loadTodaysActivity();
            updateStats();
        }, 3000);
    }

    // Handle skip button
    function handleSkip() {
        // Just reload the next activity (cycling is handled by getTodaysActivity)
        loadTodaysActivity();
    }

    // Update streak
    function updateStreak() {
        const today = new Date().toDateString();
        const lastCompleted = localStorage.getItem('lastCompletedDate');
        let currentStreak = parseInt(localStorage.getItem('currentStreak') || '0');

        if (lastCompleted) {
            const lastDate = new Date(lastCompleted);
            const todayDate = new Date(today);
            const diffTime = todayDate - lastDate;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                // Consecutive day
                currentStreak++;
            } else if (diffDays > 1) {
                // Streak broken
                currentStreak = 1;
            }
            // If diffDays === 0, already completed today, don't increment
        } else {
            // First completion
            currentStreak = 1;
        }

        localStorage.setItem('currentStreak', currentStreak.toString());
        localStorage.setItem('lastCompletedDate', today);
    }

    // Show celebration overlay
    function showCelebration() {
        const overlay = document.getElementById('celebrationOverlay');
        overlay.classList.add('show');

        // Create confetti effect
        createConfetti();

        // Auto-hide after 3 seconds
        setTimeout(() => {
            overlay.classList.remove('show');
        }, 3000);
    }

    // Create confetti
    function createConfetti() {
        const overlay = document.getElementById('celebrationOverlay');
        const confettiEmojis = ['🎉', '🎊', '✨', '💕', '💖', '⭐', '🌟'];

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
                confetti.style.position = 'absolute';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-50px';
                confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
                confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
                overlay.appendChild(confetti);

                // Remove after animation
                setTimeout(() => {
                    confetti.remove();
                }, 4000);
            }, i * 50);
        }
    }

    // Show history modal
    function showHistory() {
        const modal = document.getElementById('historyModal');
        const historyList = document.getElementById('historyList');

        // Get completed activities
        const completed = JSON.parse(localStorage.getItem('completedActivities') || '[]');

        if (completed.length === 0) {
            historyList.innerHTML = '<div class="hist-empty"><span>💕</span><p>No adventures completed yet.<br>Start your journey today!</p></div>';
        } else {
            historyList.innerHTML = '';

            // Get all activities
            const allActivities = [];
            Object.keys(activities).forEach(day => {
                activities[day].forEach(activity => {
                    if (completed.includes(activity.id)) {
                        allActivities.push({
                            ...activity,
                            day: day.charAt(0).toUpperCase() + day.slice(1)
                        });
                    }
                });
            });

            // Display completed activities
            allActivities.forEach(activity => {
                const item = document.createElement('div');
                item.className = 'hist-item';
                item.innerHTML = `
                    <span class="hist-item-emoji">${activity.emoji}</span>
                    <div>
                        <h4>${activity.title}</h4>
                        <p>${activity.day} &nbsp;·&nbsp; ${activity.time} &nbsp;·&nbsp; ${activity.difficulty}</p>
                    </div>
                `;
                historyList.appendChild(item);
            });
        }

        modal.classList.add('show');
    }

    // Close history modal
    function closeHistory() {
        document.getElementById('historyModal').classList.remove('show');
    }

    // Add fall animation for confetti
    const style = document.createElement('style');
    style.textContent = `
    @keyframes fall {
        to {
            top: 100%;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg);
        }
    }
`;
    document.head.appendChild(style);

    // Initialize on load
    initTracker();

    // Reset completed activities at midnight
    function checkMidnightReset() {
        const lastResetDate = localStorage.getItem('lastResetDate');
        const today = new Date().toDateString();

        if (lastResetDate !== today) {
            // New day - reset today's completed activities but keep history
            localStorage.setItem('lastResetDate', today);
            // Don't clear completedActivities - we need it for history
            // Just reload the page to show new activity
            loadTodaysActivity();
        }
    }

    // Check for midnight reset every minute
    setInterval(checkMidnightReset, 60000);
    checkMidnightReset();

}); // End of DOMContentLoaded
