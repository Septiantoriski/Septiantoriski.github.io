function simulateSensor() {
    const tempEl = document.getElementById('temp-value');
    const humEl = document.getElementById('humidity-value');
    if (tempEl && humEl) {
        const temp = (20 + Math.random() * 10).toFixed(1);
        const hum = (40 + Math.random() * 20).toFixed(1);
        tempEl.textContent = temp;
        humEl.textContent = hum;
    }
}

simulateSensor();
setInterval(simulateSensor, 5000);

