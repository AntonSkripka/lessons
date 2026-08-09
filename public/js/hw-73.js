const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const key = document.querySelector("#key");
const keyPr = document.querySelector("#keyPr");
const currentKeyIndex = document.querySelector("#curr");
const newGame = document.querySelector("#newGame");
let currentKeyNum;

const updateRan = () => {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    key.textContent = `${randomKey}`;
}

const updateNum = (Num) => currentKeyIndex.textContent = `${Num}`;

function init() {
    currentKeyNum = 0;
    updateNum(currentKeyNum);
    updateRan();
    keyPr.textContent = ``;
};

init();

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === key.textContent) {
        currentKeyNum++;
        updateNum(currentKeyNum);
        window.PNotify.alert({
            title: 'Все добре!',
            text: 'Правильна клавіша',
            type: 'success',
            delay: 500
        })
    } else {
        window.PNotify.alert({
            title: 'Помилка!',
            text: 'Неправильна клавіша',
            type: 'error',
            delay: 500
        })
    }
    keyPr.textContent = `${e.key}`;
    updateRan();
});

newGame.addEventListener("click", () => init())

const ctx = document.querySelector("#sales-chart").getContext('2d');
const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const salesChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }});
