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