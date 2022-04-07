function bloodySunday(date) {
    var now = new Date('0001-01-01');
    var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let hours = week*7*24 //how many hours have passed
    time.setHours(hours-126) //dont know why but there's a spare week 
    
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i = 0; i < 6 ; i++){ 
        let today = days[now.getDay()-1];
        if(now.getDate() === end.getDate()){
            return today
        }
        now.setHours(-24)    
    }
    return today
}