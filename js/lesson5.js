//! Метод findIndex()
console.warn("Синтаксис методу findIndex():");
//? ✴️ Метод findIndex(callback)
//? - це сучасна заміна методу indexOf().
//? Дозволяє виконувати пошук за складнішими умовами,
//? ніж просто рівність.
//? Використовується як для пошуку
//? у масиві примітивів, так і в масиві об'єктів.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає індекс першого елемента, що задовольняє умову,
//?    тобто коли колбек повертає true.
//? 🔸 Якщо жоден елемент не задовольнив умову,
//?    тобто для всіх елементів колбек повернув false,
//?    метод повертає -1.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.findIndex((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода findIndex():");
//? ✳️ Приклад-1:
const colorPickerOptions2 = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
];
console.log("colorPickerOptions2:", colorPickerOptions2);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log('Індекс мітки "blue:"', colorPickerOptions2.findIndex(option => option.label === "blue")); //! 2
console.log('Індекс мітки "pink:"', colorPickerOptions2.findIndex(option => option.label === "pink")); //! 3
console.log('Індекс мітки "white:"', colorPickerOptions2.findIndex(option => option.label === "white")); //! -1
console.log("-------------------------------------------------------------------------");

//! Метод every()
console.warn("Синтаксис методу every():");
//? ✴️ Перевіряє, чи проходять ВСІ елементи масиву
//? тест колбек-функції.
//? Повертає true або false.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає true, якщо ВСІ елементи масиву задовольняють умову.
//? 🔸 Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//? 🔸 Перебирання масиву припиняється, якщо колбек повертає false.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.every((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода every():");
//? ✳️ Приклад-1:
//todo: УСІ елементи більші або дорівнюють нулю? - ТАК
console.log("УСІ елементи [1, 2, 3, 4, 5] більші або дорівнюють нулю? -", [1, 2, 3, 4, 5].every(value => value >= 0)); //! true


//todo:  УСІ елементи більші або дорівнюють нулю? - НІ
console.log("УСІ елементи [1, 2, 3, -10, 4, 5] більші або дорівнюють нулю? -", [1, 2, 3, -10, 4, 5].every(value => value >= 0)); //! false
console.log("-----------------------------------------------------------------------------------------");


//! Метод some()
console.warn("Синтаксис методу some():");
//? ✴️ Перевіряє, чи проходить хоча б ОДИН елемент масиву
//?  тест колбек-функції.
//? Повертає true або false.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає true, якщо хоча б ОДИН елемент масиву задовольняє умову.
//? 🔸 Повертає false, якщо жоден елемент масиву не задовольняє умову.
//? 🔸 Перебирання масиву припиняється, якщо колбек повертає false.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.some((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода some():");
//? ✳️ Приклад-2:
//todo:  Чи є хоча б один елемент, що більший або дорівнює нулю? - ТАК
console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що більший або дорівнює нулю? -", [1, 2, 3, 4, 5].some(value => value >= 0)); //! true

//todo:  Чи є хоча б один елемент, що більший або дорівнює нулю? - ТАК
console.log("Чи є хоча б один елемент з [-7, -20, 3, -10, -14], що більший або дорівнює нулю? -", [-7, -20, 3, -10, -14].some(value => value >= 0)); //! true

//todo:  Чи є хоча б один елемент, що менший нуля? - НІ
console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що менший нуля? -", [1, 2, 3, 4, 5].some(value => value < 0)); //! false

//todo:  Чи є хоча б один елемент, що менший нуля? - ТАК
console.log("Чи є хоча б один елемент з [1, 2, 3, -10, 4, 5], що менший нуля? -", [1, 2, 3, -10, 4, 5].some(value => value < 0)); //! true
console.log("-----------------------------------------------------------------------------------------");

