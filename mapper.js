//Create a map function that takes an array as first argument, a function as second, and that works like the method .map
function map(arr, func) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}
//Create a flatMap function that takes an array as first argument, a function as second, and that works like the method .flatMap
function flatMap(arr, func) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr = newArr.concat(func(arr[i]));
    }
    return newArr;
}