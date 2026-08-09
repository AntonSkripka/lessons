//! Перебирання об'єкта
//? ✳️ На відміну від масиву або рядка,
//? об'єкт - це неітерабельна сутність,
//? тобто його не можна перебрати циклами
//? for або for...of.

//! Цикл for...in
//? ✴️ Для перебирання об'єктів використовується
//? спеціальний цикл for...in,
//? який перебирає КЛЮЧІ об'єкта object.
console.warn("Приклад-1:");
const object = {
    0: 2,
    1: 21,
    2: 34,
    3: 89,
    4: 144
};
console.log("object:", object);
console.log("                              ");

// for (const key of object) {
//     console.log(key); //! ❌ TypeError: object is not iterable
// };

for (const key in object) {
    console.log(`${key}: ${object[key]}`); //! ✅
};

//? ✳️ Змінна key доступна тільки в тілі циклу.
//? На кожній ітерації в неї буде записано
//? значення ключа (ім'я) властивості.
//? Для того, щоб отримати значення властивості
//? з таким ключем (ім'ям),
//? використовується синтаксис квадратних дужок.
// console.warn("Приклад-21:");
// // const book = {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["historical prose", "adventure"],
// //     rating: 8.38,
// // };
// console.log("book:", book);
// console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// for (const key in book) {
//     //todo: var.1:
//     //! Ключ
//     console.log("key:", key);
//     //! Значення властивості з таким ключем
//     // console.log("this:", this); //! undefined
//     console.log("book[key]:", book[key]);
//     console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
    
//     //todo: var.2:
//     // console.log(`${key}: ${book[key]}`);
// };
// console.log("--------------------------------------------------------------------------------------------------");

// let string = "abc";
// let y = string;
// let string2 = string + "123";
// string2 = `${string} 123`;

//! Методи об'єкта Object
//? ✳️ Всі об'єкти походять від конструктора Object.
//? У нього є кілька дуже корисних методів для роботи з об'єктами.

//! Додавання методу (методів) -> Object.assign
console.warn("Object.assign - додавання методу (методів):");
//? ✴️ Object.assign - додає один
//? або декілька методів до об'єкту.
const bookShelf = {
    books: ["The Last Kingdom"],
    //todo: Ці ТРИ методи будуть додані окремо як var.1 або var.2
    // getBooks() {
    //     return this.books;
    // },
    // addBook(bookName) {
    //     this.books.push(bookName);
    // },
    // removeBook(bookName) {
    //     const bookIndex = this.books.indexOf(bookName);
    //     this.books.splice(bookIndex, 1);
    // },
};
console.log("books_before:", bookShelf);

//todo: 🛑 var.1
// //todo: Додавання до об'єкту метода "getBooks":
// bookShelf.getBooks = function() {
//     return this.books;
// };

// //todo: Додавання до об'єкту метода "addBook":
// bookShelf.addBook = function(bookName) {
//     this.books.push(bookName);
// };

// //todo: Додавання до об'єкту метода "removeBook":
// bookShelf.removeBook = function(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
// };
// console.log("🛑books_after-1:", bookShelf);

//todo: ✅ var.2 Додавання до об'єкту методів "getBooks", "addBook" і "removeBook":
Object.assign(bookShelf, {
    getBooks() {
        return this.books;
    },
    addBook(bookName) {
        this.books.push(bookName);
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    },
});
console.log("✅books_after-2:", bookShelf);


console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log("books_add:", bookShelf.getBooks()); //! ['The Last Kingdom', 'The Mist', 'Dream Guardian']

bookShelf.removeBook("The Mist");
console.log("books_remove:", bookShelf.getBooks()); //! ['The Last Kingdom', 'Dream Guardian']
console.log("------------------------------------------------------------------------------------------------");


//! Масив з ключами об'єкта -> Object.keys()
console.warn("Object.keys() - масив з ключами об'єкта:");
//? ✴️ Метод Object.keys(obj) приймає об'єкт і повертає
//? масив ключів його власних властивостей.
//? Якщо об'єкт не має властивостей, метод поверне порожній масив.
let book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};
console.log("book:", book);
let keys = Object.keys(book);
console.log("Object.keys(book):", keys); //! ['title', 'author', 'genres', 'rating']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");



//? ✳️ Скомбінувавши результат Object.keys()
//? і цикл for...of, можна зручно перебрати
//? власні властивості об'єкта
//? не використовуючи архаїчний цикл for...in
//? з перевірками належності властивостей.
for (const key of keys) {
    //todo: var.1:
    // //! Ключ
    // console.log("key:", key);
    // //! Значення властивості з таким ключем
    // console.log("book[key]:", book[key]);
    // console.log("`  `  `  `  `  `  `  `  `  `");

    //todo: var.2:
    console.log(`${key}: ${book[key]}`);
};
console.log("------------------------------------------------------------------------------------------------");

