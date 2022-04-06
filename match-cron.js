function matchCron(cron, date) { //reminder: put == because === doesn't match (not same type)
    let arr = cron.split(' ')
    let minute = arr[0]
    let hour = arr[1]
    let dayMonth = arr[2]
    let month = arr[3]
    let dayWeek = arr[4]
    if(minute === '*'|| minute == date.getMinutes()){
        {}
    }else{
        return false
    }
    console.log(date.getHours())
    console.log(hour)
    if(hour === '*'|| hour == date.getHours()){
        {}
    }else{
        return false
    }
    if(dayMonth === '*'|| dayMonth == date.getDate()){
        {}
    }else{
        return false
    }

    if(month === '*'|| month == date.getMonth()+1){ //+1 because month is 0-11
        {}
    }else{
        return false
    }

    if(dayWeek === '*'|| dayWeek.getDate() === 0 && dayWeek === 7 || Number(dayWeek) === date.getDay()){
        {}
    }else{
        return false
    }
    return true
}