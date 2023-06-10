function pattern(rows) {
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


console.log(pattern(10));