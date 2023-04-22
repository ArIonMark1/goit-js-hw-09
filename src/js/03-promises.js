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

  const promisesArray = new Array(Number(amount.value))
    .fill()
    .map((val, index) => {

      const position = index + 1;
      const promiseDelay = Number(delay.value) + index * Number(step.value);

      return createPromise(position, promiseDelay);
      
    });
  
  console.log(promisesArray) // ok

  Promise.all(promisesArray)
    .then((x) => console.log('Value from then(): ', x))
    .catch((err) => console.log(err));
  // callPromises(promisesArray);
};

function createPromise(position, delay) { 
 /*
  2 пишемо функцію яка отримуватиме параметр 'delay' 
  та поверне проміс через вказаний проміжок часу
 */
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

// function callPromises(promises) {
//   // 3 викликаємо функцію яка створює проміси в тій кількості, яку ми задали в полі 'amount'
//   Promise.all(promises)
//     .then((val) => console.log('Value from then(): ', val))
//     .catch((err) => console.log(err));

// }

// 1 після підтвердження форми отримуємо її дані
// 2 пишемо функцію яка отримуватиме параметр 'delay' та поверне проміс через вказаний проміжок часу
// 3 викликаємо функцію яка створює проміси в тій кількості, яку ми задали в полі 'amount'
// 4 при створені промісів кожен наступний проміс створюється через вказаний проміжок часу + заданий крок(step)
// 5 якщо умова вірна у функції виклику то повертаємо успішний проміс
