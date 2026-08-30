const STORAGE_KEY = 'portfolio_visitors';
const SESSION_KEY = 'portfolio_session_id';

function getSessionId() {
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
}

function updateVisitorCount() {
    try {
        let visitors = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
            total: 0,
            sessions: {},
            lastReset: new Date().toDateString()
        };

        const today = new Date().toDateString();
        if (visitors.lastReset !== today) {
            visitors.total = 0;
            visitors.sessions = {};
            visitors.lastReset = today;
        }

        const sessionId = getSessionId();
        if (!visitors.sessions[sessionId]) {
            visitors.sessions[sessionId] = true;
            visitors.total++;
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(visitors));

        const el = document.getElementById('online-users-count');
        if (el) {
            el.textContent = visitors.total;
        }
    } catch (err) {
        console.warn('Storage not available, using fallback count', err);
        const el = document.getElementById('online-users-count');
        if (el) {
            el.textContent = Math.floor(Math.random() * 50) + 10;
        }
    }
}

updateVisitorCount();
setInterval(updateVisitorCount, 30000);

