function getURL(str) {
    let res = []
    const regex = new RegExp(
        "(^|[ \t\r\n])((|http|https|):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))"
       ,"g"
     );

     const resreg = str.match(regex)
    if(resreg === null){
        return res
    }
    for (let i = 0; i < resreg.length; i++) {
        const element = resreg[i];
        const regex2 = new RegExp(element,'g')
        const resreg2 = str.match(regex2)
        if (i%2 === 0) {
        res.push(element)
        }
    }
    return res
}

// function greedyQuery(str) {
//     geturl = new RegExp(
//         "(^|[ \t\r\n])((|http|https|):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))"
//        ,"g"
//      );
//     string.match(str).length
//     2

//     string.match(str)
// }