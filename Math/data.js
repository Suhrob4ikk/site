// Данные с математическими задачами для разных разделов
const mathProblems = {
    arithmetic: [
        {
            id: 1,
            question: "Решите уравнение: 3x + 7 = 22",
            answer: "5",
            solution: "3x + 7 = 22 → 3x = 22 - 7 → 3x = 15 → x = 15 / 3 → x = 5",
            difficulty: "easy",
            category: "arithmetic"
        },
        {
            id: 2,
            question: "Вычислите: (15 - 3) × 4 + 9 ÷ 3",
            answer: "51",
            solution: "(15 - 3) × 4 + 9 ÷ 3 = 12 × 4 + 3 = 48 + 3 = 51",
            difficulty: "medium",
            category: "arithmetic"
        },
        {
            id: 3,
            question: "Найдите НОК чисел 12 и 18",
            answer: "36",
            solution: "12 = 2² × 3, 18 = 2 × 3² → НОК = 2² × 3² = 4 × 9 = 36",
            difficulty: "easy",
            category: "arithmetic"
        },
        {
            id: 4,
            question: "Решите пропорцию: 5/8 = x/24",
            answer: "15",
            solution: "5/8 = x/24 → x = (5 × 24) / 8 = 120 / 8 = 15",
            difficulty: "easy",
            category: "arithmetic"
        },
        {
            id: 5,
            question: "Вычислите: 2³ + 3² × 4 - 10 ÷ 2",
            answer: "39",
            solution: "2³ + 3² × 4 - 10 ÷ 2 = 8 + 9 × 4 - 5 = 8 + 36 - 5 = 39",
            difficulty: "medium",
            category: "arithmetic"
        }
    ],
    algebra: [
        {
            id: 6,
            question: "Решите квадратное уравнение: x² - 5x + 6 = 0",
            answer: "2,3",
            solution: "x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → x = 2 или x = 3",
            difficulty: "easy",
            category: "algebra"
        },
        {
            id: 7,
            question: "Упростите выражение: (2x - 3)(x + 4) - (x - 2)²",
            answer: "x² + 3x - 19",
            solution: "(2x - 3)(x + 4) - (x - 2)² = (2x² + 8x - 3x - 12) - (x² - 4x + 4) = 2x² + 5x - 12 - x² + 4x - 4 = x² + 9x - 16",
            difficulty: "medium",
            category: "algebra"
        },
        {
            id: 8,
            question: "Решите систему уравнений: {2x + y = 7, x - y = 1}",
            answer: "x=2,y=3",
            solution: "Из второго уравнения: x = y + 1. Подставляем в первое: 2(y + 1) + y = 7 → 2y + 2 + y = 7 → 3y = 5 → y = 5/3. Тогда x = 5/3 + 1 = 8/3. Проверка: 2*(8/3) + 5/3 = 16/3 + 5/3 = 21/3 = 7.",
            difficulty: "medium",
            category: "algebra"
        },
        {
            id: 9,
            question: "Найдите область определения функции: f(x) = √(x - 3) / (x² - 9)",
            answer: "x>3",
            solution: "1) x - 3 ≥ 0 → x ≥ 3; 2) x² - 9 ≠ 0 → x ≠ ±3. Итого: x > 3",
            difficulty: "hard",
            category: "algebra"
        },
        {
            id: 10,
            question: "Решите неравенство: |2x - 5| < 3",
            answer: "1<x<4",
            solution: "|2x - 5| < 3 → -3 < 2x - 5 < 3 → 2 < 2x < 8 → 1 < x < 4",
            difficulty: "medium",
            category: "algebra"
        }
    ],
    geometry: [
        {
            id: 11,
            question: "Найдите площадь прямоугольного треугольника с катетами 6 см и 8 см",
            answer: "24",
            solution: "Площадь прямоугольного треугольника = (a × b) / 2 = (6 × 8) / 2 = 48 / 2 = 24 см²",
            difficulty: "easy",
            category: "geometry"
        },
        {
            id: 12,
            question: "В окружности с радиусом 5 см проведена хорда длиной 8 см. Найдите расстояние от центра окружности до хорды",
            answer: "3",
            solution: "Расстояние от центра до хорды: d = √(r² - (l/2)²) = √(25 - 16) = √9 = 3 см",
            difficulty: "medium",
            category: "geometry"
        },
        {
            id: 13,
            question: "Найдите объем правильной треугольной пирамиды со стороной основания 6 см и высотой 10 см",
            answer: "30√3",
            solution: "Площадь основания: S = (a²√3)/4 = (36√3)/4 = 9√3 см². Объем: V = (S × h)/3 = (9√3 × 10)/3 = 30√3 см³",
            difficulty: "medium",
            category: "geometry"
        },
        {
            id: 14,
            question: "В прямоугольном параллелепипеде измерения равны 3 см, 4 см и 5 см. Найдите длину диагонали",
            answer: "5√2",
            solution: "Диагональ d = √(a² + b² + c²) = √(9 + 16 + 25) = √50 = 5√2 см",
            difficulty: "easy",
            category: "geometry"
        },
        {
            id: 15,
            question: "Найдите площадь круга, описанного вокруг правильного шестиугольника со стороной 4 см",
            answer: "16π",
            solution: "Радиус описанной окружности вокруг правильного шестиугольника равен стороне: R = a = 4 см. Площадь круга: S = πR² = 16π см²",
            difficulty: "hard",
            category: "geometry"
        }
    ],
    calculus: [
        {
            id: 16,
            question: "Найдите производную функции: f(x) = 3x⁴ - 2x³ + 5x - 7",
            answer: "12x³-6x²+5",
            solution: "f'(x) = 4×3x³ - 3×2x² + 5 = 12x³ - 6x² + 5",
            difficulty: "easy",
            category: "calculus"
        },
        {
            id: 17,
            question: "Вычислите предел: lim(x→2) (x² - 4)/(x - 2)",
            answer: "4",
            solution: "(x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2 → lim(x→2) (x + 2) = 4",
            difficulty: "easy",
            category: "calculus"
        },
        {
            id: 18,
            question: "Найдите интеграл: ∫(3x² - 2x + 1)dx",
            answer: "x³-x²+x+C",
            solution: "∫(3x² - 2x + 1)dx = 3×(x³/3) - 2×(x²/2) + x + C = x³ - x² + x + C",
            difficulty: "easy",
            category: "calculus"
        },
        {
            id: 19,
            question: "Найдите производную функции: f(x) = sin(2x) + e³ˣ",
            answer: "2cos(2x)+3e³ˣ",
            solution: "f'(x) = 2cos(2x) + 3e³ˣ",
            difficulty: "medium",
            category: "calculus"
        },
        {
            id: 20,
            question: "Вычислите определенный интеграл: ∫₀¹ (2x + 3)dx",
            answer: "4",
            solution: "∫(2x + 3)dx = x² + 3x. В пределах от 0 до 1: (1 + 3) - (0 + 0) = 4",
            difficulty: "medium",
            category: "calculus"
        }
    ],
    probability: [
        {
            id: 21,
            question: "Какова вероятность выпадения четного числа при бросании игрального кубика?",
            answer: "1/2",
            solution: "Четные числа: 2, 4, 6 (3 варианта). Всего исходов: 6. Вероятность = 3/6 = 1/2",
            difficulty: "easy",
            category: "probability"
        },
        {
            id: 22,
            question: "В колоде 36 карт. Какова вероятность вытащить туза?",
            answer: "1/9",
            solution: "В колоде 4 туза. Вероятность = 4/36 = 1/9",
            difficulty: "easy",
            category: "probability"
        },
        {
            id: 23,
            question: "Монету бросают 3 раза. Какова вероятность, что орел выпадет ровно 2 раза?",
            answer: "3/8",
            solution: "Всего исходов: 2³ = 8. Благоприятные исходы: ООР, ОРО, РОО (3 исхода). Вероятность = 3/8",
            difficulty: "medium",
            category: "probability"
        },
        {
            id: 24,
            question: "В ящике 5 красных и 7 синих шаров. Вынимают 2 шара. Какова вероятность, что оба красные?",
            answer: "5/33",
            solution: "Вероятность = (5/12) × (4/11) = 20/132 = 5/33",
            difficulty: "medium",
            category: "probability"
        },
        {
            id: 25,
            question: "Средний рост студентов составляет 175 см со стандартным отклонением 10 см. Какова вероятность, что рост случайно выбранного студента превышает 185 см?",
            answer: "0.1587",
            solution: "Z = (185 - 175)/10 = 1. По таблице нормального распределения P(Z>1) = 1 - 0.8413 = 0.1587",
            difficulty: "hard",
            category: "probability"
        }
    ]
};

// Функция для получения всех задач
function getAllProblems() {
    let allProblems = [];
    for (const category in mathProblems) {
        allProblems = allProblems.concat(mathProblems[category]);
    }
    return allProblems;
}