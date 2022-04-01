function indexOf(arr, val, index = 0) {
  for (var i = index; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(arr, val, index = arr.length - 1) {
    let x = -1
    for (let i = index; i >= 0; i--) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

function includes(arr, val) {
    for (const letter of arr) {
        if (letter === val) {
            return true
        }
    }
    return false
}

