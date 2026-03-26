//! Функція з побічними ефектами
console.warn("Функція з побічними ефектами:")
//? ✴️ Функція з побічними ефектами - це функція,
//? яка в процесі виконання може змінювати
//? або використовувати глобальні змінні,
//? змінювати значення аргументів посилального типу,
//? виконувати операції введення-виведення тощо.
//? ✳️ Функція dirtyMultiply(array, value) множить 
//? кожен елемент масиву array на число value. 
//? Вона змінює (мутує) вихідний масив за посиланням.
const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
        array[i] = array[i] * value;
    };
};

const numbers1 = [1, 2, 3, 4, 5];
console.log("numbers_before:", numbers1); //! [1, 2, 3, 4, 5]

dirtyMultiply(numbers1, 2);

//todo: Відбулася мутація вихідних даних - масиву numbers:
console.log("numbers_after:", numbers1); //! [2, 4, 6, 8, 10]

//! Чиста функція
console.warn("Чиста функція:");
//? ✴️ Чиста функція (pure function) - це функція,
//? результат якої залежить тільки від
//? значень переданих аргументів.
//? За умови однакових аргументів вона
//? завжди повертає один і той самий результат
//? і не має побічних ефектів,
//? тобто не змінює значення аргументів.
//? ✳️ Напишемо реалізацію чистої функції 
//? множення елементів масиву, 
//? що повертає новий масив, не змінюючи вихідний.
const pureMultiply = (array, value) => {
    const newArray1 = [];
    const newArray2 = [];

    //todo: var.1
    for (let i = 0; i < array.length; i += 1) {
        newArray1.push(array[i] * value);
    };

    //todo: var.2
    array.forEach(element => {
        newArray2.push(element * value);
    });

    // return newArray1;
    // return newArray2;
    return {
        newArray1,
        newArray2
    };
};

const numbers2 = [1, 2, 3, 4, 5];
console.log("numbers2_before:", numbers2); //! [1, 2, 3, 4, 5]

const doubledNumbers = pureMultiply(numbers2, 2);

//todo: Мутація вихідних даних - масиву numbers2 не відбулася:
console.log("numbers2_after:", numbers2); //! [1, 2, 3, 4, 5]

//todo: Функція повернула новий масив зі зміненими даними:
console.log("doubledNumbers:", doubledNumbers); //! [2, 4, 6, 8, 10]
console.log("---------------------------------------");

//! 3.Перебираючі методи
//? ✴️ В JavaScript є методи масивів,
//? що прийшли з функціональних мов.
//? Більшість з них - це чисті функції.
//? Вони створюють новий масив, заповнюють його,
//? застосовуючи до значення кожного елемента
//? зазначену колбек-функцію,
//? після чого повертають цей новий масив.
//? ✳️ Усі перебираючі методи масивів мають схожий синтаксис.
//? Вихідний масив array,
//? виклик методу method
//? і callback-функція callback як аргумент методу.
console.log(
    `%c
    масив.method(callback[currentValue, index, array]);
    `,
    'color: red; font-size: 20px',
);

//? ✴️ У більшості методів аргументами callback-функції є:
//? 🔹 значення елемента  currentValue (перший параметр),
//? 🔹 позиція елемента index (другий параметр)
//? 🔹 і сам вихідний масив array (третій параметр).
console.log(
    `%c
    масив.method((item, idx, arr) => {
        // логіка, яка буде застосовуватися на кожній ітерації
    });
    `,
    'color: blue; font-size: 20px',
);

//? ✳️ Всі параметри, крім значення елемента item, - необов'язкові. 
//? Назви параметрів можуть бути будь-які, 
//? але є неофіційні домовленості.
console.log(
    `%c
    масив.method(item => {
        // логіка, яка буде застосовуватися на кожній ітерації
    });
    `,
    'color: green; font-size: 20px',
);
console.log("---------------------------------------------------------------------------------------------------------");

