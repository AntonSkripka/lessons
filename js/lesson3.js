//! Деструкткризація об'єктів
console.warn("Деструкткризація об'єктів:");
//? ✴️ Під час розробки програм дані приходять,
//? як правило, у вигляді масивів і об'єктів,
//? значення яких необхідно записати у локальні змінні.
//? Для того, щоб робити це максимально просто,
//? в сучасному стандарті існує
//? синтаксис деструктуризованого присвоювання.

//? ✳️ Складні дані завжди представлені об'єктом.
//? Багаторазові звернення до властивостей об'єкта
//? візуально забруднюють код, 
//? якщо потрібно отримати значення окремих змінних:
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log("book:", book);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const accessType1 = book.isPublic ? "публічному" : "закритому";
const message1 = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType1} доступі.`;
console.log("message1:", message1);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Якщо потрібно окремо отримати змінні
//? з такими ж назвами як власивості об'єкта
//? та їх значеннями, то можна просто створити їх:
// const title = "The Last Kingdom";
// const author = "Bernard Cornwell";
// const genres = ["historical prose", "adventure"];
// const isPublic = true;
// const rating = 8.38;

// console.log("title:", title);
// console.log("author:", author);
// console.log("genres:", genres);
// console.log("isPublic:", isPublic);
// console.log("rating:", rating);
// console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const accessType2 = isPublic ? "публічному" : "закритому";
// const message2 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType2} доступі.`;
// console.log("message2:", message2);
// console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✴️ Для отримання змінних з такими ж назвами
//? як власивості об'єкта та їх значеннями,
//? використаємо синтаксис ❗️деструктуризованого присвоювання❗️. 
//? ✳️ Деструктуризація завжди знаходиться у лівій частині операції присвоєння. 
//? Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. 
//? Якщо ім'я змінної та ім'я властивості збігаються, відбувається присвоювання, 
//? в іншому випадку, їй буде присвоєно undefined. 
//? Порядок оголошення змінних у фігурних дужках - неважливий.
const book2 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log("book:", book2);

const { title: title_1, author: author_1, genres: genres_1, isPublic: isPublic_1, rating: rating_1, coverImage: coverImage_1 = "#" } = book;
const { title: title_2, author: author_2, genres: genres_2, isPublic: isPublic_2, rating: rating_2, coverImage: coverImage_2 = "#" } = book2

console.log("title:", title_1);
console.log("author:", author_1);
console.log("genres:", genres_1);
console.log("isPublic:", isPublic_1);
console.log("rating:", rating_1);
console.log("coverImage:", coverImage_1); //! "#"
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const accessType2 = isPublic_2 ? "публічному" : "закритому";
const message2 = `Книга ${title_2} автора ${author_2} з рейтингом ${rating_2} знаходиться в ${accessType2} доступі.`;
console.log("message2:", message2);
console.log("----------------------------------------------------------------------------------------------------------------------");

//! Значення за замовчуванням
console.warn("Значення за замовчуванням:");
//? ✳️ Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
const book1 = {
    title1: "The Last Kingdom",
    author1: "Bernard Cornwell",
    genres1: ["historical prose", "adventure"],
    isPublic1: true,
    rating1: 8.38,
};
console.log("book1:", book1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title1,
    author1,
    genres1,
    isPublic1,
    rating1,
    coverImage1 = "https://via.placeholder.com/640/480",
} = book1;

console.log("title1:", title1);
console.log("author1:", author1);
console.log("genres1:", genres1);
console.log("isPublic1:", isPublic1);
console.log("rating1:", rating1);
console.log("coverImage1:", coverImage1); //! "https://via.placeholder.com/640/480"
console.log("----------------------------------------------------------------------------------------------------------------------");

//! Зміна імені змінної
console.warn("Зміна імені змінної:");
//? ✴️ Під час деструктуризації можна змінити ім'я змінної, 
//? в яку розпаковується значення властивості. 
//? Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, 
//? після чого ставимо двокрапку і пишемо ім'я змінної, 
//? в яку необхідно помістити значення цієї властивості.
const firstBook = {
    title: "The Last Kingdom",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};
console.log("firstBook:", firstBook);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title: firstTitle,
    coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log("firstTitle:", firstTitle); //! The Last Kingdom
