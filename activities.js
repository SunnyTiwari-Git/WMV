// Activity Database for LDR Couple Tracker
// Activities organized by day of week

const activities = {
    monday: [
        {
            id: 'mon-1',
            title: '20 Questions Deep Dive',
            description: 'Take turns asking each other 20 deep, meaningful questions. Go beyond the surface and learn something new about your partner.',
            difficulty: 'Easy',
            time: '30 minutes',
            materials: ['Video call app', 'List of questions'],
            emoji: '💬',
            tips: 'Be honest and vulnerable. This builds emotional intimacy!'
        },
        {
            id: 'mon-2',
            title: 'Voice Message Marathon',
            description: 'Send each other voice messages throughout the day describing your thoughts, feelings, and what you see. Make your partner feel present in your day.',
            difficulty: 'Easy',
            time: 'All day',
            materials: ['Messaging app'],
            emoji: '🎙️',
            tips: 'Include ambient sounds - let them hear your world!'
        },
        {
            id: 'mon-3',
            title: 'Future Planning Session',
            description: 'Video call and plan your next visit together. Discuss dates, activities, and what you\'re most excited about.',
            difficulty: 'Medium',
            time: '45 minutes',
            materials: ['Video call', 'Calendar', 'Notes app'],
            emoji: '📅',
            tips: 'Having something to look forward to strengthens your bond!'
        }
    ],

    tuesday: [
        {
            id: 'tue-1',
            title: 'Draw Each Other',
            description: 'Both of you draw portraits of each other (artistic skill not required!). Share the results and laugh together.',
            difficulty: 'Easy',
            time: '30 minutes',
            materials: ['Paper', 'Pencil/pen', 'Camera to share'],
            emoji: '🎨',
            tips: 'It\'s about fun, not perfection. The worse the drawing, the better the laughs!'
        },
        {
            id: 'tue-2',
            title: 'Collaborative Playlist',
            description: 'Create a shared playlist together. Take turns adding songs that remind you of each other or your relationship.',
            difficulty: 'Easy',
            time: '20 minutes',
            materials: ['Spotify/Apple Music'],
            emoji: '🎵',
            tips: 'Add a note explaining why you chose each song!'
        },
        {
            id: 'tue-3',
            title: 'Photo Scavenger Hunt',
            description: 'Create a list of things to photograph (something blue, something that makes you smile, etc.). Race to complete it and share!',
            difficulty: 'Medium',
            time: '1 hour',
            materials: ['Phone camera', 'List of items'],
            emoji: '📸',
            tips: 'Make it personal - include items that have meaning in your relationship!'
        }
    ],

    wednesday: [
        {
            id: 'wed-1',
            title: 'Watch Party Documentary',
            description: 'Pick an interesting documentary and watch it together using a sync tool. Discuss what you learned afterward.',
            difficulty: 'Easy',
            time: '1-2 hours',
            materials: ['Streaming service', 'Sync tool (Teleparty)', 'Video call'],
            emoji: '🎬',
            tips: 'Choose topics you\'re both curious about!'
        },
        {
            id: 'wed-2',
            title: 'Book Club for Two',
            description: 'Read the same chapter of a book and discuss it together. Share your favorite quotes and thoughts.',
            difficulty: 'Medium',
            time: '45 minutes',
            materials: ['Same book', 'Video call'],
            emoji: '📚',
            tips: 'Choose a book that sparks conversation - fiction or non-fiction!'
        },
        {
            id: 'wed-3',
            title: 'Learn Something New Together',
            description: 'Pick a skill to learn together (language, cooking, origami). Follow the same tutorial and compare results.',
            difficulty: 'Medium',
            time: '1 hour',
            materials: ['YouTube tutorial', 'Required materials'],
            emoji: '🌟',
            tips: 'Learning together creates shared experiences and inside jokes!'
        }
    ],

    thursday: [
        {
            id: 'thu-1',
            title: 'Online Multiplayer Games',
            description: 'Play online games together - co-op games work great for teamwork! Try Among Us, Minecraft, or mobile games.',
            difficulty: 'Easy',
            time: '1 hour',
            materials: ['Gaming device', 'Same game installed'],
            emoji: '🎮',
            tips: 'Co-op games strengthen teamwork, competitive games add playful banter!'
        },
        {
            id: 'thu-2',
            title: 'Trivia Night',
            description: 'Create custom trivia questions about each other and your relationship. See who knows their partner better!',
            difficulty: 'Easy',
            time: '30 minutes',
            materials: ['List of questions', 'Video call'],
            emoji: '🧠',
            tips: 'Include questions from your early days together - nostalgia is powerful!'
        },
        {
            id: 'thu-3',
            title: 'Virtual Escape Room',
            description: 'Solve an online escape room together. Work as a team to crack codes and solve puzzles.',
            difficulty: 'Medium',
            time: '1 hour',
            materials: ['Escape room website', 'Video call'],
            emoji: '🔐',
            tips: 'Communication is key - this tests how well you work together!'
        }
    ],

    friday: [
        {
            id: 'fri-1',
            title: 'Virtual Dinner Date',
            description: 'Cook the same meal together over video call. Set the table nicely, dress up, and enjoy dinner "together".',
            difficulty: 'Medium',
            time: '2 hours',
            materials: ['Same recipe ingredients', 'Video call', 'Nice table setting'],
            emoji: '🍽️',
            tips: 'Light candles and play romantic music to set the mood!'
        },
        {
            id: 'fri-2',
            title: 'Movie Night Sync',
            description: 'Watch a movie together using a sync extension. Share popcorn virtually and cuddle with your phone/laptop.',
            difficulty: 'Easy',
            time: '2 hours',
            materials: ['Streaming service', 'Teleparty/sync tool'],
            emoji: '🍿',
            tips: 'Choose a movie neither of you has seen for authentic reactions!'
        },
        {
            id: 'fri-3',
            title: 'Stargazing Together',
            description: 'Both go outside at the same time and look at the stars. Share what you see and feel connected under the same sky.',
            difficulty: 'Easy',
            time: '30 minutes',
            materials: ['Clear night', 'Phone for call', 'Blanket'],
            emoji: '⭐',
            tips: 'Use a stargazing app to identify constellations together!'
        }
    ],

    saturday: [
        {
            id: 'sat-1',
            title: 'Love Letter Exchange',
            description: 'Write heartfelt love letters to each other. Express your deepest feelings, appreciation, and desires. Read them aloud over video call.',
            difficulty: 'Medium',
            time: '1 hour',
            materials: ['Paper/digital doc', 'Quiet private space', 'Video call'],
            emoji: '💌',
            tips: 'Be vulnerable and specific. Mention little things you love about them.',
            isSpecial: true
        },
        {
            id: 'sat-2',
            title: 'Intimate Photo Exchange',
            description: 'Share tasteful, romantic photos with each other. Focus on making your partner feel desired and appreciated.',
            difficulty: 'Medium',
            time: '45 minutes',
            materials: ['Camera', 'Private messaging', 'Comfortable space'],
            emoji: '📷',
            tips: 'Consent and comfort are key. Only share what you\'re comfortable with.',
            isSpecial: true
        },
        {
            id: 'sat-3',
            title: 'Sensory Connection',
            description: 'Describe in detail how you would touch, kiss, and hold your partner if they were there. Create vivid sensory experiences through words.',
            difficulty: 'Medium',
            time: '30 minutes',
            materials: ['Private video call', 'Comfortable setting'],
            emoji: '💋',
            tips: 'Use all five senses in your descriptions. Be detailed and romantic.',
            isSpecial: true
        },
        {
            id: 'sat-4',
            title: 'Dream Date Planning',
            description: 'Plan your perfect dream date together in detail - where you\'d go, what you\'d wear, how you\'d touch, what you\'d say. Make it vivid and romantic.',
            difficulty: 'Easy',
            time: '45 minutes',
            materials: ['Video call', 'Notes app'],
            emoji: '💭',
            tips: 'Include sensory details - sounds, smells, touches. Make it feel real.',
            isSpecial: true
        },
        {
            id: 'sat-5',
            title: 'Couples Meditation & Breathwork',
            description: 'Do a guided couples meditation together. Focus on your connection, synchronize your breathing, and feel emotionally intimate.',
            difficulty: 'Easy',
            time: '30 minutes',
            materials: ['Meditation app/YouTube', 'Quiet space', 'Video call'],
            emoji: '🧘',
            tips: 'This creates emotional intimacy and helps you feel connected on a deeper level.',
            isSpecial: true
        },
        {
            id: 'sat-6',
            title: 'Romantic Storytelling',
            description: 'Take turns telling romantic or sensual stories to each other. Use your imagination to create intimate scenarios.',
            difficulty: 'Medium',
            time: '45 minutes',
            materials: ['Private call', 'Comfortable space'],
            emoji: '📖',
            tips: 'Start slow and build tension. Pay attention to what your partner responds to.',
            isSpecial: true
        }
    ],

    sunday: [
        {
            id: 'sun-1',
            title: 'Gratitude Sharing',
            description: 'Share 5 things you\'re grateful for about your partner and your relationship this week.',
            difficulty: 'Easy',
            time: '20 minutes',
            materials: ['Video call'],
            emoji: '🙏',
            tips: 'Be specific! "I\'m grateful you sent me that funny meme when I was stressed" is better than "I\'m grateful for you".'
        },
        {
            id: 'sun-2',
            title: 'Week Planning Together',
            description: 'Plan your upcoming week together. Schedule calls, activities, and set relationship goals.',
            difficulty: 'Easy',
            time: '30 minutes',
            materials: ['Calendar', 'Video call'],
            emoji: '📋',
            tips: 'Having structure helps LDR couples stay connected!'
        },
        {
            id: 'sun-3',
            title: 'Relationship Check-In',
            description: 'Have an honest conversation about how you\'re both feeling. Discuss what\'s working and what could improve.',
            difficulty: 'Medium',
            time: '45 minutes',
            materials: ['Video call', 'Open mind'],
            emoji: '💬',
            tips: 'Use "I feel" statements and listen without judgment. This strengthens your bond!'
        }
    ]
};

// Get activity for current day
function getTodaysActivity() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[new Date().getDay()];
    const todaysActivities = activities[today];

    // Get the last shown activity index from localStorage
    const lastShownKey = `lastShown_${today}`;
    let lastShownIndex = parseInt(localStorage.getItem(lastShownKey) || '-1');

    // Cycle to next activity (wraps around to 0 after last activity)
    const nextIndex = (lastShownIndex + 1) % todaysActivities.length;

    // Save the new index
    localStorage.setItem(lastShownKey, nextIndex.toString());

    // Return the next activity in the cycle
    return todaysActivities[nextIndex];
}

// Get day name
function getDayName() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
}
