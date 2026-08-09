//todo: “Math” Methods --> (_.add(augend, addend))
console.log(
    '%c “Math” Methods --> (_.add(augend, addend)) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“Math” Methods --> (_.add)): \n https://lodash.com/docs/4.17.15#add");
//? ✳️ Цей метод додає два числа (рахує суму двох чисел).
const sum = _.add(10, 5);
console.log("sum:", sum); //! 15
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: “Object” Methods --> (_.findKey(object, [predicate=_.identity]))
console.log(
    '%c “Object” Methods --> (_.findKey(object, [predicate=_.identity])) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“Object” Methods --> (_.findKey): \n https://lodash.com/docs/4.17.15#findKey");
//? ✳️ Цей метод подібний до _.find, 
//? за винятком того, що він повертає ключ першого елемента, 
//? для якого предикат повертає truthy for, а не сам елемент.
const users = {
    barney: { 'age': 36, 'active': true },
    fred: { 'age': 40, 'active': false },
    pebbles: { 'age': 1, 'active': true }
};
console.log("Властивість, де age < 40:", _.findKey(users, function (o) { return o.age < 40; })); //! 'barney' (порядок ітерації не гарантовано)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: “String” Methods --> _.startCase([string=""])
console.log(
    '%c “String” Methods --> _.startCase([string=""]) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“String” Methods --> (.startCase): \n https://lodash.com/docs/4.17.15#startCase");
//? ✳️ Перетворює рядок на початковий регістр..
const startCase = document.getElementById("start-case");
console.log("startCase:", startCase);

let startCaseTextContent = startCase.textContent;
console.log("startCase.textContent:", startCaseTextContent);

const NewStartCaseTextContent = _.startCase(startCaseTextContent);
console.log("_.startCase(startCase.textContent):", NewStartCaseTextContent);

startCase.textContent = NewStartCaseTextContent;
console.log("-------------------------------------------------------------------");

//! Балакучі події (Chatty events)
console.warn("Балакучі події (Chatty events)​:");
//? ✳️ Досить часто необхідно обробити зміну розміру вікна,
//? скрол, переміщення миші або текстове введення користувача.
//? Це може бути сортування колекції і відображення результатів,
//? анімація елемента, маніпуляції з DOM-деревом та інше.
//? Все це покращує UX (user experience), але, на жаль,
//? має велике навантаження на браузер, оскільки обробники подій
//? спрацьовують надто часто.
//? Такі події неофіційно називають Балакучі події («chatty events»).


//! Подія "scroll"
console.warn('Подія "scroll​:');
//? ✳️ Наприклад, якщо додати слухача події до скролу, 
//? то під час прокручування сторінки мишкою 
//? можна викликати близько 30 подій на секунду. 
//? Повільне прокручування (свайп) у смартфоні може викликати 
//? до 100 подій на секунду. 
//? Якщо обробник події скролу виконує важкі обчислення 
//? та інші DOM-маніпуляції, гарантовано 
//? виникнуть проблеми з продуктивністю.
const output = document.querySelector(".output");
let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//     scrollEventCounter += 1;
//     output.textContent = scrollEventCounter;
//     console.log("scrollEventCounter:", scrollEventCounter); //!
// });
console.log("-------------------------------------");

//! Throttle і Debounce
console.warn("Throttle і Debounce​:");
//? ✴️ У JavaScript концепції throttle (троттлінг)
//? і debounce (дебаунсинг) використовуються
//? для керування частотою виконання функцій
//? - особливо корисні для обробки подій,
//? які можуть відбуватися дуже часто
//? (наприклад, scroll, resize, input, mousemove тощо).

//? ✳️ Throttle і Debounce - це два схожих,
//? але різних за поведінкою прийоми,
//? що дозволяють контролювати ❗️кількість разів❗️,
//? яку ми дозволяємо виконувати функції з часом.
//? Використовуємо їх реалізацію з бібліотеки Lodash.


//! Throttle (обмежувач частоти)
console.warn(`Throttle​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/throttle.png"}`);
//? ❗️❗️❗️ Throttle - функція виконується не частіше,
//?     ніж один раз на заданий інтервал часу N,
//?     навіть якщо подія відбувається частіше.
//? 📌 Використання Throttle:
//? 🔸 Обробка подій прокручування.
//? 🔸 Відстеження переміщення миші.
//? 🔸 Обмеження частоти натискань.

//? ✴️ Прийом throttle контролює кількість разів,
//? яку функція може бути викликана протягом певного проміжку часу.
//? Тобто дозволяє викликати функцію не частіше
//? одного разу за N мілісекунд, гарантуючи її регулярне виконання.
//? ✳️ Використовуючи throttle, ми не контролюємо,
//? як часто браузер буде генерувати події.
//? Ми всього-на-всього беремо контроль
//? над частотою виконання функції обробника події.
//? ✳️ Реалізація з бібліотеки Lodash
//? очікує першим аргументом функцію,
//? яку необхідно «загальмувати»,
//? а другим - кількість мілісекунд.
//? Повертає нову функцію для передачі в слухач події.
// todo: Без Throttle
// document.addEventListener(
//     "scroll",
//     () => {
//         console.log("Виклик обробника прокрутки");
//     }
// );
// // todo: З Throttle
// document.addEventListener(
//     "scroll",
//     _.throttle(() => {
//         console.log("Виклик обробника прокрутки кожні 300ms");
//     }, 500)
// );
// console.log("-----------------------------------------------------------");

// //! Throttle (Scroll me)
// console.warn("Throttle (Scroll me)​:");
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//     vanilla: 0,
//     throttled: 0
// };
// let { vanilla, throttled } = eventCounter;

// document.addEventListener("scroll", () => {
//     vanilla += 1;
//     vanillaOutput.textContent = vanilla;
// });

// document.addEventListener(
//     "scroll",
//     _.throttle(() => {
//         throttled += 1;
//         throttledOutput.textContent = throttled;
//     }, 300)
// );
console.log("-----------------------------------------------------------");

//! Debounce (відкладений виклик)
console.warn(`Debounce: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/debounce.png"}`);
//? ❗️❗️❗️ Debounce - функцію буде викликано лише після того,
//?     як подія припиниться на заданий час.
//? 📌 Використання Debounce:
//? 🔸 Автопідказки під час введення в поле пошуку.
//? 🔸 Перевірка даних форми.
//? 🔸 Підвантаження даних після того, як користувач перестав друкувати.

//? ✴️ Прийом debounce гарантує, 
//? що функція буде викликана лише у тому разі, 
//? якщо між подіями буде пауза N мілісекунд. 
//? Наприклад, доки користувач скролить сторінку 
//? функція не буде викликана, 
//? але щойно він перестав скролити, 
//? функція буде викликана через 300 мілісекунд. 
//? Якщо скрол відновиться раніше, 
//? ніж через 300 мілісекунд після паузи, 
//? функція не буде викликана.
const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debouncedOutput = document.querySelector(".output.debounced");
const eventCounter = {
    vanilla: 0,
    throttled: 0,
    debounced: 0
};
let { vanilla, throttled, debounced } = eventCounter;

document.addEventListener("scroll", () => {
    vanilla += 1;
    vanillaOutput.textContent = vanilla;
});

document.addEventListener(
    "scroll",
    _.throttle(() => {
        throttled += 1;
        throttledOutput.textContent = throttled;
    }, 300)
);

document.addEventListener(
    "scroll",
    _.debounce(() => {
        debounced += 1;
        debouncedOutput.textContent = debounced;
    }, 300)
);
console.log("---------------------------------------------------------");

//! Input (with debounce)
console.warn("Input (with debounce)​:");
const input = document.querySelector(" .input");
console.log("input:", input); //!
//todo: Відправка запиту без debounce
// input.addEventListener("input", () => {
//     console.log("Відправка запиту без debounce:", input.value);
// });
//todo: Відправка запиту з debounce
input.addEventListener("input", _.debounce(() => {
    console.log("Відправка запиту з debounce:", input.value);
}, 500));
console.log("---------------------------------------------------------");

//! Режими методу Debounce​
console.warn(`Режими методу Debounce: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/debounce-mode.png"}`);
//? ✴️ За замовчуванням метод debounce працює у режимі,
//? коли функція викликається через N мілісекунд
//? після паузи між потоками подій.
//? Цей режим називається ❗️trailing❗️ edge (в кінці).
//? Існують завдання, коли функцію потрібно викликати
//? відразу під час настання першої події в потоці,
//? а потім ігнорувати усі наступні події до паузи між ними,
//? наприклад, - 300 мілісекунд.
//? а старті наступного потоку подій ця поведінка повторюється.
//? Такий режим називається ❗️leading❗️ edge (на початку).
//? ✳️ На практиці режим leading може застосовуватись,
//? наприклад, у разі, коли необхідно виконати функцію
//? відправлення запиту на сервер при першому натисканні кнопки,
//? після чого, ігнорувати всі наступні кліки до паузи.
//? У прикладі реалізований debounce в обох режимах для події scroll.
const vanillaOutput4 = document.querySelector(".trailing-leading .output.vanilla");
const throttledOutput4 = document.querySelector(".trailing-leading .output.throttled");
const trailingOutput4 = document.querySelector(".trailing-leading .output.trailing");
const leadingOutput4 = document.querySelector(".trailing-leading .output.leading");
const eventCounter4 = {
    vanilla4: 0,
    throttled4: 0,
    trailing4: 0,
    leading4: 0
};
let { vanilla4, throttled4, trailing4, leading4 } = eventCounter4;

//! Trailing debounce
document.addEventListener(
    "scroll",
    _.debounce(() => {
        trailing4 += 1;
        trailingOutput4.textContent = trailing4;
    }, 300)
);

//! Leading debounce
document.addEventListener(
    "scroll",
    _.debounce(
        () => {
            leading4 += 1;
            leadingOutput4.textContent = leading4;
        },
        300,
        { trailing: false, leading: true }
    )
);

document.addEventListener("scroll", () => {
    vanilla4 += 1;
    vanillaOutput4.textContent = vanilla4;
});

document.addEventListener(
    "scroll",
    _.throttle(() => {
        throttled4 += 1;
        throttledOutput4.textContent = throttled4;
    }, 300)
);
console.log("---------------------------------------------------------");
