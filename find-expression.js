function findExpression(nb, res = 1, seq = "", second = false) {
    console.log(seq)
    if (res === nb) {
        return '1 ' + seq.substring(0, seq.length - 1)
    }
    if (res < nb && second === true) {
        return findExpression(nb, res*=parseInt(mul2[1]), seq+=mul2+' ', second) || findExpression(nb, res+=parseInt(add4[1]), seq+=add4+' ', second) || undefined;
    }
    if (res < nb) {
        return findExpression(nb, res+=parseInt(add4[1]), seq+=add4+' ', second) || findExpression(nb, res*=parseInt(mul2[1]), seq+=mul2+' ', second) || findExpression(nb, res=1, seq="", true);
    }
}