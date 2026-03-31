//todo [0 - Робота з масивом об’єктів]
console.log(
    "%c [0 - Робота з масивом об’єктів] ",
    "color: yellow; background-color: #2274A5",
);
//! Для виконання всіх завдань вкористовуй цей масив об'єктів:
const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];
console.log("users:", users);
console.log("--------------------------------------------------");

//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримай масив імен всіх користувачів (поле name).
const getUserNames = users => {
    //! твій код
    const userNames = users.map((item) => item.name);
    return userNames;
};

console.log(getUserNames(users)); //! [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримай масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
    //! твій код
    const usersWithEyeColor = users.filter((item) => item.eyeColor === color);
    return usersWithEyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue')); //! [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримати масив імен користувачів за статтю (поле gender).
const getUsersWithGender = (users, gender) => {
    //! твій код
    const usersGender = users.filter((item) => item.gender === gender).map((item) => item.name);
    return usersGender;
};

console.log(getUsersWithGender(users, 'male')); //! [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримати масив тільки неактивних користувачів (поле isActive).
const getInactiveUsers = users => {
    //! твій код
    const usersActive = users.filter((item) => !item.isActive);
    return usersActive;
};

console.log(getInactiveUsers(users)); //! [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
console.log("--------------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримати користувача (не масив) по email (поле email, він унікальний).
const getUserWithEmail = (users, email) => {
    //! твій код
    const userWithEmail = users.find((item) => item.email === email);
    return userWithEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); //! {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); //! {об'єкт користувача Elma Head}
console.log("--------------------------------------------------");


//todo [Додаткове 14-1]
console.log(
    "%c [Додаткове 14-1] ",
    "color: yellow; background-color: #2274A5",
);
//? Повернути масив користувачів, вік (збережений у властивості age) яких
//? потрапляє у заданий діапазон від minAge до maxAge
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge)
//! твій код

console.log(getUsersWithAge(users, 20, 30)); //! [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); //! [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
console.log("--------------------------------------------------");

//todo [Додаткове 14-2]
console.log(
    "%c [Додаткове 14-2] ",
    "color: yellow; background-color: #2274A5",
);
//? З'ясувати, чи всі користувачі зараз активні (властивість isActive)
//? та повернути true, якщо так або false, якщо ні.
const isEveryUserActive = users => users.every(user => user.isActive);

console.log("Чи всі користувачі зараз активні? -", isEveryUserActive(users)); //! false
console.log("--------------------------------------------------");

//todo [Додаткове 14-3]
console.log(
    "%c [Додаткове 14-3] ",
    "color: yellow; background-color: #2274A5",
);
//? З'ясувати, чи є хоча б однин активний користувач (властивість isActive)
//? та повернути true, якщо так або false, якщо ні.
const isAnyUserActive = users => users.some(user => user.isActive);

console.log("Чи є хоча б однин активний користувач? -", isAnyUserActive(users)); //! true

//todo [Додаткове 14-4]
console.log(
    "%c [Додаткове 14-4] ",
    "color: yellow; background-color: #2274A5",
);
//? Є початковий масив об'єктів [arr] 
//? і масив [arrId] з виборкою інедксів. 
//? Треба створити вихідній масив [arrByID], 
//? в якому будуть тільки об'єкти з властивістю id,
//? яка дорівнює значенням єлементів масива [arrId] 
const arr = [
    { id: "id-1" },
    { id: "id-2" },
    { id: "id-3" },
    { id: "id-4" },
    { id: "id-5" },
    { id: "id-6" },
    { id: "id-7" },
    { id: "id-8" },
    { id: "id-9" },
    { id: "id-10" },
    { id: "id-11" },
];
const arrId = ["id-3", "id-5", "id-8", "id-11",];
//! твій код

const arrFilter = (arr, arrId) => arr.filter((element) => arrId.some(item => item === element.id));
const arrByID = arrFilter(arr, arrId);
console.log(arrByID);

const arrByID2 = arrId.flatMap(item => arr.filter(el => el.id === item));
console.log("arrByID", arrByID2);

let arrByID3 = [];
for (const arrOb of arr) {
    for (let i = 0; i < arrId.length; i++) {
        if (arrOb.id === arrId[i]) {
            arrByID3.push(arrOb);
        };
    };
};
console.log(arrByID3);

//? Сформувати початковий масив arrayIn будь якої довжини, наприклад, m=13,
//? та розділити його на масиви по n=5 елементів,
//? і скласти з них вихідний масив масивів finalArr
let arrayIn = [];
const m = 13;
// const m = 21;
const n = 5;
// const n = 3;
//! Код виконаного завдання
//todo-1: Використовуємо готовий масив:
// arrayIn = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];

//todo-2: Формуємо масив з m елементів:
