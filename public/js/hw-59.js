//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши скрипт, який, для об'єкта user, послідовно:
//? - додає поле mood зі значенням 'happy'
//? - замінює значення hobby на 'skydiving'
//? - замінює значення premium на false
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
//! Код виконаного завдання

Object.assign(user, {
    mood: 'happy',
    hobby: 'skydiving',
    premium: 'false',
});

console.log(user);

console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію countProps(obj),
//? яка рахує кількість властивостей в об'єкті.
//? Функція повертає число — кількість властивостей.
//! Код виконаного завдання
const countProps = function (obj) {
    //! твій код
    if (typeof obj != "object" || obj === null) {
        return "Передан не об'єкт";
    } else if (Array.isArray(obj)) {
        return "Передан масив";
    }
    return Object.keys(obj).length;
};
//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(countProps({})); //! 0
console.log(countProps({ name: 'Mango', age: 2 })); //! 2
console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію findBestEmployee(employees), 
//? яка приймає об'єкт співробітників 
//? і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
//? Співробітники і кількість виконаних завдань містяться 
//? як властивості об'єкта в форматі "ім'я":"кількість задач".
//! Код виконаного завдання
const findBestEmployee = function (employees) {
    //! твій код
    if (typeof employees != "object" || employees === null) {
        return "Передан не об'єкт";
    } else if (Array.isArray(employees)) {
        return "Передан масив";
    }
    let bestEmployee = Math.max(...Object.values(employees));
    if (Object.keys(employees).length === 0) {
        return "Передан пустий об'єкт";
    }
    return Object.keys(employees).find(k => employees[k] === bestEmployee);
};

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); //! lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); //! mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); //! lux

console.log(
    findBestEmployee({}),
);

console.log(
    findBestEmployee(12),
);

console.log(
    findBestEmployee([38]),
);
console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
//? Функція рахує загальну суму зарплати працівників і повертає її. 
//? Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
//! Код виконаного завдання
const countTotalSalary = function (employees) {
    //! твій код
    if (typeof employees != "object" || employees === null) {
        return "Передан не об'єкт";
    } else if (Array.isArray(employees)) {
        return "Передан масив";
    }
    let total = 0;
    for (const value of Object.values(employees)) {
        total += value;
    };
    return total;
};

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(countTotalSalary({})); //! 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); //! 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); //! 400
console.log("--------------------------------------------------");


//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію getAllPropValues(arr, prop), 
//? яка отримує масив об'єктів і ім'я властивості. 
//? Повертає масив значень певної властивості prop 
//? з кожного об'єкта в масиві.
//! Код виконаного завдання
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
    //! твій код
    if (!Array.isArray(arr)) {
        return "Передан не масив";
    } else if (typeof prop != "string" || prop === "") {
        return "Другий аргумент має бути не пустою строкою";
    };
    let found = [];
    for (let i = 0; i < arr.length; i++) {
        if (prop in arr[i]) {
            found.push(arr[i][prop]);
        };
    };
    return found;
};

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(getAllPropValues(products, 'name')); //! ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products, 'quantity')); //! [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); //! []
console.log("--------------------------------------------------");

//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію calculateTotalPrice(allProdcuts, productName), 
//? яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
//? Повертає загальну вартість продукту (ціна * кількість).
//? Викличи функції для перевірки працездатності твоєї реалізації.
//! Код виконаного завдання
const calculateTotalPrice = function (allProdcuts, productName) {
    //! твій код
    if (!Array.isArray(allProdcuts)) {
        console.error("Помилка: Перший аргумент має бути масивом.");
        return 0;
    }

    if (typeof productName !== 'string') {
        console.error("Помилка: Ім'я продукту має бути рядком.");
        return 0;
    }

    for (const product of allProdcuts) {
        if (product.name === productName) {
            const { price, quantity } = product;
            if (typeof price !== 'number' || typeof quantity !== 'number') {
                console.warn(`Увага: Некоректні дані для продукту "${productName}"`);
                return 0;
            }

            return price * quantity;
        }
    }
    console.log(`Продукт "${productName}" не знайдено у списку.`);
    return 0;
};

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(calculateTotalPrice(products, 'Радар')); //! 5200
console.log(calculateTotalPrice(products, 'Дроїд')); //! 2800
console.log(calculateTotalPrice(null, 'Радар'));
console.log(calculateTotalPrice(products, 123));
console.log(calculateTotalPrice(products, 'Яблуко'));
console.log("--------------------------------------------------");



//todo [7] - додаткове
console.log(
    "%c [7] - додаткове ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши сценарій керування особистим кабінетом інтернет-банку. 
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//! Код виконаного завдання
let bankAccountTemplate = {
    accountNumberTemplate: 0,

    showbalance() {
        alert(`Ваш поточний баланс: ${this.balance} грн`);
        console.log(`Баланс: ${this.balance}`);
    },

    deposit() {
        let input;
        let amount;

        do {
            input = prompt("Скільки грошей покласти на рахунок?");
            if (input === null) return;
            amount = Number(input);

            if (isNaN(amount) || amount <= 0 || input.trim() === "") {
                alert("Помилка: введіть коректне число більше нуля!");
            }
        } while (isNaN(amount) || amount <= 0 || input.trim() === "");

        this.balance += amount;
        this.showbalance();

        this.updateHistory("+", amount);
    },

    withdraw() {
        let amount;
        let input;

        do {
            input = prompt("Скільки грошей взяти з рахунку?");
            if (input === null) return;
            amount = Number(input);

            if (isNaN(amount) || amount <= 0 || input.trim() === "") {
                alert("Помилка: введіть коректну суму!");
            } else if (this.balance < amount) {
                alert("⛔️ Недостатньо коштів! Ваш баланс: " + this.balance);
                return;
            }
        } while (isNaN(amount) || amount <= 0 || input.trim() === "");

        this.updateHistory("-", amount);
    },

    updateHistory(whatWas, money) {
        let operation = String(whatWas) + String(money);
        this.history.push(operation);
    },

    showHistory() {
        if (this.history.length === 0) {
            alert("Дій ще не було");
            return;
        }
        alert(`Історія: ${this.history}`);
        console.log(this.history);
    }
};

function createAccount(template) {
    let name;
    do {
        name = prompt("Створення аккаунту. Введіть ім'я власника:");
        if (name === null) name = "Анонім";
        if (name.trim().length < 2) {
            alert("Помилка: ім'я має бути не коротшим за 2 символи!");
        }
    } while (name.trim().length < 2);
    template.accountNumberTemplate++;

    const target = {
        ownername: name,
        accountNumber: template.accountNumberTemplate,
        balance: 0,
        history: []
    };

    Object.setPrototypeOf(target, template);

    return new Proxy(target, {
        get(obj, prop) {
            if (prop === 'accountNumberTemplate') {
                console.warn("Доступ до шаблону номеру аккаунту обмежений");
                return undefined;
            }
            return obj[prop];
        },
        set(obj, prop, value) {
            if (prop === 'accountNumber') {
                console.error("Не можна змінювати номер аккаунту");
                return false;
            }
            obj[prop] = value;
            return true;
        }
    });
};

const myAcc = createAccount(bankAccountTemplate);
myAcc.deposit();
myAcc.withdraw();
myAcc.showHistory();
console.log(myAcc.accountNumberTemplate);
console.log(myAcc.accountNumber = 21);
console.log(myAcc.accountNumber);

console.log("--------------------------------------------------");
