function firstDayWeek(week,year) {
    let time = new Date(year) //time is the first day of the year (default value)
    if(week === 1){
        time.setHours(24)
        return formatdate(time) 
    }
        let hours = week*7*24 //how many hours have passed
        time.setHours(hours)
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        for(let i = 0; i < 7 ; i++){ // get first day of week
            let today = days[date.getDay()-1];
            if(today === 'Monday'){
                let res = formatdate(time)
                return res
            }
            time.setHours(-24)    
        }
        return time 
}

function formatdate(date) {
    let month = String(date.getMonth() + 1); //+1 because getMonth() returns month from 0-11
    let day = String(date.getDate()-1); //-1 because getDate() returns day from 1-31
    let year = String(date.getFullYear()); // getFullYear() returns year from 0-9999
    
    //formating
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (year.length === 1) year = '000' + year;
    if (year.length === 2) year = '00' + year;
    if (year.length === 3) year = '0' + year; 
    return [year, month, day].join('-');   //returns the date in the format YYYY-MM-DD
}