//! Масив зі значеннями властивостей -> Object.values()
console.warn("Object.values() - масив зі значеннями властивостей:");
//? ✴️ Метод Object.values(obj) -
//? повертає масив значень його власних властивостей.
//? Якщо в об'єкті відсутні властивості,
//? метод Object.values(obj) поверне порожній масив.
book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};
console.log("book:", book);

keys = Object.keys(book);
console.log("Object.keys(book):", keys); //! ['title', 'author', 'genres', 'rating']

let values = Object.values(book);
console.log("Object.values(book):", values); //! ['The Last Kingdom', 'Bernard Cornwell', 8.38]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");



//todo: Приклад використання Object.values()
console.warn("Приклад використання Object.values():");
//? ✳️ Потрібно порахувати загальну кількість продуктів
//? в об'єкті формату ім'я-продукту: кількість.
//? У такому випадку, буде доречним метод Object.values()
//? для того, щоб отримати масив усіх значень,
//? а потім перебрати його циклом for...of
//? для отримання загальної кількісті(суми) продуктів.
const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
};
console.log("goods:", goods);

const goodsValues = Object.values(goods); 
console.log("Object.values(goods):", goodsValues); //! [6, 3, 4, 7]

let total = 0;
for (const value of goodsValues) {
    // let total = 0;
    total += value;
};
console.log("total:", total); //! 20
console.log("------------------------------------------------------------------------------------------------");

//! Масив масивів з ключами та значеннями їх властивостей -> Object.entries()
console.warn("Object.entries() - масив зі значеннями властивостей:");
//? ✴️ Метод Object.entries(obj) -
//? повертає масив записів, кожен елемент якого,
//? буде ще один масив з 2-х елементів:
//? імені властивості і значення цієї властивості з об'єкта obj.
book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
};
console.log("book:", book);

keys = Object.keys(book);
console.log("Object.keys(book):", keys); //! ['title', 'author', 'genres', 'rating']

values = Object.values(book);
console.log("Object.values(book):", values); //! ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
console.log("Object.entries(book):", entries); //! [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
console.log("------------------------------------------------------------------------------------------------");

//! Метод Object.create()
console.warn("Метод Object.create():");
//? ✴️ Метод Object.create() створює копію старого об'єкту
//? і повертає новий об'єкт, зв'язуючи його зі старим об'єктом.
//? ✳️ Метод Object.create(animal) створює і повертає новий об'єкт,
//? зв'язуючи його з об'єктом animal.
//? ✳️ Тому можна отримати значення властивості legs,
//? звернувшись до нього як dog.legs,
//? хоча ця властивість відсутня в об'єкті dog,
//? ✴️❗️Така можливість існує, тому що властивість legs
//? - це НЕВЛАСНА властивість об'єкта animal.
const animal = {
    legs: 4,
};
console.log("animal:", animal); //! {legs: 4}

const dog = Object.create(animal);
dog.name = "Манго";

console.log("dog:", dog); //! {name: 'Манго'}
console.log("dog.name:", dog.name); //! 'Манго'
console.log("dog.legs:", dog.legs); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");


//! Метод hasOwnProperty()
console.warn("Метод hasOwnProperty():");
//? ✴️ Оператор in, який використовується в циклі for...in,
//? не робить різниці між ВЛАСНИМИ та НЕВЛАСНИМИ властивостями об'єкта.
//todo: ❌ Повертає true для всіх властивостей
console.log('"name" in dog:', "name" in dog); //! true
console.log('"legs" in dog:', "legs" in dog); //! true
console.log("`  `  `  `  `  `  `  `");


