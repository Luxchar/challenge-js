function countLeapYears(date) {
   let cnt = 0;
   const start = date.getFullYear();
   for (let i = start; i > 0; i--) {
        if (isLeapYear(i)) {
            cnt++
        }
    }
    return cnt
}

function isLeapYear(year) {
    return year.getFullYear() % 4 === 0 && year.getFullYear() % 100 !== 0 || year.getFullYear() % 400 === 0;
}