// Create a function filterShortStateName that takes an array of strings and that returns the ones with less than 7 characters.

function filterShortStateName(arr) {
    return arr.filter(function(state) {
        return state.length < 7;
    });
}

function filterStartVowel(arr) {
    return arr.filter(function(state) {
        return state[0].match(/[aeiou]/i);
    });
}

function filter5Vowels(arr) {
    return arr.filter(function(state) {
        return state.match(/[aeiou]{5}/i);
    });
}

function filter1DistinctVowel(arr) {
    return arr.filter(function(state) {
        return state.match(/[aeiou]{1}/i);
    });
}

function multiFilter(objects) {
    return objects.filter(function(object) {
        return object.capital.length >= 8 &&
            !object.name[0].match(/[aeiou]/i) &&
            object.tag.match(/[aeiou]/i) &&
            object.region !== 'South';
    });
}
