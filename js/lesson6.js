//! Контекст виконання функції
console.warn("Контекст виконання функції:");
//? ✴️ Можна з упевненістю сказати, що ключове слово this
//? - це одна з найзаплутаніших концепцій JavaScript на старті навчання.
//? Новачки часто підставляють this методом наукового тику доти,
//? доки скрипт не спрацює.
//? ✳️ Контекст у JavaScript схожий на контекст у реченні:
//? 🔸 Петро біжить швидко, тому що ❗️Петро❗️ намагається зловити поїзд.
//? 🔸 Петро біжить швидко, тому що ✅він✅ намагається зловити поїзд.
//? ✳️ Друге речення звучить лаконічніше. 
//? Підмет речення - Петро, і ми можемо сказати, 
//? що контекст речення - це Петро, 
//? тому що він у центрі уваги у цей конкретний час у реченні. 
//? Навіть займенник «хто» стосується Петі.

//? ✳️ І так само об'єкт може бути поточним контекстом виконання функції.
console.log(
    `%c
    🔴 Петро біжить швидко, тому що ❗️Петро❗️ намагається зловити поїзд.
    `,
    'color: blue; font-size: 16px',
);

const petro1 = {
    username: "Petro",
    showName() {
        console.log(petro1.username);
    },
};
petro1.showName();
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Звернення до властивостей об'єкта
//? всередині методів, використовуючи ім'я самого об'єкта,
//? - аналогічно використанню Петро, замість він.
//? ✳️ Всередині функцій можна використовувати 
//? зарезервоване ключове слово this.
//? Під час виконання функції, в this записується 
//? посилання на об'єкт, в контексті якого вона була викликана. 
//? Таким чином, в тілі функції ми можемо отримати доступ 
//? до властивостей і методів цього об'єкта.
console.log(
    `%c
    🟢 Петро біжить швидко, тому що ✅він✅ намагається зловити поїзд.
    `,
    'color: blue; font-size: 16px',
);

const petro2 = {
    username: "Petro",
    showName() {
        console.log(this.username);
    },
};
petro2.showName();
console.log("---------------------------------------------------------------------------------------------");

//! Правила визначення this
console.warn("❗️Правила визначення this❗️:");
//? ✴️ Правило для визначення this
//? - значення контексту всередині функції (не стрілочної)
//? визначається на момент її виклику,
//? а не на момент її створення.
//? Тобто значення this визначається тим,
//? де (як) викликається функція,
//? а не тим, де вона була оголошена.
console.log(
    `%c
    Значення this визначається тим,
    як викликається функція,
    а не тим, де вона була оголошена.
    `,
    'color: red; font-size: 16px',
);

//! this у глобальній області видимості
console.warn("this у глобальній області видимості:");
//? ✴️ У глобальній області видимості,
//? якщо скрипт виконується не в суворому режимі,
//? this посилається на об'єкт ❗️window❗️.
//? В суворому режимі значення this,
//? в глобальній області видимості, буде ❗️undefined❗️.
function foo() {
    console.log("this in function foo():", this);
};
foo(); //! window без "use strict" або undefined з "use strict"
console.log("---------------------------------------------------------------------------------------------");

//! this в методі об'єкта
console.warn("this в методі об'єкта:");
//? ✴️ Якщо функція була викликана як метод об'єкта, 
//? то контекст буде посилатися на об'єкт, 
//? частиною якого є метод.
const petro = {
    username: "Petro",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.username);
    },
};

petro.showThis(); //! {username: "Petro", showThis: ƒ, showName: ƒ}
petro.showName(); //! 'petro'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.warn("Приклад визначення this в методі об'єкта:");
//? ✴️ Розглянемо складніший приклад для
//? кращого розуміння визначення this.
//? 🔸 Спочатку створимо функцію в глобальній області видимості і викличемо її.
//? 🔸 Після чого, присвоїмо її у властивість об'єкта і викличемо як метод цього об'єкта.
function showThis() {
    console.log("this in showThis: ", this);
};
//todo: Викликаємо у глобальному контексті:
showThis(); //! this in showThis: undefined або Window
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Створюємо об'єкт user1:
const user1 = {
    username: "Mango",
};
console.log("user1:", user1); //! {username: 'Mango'}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Записуємо посилання на функцію у властивість об'єкта
//todo: Зверніть увагу, що це не виклик - немає ():
user1.showContext = showThis;
console.log("user1:", user1); //! {username: 'Mango', showContext: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Викликаємо функцію в контексті об'єкта.
//todo: this буде вказувати на поточний об'єкт, в контексті
//todo: якого здійснюється виклик, а не на глобальний об'єкт.
user1.showContext(); //! this in showThis: {username: "Mango", showContext: ƒ}
console.log("---------------------------------------------------------------------------------------------");

