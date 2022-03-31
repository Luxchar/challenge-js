function multiply(a, b){
    if (b < 0) { //negative handling
        return -multiply(a, -b)
    }
    return ("i").repeat(a).repeat(b).length    
}

function divide(a, b) {
      var sign = 1;
      if (a < 0) {
        a = -a;
        sign = -sign;
      }
      if (b < 0) {
        b = -b;
        sign = -sign;
      }
      var result = 0;
      while (a >= 0) {
        a -= b;
        result++;
      }
      resultcopy = result
      while (sign > 0) {
        result += resultcopy;
        sign-=1
    }
      return result - 1;
}

function modulo(a,b) {
    let negative = false
    if (a < 0) { //negative handling
        a = -a
        negative = true
    }
    if (b < 0) { //negative handling
        b = -b
    }
    let result = a
    let bcopy = b
    while (b < result) { //while we can still divide
        result = result - bcopy //divide
    }
    if (negative) { //negative handling
        return -result
    }
    return result //return rest of the division (modulo)
}