//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ В HTML є список категорій ul#categories:
/*
    <ul id="categories">
        <li class="item">
            <h2>Тварини</h2>
            <ul>
                <li>Кіт</li>
                <li>Хом'як</li>
                <li>Кінь</li>
                <li>Папуга</li>
            </ul>
        </li>
        <li class="item">
            <h2>Продукти</h2>
            <ul>
                <li>Хліб</li>
                <li>Петрушка</li>
                <li>Сир</li>
            </ul>
        </li>
        <li class="item">
            <h2>Технології</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
            </ul>
        </li>
    </ul>
*/
//? 🔸 Напиши скрипт, який виконає наступні операції:
//todo: Крок-1
//? 🔸 - Порахує і виведе в консоль
//?  кількість категорій в ul#categories,
//?  тобто елементів li.item.
//? Вийде так: 
//* 'У списку 3 категорії.'
//todo: Крок-2
//? 🔸 - Для кожного елемента li.item в списку ul#categories,
//? знайде і виведе в консоль текст заголовка елемента (тега h2)
//? і кількість елементів в категорії
//? (всіх вкладених в нього елементів li).
//? Наприклад, для першої категорії вийде так:
//* Категорія: Тварини
//* Кількість елементів: 4
//! Код виконаного завдання
//todo: Крок-1

const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');
console.log(`У списку ${items.length} категорії.`);

console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: Крок-2

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});

console.log("----------------------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ В HTML є пустий список ul#ingredients:
/*
<ul id="ingredients"></ul> 
*/
//? ✴️ В JS є масив рядків:
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
//? 🔸 Напиши скрипт, який
//? для кожного елемента масиву ingredients
//? створить окремий li,
//? після чого вставить всі li за одну операцію
//? в список ul.ingredients.
//? 🔸 Для створення DOM-вузлів використовуй document.createElement().
//! Код виконаного завдання
const list = document.querySelector('#ingredients');

const markup = ingredients
    .map(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        return ingredientItem;
    });

list.append(...markup);

console.log("----------------------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт для створення галереї зображень по масиву даних.
//? ✴️ В HTML є список ul#gallery:
/*
<ul id="gallery"></ul> 
*/
//? ✴️ Використовуй масив об'єктів images
//? для створення тегів img вкладених в li:
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
//? 🔸 Для створення розмітки використовуй шаблонні рядки
//? і insertAdjacentHTML().
//? 🔸 Всі елементи галереї повинні додаватися
//? в DOM за одну операцію вставки.
//? 🔸 Додай мінімальне оформлення галереї флексбоксами
//? або грід через css-класи.
//! Код виконаного завдання
const galleryList = document.querySelector('#gallery');

const markup2 = images
  .map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img"></li>`)
  .join('');

galleryList.insertAdjacentHTML('afterbegin', markup2);
galleryList.classList.add('gallery-container');

console.log("----------------------------------------------------------------");

//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Лічильник складається:
//? зі спана і кнопок, 
//? які повинні збільшувати і зменшувати 
//? значення лічильника на 1:
/*
<div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
</div>
*/
//? 🔸 Створи змінну counterValue в якій буде 
//?    зберігається поточне значення лічильника.
//? 🔸 Створи функції increment і decrement 
//?    для збільшення і зменшення значення лічильника
//? 🔸 Додай слухачі кліків на кнопки, 
//?    виклики функцій та оновлення інтерфейсу
//! Код виконаного завдання
let counterValue = 0;
const valueRef = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const updateInterface = () => {
    valueRef.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    updateInterface();
};

const decrement = () => {
    counterValue -= 1;
    updateInterface();
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

console.log("----------------------------------------------------------------");
