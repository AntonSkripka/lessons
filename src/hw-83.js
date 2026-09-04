//todo: Завдання-1 (task-1)
//* ✴️ Ціль: Зробити один запит на свій API сайт
//* із ДЗ-15 та відрендерити відповідь сайту за допомогою JS.
//? 🔸 1. Потрібно зробити HTML-розмітку, в якій є такі елементи:
//?       - ІНПУТ з діапазоном введення чисел від 1 до 10
//?         (або з іншим діапазоном згідно з API вашого сайту);

//?       - КНОПКА «Отримати N(користувачів)»
//?         (або N інших об'єктів із даними), (де N – дані з поля ІНПУТ).

//? 🔸 2. Дані, отримані з ІНПУТ, треба підставити в рядок,
//?       шляху запиту до вашого API сайту,
//?       використовуючи змінні BaseURL і searchParams.

//? 🔸 3. Сформувати запит за допомогою методу fetch()
//?       та отримати позитивну відповідь від вашого API сайту.

//? 🔸 4. Позитивну відповідь від вашого API сайту відрендерити
//?       за допомогою JS у списку <ul id="data-list"></>,
//?       який треба додати до HTML-розмітки.

//! Код виконаного завдання
const rangeInput = document.getElementById('range-input');
const rangeValue = document.getElementById('range-value');
const resetButton = document.getElementById('reset-button');
const myForm = document.getElementById('my-form');
const photoList = document.getElementById('photo-list');

rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
});

resetButton.addEventListener('click', () => {
    rangeInput.value = 5;
    rangeValue.textContent = 5;
    photoList.innerHTML = "";
});

myForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const count = rangeInput.value;
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    photoList.innerHTML = '';

    try {
        const response = await fetch(
            `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&per_page=${count}`
        );
        if (!response.ok) throw new Error('Помилка API');
        const data = await response.json();

        const fragment = document.createDocumentFragment();

        data.hits.forEach(photo => {
            const listItem = document.createElement('li');
            listItem.classList.add('photo-item');

            const img = document.createElement('img');
            
            img.src = photo.previewURL; 
            
            img.alt = photo.tags || 'Pixabay photo';
            img.loading = 'lazy';

            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });

            listItem.appendChild(img);
            fragment.appendChild(listItem);
        });

        photoList.appendChild(fragment);

    } catch (error) {
        console.error(error);
    }
});