//! Приклад визначення this в методі об'єкта всередині звичайної функції (не стрілочної)
console.warn("Приклад визначення this в методі об'єкта всередині звичайної функції (не стрілочної):");
//todo: Створюємо об'єкт user2:
const user2 = {
    username: "Mango",
    showThis2() {
        console.log("this in showThis2: ", this); //! {username: 'Mango', showThis2: ƒ}
        console.log("username in showThis2: ", this.username); //! Mango
        console.log("`  `  `  `  `  `  `  `  `  `  `");

        function foo() {
            console.log("this in function foo():", this); //! undefined
            // console.log("username by this in function foo(): ", this.username); //! ❌ Cannot read properties of undefined (reading 'username')
            console.log("username in function foo(): ", user2.username); //! ✅ Mango
        };
        foo(); //! window без "use strict" або undefined з "use strict"
    },
};
console.log("user2:", user2); //! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");

user2.showThis2();
//! this in showThis2: {username: 'Mango', showThis2: ƒ}
//! username in showThis2: Mango
//! `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): undefined
//! ❌ Cannot read properties of undefined (reading 'username')
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");

//! Правила визначення this у стрілочних функціях
console.warn("❗️Правила визначення this у стрілочних функціях❗️:");
//? ✴️ Стрілочні функції не мають свого this.
//? На відміну від звичайних функцій,
//? змінити значення this всередині стрілки
//? після її оголошення - неможливо.
//? ✴️ Значення this (контекст) всередині стрілки
//? визначається місцем її оголошення,
//? а не місцем виклику,
//? і посилається на контекст батьківської функції.
console.log(
    `%c
    Значення this всередині стрілки визначається
    місцем її оголошення, а не місцем виклику,
    і посилається на контекст батьківської функції.
    `,
    'color: red; font-size: 16px',
);
//? ✴️ У глобальній області видимості,
//? якщо скрипт виконується не в суворому режимі,
//? this посилається на об'єкт ❗️window❗️.
//? В суворому режимі значення this,
//? в глобальній області видимості, буде ❗️undefined❗️.
const showThisArrow = () => {
    console.log("this in showThis: ", this);
};
//todo: Викликаємо у глобальному контексті:
showThisArrow(); //! window без "use strict" або undefined з "use strict"
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Створюємо об'єкт user3:
const user3 = {
    username: "Mango",
};
console.log("user3:", user3); //! {username: 'Mango'}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Записуємо посилання на функцію у властивість об'єкта
//todo: Зверніть увагу, що це не виклик - немає ():
user3.showContext = showThisArrow;
console.log("user3:", user3); //! {username: 'Mango', showContext: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Викликаємо функцію в контексті об'єкта.
//todo: this буде вказувати на глобальний об'єкт,
//todo: а не на поточний об'єкт, в контексті якого здійснюється виклик.
user3.showContext(); //! window без "use strict" або undefined з "use strict"
console.log("---------------------------------------------------------------------------------------------");

//! Приклад визначення this в методі об'єкта всередині стрілочної функції
console.warn("Приклад визначення this в методі об'єкта всередині стрілочної функції:");
//todo: Створюємо об'єкт user4:
const user4 = {
    username: "Mango",
    showThis4() {
        console.log("this in showThis4: ", this); //! {username: 'Mango', showThis4: ƒ}
        console.log("username in showThis2: ", this.username); //! Mango
        console.log("`  `  `  `  `  `  `  `  `  `  `");

        const foo = () => { 
            console.log("this in function foo():", this); //! {username: 'Mango', showThis4: ƒ}
            console.log("username by this in function foo():", this.username); //! Mango
            console.log("username in function foo():", user4.username); //! Mango
        };
        foo(); //! Mango
    },
};
console.log("user4:", user4); //! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

user4.showThis4();
//! this in showThis4: {username: 'Mango', showThis4: ƒ}
//! username in showThis2: Mango
//!  `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): {username: 'Mango', showThis4: ƒ}
//! username by this in function foo(): Mango
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");

//! this в callback-функціях
console.warn("this в callback-функціях:");
//? ✴️ Передаючи методи об'єкта як колбек-функції, контекст не зберігається.
//? Колбек - це посилання на метод, яке присвоюється
//? як значення параметра, що викликається без об'єкта.
console.log(
    `%c
    ❗️ В callback-функціях контекст не зберігається.
    `,
    'color: red; font-size: 16px',
);
const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(customer.getFullName());  //! Jacob Mercer

function makeMessage(callback) {
    //todo: callback() - це виклик методу getFullName без об'єкта
    console.log(`Обробляємо заявку від ${callback()}.`);
}

// makeMessage(customer.getFullName); //! ❌ Буде помилка у виклику функції

console.warn("Вирішення цієї проблеми здійснюється за допомогою метода bind() та методів функцій: \n https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-09/methods#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-bind-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0");
//? ✴️ Вирішення цієї проблеми здійснюється за допомогою метода bind() та методів функцій:
//? https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-09/methods#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-bind-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0
console.log("---------------------------------------------------------------------------------------------");
