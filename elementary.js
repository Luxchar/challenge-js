function multiply(a, b){
    if (b < 0) { //negative handling
        return -multiply(a, -b)
    }
    if (a < 0) { //negative handling
      return -multiply(-a, b)
    }
    return ("i").repeat(a).repeat(b).length    
}

function divide(a, b) {
  let result = 0
  let negative = false

  if (a < 0 && b < 0) {
      a = multiply(a, -1)
      b = multiply(b, -1)
  } else if (a < 0) {
      negative = true
      a = multiply(a, -1)
  } else if (b < 0) {
      negative = true
      b = multiply(b, -1)
  }

  while (a > 0) {
      a -= b
      if (a < 0) {
          break
      }
      result++
  }

  return negative ? result == 0 ? 0 : multiply(result, -1) : result
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