function bloodySunday(date) {
    var now = new Date(date.getFullYear(), date.getMonth(), 0);
    var end = new Date(date.getFullYear(), date.getMonth(), date.getDay());

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var count = 0
    for(let i = 0; i < 31 ; i++){ 
        if (count > 5) {
            count = 0
        }
        if(now.getDate() === end.getDate()){
            console.log(count)
            return days[count]
        }

        count++
        now.setHours(-24)
    }
}