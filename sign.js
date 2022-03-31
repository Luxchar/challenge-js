function sign(nb) {
    if (nb > 0) {
        return 1;
    }
    if (nb === 0) {
        return 0;
    }
    return -1;
}

function sameSign(a,b) {
    if (a > 0 && b > 0 || a < 0 && b < 0) {
        return true;
    }
    return false;
}