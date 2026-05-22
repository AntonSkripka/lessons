//! Поширення подій​
console.warn(`Поширення подій​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_01/images/event-flow.png"}`);
//? ✴️ Поширення подій (event propagation)
//? - це термін, що описує життєвий цикл події,
//? який має три етапи: занурення, таргетинг і спливання.
//? На практиці найчастіше використовують тільки ❗️фазу спливання❗️.

//? ✳️ Під час настання події, вона проходить через три обов'язкові фази:
//? 🔸 Capturing phase (занурення) -
//?    подія починається на window і тоне (проходить через усі елементи-предки)
//?     до найглибшого цільового елемента, на якому відбулася дія, наприклад, клік.
//? 🔸 Target phase (таргетинг) - подія дійшла до цільового елемента.
//?    Цей етап містить тільки повідомлення елемента про те, що на ньому відбулася дія.
//? 🔸 ❗️Bubbling phase❗️ (спливання) -
//?    кінцева фаза, подія спливає від найглибшого, цільового елемента,
//?    через усі елементи-предки до window.
console.log("-----------------------------------------------------------");

//! Спливання подій​
console.warn(`Спливання подій​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_01/images/event-bubbling.png"}`);
//? ✴️ Під час настання події, обробники спочатку спрацьовують
//? на найбільш вкладеному елементі,
//? потім - на його батьківському елементі,
//? потім вище і так далі, вгору по ланцюжку вкладеності.
//? Цей процес називається спливання (event bubbling),
//? тому що події «спливають» від внутрішнього елемента вгору
//? через усіх предків до window, подібно до спливання бульбашки повітря у воді.


//? ✳️ Розглянемо приклад, так буде зрозуміліше.
//? Є три вкладених тега <div> з обробниками кліка на кожному з них.
//? ✳️ Спливання гарантує,
//? що клік по #descendant викличе обробник кліка,
//? якщо він є, спочатку на самому #descendant,
//? потім на елементі #child, далі на елементі #parent
//? і так далі вгору по ланцюжку предків до window.
//? Тому, якщо в прикладі клікнути на #descendant,
//? то послідовно виведуться alert для descendant → child → parent.
const parent1 = document.querySelector("#parent-1");
const child1 = document.querySelector("#child-1");
const descendant1 = document.querySelector("#descendant-1");

parent1.addEventListener("click", (event) => {
    alert("PARENT-1 click");
    console.log("PARENT-1 click");
    //! Властивості event.target​ та event.currentTarget
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
});

child1.addEventListener("click", () => {
    alert("CHILD-1 click");
    console.log("CHILD-1 click");
});

descendant1.addEventListener("click", () => {
    alert("DESCENDANT-1 click");
    console.log("DESCENDANT-1 click");
});
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//?❗️ ✴️ Спливають майже всі події, наприклад, 
//?❗️ події focus і blur не спливають, 
//?❗️ тому існують їх спливаючі аналоги - focusin і focusout.
console.log("-----------------------------------------------------------");

//! Властивості event.target​ та event.currentTarget
console.warn("Властивості event.target​ та event.currentTarget​:");
//? ✴️ Незалежно від того, де ми спіймали подію під час її спливання,
//? завжди можна дізнатися, де саме вона відбулася.
//? Найглибший елемент, який викликає подію,
//? називається цільовим або вихідним, і доступний як ❗️event.target❗️.
//? 🔸 event.target - це той елемент, на якому фактично відбулася подія
//?    (наприклад, клацання миші, натискання клавіші і т.д.).
//? 🔸 event.currentTarget - це той елемент, на якому обробник події був встановлений,
//?    тобто елемент, до якого прив'язана функція addEventListener.
//? ✳️ Якщо слухач події зареєстрований на найвищому елементі,
//? то він «спіймає» усі кліки всередині,
//? тому що події будуть спливати до цього елемента.
//? ✳️ В розглянутому прикладі і поклікайте,
//? event.target - це завжди вихідний (і найглибший) елемент,
//? на якому був клік, а event.currentTarget не змінюється.

