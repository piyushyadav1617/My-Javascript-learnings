// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster,
//move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  let reg = /^[aeiou]/;
  let strArr = str.split("");
  let index = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (!reg.test(strArr[i])) {
      index++;
    } else break;
  }
  let remove = strArr.slice(0, index);
  // console.log(remove);
  strArr.push(...remove);
  strArr.splice(0, index);

  if (!reg.test(str)) {
    strArr.push("ay");
  } else strArr.push("way");
  // console.log(strArr)
  return strArr.join("");
}

console.log(translatePigLatin("california"));
