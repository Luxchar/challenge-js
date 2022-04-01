let arrtoset = (arg) => new Set(arg);
let arrtostr = (arg) => arg.join('');
let settoarr = (arg) => arg.from(Set);
let settostr = (arg) => Array.from(arg).join(' ');
let strtoarr = (arg) => arg.split("");
let strtoset = (arg) => [...arg].join(' ');
let maptoobj = (arg) => Object.fromEntries(arg);
let objtoarr = (arg) => Object.entries(arg);
let objtomap = (arg) => new Map(Object.entries(arg));
let arrtoobj = (arg) => Object.fromEntries(arg);
let strtoobj = (arg) => Object.fromEntries(arg.split(' ').map(x => x.split(':')));

const supertypeof = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1);
}