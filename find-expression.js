const add4 = '+4'
const mul2 = '*2'

function findExpression(nb, res = 1) {
    if (res === nb) {
        return res
    }
    if (res < nb) {
        return findExpression(nb, res*=parseInt(mul2.charAt(1))) || findExpression(nb, res+=parseInt(add4.charAt(1))) || undefined ;
    }
}

console.log(findExpression(4))

