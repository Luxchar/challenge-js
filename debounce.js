// Create two functions that will work like _.debounce from lodash

//     debounce, this function doesn't need to take care of the options
//     opDebounce, this function will take care of the leading options
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function opDebounce(func, wait, options = {}) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!options.leading) {
        func.apply(context, args);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (options.leading) {
      func.apply(context, args);
    }
  };
}