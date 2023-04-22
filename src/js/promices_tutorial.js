// "use strict"
const promise = new Promise((success, error) => { 
  const randChoise = Math.random() > 0.5;

  setTimeout(() => { 
      
    if (randChoise) {
      success('Your choise is correct. Congratulations!')
    }
    error('Your choise is wrong. You will be burned!')
  }, 2000)

});
console.log(promise)
// then(onSuccess, onFailure)
// планування, відкладені виклики функцій які знаходяться в then()
promise.then(res => console.log(res), err => console.log(err));
// по цепочкі можна викликати скільки завгодно then() але вони працюватимуть тільки тоді,
// коли з попереднього then() ми повернемо якісь дані:
// promise.then(() => { return 'hello' }).then((val) => { return val + 'world' }).then((val) => { console.log(val + '!') }) ==> 'Hello world !'

const makeOrder = dish => { 
    const DELAY = 1000;
    return new Promise((resolve, reject) => { 
        const passed = Math.random() > 0.5;

        setTimeout(() => {
            if (passed) {
                resolve(`Your order is ${dish} it will be ready in 10 minutes.`)
            }
            reject('Sorry we can`t fulfill your order ( *__*,) ')
        }, DELAY);
    })
}

makeOrder('CheaseKake')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// fetch(data) повертає проміс

let pokemonNumber = 0;

const fetchPokemonById = id => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());
};


// const pokemonShowId = setInterval(() => {
//     console.log(pokemonNumber);
//         pokemonNumber += 1;
//     fetchPokemonById(pokemonNumber)
//         .then(pokemon => console.log(pokemon.name, ':', pokemon))
//         .catch((err) => {
//             console.log('Error in the block catch: ', err);
//         });
//     if (pokemonNumber > 10) {
//         clearInterval(pokemonShowId)
//     }
//         }, 1000);

// ###############################################################
// ###############################################################

const horses = [
    'Secretar',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Dragon',
    'Donkey',
    'Seabiscuit',
];

console.log("Забіг почався, ставки не приймаються!")

const promises = horses.map(horse => run(horse));
console.log(promises);

Promise.race(promises).then(({ horse, time }) => console.log(horse,'is the winner!! His time', ' : ==', time));
Promise.all(promises).then(x => console.log(x));

function run(horse) { 
    return new Promise(resolve => {

        const time = getRandomTime(2000, 3500);
        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
};
// run('Star').then((res) => console.log(res)).catch((err) => console.log(err));


function getRandomTime(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// #######################################################
console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received', backendData);
//     }, 2000)

// }, 2000);

const serverPromise = new Promise((resolve, reject) => {
    setTimeout(() => { 
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            statusbar: 'working'
        }
        resolve(backendData);
    }, 2000)
});

serverPromise.then(data => {
    // console.log('Promise resolved', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            reject(data);
            // console.log('Data received', data);
        }, 2000)
    })
}).then((updatedData) => { 
    console.log('Data received', updatedData);
    
}).catch(err => { 
    console.error("Error: ", err);
});
