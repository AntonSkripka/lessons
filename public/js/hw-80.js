//todo: Завдання-1 (task-1)
//* Завдання: "Таймер зворотного відліку від майбутньої дати".
//? Створи плагін налаштовуваного таймера, який веде зворотний відлік
//? до попередньо визначеної дати.
//? Такий плагін може використовуватися в блогах і інтернет-магазинах
//? та на сторінках реєстрації подій, під час технічного обслуговування і т. д.

//? HTML-розмітка має інпут для введення майбутньої дати:
//! <label class="input-label">
//!     Введіть майбутню дату<i>(більше від сьогоднішньої дати на 1 день)</i> :
//!     <input id="target-date" type="datetime-local">
//! </label>

//? Плагін очікує наступну HTML-розмітку і показує чотири цифри:
//? дні,
//? години,
//? хвилини
//? секунди
//? в форматі XX:XX:XX:XX.
//? Кількість днів може складатися з більш ніж двох цифр.
// ! <div class="timer" id="timer-1">
// !    <div class="field">
// !        <span class="label">Days</span>
// !        <span class="value" data-value="days">--</span>
// !
// !    </div>
// !    <div class="field">
// !        <span class="label">Hours</span>
// !        <span class="value" data-value="hours">--</span>
// !    </div>
// !    <div class="field">
// !        <span class="label">Minutes</span>
// !        <span class="value" data-value="mins">--</span>
// !    </div>
// !    <div class="field">
// !        <span class="label">Seconds</span>
// !        <span class="value" data-value="secs">--</span>
// !
// !    </div>
// ! </div>

//? Плагін — це клас CountdownTimer,
//? екземпляр якого створює новий таймер з налаштуваннями:
//! new CountdownTimer({
//!     selector: '#timer-1',
//!     targetDate: new Date('Jul 17, 2019'),
//! });

//? Для підрахунку значень використовуй такі готові формули,
//? де time — різниця між targetDate і поточною датою nowDate:

const button = document.getElementById("start-timer");
const input = document.getElementById("target-date");
const errorOutput = document.getElementById('error-message');

const oneDayInMs = 24 * 60 * 60 * 1000;
const minDate = new Date(Date.now() + oneDayInMs);

const minDateISO = new Date(minDate.getTime() - minDate.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

input.min = minDateISO;

function validateInput() {
    errorOutput.textContent = '';

    if (!input.checkValidity()) {
        errorOutput.textContent = input.validationMessage;
        return false;
    }

    const selectedDate = new Date(input.value);
    const milliseconds = selectedDate.getTime();

    const maxAllowedYear = 2026;
    if (selectedDate.getFullYear() > maxAllowedYear) {
        errorOutput.textContent = `Рік не може бути більше ${maxAllowedYear}-го.`;
        return false;
    }

    return milliseconds;
}

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};

let timerId = null;

const BUTTON_TEXT = {
    START: 'Start timer',
    STOP: 'Stop timer'
};

button.addEventListener('click', () => {
    if (timerId !== null) {
        stopTimer();
        return;
    }

    const targetTime = validateInput();

    if (targetTime) {
        button.textContent = BUTTON_TEXT.STOP;
        input.disabled = true;

        tick(targetTime);

        timerId = setInterval(() => tick(targetTime), 1000);
    }
});

function tick(targetTime) {
    const currentTime = Date.now();
    const time = targetTime - currentTime;

    if (time <= 0) {
        stopTimer();
        alert("Час вийшов!");
        return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    updateTimerInterface(days, hours, mins, secs);
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;

    button.textContent = BUTTON_TEXT.START;
    input.disabled = false;

    updateTimerInterface(0, 0, 0, 0);
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function updateTimerInterface(days, hours, mins, secs) {
    refs.days.textContent = pad(days);
    refs.hours.textContent = pad(hours);
    refs.mins.textContent = pad(mins);
    refs.secs.textContent = pad(secs);
}

input.addEventListener('input', () => {
    if (input.checkValidity()) {
        errorOutput.textContent = '';
    }
});