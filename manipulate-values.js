// Go buy groceries!!!

// You have a grocery cart with some items you need. The items will have a key being the name and a value that is the amount in grams.

// Create 3 functions that works like the .filter, .map and .reduce array method but for the values of your grocery cart.

//     filterValues filters the values of your grocery cart.
//     mapValues changes the values of your grocery cart.

// For the above function the callback function should accepts only the element in the arguments, this being the current element being processed.

//     reduceValues that will reduce your grocery cart. The callback function should accepts only the accumulated value and the current value.

function filterValues(cart, callback) {
    let newCart = {};
    for (let key in cart) {
        if (callback(cart[key])) {
            newCart[key] = cart[key];
        }
    }
    return newCart;
}

function mapValues(cart, callback) {
    let newCart = {};
    for (let key in cart) {
        newCart[key] = callback(cart[key]);
    }
    return newCart;
}

function reduceValues(cart, callback, initialValue) {
    let result = initialValue;
    for (let key in cart) {
        result = callback(result, cart[key]);
    }
    return result;
}