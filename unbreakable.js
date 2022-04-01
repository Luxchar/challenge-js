function split(str, limiter) {
    let arr = []
    for (let i = 0; i < str.length - limiter.length+1; i++) {
        if (str.substring(i,i+limiter.length) == limiter) {
            arr.push(str.substring(0, i))
            str = str.slice(i + limiter.length)
            i = 0
        }
    }
    arr.push(str)
    return arr
}

function join(arr,delimiter = ",") {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (delimiter.length === 0) {
            res += arr[i] 
        } else {
            res += arr[i]+ delimiter
        }
    }
    res = res.substring(0, res.length - delimiter.length) //character at the end prints 2 times
    return res;
}