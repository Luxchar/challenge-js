function bloodySunday(date) {
    var now = new Date(date.getFullYear(), date.getMonth(), 0);
    var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = days[end.getDay()-2];
    for(let i = 0; i < 6 ; i++){ 
        let today = days[now.getDay()-1];
        if(now.getDate() === end.getDate()){
            return today
        }
        now.setHours(-24)    
    }
    return today
}

// console.log(bloodySunday(new Date('0001-01-01')))