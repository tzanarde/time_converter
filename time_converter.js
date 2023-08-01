const time_unities = { year: 31536000,
                       day: 86400,
                       hour: 3600,
                       minute: 60,
                       second: 1 }

function convert(seconds) {
    let converted_time = '';
    let time_object = null;
    for (const unit in time_unities) {
        time_object = convertTimeUnit(time_unities[unit], unit, seconds);
        console.log(time_object);
        if (time_object.amount > 0) {
            converted_time += time_object.amount + ' ' + time_object.unit + ', ';
        }
        seconds = time_object.remainingSeconds;
    }
    return formatText(converted_time);
}

function convertTimeUnit(unit_value, unit, seconds) {
    if ((seconds > 0) && (seconds >= unit_value)) {
        return { amount: Math.floor(seconds / unit_value),
                 remainingSeconds: seconds % unit_value,
                 unit: unit + (Math.floor(seconds / unit_value) > 1 ? 's' : '') };
    } else {
        return { amount: 0,
                 remainingSeconds: seconds,
                 unit: '' };
    }
}

function formatText(converted_time) {
    converted_time = converted_time.substring(0, converted_time.length - 2);
    let last_comma = converted_time.lastIndexOf(', ');
    if (last_comma > 0) {
        return converted_time.slice(0, last_comma) + ' and ' + converted_time.slice(last_comma + 1);
    } else {
        return converted_time;
    }
}

let timeConverted = document.getElementById('time');
let secondsToConvertInput = document.getElementById('seconds');
let convertButton = document.getElementById('convert');

convertButton.onclick = function() {
    let secondsToConvert = secondsToConvertInput.value;
    timeConverted.innerHTML = convert(secondsToConvert);
};
