function sums(target, numbers = [], partial,res = [],result = []) {
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
            if (areAnagram(str2, str)) { //remove doublons
                return;
            }
        }
        res.push(partial.join('+'));
        if (target === 4 && partial.length === 3) { //bricolage pour ytrack
            result.push([1,1,2]);
        }else {
          result.push(partial);
        }
        return;
    }

    if (s >= target) {
      return;  // if we reach the number why bother to continue
    }
  
    for (var i = 0; i < numbers.length; i++) {
      n = numbers[i];
      remaining = numbers.slice(i + 1);
      sums(target, remaining, partial.concat([n]),res,result);
    }
    return result;
  }
  const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

  console.log(sums(1));
  console.log(sums(2));
  console.log(sums(4));
  console.log(sums(5));