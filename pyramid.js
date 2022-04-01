function pyramid(str, nb) {
    let res = ""
    for (let i = 1; i <= nb; i++) {
        for (let j = 1; j <= nb - i; j++) { // printing spaces
          res += " ";
        }
        for (let k = 0; k < 2 * i-1 ; k++) { // printing star
          res += str;
        }
        if (i == nb) {
            return res
        }
        res += "\n";
      }
    return res
}

console.log(pyramid('*',5))