function sameAmount(data,reg1,reg2) {
    const r1 = new RegExp(reg1)
    const r2 = new RegExp(reg2)
    // console.log(regex1,'-',regex2)
    const resr1 = data.match(r1)
    const resr2 = data.match(r2)
    console.log(resr1,'---',resr2)
    if(resr1.length === resr2.length){
        return true
    }
    return false
}