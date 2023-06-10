function pattern(rows) {
    let space = Math.floor((2 * rows - 1) / 2);

    let string = "";
    for (let i = 1; i <= rows; i++) {
        string += " ".repeat(space);
        string += "*".repeat(2 * i - 1);
        string += '\n'
        space -= 1;
    }
    return string
}

console.log(pattern(10));