//problem - to reverse an array with or without creating a new array

// This solution defines a function called "reverseArray" that takes in an
//input of an array (arr). Inside the function, an empty array called "reversedArray" is defined.
// Then, a for loop is used to iterate through the input array in reverse order (starting at the
//last element and ending at the first element).
//For each iteration of the loop, the current element (arr[i]) is stored in a
// variable called "a" and then pushed to the "reversedArray" using the .push() method.
//Finally, the reversedArray is returned as the output of the function.

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let a = arr[i];
    reversedArray.push(a);
  }
  return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

//problem - to reverse an array without creating a new array

// This  defines a function called "reverseArrayInPlace" that takes in an input of an array (arr).
// Inside the function, a for loop is used to iterate through the input array by half of its length (using Math.floor(arr.length / 2)
// to ensure that the middle element is not affected if the array has an odd number of elements). For each iteration of the loop,
// a variable called "old" is defined and assigned the value of the current element (arr[i]). Then, the current element is assigned
// the value of the element located at the opposite end of the array (arr[arr.length - 1 - i]) using the array indexing. Finally,
// the element located at the opposite end of the array is assigned the value of the "old" variable using the array indexing.
// This swap the elements and make the array reversed. The reversed array is returned as the output of the function.

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
