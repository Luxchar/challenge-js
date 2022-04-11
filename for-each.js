//Create a forEach function that takes an array as first argument, a function as second, and that works like the method .forEach
function forEach(arr, func) {
    let res = []
    for (var i = 0; i < arr.length; i++) {
        res.push(func(arr[i],i,arr));
    }
    return res
}