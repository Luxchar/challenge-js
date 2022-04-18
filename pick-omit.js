function pick(obj, data) {
    const newobj = {}
    let objkeys = Object.keys(obj)
    objkeys.forEach(key => {
        if (key == data) {
            newobj[key] = obj[key]
        }
    })
    return newobj
}
function omit(obj, data) {
    const newobj = {}
    let objkeys = Object.keys(obj)
    objkeys.forEach(key => {
        if (key != data) {
            newobj[key] = obj[key]
        }
    })
    return newobj
}