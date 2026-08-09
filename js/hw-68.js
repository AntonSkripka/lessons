//? Створи галерею з можливістю кліка по її елементах
//? і перегляду повнорозмірного зображення в модальному вікні.
//? Прев'ю результату подивися за посиланням: https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3

//? ✴️ Розбий завдання на кілька підзадач:

//? 🔸•  Створення і рендер розмітки по масиву даних galleryItems з app.js і наданим шаблоном.
//? 🔸•  Реалізація делегування на галереї ul.js - gallery і отримання url великого зображення.
//? 🔸•  Відкриття модального вікна при натисканні на елементі галереї.
//? 🔸•  Підміна значення атрибута src елемента img.lightbox__image.
//? 🔸•  Закриття модального вікна при натисканні на кнопку button[data - action= ""close - lightbox"].
//? 🔸•  Очищення значення атрибута src елемента img.lightbox__image.
//?     Це необхідно для того, щоб при наступному відкритті модального вікна,
//?     поки вантажиться зображення, ми не бачили попереднє.

//? ✴️ Стартові файли
//? 🔸•  В папці src ти знайдеш стартові файли проєкту з базовою розміткою і готовими стилями:
//?     (https://github.com/goitacademy/javascript-homework/tree/main/homework-08/src).
//? 🔸•  В файлі app.js є масив об'єктів galleryItems, які містять інформацію про зображення:
//?     маленьке зображення, оригінальне і опис.

//? ✴️ Розмітка елемента галереї:

{/* <li class="gallery__item">
    <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    >
        <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
        />
    </a>
</li> */}

//? Посилання на оригінальне зображення повинне зберігатися в data - атрибуті source на елементі img,
//? і вказуватися в hrefпосилання(це необхідно для доступності).

//? ❗️❗️❗️ ОБОВ’ЯЗКОВО:
//? 🔸•  Закриття модального вікна при натисканні на div.lightbox__overlay.
//? 🔸•  Закриття модального вікна після натискання клавіші ESC.
//? 🔸•  Перегортування зображень галереї у відкритому модальному вікні клавішами "вліво" і "вправо".
//! Код виконаного завдання:

const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const list = document.querySelector(".js-gallery");
const btn = document.querySelector(".lightbox__button");
const lightbox = document.querySelector(".js-lightbox");
const lightboxOverlay = document.querySelector(".lightbox__overlay");
const lightboxImage = document.querySelector(".lightbox__image")

const markup = galleryItems
    .map((el) => `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${el.original}"
  >
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>
    `)
    .join("");

list.innerHTML = markup;

function closeModal() {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
    lightboxImage.setAttribute("alt", "");
}

let currentIndex = 0;

function openModal(index) {
    if (index < 0 || index >= galleryItems.length) return;

    currentIndex = index;
    const currentItem = galleryItems[currentIndex];

    lightbox.classList.add("is-open");
    lightboxImage.src = currentItem.original;
    lightboxImage.setAttribute("alt", currentItem.description);
}

list.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-source")) {
        e.preventDefault();
        const activeImgUrl = e.target.dataset.source;
        const activeIndex = galleryItems.findIndex(item => item.original === activeImgUrl);
        
        openModal(activeIndex);
    }
});

lightbox.addEventListener("click", (e) => {
    if (e.target != lightboxImage) {
        closeModal();
    }
});

window.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;

    switch (e.key) {
        case "Escape":
            closeModal();
            break;
            
        case "ArrowLeft":
            if (currentIndex > 0) {
                openModal(currentIndex - 1);
            }
            break;
            
        case "ArrowRight":
            if (currentIndex < galleryItems.length - 1) {
                openModal(currentIndex + 1);
            }
            break;
    }
});