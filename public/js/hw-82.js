//todo: Завдання-1 (task-1)
//*
//? Напиши функцію delay(ms), яка повертає проміс,
//? що переходить в стан "resolved" через ms мілісекунд.
//? Значенням промісу, яке виповнилося має бути
//? та кількість мілісекунд,
//? яку передали під час виклику функції delay.
//! Код виконаного завдання
const delay = ms => {
    //! Твій код
    return new Promise((resolve) => {
        setTimeout(() => { resolve(ms) }, ms)
    });
};

const logger1 = time => console.log(`Resolved after ${time}ms`);

//! Виклич функції для перевірки
delay(2000).then(logger1); //! Resolved after 2000ms
delay(1000).then(logger1); //! Resolved after 1000ms
delay(1500).then(logger1); //! Resolved after 1500ms




//todo: Завдання-2 (task-2)
//*
//? Перепиши функцію toggleUserState() так, щоб
//? вона не використовувала callback-функцію callback,
//? а приймала всього два параметри
//? allUsers і userName і повертала проміс.
//! Код виконаного завдання
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback = null) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
    );

    if (callback) {
        callback(updatedUsers);
    } else {
        return new Promise((resolve) => {
            setTimeout(() => resolve(updatedUsers), 2500)
        })
    }
};

const logger2 = updatedUsers => console.table(updatedUsers);

//! Зараз працює так:
toggleUserState(users, 'Mango', logger2);
toggleUserState(users, 'Lux', logger2);

//! Повинно працювати так:
toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);




//todo: Завдання-3 (task-3)
//*
//? Перепиши функцію makeTransaction() так, щоб
//? вона не використовувала callback-функції
//? onSuccess і onError,
//? а приймала всього один параметр transaction
//? і повертала проміс.
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;

            if (canProcess) {
                resolve({ id: transaction.id, time: delay });
            } else {
                reject(transaction.id);
            }
        }, delay);
    });
};

const logSuccess = ({id, time}) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

//! Зараз працює так:
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

//! Повинно працювати так:
makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);

//todo: Завдання-1 (task-1)
//* Порівняння кількох промісів
//? Ви маєте набір функцій, які повертають проміси
//? з випадковими затримками.
//? Ваше завдання — виконати всі проміси одночасно
//? за допомогою Promise.all і обробити результати.

//? 🔸 Створіть функцію delayedPromise, яка приймає значення
//?    і затримку (у мілісекундах) і повертає проміс,
//?    який вирішується з заданим значенням після затримки.
//? 🔸 Створіть масив з 5 промісів, використовуючи
//?    функцію delayedPromise, із різними значеннями та затримками.
//? 🔸 Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
//? 🔸 Обробіть результати вирішення промісів та виведіть їх у консоль.
//! Код виконаного завдання
const delayedPromise = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  delayedPromise('Перший', 1000),
  delayedPromise('Другий', 3000),
  delayedPromise('Третій', 1500),
  delayedPromise('Четвертий', 500),
  delayedPromise("П'ятий", 2000),
];

Promise.all(promises)
  .then((results) => {
    console.log('Усі проміси виконані:');
    console.log(results); 
  })
  .catch((error) => {
    console.error('Один із промісів завершився з помилкою:', error);
  });

//todo: Завдання-2 (task-2)
//* Змагання промісів
//? Ви маєте набір функцій, які повертають проміси
//? з випадковими затримками.
//? Ваше завдання — виконати всі проміси одночасно
//? за допомогою Promise.race
//? і отримати результат найшвидшого проміса.

//? 🔸 Створіть функцію randomDelay, яка приймає значення
//?    і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
//? 🔸 Створіть масив з 5 промісів, використовуючи функцію
//?    randomDelay, із різними значеннями.
//? 🔸 Використайте Promise.race, щоб виконати всі проміси з масиву
//?    і отримати результат найшвидшого проміса.
//? 🔸 Обробіть результат найшвидшого проміса та виведіть його у консоль.
//! Код виконаного завдання
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomDelay = (value) => {
  const delay = getRandomNumber(1000, 5000);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ value, delay });
    }, delay);
  });
};

const racingPromises = [
  randomDelay('Участник 1'),
  randomDelay('Участник 2'),
  randomDelay('Участник 3'),
  randomDelay('Участник 4'),
  randomDelay('Участник 5'),
];

Promise.race(racingPromises)
  .then((winner) => {
    console.log(`Переможець: ${winner.value} (затримка: ${winner.delay}ms)`);
  })
  .catch((error) => {
    console.error('Найшвидший проміс завершився з помилкою:', error);
  });