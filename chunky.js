function chunk(arr, nb) {
    let temp = []
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (temp.length == nb) {
            res.push(temp)
            temp = []
        }
    }
    if (arr.length % num !== 0) { //array has still x number < nb left
        result.push(temp)
    }
    return res
}