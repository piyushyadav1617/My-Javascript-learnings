// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two.
// Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description.
// The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Also consider updating the function to include solution for negative values also

//solution-
// The function uses recursion to determine if the input number is even or odd.
// First, the function checks if the input number is 0, if it is the function returns true. In JavaScript 0 is considered as even number.
// If the input number is 1, the function returns false, since 1 is considered as odd number.
// If the input number is less than 0, the function calls itself with the absolute value of the input number.
// This step is taken because the function only works with positive integers, so if a negative number is passed as an argument,
// it's converted to its absolute value.
// If the input number is greater than 1, the function calls itself with the input number minus 2.
// The recursion continues until the input number is reduced to 0 or 1, at which point the function returns true or false, respectively,
// indicating whether the original input number was even or odd.
// It's worth to mention that this function can have an infinite recursion if the input number is not a positive integer,
// and it can cause a stack overflow. It's also important to note that this function can have a performance hit if the input number is
// too large because of the recursion.

let isEven = (num) => {
  if (num == 0) return true;
  else if (num == 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
};
console.log(isEven(-4));
