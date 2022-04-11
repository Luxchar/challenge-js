// every that returns true if every element of the array respects the condition of the received function and false otherwise.
function every(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}
// some that returns true if at least one element of the array respects the condition of the received function and false otherwise.
function some(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

// none that returns true if none of the elements of the array respects the condition of the received function and false otherwise.
function none(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}