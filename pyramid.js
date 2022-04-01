function pyramid(str, nb) {
    let res = ''
    for (let i = 1; i <= nb; i++) {
        res += ' '.repeat(nb - i).repeat(str.length) //space
        res += str.repeat(i * 2 - 1) //character (str)
        if (i === nb) { //no \n on last row
            return res
        }
        res += '\n'
    }
    return res
}