//Create a forEach function that takes an array as first argument, a function as second, and that works like the method .forEach
function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}