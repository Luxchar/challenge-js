function dayOfTheYear(date) {
    var now = new Date(date.getFullYear(),date.getMonth(),date.getDay());
    var start = new Date(date.getFullYear(),0,2);
    var diff = now-start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day
}