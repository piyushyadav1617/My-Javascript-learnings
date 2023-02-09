// To convert from Ascii binary to characters
//first we need to convert from Ascii to character codes
//then convert the charcter codes to letters
//parseInt(string, radix)   radix takes the number system that our string is in. If the string
//is not a number then it will give NaN
//The String.fromCharCode() method converts Unicode values to characters and always produces string

function binaryAgent(str) {
  let binaryArr = str.split(" ");

  return binaryArr
    .map((elem) => String.fromCharCode(parseInt(elem, 2)))
    .join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
