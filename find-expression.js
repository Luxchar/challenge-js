function findExpression(nb, res = 1) {
    if (res === nb) {
        return res
    }
    if (res < nb) {
        return findExpression(nb, res*=mul2[1]) || findExpression(nb, res+=add4[1]) || undefined ;
    }
}

