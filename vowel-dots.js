const vowels = /[aeiouAEIOU]/g;
function vowelDots(str) {
    for (let i = 0; i < str.length; i++) {
        if (isVowelRegEx(str[i])) {
            if (str[i+1] === ".") {
                str = str.substring(0, i) + str.substring(i+1)
                i = i-1
            }
        }
    }
    return str;
}

function isVowelRegEx(char) {
    if (char.length == 1) {
      return /[aeiou]/.test(char);
    }
  }