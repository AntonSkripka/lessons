//! Відкладене завантаження («above the fold» і «below the fold»)
console.warn(`Відкладене завантаження («above the fold» і «below the fold»)​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_03/images/page-fold.png"}`);
console.warn("Lazy Loading (ліниве завантаження). \n Пояснення та практичні приклади на JavaScript. Атрибут loading: \n https://www.youtube.com/watch?v=IdUbsiQUxa4");
console.warn('Підтримка браузерами атрибуту loading="lazy": \n https://caniuse.com/?search=loading%3D%22lazy%22');

//? ✴️ Веб-сторінки містять велику кількість зображень,
//? які збільшують розмір сторінок і впливають на швидкість їх завантаження.
//? Більшість зображень знаходяться за межами першого екрану
//? (за кадром, below the fold), тому користувач побачить їх
//? тільки після прокручування сторінки. Це означає, що ви,
//? можливо, завантажуєте те, що користувач ніколи не побачить,
//? але витратить на це час і, можливо, гроші.
//? Завантаження некритичного контенту також
//? розряджає акумулятор мобільних пристроїв
//? та витрачає інші системні ресурси.
//? ✳️ Терміни «above the fold» (в кадрі або вище за згин)
//? і «below the fold» (за кадром або нижче за згин)
//? прийшли з часів до появи цифрових технологій.
//? Якщо ви коли-небудь купували газету в кіоску, їх, як правило,
//? складають навпіл, щоб перехожі могли бачити
//? тільки верхню половину першої сторінки.
//? Якщо їм не сподобається те, що вони побачать,
//? вони пройдуть повз, і продажі впадуть.
//? Ось чому так важливо розміщати найбільш цікавий контент
//? у верхній частині сторінки.


//! Відкладене завантаження (з loading="lazy")
console.warn('Відкладене завантаження (з loading="lazy"):');
//? ✴️ Відкладене завантаження (lazy-loading)
//? - це прийом, який відкладає завантаження
//? некритичних ресурсів під час завантаження сторінки.
//? Замість цього, ці некритичні ресурси завантажуються
//? лише у разі потреби.
//? Це знижує початкову вагу ресурсів,
//? які необхідно завантажити для відображення сторінки,
//? використання системних ресурсів
//? підвищує час її завантаження та наступного рендеру.
//? Все це позитивно позначається на продуктивності.
//?     📌 На на практиці ледаче завантаження виглядає приблизно так:
//? 🔸 Ви потрапляєте на сторінку і починаєте прокручувати її, читаючи вміст.
//? 🔸 У якийсь момент ви прокручуєте сторінку до зображення - заглушки.
//? 🔸 Зображення - заглушка раптово змінюється на справжнє зображення.


