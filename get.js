function get(src,path) {
    let pathArr = path.split('.') //split path by .
    pathArr.forEach((value) => {
        if (src === undefined) {
            return src
        }
        src = src[value] //get last key and then return it on foreach break
    })
    return src
}