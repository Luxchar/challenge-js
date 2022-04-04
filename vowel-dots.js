const vowels = /[aeiouAEIOU]/g;
function vowelDots(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (isVowelRegEx(str[i])) {
            res+='.';
        }
        res+=str[i];
    }
    return res;
}

function isVowelRegEx(char) {
    if (char.length == 1) {
      return /[aeiou]/.test(char);
    }
  }