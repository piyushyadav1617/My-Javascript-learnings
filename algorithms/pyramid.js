function pattern(rows) {
    let space = Math.floor((2 * rows - 1) / 2);
    let n = 1;
    let string = "";
    for (let i = 0; i < rows; i++) {
        string += " ".repeat(space);
        string += "*".repeat(i + n);
        string += '\n'
        n++;
        space -= 1;
    }
    return string
}

console.log(pattern(10));