function letterSpaceNumber(str) {
    let res = [];
    for (let i = 0; i < str.length-2; i++) {
        if (str[i].match(/[a-z]/i) && str[i+1] === ' ' && str[i+2].match(/[0-9]/)){
            if (str.length-1 > 0) {
                if (!str[i+3].match(/[a-z]/i) && !str[i+3].match(/[0-9]/)) {
                    res.push(str[i]+' '+str[i+2]);   
                }
            }
            res.push(str[i]+' '+str[i+2]);
        }
    }
    return res;
}