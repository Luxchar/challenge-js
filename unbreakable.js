function split(str, delimiter) {
    arr = [];
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
    res = "";
    for (let i = 0; i < str.length; i++) {
       res += arr[i] + delimiter
    }
    return str;
}