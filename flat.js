function flat(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
            for (let j = 0; j < arr[i].length; j++) {
                res.push(arr[i][j]) 
            }
        } else {
            res.push(arr[i]) 
        }
    }
    return res;
}

console.log(flat([2,3,5,6,8,[1,2,3,4,5,6,7,8,9,10]]))