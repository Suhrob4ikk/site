// Функции навигации
function showHome() {
    stopTimer();
    
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('integralsSection').classList.add('hidden');
    document.getElementById('derivativesSection').classList.add('hidden');
    document.getElementById('derivativesTest').classList.add('hidden');
    document.getElementById('resultsPage').classList.add('hidden');
}

function showSection(section) {
    document.getElementById('homePage').classList.add('hidden');
    
    if (section === 'integrals') {
        document.getElementById('integralsSection').classList.remove('hidden');
    } else if (section === 'derivatives') {
        document.getElementById('derivativesSection').classList.remove('hidden');
    }
}
function exitTest() {
    // Скрываем страницы тестов
    document.querySelectorAll('#integralsTest, #derivativesTest').forEach(section => {
        section.classList.add('hidden');
    });

    // Скрываем результаты, если они были открыты
    document.getElementById('resultsPage').classList.add('hidden');

    // Возвращаем на главную
    document.getElementById('homePage').classList.remove('hidden');
}
