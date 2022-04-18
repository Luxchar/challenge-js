function pick(obj, data) {
    let res = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (Array.isArray(data)) {
            if (data.includes(key)) {
                res[key] = obj[key]
            }
        }
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
        if (Array.isArray(data)) {
            console.log(data.includes(key))
            if (data.includes(key) == false) {
                res[key] = obj[key]
            }
        } else {
            if (key != data) {
                res[key] = obj[key]
            }
        }
    })
    return res
}