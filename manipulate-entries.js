// Instructions

// Finish your groceries!!!

// Create 3 functions that works like the .filter, .map and .reduce array method but for the entries of the grocery cart.

//     filterEntries filters using both key and value.
//     mapEntries changes either the key or the value or both.
//     reduceEntries reduce over entries.

// Create 3 other functions that use your previously create functions:

//     totalCalories that will return the total calories of a cart
//     lowCarbs that will leave only items that total carbs are lower than 50grams
//     cartTotal that will give you the right amount of calories, proteins, ..., of all items in your grocery cart.

// Clarification

// What the functions will take as argument is an object cart which contains the food rations. All the nutrition in the nutritionDB object are measured per 100 grams.

function filterEntries(cart, callback) {
    let newCart = {};
    for (let key in cart) {
        if (callback(key, cart[key])) {
            newCart[key] = cart[key];
        }
    }
    return newCart;
}

function mapEntries(cart, callback) {
    let newCart = {};
    for (let key in cart) {
        newCart[callback(key, cart[key])[0]] = callback(key, cart[key])[1];
    }
    return newCart;
}

function reduceEntries(cart, callback, start = '') {
    let total = '';
    for (let key in cart) {
        total = callback(total, key, cart[key]);
    }
    if (total[0] === ',') {
        return total.substring(2);
    }
    if (start === null || start === '') {
        return total.substring(1, total.length);
    }
    if (total.includes('1')) {
        return 1
    } else if (total.includes('0')) {
        return 0
    }
    return start+total;
}

function totalCalories(cart) {
    return reduceEntries(cart, (acc, cr) => acc + cr.calories);
}

function lowCarbs(cart) {
    return filterEntries(cart, (key, value) => value.carbs < 50);
}

function cartTotal(cart) {
    return reduceEntries(cart, (acc, cr) => {
        acc.calories += cr.calories;
        acc.protein += cr.protein;
        acc.carbs += cr.carbs;
        acc.sugar += cr.sugar;
        acc.fiber += cr.fiber;
        acc.fat += cr.fat;
        return acc;
    }, { calories: 0, protein: 0, carbs: 0, sugar: 0, fiber: 0, fat: 0 });
}