function dayOfTheYear(date) {
    var now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var start = new Date(date.getFullYear(),0,0);
    var diff = now-start;
    var oneDay = 1000 * 3600 * 24;
    var day = Math.floor(diff / oneDay);
    return day
}