//! Атрибут loading
//? ✴️ Сучасні браузери вміють робити це
//? без JavaScript, але, на жаль, не всі.
//? HTML-атрибут loading тегу <img> підтримується нативно
//? у всіх сучасних браузерах, крім, можливо, Safari,
//? і дозволяє браузеру відкласти завантаження зображень
//? за кадром доти, доки користувач не прокрутить до них сторінку.
//?     📌 Підтримує три значення:
//? 🔸 "lazy" - браузер виконає відкладене завантаження зображення.
//? 🔸 "eager" - зображення буде завантажене за першої нагоди,
//?    тобто без відкладеного завантаження.
//? 🔸 "auto" (значення за замовчуванням) - браузер сам визначає
//?    чи виконувати відкладене завантаження чи ні.
console.log(
    `%c
    <img
        src="./my-image.jpg"
        alt="Image description"
        loading="lazy"
    />
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ У вкладці Network в інструментах розробника
//? виберіть фільтр Img, щоб відображалось лише завантаження зображень.
//? Після цього прокручуйте приклад і спостерігайте
//? як будуть довантажуватися закадрові зображення котів.
//? Браузери, що підтримують атрибут loading,
//? будуть завантажувати зображення відкладено,
//? а браузери без підтримки - завантажать усі зображення відразу.
console.log("-------------------------------------------------------------------");

//! Підключення бібліотеки LazySizes
console.warn("Бібліотека LazySizes: \n https://afarkas.github.io/lazysizes/index.html");
console.warn("Підключення бібліотеки LazySizes через CDN: \n https://cdnjs.com/libraries/lazysizes");
//? ✴️ Бібліотека lazysizes самоініціалізується
//? при завантаженні на сторінку.
//? Тобто для базового використання в JavaScript
//? нічого робити непотрібно.
//? Повний список її можливостей наведений в документації.
console.log(
    `%c
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer">
    </script>
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");

//! Використання бібліотеки LazySizes (крок-1)
console.warn("Використання бібліотеки LazySizes (крок-1):");
//? ✴️ Усім зображенням, які необхідно завантажувати відкладено, 
//? задаємо клас lazyload і замінюємо атрибут src на data-src. 
//? Це необхідно бібліотеці lazysizes для правильної роботи.
console.log(
    `%c
    <img
        class="lazyload"
        data-src="path/to/my-image.jpg"
        alt="Generic alt"
    />
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");

//! Використання бібліотеки LazySizes (крок-2)
console.warn("Використання бібліотеки LazySizes (крок-2):");
//? ✴️ Доки зображення завантажується можна 
//? показувати заповнювач низької якості. 
//? Ця техніка називається LQIP 
//? (Low Quality Image Placeholder). 
//? Існує багато варіантів реалізації LQIP, 
//? але для початку достатньо буде показувати 
//? один стандартний заповнювач, замість усіх зображень. 
//? Для цього додаємо атрибут src, 
//? значенням якого буде посилання на це зображення-заповнювач.
console.log(
    `%c
    <img
        class="lazyload"
        src="path/to/lqip-placeholder.jpg"
        data-src="path/to/my-image.jpg"
        alt="Generic alt"
    />
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");

//! Використання бібліотеки LazySizes (крок-3)
console.warn("Використання бібліотеки LazySizes (крок-3):");
//? ✴️ Коли зображення було завантажене, 
//? бібліотека lazysizes додає елементу клас lazyloaded. 
//? Це можна використовувати для застосування 
//? CSS-ефектів в момент завантаження зображення:

console.log(
    `%c
    .blur-up {
        filter: blur(5px);
        transition: filter 400ms;
    }

    .blur-up.lazyloaded {
        filter: blur(0);
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");

//! Використання бібліотеки LazySizes (крок-4)
console.warn("Використання бібліотеки LazySizes (крок-4):");
//? ✴️ Після оголошення стилів, додаємо клас blur-up тегам <img>.
console.log(
    `%c
    <img
        class="lazyload blur-up"
        src="path/to/lqip-placeholder.jpg"
        data-src="path/to/my-image.jpg"
        alt="Generic alt"
    />
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");

//! Відкладене завантаження (з концепцією Intersection Observer)
console.warn(`Відкладене завантаження (з концепцією Intersection Observer)​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_03/images/observer-concept.gif"}`);
console.warn("Документація Intersection Observer: \n https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver");
console.warn("Прості рішення для складних завдань \n із Intersection Observer API: \n https://www.youtube.com/watch?v=ZYqBZmU-tA0");
console.warn("Синтаксис Intersection Observer:");
//? ✴️ Intersection Observer API
//? – це сучасна веб-технологія JavaScript,
//? яка дозволяє асинхронно відстежувати
//? перетинання (входження/вихід) елемента (Target)
//? з видимої області (Root -> viewport)
//? або іншого батьківського елемента-контейнера.

//? 📌 Коли необхідно використовувати Intersection Observer:
//?    🔸 потрібно ліниво завантажувати зображення(lazy - loading),
//?    🔸 відстежувати появу секцій на сторінці (наприклад, для анімацій чи навігації),
//?    🔸 реалізувати нескінченну прокручування (infinite scroll),
//?    🔸 відстежувати перегляд реклами або активність користувача.

//? ⚠️ Переваги перед scroll - подіями:
//?    ✅ Більш продуктивно (не викликається на кожен піксель прокручування),
//?    ✅ Не вимагає throttling/debounce,
//?    ✅ Працює асинхронно, не блокує основний потік.
console.log(
    `%c
    IntersectionObserver(callback, options):
    🔸 callback - функція, що викликається при кожному вході/виході елемента в зону видимості.
    🔸 options може містити:
        🔸 root: елемент-контейнер, щодо якого вести спостереження (за умовчанням viewport(root: null)).
        🔸 threshold: частка видимості елемента (0 - навіть 1px, 1.0 - повністю)
            при досягненні яких викликається колбек.
        🔸 rootMargin: відступи навколо root. Зміщення зони (margin) навколо root
            (формат як у CSS: top/right/bottom/left).
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Відкладене завантаження (з концепцією Intersection Observer)
console.warn(`Відкладене завантаження (з концепцією Intersection Observer)​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_03/images/observer-concept.gif"}`);
console.warn("Документація Intersection Observer: \n https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver");
console.warn("Прості рішення для складних завдань \n із Intersection Observer API: \n https://www.youtube.com/watch?v=ZYqBZmU-tA0");
console.warn("Синтаксис Intersection Observer:");
//? ✴️ Intersection Observer API
//? – це сучасна веб-технологія JavaScript,
//? яка дозволяє асинхронно відстежувати
//? перетинання (входження/вихід) елемента (Target)
//? з видимої області (Root -> viewport)
//? або іншого батьківського елемента-контейнера.

//? 📌 Коли необхідно використовувати Intersection Observer:
//?    🔸 потрібно ліниво завантажувати зображення(lazy - loading),
//?    🔸 відстежувати появу секцій на сторінці (наприклад, для анімацій чи навігації),
//?    🔸 реалізувати нескінченну прокручування (infinite scroll),
//?    🔸 відстежувати перегляд реклами або активність користувача.

//? ⚠️ Переваги перед scroll - подіями:
//?    ✅ Більш продуктивно (не викликається на кожен піксель прокручування),
//?    ✅ Не вимагає throttling/debounce,
//?    ✅ Працює асинхронно, не блокує основний потік.
console.log(
    `%c
    IntersectionObserver(callback, options):
    🔸 callback - функція, що викликається при кожному вході/виході елемента в зону видимості.
    🔸 options може містити:
        🔸 root: елемент-контейнер, щодо якого вести спостереження (за умовчанням viewport(root: null)).
        🔸 threshold: частка видимості елемента (0 - навіть 1px, 1.0 - повністю)
            при досягненні яких викликається колбек.
        🔸 rootMargin: відступи навколо root. Зміщення зони (margin) навколо root
            (формат як у CSS: top/right/bottom/left).
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Простий приклад використання Intersection Observer
// console.warn("Простий приклад використання Intersection Observer:");
// const target = document.getElementById("target");
// const scrollContainer = document.getElementById("scrollContainer");
// console.log("scrollContainer:", scrollContainer); //!

// const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 console.log("Елемент видно!");
//                 target.style.background = "lightgreen";
//             } else {
//                 console.log("Елемент пішов із зони видимості...");
//                 target.style.background = "yellow";
//             }
//         }
//         );
//     },
//     {
//         root: null,
//         // root: scrollContainer, //! ВІДКРИТИ (і в CSS) для демонстрації відстеження "box-target" у вікні [scrollContainer]
//         threshold: 0.5, //todo: Викликається, коли 50% об'єкта видно
//         // threshold: [0, 0.25, 0.5, 0.75, 1], ////todo: Перерахунок перетину root кожної чверті видимості.
//         //! ПРИХОВАТИ (і в CSS) для демонстрації відстеження "box-target" у вікні [scrollContainer]
//         rootMargin: '0px 0px -30% 0px'  //todo: Знизу зменшили зону на 50% висоти в'юпорту
//     }
// );

// console.log("observer:", observer); //!

// observer.observe(target); //todo: Додає елемент до списку відслідковуваних елементів
console.log("-----------------------------------------------------------------");

//! Приклад-1. Lazy-loading зображень та тексту 
console.warn("Приклад-1. Lazy-loading зображень та тексту:");
//? 📌 Як це працює:
//?    🔸 Всі <img> мають атрибут data-src, який містить шлях до зображення.
//?    🔸 Зображення спочатку не завантажуються, оскільки src не встановлено або є зображення-заглушка.
//?    🔸 Коли зображення вперше потрапляє в зону видимості, спрацьовує IntersectionObserver
//?     і скрипт підставляє src = data-src, завантажуючи картинку.
//? ✳️ Такий підхід економить ресурси та покращує продуктивність сайту.
//todo: Відстежування зображеннь
// const images = document.querySelectorAll('img[data-src]');
const images = document.querySelectorAll('.image-observer');

const loadImage = (img) => {
    img.src = img.dataset.src;
};

const observerImg = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observerImg.unobserve(entry.target); //todo: Видаляє елемент зі списку відслідковуваних елементів
                console.log(`Елемент ${entry.target.alt} видно!`);
            }
        });
    },
    {
        threshold: 0.9, //todo: Викликається, коли 90% об'єкта видно
    }
);

images.forEach(img => observerImg.observe(img));
console.log("-----------------------------------------------------------------");


//todo: Відстежування текстів
const texts = document.querySelectorAll('.text-observer');

const observerTxt = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("ТЕКСТ видно!");
                entry.target.style.color = "red";
                entry.target.style.background = "lightgreen";
            } else {
                console.log("ТЕКСТ пішов із зони видимості...");
                entry.target.style.color = "lightgrey";
            }
        }
        );
    },
    {
        threshold: 0.6, //todo: Викликається, коли 60% об'єкта видно
    }
);

texts.forEach(text => observerTxt.observe(text));
console.log("-----------------------------------------------------------------");

//! Приклад-2. Анімація елементів при появі 
console.warn("Приклад-2. Анімація елементів при появі:");
const sections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(
            entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); //todo: Видаляє елемент зі списку відслідковуваних елементів
                    console.log(`Секція ${entry.target.textContent} з'явилась!`);
                }
            }
        );
    },
    {
        threshold: 0.2, //todo: Викликається, коли 20% об'єкта видно
    }
);

sections.forEach(section => observer.observe(section));
console.log("---------------------------------------------");
