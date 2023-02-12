// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one
// argument and returns the sum.

function addTogether(...args) {
  let [a, b] = args;
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a == "number" && args.length == 1) {
    return function second(b) {
      if (typeof b === "number") {
        return a + b;
      }
    };
  }
}
console.log(addTogether(2, 4));
