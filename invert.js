// Create a function called invert that takes an object and returns it with its keys and values inverted.

function invert(obj) {
  var newObj = {};
  for (var key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}