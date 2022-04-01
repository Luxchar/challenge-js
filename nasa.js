function nasa(n) {
    let res = "" 
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0) {
            res += 'NA '
        } else if (i % 5 === 0) {
            res += 'SA '
        } else if (i % 5 === 0 && i % 3 === 0) {
            res += 'NASA '
        } else {
            res += i+' '
        }
    }
    res = res.slice(0, res.length - 1)
    return res
}