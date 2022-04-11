//longWords that returns true if every element of the array is a string of at least 5 characters.

function longWords(arr) {
    return arr.every(function(word) {
        return word.length >= 5;
    });
}

//oneLongWord that returns true if at least one element of the array is a string of at least 10 characters.

function oneLongWord(arr) {
    return arr.some(function(word) {
        return word.length >= 10;
    });
}
//noLongWords that returns true if there are no elements in the array that are a string with at least 7 characters.
function noLongWords(arr) {
    return arr.every(function(word) {
        return word.length < 7;
    });
}