// Create a function called invert that takes an object and returns it with its keys and values inverted.
  // It should ignore properties from the prototype chain
function invert(obj) {
    var newObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
        newObj[obj[key]] = key;
        }
    }
    return newObj;
}