//todo: Завдання-1 (task-1)
//* Завдання "Таймер інтервалу":
//? Створіть програму, яка виводить повідомлення
//? кожну секунду за допомогою setInterval.
//? Після 5 повідомлень зупиніть виконання
//? інтервалу за допомогою clearInterval.
const timeBetweenCounts = 1000; //! час між відліками
const stopCounter = 5; //! кількість інтервалів до зупинення таймеру

function createInterval() {
    const intervalId = setInterval(() => {
        console.log(`⏱️ Відлік часу в секундах, id: ${intervalId}`);
    }, timeBetweenCounts);

    //! Умова зупинення таймеру:
    setTimeout(() => {
        clearInterval(intervalId);
        console.error(`❌⏱️ Інтервал з ідентифікатором ${intervalId} зупинено!`);
    }, timeBetweenCounts * stopCounter + 10);
};

createInterval();

//todo: Завдання-2 (task-2)
//* Завдання "Анімація елементів":
//? Створіть кілька елементів на сторінці
//? і реалізуйте просту анімацію, змінюючи їх розмір,
//? положення чи стилі через певний інтервал
//? за допомогою setInterval.
const task2Div = document.getElementById("task2");
task2Div.style.height = "200px";
task2Div.style.width = "200px";
task2Div.style.backgroundColor = "red";
task2Div.style.position = "relative";
task2Div.style.transition = "all 0.1s linear";
task2Div.style.marginBottom = "100px"

const timeBetweenCounts2 = 100;
const stopCounter2 = 50;

function createInterval2() {
    let currentStep = 0;

    const intervalId = setInterval(() => {
        currentStep++;

        const currentWidth = 200 + currentStep * 2;
        const currentHeight = 200 + currentStep * 2;
        task2Div.style.width = `${currentWidth}px`;
        task2Div.style.height = `${currentHeight}px`;

        task2Div.style.left = `${currentStep * 3}px`;
        task2Div.style.top = `${currentStep * 1.5}px`;

        task2Div.style.backgroundColor = `hsl(${currentStep * 5}, 100%, 50%)`;

    }, timeBetweenCounts2);

    //! Умова зупинення таймеру:
    setTimeout(() => {
        clearInterval(intervalId);
        task2Div.style.backgroundColor = "green";
    }, timeBetweenCounts2 * stopCounter2 + 10);
};

createInterval2();


//todo: Завдання-3 (task-3)
//* Завдання "Інтерактивна гра":
//? Створіть просту інтерактивну гру,
//? де гравець має натискати на елементи
//? на сторінці протягом певного інтервалу часу,
//? використовуючи setInterval.
//? Реалізуйте лічильник очок та відслідковуйте
//? кількість натисків гравця.
const target = document.getElementById('target');
const gameZone = document.getElementById('game-zone');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

let score = 0;
let timeLeft = 10;
let moveInterval;
let countdownInterval;

function moveTarget() {
    const maxX = gameZone.clientWidth - target.clientWidth;
    const maxY = gameZone.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

startBtn.addEventListener('click', () => {
    score = 0;
    timeLeft = 10;
    scoreEl.textContent = score;
    timerEl.textContent = timeLeft;
    startBtn.disabled = true;
    target.style.display = 'block';

    moveTarget();

    moveInterval = setInterval(moveTarget, 800);
    countdownInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(moveInterval);
            clearInterval(countdownInterval);
            target.style.display = 'none';
            startBtn.disabled = false;

            setTimeout(() => {
                alert(`Гру закінчено! Ваш результат: ${score} очок.`);
            }, 50);
        }
    }, 1000);
});

target.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    moveTarget();
});

//todo: Завдання-4 (task-4)
//* Завдання "Контроль часу": 
//? Створіть програму, яка дозволяє користувачу 
//? встановити певний час (у секундах) за допомогою 
//? введення з клавіатури. 
//? Потім використовуйте setTimeout або setInterval, 
//? щоб після встановленого часу вивести повідомлення.
const secondsInput = document.getElementById('seconds-input');
const timerBtn = document.getElementById('timer-btn');
const countdownDisplay = document.getElementById('countdown-display');

let timerInterval2;

timerBtn.addEventListener('click', () => {
    clearInterval(timerInterval2);
    let seconds = parseInt(secondsInput.value, 10);

    if (isNaN(seconds) || seconds <= 0) {
        alert('Будь ласка, введіть число більше за 0!');
        return;
    }

    countdownDisplay.textContent = `Залишилось: ${seconds} сек`;

    timerInterval2 = setInterval(() => {
        seconds--;

        if (seconds > 0) {
            countdownDisplay.textContent = `Залишилось: ${seconds} сек`;
        } else {
            clearInterval(timerInterval2);
            countdownDisplay.textContent = "Час вийшов! 🔔";

            setTimeout(() => {
                alert('Встановлений вами час закінчився!');
            }, 50);
        }
    }, 1000);
});

// ----

