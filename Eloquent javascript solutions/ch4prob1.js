function range(start, end, step) {
  let arr = [];
  if (step < 0) {
    for (let i = start; i >= end; i = i + step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i = i + step) {
      arr.push(i);
    }
  }

  return arr;
}
// console.log(range(1, 10));

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(range(5, 2, -2));
// console.log(sum(range(10, 2, -2)));
