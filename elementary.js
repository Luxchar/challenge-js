function multiply(x, y) {
    let result = 0;
    negative = false;
    if (x < 0) {
        x = -x;
        negative = true;
    }
    for (let i = 0; i < y; i++) {
        result += x;
    }
    if (negative) {
        return -result;
    }
  return result;
}

function divide(x, y) {
    let result = 0;
    for (let i = 0; i < y; i++) {
        result -= x;
    }
  return result;
}

function modulo(x, y) {
    result = x;
    for (let i = 0; i < y; i++) {//finding quotient (integer part only)
        result -= x;
    }
    for (let i = 0; i < result; i++) {//finding product
        result += y;
    }
    return x - result;//finding modulus
}
    // q = x / y;  
    // p = q * y;  
    // return x - p;  