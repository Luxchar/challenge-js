function findExpression(nb, res = 1, seq ='') {
    if (res === nb) {
        return '1 '+seq;
    }
    if (res < nb) {
        return findExpression(nb, res*=parseInt(mul2[1]), seq+=mul2,' ') || findExpression(nb, res+=parseInt(add4[1]), seq+=add4,' ') || undefined ;
    }
}