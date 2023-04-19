import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
// import 'flatpickr/dist/flatpickr.min.css';

let intervalId = null;
let isButtonDisabled = true;
let targetTime = 0;

const windowEls = {
    inputField: document.getElementById('datetime-picker'),
    buttonEl: document.querySelector('button[data-start]'),

    daysEl: document.querySelector('span[data-days]'),
    hoursEl: document.querySelector('span[data-hours]'),
    minutesEl: document.querySelector('span[data-minutes]'),
    secondsEl: document.querySelector('span[data-seconds]'),
};
windowEls.buttonEl.disabled = isButtonDisabled;
// ********************************************************
// const Timer { 
//     conc
// }
const options = {
    enableTime: true,
    time_24hr: true,
    altInput: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        targetTime = selectedDates[0].getTime();

        const checker = controlRangeDate(targetTime); 
        if (checker) { 
            windowEls.buttonEl.disabled = isButtonDisabled;

            const timeFormated = convertMs(targetTime - Date.now());
            addTimeToWindow(timeFormated)
        }  
    },
};
const data = flatpickr(windowEls.inputField, options)

// ********************************************************

function controlRangeDate(targetTime) { 
    if (targetTime < Date.now()) {

        Notiflix.Notify.failure('Невірно заданий час, задайте дату у майбутньому.');
        Notiflix.Notify.failure('Please choose a date in the future');
        isButtonDisabled = true;
        return false;
            
    } else { 

        Notiflix.Notify.success('Все вірно, можете запускати відлік до закінчення акції.');
        isButtonDisabled = false;
        return true;

    }
};

// **************************************************************

function convertMs(ms) {
    // Number of milliseconds per unit of time
    //return object with time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) { 
    return String(value).padStart(2, '0');
};

function addTimeToWindow({ days, hours, minutes, seconds }) { 
    windowEls.daysEl.textContent = `${addLeadingZero(days)}`
    windowEls.hoursEl.textContent = `${addLeadingZero(hours)}`
    windowEls.minutesEl.textContent = `${addLeadingZero(minutes)}`
    windowEls.secondsEl.textContent = `${addLeadingZero(seconds)}`
};
// **************************************************************


function countdown() { 
    if (!isButtonDisabled && intervalId) { 
        return;
    }
    intervalId = setInterval(() => { 

        const startTime = Date.now();
        if (startTime >= targetTime ) { 
                    
            Notiflix.Notify.failure('Любі друзі, Цей час настав.. акція закінчилась.');
            clearInterval(intervalId);
            isButtonDisabled = true;
            return;
        }; 
        
        console.log(targetTime - startTime)
        const timeFormated = convertMs(targetTime - startTime);
        addTimeToWindow(timeFormated)

    }, 1000)

}
windowEls.buttonEl.addEventListener('click', countdown);