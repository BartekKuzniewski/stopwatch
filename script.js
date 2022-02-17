const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.history');
const infoIcon = document.querySelector('.fa-question');

const stopwatch = document.querySelector('.stopwatch');
const timeMeasurement = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const modelShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		}
	}, 500);
};

const handleStop = () => {
	timeMeasurement.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		timeMeasurement.style.visibility = 'visible';
		timesArr.push(stopwatch.textContent);
		console.log(timesArr);
	}

    clearStuff()
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleReset = () => {
    timeMeasurement.style.visibility = 'hidden';
    timesArr = [];
    clearStuff()
};

const clearStuff = () => {
	clearInterval(countTime);
	stopwatch.textContent = `0:00`;
    timeList.textContent = ''
	seconds = 0;
	minutes = 0;
};

const showArchive = () => {
    let i = 1;
    timesArr.forEach( time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${i}: <span>${time}</span>`
        timeList.appendChild(newTime);
        i++
    })
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
archiveBtn.addEventListener('click', showArchive);