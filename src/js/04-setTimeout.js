
const NOTIFICATION_DELAY = 3000;
let timeoutId;

const refs = {
    notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();
/*
Функції
*/
function onNotificationClick() { 
    hideNotification();
    clearInterval(timeoutId);
}

function showNotification() { 
    refs.notification.classList.add('is-visible');

    timeoutId = setTimeout(() => { 
        console.log('Закриваємо alert автоматично.');
        hideNotification();
    }, NOTIFICATION_DELAY);
};

function hideNotification() { 
    refs.notification.classList.remove('is-visible');
}

