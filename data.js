// data.js

// База данных вопросов
const mathQuestions = {
    derivatives: {
        easy: [
            // Базовые вопросы (1-20)
            {
                question: "Найдите производную функции f(x) = 5",
                answers: [
                    { text: "0", correct: true },
                    { text: "5", correct: false },
                    { text: "5x", correct: false },
                    { text: "1", correct: false }
                ]
            },
            {
                question: "Чему равна производная функции f(x) = x³?",
                answers: [
                    { text: "3x²", correct: true },
                    { text: "3x", correct: false },
                    { text: "x²", correct: false },
                    { text: "2x³", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для базового уровня здесь
        ],
        medium: [
            // Продвинутые вопросы (1-20)
            {
                question: "Найдите производную функции f(x) = ln(x)",
                answers: [
                    { text: "1/x", correct: true },
                    { text: "x", correct: false },
                    { text: "e^x", correct: false },
                    { text: "-1/x²", correct: false }
                ]
            },
            {
                question: "Чему равна производная функции f(x) = cos(x)?",
                answers: [
                    { text: "-sin(x)", correct: true },
                    { text: "sin(x)", correct: false },
                    { text: "-cos(x)", correct: false },
                    { text: "tg(x)", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для продвинутого уровня здесь
        ],
        hard: [
            // Экспертные вопросы (1-20)
            {
                question: "Найдите производную функции f(x) = x^x",
                answers: [
                    { text: "x^x(ln(x) + 1)", correct: true },
                    { text: "x·x^(x-1)", correct: false },
                    { text: "x^x·ln(x)", correct: false },
                    { text: "x^(x-1)", correct: false }
                ]
            },
            {
                question: "Чему равна производная функции f(x) = arcsin(x)?",
                answers: [
                    { text: "1/√(1-x²)", correct: true },
                    { text: "1/√(x²-1)", correct: false },
                    { text: "1/(1+x²)", correct: false },
                    { text: "-1/√(1-x²)", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для экспертного уровня здесь
        ]
    },
    integrals: {
        easy: [
            // Базовые интегралы (1-20)
            {
                question: "Найдите интеграл ∫3x² dx",
                answers: [
                    { text: "x³ + C", correct: true },
                    { text: "3x³ + C", correct: false },
                    { text: "x² + C", correct: false },
                    { text: "6x + C", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл ∫cos(x) dx?",
                answers: [
                    { text: "sin(x) + C", correct: true },
                    { text: "-sin(x) + C", correct: false },
                    { text: "cos(x) + C", correct: false },
                    { text: "-cos(x) + C", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для базового уровня здесь
        ],
        medium: [
            // Продвинутые интегралы (1-20)
            {
                question: "Найдите интеграл ∫x·e^x dx",
                answers: [
                    { text: "e^x(x - 1) + C", correct: true },
                    { text: "e^x(x + 1) + C", correct: false },
                    { text: "x·e^x + C", correct: false },
                    { text: "e^x + C", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл ∫ln(x) dx?",
                answers: [
                    { text: "x·ln(x) - x + C", correct: true },
                    { text: "x·ln(x) + C", correct: false },
                    { text: "1/x + C", correct: false },
                    { text: "x + C", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для продвинутого уровня здесь
        ],
        hard: [
            // Экспертные интегралы (1-20)
            {
                question: "Найдите интеграл ∫e^x·sin(x) dx",
                answers: [
                    { text: "(e^x(sin(x) - cos(x)))/2 + C", correct: true },
                    { text: "e^x(cos(x) + sin(x)) + C", correct: false },
                    { text: "e^x·sin(x) + C", correct: false },
                    { text: "e^x·cos(x) + C", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл ∫√(1-x²) dx?",
                answers: [
                    { text: "(x√(1-x²) + arcsin(x))/2 + C", correct: true },
                    { text: "x√(1-x²) + C", correct: false },
                    { text: "arcsin(x) + C", correct: false },
                    { text: "(x√(1-x²))/2 + C", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для экспертного уровня здесь
        ]
    },
    series: {
        easy: [
            // Базовые ряды (1-20)
            {
                question: "Является ли ряд ∑(1/n) сходящимся?",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Чему равна сумма геометрического ряда ∑(1/2^n) при n=0 до ∞?",
                answers: [
                    { text: "2", correct: true },
                    { text: "1", correct: false },
                    { text: "∞", correct: false },
                    { text: "1/2", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для базового уровня здесь
        ],
        medium: [
            // Продвинутые ряды (1-20)
            {
                question: "Исследуйте на сходимость ряд ∑(n!)/(10^n)",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Найдите радиус сходимости степенного ряда ∑(x^n)/(n!)",
                answers: [
                    { text: "∞", correct: true },
                    { text: "1", correct: false },
                    { text: "0", correct: false },
                    { text: "e", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для продвинутого уровня здесь
        ],
        hard: [
            // Экспертные ряды (1-20)
            {
                question: "Исследуйте на сходимость ряд ∑(-1)^n/√n",
                answers: [
                    { text: "Сходится условно", correct: true },
                    { text: "Сходится абсолютно", correct: false },
                    { text: "Расходится", correct: false },
                    { text: "Сходится", correct: false }
                ]
            },
            {
                question: "Найдите сумму ряда ∑n*x^n при |x|<1",
                answers: [
                    { text: "x/(1-x)^2", correct: true },
                    { text: "1/(1-x)^2", correct: false },
                    { text: "x/(1-x)", correct: false },
                    { text: "1/(1-x)", correct: false }
                ]
            },
            // Добавьте остальные 58 вопросов для экспертного уровня здесь
        ]
    },
    differentials: {
        // Заглушка для раздела "Диффуры"
        easy: [],
        medium: [],
        hard: []
    }
};

// Функция для получения вопросов по разделу и уровню сложности
function getQuestionsBySubject(subject, level, count = 20) {
    const questions = mathQuestions[subject][level];
    // Выбираем случайные вопросы
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}