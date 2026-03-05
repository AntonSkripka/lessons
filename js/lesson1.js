//! Створення об'єкта
console.warn("Створення об'єкта:");
//? ✴️ Об'єкт — асоціативний масив, тип даних, який зберігає
//? властивості (properties) і методи (methods).
//todo: Приклад-1: створення масива:
const array = [2, 21, 34, 89, 144];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
};
console.log("array:", array);
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Створення(оголошення) об'єкта через літерал
//? схоже на створення масиву [] -- літерал масива,
//? тільки використовуються фігурні дужки {} - літерал об'єкта,
//? а не квадратні дужки.
//todo: Приклад-2: створення об'єкта:
let object = {0: 2, 1: 21, 2: 34, 3: 89, 4: 144};

// for (const key of object) {
//     console.log(key); //! ❌ TypeError: object is not iterable
// };

for (const key in object) {
    console.log(`${key}: ${object[key]}`); //! ✅
};


//? Змінемо запис об'єкта не змінюючи його властивостей:
object = {
    0: 2,
    1: 21,
    2: 34,
    3: 89,
    4: 144
};

console.log("array:", typeof array);
console.log("object:", object);
console.log("typeof object:", typeof object); //! object
console.log("typeof null:", typeof null); //! object
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");

// const object2 = null;
// const object3 = {};

//? Замінемо "індекси"(властивості (properties)) на інші:
const object2 = {
    перший: 2,
    другий: "21",
    третій: true,
    четвертий: undefined,
    "п'ятий": null,
    шостий: [2, "2", true],
    сьомий: {a: 5, b: true},
    перший: 6765, //! ❓❓❓
};

console.log("object2:", object2);
console.log("bject.keys(object2):", Object.keys(object2)); //! ['перший', 'другий', 'третій', 'четвертий', "п'ятий"]
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");

//todo: Приклад-3: створення об'єкта:
//? ✳️ Об'єкти дозволяють описати і згрупувати
//? характеристики певної сутності
//? - користувача, книги, продукту в магазині,
//? чого завгодно.
//? Об'єкти ще називають словниками, тобто
//? вони містять терміни (імена властивості або ключі)
//? та їх визначення (значення).
//? ✴️ Об'єкт складається(створюється) за допомогою властивостей,
//? кожна з яких описується параметрами - КЛЮЧ: ЗНАЧЕННЯ.
//? КЛЮЧ ще називають ІМ'ЯМ властивості і це завжди рядок!
//? ЗНАЧЕННЯМ властивості можуть бути будь-які типи:
//? примітиви, булі, змінні, масиви, функції, об'єкти тощо. 
//? Властивості розділяються комою.
const genres2 = ["adventure2", "historical prose2"];

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};
console.log("book:", book);
console.log("typeof book:", typeof book); //! object
console.log("----------------------------------------------------------------------------------------------------------");
