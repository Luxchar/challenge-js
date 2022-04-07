function bloodySunday(date) {
    var now = new Date(date.getFullYear(), date.getMonth(), 0);
    var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var count = 0
    for(let i = 0; i < 31 ; i++){ 
        if(now.getDay() === end.getDay()){
            return days[6-count]
        }
        now.setHours(-24)
        if (count === 6) {
            count = 0
        }
        count++;    
    }
}

// console.log(bloodySunday(new Date('0001-01-01')))
// console.log(bloodySunday(new Date('0001-01-06')))