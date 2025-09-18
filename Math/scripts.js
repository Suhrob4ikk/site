// Основной JavaScript код для математической платформы

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Инициализация системы задач
    initProblemSystem();
    
    // Инициализация плавной прокрутки
    initSmoothScrolling();
    
    // Инициализация эффектов при прокрутке
    initScrollEffects();
});

// Инициализация мобильного меню
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Закрытие меню при клике на пункт
    const mobileMenuItems = document.querySelectorAll('#mobile-menu a');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Инициализация системы задач
function initProblemSystem() {
    const problemsContainer = document.getElementById('problems-container');
    const categoryButtons = document.querySelectorAll('.problem-category-btn');
    
    if (!problemsContainer) return;
    
    // Показываем все задачи по умолчанию
    displayProblems(getAllProblems());
    
    // Обработчики для кнопок категорий
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const category = this.dataset.category;
            let problemsToShow;
            
            if (category === 'all') {
                problemsToShow = getAllProblems();
            } else {
                problemsToShow = mathProblems[category] || [];
            }
            
            displayProblems(problemsToShow);
        });
    });
}

// Отображение задач в контейнере
function displayProblems(problems) {
    const problemsContainer = document.getElementById('problems-container');
    problemsContainer.innerHTML = '';
    
    if (problems.length === 0) {
        problemsContainer.innerHTML = '<p class="text-center text-gray-600">Задачи для выбранной категории не найдены.</p>';
        return;
    }
    
    problems.forEach(problem => {
        const problemElement = createProblemElement(problem);
        problemsContainer.appendChild(problemElement);
    });
}

// Создание элемента задачи
function createProblemElement(problem) {
    const div = document.createElement('div');
    div.className = 'problem-card';
    div.innerHTML = `
        <h4>Задача #${problem.id}</h4>
        <span class="category">${getCategoryName(problem.category)}</span>
        <p class="difficulty ${problem.difficulty}">Сложность: ${getDifficultyText(problem.difficulty)}</p>
        <p class="mb-4">${problem.question}</p>
        <input type="text" class="answer-input" placeholder="Ваш ответ" id="answer-${problem.id}">
        <button class="check-btn" data-id="${problem.id}">Проверить</button>
        <div class="solution hidden" id="solution-${problem.id}">
            <p><strong>Решение:</strong> ${problem.solution}</p>
        </div>
    `;
    
    // Добавляем обработчик для кнопки проверки
    const checkBtn = div.querySelector('.check-btn');
    checkBtn.addEventListener('click', function() {
        checkAnswer(this.dataset.id);
    });
    
    // Добавляем обработчик для поля ввода (проверка по Enter)
    const answerInput = div.querySelector('.answer-input');
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer(problem.id);
        }
    });
    
    return div;
}

// Проверка ответа
function checkAnswer(problemId) {
    const answerInput = document.getElementById(`answer-${problemId}`);
    const solutionDiv = document.getElementById(`solution-${problemId}`);
    const problem = findProblemById(parseInt(problemId));
    
    if (!problem || !answerInput || !solutionDiv) return;
    
    const userAnswer = answerInput.value.trim();
    const correctAnswer = problem.answer.trim();
    
    // Убираем скрытие решения
    solutionDiv.classList.remove('hidden');
    
    // Проверяем ответ
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        solutionDiv.innerHTML = `<p class="correct">✓ Верно! Ваш ответ: ${userAnswer}</p><p><strong>Решение:</strong> ${problem.solution}</p>`;
    } else {
        solutionDiv.innerHTML = `<p class="incorrect">✗ Неверно. Правильный ответ: ${correctAnswer}</p><p><strong>Решение:</strong> ${problem.solution}</p>`;
    }
}

// Поиск задачи по ID
function findProblemById(id) {
    for (const category in mathProblems) {
        const problem = mathProblems[category].find(p => p.id === id);
        if (problem) return problem;
    }
    return null;
}

// Получение читаемого названия категории
function getCategoryName(category) {
    const names = {
        'arithmetic': 'Арифметика',
        'algebra': 'Алгебра',
        'geometry': 'Геометрия',
        'calculus': 'Матанализ',
        'probability': 'Теория вероятностей'
    };
    return names[category] || category;
}

// Получение читаемого текста сложности
function getDifficultyText(difficulty) {
    const texts = {
        'easy': 'Легкая',
        'medium': 'Средняя',
        'hard': 'Сложная'
    };
    return texts[difficulty] || difficulty;
}

// Инициализация плавной прокрутки
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Инициализация эффектов при прокрутке
function initScrollEffects() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });
}

// Дополнительные функции для математических операций

// Генератор случайных математических задач
function generateRandomProblem(category) {
    const problems = mathProblems[category] || getAllProblems();
    if (problems.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * problems.length);
    return problems[randomIndex];
}

// Таймер для решения задач
function startProblemTimer(problemId, timeLimit = 300) {
    let timeLeft = timeLimit;
    const timerElement = document.createElement('div');
    timerElement.className = 'problem-timer';
    timerElement.innerHTML = `Осталось времени: ${formatTime(timeLeft)}`;
    
    const problemElement = document.getElementById(`answer-${problemId}`).parentNode;
    problemElement.appendChild(timerElement);
    
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `Осталось времени: ${formatTime(timeLeft)}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.innerHTML = 'Время вышло!';
            checkAnswer(problemId);
        }
    }, 1000);
    
    return timerInterval;
}

// Форматирование времени
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Подсветка синтаксиса математических выражений
function highlightMathExpressions() {
    // Эта функция может быть расширена для подсветки математических формул
    // с использованием библиотек типа MathJax или KaTeX
    console.log('Функция подсветки математических выражений готова к интеграции');
}