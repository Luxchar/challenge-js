function slice(input, start = 0, end = array.length-1) {
    let res = ''
    let arr = []
    for (let i = start; i <= end; i++) {
            if (typeof input == 'string') {
                res += input[i]
            } else if (Array.isArray(input)) {
                arr.push(input[i])
            }
    }
    if (typeof input == 'string') {
        return res
    }
    return arr 
}