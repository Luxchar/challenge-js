function dayOfTheYear(date) {
    var now = new Date(date.getFullYear(),date.getMonth(),date.getDay());
    var start = new Date(now.getFullYear(), 0, 0);
    console.log(now,start)
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day
}