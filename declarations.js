const escapeStr = "`,/,\",',\\";
const arr = [4, '2'];
const obj = {str: "string",num: 5,bool: true,undef: undefined}; 
Object.freeze(obj);
Object.freeze(arr);
const nested = {
    arr:[4,undefined,'2'],
    obj: {
        str: "stringe",
        num: 15,
        bool: false,
    }
 };
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);