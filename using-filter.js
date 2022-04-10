function filterShortStateName(arr) {
    return arr.filter(function(state) {
        return state.length < 7;
    });
}

function filterStartVowel(arr) {
    return arr.filter(function(state) {
        return state[0].match(/[aeiouAEIOU]/i);
    });
}

function filter5Vowels(object) {
    let array = object.map(vowels=>{
        const regex = /[aeiouAEIOU]/g
        const resRegex = new RegExp(regex)
        let str = vowels.match(resRegex)
        if(str.length >= 5){
            return vowels
        }
        return null
    })
    let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
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
