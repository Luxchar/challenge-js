// _.flow([funcs])

// source npm package

// Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
// Since

// 3.0.0
// Arguments

//     [funcs] (...(Function|Function[])): The functions to invoke.

// Returns

// (Function): Returns the new composite function.
// Example

// function square(n) {
//   return n * n;
// }
 
// var addSquare = _.flow([_.add, square]);
// addSquare(1, 2);
// // => 9
//Create the function flow that will works as the _.flow([funcs]) from lodash.
//handle negative number
function flow(funcs) {
    if (funcs.length === 0) {
        return function(arg) {
        return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function(prev, curr) {
        return function() {
        return prev(curr.apply(null, arguments));
        };
    });
}