let arrToSet = (arg) => new Set(arg);
let arrToStr = (arg) => arg.join('');
let setToArr = (arg) => Array.from(arg);
let setToStr = (arg) => arrToStr(Array.from(arg));
let strToArr = (arg) => arg.split("");
let strToSet = (arg) => new Set(Array.from(arg));
let mapToObj = (arg) => Object.fromEntries(arg);
let objToArr = (arg) => Object.values(arg);
let objToMap = (arg) => new Map(Object.entries(arg));
let arrToObj = (arg) => Object.assign({}, arr);
let strToObj = (arg) => Object.assign({}, strToArr(arg));

const superTypeOf = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1);
}