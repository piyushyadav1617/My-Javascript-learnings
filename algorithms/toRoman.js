//Convert a given number into a roman numeral.

function convertToRoman(num) {
  let numStr = num.toString();
  let numArr = numStr.split("");

  let romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let j = 1;
  for (let i = numArr.length - 1; i >= 0; i--) {
    numArr[i] = numArr[i] * j;
    j *= 10;
  }
  let inRoman = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    if (romanNumerals[numArr[i]]) {
      inRoman.unshift(romanNumerals[numArr[i]]);
    } else if (numArr[i] <= 3) {
      for (let j = 0; j < numArr[i]; j++) {
        inRoman.unshift("I");
      }
    } else if (numArr[i] > 5 && numArr[i] < 9) {
      let numb = numArr[i] - 5;
      for (let j = 0; j < numb; j++) {
        inRoman.unshift("I");
      }
      inRoman.unshift("V");
    } else if (numArr[i] <= 30 && numArr[i] > 10) {
      for (let j = 0; j < numArr[i] / 10; j++) {
        inRoman.unshift("X");
      }
    } else if (numArr[i] > 50 && numArr[i] < 90) {
      let numb = numArr[i] - 50;
      for (let j = 0; j < numb / 10; j++) {
        inRoman.unshift("X");
      }
      inRoman.unshift("L");
    } else if (numArr[i] <= 300 && numArr[i] > 100) {
      for (let j = 0; j < numArr[i] / 100; j++) {
        inRoman.unshift("C");
      }
    } else if (numArr[i] > 500 && numArr[i] < 900) {
      let numb = numArr[i] - 500;
      for (let j = 0; j < numb / 100; j++) {
        inRoman.unshift("C");
      }
      inRoman.unshift("D");
    } else if (numArr[i] <= 3000 && numArr[i] > 1000) {
      for (let j = 0; j < numArr[i] / 1000; j++) {
        inRoman.unshift("M");
      }
    }
  }

  return inRoman.join("");
}

console.log(convertToRoman(333));
