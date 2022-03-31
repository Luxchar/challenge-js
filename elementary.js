function multiply(a, b){
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
      return (result - 1) * sign;
}

function modulo(x, y) {
    if(x === 0){
        return 0;
        }
    if(y === 0){
        return NaN;
    }

   var newNum1 = Math.abs(x);
   var newNum2 = Math.abs(y);

   var quot = newNum1 - Math.floor( newNum1 / newNum2 ) * newNum2 ;

   if(x < 0){
         return -(quot);
   }
   else{
         return quot;
   }
}