document.addEventListener('DOMContentLoaded', function() {
    // DOM элементы
    const mainMenuSection = document.querySelector('.levels-section');
    const testSection = document.querySelector('.test-section');
    const resultsSection = document.querySelector('.results-section');
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
    const reviewBtn = document.getElementById('review-btn');
    const timeElement = document.getElementById('time');
    const scoreValue = document.getElementById('score-value');
    const maxScore = document.getElementById('max-score');
    const timeTaken = document.getElementById('time-taken');
    const levelAchieved = document.getElementById('level-achieved');
    const resultsBreakdown = document.getElementById('results-breakdown');
    const scoreCircle = document.querySelector('.progress-ring__circle');
    const scoreValueElement = document.querySelector('.score-value');

    // Переменные состояния
    let currentLevel = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let score = 0;
    let timerInterval = null;
    let timeLeft = 40 * 60; // 40 минут в секундах

    // Загрузка вопросов (в реальном приложении это будет загрузка из data.js)
    function loadQuestions(level) {
        // В реальном приложении здесь будет импорт из data.js
        // Для демонстрации создадим mock данные
        const questions = {
            easy: [],
            medium: [],
            hard: []
        };
        
        // Заполним каждый уровень 5 вопросами (в реальности будет 60)
        for (let i = 1; i <= 5; i++) {
            questions.easy.push({
                question: `Базовый вопрос ${i}: Найдите производную функции f(x) = x^${i} + ${i}x`,
                answers: [
                    { text: `${i}x^${i-1} + ${i}`, correct: true },
                    { text: `${i}x^${i-1}`, correct: false },
                    { text: `x^${i-1} + ${i}`, correct: false },
                    { text: `${i}x^${i} + ${i}`, correct: false }
                ]
            });
            
            questions.medium.push({
                question: `Продвинутый вопрос ${i}: Найдите производную функции f(x) = sin(${i}x) + e^${i}x`,
                answers: [
                    { text: `${i}cos(${i}x) + ${i}e^${i}x`, correct: true },
                    { text: `cos(${i}x) + e^${i}x`, correct: false },
                    { text: `${i}cos(${i}x) + e^${i}x`, correct: false },
                    { text: `cos(${i}x) + ${i}e^${i}x`, correct: false }
                ]
            });
            
            questions.hard.push({
                question: `Экспертный вопрос ${i}: Найдите вторую производную функции f(x) = x^${i+2} + ln(${i}x)`,
                answers: [
                    { text: `${(i+2)*(i+1)}x^${i} - ${1/(i*i*x*x)}`, correct: true },
                    { text: `${(i+2)}x^${i+1} + ${1/(i*x)}`, correct: false },
                    { text: `${(i+2)*(i+1)}x^${i}`, correct: false },
                    { text: `${(i+2)}x^${i+1} - ${1/(i*x)}`, correct: false }
                ]
            });
        }
        
        return questions[level];
    }

    // Обработчики выбора уровня
    startButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            currentLevel = levelCards[index].getAttribute('data-level');
            startTest(currentLevel);
        });
    });

    // Начать тест
    function startTest(level) {
        // Получить вопросы для выбранного уровня
        const allQuestions = loadQuestions(level);
        
        // Выбрать 20 случайных вопросов
        currentQuestions = getRandomQuestions(allQuestions, 20);
        
        // Установить заголовок теста
        const levelNames = {
            easy: 'Базовый уровень',
            medium: 'Продвинутый уровень',
            hard: 'Экспертный уровень'
        };
        testTitle.textContent = `Тестирование: ${levelNames[level]}`;
        
        // Сбросить состояние
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill(null);
        score = 0;
        timeLeft = 40 * 60; // 40 минут
        
        // Обновить информацию о количестве вопросов
        totalQuestionsElement.textContent = currentQuestions.length;
        
        // Запустить таймер
        startTimer();
        
        // Показать раздел теста, скрыть главное меню
        mainMenuSection.classList.add('hidden');
        testSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        
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
        if (timeLeft < 300) { // Меньше 5 минут
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
            finishBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
        }
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
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });

    // Переход к предыдущему вопросу
    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });

    // Завершение теста
    finishBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        finishTest();
    });

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

    // Завершить тест и показать результаты
    function finishTest() {
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
        
        // Показать детальные результаты
        showDetailedResults();
        
        // Показать раздел результатов, скрыть раздел теста
        testSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
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
    }

    // Кнопка перезапуска
    restartBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        mainMenuSection.classList.remove('hidden');
    });

    // Вспомогательная функция для выбора случайных вопросов
    function getRandomQuestions(questions, count) {
        // В реальном приложении здесь будет логика выбора 20 случайных вопросов
        // из 60+ доступных
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
});