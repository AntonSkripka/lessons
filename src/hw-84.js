//todo: Завдання-1 (task-1)
//* ✴️ Ціль: Зробити запит на свій API сайт (із ДЗ-15)
//* та отримати ВИБОРКУ з колекції будь яких елементів за допомогою
//* параметрів рядка запиту: кількості елементів та номеру сторінки.
//* Потім відрендерити цю виборку з колекції за допомогою JS
//* та додати кнопки пагинації, які "гортають" сторінки вперед та назад.
//? 🔸 1. Потрібно зробити HTML-розмітку, в якій є такі елементи:
//?       - ІНПУТ з числом елементів на сторінці від 1 до N
//?         (N - згідно з API вашого сайту);

//?       - ІНПУТ з номером сторінки від 1 до P
//?         (N - згідно з API вашого сайту);

//?       - КНОПКА «Отримати елементи», яка виконує запит з параметрами N i P
//?         (N i P – дані з полів ІНПУТ, які підставляються динамічно в параметри запиту в шлях до API сайту);

//?       - СПИСОК: <ul id="data-list"></>, в якому треба відрендерити
//?         позитивну відповідь від вашого API сайту (виборку з колекції);

//?       - ІНФОРМАТИВНИЙ РЯДОК:
//?         <p class="posts-info">Сторінка № <span class="page">*</span> з <span class="number-of-pages">*</span></p>
//?         з номером сторінки та загальною кількістью сторінок, дані в якому динамічно змінюються залежно від N i P;

//?       - КНОПКИ <⇐ Prev> та <Next ⇒>, які дозволяють "гортати" сторінки
//?         з заданою кількистью елементів N, динамічно змінюючи параметр P.

//? 🔸 2. Дані, отримані з ІНПУТів, треба підставити в рядок,
//?       шляху запиту до вашого API сайту,
//?       використовуючи змінні BaseURL і searchParams.

//? 🔸 3. Сформувати запит за допомогою методу fetch()
//?       та отримати позитивну відповідь від
//?       вашого API сайту - виборку з колекції.

//? 🔸 4. Позитивну відповідь від вашого API сайту
//?       за допомогою JS у списку <ul id="data-list"></>,
//?       який треба додати до HTML-розмітки.

//? 🔸 5. За допомогою кнопок <⇐ Prev> та <Next ⇒> перевірити фукціонал "гортання"
//?       сторінок, нумерація яких відповідає значенням інформативного рядка.

//! Код виконаного завдання
const API_KEY = import.meta.env.VITE_API_KEY;
const inpPerPage = document.querySelector("#hwNumPerPage");
const inpNumPage = document.querySelector("#hwNumPage");
const form = document.querySelector("#hwForm");
const resultUl = document.querySelector("#data-list");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const baseURLhw = "https://pixabay.com/api/";
const infoPage = document.querySelector(".page");
const infoNumOfPage = document.querySelector(".number-of-pages");
const minNumOfEl = +inpPerPage.getAttribute("min");
const maxNumEl = +inpPerPage.getAttribute("max");
const minNumPage = +inpNumPage.getAttribute("min");
const nav = document.querySelector(".btnList");

document.querySelectorAll('#hwForm input[type="range"]').forEach(input => {
    const badge = document.createElement('span');
    badge.id = "badge";
    badge.style.fontWeight = 'bold';
    badge.style.color = '#6366f1';
    badge.style.marginLeft = '8px';
    badge.textContent = input.value;

    input.parentElement.appendChild(badge);

    input.addEventListener('input', () => {
        badge.textContent = input.value;
    });
});

const badgeEl = document.querySelectorAll("#badge")[1];

const updateResult = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(
            `${baseURLhw}?key=${API_KEY}&q=nature&image_type=photo&page=${inpNumPage.value}&per_page=${inpPerPage.value}`
        );
        if (!response.ok) throw new Error('Помилка API');
        const data = await response.json();

        const fragment = document.createDocumentFragment();

        data.hits.forEach(photo => {
            const listItem = document.createElement('li');

            const img = document.createElement('img');

            img.src = photo.previewURL;

            img.alt = photo.tags || 'Pixabay photo';
            img.loading = 'lazy';

            listItem.appendChild(img);
            fragment.appendChild(listItem);
        });

        resultUl.replaceChildren(fragment);
        infoPage.textContent = inpNumPage.value;
        infoNumOfPage.textContent = maxNumEl;

        if (+inpNumPage.value > 1) {
            prevBtn.disabled = false;
        } else if (+inpNumPage.value < 20) {
            nextBtn.disabled = false;
        }
    } catch (error) {
        console.error(error);
    }
}

form.addEventListener("submit", (e) => updateResult(e));
nav.addEventListener("click", (e) => {
    if (e.target.id === "prevBtn") {
        if ((+inpNumPage.value - 1) >= minNumPage) {
            inpNumPage.value = +inpNumPage.value - 1;
            updateResult(e);
            if ((+inpNumPage.value) <= minNumPage) {
                e.target.disabled = true;
            }
            badgeEl.textContent = inpNumPage.value;
        } else {
            e.target.disabled = true;
        }
        nextBtn.disabled = false;
    } else if (e.target.id === "nextBtn") {
        if ((+inpNumPage.value + 1) <= maxNumEl) {
            inpNumPage.value = +inpNumPage.value + 1;
            updateResult(e);
            if ((+inpNumPage.value) >= maxNumEl) {
                e.target.disabled = true;
            }
            badgeEl.textContent = inpNumPage.value;
        } else {
            e.target.disabled = true;
        }
        prevBtn.disabled = false;
    }
})