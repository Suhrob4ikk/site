// Переменные для теста
let currentTest = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let testStartTime;
let currentDifficulty = '';

// Функции теста производных
function startDerivativesTest(difficulty) {
    // Берём выбранное время
    const timeSelect = document.getElementById('derivativesTime');
    const selectedTime = parseInt(timeSelect.value) * 60; // переводим в секунды
    timeRemaining = selectedTime;

    currentDifficulty = difficulty;
    
    let questionPool;
    if (difficulty === 'easy') questionPool = easyDerivativesQuestions;
    else if (difficulty === 'medium') questionPool = mediumDerivativesQuestions;
    else questionPool = hardDerivativesQuestions;
    
    currentTest = [...questionPool].sort(() => 0.5 - Math.random()).slice(0, Math.min(20, questionPool.length));
    currentQuestionIndex = 0;
    userAnswers = new Array(currentTest.length).fill(null);
    testStartTime = Date.now();
    
    document.getElementById('derivativesSection').classList.add('hidden');
    document.getElementById('derivativesTest').classList.remove('hidden');
    document.getElementById('resultsPage').classList.add('hidden');
    
    document.getElementById('totalQuestions').textContent = currentTest.length;
    document.getElementById('difficultyLabel').textContent = `Уровень: ${difficulty === 'easy' ? 'Легкий' : difficulty === 'medium' ? 'Средний' : 'Сложный'}`;
    
    startTimer(); // таймер стартует с выбранного времени
    displayQuestion();
}



function startIntegralsTest(difficulty) {
    const timeSelect = document.getElementById('integralsTime');
    const selectedTime = parseInt(timeSelect.value) * 60;
    timeRemaining = selectedTime;

    currentDifficulty = difficulty;

    let questionPool;
    if (difficulty === 'easy') questionPool = easyIntegralsQuestions;
    else if (difficulty === 'medium') questionPool = mediumIntegralsQuestions;
    else if (difficulty === 'hard') questionPool = hardIntegralsQuestions;

    currentTest = [...questionPool].sort(() => 0.5 - Math.random()).slice(0, Math.min(20, questionPool.length));

    currentQuestionIndex = 0;
    userAnswers = new Array(currentTest.length).fill(null);
    testStartTime = Date.now();

    document.getElementById('integralsSection').classList.add('hidden');
    document.getElementById('derivativesTest').classList.remove('hidden');
    document.getElementById('resultsPage').classList.add('hidden');

    document.getElementById('totalQuestions').textContent = currentTest.length;
    document.getElementById('difficultyLabel').textContent = `Раздел: Интегралы, уровень: ${difficulty === 'easy' ? 'Легкий' : difficulty === 'medium' ? 'Средний' : 'Сложный'}`;

    startTimer();
    displayQuestion();
}







function restartTest() {
    startDerivativesTest(currentDifficulty);
}

function displayQuestion() {
    const question = currentTest[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
                ${question.question}
            </h3>
        </div>
        
        <div class="space-y-3">
    ${question.options.map((option, index) => `
        <label class="flex items-start w-full p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors break-words whitespace-normal ${userAnswers[currentQuestionIndex] === index ? 'border-green-500 bg-green-50' : 'border-gray-200'}">
            <input type="radio" name="answer" value="${index}" class="mr-3 mt-1" ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''} onchange="selectAnswer(${index})">
            <span class="text-gray-700 break-words whitespace-normal">${option}</span>
        </label>
    `).join('')}
</div>

    `;
    
    // Обновляем прогресс
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / currentTest.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Обновляем кнопки
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn'); // новая кнопка «Завершить тест»
    
    if (currentQuestionIndex === currentTest.length - 1) {
        nextBtn.style.display = 'none';  // скрываем кнопку «Следующий»
        finishBtn.style.display = 'inline-block'; // показываем кнопку «Завершить тест»
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
    
    // Перерендерим MathJax
    if (window.MathJax) {
        MathJax.typesetPromise([container]).catch((err) => console.log(err.message));
    }
}


function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
}

function nextQuestion() {
    if (currentQuestionIndex < currentTest.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishTest();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function finishTest() {
    // Останавливаем таймер
    stopTimer();
    
    // Подсчитываем результаты
    let correctAnswers = 0;
    const results = [];
    
    for (let i = 0; i < currentTest.length; i++) {
        const isCorrect = userAnswers[i] === currentTest[i].correct;
        if (isCorrect) correctAnswers++;
        
        results.push({
            question: currentTest[i].question,
            userAnswer: userAnswers[i] !== null ? currentTest[i].options[userAnswers[i]] : 'Не отвечено',
            correctAnswer: currentTest[i].options[currentTest[i].correct],
            isCorrect: isCorrect
        });
    }
    
    const percentage = Math.round((correctAnswers / currentTest.length) * 100);
    
    // Показываем результаты
    document.getElementById('derivativesTest').classList.add('hidden');
    document.getElementById('resultsPage').classList.remove('hidden');
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    const scoreText = document.getElementById('scoreText');
    
    scoreDisplay.textContent = `${correctAnswers}/${currentTest.length}`;
    scoreDisplay.className = percentage >= 70 ? 'text-6xl font-bold mb-4 text-green-600' : 'text-6xl font-bold mb-4 text-red-600';
    
    scoreText.textContent = `Правильных ответов: ${percentage}%`;
    
    // Детальные результаты
    const detailedResults = document.getElementById('detailedResults');
    detailedResults.innerHTML = `
        <h3 class="text-lg font-semibold mb-4">Детальные результаты:</h3>
        <div class="max-h-64 overflow-y-auto space-y-2">
            ${results.map((result, index) => `
                <div class="p-3 rounded-lg ${result.isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}">
                    <div class="text-sm font-medium">Вопрос ${index + 1}</div>
                    <div class="text-xs text-gray-600 mt-1">
                        ${result.isCorrect ? '✓ Правильно' : '✗ Неправильно'}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}