//! 4.Метод forEach
console.warn("Синтаксис методу forEach:");
//? ✴️ Метод перебирання масиву,
//? який використовується для заміни циклів
//? for і for...of в роботі з колекцією даних.
//? 🔸 Поелементно перебирає масив.
//? 🔸 Викликає колбек-функцію для кожного елемента масиву.
//? 🔸 Нічого не повертає.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.forEach(function callback(element, index, array) {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);


//? ✳️ Можна оголошувати тільки необхідні параметри,
//? найчастіше - це елемент, головне не забувати про їх порядок.
const numbers = [5, 10, 15, 20, 25];
console.log("numbers:", numbers);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");

console.warn("Функціональний forEach:");
//todo: Функціональний forEach:
numbers.forEach(num => console.log(num));
console.log(". . . . . . . . . . . .");

console.warn("Перебирання за допомогою Класичного for:");
//todo: Перебирання за допомогою Класичного for:
for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Індекс: ${i}, значення: ${numbers[i]}`);
};
console.log(". . . . . . . . . . . .");

console.warn("Метод перебирання forEach (var.1):");
//todo: Метод перебирання forEach (var.1):
numbers.forEach(function (number, index) {
    console.log(`Індекс: ${index}, значення: ${number}`);
});
console.log(". . . . . . . . . . . .");

console.warn("Метод перебирання forEach (var.2):");
//todo: Метод перебирання forEach (var.2):
numbers.forEach((num, idx) => console.log(`index: ${idx}, value: ${num}`));
numbers.forEach((num) => num += 2);
numbers.forEach((num, idx) => console.log(`index: ${idx}, value: ${num}`));
console.log("------------------------");

//? ❗️ Єдиним випадком, коли варто використовувати
//? цикли for або for...of для перебирання масиву,
//? - це задачі з перериванням виконання циклу.
//? ❗️❗️❗️ Перервати виконання методу forEach не можна,
//? він завжди перебирає масив до кінця.

//! Метод map()
console.warn("Синтаксис методу map():");
//? ✴️ Метод map(callback) використовується
//? для трансформації масиву.
//? Він викликає колбек-функцію
//? для кожного елемента вихідного масиву,
//? а результат її роботи записує у новий масив,
//? який і буде результатом виконання методу.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Результат роботи колбек-функції записується у новий масив.
//? 🔸 Повертає новий масив однакової довжини.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.map((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода map():");
//? ✳️ Його можна використовувати для того,
//? щоб змінити кожен елемент масиву.
//? Оригінальний масив використовується як еталон,
//? на основі якого можна зробити іншу колекцію.
const planets = ["Земля", "Марс", "Венера", "Юпітер"];
console.log("planets_before:", planets); //! ['Земля', 'Марс', 'Венера', 'Юпітер']

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log("planetsInUpperCase:", planetsInUpperCase); //! ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log("planetsInLowerCase:", planetsInLowerCase); //! ['земля', 'марс', 'венера', 'юпітер']

//todo: Оригінальний масив не змінився:
console.log("planets_after:", planets); //! ['Земля', 'Марс', 'Венера', 'Юпітер']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✳️ Ми вже знаємо, що повсякденне завдання
//? - це маніпуляція масивом об'єктів.
//? Наприклад, отримати масив значень властивості 
//? з усіх об'єктів. 
//? У нас є масив студентів, 
//? а потрібно отримати окремий масив їхніх імен.
const students1 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
];
console.log("students1:", students1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const names = students1.map(student => student.name);
const scores = students1.map(score => score.score);
console.log(`Scores: ${scores}`);
console.log("names:", names); //! ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
console.log("------------------------------------------------------------------");

//! Вирішення без використання перебираючих методів
const names1 = [];
const scores1 = [];

for (const {name, score} of students1) {
  names1.push(name);
  scores1.push(score);
}
console.log(`Scores: ${scores1}`);
console.log("names:", names1);