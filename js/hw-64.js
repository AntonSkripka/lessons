//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з кнопкою та текстовим полем. 
//? За допомогою JavaScript отримати доступ до кнопки 
//? та текстового поля за їх ідентифікаторами 
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання
const input = document.getElementById('input-1');
const button = document.getElementById('button-1');

input.addEventListener("input", event => {
    if (event.target.value.trim() != '') {
    button.textContent = event.target.value;
    } else {
        button.textContent = "Write text...";
    };
});

console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з заголовком та зображенням. 
//? За допомогою JavaScript отримати доступ до зображення 
//? та змінити значення атрибута "src" на шлях до іншого зображення.
//! Код виконаного завдання
const img = document.getElementById("img-1");
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Endeavour_replica_in_Cooktown_harbour.jpg/250px-Endeavour_replica_in_Cooktown_harbour.jpg";
img.alt = "Endeavour_replica_in_Cooktown_harbour";
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Endeavour_replica_in_Cooktown_harbour.jpg/250px-Endeavour_replica_in_Cooktown_harbour.jpg");
img.setAttribute("alt", "Endeavour_replica_in_Cooktown_harbour");

console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  з посиланням та зображенням. 
//? За допомогою JavaScript отримати доступ до посилання 
//? та змінити значення атрибута "href" на нову URL-адресу. 
//? Також отримати доступ до зображення 
//? та додати новий атрибут "alt" з описом зображення.
//! Код виконаного завдання
const link = document.getElementById("link-1");
const img2 = document.getElementById("img-2");

link.href = "./hw-64.html";
link.setAttribute("href", "./hw-64.html");
img2.alt = "2+2=4";

console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  зі списком елементів. 
//? За допомогою JavaScript отримати доступ 
//? до першого елемента списку 
//? та змінити його вміст на новий текст. 
//! Код виконаного завдання
const firstItem = document.querySelector(".menu-item2");
firstItem.textContent = "123";

console.log("--------------------------------------------------");
