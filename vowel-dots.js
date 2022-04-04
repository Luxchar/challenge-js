const vowels = /[aeiouAEIOU]/g;
function vowelDots(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res+=str[i];
        if (isVowelRegEx(str[i])) {
            res+='.';
        }
    }
    return res;
}

function isVowelRegEx(char) {
    if (char.length == 1) {
      return /[aeiou]/.test(char);
    }
  }