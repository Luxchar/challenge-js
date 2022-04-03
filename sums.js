let res = [];
let result = [];
function sums(target, numbers = [], partial) {
    if (target === 0) {
        return [];
    }
    for(i = 1; i < target; i++) {
        numbers.push(i);
    }
    var s, n, remaining;
  
    partial = partial || [];
  
    // sum partial
    s = partial.reduce(function (a, b) {
      return a + b;
    }, 0);
  
    // check if the partial sum is equals to target
    if (s === target) {
        for (var i = 0; i < res.length; i++) {

            let str = partial.join('+');
            let str2 = res[i].toString();
            if (areAnagram(str2, str)) {
                return;
            }
        }
        res.push(partial.join('+'));
        result.push(partial);
        return;
    }

    if (s >= target) {
      return;  // if we reach the number why bother to continue
    }
  
    for (var i = 0; i < numbers.length; i++) {
      n = numbers[i];
      remaining = numbers.slice(i + 1);
      sums(target, remaining, partial.concat([n]));
    }
    return result;
  }
  const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');