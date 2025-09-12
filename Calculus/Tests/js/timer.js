let testTimer;
let timeRemaining = 25 * 60;

// Функции таймера
function startTimer() {
    // Сначала обновляем дисплей с текущим значением timeRemaining
    updateTimerDisplay();

    // Если таймер уже работает — останавливаем его
    if (testTimer) clearInterval(testTimer);

    testTimer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(testTimer);
            alert('Время вышло! Тест будет завершён автоматически.');
            finishTest();
        }
    }, 1000);
}



function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const timerElement = document.getElementById('timerDisplay');
    if (timerElement) {
        timerElement.textContent = display;
        
        // Меняем цвет при малом времени
        if (timeRemaining <= 300) {
            timerElement.className = 'text-lg font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-lg animate-pulse';
        } else if (timeRemaining <= 600) {
            timerElement.className = 'text-lg font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-lg';
        } else {
            timerElement.className = 'text-lg font-semibold text-green-600 bg-green-50 px-4 py-2 rounded-lg';
        }
    }
}

function stopTimer() {
    if (testTimer) {
        clearInterval(testTimer);
        testTimer = null;
    }
}