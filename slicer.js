function slice(input, start = 0, end = input.length) {
    let res = ''
    let arr = []
    if (start < 0) { //negative handling
        start = -start
        start = input.length - start
    }
    if (end < 0) { //negative handling
        end = -end
        end = input.length - end
    }
    for (let i = start; i <= end; i++) {
        if (i >= start && i < end) {
            if (typeof input == 'string') {
                res += input[i]
            } else if (Array.isArray(input)) {
                arr.push(input[i])
            }
        }
    }
    if (typeof input == 'string') {//str
        return res
    }
    return arr //arr
}