// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    if (fib[i - 1] + fib[i - 2] <= num) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }
  console.log(fib);
  return fib.filter((value) => value % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibs(4));
