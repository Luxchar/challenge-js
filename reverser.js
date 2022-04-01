function reverser(str) {
    if (typeof str === 'string'){
        let revstr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            revstr+=str[i];
        }
        return revstr;
    }
    let arr = []
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i])
    }
    return arr;
}