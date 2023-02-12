// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
function sumAll(arr) {
  let newArr = arr.sort((a, b) => a - b);
  // console.log(newArr);
  let total = range(newArr[0], newArr[1]);
  // console.log(total);

  return total.reduce((sum, value) => {
    return sum + value;
  }, 0);
}

console.log(sumAll([1, 4]));
