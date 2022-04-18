// The objective of this exercise is to merge objects into a new object depending on the values type

// With this, create a function called fusion that:

//     If the type is an array you must concatenate it

// fusion({ arr: [1, "2"] }, { arr: [2] }); // -> { arr: [ 1, '2', 2 ] }
// fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

//     If it is a string you must concatenate it with a space

// fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
// fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }

//     If they are numbers, you must add them

// fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }

//     If it is an object, you must join them recursively

// fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
// fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }

//     In case of type mismatch you must replace it with the value of the second object

// fusion({ a: "hello", b: [] }, { a: 4 }); // -> { a: 4, b: [] }

function fusion(obj1, obj2) {
    let result = {};
    for (let key in obj1) {
        if (Array.isArray(obj1[key])) {
            result[key] = obj1[key].concat(obj2[key]);
        } else if (typeof obj1[key] === "object") {
            //In case of type mismatch you must replace it with the value of the second object
            if (typeof obj2[key] !== typeof obj1[key]) {
                result[key] = obj2[key];
            } else {
                result[key] = fusion(obj1[key], obj2[key]);
            }
        } else if (typeof obj1[key] === "string") {
            if (typeof obj2[key] === "string") {
                result[key] = obj1[key] + " " + obj2[key];
            } else {
                result[key] = obj1[key] + "";
            }
        } else if (typeof obj1[key] === "number") {
            if (typeof obj2[key] === "number") {
                result[key] = obj1[key] + obj2[key];
            } else {
                result[key] = obj1[key];
            }
        }
    }
    for (let key in obj2) {
        if (!result[key]) {
            result[key] = obj2[key];
        }
    }
    return result;
}