//? ✴️ Цикл for...in також не робить різниці між
//? ВЛАСНИМИ та НЕВЛАСНИМИ властивостями об'єкта.
//? ✳️ Це заважає, коли потрібно перебрати тільки ВЛАСНІ властивості.
for (const key in dog) {
    console.log(`${key}: ${dog[key]}`); 
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");


//? ✴️❗️ Для того, щоб дізнатись, чи містить об'єкт ВЛАСНУ властивість,
//? використовується метод hasOwnProperty(),
//? який повертає true або false.
//? ✴️✅ Повертає true тільки для власних властивостей:
console.log('dog.hasOwnProperty("name"):', dog.hasOwnProperty("name")); //! true
console.log('dog.hasOwnProperty("legs"):', dog.hasOwnProperty("legs")); //! false
console.log("`  `  `  `  `  `  `  `  `  `  `  `");

//? ✴️✅✅ Повертаємо true тільки для власних властивостей
//? за допомогою Цикла for...in:
for (const key in dog) {
    //todo: Якщо це власна властивість - виконуємо тіло if
    if (dog.hasOwnProperty(key)) {
        console.log(`${key}: ${dog[key]}`); //! name: Манго
    };
    //todo: Якщо це невласна властивість - нічого не робимо
};
console.log("------------------------------------------------------------------------------------------------");

//! Операції spread і rest
//? ✴️ spread і rest - це новий синтаксис
//? для роботи з ітерабельними сутностями,
//? таких як рядок, масив або об'єкт.
//? ❗️ Його функціонал і назва залежить від місця застосування.


//! Операція spread (розпорошення, розпилення або передача аргументів)
//? ✴️ ... — spread, розпорошення, розпилення.
//? Дозволяє розпорошити колекцію елементів в іншу колекцію,
//? зробивши копію оригінальної не зраджуючи її.
//? При цьому, під час розпилення,
//? якщо елемент колекції примітив — створюється копія елемента,
//? в разі складного типу створюється посилання на оригінальний елемент.
//? ✳️ Розпилення можна використовувати всього в 3-х ситуаціях:
//? 1️⃣ Під час виклику функції, для передачі масиву елементів окремими аргументами.
//? 2️⃣ У літералі масиву, при створенні нового масиву.
//? 3️⃣ У літералі об'єкта, при створенні нового об'єкта.


//! 1️⃣ Операція spread. Розпилення аргументів (передача аргументів)
console.warn("Операція spread. \n  1️⃣ Розпилення аргументів (передача аргументів):");
//? ✳️ Наприклад, у нас є масив температур за якийсь період,
//? і необхідно програмно знайти найменшу температуру в масиві
//? використовуючи метод Math.min(),
//? який очікує кілька аргументів, а не масив❗️.
//? ✳️❗️ Якщо передати просто масив, отримаємо NaN,
//? тому що Math.min() не вміє працювати з масивом❗️.
let temperatures = [18, 14, 12, 21, 17, 29];
//todo: ❌ Так не спрацює, тому що передаємо цілий масив:
let min = Math.min(temperatures); 
console.log("❌ min:", min); //! NaN

//? ✴️ Зробити це нам допоможе операція розпилення spread, 
//? яка передає елементи масиву 
//? окремими аргументами при виконанні функції.
temperatures = [18, 14, 12, 21, 17, 29];
//todo: ✅ Розподілимо колекцію елементів в якості набору окремих значень:
// let a = ...temperatures; 
// console.log(a);
min = Math.min(...temperatures); 
console.log("✅ min:", min); //! 12
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//! 2️⃣ Операція spread. Cтворення нового масиву (копія масиву)
console.warn("Операція spread. \n  2️⃣ Cтворення нового масиву (копія масиву):");
//? ✳️ Операція ... (spread) дозволяє створити 
//? копію масиву або «склеїти» довільну кількість масивів в один новий. 
//? Раніше для цього використовували методи slice() і concat(), 
//? але операція розподілу дозволяє зробити те саме у коротшій формі.
const temps = [14, -4, 25, 8, 11];
console.log("temps:", temps); //! [14, -4, 25, 8, 11]
//todo: Це точна, але незалежна копія масиву temps:
const copyTemps = [...temps];
console.log("copyTemps:", copyTemps); //! [14, -4, 25, 8, 11]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");

copyTemps[0] = 0;
console.log("temps:", temps); //! [14, -4, 25, 8, 11]
console.log("copyTemps:", copyTemps); //! [0, -4, 25, 8, 11]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Операція ...(spread), створюючи нові масиви,
//? дозволяє замінити метод concat().
const lastWeekTemps = [-14, -25, -11];
console.log("lastWeekTemps:", lastWeekTemps); //! [-14, -25, -11]

const currentWeekTemps = [23, 17, 18];
console.log("currentWeekTemps:", currentWeekTemps); //! [23, 17, 18]

const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log("allTemps:", allTemps); //! [-14, -25, -11, 23, 17, 18]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//! 3️⃣ Операція spread. Cтворення нового об'єкта (копія об'єкта)
console.warn("Операція spread. \n  2️⃣ Cтворення нового об'єкта (копія об'єкта):");
//? ✳️ Операція ... (spread) дозволяє створити копію об'єкта, тобто,
//? розподілити властивості довільної кількості об'єктів в один новий.
const first = {
    propA: 5,
    propB: 10
};
const second = {
    propA: 15
};

const third1 = {...first, ...second};
console.log("third1:", third1); //! {propA: 5, propB: 10, propC: 15}

const third2 = {...second, ...first};
console.log("third2:", third2); //! {propC: 15, propA: 5, propB: 10}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✴️❗️ Порядок розподілу об'єктів має значення.
//? Імена властивостей об'єкта - унікальні,
//? тому властивості об'єкта, що розподіляється,
//? можуть перезаписати❗️ значення вже існуючої властивості,
//? якщо їх імена збігаються❗️.
const firstNew = {propA: 5, propB: 10, propC: 50};
const secondNew = {propC: 15, propD: 20};

const thirdNew = { ...firstNew, ...secondNew };
console.log("thirdNew:", thirdNew); //! {propA: 5, propB: 10, propC: 15, propD: 20}

const fourthNew = {...secondNew, ...firstNew};
console.log("fourthNew:", fourthNew); //! {propA: 5, propB: 10, propC: 50, propD: 20}
console.log("---------------------------------------------------------");

//! 🅰️ Операція rest (збирання всіх аргументів функції)
console.warn("🅰️ Операція rest \n  (збирання всіх аргументів функції):");
//? ✴️ Операція ...(rest) дозволяє
//? зібрати групу незалежних елементів у нову колекцію)(масив).
//? ✳️ Синтаксично, ...(rest) - це близнюк операції розподілу,
//? але відрізнити їх просто:
//? - розподіл, (spread) - коли ... знаходиться у ПРАВІЙ❗️ частині операції присвоювання,
//? а збирання, (rest) - коли ... знаходиться в її ЛІВІЙ❗️ частині операції присвоювання.
//? ✴️ Операція ... (rest) може
//? зібрати в масив ВСІ аргументи функції.
function multiply(...args) {
    console.log("args:", args); //todo: масив усіх аргументів
};

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
multiply([1, 2, 3, 4]); //! ❓❓❓
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! 🅱️ Операція rest (збирання частини аргументів функції)
console.warn("🅱️ Операція rest \n  (збирання частини аргументів функції):");
//? ✴️ Операція ... (rest) також дозволяє
//? зібрати в масив тільки ту ЧАСТИНУ аргументів,
//? яка необхідна, оголосивши деякі параметри до «збирання».
//? ✳️ Всі аргументи, для яких будуть оголошені параметри,
//? передадуть їм свої значення,
//? інші аргументи будуть поміщені в масив.
//? ✳️❗️ Операція rest збирає решту усіх аргументів,
//? а тому повинна бути останньою❗️ у списку усіх параметрів функції, 
//? інакше виникне помилка.
function multiply2(firstNumber, secondNumber, ...otherArgs) {
    console.log("firstNumber:", firstNumber); //todo: Значення першого аргументу
    console.log("secondNumber:", secondNumber); //todo: Значення другого аргументу
    console.log("otherArgs:", otherArgs); //todo: Масив інших аргументів
    console.log("`  `  `  `  `  `  `  `  `");
};

multiply2(1, 2);
multiply2(1, 2, 3);
multiply2(1, 2, 3, 4);
multiply2([1, 2, 3, 4]); //! ❓❓❓
console.log("---------------------------------------------------------");

//! Присвоєння за значенням
console.warn("Присвоєння за значенням:");
//? ✴️ За умови передачі за значенням,
//? змінним виділяється нова комірка пам'яті
//? і в неї копіюються дані.
//? ✳️ Присвоєння за значенням: в пам'яті буде створена ще
//? одна комірка, в яку буде скопійоване значення 5
let a = 5;
let b = a;
console.log("a:", a); //! 5
console.log("b:", b); //! 5
console.log(". . . .");

//? ✳️ Змінимо значення a на 10:
a = 10;
console.log("a:", a); //! 10
//? ✳️ Значення b не змінилося, оскільки це окрема копія:
console.log("b:", b); //! 5
console.log("------------------------------------------------");

//! Присвоєння за посиланням 
console.warn("Присвоєння за посиланням:");
//? ✴️ Складні типи - об'єкти, масиви, функції присвоюються за посиланням,
//? тобто змінна просто отримує посилання на вже існуючий об'єкт.
//? ✳️ Оскільки objA - це об'єкт, в objB записується посилання на вже існуючий
//? в пам'яті об'єкт objA. Тепер objA і objB вказують на один і той же об'єкт:
const objA = { name: 'Mango', age: 2 };
const objB = objA;
console.log("objA:", objA); //! {name: 'Mango', age: 2}
console.log("objB:", objB); //! {name: 'Mango', age: 2}
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Змінимо об'єкт, змінивши значення властивості,
//? використовуючи вказівник з objA:
objA.age = 3; 
console.log("objA:", objA); //! {name: 'Mango', age: 3}

//? ✳️ objB також змінилось, тому що objB,
//? як і objA, просто містять посилання на 
//? одне і те ж саме місце в пам'яті:
console.log("objB:", objB); //! {name: 'Mango', age: 3}
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Результат повторюється, 
//? якщо додати ще одину влистивість до objB:
objB.gender = "male";
console.log("objA:", objA); //! {name: 'Mango', age: 3, gender: 'male'}
console.log("objB:", objB); //! {name: 'Mango', age: 3, gender: 'male'}
console.log("------------------------------------------------");
