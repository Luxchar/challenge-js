function slice(input, start = 0, end = input.length-1) {
    let res = ''
    let arr = []
    if (start < 0) {
        start = -start
        start = input.length - start
    }
    if (end < 0) {
        end = -end
        end = input.length - end
    }
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