// База данных вопросов по производным
const derivativesQuestions = {
    easy: [
        {
            question: "Чему равна производная функции f(x) = 5?",
            answers: [
                { text: "0", correct: true },
                { text: "5", correct: false },
                { text: "1", correct: false },
                { text: "x", correct: false }
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
        {
            question: "Найдите производную функции f(x) = sin(x)",
            answers: [
                { text: "cos(x)", correct: true },
                { text: "-cos(x)", correct: false },
                { text: "-sin(x)", correct: false },
                { text: "tg(x)", correct: false }
            ]
        },
        {
            question: "Чему равна производная функции f(x) = e^x?",
            answers: [
                { text: "e^x", correct: true },
                { text: "x·e^x", correct: false },
                { text: "e^(x-1)", correct: false },
                { text: "0", correct: false }
            ]
        },
        {
            question: "Найдите производную функции f(x) = 3x² + 2x + 1",
            answers: [
                { text: "6x + 2", correct: true },
                { text: "3x + 2", correct: false },
                { text: "6x + 1", correct: false },
                { text: "3x² + 2", correct: false }
            ]
        }
    ],
    medium: [
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
        {
            question: "Найдите производную функции f(x) = √x",
            answers: [
                { text: "1/(2√x)", correct: true },
                { text: "2√x", correct: false },
                { text: "1/√x", correct: false },
                { text: "x^(-3/2)/2", correct: false }
            ]
        },
        {
            question: "Чему равна производная произведения функций f(x) = x·sin(x)?",
            answers: [
                { text: "sin(x) + x·cos(x)", correct: true },
                { text: "cos(x) + x·sin(x)", correct: false },
                { text: "sin(x) + cos(x)", correct: false },
                { text: "x·cos(x)", correct: false }
            ]
        },
        {
            question: "Найдите производную функции f(x) = e^x · cos(x)",
            answers: [
                { text: "e^x(cos(x) - sin(x))", correct: true },
                { text: "e^x(sin(x) - cos(x))", correct: false },
                { text: "e^x·cos(x) + e^x·sin(x)", correct: false },
                { text: "-e^x·sin(x)", correct: false }
            ]
        }
    ],
    hard: [
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
        {
            question: "Найдите производную функции f(x) = ln(cos(x))",
            answers: [
                { text: "-tan(x)", correct: true },
                { text: "tan(x)", correct: false },
                { text: "-cot(x)", correct: false },
                { text: "1/cos(x)", correct: false }
            ]
        },
        {
            question: "Чему равна вторая производная функции f(x) = x³ - 3x² + 2x?",
            answers: [
                { text: "6x - 6", correct: true },
                { text: "3x² - 6x + 2", correct: false },
                { text: "6x", correct: false },
                { text: "6x - 3", correct: false }
            ]
        },
        {
            question: "Найдите производную неявной функции: x² + y² = 25",
            answers: [
                { text: "-x/y", correct: true },
                { text: "-y/x", correct: false },
                { text: "x/y", correct: false },
                { text: "y/x", correct: false }
            ]
        }
    ]
};