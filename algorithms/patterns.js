// pyramid 
//       *
//      ***
//     *****
//    *******  
function pyramid(rows) {
    // Calculate the number of spaces for the first row
    let space = Math.floor((2 * rows - 1) / 2);

    let string = ""; // Initialize an empty string to store the pattern

    for (let i = 1; i <= rows; i++) {
        string += " ".repeat(space); // Add spaces before each row
        string += "*".repeat(2 * i - 1); // Add asterisks for each row
        string += '\n' // Add a newline character to move to the next row
        space -= 1; // Decrease the number of spaces for the next row
    }

    return string; // Return the pattern as a string
}

//reversed Pyramid
// ******
//  ***
//   *

function reversedPyramid(rows) {
    let space = 0;

    let string = ""; // Initialize an empty string to store the pattern

    for (let i = rows; i >= 1; i--) {
        string += " ".repeat(space); // Add spaces before each row
        string += "*".repeat(2 * i - 1); // Add asterisks for each row
        string += '\n' // Add a newline character to move to the next row
        space += 1; // increase the number of spaces for the next row
    }

    return string; // Return the pattern as a string
}



//right side triangle   
//      *
//     **
//    *** 
function rightTriangle(rows) {
    let space = rows - 1

    let string = "";
    for (let i = 1; i <= rows; i++) {
        string += " ".repeat(space);
        string += "*".repeat(rows - space);
        string += "\n"
        space--;
    }

    return string;
}


//hollow triangle
// *
// **
// * *
// *  *
// *****

function hollowTriangle(rows) {

    let string = "";
    for (let i = 1; i <= rows; i++) {
        if (i >= 3 && i !== rows) {
            string += "*";
            string += " ".repeat(i - 2);
            string += "*"
        }
        else { string += "*".repeat(i) }
        string += "\n"
    }

    return string;
}

//diamond
//    *
//   ***
//  *****
//   ***
//    * 
function diamond(rows) {


    let space = Math.floor((2 * rows - 1) / 2);

    let string = "";

    for (let i = 1; i < Math.round(rows / 2); i++) {
        string += " ".repeat(space);
        string += "*".repeat(2 * i - 1);
        string += '\n'
        space -= 1;
    }

    for (let j = Math.round(rows / 2); j >= 1; j--) {
        string += " ".repeat(space);
        string += "*".repeat(2 * j - 1);
        string += '\n'
        space += 1;

        return string;
    }
}