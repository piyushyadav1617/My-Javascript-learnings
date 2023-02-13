//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  let strArr = str.split(/\s|_|\W/);
  let newStr = strArr
    .filter((elem) => {
      return elem != "";
    })
    .join("")
    .toLowerCase();
  let count = 0;
  let j = newStr.length - 1;
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] == newStr[j]) {
      count++;
    }
    j--;
  }
  // console.log(newStr)
  // console.log(count)

  if (count == Math.floor(newStr.length / 2)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

palindrome("My age is 0, 0 si ega ym.");
