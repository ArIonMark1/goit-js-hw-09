/*
    HTML містить кнопки «Start» і «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, 
використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

!!!УВАГА!!!
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, 
щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/
// ############################################

let IDACTION = null;

const generator = {
  body: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),

  getRandomHexColor: function () {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  },
};
// раз на секунду змінює колір фону <body> на випадкове значення. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

generator.startButton.addEventListener('click', startGenerator);
generator.stopButton.addEventListener('click', stopGenerator);

function startGenerator() { 
  let i = 1;
  IDACTION = setInterval(() => {
    generator.body.style.backgroundColor = generator.getRandomHexColor();
    console.log(IDACTION)
  }, 2000)
};

function stopGenerator() { 

  console.log(IDACTION);
  clearInterval(IDACTION);
  
};
