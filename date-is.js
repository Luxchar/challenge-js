function isValid(date) {
    if (isNaN(date) || date === "") {
        return false
    }
    return true
}

function isAfter(date01,date02) {
    if(date01 > date02)
    {
        return true
    }
    return false
}

function isBefore(date01,date02) {
    if(date01 < date02)
    {
        return true
    }
    return false
}

function isFuture(date) {
    if(date > Date.now())
    {
        return true
    }
    return false
}
function isPast(date) {
    if(date < Date.now())
    {
        return true
    }
    return false
}