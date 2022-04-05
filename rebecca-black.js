function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}

function isLeapYear(year) {
    return year.getFullYear() % 4 === 0 && year.getFullYear() % 100 !== 0 || year.getFullYear() % 400 === 0;
}

function isLastDayOfMonth(date) {
    return date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}