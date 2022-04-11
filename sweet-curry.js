//Create the following functions with the "currying" process:

// mult2 that multiplies two numbers.
// add3 that adds three numbers.
// sub4 that subtracts four numbers.

// Please note that those functions can only have one argument each.

function mult2(num) {
    return function(num2) {
        return num * num2;
    }
}

function add3(num) {
    return function(num2) {
        return function(num3) {
            return num + num2 + num3;
        }
    }
}

function sub4(num) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return num - num2 - num3 - num4;
            }
        }
    }
}