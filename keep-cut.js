function cutFirst(str) {
    let result = ''
    for (let i = 2; i < str.length; i++) {
        result += str[i]
    }
    return result
}

function cutLast(str) {
    let result = ''
    for (let i = 0; i < str.length - 2; i++) {
        result += str[i]
    }
    return result
}

function cutFirstLast(str) {
    let result = ''
    for (let i = 2; i < str.length - 2; i++) {
        result += str[i]
    }
    return result
}

function keepFirst(str) {
    return str.slice(0, 2)
}

function keepLast(str) {
    return str.slice(-2)
}

function keepFirstLast(str) {
    let result = ''
    if (str.length > 3) {
        result += str.slice(0, 2)
        result += str.slice(-2)
    } else {
        return str
    }

    return result
}
