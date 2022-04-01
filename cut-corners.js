function round(nb) {
    let negative = false
    if (nb < 0){
        negative = true
        nb *= -1
    }
    let under = false
    if (nb % 1 === 0) {
        return nb
    } else if (nb % 1 > 0.5) {
        under = true
    }

    let result = nb - (nb % 1)

    if ((nb % 1 >= 0.5 && nb % 1 <= 0.6) && !under && !negative) {
        return result + 1
    }
    return under ? negative ? (result * -1) - 1 : result + 1 : negative ? (result * -1) : result
}

function ceil(nb) {
    if (nb % 1 === 0) {
        return nb
    }

    let negative = false
    if (nb < 0) {
        negative = true
        nb *= -1
    }

    return nb % 1 >= 0.5 ? negative ? (round(nb) * -1) + 1 : round(nb) : negative ? round(nb) * -1 : round(nb) + 1
}

function floor(nb){
    let negative = false
    if (nb % 1 === 0) {
        return nb
    }

    if (nb < 0) {
        negative = true
        nb *= -1
    }

    return nb % 1 >= 0.5 ? negative ? (round(nb) * -1) + 1 : round(nb)-1 : negative ? round(nb) * -1 : round(nb)
}

function trunc(nb){
    if (nb % 1 === 0) {
        return nb
    }

    return nb <= 0 ? nb * -1 % 1 > 0.5 ? round(nb) + 1 : round(nb) : nb % 1 >= 0.5 ? round(nb) - 1 : round(nb)
}