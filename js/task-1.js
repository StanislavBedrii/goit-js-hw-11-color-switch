// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
    };

const bgcolorChange = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;  
        };
        this.isActive = true;
        this.intervalId = setInterval(() => {
        refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
    },
};


refs.btnStart.addEventListener('click', bgcolorChange.start.bind(bgcolorChange));
refs.btnStop.addEventListener('click', bgcolorChange.stop.bind(bgcolorChange));




