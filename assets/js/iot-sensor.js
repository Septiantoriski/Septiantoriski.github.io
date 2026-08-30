let baseTemp = 25;
let baseHum = 50;

function simulateSensor() {
    const tempEl = document.getElementById('temp-value');
    const humEl = document.getElementById('humidity-value');

    if (tempEl && humEl) {
        baseTemp += (Math.random() - 0.5) * 2;
        baseHum += (Math.random() - 0.5) * 1.5;

        baseTemp = Math.max(15, Math.min(35, baseTemp));
        baseHum = Math.max(30, Math.min(80, baseHum));

        const temp = baseTemp.toFixed(1);
        const hum = baseHum.toFixed(1);

        tempEl.textContent = temp;
        humEl.textContent = hum;

        tempEl.style.color = temp > 28 ? '#ff6b6b' : temp < 18 ? '#4ecdc4' : '#007bff';
        humEl.style.color = hum > 70 ? '#28a745' : hum < 40 ? '#ff9800' : '#28a745';
    }
}

simulateSensor();
setInterval(simulateSensor, 3000);

