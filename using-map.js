function citiesOnly(objects) {
    let arr = objects.map(cities =>{
        return cities.city
    })
    return arr
}

function fahrenheitToCelsius(objects) {
    let array = objects.map(function Celsius(val){
        val = parseInt(val)
        let temperature = (val -32)*5/9
        temperature = Math.floor(temperature)
        return temperature+'°C'
        })
    return array
}

function upperCasingStates(arr) {
    let array = arr.map(
        function toupper (currentValue){
            const regexString01 = /^\w/g
            const regexSpace01 = /\s\w/g
            const regexString = new RegExp(regexString01)
            const regexSpace = new RegExp(regexSpace01)
            let res1 = currentValue.match(regexString)
            let res2 = currentValue.match(regexSpace)
            let res = currentValue.replace(regexString,res1[0].toUpperCase())
            if(res2!== null){
                res = res.replace(regexSpace,res2[0].toUpperCase())
            }
                return res
        })
        return array
}

function trimTemp(objects) {
    let arr = objects.map(t=>{
        const resRegex = new RegExp(/\s/g) //regex to remove spaces
        let string = t.temperature
        let res = string.replace(resRegex,'')
        t.temperature = res
        return t
    })
    return arr
}

function tempForecasts(states){
    let array = states.map(all =>{
        const regex = /\s/g
        const resRegex = new RegExp(regex)
        const regexSpace = /\s\w/g
        const regexSp = new RegExp(regexSpace)
        let strin = all.temperature
        let res2 = all.states.match(regexSp)
        let str = strin.match(resRegex)
        // let res3 = all.state.match(regexSp)
        let res = strin.replace(resRegex,'')
        if(res2!== null){
            all.state = all.states.replace(regexSp,res2[0].toUpperCase())
        }
        res = parseInt(res)
        let cel = (res -32)*5/9
        cel = Math.floor(cel)
        let strRes = cel+'°Celsius in '+all.city+', ' + all.states[0].toUpperCase()+all.states.slice(1)
        return strRes
    })  
    return array
}

