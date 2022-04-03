function findExpression(nb, res = 1) {
    if (res === nb) {
        return res
    }
    if (res < nb) {
        return findExpression(nb, res*=2) || findExpression(nb, res+=4) || undefined ;
    }
}

