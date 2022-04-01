function triangle(str, nb) {
    let res = ""
    for (let i = 1; i < nb; i++) {
        for (let j = 0; j < i; j++) {
            res+=str
        }
        if(i === nb){
            return res
        }
        res+='\n'
    }
    return res
}