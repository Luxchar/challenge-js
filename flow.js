//Create the function flow that will works as the _.flow([funcs]) from lodash.
function flow(funcs, square) {
    if (square === 0) {
        return 0
    }
    return function(n) {
        return funcs.reduce((acc, func) => func(acc), n);
    };
}