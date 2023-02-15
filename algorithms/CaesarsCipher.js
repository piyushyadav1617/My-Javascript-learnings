//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (letters.includes(strArr[i])) {
      let index = letters.indexOf(strArr[i]);
      if (index < 13) {
        strArr[i] = letters[index + 13];
      } else strArr[i] = letters[index - 13];
    }
  }
  console.log(str);
  console.log(strArr.join(""));
  return strArr.join("");
}

rot13("SERR PBQR PNZC");
