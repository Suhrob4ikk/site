// script.js

// Основная логика приложения

document.addEventListener('DOMContentLoaded', function() {
    // DOM элементы
    const mainMenuSection = document.querySelector('.levels-section');
    const testSection = document.querySelector('.test-section');
    const resultsSection = document.querySelector('.results-section');
    const statsSection = document.querySelector('.statistics-section');
    const levelCards = document.querySelectorAll('.level-card');
    const startButtons = document.querySelectorAll('.start-btn');
    const testTitle = document.getElementById('test-title');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const progressFill = document.querySelector('.progress-fill');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    const restartBtn = document.getElementById('restart-btn');
    const backToMainBtn = document.getElementById('back-to-main');
    const reviewBtn = document.getElementById('review-btn');
    const timeElement = document.getElementById('time');
    const scoreValue = document.getElementById('score-value');
    const maxScore = document.getElementById('max-score');
    const timeTaken = document.getElementById('time-taken');
    const levelAchieved = document.getElementById('level-achieved');
    const resultsBreakdown = document.getElementById('results-breakdown');
    const scoreCircle = document.querySelector('.progress-ring__circle');
    const scoreValueElement = document.querySelector('.score-value');
    const navLinks = document.querySelectorAll('.nav-link');
    const usernameInput = document.getElementById('username');
    const statsBtn = document.getElementById('stats-btn');
    const backBtn = document.getElementById('back-btn');
    const welcomeTitle = document.getElementById('welcome-title');
    const easyDesc = document.getElementById('easy-desc');
    const mediumDesc = document.getElementById('medium-desc');
    const hardDesc = document.getElementById('hard-desc');
    const completeTestBtn = document.getElementById('complete-test-btn');

    // Переменные состояния
    let currentLevel = null;
    let currentSubject = 'derivatives';
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let score = 0;
    let timerInterval = null;
    let timeLeft = 40 * 60;

    // Инициализация приложения
    function init() {
        // Обработчики выбора уровня
        startButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                currentLevel = levelCards[index].getAttribute('data-level');
                startTest(currentSubject, currentLevel);
            });
            // Обработчик кнопки "Завершить тест"
completeTestBtn.addEventListener('click', function() {
    if (confirm('Вы уверены, что хотите завершить тест досрочно? Все ответы будут сохранены.')) {
        finishTest();
    }
});
        });

        // Обработчики навигационного меню
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Удаляем активный класс у всех ссылок
                navLinks.forEach(l => l.classList.remove('active'));
                // Добавляем активный класс к текущей ссылке
                this.classList.add('active');
                
                // Определяем выбранный раздел
                const subject = this.getAttribute('data-subject');
                
                if (subject === 'differentials') {
                    alert('Раздел "Дифференциальные уравнения" находится в разработке.');
                    return;
                }
                
                currentSubject = subject;
                
                // Обновляем заголовок
                updateWelcomeTitle(subject);
                
                // Обновляем описания уровней
                updateLevelDescriptions(subject);
            });
        });

        // Обработчик кнопки статистики
        statsBtn.addEventListener('click', showStatistics);

        // Обработчик кнопки назад из статистики
        backBtn.addEventListener('click', () => {
            statsSection.classList.add('hidden');
            mainMenuSection.classList.remove('hidden');
        });

        // Обработчик кнопки "На главную" из результатов
        backToMainBtn.addEventListener('click', () => {
            resultsSection.classList.add('hidden');
            mainMenuSection.classList.remove('hidden');
        });

        // Обработчик кнопки "Пройти другой тест" из результатов
        restartBtn.addEventListener('click', () => {
            resultsSection.classList.add('hidden');
            testSection.classList.remove('hidden');
            currentQuestionIndex = 0;
            userAnswers = new Array(currentQuestions.length).fill(null);
            showQuestion(currentQuestionIndex);
            startTimer();
        });

        // Обработчики навигации по вопросам
        nextBtn.addEventListener('click', goToNextQuestion);
        prevBtn.addEventListener('click', goToPrevQuestion);
        finishBtn.addEventListener('click', finishTest);
    }

    // Обновление заголовка при смене раздела
    function updateWelcomeTitle(subject) {
        const subjectNames = {
            derivatives: 'Производные',
            integrals: 'Интегралы',
            series: 'Ряды'
        };
        
        welcomeTitle.textContent = `Академическое тестирование: ${subjectNames[subject]}`;
    }

    // Обновление описаний уровней при смене раздела
    function updateLevelDescriptions(subject) {
        easyDesc.textContent = descriptions[subject].easy;
        mediumDesc.textContent = descriptions[subject].medium;
        hardDesc.textContent = descriptions[subject].hard;
    }

    // Начать тест
    function startTest(subject, level) {
        // Получить вопросы для выбранного уровня и раздела
        const allQuestions = getQuestionsBySubject(subject, level);
        
        // Выбрать 20 случайных вопросов
        currentQuestions = allQuestions.slice(0, 20);
        
        // Установить заголовок теста
        const levelNames = {
            easy: 'Базовый уровень',
            medium: 'Продвинутый уровень',
            hard: 'Экспертный уровень'
        };
        
        const subjectNames = {
            derivatives: 'Производные',
            integrals: 'Интегралы',
            series: 'Ряды'
        };
        
        testTitle.textContent = `Тестирование: ${subjectNames[subject]} - ${levelNames[level]}`;
        
        // Сбросить состояние
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill(null);
        score = 0;
        timeLeft = 40 * 60;
        
        // Обновить информацию о количестве вопросов
        totalQuestionsElement.textContent = currentQuestions.length;
        
        // Запустить таймер
        startTimer();
        
        // Показать раздел теста, скрыть главное меню
        mainMenuSection.classList.add('hidden');
        testSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        statsSection.classList.add('hidden');
        
        // Показать первый вопрос
        showQuestion(currentQuestionIndex);
    }

    // Таймер
    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        
        updateTimerDisplay();
        
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                finishTest();
            }
        }, 1000);
    }
    
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Изменение цвета при малом оставшемся времени
        if (timeLeft < 300) {
            timeElement.style.color = '#e74c3c';
        }
    }

    // Показать вопрос
    function showQuestion(index) {
        const question = currentQuestions[index];
        
        // Обновить текст вопроса
        questionText.textContent = question.question;
        
        // Очистить контейнер ответов
        answersContainer.innerHTML = '';
        
        // Добавить варианты ответов
        question.answers.forEach((answer, i) => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('answer-btn');
            if (userAnswers[index] === i) {
                answerButton.classList.add('selected');
            }
            answerButton.textContent = answer.text;
            answerButton.addEventListener('click', () => selectAnswer(i));
            answersContainer.appendChild(answerButton);
        });
        
        // Обновить номер текущего вопроса
        currentQuestionElement.textContent = index + 1;
        
        // Обновить прогресс
        const progressPercent = ((index + 1) / currentQuestions.length) * 100;
        progressFill.style.width = `${progressPercent}%`;
        
        // Обновить состояние кнопок навигации
    prevBtn.disabled = index === 0;
    
    if (index === currentQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        completeTestBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        completeTestBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
    
    // Перерисовка MathJax
    MathJax.typeset();
    }

    // Выбор ответа
    function selectAnswer(answerIndex) {
        // Снять выделение со всех ответов
        const allAnswers = document.querySelectorAll('.answer-btn');
        allAnswers.forEach(btn => btn.classList.remove('selected'));
        
        // Выделить выбранный ответ
        allAnswers[answerIndex].classList.add('selected');
        
        // Сохранить ответ пользователя
        userAnswers[currentQuestionIndex] = answerIndex;
    }

    // Переход к следующему вопросу
    function goToNextQuestion() {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    }

    // Переход к предыдущему вопросу
    function goToPrevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    }

    // Завершение теста
    function finishTest() {
        clearInterval(timerInterval);
        const score = calculateResults();
        const totalQuestions = currentQuestions.length;
        const percentage = Math.round((score / totalQuestions) * 100);
        
        // Определить уровень по результатам
        let levelText = '';
        if (percentage >= 90) levelText = 'Отлично';
        else if (percentage >= 75) levelText = 'Очень хорошо';
        else if (percentage >= 60) levelText = 'Хорошо';
        else if (percentage >= 40) levelText = 'Удовлетворительно';
        else levelText = 'Неудовлетворительно';
        
        // Расчет времени выполнения
        const timeSpent = (40 * 60 - timeLeft);
        const minutesSpent = Math.floor(timeSpent / 60);
        const secondsSpent = timeSpent % 60;
        const timeSpentText = `${minutesSpent} мин ${secondsSpent} сек`;
        
        // Обновить UI с результатами
        scoreValue.textContent = score;
        maxScore.textContent = totalQuestions;
        timeTaken.textContent = timeSpentText;
        levelAchieved.textContent = levelText;
        
        // Установить значение в круговой диаграмме
        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (percentage / 100) * circumference;
        scoreCircle.style.strokeDashoffset = offset;
        scoreValueElement.textContent = `${percentage}%`;
        
        // Сохранение результатов
        const username = usernameInput.value.trim() || 'Аноним';
        saveResult(username, currentSubject, currentLevel, score, totalQuestions, timeSpentText);
        
        // Показать детальные результаты
        showDetailedResults();
        
        // Показать раздел результатов, скрыть раздел теста
        testSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }

    // Расчет результатов
    function calculateResults() {
        score = 0;
        currentQuestions.forEach((question, index) => {
            const userAnswerIndex = userAnswers[index];
            if (userAnswerIndex !== null && question.answers[userAnswerIndex].correct) {
                score++;
            }
        });
        
        return score;
    }

    // Показать детальные результаты
    function showDetailedResults() {
        resultsBreakdown.innerHTML = '';
        
        currentQuestions.forEach((question, index) => {
            const userAnswerIndex = userAnswers[index];
            const isCorrect = userAnswerIndex !== null && question.answers[userAnswerIndex].correct;
            
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            let answerStatus = isCorrect ? 
                '<span style="color: #2ecc71;"><i class="fas fa-check-circle"></i> Правильно</span>' : 
                '<span style="color: #e74c3c;"><i class="fas fa-times-circle"></i> Неправильно</span>';
            
            let userAnswerText = userAnswerIndex !== null ? 
                question.answers[userAnswerIndex].text : 'Нет ответа';
            let correctAnswerText = question.answers.find(a => a.correct).text;
            
            resultItem.innerHTML = `
                <p><strong>Вопрос ${index + 1}:</strong> ${question.question}</p>
                <p>Ваш ответ: ${userAnswerText}</p>
                <p>Правильный ответ: ${correctAnswerText}</p>
                <p>${answerStatus}</p>
            `;
            
            resultsBreakdown.appendChild(resultItem);
        });
        
        // Перерисовка MathJax
        MathJax.typeset();
    }

    // Показать статистику
    function showStatistics() {
        const username = usernameInput.value.trim();
        if (!username) {
            alert('Пожалуйста, введите ваше имя для просмотра статистики.');
            return;
        }

        displayStatistics(username);
        
        mainMenuSection.classList.add('hidden');
        statsSection.classList.remove('hidden');
    }

    // Инициализация приложения
    init();
});
