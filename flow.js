//Create the function flow that will works as the _.flow([funcs]) from lodash.
function flow(funcs) {
    return function(n) {
        return funcs.reduce((acc, func) => func(acc), n);
    };
}