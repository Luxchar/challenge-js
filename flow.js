//Create the function flow that will works as the _.flow([funcs]) from lodash.

// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])
// flowedFunctions(2, 3) // -> 25

function flow(funcs) {
  return function(...args) {
    let result = funcs.reduce((acc, func) => {
      return func(acc)
    }, args)
    return result
  }
}