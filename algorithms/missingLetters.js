// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let strArr = str.split("");
  let index = letters.indexOf(strArr[0]);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== letters[index]) {
      return letters[index];
    }
    index++;
  }
}

console.log(fearNotLetter("abuvwxyz"));