//! Припинення спливання​
console.warn("Припинення спливання​:");
//? ✴️ Зазвичай, подія буде спливати вгору до елемента window, 
//? викликаючи усі обробники на своєму шляху. 
//? Але будь-який проміжний обробник може вирішити, 
//? що подія повністю оброблена і зупинити спливання, 
//? викликавши метод stopPropagation().
const parent2 = document.querySelector("#parent-2");
const child2 = document.querySelector("#child-2");
const descendant2 = document.querySelector("#descendant-2");

parent2.addEventListener("click", () => {
    alert(
        "PARENT-2 click. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("PARENT-2 click");
});

child2.addEventListener("click", (event) => {
    //! зупиняє обробку ВСІХ подій,
    //! тобто зупиняє і спливання, і виклик інших оброблювачів на поточному елементі
    event.stopImmediatePropagation();
    // event.stopPropagation(); //! перешкоджає просуванню події далі
    alert(
        "CHILD-2 click-1. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("CHILD-2 click-1");
});

child2.addEventListener("click", (event) => {
    alert(
        "CHILD-2 click-2. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("CHILD-2 click-2");
});

descendant2.addEventListener("click", (event) => {
    event.stopPropagation(); //! перешкоджає просуванню події далі
    alert("DESCENDANT-2 click");
    console.log("DESCENDANT-2 click");
});

//? ✴️❗️ event.stopPropagation():
//? 🔸  - зупиняє лише сплив події вгору по дереву DOM.
//? 🔸  - не заважає іншим обробникам на цьому елементі виконатися.
//? ✳️ Якщо елемент має декілька обробників на одну подію,
//? то, навіть у разі припинення спливання,
//? усі вони будуть виконані.
//? Тобто метод stopPropagation()
//? тільки перешкоджає просуванню події далі.

//? ✴️❗️ event.stopImmediatePropagation():
//? 🔸  - зупиняє і спливання, і виклик інших оброблювачів тому ж елементі.
//? 🔸  - використовується, коли потрібно повністю припинити обробку ВСІХ подій.
//? ✳️ Якщо необхідно повністю зупинити обробку події,
//? використовується метод stopImmediatePropagation().
//? Він не тільки запобігає спливанню, але й зупиняє обробку ❗️ВСІХ подій❗️ на поточному елементі.
console.log("------------------------------------------------------------------");

//! Активний елемент (приклад-1 (до))​
console.warn("Активний елемент (приклад-1 (до))​​:");
//? ✳️ Розглянемо приклад, в якому є розмітка, яка складається
//? з батьківського елемента <div id="buttons-box>"
//? та вкладених в нього дочірніх елементів
//? <button class="buttons-box-button">Button-N</button>.
//? Треба вивести в консоль повідомлення про те,
//? на якому з елементів відбувся клік:
const buttonBox1 = document.querySelector(" #buttons-box");
const button1 = document.querySelector(" .buttons-box-button:nth-child(1)");
const button2 = document.querySelector(" .buttons-box-button:nth-child(2)");
const button3 = document.querySelector(" .buttons-box-button:nth-child(3)");

console.log("Buttons box:", buttonBox1);
console.log("Button-1:", button1);
console.log("Button-2:", button2);
console.log("Button-3:", button3);

buttonBox1.addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    console.log('Клік в "Buttons box"');
});

button1.addEventListener("click", (event) => {
    // event.stopPropagation(); //! перешкоджає просуванню події далі
    event.target.classList.toggle("active");
    console.log('Клік в "Button-1"');
});

button2.addEventListener("click", (event) => {
    // event.stopPropagation(); //! перешкоджає просуванню події далі
    event.target.classList.toggle("active");
    console.log('Клік в "Button-2"');
});

button3.addEventListener("click", (event) => {
    // event.stopPropagation(); //! перешкоджає просуванню події далі
    event.target.classList.toggle("active");
    console.log('Клік в "Button-3"');
});
console.log("------------------------------------------------------------------");

//! Делегування подій​
console.warn(`Делегування подій (до)​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_01/images/before-delegation.webp"}`);
//? ✴️ Спливання дозволяє реалізувати
//? один із найкорисніших прийомів - делегування подій (event delegation).
//? Він полягає у тому, що, якщо є група елементів,
//? події яких потрібно обробляти однаково,
//? то додається один обробник на їх загального предка,
//? замість того, щоб додавати обробник до кожного елемента.
//? Використовуючи властивість event.target,
//? можна отримати посилання на цільовий елемент,
//? зрозуміти, на якому саме дочірньому елементі відбулася подія, і обробити її.

//? ✳️ Розглянемо приклад-1 "Активний елемент" з попереднього розділу.
//? Але тепер уявімо, що кількість дочірніх елементів (кнопок) дорівнює 100.
//? Тоді з'явилася б необхідність додати слухача на кожен активний елемент.
//? Проблема у тому, що у нас є 100 слухачів подій.
//? Всі вони вказують на одну і ту саму функцію слухача, але слухачів 100.
//? Таке рішення значно збільшило б кількість коду та знизило його читабельність.

//? ✳️ Для вирішення цього завдання перемістимо
//? усіх слухачів на спільного предка - елемент <div id="buttons-box>:
console.warn(`Делегування подій (після)​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_01/images/after-delegation.png"}`);

//? ✳️ Тепер є тільки один обробник події кліку і браузеру
//? не потрібно зберігати у пам'яті сто різних слухачів.
//? Тобто делегування зводиться до трьох простих кроків:
//? 🔸1️⃣ Визначити спільного предка групи елементів для відстеження подій.
//? 🔸2️⃣ Зареєструвати на елементі-предку обробник події,
//?    яку ми хочемо відловлювати з групи елементів.
//? 🔸3️⃣ В обробнику використовувати event.target для вибору цільового елемента.
//? ✳️ Такий підхід спрощує ініціалізацію слухачів однотипних елементів. 
//? Можна додавати, видаляти або змінювати елементи, при цьому, 
//? не потрібно вручну додавати або видаляти обробники подій.
console.log("--------------------------------------------------------------------");

//! Активний елемент (приклад-2 (після))​
console.warn("Активний елемент (приклад-2 (після))​​​:");
const buttonBox = document.querySelector(" #buttons-box"); //! 🔸1️⃣

console.log("Buttons box:", buttonBox);

buttonBox.addEventListener("click", (event) => { //! 🔸2️⃣
    // console.log("event.target:", event.target); //! 🔸3️⃣
    // console.log(`Клік в ${event.target.textContent}`);
    
    console.log("event.target.tagName = ", event.target.tagName);
    
    switch (event.target.tagName) {
        case "DIV":
            console.log(`Клік в ${event.target.tagName} - Buttons box`);
            break;
        case "BUTTON":
            console.log(`Клік в ${event.target.textContent}`);
            break;
        default:
            console.warn("НЕ спрацював ЖОДЕН блок!"); //! інструкції default блока;
    };

    event.target.classList.toggle("active"); //! додаємо/прибираємо клас для стилізації активного елемента;

    console.log(". . . . . . . . . . . . . . . . .");
});
console.log("--------------------------------------------------------------------");

//! Палітра кольорів​
console.warn("Палітра кольорів​:");
//? ✳️ Будемо створювати палітру кольорів з можливістю 
//? вибрати колір по кліку і відображенням обраного кольору. 
//? Замість того, щоб призначати обробник кожному елементу палітри, 
//? яких може бути дуже багато, повісимо один слухач 
//? на загального предка div.color-palette. 
//? В обробнику події кліка використовуємо event.target, 
//? щоб отримати елемент, на якому відбулася подія 
//? і пов'язаний з ним колір, який будемо зберігати в атрибуті data-color.
const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");


//todo: Деякі допоміжні функції для рендерингу елементів палітри.
function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

function createPaletteItems() {
    const items = [];
    for (let i = 0; i < 60; i++) {
        const color = getRandomHexColor();
        const item = document.createElement("button");
        item.type = "button";
        item.dataset.color = color;
        item.style.backgroundColor = color;
        item.classList.add("item");
        items.push(item);
    }
    colorPalette.append(...items);
};

createPaletteItems();


//todo: Тут відбувається «магія» делегування
colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
    // console.log("event.target.nodeName = ", event.target.nodeName);
    //todo: var.1
    if (event.target.nodeName !== "BUTTON") {
        return;
    };

    //todo: var.2
    // if (event.target === event.currentTarget) {
    //     return;
    // };

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
    console.log(`Вибраний колір ${selectedColor}`);
};
console.log("-----------------------");
