//* ✴️ Ціль:
//* Створити Створіть HTML-сторінку з кількома зображеннями,
//* які будуть підлягати лінійному завантаженню.
//* Наприклад, можна використовувати зображення
//* з високою роздільною здатністю або зображення з важкими форматами.


//? 1.  Додайте data - src атрибут до тегів img, який містить
//? посилання на зображення, яке необхідно завантажити.
//? 2.  Додайте CSS стилі, які забезпечують мінімальну висоту
//? тегів img та фоновий колір для видимих зображень,
//? які ще не завантажені.
//? 3.  img { height: 200px; background - color: #f0f0f0; }
//? 4.  Створіть JavaScript - файл та імпортуйте IntersectionObserver.
//? 5.  Встановіть IntersectionObserver для кожного зображення
//? з data - src атрибутом, яке потрібно завантажити.
//? 6.  Для кожного зображення, яке стає видимим, змініть
//? його src атрибут на data - src та перестаньте спостерігати його.
//? 7.  Додайте додаткову функціональність, таку як анімацію
//? завантаження або зображення - заповнювач,
//? щоб покращити користувацький досвід.
//? 8. Обов’язково! Оптимізуйте завантаження зображень
//? за допомогою WebP формату або скейлінга зображень
//? до відповідної роздільної здатності,
//? щоб зменшити обсяг завантажуваної інформації.
//? 9.  Перевірте результати за допомогою інструментів
//? розробника браузера, таких як "Network"
//? або "Performance", щоб переконатися,
//? що зображення завантажуються тільки тоді,
//? коли вони стають видимими на сторінці.
//? 10.  Додайте можливість завантажувати зображення
//? тільки при натисканні на кнопку або при іншій дії користувача.
//? 11.  Запустіть сайт на різних пристроях та перевірте,
//? чи працює лінійне завантаження зображень, коли користувач прокручує сторінку.
//? 12.  Залиште коментарі в коді, щоб пояснити,
//? як він працює та як можна його покращити в майбутньому.

function loadImage(imageElement) {
    if (!imageElement) return;

    const src = imageElement.getAttribute('data-src');
    const srcset = imageElement.getAttribute('data-srcset');

    // Перевіряємо та встановлюємо srcset
    if (srcset) {
        imageElement.srcset = srcset;
    }

    if (src) {
        imageElement.src = src;
    }

    // Чекаємо, поки браузер фізично викачає картинку, щоб прибрати розмиття
    imageElement.onload = () => {
        imageElement.classList.add('loaded');
        // Очищаємо дата-атрибути, бо вони більше не потрібні
        imageElement.removeAttribute('data-src');
        imageElement.removeAttribute('data-srcset');
    };
}

/**
 * Ініціалізація IntersectionObserver для автоматичного лінивого завантаження.
 */
function initLazyLoading() {
    // Вибираємо тільки ті зображення, які НЕ мають класу ручного завантаження
    const lazyImages = document.querySelectorAll('img.lazy-image:not(.click-to-load)');

    // Налаштування обсервера
    const observerOptions = {
        root: null, // Слідкуємо відносно viewport
        rootMargin: '0px 0px 200px 0px', // Завантажуємо за 200px до появи в зоні видимості
        threshold: 0.01 // Спрацьовує, як тільки з'являється хоч 1% зображення
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Перевіряємо, чи елемент перетнув межу видимості
            if (entry.isIntersecting) {
                const img = entry.target;
                loadImage(img);
                // Припиняємо спостереження за цим зображенням, бо воно вже вантажиться
                observer.unobserve(img);
            }
        });
    }, observerOptions);

    // Вішаємо обсервер на кожне автоматичне зображення
    lazyImages.forEach(image => imageObserver.observe(image));
}

/**
 * Додаткова функціональність: завантаження зображення лише при натисканні на кнопку
 */
function initManualLoading() {
    const manualContainers = document.querySelectorAll('.manual-load');

    manualContainers.forEach(container => {
        const btn = container.querySelector('.load-btn');
        const img = container.querySelector('img.lazy-image');

        if (btn && img) {
            btn.addEventListener('click', () => {
                loadImage(img);
            }, { once: true }); // { once: true } автоматично видаляє прослуховувач після першого кліку
        }
    });
}

// Запуск ініціалізацій після завантаження DOM дерева
document.addEventListener('DOMContentLoaded', () => {
    initLazyLoading();
    initManualLoading();
});


/**
 * МАЙБУТНЄ ПОКРАЩЕННЯ КОДУ:
 * 1. Поліфіл: Для зовсім старих браузерів, які не підтримують IntersectionObserver,
 * можна додати перевірку: if (!'IntersectionObserver' in window) { // завантажити все відразу або через scroll-event }
 * 2. Автоматизація WebP: На продакшені краще використовувати тег <picture> з різними <source type="image/webp">,
 * або налаштувати CDN (наприклад, Cloudinary), який автоматично віддає потрібний формат через заголовки запиту.
 * 3. Динамічний Placeholder: Можна генерувати дуже легкі SVG прямо в атрибут src для кращого візуалу.
 */