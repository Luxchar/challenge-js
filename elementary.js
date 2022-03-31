function multiply(x, y) {
    let result = 0;
    for (let i = 0; i < y; i++) {
        result += x;
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
    q = x / y;  //finding quotient (integer part only)
    p = q * y;  //finding product
    return x - p;  //finding modulus
}