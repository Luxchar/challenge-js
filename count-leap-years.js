function countLeapYears(date) {
   let cnt = 0;
   for (let i = 0; i < date.getFullYear(); i++) {
        if (isLeapYear(new Date(i))) {
            cnt++
        }
    }
    return cnt
}

function isLeapYear(year) {
    return year.getFullYear() % 4 === 0 && year.getFullYear() % 100 !== 0 || year.getFullYear() % 400 === 0;
}