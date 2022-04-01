let arrToSet = (arg) => new Set(arg);
let arrToStr = (arg) => arg.join('');
let setToArr = (arg) => arg.from(Set);
let setToStr = (arg) => arrToStr(Array.from(arg));
let strToArr = (arg) => arg.split("");
let strToSet = (arg) => [...arg].join(' ');
let mapToObj = (arg) => Object.fromEntries(arg);
let objToArr = (arg) => Object.entries(arg);
let objToMap = (arg) => new Map(Object.entries(arg));
let arrToObj = (arg) => Object.fromEntries(arg);
let strToObj = (arg) => Object.fromEntries(arg.split(' ').map(x => x.split(':')));

const superTypeOf = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1);
}