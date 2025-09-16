// results.js

// Функции для работы с результатами тестов

// Сохранение результата теста
function saveResult(username, subject, level, score, total, time) {
    const results = JSON.parse(localStorage.getItem('mathTestResults') || '{}');
    if (!results[username]) {
        results[username] = [];
    }

    const subjectNames = {
        derivatives: 'Производные',
        integrals: 'Интегралы',
        series: 'Ряды',
        differentials: 'Дифференциальные уравнения'
    };

    const levelNames = {
        easy: 'Базовый',
        medium: 'Продвинутый',
        hard: 'Экспертный'
    };

    results[username].push({
        subject: subjectNames[subject],
        level: levelNames[level],
        score: score,
        total: total,
        time: time,
        date: new Date().toLocaleString()
    });

    localStorage.setItem('mathTestResults', JSON.stringify(results));
}

// Получение результатов пользователя
function getUserResults(username) {
    const results = JSON.parse(localStorage.getItem('mathTestResults') || '{}');
    return results[username] || [];
}

// Отображение статистики
function displayStatistics(username) {
    const userResults = getUserResults(username);
    const statsContainer = document.getElementById('stats-container');
    
    if (userResults.length === 0) {
        statsContainer.innerHTML = '<p>Нет данных о результатах.</p>';
        return;
    }
    
    let statsHTML = '';
    
    // Группируем результаты по предметам
    const resultsBySubject = {};
    userResults.forEach(result => {
        if (!resultsBySubject[result.subject]) {
            resultsBySubject[result.subject] = [];
        }
        resultsBySubject[result.subject].push(result);
    });
    
    // Создаем HTML для каждого предмета
    for (const subject in resultsBySubject) {
        statsHTML += `<h3>${subject}</h3>`;
        
        resultsBySubject[subject].forEach((result, index) => {
            const percentage = Math.round((result.score / result.total) * 100);
            
            statsHTML += `
                <div class="stats-item">
                    <div class="stats-subject">${result.level} уровень (${result.date})</div>
                    <div class="stats-details">
                        <span>Результат: ${result.score}/${result.total} (${percentage}%)</span>
                        <span>Время: ${result.time}</span>
                    </div>
                </div>
            `;
        });
    }
    
    statsContainer.innerHTML = statsHTML;
}

// Очистка результатов пользователя
function clearUserResults(username) {
    const results = JSON.parse(localStorage.getItem('mathTestResults') || '{}');
    delete results[username];
    localStorage.setItem('mathTestResults', JSON.stringify(results));
}