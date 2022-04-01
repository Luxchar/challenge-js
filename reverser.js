function reverser(str) {
    if (typeof str === 'string'){
    return str.split('').reverse().join('');
    }
    return str.reverse();
}