// Create two functions that will work like _.debounce from lodash

//     debounce, this function doesn't need to take care of the options
//     opDebounce, this function will take care of the leading options

// source npm package

// Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.

// Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the debounced function is invoked more than once during the wait timeout.

// If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.

// See David Corbacho's article for details over the differences between _.debounce and _.throttle.
// Since

// 0.1.0
// Arguments

//     func (Function): The function to debounce.
//     [wait=0] (number): The number of milliseconds to delay.
//     [options={}] (Object): The options object.
//     [options.leading=false] (boolean): Specify invoking on the leading edge of the timeout.
//     [options.maxWait] (number): The maximum time func is allowed to be delayed before it's invoked.
//     [options.trailing=true] (boolean): Specify invoking on the trailing edge of the timeout.

// Returns

// (Function): Returns the new debounced function.

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