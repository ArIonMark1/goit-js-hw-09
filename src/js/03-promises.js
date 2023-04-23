import Notiflix from 'notiflix';

const comandInputs = {
  form: document.querySelector('.form'),
}
// ######################################################
comandInputs.form.addEventListener('submit', getFormData);
// ######################################################

function getFormData(evt) { 
  // 1 після підтвердження форми отримуємо її дані
  evt.preventDefault();
  // ******************
  // Активація першого варіанту запуску
  callPromises(evt.currentTarget);
  // ******************
  const { delay, step, amount } = evt.currentTarget
  
  // створюємо масив промісів котрим передаємо їх індекс та тривалість виклику
  const promisesArray = new Array(Number(amount.value))
    .fill()
    .map((val, index) => {

      const position = index + 1;
      const promiseDelay = Number(delay.value) + index * Number(step.value);

      return createPromise(position, promiseDelay);
    });
  
  // callPromisesFromArr(promisesArray);
};
// *************************************************
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
// *************************************************
// Перший варіант запуску Промісів
function callPromises(formElement) {
  // 3 викликаємо функцію яка створює проміси в тій кількості, яку ми задали в полі 'amount'
  const [delay, step, amount] = formElement;
  console.log('=> ', delay.value, step.value, amount.value);

  for (let index = 0; index < Number(amount.value); index++) { 

    const position = index + 1;
    const promiseDelay = Number(delay.value) + index * Number(step.value);

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {

        Notiflix.Notify.success(`Success: ${position} : ${delay}`);
        console.log(`Success: ${position} : ${delay}`);
      })
      .catch(({ position, delay }) => {

        Notiflix.Notify.failure(`Error!: ${position} : ${delay}`);
        console.error(`Error!: ${position} : ${delay}`)
      });
  };

}
// Другий варіант запуску Промісів
function callPromisesFromArr(promiseArr) { 
  promiseArr.forEach(promise => {
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Success: ${position} : ${delay}`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Error!: ${position} : ${delay}`);
      });
    
  });
}