console.log("firstCoverImage:", firstCoverImage);  //! https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const secondBook = {
    title: "Сон смішної людини",
};
console.log("secondBook:", secondBook);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title: secondTitle,
    coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log("secondTitle:", secondTitle);  //! Сон смішної людини
console.log("secondCoverImage:", secondCoverImage); //! https://via.placeholder.com/640/480
console.log("----------------------------------------------------------------------------------------------------------------------");

//! Деструктуризація в циклах
console.warn("Деструктуризація в циклах:");
//? ✴️ Перебираючи масив об'єктів циклом for...of,
//? утворюються багаторазові звернення до властивостей об'єкта.
console.warn("Приклад-1:");
const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "На березі спокійних вод",
        author: "Роберт Шеклі",
        rating: 8.51,
    },
];

for (const book of books) {
    console.log("book.title:", book.title);
    console.log("book.author:", book.author);
    console.log("book.rating:", book.rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.warn("Приклад-2:");
//? ✴️ Для того, щоб скоротити кількість повторень, 
//? можна деструктуризувати властивості об'єкта 
//? у локальні змінні в тілі циклу.
for (const book of books) {
    const { title, author, rating } = book;

    console.log("title:", title);
    console.log("author:", author);
    console.log("rating:", rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.warn("Приклад-3:");
//? ✴️ Якщо в об'єкті небагато властивостей,
//? можна виконати деструктуризацію
//? безпосередньо у місці оголошення змінної book.
for (const { title, author, rating } of books) {
    console.log("title:", title);
    console.log("author:", author);
    console.log("rating:", rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log("----------------------------------------------------------------------------------------------------------------------");

//! Глибока деструктуризація
console.warn("Глибока деструктуризація:");
//? ✴️ Для деструктуризації властивостей
//? вкладених об'єктів використовуються
//? ті самі принципи, що й в трьох попередніх вправах.
const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
console.log("user:", user);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    name,
    tag,
    stats,
    stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log("name:", name); //! Jacques Gluke
console.log("tag:", tag); //! jgluke
console.log("stats:", stats); //! {followers: 5603, views: 4827, likes: 1308}  або Uncaught ReferenceError: stats is not defined
console.log("followers:", followers); //! 5603
console.log("userViews:", userViews); //! 4827
console.log("userLikes:", userLikes); //! 1308
console.log("----------------------------------------------------------------------------------------------------------------------");

//! Часткова деструктуризація
console.warn("Часткова деструктуризація:");
//? ✴️ Використовуючи операцію ... (rest)
//? можна робити часткову деструктуризацію,
//? взявши з об'єкта необхідні поля,
//? а решту зібрати в змінну під ім'ям rest (ім'я змінної довільне),
//? це буде об'єкт з тими полями,
//? які ми явно НЕ деструктуризували в змінні.
const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
};
console.log("hotel:", hotel);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const { name: hotelName, ...restRemainingObjectProperties } = hotel;

console.log("hotelName(= name):", hotelName); //! // 'Resort Hotel'
console.log("restRemainingObjectProperties:", restRemainingObjectProperties); //! {stars: 5, capacity: 100}
console.log("----------------------------------------------------------------------------------------------------------------------");

//! Деструкткризація масивів
console.warn("Деструкткризація масивів:");
//? ✴️ Деструктуризоване присвоювання можна використовувати
//? і для масивів, але з деякими особливостями.
//? ❗️➖ Замість фігурних дужок {} використовуються квадратні [].
//? ❗️➖ Змінним, зазначеним у квадратних дужках [],
//?      будуть послідовно присвоюватися значення елементів масиву.
//? ✳️ Після ключового слова const або let ставимо
//? квадратні дужки, як і у випадку з оголошенням масиву.
//? Всередині дужок, через кому, вказуємо імена змінних,
//? в які будуть поміщені значення масиву.
//? ✳️ Внаслідок такого запису будуть створені 3 змінні, 
//? і в них будуть поміщені елементи в нумерованому порядку
//?  - від 0 і до кінця масиву.
const rgb1 = [200, 255, 100];
console.log("rgb1:", rgb1);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red1, green1, blue1] = rgb1;

console.log(`Red1:${red1}, Green1:${green1}, Blue1:${blue1}`); //! 'Red1:200, Green1:255, Blue1:100'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Присвоєння значення змінної після її оголошення
console.warn("Присвоєння значення змінної після її оголошення:");
//? ✴️ Під час деструктуризації масивів,
//? значення змінної може присвоюватися після її оголошення.
//? На практиці це рідко використовується.
const rgb2 = [128, 100, 255];
console.log("rgb2:", rgb2);
console.log("`  `  `  `  `  `  `  `  `  `");

let red2, green2, blue2;

[red2, green2, blue2] = rgb2;

console.log(`Red2:${red2}, Green2:${green2}, Blue2:${blue2}`); //! 'Red2:128, Green2:100, Blue2:255'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Значення за замовчуванням
console.warn("Значення за замовчуванням:");
//? ✴️ Якщо змінних більше, ніж елементів масиву,
//? їм буде присвоєно undefined,
//? тому можна вказувати значення за замовчуванням.
const rgb3 = [100, 128, 200];
console.log("rgb3:", rgb3);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red3, green3, blue3, alfa3 = 0.3] = rgb3;

console.log(`Red3:${red3}, Green3:${green3}, Blue3:${blue3}, Alfa3:${alfa3}`); //! 'Red3:100, Green3:128, Blue3:200, Alfa3:0.3'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Часткова деструктуризація
console.warn("Часткова деструктуризація:");
//? ✴️ Іноді з масиву необхідно деструктуризувати тільки перші N елементів,
//? а інші зберегти в одну змінну у вигляді масиву.
//? Деструктуруючи масив, можна розпакувати і присвоїти
//? іншу частину елементів масиву змінної, використовуючи операцію ... (rest).
const rgb4 = [150, 220, 50];
console.log("rgb4:", rgb4);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red4, ...restOthercColors4] = rgb4;

console.log("red4:", red4); //! 150
console.log("restOthercColors4:", restOthercColors4); //! [220, 50]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Пропуск елементів
console.warn("Пропуск елементів:");
const rgb5 = [11, 112, 213];
console.log("rgb5:", rgb5);
console.log("`  `  `  `  `  `  `  `  `  `");

const [, , blue5] = rgb5;

console.log(`Blue5: ${blue5}`); //! 'Blue5: 213'
console.log("---------------------------------------------------");

//! Патерн «Об'єкт параметрів»
//? ✴️ Якщо функція приймає більше двох-трьох аргументів,
//? дуже просто заплутатись, в якій послідовності і що передавати.
//? В результаті виходить дуже неочевидний код в місці її виклику.
function doStuffWithBook1(title, numberOfPages, downloads, rating, isPublic) {
    //todo: Робимо щось з параметрами:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

//? ❓❓❓ Що таке The Last Kingdom? Що таке 736? Що таке 10283? Що таке 8.38? Що таке true?
doStuffWithBook1("The Last Kingdom", 736, 10283, 8.38, true);
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Патерн «Об'єкт параметрів» допомагає вирішити цю проблему,
//? замінюючи набір параметрів всього одним об'єктом з іменованими властивостями.
const book3 = {
    title: "The Last Kingdom",
    numberOfPages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
};
console.log("book:", book3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `");

function doStuffWithBook2(bookObj) {
    //todo: // Робимо щось з властивостями об'єкта:
    console.log("bookObj.title:", bookObj.title);
    console.log("bookObj.numberOfPages:", bookObj.numberOfPages);
    console.log("bookObj.downloads:", bookObj.downloads);
    console.log("bookObj.rating:", bookObj.rating);
    console.log("bookObj.isPublic:", bookObj.isPublic);
};

doStuffWithBook2(book3);
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Ще один плюс у тому, 
//? що можна деструктуризувати об'єкт в параметрі book. 
//? Це можна зробити в тілі функції.
function doStuffWithBook3(bookObj) {
    const { title, numberOfPages, downloads, rating, isPublic } = bookObj;
    //todo: Робимо щось вже з значеннями, деструктуризуваними з об'єкта:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

doStuffWithBook3(book);
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Або відразу деструктуризуємо об'єкт
//? в сигнатурі (підписі) функції - немає різниці.
function doStuffWithBook4({
    title,
    numberOfPages,
    downloads,
    rating,
    isPublic,
}) {
    //todo: Робимо щось вже з значеннями, деструктуризуваними з об'єкта в сигнатурі (підписі) функції:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

doStuffWithBook4(book);
console.log("---------------------------------");
