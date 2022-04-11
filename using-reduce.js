function adder(arr,x=0) {
    let res = arr.reduce(function(s,nb) {
        return s+nb
    },x);
    return res
}

function sumOrMul(arr,x=0) {
    let res = arr.reduce(function(s,nb) {
        if (nb%2 !== 0) {
            return s+nb
        } else {
            return s*nb
        }
    },x);
    return res
}

function funcExec(arr) {
    let res = arr.reduce(function(s,nb) {
        return nb(s)
    });
    return res
}