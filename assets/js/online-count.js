const NAMESPACE = 'septiantoriski_github_io';
const KEY = 'online_users';

function getCount() {
    fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
        .then(res => res.json())
        .then(data => {
            const el = document.getElementById('online-users-count');
            if (el) {
                el.textContent = data.value;
            }
        })
        .catch(err => console.error('Failed to fetch online users', err));
}

function initCounter() {
    fetch(`https://api.countapi.xyz/update/${NAMESPACE}/${KEY}?amount=1`)
        .then(getCount)
        .catch(err => console.error('Failed to update online users', err));
}

initCounter();
setInterval(getCount, 5000);

window.addEventListener('beforeunload', () => {
    navigator.sendBeacon(`https://api.countapi.xyz/update/${NAMESPACE}/${KEY}?amount=-1`);
});

