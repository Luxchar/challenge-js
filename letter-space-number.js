function letterSpaceNumber(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i) && str[i+1] === ' ' && str[i+2].match(/[0-9]/) && !str[i+3].match(/[0-9]/) && !str[i].match(/[a-z]/i)){
            res.push(str[i]+' '+str[i+2]);
        }
    }
    return res;
}