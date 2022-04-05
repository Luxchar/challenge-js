function ionOut(str) {
    let res = []
    const regex = /(\w*)(?=tion)/g
    const resreg = str.match(regex)
    if(resreg === null){
        return res
    }
    for (let i = 0; i < resreg.length; i++) {
        const element = resreg[i];
        const regex2 = new RegExp(element,'g')
        const resreg2 = str.match(regex2)
        if(resreg2.length === 1){
            res.push(element)
        }
    }
    return res
}