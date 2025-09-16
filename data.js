// derivativesQuestions.js

// База данных вопросов по производным
const derivativesQuestions = {
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
};

// Функция для получения вопросов по уровню сложности
function getQuestionsByLevel(level, count = 20) {
    const questions = derivativesQuestions[level];
    // Выбираем случайные вопросы
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}