//! 1.Метод reduce()
console.warn("Синтаксис методу reduce():");
//? ✴️ Метод reduce(callback, initialValue)
//? використовується для послідовної обробки кожного елемента масиву
//? із збереженням проміжного результату, як акумулятор.
//? Трохи складніший за інші методи для засвоєння,
//? але результат вартий того.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Робить все, що завгодно.
//? 🔸 Повертає що завгодно.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 Перший параметр колбек-функції
//?    (previousValue) - це акумулятор, тобто проміжний результат.
//?    Значення, яке поверне колбек-функція на поточній ітерації,
//?    буде значенням цього параметра на наступній ітерації.
//? 🔹 наступний - значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
//? 🔹 Другий аргумент - необов'язкове початкове значення акумулятора
//?    - параметр initialValue.
console.log(
    `%c
    масив.reduce((previousValue, element, index, array) => {
        // тіло колбек-функції
    }, initialValue);
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода reduce():");
//? ✳️ Найлегше уявити його роботу метода reduce()
//? на прикладі підрахунку суми елементів масиву.
//? ✳️ Спочатку метод reduce()
//? створює внутрішню змінну-акумулятор (previousValue)
//? і присвоює їй значення параметра initialValue
//? або першого елемента масиву, що перебирається,
//? якщо initialValue не задане.
//? 🔹 previousValue = initialValue = 0; (або previousValue = array(0) = 2).
//? Потім колбек - функція викликається для кожного елемента масиву.
//? Поточне значення параметра previousValue
//? - це те, що повернула колбек - функція на минулій ітерації.
//?     🔹 Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
//?     🔹 Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
//?     🔹 Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
//?     🔹 Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
//?     🔹 Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
//? Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
//?       Результат = 32
const array = [2, 7, 3, 14, 6];
const sumOfArray = array.reduce((acc, element) => {return element += acc}, 0);
console.log(sumOfArray);
console.log("array:", array);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `")
const total = array.reduce((previousValue, number, index) => {
    console.log(`Iteration-${index + 1}:  previousValue: ${previousValue},  number: ${number}  ->  return ${previousValue + number}`);
    return previousValue + number;
}, 0);

console.log("total:", total); //! 32
//? ✳️ Тобто метод reduce() використовується,
//? коли необхідно взяти «багато» і привести до «одного».
//? У повсякденних завданнях його застосування зводиться до роботи з числами.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ❗️❗️❗️ Важливий приклад вірного використання синтаксису метода reduce():
console.warn("Приклад-1: ВІРНЄ використання синтаксису метода reduce():");
//todo var.1
function example1(arr) {
    arr.reduce((acc, element, index) => {
        console.log(`Acc: ${acc}; Index-${index}:  Element: ${element}`);
    }, undefined);
}
example1(["Робітник1", "Робітник2", "Робітник3"]);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2: ПОМИЛКОВЕ використання синтаксису метода reduce():");
//todo var.2 
function example2(arr) {
    arr.reduce((element, index) => {
        console.log(`Index-${index}:  Element: ${element}`); //todo var.2
    }, undefined);
};
example2(["Робітник1", "Робітник2", "Робітник3"]);
console.log("-------------------------------------------------------------");

//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✳️ Під час роботи з масивом об'єктів
//? виконується редукування (змінювання в бік зменшення)
//? за значенням певної властивості.
//? Наприклад, у нас є масив студентів з балами за тест.
//? Необхідно отримати середній бал.
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
// ];
// console.log("students:", students);
// console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


// //todo: Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//     return total + student.score;
// }, 0);
// console.log("totalScore:", totalScore); //! 337

// const averageScore = totalScore / students.length; //! 67.4
// console.log("averageScore:", averageScore);
// console.log("-------------------------------------------------------------");

//! Просунутий reduce (сума усіх лайків)
console.warn("Просунутий reduce (сума усіх лайків):");
//? ✳️ Припустимо у нас є наступна задача:
//? з масиву постів твіттера окремого користувача
//? необхідно порахувати суму усіх лайків.
//? Можна перебрати циклом for або forEach,
//? кожне з цих рішень вимагатиме
//? написання додаткового коду.
//? А можна використовувати reduce.
const tweets1 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets1:", tweets1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Пройдемо по всіх елементах колекції і додамо значення властивості likes
//todo: до акумулятора, початкове значення якого вкажемо 0.
const likes = tweets1.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log("likes:", likes); //! 32

//todo: Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
//todo: для підрахунку лайків з колекції
const countLikes = tweets => {
    return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log("likes with countLikes:", countLikes(tweets1)); //! 32
console.log("-------------------------------------------------------------");

//! Просунутий reduce (масив усіх тегів)
console.warn("Просунутий reduce (масив усіх тегів):");
//? ✳️ Продовжуючи тему reduce, 
//? ми зберемо в масив усі теги, 
//? які зустрічаються в постах.
const tweets2 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets2:", tweets2);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `")

//todo: Пройдемо по всіх елементах колекції і додамо значення властивості tags
//todo: до акумулятора, початкове значення якого вкажемо порожнім масивом [].
//todo: На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
const tags2 = tweets2.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
}, []);

