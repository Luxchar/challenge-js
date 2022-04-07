function dayOfTheYear(date) {
    var now = new Date(date.getFullYear(),date.getMonth(),date.getDay());
    var start = new Date(date.getFullYear(),0,0);
    var diff = now-start;
    var oneDay = 1000 * 3600 * 24;
    var day = Math.floor(diff / oneDay);
    return day
}

// console.log(dayOfTheYear(new Date('1664-08-09')))
// console.log(dayOfTheYear(new Date('0001-01-01')))