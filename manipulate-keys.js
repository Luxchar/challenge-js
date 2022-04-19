// Instructions

// I do not want onions. I want oranges!!!

// Create 3 functions that works like the .filter, .map and .reduce array method but for the keys of your grocery cart.

//     filterKeys filters the name of the items you have.
//     mapKeys changes the name of the items you have.
//     reduceKeys reducing you grocery cart.

// Examples

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // output :
// // { protein: 20 }
// console.log(mapKeys(nutrients, (k) => `-${k}`))
// // output :
// // { -carbohydrates: 12, -protein: 20, -fat: 5 }
// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// // output :
// // carbohydrates, protein, fat

function filterKeys(cart, callback) {
    let newCart = {};
    for (let key in cart) {
        if (callback(key)) {
            newCart[key] = cart[key];
        }
    }
    return newCart;
}

function mapKeys(cart, callback) {
    let newCart = {};
    for (let key in cart) {
        newCart[callback(key)] = cart[key];
    }
    return newCart;
}

function reduceKeys(cart, callback) {
    let total = '';
    for (let key in cart) {
        total = callback(total, key);
    }
    return total.substring(2, total.length);
}