// Create a pick function that takes an object and a string or array of strings. This function returns a new object that contains only the key/value pairs, whose key matches with the string or a string in the array, from the object passed as an argument.

// Create a omit function that takes an object and a string or array of strings. This function returns a new object that contains only the key/value pairs, whose key doesn't match with the string or a single string in the array, from the object passed as an argument.

function pick(obj, data) {
    let res = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (key == data) {
            res[key] = obj[key]
        }
    })
    return res
}

function omit(obj, data) {
    let res = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (key != data) {
            res[key] = obj[key]
        }
    })
    return res
}