const modeTabs = document.querySelector(".mode-tabs");
const timerInputsBlock = document.querySelector("#timerInputsBlock");
const btnMain = document.querySelector("#btnMain");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const milliseconds = document.querySelector("#milliseconds");
const progressCircle = document.querySelector("#progressCircle");
const inputHours = document.querySelector("#inputHours");
const inputMinutes = document.querySelector("#inputMinutes");
const inputSeconds = document.querySelector("#inputSeconds");
const autoPauseTime = document.querySelector("#autoPauseTime");

let secondsInterval = null;
let timerInterval = null;
let time = 0;
let totalSeconds = 0;
let initialSeconds = 0;

const toggleInputs = (isDisabled) => {
    inputHours.disabled = isDisabled;
    inputMinutes.disabled = isDisabled;
    inputSeconds.disabled = isDisabled;
    autoPauseTime.disabled = isDisabled;
};

modeTabs.addEventListener("click", (e) => {
    const clickedTab = e.target.closest(".tab-btn");
    if (!clickedTab) return;

    modeTabs.querySelectorAll(".tab-btn").forEach(tab => tab.classList.remove("active"));
    
    if (clickedTab.dataset.mode === "stopwatch") {
        clickedTab.classList.add("active");
        timerInputsBlock.classList.add('hidden');
        milliseconds.classList.remove("hidden");
    } else if (clickedTab.dataset.mode === "timer") {
        clickedTab.classList.add("active");
        timerInputsBlock.classList.remove('hidden');
    }
});

btnMain.addEventListener("click", () => {
    btnMain.classList.toggle("paused");

    if (timerInputsBlock.classList.contains("hidden")) {
        if (btnMain.classList.contains("paused")) {
            secondsInterval = setInterval(() => {
                time++;

                let hrs = Math.trunc(time / 360000).toString().padStart(2, '0');
                let mins = Math.trunc((time % 360000) / 6000).toString().padStart(2, '0');
                let secs = Math.trunc((time % 6000) / 100).toString().padStart(2, '0');
                let ms = (time % 100).toString().padStart(2, '0');

                hours.textContent = hrs;
                minutes.textContent = mins;
                seconds.textContent = secs;
                milliseconds.textContent = `.${ms}`;
            }, 10);
        } else {
            clearInterval(secondsInterval);
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
            milliseconds.textContent = ".00";
            time = 0;
        }
    } else {
        if (btnMain.classList.contains("paused")) {
            if (totalSeconds === 0) {
                let inputHrs = parseInt(inputHours.value) || 0;
                let inputMins = parseInt(inputMinutes.value) || 0;
                let inputSecs = parseInt(inputSeconds.value) || 0;
                let autoPauseInput = parseInt(autoPauseTime.value) || 0;
                autoPauseTime.value = autoPauseInput;

                if (inputHrs < 0 || inputMins < 0 || inputSecs < 0 || autoPauseInput < 0) {
                    alert("Значення не можуть бути від'ємними!");
                    btnMain.classList.remove("paused");
                    return;
                }

                if (inputHrs > 24) {
                    alert("Значення годин не може бути більше 24!");
                    btnMain.classList.remove("paused");
                    return;
                }

                totalSeconds = (inputHrs * 3600) + (inputMins * 60) + inputSecs;
                initialSeconds = totalSeconds;

                if (totalSeconds <= 0) {
                    alert("Введіть коректні дані!");
                    btnMain.classList.remove("paused");
                    return;
                }

                if (autoPauseInput * 60 > initialSeconds) {
                    alert("Час автопаузи не може перевищувати довжину!");
                    btnMain.classList.remove("paused");
                    totalSeconds = 0;
                    initialSeconds = 0;
                    return;
                }
            }

            toggleInputs(true);
            milliseconds.classList.add("hidden");

            timerInterval = setInterval(() => {
                totalSeconds--;

                let hrs = Math.trunc(totalSeconds / 3600).toString().padStart(2, '0');
                let mins = Math.trunc((totalSeconds % 3600) / 60).toString().padStart(2, '0');
                let secs = (totalSeconds % 60).toString().padStart(2, '0');

                hours.textContent = hrs;
                minutes.textContent = mins;
                seconds.textContent = secs;

                if (progressCircle) {
                    progressCircle.style.strokeDashoffset = 785.4 - (totalSeconds / initialSeconds) * 785.4;
                }

                let autoPauseInput = parseInt(autoPauseTime.value) || 0;
                if (autoPauseInput > 0) {
                    let secondsPassed = initialSeconds - totalSeconds;
                    if (secondsPassed === autoPauseInput * 60) {
                        clearInterval(timerInterval);
                        btnMain.classList.remove("paused");
                        alert("Таймер автоматично зупинен!");
                        return;
                    }
                }

                if (totalSeconds <= 0) {
                    clearInterval(timerInterval);
                    btnMain.classList.remove("paused");
                    alert("Час закінчився!");
                    totalSeconds = 0;
                    initialSeconds = 0;
                    toggleInputs(false);
                    if (progressCircle) {
                        progressCircle.style.strokeDashoffset = 0;
                    }
                }
            }, 1000);
        } else {
            clearInterval(timerInterval);
        }
    }
});