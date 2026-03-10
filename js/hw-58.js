//todo [1]
console.log("%c [1] ", "color: yellow; background-color: #2274A5");
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахунку.
//! Код виконаного завдання
let bankAccount = {
    ownername: "Roma",
    accountNumber: 1,
    balance: 100,

    showbalance() {
        alert(`Ваш поточний баланс: ${this.balance} грн`);
        console.log(`Баланс: ${this.balance}`);
    },

    deposit() {
        let input = prompt("Завдання 1. Скільки грошей покласти на рахунок?");
        let amount = Number(input);

        if (input === null || input.trim() === "" || isNaN(amount) || amount <= 0) {
            alert("Помилка: введіть коректну суму більше нуля!");
            return;
        }

        this.balance += amount;
        this.showbalance();
    },

    withdraw() {
        let input = prompt("Завдання 1. Скільки грошей взяти з рахунку?");
        let amount = Number(input);

        if (input === null || input.trim() === "" || isNaN(amount) || amount <= 0) {
            alert("Помилка: введіть коректну суму для зняття!");
            return;
        }

        if (this.balance >= amount) {
            this.balance -= amount;
            this.showbalance();
        } else {
            alert("⛔️ Недостатньо коштів на вашому рахунку!");
            console.log("⛔️ Спроба зняти більше, ніж є на балансі.");
        }
    }
};

bankAccount.deposit();
bankAccount.withdraw();

console.log("--------------------------------------------------");

//todo [2]
console.log("%c [2] ", "color: yellow; background-color: #2274A5");
//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем,
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія,
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія.
//? ✳️ Якщо метод повернув "true" вивести повідомлення
//? “Температура нижче 0 градусів Цельсія” і навпаки,
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання
let weather = {
    temperature: 15,
    humidity: 5,
    windSpeed: 10,

    updateTemp() {
        let input = prompt("Завдання 2. Введіть температуру");
        let newTemp = Number(input);

        if (input === null || input.trim() === "" || isNaN(newTemp)) {
            alert("Помилка: введіть коректне число!");
            console.error("Некоректний ввід температури");
            return null; 
        }

        this.temperature = newTemp;

        if (this.temperature < 0) {
            alert("Температура нижче 0 градусів Цельсія");
            console.log("Температура нижче 0 градусів Цельсія");
            return true;
        } else {
            alert("Температура вище або дорівнює 0 градусів Цельсія");
            console.log("Температура вище або дорівнює 0 градусів Цельсія");
            return false;
        }
    }
}

weather.updateTemp();

console.log("--------------------------------------------------");

//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання
let user = {
    name: "Roma",
    email: "roma@gmail.com",
    password: "12345",

    login() {
        let inputName = prompt("Name:");
        if (inputName === null || inputName.trim().length < 3) {
            alert("Помилка: Ім'я має мати не менше 3 символів.");
            console.error("Некоректне ім'я");
            return;
        }
        this.name = inputName.trim();

        let inputEmail = prompt("Email:");
        if (inputEmail === null) return; 

        const atIndex = inputEmail.indexOf("@");
        const dotIndex = inputEmail.lastIndexOf(".");
        const isValidEmail = atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < inputEmail.length - 1;

        if (!isValidEmail) {
            alert("Електронна пошта має містити символ @ та крапку після неї.");
            console.error("Некоректний Email");
            return;
        }
        this.email = inputEmail.trim();
        let inputPassword = prompt("Password:");
        if (inputPassword === null || inputPassword.length < 6) {
            alert("Пароль має містити не менше 6 символів.");
            console.error("Занадто короткий пароль");
            return;
        }
        this.password = inputPassword;
        console.log("Дані успішно оновлено:");
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.password}`);
    }
}

user.login();

console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання

let movie = {
    title: "title",
    director: "director",
    year: 2026,
    rating: 7.5,

    ratingCheck() {
        if (this.rating <= 8) {
            console.log(`Title: %c${this.title}`, "color: red");
            return false;
        }
        console.log(`Title: %c${this.title}`, "color: green");
        return true;
    },

    printInfo() {
        this.ratingCheck();
        console.log(`Director: ${this.director}`);
        console.log(`Year: ${this.year}`);
        console.log(`Rating: ${this.rating}`);
    }
}

movie.printInfo();

console.log("--------------------------------------------------");

let coffeMachine = {
    water: 0,
    waterTemp: 25,
    coffe: 0,
    coffeIsGround: false,


    boilWater() {
        this.waterTemp = 100;
    },

    groundCoffe() {
        this.coffeIsGround = true;
    },

    updateResources() {
        this.water = 100;
        this.coffe = 100;
    },

    doCoffe() {
        if (this.water < 10 || this.coffe < 10) {
            console.log("Недостатньо ресурсів");
            return;
        };
        this.water -= 10;
        this.coffe -= 10;
        this.boilWater();
        this.groundCoffe();
        console.log("Your coffe is ready");
    }
}

coffeMachine.updateResources();
coffeMachine.doCoffe();