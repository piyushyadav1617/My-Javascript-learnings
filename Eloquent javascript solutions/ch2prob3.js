// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

//solution 1 - This will create 8 diferent strings
// This code creates a nested loop that iterates through the variables x and y, each going from 0 to 7.
// It creates an empty string called pattern, and inside the inner loop it checks if the sum of x and y is even.
// If it is, it adds a space to the pattern string, if not, it adds a "#" symbol. After each inner loop, it prints the current pattern string.
// This will create a checkerboard pattern of spaces and "#" symbols, with 8 rows and 8 columns
for (let y = 0; y < 8; y++) {
  let pattern = "";
  for (let x = 0; x < 8; x++) {
    if ((x + y) % 2 == 0) {
      pattern += " ";
    } else {
      pattern += "#";
    }
  }

  console.log(pattern);
}

// solution 2 - This will create a single string
//It is similar to 1st solution except that it will create one single string and the lines are seperated by newline character
let pattern = "";
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    if ((x + y) % 2 == 0) {
      pattern += " ";
    } else {
      pattern += "#";
    }
  }
  pattern += "\n";
}
console.log(pattern);
