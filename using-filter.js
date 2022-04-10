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

function filter1DistinctVowel(obj) {
    let array = obj.map(filter=>{
        const regex = /[aeiouAEIOU]/g
        const resRegex = new RegExp(regex)
        let str = filter.match(resRegex)
        let arr = []
        let flag = false
        Loop:
        for(let i=0;i<str.length-1;i++){
            for(let j=i+1;j<str.length;j++){
                if(str[i].toUpperCase()!==str[j].toUpperCase()){
                    flag - false
                    break Loop
                }
            }
            flag = true
        }
        if(flag){
            return filter
        }
        return null
    })
    let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
}

function multiFilter(objects) {
    return objects.filter(function(object) {
        return object.capital.length >= 8 &&
            !object.name[0].match(/[aeiou]/i) &&
            object.tag.match(/[aeiou]/i) &&
            object.region !== 'South';
    });
}
