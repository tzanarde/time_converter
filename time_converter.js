const YEAR = 31536000;
const DAY = 86400;
const HOUR = 3600;
const MINUTE = 60;

function solution(seconds) {
    let year = numberOf(YEAR, 'year', seconds);
    let day = numberOf(DAY, 'day', year.remainingSeconds);
    let hour = numberOf(HOUR, 'hour', day.remainingSeconds);
    let minute = numberOf(MINUTE, 'minute', hour.remainingSeconds);
    let second = minute.remainingSeconds

    return year.amount + ' ' + year.unit + ' ' +
           day.amount + ' ' + day.unit + ' ' +
           hour.amount + ' ' + hour.unit + ' ' +
           minute.amount + ' ' + minute.unit + ' ' +
           second;
}

function numberOf(unit_value, unit, seconds) {
    if ((seconds > 0) && (seconds >= unit_value)) {
        return { amount: Math.floor(seconds / unit_value),
                 remainingSeconds: seconds % unit_value,
                 unit: unit + (Math.floor(seconds / unit_value) > 1 ? 's' : '') };
    } else {
        return { amount: 0, remainingSeconds: seconds };
    }
}


function separation() {
    if (seconds > 0) {
        return ', ';
    }
}

let timeConverted = document.getElementById('time');
let secondsToConvertInput = document.getElementById('seconds');
let convertButton = document.getElementById('convert');

convertButton.onclick = function() {
    let secondsToConvert = secondsToConvertInput.value;
    timeConverted.innerHTML = solution(secondsToConvert);
};