console.log("tags2:", tags2); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

//todo: Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
//todo: для збирання тегів з колекції
const getTags2 = tweets2 =>
    tweets2.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

console.log("Tags-2 with countLikes:", getTags2(tweets2)); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
console.log("-------------------------------------------------------------");

//! Просунутий reduce (об'єкт унікальних тегів)
console.warn("Просунутий reduce (об'єкт унікальних  тегів):");
//? ✳️ Продовжуючи тему reduce, 
//? ми зберемо в масив усі теги, 
//? які зустрічаються в постах.
const tweets3 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets3:", tweets3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const getTags3 = tweets =>
    tweets.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

const tags3 = getTags3(tweets3);
console.log("Tags-3 with countLikes:", tags3); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

//todo: Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
//todo: Це стандартна практика, якщо callback-функція досить велика.

//todo: Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
//todo: то створюємо її і записуємо їй значення 0.
//todo: В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
        acc[tag] = 0;
    };
    acc[tag] += 1;
    return acc;
};

//todo: Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags3);
console.log("tagCount:", tagCount); //! {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
console.log("-------------------------------------------------------------");

//! Метод sort()
console.warn("Синтаксис методу sort():");
//? ✴️ Метод sort() сортує елементи масиву,
//? але на відміну від інших методів перебирання,
//? він сортує вихідний масив.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Сортує і змінює вихідний (оригінальний) масив.
//? 🔸 Повертає змінений масив, тобто посилання на відсортований вихідний (оригінальний) масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.sort();
    `,
    'color: blue; font-size: 18px',
);


console.warn("Приклад використання метода sort():");
//? ✳️ Такий масив чисел буде відсортований за зростанням:
const scores1 = [61, 19, 74, 35, 92, 56];
console.log("scores1_before:", scores1); //! [61, 19, 74, 35, 92, 56]
scores1.sort();
console.log("scores1_after:", scores1); //! [19, 35, 56, 61, 74, 92]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Але, оскільки за замовчуванням значення приводяться до рядка,
//? стандартне сортування чисел працює незвично.
const scores2 = [27, 2, 41, 4, 7, 3, 75];
console.log("scores2_before:", scores2); //! [27, 2, 41, 4, 7, 3, 75]
scores2.sort();
console.log("scores2_after:", scores2); //! [2, 27, 3, 4, 41, 7, 75]

//? ✳️ Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.
//? ✳️ Для прикладу, відсортуємо масив рядків за алфавітом:
const students1 = ["віка", "андрій", "Олег", "юля", "Борис", "Катя"];
console.log("students1_before:", students1); //! ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя']
students1.sort();
console.log("students1_after:", students1); //! ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Але порядковий номер великих літер менший, ніж у малих:
const letters = ["b", "B", "a", "A", "c", "C"];
console.log("letters_before:", letters); //! ['b', 'B', 'a', 'A', 'c', 'C']
letters.sort();
console.log("letters_after:", letters);; //! ['A', 'B', 'C', 'a', 'b', 'c']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✴️ Через те, що сортується вихідний масив, 
//? порушується принцип чистоти функцій 
//? і не можна зручно створити декілька похідних колекцій 
//? на основі вихідної. 
//? Наприклад, створити колекцію, відсортовану за зростанням, 
//? а іншу - за спаданням. 
//? Тому перед сортуванням роблять 
//? повну копію вихідного масиву і сортують вже її.
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores3 = [...scores3].sort();

console.log("scores3:", scores3); //! [61, 19, 74, 35, 92, 56]
console.log("ascendingScores3:", ascendingScores3);  //! [19, 35, 56, 61, 74, 92]
console.log("-------------------------------------------------------------------------------");

//! Свій порядок сортування чисел
console.warn("Свій порядок сортування чисел:");
//? ✳️ Для зазначення свого порядку сортування методу sort(compareFunction)
//? потрібно передати колбек-функцію з двома параметрами.
//? Це функція порівняння (compare function),
//? порядок сортування залежить від її результату.
//? Метод sort() буде викликати її для двох довільних елементів.
console.log(
    `%c
    массив.sort((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores4 = [27, 2, 41, 4, 7, 3, 75];
const ascendingScores4Old = [...scores4].sort();
const ascendingScores4New = [...scores4].sort((a, b) => a - b);
const descentingScores4New = [...scores4].sort((a, b) => b - a);

console.log("scores4:", scores4); //! [27, 2, 41, 4, 7, 3, 75]
console.log("ascendingScores4Old:", ascendingScores4Old);  //! [2, 27, 3, 4, 41, 7, 75]
console.log("ascendingScores4New:", ascendingScores4New);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores4New:", descentingScores4New);  //! [75, 41, 27, 7, 4, 3, 2]

//! Свій порядок сортування рядків
console.warn("Свій порядок сортування рядків:");
//? ✴️ Для сортування рядків в алфавітному порядку, 
//? за зростанням або спаданням, 
//? використовується метод рядків localeCompare().
console.log(
    `%c
    firstString.localeCompare(secondString)
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------------------");

//? ✳️ Він викликається на рядку,
//? який потрібно порівняти (firstString) з тим,
//? що був переданий йому як аргумент (secondString).
console.log('"a".localeCompare("b"):', "a".localeCompare("b")); //! -1
console.log('"b".localeCompare("a"):', "b".localeCompare("a")); //! 1
console.log('"a".localeCompare("a"):', "a".localeCompare("a")); //! 0
console.log('"b".localeCompare("b"):', "b".localeCompare("b")); //! 0
//? 🔸 Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
//? 🔸 Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
//? 🔸 Якщо рядки однакові, повертається нуль.
console.log("-------------------------------------------------------------------------------");

//? ✳️ Це зручно використовувати для сортування рядків,
//? оскільки метод sort() очікує такі самі значення від колбек-функції.
const students2 = ["Віка", "андрій", "Олег", "юля", "Борис", "катя"];
console.log("students2:", students2); //! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']

const inAlphabetOrder2Old = [...students2].sort();
console.log("inAlphabetOrder2Old:", inAlphabetOrder2Old); //! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']

const inAlphabetOrder2New = [...students2].sort((a, b) => a.localeCompare(b));
console.log("inAlphabetOrder2New:", inAlphabetOrder2New); //! ['андрій', 'Борис', 'Віка', 'катя', 'Олег', 'юля']

const inReversedOrder2New = [...students2].sort((a, b) => b.localeCompare(a));
console.log("inReversedOrder2New:", inReversedOrder2New); //! ['юля', 'Олег', 'катя', 'Віка', 'Борис', 'андрій']

//! Сортування об'єктів
console.warn("Сортування об'єктів:");
//? ✴️ Під час роботи з масивом об'єктів, 
//? сортування виконується за числовим 
//? або рядковим значенням певної властивості. 
//? Наприклад, у нас є група студентів з балами за тест. 
//? Необхідно відсортувати масив об'єктів за зростанням 
//? і спаданням кількості балів, і за ім'ям студента.
const students3 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
];
console.log("students3:", students3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const inAscendingScoreOrder = students3.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log("inAscendingScoreOrder:", inAscendingScoreOrder); //! 

// const inDescendingScoreOrder = students3.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log("inDescendingScoreOrder:", inDescendingScoreOrder); //!

const inAlphabeticalOrder = students3.sort((firstStudent, secondStudent) =>
    firstStudent.name.localeCompare(secondStudent.name)
);
console.log("inAlphabeticalOrder:", inAlphabeticalOrder); //! 
console.log("-------------------------------------------------------------------------------");

//! Метод toSorted()
console.warn("Синтаксис методу toSorted():");
//? ✴️ Метод toSorted() працює також як метод sort(),
//? але на відміну від метод sort()
//? він НЕ змінює вихідний (оригінальний) масив,
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає НОВИЙ відсортований масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.toSorted();
    `,
    'color: blue; font-size: 18px',
);
console.log(
    `%c
    массив.toSorted((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores5 = [27, 2, 41, 4, 7, 3, 75];
console.log("scores5_before:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const ascendingScores5 = scores5.toSorted((a, b) => a - b);
const descentingScores5 = scores5.toSorted((a, b) => b - a);

console.log("ascendingScores5:", ascendingScores5);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores5:", descentingScores5);  //! [75, 41, 27, 7, 4, 3, 2]

console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
console.log("scores5_after:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("-------------------------------------------------------------------------------");

//! 3.Ланцюжки методів
//? ✳️ У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.
const students = [
    { name: "Манго", score: 83, courses: ["математика", "фізика"] },
    { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
    { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
    { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

//? ✳️ Необхідно отримати масив їхніх імен,
//? відсортованих за зростанням балів за тест.
//? З цією метою ми відсортуємо копію масиву методом sort(),
//? після чого методом map() створимо масив значень властивості name
//? з відсортованого масиву.
const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names1 = sortedByAscendingScore.map(student => student.name);

console.log("names1:", names1); //! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Проблема в тому, що у нас з'являються проміжні змінні
//? після кожної операції, крім фінальної.
//? Змінна sortedByAscendingScore - зайва
//? і необхідна тільки для зберігання проміжного результату.
//? ✳️ Позбутися таких «мертвих» змінних можна
//? за допомогою групування викликів методів у ланцюжку.
//? Кожний наступний метод буде виконуватися
//? на основі результату роботи попереднього.
//? 🔸 Робимо копію вихідного масиву перед сортуванням.
//? 🔸 На копії викликаємо метод sort().
//? 🔸 До результату роботи методу sort() застосовуємо метод map().
//? 🔸 Змінній names присвоюється результат роботи методу map().

const names2 = [...students]
    .sort((a, b) => a.score - b.score)
    .map(student => student.name);

console.log("names2:", names2); //! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
//? 🔸 На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
//? 🔸 До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
//? 🔸 На результаті методу filter() викликаємо sort().
//? 🔸 Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
const uniqueSortedCourses = students
    .flatMap(student => student.courses)
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort((a, b) => a.localeCompare(b));

console.log("uniqueSortedCourses:", uniqueSortedCourses);  //! ['біологія', 'інформатика', 'література', 'математика', 'фізика']
console.log("----------------------------------------------------------------------------------------------");

//? ✳️ Ланцюжок методів може бути довільної довжини,
//? але, зазвичай, не більше 2-3 операцій.
//? 🔷 По-перше, перебираючі методи використовуються
//? для порівняно простих операцій над колекцією.
//? 🔷 По-друге, виклик кожного наступного методу 
//? - це додаткове перебирання масиву, 
//? що за великої кількості, 
//? може позначитися на продуктивності.
