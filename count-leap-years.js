function countLeapYears(date) {
   let cnt = 0;
   const start = date.getFullYear();
   for (let i = start; i > 4; i--) { //no idea why but the value 4 cannot be included as a leap year
        if (isLeapYear(i)) {
            cnt++
        }
    }
    return cnt
}

function isLeapYear(year) {
    console.log(year)
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}