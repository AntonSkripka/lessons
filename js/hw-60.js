//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
//! Код виконаного завдання
for (const [key, value] of Object.entries(userA)) {
    console.log(`${key}: ${value}`);
}


console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name: 'Mango', age: 2 };
//! Код виконаного завдання
const { name, age } = userB;
console.log("name:", name);
console.log("age:", age);

console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
    count: 11,
    employeePerformanceLists: [
        {
            ann: 29,
            david: 35,
            helen: 1,
            lorence: 99,
        },
        {
            poly: 12,
            mango: 17,
            ajax: 4,
        },
        {
            lux: 147,
            david: 21,
            kiwi: 19,
            chelsy: 38,
        }
    ],
};
//! Код виконаного завдання
const {
    count,
    employeePerformanceLists: [
        { ann, david, helen, lorence },
        { poly, mango, ajax },
        { lux, david: davidSecond, kiwi, chelsy }
    ]
} = employeePerformance;
console.log("Count:", count);
console.log("Group 1:", ann, david, helen, lorence);
console.log("Group 2:", poly, mango, ajax);
console.log("Group 3:", lux, davidSecond, kiwi, chelsy);

console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
    count: 6,
    employeeSalaryLists: [
        {
            mango: 100,
            poly: 150,
            alfred: 80,
        },
        {
            kiwi: 200,
            lux: 50,
            chelsy: 150,
        }
    ],
};
//! Код виконаного завдання
const {
    count: countSecond,
    employeeSalaryLists: [
        { mango: mango2, poly: poly2, alfred: alfred2 },
        { kiwi: kiwi2, lux: lux2, chelsy: chelsy2 }
    ]
} = employeeSalaries;

console.log("Total Count:", countSecond);
console.log("Salaries Group A:", mango2, poly2, alfred2);
console.log("Salaries Group B:", kiwi2, lux2, chelsy2);

console.log("--------------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
    {
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроїд',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захоплення',
        price: 1200,
        quantity: 2
    },
];
//! Код виконаного завдання
for (const { name, price, quantity } of products) {
    console.log(`Продукт: ${name}, Ціна: ${price}, Кількість: ${quantity}`);
}

console.log("--------------------------------------------------");



//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account = {
    //todo: Поточний баланс рахунку
    balance: 0,
    //todo:  Історія транзакцій
    transactions: [],

    //todo:  Метод створює і повертає об'єкт транзакції.
    //todo:  Приймає суму і тип транзакції.
    createTransaction(amount, type) {
        return { id: this.transactions.length, amount, type };
    },

    //todo:  Метод відповідає за додавання суми до балансу.
    //todo:  Приймає суму танзакції.
    //todo:  Викликає createTransaction для створення об'єкта транзакції
    //todo:  після чого додає його в історію транзакцій
    deposit(amount) {
        this.balance += amount;
        this.getBalance();

        this.transactions.push(this.createTransaction(amount, "+"));
    },

    //todo:  Метод відповідає за зняття суми з балансу.
    //todo:  Приймає суму танзакції.
    //todo:  Викликає createTransaction для створення об'єкта транзакції
    //todo:  після чого додає його в історію транзакцій.
    //todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
    //todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів!");
            return;
        }
        this.balance -= amount;
        this.getBalance();

        this.transactions.push(this.createTransaction(amount, "-"));
    },

    //todo:  Метод повертає поточний баланс
    getBalance() {
        console.log(`Баланс: ${this.balance}`);
    },

    //todo:  Метод шукає і повертає об'єкт транзакції по id
    getTransactionDetails(id) {
        let transaction = this.transactions[id];
        if (transaction === undefined) {
            console.log(`Транзакції за id: ${id} не існує`);
            alert(`Транзакції за id: ${id} не існує`);
        } else {
            console.log(`Транзакція за id ${id}: тип операції - "${this.transactions[id].type}", кількість грошей, знятих/внесених за операцію - ${this.transactions[id].amount}`);
        }
    },

    //todo:  Метод повертає кількість коштів
    //todo:  певного типу транзакції з усієї історії транзакцій
    getTransactionTotal(type) {
        let transactionTotal = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].type === type) {
                transactionTotal += this.transactions[i].amount;
            };
        };
        console.log(`Всього коштів транзакцій з типом ${type}: ${transactionTotal}`);
    },
};
//! Код виконаного завдання
console.log("Початковий баланс (має бути 0):", account.balance);

console.log("Тест deposit(1000):");
account.deposit(1000);

console.log("Тест withdraw(400):");
account.withdraw(400);

console.log("Тест getBalance():");
account.getBalance(); 

console.log("Тест getTransactionDetails(0):");
account.getTransactionDetails(0);

console.log("Тест getTransactionTotal('+'):");
account.getTransactionTotal("+");

console.log("--------------------------------------------------");
