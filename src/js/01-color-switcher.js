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

// let IDACTION = null;


const windowEl = {
  body: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};
// раз на секунду змінює колір фону <body> на випадкове значення. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
changeState(false);
class Generator { 
  constructor({target, toggleActivity = false}) { 
    this.target = target;
    this.toggleActivity = toggleActivity;
    this.idAction = null;
    this.isActive = false;
  }
  getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  start() { 

    if (this.isActive) { 
      return;
    };

    this.isActive = true;
    this.toggleActivity(this.isActive);
    this.idAction = setInterval(() => {
      this.target.style.backgroundColor = this.getRandomHexColor();
    }, 1500);

  }
  stop() { 
    this.isActive = false;
    this.toggleActivity(this.isActive);
    clearInterval(this.idAction);
  }

};
const generator = new Generator({target: windowEl.body, toggleActivity: changeState});

windowEl.startButton.addEventListener('click', generator.start.bind(generator));
windowEl.stopButton.addEventListener('click', generator.stop.bind(generator));
 
function changeState(state) { 

  if (state) { 
    windowEl.startButton.disabled = true;
    windowEl.stopButton.disabled = false;
  } else {
    windowEl.startButton.disabled = false;
    windowEl.stopButton.disabled = true;
  }
};

