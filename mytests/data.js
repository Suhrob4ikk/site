// data.js

// База данных вопросов
const mathQuestions = {
    derivatives: {
        easy: [
            // Базовые вопросы (1-10)
            {
                question: "Найдите производную функции \\( f(x) = 5 \\)",
                answers: [
                    { text: "\\( 0 \\)", correct: true },
                    { text: "\\( 5 \\)", correct: false },
                    { text: "\\( 5x \\)", correct: false },
                    { text: "\\( 1 \\)", correct: false }
                ]
            },
            {
                question: "Чему равна производная функции \\( f(x) = x^3 \\)?",
                answers: [
                    { text: "\\( 3x^2 \\)", correct: true },
                    { text: "\\( 3x \\)", correct: false },
                    { text: "\\( x^2 \\)", correct: false },
                    { text: "\\( 2x^3 \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\sin(x) \\)",
                answers: [
                    { text: "\\( \\cos(x) \\)", correct: true },
                    { text: "\\( -\\cos(x) \\)", correct: false },
                    { text: "\\( -\\sin(x) \\)", correct: false },
                    { text: "\\( \\tan(x) \\)", correct: false }
                ]
            },
            {
                question: "Чему равна производная функции \\( f(x) = e^x \\)?",
                answers: [
                    { text: "\\( e^x \\)", correct: true },
                    { text: "\\( x e^x \\)", correct: false },
                    { text: "\\( e^{x-1} \\)", correct: false },
                    { text: "\\( 0 \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\ln(x) \\)",
                answers: [
                    { text: "\\( \\frac{1}{x} \\)", correct: true },
                    { text: "\\( x \\)", correct: false },
                    { text: "\\( e^x \\)", correct: false },
                    { text: "\\( -\\frac{1}{x^2} \\)", correct: false }
                ]
            },
            {
                question: "Производная функции \\( f(x) = \\cos(x) \\) равна:",
                answers: [
                    { text: "\\( -\\sin(x) \\)", correct: true },
                    { text: "\\( \\sin(x) \\)", correct: false },
                    { text: "\\( -\\cos(x) \\)", correct: false },
                    { text: "\\( \\tan(x) \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = 3x^4 - 2x^3 + 5x - 7 \\)",
                answers: [
                    { text: "\\( 12x^3 - 6x^2 + 5 \\)", correct: true },
                    { text: "\\( 12x^3 - 6x^2 \\)", correct: false },
                    { text: "\\( 12x^3 - 6x^2 + 5x \\)", correct: false },
                    { text: "\\( 4x^3 - 3x^2 + 5 \\)", correct: false }
                ]
            },
            {
                question: "Производная функции \\( f(x) = \\sqrt{x} \\) равна:",
                answers: [
                    { text: "\\( \\frac{1}{2\\sqrt{x}} \\)", correct: true },
                    { text: "\\( \\frac{1}{\\sqrt{x}} \\)", correct: false },
                    { text: "\\( 2\\sqrt{x} \\)", correct: false },
                    { text: "\\( \\frac{1}{2x} \\)", correct: false }
                ]
            },
            {
                question: "Производная функции \\( f(x) = \\frac{1}{x} \\) равна:",
                answers: [
                    { text: "\\( -\\frac{1}{x^2} \\)", correct: true },
                    { text: "\\( \\frac{1}{x^2} \\)", correct: false },
                    { text: "\\( -\\frac{1}{x} \\)", correct: false },
                    { text: "\\( \\ln(x) \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = x^2 \\cdot e^x \\)",
                answers: [
                    { text: "\\( e^x(x^2 + 2x) \\)", correct: true },
                    { text: "\\( 2x e^x \\)", correct: false },
                    { text: "\\( e^x(x^2 + x) \\)", correct: false },
                    { text: "\\( x^2 e^x \\)", correct: false }
                ]
            }
        ],
        medium: [
            // Продвинутые вопросы (1-10)
            {
                question: "Найдите производную функции \\( f(x) = \\ln(\\sin(x)) \\)",
                answers: [
                    { text: "\\( \\cot(x) \\)", correct: true },
                    { text: "\\( \\tan(x) \\)", correct: false },
                    { text: "\\( \\frac{1}{\\sin(x)} \\)", correct: false },
                    { text: "\\( -\\cot(x) \\)", correct: false }
                ]
            },
            {
                question: "Чему равна производная функции \\( f(x) = e^{\\cos(x)} \\)?",
                answers: [
                    { text: "\\( -e^{\\cos(x)} \\sin(x) \\)", correct: true },
                    { text: "\\( e^{\\cos(x)} \\sin(x) \\)", correct: false },
                    { text: "\\( e^{\\cos(x)} \\)", correct: false },
                    { text: "\\( -e^{\\cos(x)} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\arcsin(x) \\)",
                answers: [
                    { text: "\\( \\frac{1}{\\sqrt{1-x^2}} \\)", correct: true },
                    { text: "\\( \\frac{1}{\\sqrt{x^2-1}} \\)", correct: false },
                    { text: "\\( \\frac{1}{1+x^2} \\)", correct: false },
                    { text: "\\( -\\frac{1}{\\sqrt{1-x^2}} \\)", correct: false }
                ]
            },
            {
                question: "Производная функции \\( f(x) = \\arctan(x) \\) равна:",
                answers: [
                    { text: "\\( \\frac{1}{1+x^2} \\)", correct: true },
                    { text: "\\( \\frac{1}{1-x^2} \\)", correct: false },
                    { text: "\\( \\frac{1}{\\sqrt{1+x^2}} \\)", correct: false },
                    { text: "\\( \\frac{1}{\\sqrt{1-x^2}} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = x^x \\)",
                answers: [
                    { text: "\\( x^x (\\ln(x) + 1) \\)", correct: true },
                    { text: "\\( x \\cdot x^{x-1} \\)", correct: false },
                    { text: "\\( x^x \\ln(x) \\)", correct: false },
                    { text: "\\( x^{x-1} \\)", correct: false }
                ]
            },
            {
                question: "Производная функции \\( f(x) = \\sinh(x) \\) равна:",
                answers: [
                    { text: "\\( \\cosh(x) \\)", correct: true },
                    { text: "\\( -\\cosh(x) \\)", correct: false },
                    { text: "\\( \\tanh(x) \\)", correct: false },
                    { text: "\\( \\frac{1}{\\cosh(x)} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\ln(x^2 + 1) \\)",
                answers: [
                    { text: "\\( \\frac{2x}{x^2+1} \\)", correct: true },
                    { text: "\\( \\frac{1}{x^2+1} \\)", correct: false },
                    { text: "\\( \\frac{2x}{x^2} \\)", correct: false },
                    { text: "\\( \\frac{x}{x^2+1} \\)", correct: false }
                ]
            },
            {
                question: "Производная функции \\( f(x) = \\sqrt[3]{x^2} \\) равна:",
                answers: [
                    { text: "\\( \\frac{2}{3\\sqrt[3]{x}} \\)", correct: true },
                    { text: "\\( \\frac{2}{3} x^{-1/3} \\)", correct: false },
                    { text: "\\( \\frac{2}{3} x^{2/3} \\)", correct: false },
                    { text: "\\( \\frac{2}{3} x^{3/2} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\frac{e^x}{x^2} \\)",
                answers: [
                    { text: "\\( \\frac{e^x (x-2)}{x^3} \\)", correct: true },
                    { text: "\\( \\frac{e^x}{x^2} \\)", correct: false },
                    { text: "\\( \\frac{e^x (x+2)}{x^3} \\)", correct: false },
                    { text: "\\( \\frac{e^x}{2x} \\)", correct: false }
                ]
            },
            {
                question: "Производная функции \\( f(x) = \\ln(\\cos(x)) \\) равна:",
                answers: [
                    { text: "\\( -\\tan(x) \\)", correct: true },
                    { text: "\\( \\tan(x) \\)", correct: false },
                    { text: "\\( -\\cot(x) \\)", correct: false },
                    { text: "\\( \\frac{1}{\\cos(x)} \\)", correct: false }
                ]
            }
        ],
        hard: [
            // Экспертные вопросы (1-10)
            {
                question: "Найдите вторую производную функции \\( f(x) = \\ln(x^2 + 1) \\)",
                answers: [
                    { text: "\\( \\frac{2(1-x^2)}{(x^2+1)^2} \\)", correct: true },
                    { text: "\\( \\frac{2x}{(x^2+1)^2} \\)", correct: false },
                    { text: "\\( \\frac{2}{(x^2+1)^2} \\)", correct: false },
                    { text: "\\( \\frac{2(x^2-1)}{(x^2+1)^2} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\int_0^x e^{-t^2} dt \\)",
                answers: [
                    { text: "\\( e^{-x^2} \\)", correct: true },
                    { text: "\\( e^{-x^2} - 1 \\)", correct: false },
                    { text: "\\( -2xe^{-x^2} \\)", correct: false },
                    { text: "\\( 2xe^{-x^2} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции, заданной параметрически: \\( x = \\cos(t), y = \\sin(t) \\)",
                answers: [
                    { text: "\\( -\\cot(t) \\)", correct: true },
                    { text: "\\( -\\tan(t) \\)", correct: false },
                    { text: "\\( \\cot(t) \\)", correct: false },
                    { text: "\\( \\tan(t) \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\arcsin(\\sqrt{x}) \\)",
                answers: [
                    { text: "\\( \\frac{1}{2\\sqrt{x(1-x)}} \\)", correct: true },
                    { text: "\\( \\frac{1}{\\sqrt{1-x}} \\)", correct: false },
                    { text: "\\( \\frac{1}{2\\sqrt{1-x}} \\)", correct: false },
                    { text: "\\( \\frac{1}{\\sqrt{x(1-x)}} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = x^{\\sin(x)} \\)",
                answers: [
                    { text: "\\( x^{\\sin(x)} \\left( \\frac{\\sin(x)}{x} + \\cos(x) \\ln(x) \\right) \\)", correct: true },
                    { text: "\\( x^{\\sin(x)} \\left( \\frac{\\sin(x)}{x} + \\cos(x) \\right) \\)", correct: false },
                    { text: "\\( x^{\\sin(x)} \\left( \\cos(x) \\ln(x) \\right) \\)", correct: false },
                    { text: "\\( x^{\\sin(x)-1} \\sin(x) \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}} \\)",
                answers: [
                    { text: "\\( -\\frac{x}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}} \\)", correct: true },
                    { text: "\\( -\\frac{x^2}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}} \\)", correct: false },
                    { text: "\\( \\frac{x}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}} \\)", correct: false },
                    { text: "\\( -\\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\text{arccosh}(x) = \\ln(x + \\sqrt{x^2 - 1}) \\)",
                answers: [
                    { text: "\\( \\frac{1}{\\sqrt{x^2 - 1}} \\)", correct: true },
                    { text: "\\( \\frac{1}{x + \\sqrt{x^2 - 1}} \\)", correct: false },
                    { text: "\\( \\frac{1}{x\\sqrt{x^2 - 1}} \\)", correct: false },
                    { text: "\\( \\frac{x}{\\sqrt{x^2 - 1}} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\int_{x}^{x^2} e^{-t^2} dt \\)",
                answers: [
                    { text: "\\( 2x e^{-x^4} - e^{-x^2} \\)", correct: true },
                    { text: "\\( e^{-x^4} - e^{-x^2} \\)", correct: false },
                    { text: "\\( 2x e^{-x^4} \\)", correct: false },
                    { text: "\\( -2x e^{-x^4} + e^{-x^2} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\ln\\left( \\frac{\\sqrt{x} + 1}{\\sqrt{x} - 1} \\right) \\)",
                answers: [
                    { text: "\\( -\\frac{1}{\\sqrt{x}(x - 1)} \\)", correct: true },
                    { text: "\\( \\frac{1}{\\sqrt{x}(x - 1)} \\)", correct: false },
                    { text: "\\( -\\frac{1}{x - 1} \\)", correct: false },
                    { text: "\\( \\frac{1}{x - 1} \\)", correct: false }
                ]
            },
            {
                question: "Найдите производную функции \\( f(x) = \\arctan(\\sqrt{x}) \\)",
                answers: [
                    { text: "\\( \\frac{1}{2\\sqrt{x}(1+x)} \\)", correct: true },
                    { text: "\\( \\frac{1}{\\sqrt{x}(1+x)} \\)", correct: false },
                    { text: "\\( \\frac{1}{2(1+x)} \\)", correct: false },
                    { text: "\\( \\frac{1}{\\sqrt{x}(1+x^2)} \\)", correct: false }
                ]
            }
        ]
    },
    integrals: {
        easy: [
            // Базовые интегралы (1-10)
            {
                question: "Найдите интеграл \\( \\int 3x^2  dx \\)",
                answers: [
                    { text: "\\( x^3 + C \\)", correct: true },
                    { text: "\\( 3x^3 + C \\)", correct: false },
                    { text: "\\( x^2 + C \\)", correct: false },
                    { text: "\\( 6x + C \\)", correct: false }
                ]
            },
                        {
                question: "Чему равен интеграл \\( \\int \\cos(x) dx \\)?",
                answers: [
                    { text: "\\( \\sin(x) + C \\)", correct: true },
                    { text: "\\( -\\sin(x) + C \\)", correct: false },
                    { text: "\\( \\cos(x) + C \\)", correct: false },
                    { text: "\\( -\\cos(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int e^x dx \\)",
                answers: [
                    { text: "\\( e^x + C \\)", correct: true },
                    { text: "\\( x e^x + C \\)", correct: false },
                    { text: "\\( e^{x+1} + C \\)", correct: false },
                    { text: "\\( \\ln(e^x) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\frac{1}{x} dx \\)?",
                answers: [
                    { text: "\\( \\ln|x| + C \\)", correct: true },
                    { text: "\\( \\frac{1}{x^2} + C \\)", correct: false },
                    { text: "\\( x + C \\)", correct: false },
                    { text: "\\( -\\frac{1}{x^2} + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int (2x + 3) dx \\)",
                answers: [
                    { text: "\\( x^2 + 3x + C \\)", correct: true },
                    { text: "\\( 2x^2 + 3x + C \\)", correct: false },
                    { text: "\\( x^2 + 3 + C \\)", correct: false },
                    { text: "\\( 2x + 3x + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\sin(x) dx \\)?",
                answers: [
                    { text: "\\( -\\cos(x) + C \\)", correct: true },
                    { text: "\\( \\cos(x) + C \\)", correct: false },
                    { text: "\\( -\\sin(x) + C \\)", correct: false },
                    { text: "\\( \\sin(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{1}{1+x^2} dx \\)",
                answers: [
                    { text: "\\( \\arctan(x) + C \\)", correct: true },
                    { text: "\\( \\arcsin(x) + C \\)", correct: false },
                    { text: "\\( \\ln(1+x^2) + C \\)", correct: false },
                    { text: "\\( \\frac{1}{2}\\ln(1+x^2) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int a^x dx \\) где \\( a > 0, a \\neq 1 \\)?",
                answers: [
                    { text: "\\( \\frac{a^x}{\\ln(a)} + C \\)", correct: true },
                    { text: "\\( a^x \\ln(a) + C \\)", correct: false },
                    { text: "\\( \\frac{a^x}{x+1} + C \\)", correct: false },
                    { text: "\\( x a^{x-1} + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\sec^2(x) dx \\)",
                answers: [
                    { text: "\\( \\tan(x) + C \\)", correct: true },
                    { text: "\\( \\cot(x) + C \\)", correct: false },
                    { text: "\\( \\sec(x) + C \\)", correct: false },
                    { text: "\\( \\sec(x)\\tan(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\frac{1}{\\sqrt{1-x^2}} dx \\)?",
                answers: [
                    { text: "\\( \\arcsin(x) + C \\)", correct: true },
                    { text: "\\( \\arccos(x) + C \\)", correct: false },
                    { text: "\\( \\arctan(x) + C \\)", correct: false },
                    { text: "\\( \\ln|\\sqrt{1-x^2}| + C \\)", correct: false }
                ]
            }
        ],
        medium: [
            // Продвинутые интегралы (1-10)
            {
                question: "Найдите интеграл \\( \\int x e^x dx \\)",
                answers: [
                    { text: "\\( e^x(x - 1) + C \\)", correct: true },
                    { text: "\\( e^x(x + 1) + C \\)", correct: false },
                    { text: "\\( x e^x + C \\)", correct: false },
                    { text: "\\( e^x + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\ln(x) dx \\)?",
                answers: [
                    { text: "\\( x \\ln(x) - x + C \\)", correct: true },
                    { text: "\\( x \\ln(x) + C \\)", correct: false },
                    { text: "\\( \\frac{1}{x} + C \\)", correct: false },
                    { text: "\\( x + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{1}{x^2 + 4x + 5} dx \\)",
                answers: [
                    { text: "\\( \\arctan(x + 2) + C \\)", correct: true },
                    { text: "\\( \\frac{1}{2} \\ln|x^2 + 4x + 5| + C \\)", correct: false },
                    { text: "\\( \\ln|x^2 + 4x + 5| + C \\)", correct: false },
                    { text: "\\( \\frac{1}{x+2} + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\sin^2(x) dx \\)?",
                answers: [
                    { text: "\\( \\frac{x}{2} - \\frac{\\sin(2x)}{4} + C \\)", correct: true },
                    { text: "\\( \\frac{x}{2} + \\frac{\\sin(2x)}{4} + C \\)", correct: false },
                    { text: "\\( -\\frac{\\cos^3(x)}{3} + C \\)", correct: false },
                    { text: "\\( \\frac{\\sin^3(x)}{3} + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{x}{\\sqrt{1-x^2}} dx \\)",
                answers: [
                    { text: "\\( -\\sqrt{1-x^2} + C \\)", correct: true },
                    { text: "\\( \\sqrt{1-x^2} + C \\)", correct: false },
                    { text: "\\( \\arcsin(x) + C \\)", correct: false },
                    { text: "\\( -\\frac{1}{2}\\sqrt{1-x^2} + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int e^x \\sin(x) dx \\)?",
                answers: [
                    { text: "\\( \\frac{e^x}{2} (\\sin(x) - \\cos(x)) + C \\)", correct: true },
                    { text: "\\( e^x (\\sin(x) - \\cos(x)) + C \\)", correct: false },
                    { text: "\\( \\frac{e^x}{2} (\\sin(x) + \\cos(x)) + C \\)", correct: false },
                    { text: "\\( e^x \\cos(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{1}{x\\ln(x)} dx \\)",
                answers: [
                    { text: "\\( \\ln|\\ln(x)| + C \\)", correct: true },
                    { text: "\\( \\frac{1}{\\ln(x)} + C \\)", correct: false },
                    { text: "\\( \\ln(x) + C \\)", correct: false },
                    { text: "\\( \\frac{\\ln(x)}{x} + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\tan(x) dx \\)?",
                answers: [
                    { text: "\\( -\\ln|\\cos(x)| + C \\)", correct: true },
                    { text: "\\( \\ln|\\sin(x)| + C \\)", correct: false },
                    { text: "\\( \\ln|\\sec(x)| + C \\)", correct: false },
                    { text: "\\( \\frac{\\tan^2(x)}{2} + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{1}{x^2 - 1} dx \\)",
                answers: [
                    { text: "\\( \\frac{1}{2} \\ln\\left| \\frac{x-1}{x+1} \\right| + C \\)", correct: true },
                    { text: "\\( \\ln|x^2 - 1| + C \\)", correct: false },
                    { text: "\\( \\frac{1}{2} \\ln|x^2 - 1| + C \\)", correct: false },
                    { text: "\\( \\arctan(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int x \\cos(x) dx \\)?",
                answers: [
                    { text: "\\( x \\sin(x) + \\cos(x) + C \\)", correct: true },
                    { text: "\\( x \\sin(x) - \\cos(x) + C \\)", correct: false },
                    { text: "\\( x \\cos(x) + \\sin(x) + C \\)", correct: false },
                    { text: "\\( x \\cos(x) - \\sin(x) + C \\)", correct: false }
                ]
            }
        ],
        hard: [
            // Экспертные интегралы (1-10)
            {
                question: "Найдите интеграл \\( \\int e^x \\cos(x) dx \\)",
                answers: [
                    { text: "\\( \\frac{e^x}{2} (\\sin(x) + \\cos(x)) + C \\)", correct: true },
                    { text: "\\( e^x (\\sin(x) + \\cos(x)) + C \\)", correct: false },
                    { text: "\\( \\frac{e^x}{2} (\\sin(x) - \\cos(x)) + C \\)", correct: false },
                    { text: "\\( e^x \\sin(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\sqrt{1-x^2} dx \\)?",
                answers: [
                    { text: "\\( \\frac{x}{2} \\sqrt{1-x^2} + \\frac{1}{2} \\arcsin(x) + C \\)", correct: true },
                    { text: "\\( x \\sqrt{1-x^2} + \\arcsin(x) + C \\)", correct: false },
                    { text: "\\( \\frac{x}{2} \\sqrt{1-x^2} + C \\)", correct: false },
                    { text: "\\( \\arcsin(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{1}{x^3+1} dx \\)",
                answers: [
                    { text: "\\( \\frac{1}{3} \\ln|x+1| - \\frac{1}{6} \\ln|x^2 - x + 1| + \\frac{1}{\\sqrt{3}} \\arctan\\left(\\frac{2x-1}{\\sqrt{3}}\\right) + C \\)", correct: true },
                    { text: "\\( \\ln|x^3+1| + C \\)", correct: false },
                    { text: "\\( \\frac{1}{3} \\ln|x^3+1| + C \\)", correct: false },
                    { text: "\\( \\frac{1}{3} \\ln|x+1| + \\frac{2}{3} \\ln|x^2 - x + 1| + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\ln(x^2 + 1) dx \\)?",
                answers: [
                    { text: "\\( x \\ln(x^2+1) - 2x + 2 \\arctan(x) + C \\)", correct: true },
                    { text: "\\( x \\ln(x^2+1) + C \\)", correct: false },
                    { text: "\$ \\frac{2x}{x^2+1} + C \\)", correct: false },
                    { text: "\\( \\ln(x^2+1) + 2 \\arctan(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{x^2}{\\sqrt{1-x^2}} dx \\)",
                answers: [
                    { text: "\\( \\frac{1}{2} \\arcsin(x) - \\frac{x}{2} \\sqrt{1-x^2} + C \\)", correct: true },
                    { text: "\\( -\\sqrt{1-x^2} + C \\)", correct: false },
                    { text: "\\( x \\sqrt{1-x^2} + C \\)", correct: false },
                    { text: "\\( \\frac{1}{2} \\arcsin(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\sec^3(x) dx \\)?",
                answers: [
                    { text: "\\( \\frac{1}{2} (\\sec(x)\\tan(x) + \\ln|\\sec(x)+\\tan(x)|) + C \\)", correct: true },
                    { text: "\\( \\frac{1}{2} \\sec(x)\\tan(x) + C \\)", correct: false },
                    { text: "\\( \\sec(x)\\tan(x) + \\ln|\\sec(x)+\\tan(x)| + C \\)", correct: false },
                    { text: "\\( \\frac{1}{3} \\sec^3(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{1}{x\\sqrt{x^2-1}} dx \\)",
                answers: [
                    { text: "\\( \\arcsec|x| + C \\)", correct: true },
                    { text: "\\( \\ln|x + \\sqrt{x^2-1}| + C \\)", correct: false },
                    { text: "\\( \\frac{1}{2} \\ln|x^2-1| + C \\)", correct: false },
                    { text: "\\( \\arctan(\\sqrt{x^2-1}) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int x^2 e^{-x} dx \\)?",
                answers: [
                    { text: "\\( -e^{-x}(x^2 + 2x + 2) + C \\)", correct: true },
                    { text: "\\( e^{-x}(x^2 + 2x + 2) + C \\)", correct: false },
                    { text: "\\( -e^{-x}(x^2 + 2x) + C \\)", correct: false },
                    { text: "\\( e^{-x}(x^2 - 2x + 2) + C \\)", correct: false }
                ]
            },
            {
                question: "Найдите интеграл \\( \\int \\frac{1}{1+\\sin(x)} dx \\)",
                answers: [
                    { text: "\\( \\tan(x) - \\sec(x) + C \\)", correct: true },
                    { text: "\\( \\ln|1+\\sin(x)| + C \\)", correct: false },
                    { text: "\\( -\\cos(x) + C \\)", correct: false },
                    { text: "\\( x - \\cos(x) + C \\)", correct: false }
                ]
            },
            {
                question: "Чему равен интеграл \\( \\int \\frac{1}{x^2\\sqrt{x^2+1}} dx \\)?",
                answers: [
                    { text: "\\( -\\frac{\\sqrt{x^2+1}}{x} + C \\)", correct: true },
                    { text: "\\( \\frac{\\sqrt{x^2+1}}{x} + C \\)", correct: false },
                    { text: "\\( -\\frac{1}{x\\sqrt{x^2+1}} + C \\)", correct: false },
                    { text: "\\( \\ln|x + \\sqrt{x^2+1}| + C \\)", correct: false }
                ]
            }
        ]
    },
    series: {
        easy: [
            // Базовые ряды (1-10)
            {
                question: "Является ли ряд \\( \\sum_{n=1}^{\\infty} \\frac{1}{n} \\) сходящимся?",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Чему равна сумма геометрического ряда \\( \\sum_{n=0}^{\\infty} \\frac{1}{2^n} \\)?",
                answers: [
                    { text: "2", correct: true },
                    { text: "1", correct: false },
                    { text: "∞", correct: false },
                    { text: "1/2", correct: false }
                ]
            },
            {
                question: "Является ли ряд \\( \\sum_{n=1}^{\\infty} \\frac{1}{n^2} \\) сходящимся?",
                answers: [
                    { text: "Сходится", correct: true },
                    { text: "Расходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Расходится абсолютно", correct: false }
                ]
            },
            {
                question: "Чему равна сумма ряда \\( \\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} \\)?",
                answers: [
                    { text: "1", correct: true },
                    { text: "∞", correct: false },
                    { text: "1/2", correct: false },
                    { text: "2", correct: false }
                ]
            },
            {
                question: "Каким признаком удобно исследовать сходимость ряда \\( \\sum_{n=1}^{\\infty} \\frac{n}{2^n} \\)?",
                answers: [
                    { text: "Признак Даламбера", correct: true },
                    { text: "Признак Лейбница", correct: false },
                    { text: "Интегральный признак", correct: false },
                    { text: "Признак сравнения", correct: false }
                ]
            },
            {
                question: "Является ли ряд \\( \\sum_{n=1}^{\\infty} (-1)^n \\frac{1}{n} \\) сходящимся?",
                answers: [
                    { text: "Сходится условно", correct: true },
                    { text: "Сходится абсолютно", correct: false },
                    { text: "Расходится", correct: false },
                    { text: "Сходится", correct: false }
                ]
            },
            {
                question: "Чему равен радиус сходимости степенного ряда \\( \\sum_{n=0}^{\\infty} x^n \\)?",
                answers: [
                    { text: "1", correct: true },
                    { text: "0", correct: false },
                    { text: "∞", correct: false },
                    { text: "1/2", correct: false }
                ]
            },
            {
                question: "Является ли ряд \\( \\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}} \\) сходящимся?",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Чему равна сумма ряда \\( \\sum_{n=0}^{\\infty} \\frac{1}{3^n \\)?",
                answers: [
                    { text: "3/2", correct: true },
                    { text: "2", correct: false },
                    { text: "1", correct: false },
                    { text: "∞", correct: false }
                ]
            },
            {
                question: "Каким признаком удобно исследовать сходимость ряда \\( \\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\)?",
                answers: [
                    { text: "Интегральный признак", correct: true },
                    { text: "Признак Даламбера", correct: false },
                    { text: "Признак Лейбница", correct: false },
                    { text: "Признак сравнения", correct: false }
                ]
            }
        ],
        medium: [
            // Продвинутые ряды (1-10)
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{n!}{10^n} \\)",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Найдите радиус сходимости степенного ряда \\( \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} \\)",
                answers: [
                    { text: "∞", correct: true },
                    { text: "1", correct: false },
                    { text: "0", correct: false },
                    { text: "e", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}} \\)",
                answers: [
                    { text: "Сходится условно", correct: true },
                    { text: "Сходится абсолютно", correct: false },
                    { text: "Расходится", correct: false },
                    { text: "Сходится", correct: false }
                ]
            },
            {
                question: "Найдите сумму ряда \\( \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} \\)",
                answers: [
                    { text: "ln(2)", correct: true },
                    { text: "1", correct: false },
                    { text: "π/4", correct: false },
                    { text: "∞", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{n^2}{2^n} \\)",
                answers: [
                    { text: "Сходится", correct: true },
                    { text: "Расходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Найдите радиус сходимости степенного ряда \\( \\sum_{n=1}^{\\infty} \\frac{x^n}{n} \\)",
                answers: [
                    { text: "1", correct: true },
                    { text: "0", correct: false },
                    { text: "∞", correct: false },
                    { text: "1/2", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{\\sin(n)}{n^2} \\)",
                answers: [
                    { text: "Сходится абсолютно", correct: true },
                    { text: "Сходится условно", correct: false },
                    { text: "Расходится", correct: false },
                    { text: "Сходится", correct: false }
                ]
            },
            {
                question: "Найдите сумму ряда \\( \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1} \\)",
                answers: [
                    { text: "π/4", correct: true },
                    { text: "π/2", correct: false },
                    { text: "1", correct: false },
                    { text: "∞", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{1}{n\\ln(n)} \\)",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Найдите радиус сходимости степенного ряда \\( \\sum_{n=1}^{\\infty} n! x^n \\)",
                answers: [
                    { text: "0", correct: true },
                    { text: "1", correct: false },
                    { text: "∞", correct: false },
                    { text: "e", correct: false }
                ]
            }
        ],
        hard: [
            // Экспертные ряды (1-10)
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^p} \\) при p>1",
                answers: [
                    { text: "Сходится абсолютно", correct: true },
                    { text: "Сходится условно", correct: false },
                    { text: "Расходится", correct: false },
                    { text: "Сходится", correct: false }
                ]
            },
            {
                question: "Найдите сумму ряда \\( \\sum_{n=1}^{\\infty} \\frac{n}{2^n} \\)",
                answers: [
                    { text: "2", correct: true },
                    { text: "1", correct: false },
                    { text: "∞", correct: false },
                    { text: "1/2", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\ln(n)} \\)",
                answers: [
                    { text: "Сходится условно", correct: true },
                    { text: "Сходится абсолютно", correct: false },
                    { text: "Расходится", correct: false },
                    { text: "Сходится", correct: false }
                ]
            },
            {
                question: "Найдите радиус сходимости степенного ряда \\( \\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n^2} \\)",
                answers: [
                    { text: "1", correct: true },
                    { text: "2", correct: false },
                    { text: "∞", correct: false },
                    { text: "0", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{1}{n^{1+1/n}} \\)",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Найдите сумму ряда \\( \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2} \\)",
                answers: [
                    { text: "\\( \\frac{\\pi^2}{12} \\)", correct: true },
                    { text: "\\( \\frac{\\pi^2}{6} \\)", correct: false },
                    { край: "1", correct: false },
                    { text: "∞", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{\\cos(n)}{n} \\)",
                answers: [
                    { text: "Расходится", correct: true },
                    { text: "Сходится", correct: false },
                    { text: "Сходится условно", correct: false },
                    { text: "Сходится абсолютно", correct: false }
                ]
            },
            {
                question: "Найдите радиус сходимости степенного ряда \\( \\sum_{n=1}^{\\infty} \\frac{(2x)^n}{n^2} \\)",
                answers: [
                    { text: "1/2", correct: true },
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "∞", correct: false }
                ]
            },
            {
                question: "Исследуйте на сходимость ряд \\( \\sum_{n=1}^{\\infty} \\frac{(-1)^n n!}{n^n} \\)",
                answers: [
                    { text: "Сходится абсолютно", correct: true },
                    { text: "Сходится условно", correct: false },
                    { text: "Расходится", correct: false },
                    { text: "Сходится", correct: false }
                ]
            },
            {
                question: "Найдите сумму ряда \\( \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n+1)!} \\)",
                answers: [
                    { text: "sin(1)", correct: true },
                    { text: "cos(1)", correct: false },
                    { text: "e", correct: false },
                    { text: "ln(2)", correct: false }
                ]
            }
        ]
    },
    differentials: {
        easy: [],
        medium: [],
        hard: []
    }
};

// Описания для разных разделов
const descriptions = {
    derivatives: {
        easy: "Основные правила дифференцирования, производные элементарных функций",
        medium: "Производные сложных функций, неявное дифференцирование, логарифмическая производная",
        hard: "Производные высших порядков, параметрическое дифференцирование, применение в задачах"
    },
    integrals: {
        easy: "Основные методы интегрирования, неопределенные интегралы",
        medium: "Интегрирование по частям, заменой переменной, простые определенные интегралы",
        hard: "Сложные определенные интегралы, несобственные интегралы, приложения интегралов"
    },
    series: {
        easy: "Числовые ряды, основные признаки сходимости",
        medium: "Функциональные ряды, степенные ряды, ряд Тейлора",
        hard: "Ряды Фурье, интегралы Фурье, приложения рядов"
    },
    differentials: {
        easy: "Дифференциальные уравнения первого порядка",
        medium: "Дифференциальные уравнения высших порядков, системы ДУ",
        hard: "Уравнения в частных производных, краевые задачи"
    }
};

// Функция для получения вопросов по разделу и уровню сложности
function getQuestionsBySubject(subject, level, count = 20) {
    const questions = mathQuestions[subject][level];
    // Выбираем случайные вопросы
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}