const timerElement = document.getElementById('timer');
let interval;
let remainingTime = 0;

// Fonksiyonu başlat
function startTimer() {
    clearInterval(interval);
    // Rastgele bir süre belirle (1 ila 5 dakika arasında)
    const randomSeconds = Math.floor(Math.random() * (5 * 60 - 1 * 60 + 1)) + 1 * 60;
    remainingTime = randomSeconds;

    interval = setInterval(updateTimer, 1000);
}

// Zamanlayıcıyı güncelle
function updateTimer() {
    if (remainingTime <= 0) {
        startTimer(); // Sıfırlandığında yeni bir zamanlayıcı başlat
        return;
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    timerElement.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    remainingTime--;
}

// Zamanı formatla
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Başlangıç
startTimer();
