document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const mainMenuSection = document.getElementById('main-menu');
    const testSection = document.getElementById('test-section');
    const resultsSection = document.getElementById('results-section');
    const levelCards = document.querySelectorAll('.level-card');
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
    const scoreValue = document.getElementById('score-value');
    const maxScore = document.getElementById('max-score');
    const detailedResults = document.getElementById('detailed-results');
    
    // Переменные состояния
    let currentLevel = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let score = 0;
    
    // Обработчики выбора уровня
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            currentLevel = card.getAttribute('data-level');
            startTest(currentLevel);
        });
    });
    
    // Начать тест
    function startTest(level) {
        // Получить вопросы для выбранного уровня
        currentQuestions = [...derivativesQuestions[level]];
        
        // Для будущего: выбрать 20 случайных вопросов из 50+
        // Сейчас просто используем все 5 вопросов
        // currentQuestions = getRandomQuestions(derivativesQuestions[level], 20);
        
        // Установить заголовок теста
        const levelNames = {
            easy: 'Легкий уровень',
            medium: 'Средний уровень',
            hard: 'Сложный уровень'
        };
        testTitle.textContent = `Тест: ${levelNames[level]}`;
        
        // Сбросить состояние
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill(null);
        score = 0;
        
        // Обновить информацию о количестве вопросов
        totalQuestionsElement.textContent = currentQuestions.length;
        
        // Показать раздел теста, скрыть главное меню
        mainMenuSection.classList.add('hidden');
        testSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        
        // Показать первый вопрос
        showQuestion(currentQuestionIndex);
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
        calculateResults();
        showResults();
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
    }
    
    // Показать результаты
    function showResults() {
        // Обновить счет
        scoreValue.textContent = score;
        maxScore.textContent = currentQuestions.length;
        
        // Показать детальные результаты
        detailedResults.innerHTML = '';
        currentQuestions.forEach((question, index) => {
            const userAnswerIndex = userAnswers[index];
            const isCorrect = userAnswerIndex !== null && question.answers[userAnswerIndex].correct;
            
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            let answerStatus = isCorrect ? '✓ Правильно' : '✗ Неправильно';
            let userAnswerText = userAnswerIndex !== null ? 
                question.answers[userAnswerIndex].text : 'Нет ответа';
            let correctAnswerText = question.answers.find(a => a.correct).text;
            
            resultItem.innerHTML = `
                <p><strong>Вопрос ${index + 1}:</strong> ${question.question}</p>
                <p>Ваш ответ: ${userAnswerText}</p>
                <p>Правильный ответ: ${correctAnswerText}</p>
                <p>${answerStatus}</p>
            `;
            
            detailedResults.appendChild(resultItem);
        });
        
        // Показать раздел результатов, скрыть раздел теста
        testSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }
    
    // Кнопка перезапуска
    restartBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        mainMenuSection.classList.remove('hidden');
    });
    
    // Вспомогательная функция для выбора случайных вопросов (для будущего использования)
    function getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
});