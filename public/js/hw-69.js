//todo: Завдання 1
//*
//? Створіть слайдер на сторінці, який показує зображення.
//? При переміщенні слайдера виконуйте деякі дії,
//? наприклад, змінюйте розмір зображення.
//? Використайте debounce для того, щоб ці дії виконувалися
//? не занадто часто при швидкому переміщенні слайдера.

//* HTML-розмітка:
//! <div div class="slider">
//!   <input type="range" min="1" max="100" value="50" class="slider__input" />
//!   <img
//!     src="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg"
//!     class="slider__image"
//!   />
//! </div>

//* CSS:
// ! .slider {
// !     max-width: 400px;
// !     margin: 0 auto;
// ! }

// ! .slider__input {
// !     width: 100 %;
// ! }

// ! .slider__image {
// !     display: block;
// !     margin: 20px auto;
// !     max-width: 100 %;
// ! }

const input = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const initialWidth = image.clientWidth;

input.addEventListener("input",
    _.debounce((e) => {
        image.style.width = `${initialWidth * (Number(e.target.value) / 50)}px`;
        console.log(e.target.value)
    }, 300)
)

//todo: Завдання 2
//*
//? Потрібно забезпечити плавне переміщення об'єкту при русі мишкою.
//? Рішення: використовуйте метод debounce з бібліотеки lodash.
//? Встановіть час затримки в мілісекундах, наприклад 300мс,
//? і передайте функцію, яка буде виконуватися при переміщенні мишкою.

//* HTML-розмітка:
//? <div id="box"></div>

//* CSS:
//! #box {
//!     width: 50px;
//!     height: 50px;
//!     background-color: red;
//! }

const area = document.querySelector('#area');
const box = document.querySelector('#box');

const moveBoxInsideArea = (event) => {
    const areaRect = area.getBoundingClientRect();
    let x = event.clientX - areaRect.left - 25;
    let y = event.clientY - areaRect.top - 25;
    const maxX = areaRect.width - 50;
    const maxY = areaRect.height - 50;
    const boundedX = Math.min(Math.max(0, x), maxX);
    const boundedY = Math.min(Math.max(0, y), maxY);
    box.style.transform = `translate(${boundedX}px, ${boundedY}px)`;
};

const throttledMove = _.throttle(moveBoxInsideArea, 30);

area.addEventListener('mousemove', throttledMove);