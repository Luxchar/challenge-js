function split(str, delimiter) {
    let arr = [];
    res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            arr.push(res)
        } else {
            res += str[i]       
        }
    }
    return arr;
}

function join(arr,delimiter = ",") {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
       res += arr[i] + delimiter
    }
    return str;
}