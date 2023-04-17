
const refs = {
    startBtn: document.querySelector('button[data-actions-start]'),
    stopBtn: document.querySelector('button[data-actions-stop]'),
    clockface: document.querySelector('.js-clockface'),
}

class Timer { 
    constructor({ onTick }) { 
        
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
        this.init();
    }
    init() { 
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    pad(value) { 
    return String(value).padStart(2, '0');
    }
    getTimeComponents(time) { 
    const hours = this.pad( Math.floor((time % (1000 * 60 * 60 *24 )) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
    }
    start() { 
        if (this.isActive) { 
            return;
        };
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => { 

            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);

            this.onTick(time)
        }, 1000);
    }
    stop() { 
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }
};

const timer = new Timer({
    onTick: updateClockface
});

function updateClockface({ hours, mins, secs }) { 
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
// ###############################################
refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
// ###############################################


 
