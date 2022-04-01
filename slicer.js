function slice(array, start = 0, end = array.length) {
    let res = ''
    let arr = []
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i >= start && i < end) {
            if (typeof arr == 'string') {
                res += arr[i]
            } else if (Array.isArray(arr)) {
                arr.push(arr[i])
            }
        }
    }
    if (typeof arr == 'string') {
        return res
    }
    return arr 
}