import * as BSN from 'bootstrap.native';

// const refs = {
//     modal: document.querySelector('#staticBackdrop'),
// }
// const modalWindow = new BSN.Modal('#staticBackdrop');

// refs.modal.addEventListener('hidden.bs.modal', () => {
//     console.log('We are closing modal window');
// })

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// setTimeout(() => {
//     console.log('Open modal window');
//     modalWindow.show();

// })


console.log('Modal window');
// (function, timer)

const timeDelay = Math.random() * 4000;
let counter = 0;


const alertMessage = setTimeout((time) =>
    console.log(`second column of code called after ${time} miliseccond!!!`), timeDelay, timeDelay);

if (timeDelay > 2500) {
    console.log('Waiting too long for a response from the server.')
    clearTimeout(alertMessage);
} else { 

    const connection = setInterval(() => {

        counter += 1;
        if (counter === 10) {

            console.log('Connection completed... Bye)')
            clearInterval(connection)
        } else { 

            console.log('Active connection...', Date.now());
            console.log(counter);
        }

    }, timeDelay);
    // ##############################################################


}
console.log("third column of code");

// #########################################
// const fetchUserFromServer = username => {
//     return new Promise((res, rej) => {
//         console.log(`Fetching data for ${username}`)
//         setTimeout(() => {
//             const isSucces = true;

//             if (isSucces) {
//                 res("Success Value");
//             } else {
//                 rej('Error');
//             }
//         }, 2000);
//     });
// };
// fetchUserFromServer('Anrii')
//     .then((user) => { console.log(user) })
//     .catch((err) => { console.log(err) });

// #########################################

// function promise(worker, speed) {

// return (
//     new Promise((res, rej) => {
//         try {

//             if (worker) {

//                 res(`Observation of the worker: ${worker}`, {worker, speed});
//             } else {
//                 rej(`Worker died ${worker}`);
//             }

//         } catch (error) {

//             rej("Worker is not defined!!")
//         }
// })
//     )
// };
// const slave = true;
// const slaveSpeed = Math.random() * 2000;

// promise(slave, timeDelay)
//     .then((comment, obj) => console.log(val))
//     .catch(err => console.log(err));
