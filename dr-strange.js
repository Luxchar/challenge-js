function addWeek(date) {
    let day01 = new Date('0001-01-01')
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let diff = (((date-day01) / (60 * 60 * 24 * 1000))/7) %2 //diff is the number of weeks
    if(diff%2===0 || diff === 0){
        return days[date.getDay()];
    }
    else {
        return 'second'+days[date.getDay()];
    }
}

function timeTravel({date,hour,minute,second}){
    date.setHours(hour),date.setMinutes(minute),date.setSeconds(second) //functions built in for changing date
    return date
 }