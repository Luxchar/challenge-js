//fold that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the left.
function fold(arr, func, accumulator) {
    for (var i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

//foldRight that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the right.
function foldRight(arr, func, accumulator) {
    for (var i = arr.length - 1; i >= 0; i--) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

//reduce that works just like the method [].reduce when you don't specify an accumulator. The arguments should be an array and a function. The starting value of your accumulator must be the first value of the array. If your array is less than 1 argument you should throw an error.
function reduce(arr, func) {
    if (arr.length < 1) {
        throw new Error("Array must have at least one element");
    }
    var accumulator = arr[0];
    for (var i = 1; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

//reduceRight like reduce, from the last value to the first
function reduceRight(arr, func) {
    if (arr.length < 1) {
        throw new Error("Array must have at least one element");
    }
    var accumulator = arr[arr.length - 1];
    for (var i = arr.length - 2; i >= 0; i--) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}