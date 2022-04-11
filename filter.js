//Create a filter function that takes an array as first argument, a function as second, and that works like the method [].filter
function filter(arr, func) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Create a reject function that takes an array as first argument, a function as second, and that works like the reject function from lodash.
function reject(arr, func) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i],i,arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Create a partition function that takes an array as first argument, a function as second, and that works like the partition function from lodash.
function partition(arr, func) {
    var newArr01,newArr02  = []
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)) {
            newArr01.push(arr[i]);
        } else {
            newArr02.push(arr[i]);
        }
    }
    return newArr01+newArr02;
}