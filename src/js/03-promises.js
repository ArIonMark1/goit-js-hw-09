import Notiflix from 'notiflix';

const comandInputs = {
  form: document.querySelector('.form'),
}
  const promisesArray = [];
// ######################################################
comandInputs.form.addEventListener('submit', getFormData);
// ######################################################

function getFormData(evt) { 
  // 1 після підтвердження форми отримуємо її дані
  evt.preventDefault();
  // ******************
  const { delay , step, amount } = evt.currentTarget;

  //const promise = createPromise(delay) // ****
  const promisesArray = new Array(Number(amount.value))
    .fill()
    .map((val, index) => {

      const position = index + 1;
      const promiseDelay = Number(delay.value) + index * Number(step.value);
      // console.log('position: ', position, 'promiseDelay', promiseDelay)
      return createPromise(position, promiseDelay);
    });
  
  console.log(promisesArray)
  Promise.all(promisesArray).then(({position, delay}) => console.log('Value from then(): ', position, delay));
  // callPromises(promisesArray);
};

// 2 пишемо функцію яка отримуватиме параметр 'delay' та поверне проміс через вказаний проміжок часу
function createPromise(position, delay) { 
 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      const shouldResolve = Math.random() > 0.3;

      if (!shouldResolve) { 
        reject({position, delay});
      }
      resolve({position, delay});
    }, delay)
  })
};

function callPromises(promises) {
//   // 3 викликаємо функцію яка створює проміси в тій кількості, яку ми задали в полі 'amount'
  Promise.all(promises).then((val) => console.log('Value from then(): ', val)).catch((err) => console.log(err));
    //   createPromise(i, delay)
  //     .then(({ position, delay }) => { console.log(`✅ Fulfilled promise ${position} in ${delay}ms`) })
  //     .catch(({ position, delay }) => { console.log(`❌ Rejected promise ${position} in ${delay}ms`) })
  // };
}

// 1 після підтвердження форми отримуємо її дані
// 2 пишемо функцію яка отримуватиме параметр 'delay' та поверне проміс через вказаний проміжок часу
// 3 викликаємо функцію яка створює проміси в тій кількості, яку ми задали в полі 'amount'
// 4 при створені промісів кожен наступний проміс створюється через вказаний проміжок часу + заданий крок(step)
// 5 якщо умова вірна у функції виклику то повертаємо успішний проміс

/*
  HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах, 
  крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>

Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. 
Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), 
введену користувачем, і крок (step).

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. 
Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. 
Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

Бібліотека повідомлень
УВАГА
Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

Для відображення повідомлень користувачеві, замість console.log(), використовуй бібліотеку notiflix.
*/
