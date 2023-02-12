// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two
// given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  let arr = arr1.concat(arr2);

  return arr.filter((elem) => {
    return arr.indexOf(elem) == arr.lastIndexOf(elem);
  });
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
