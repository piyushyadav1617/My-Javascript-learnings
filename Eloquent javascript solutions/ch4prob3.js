//PROBLEM STATEMENT
//  Objects, as generic blobs of values, can be used to build all sorts of data structures.
//A common data structure is the list (not to be confused with array). A list is a nested set of objects,
//with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// A nice thing about lists is that they can share parts of their structure. For example,
//if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier),
//they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still
//a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
//Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element
//and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number
//and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is
//no such element.

//1) Array to linked List
// This function called "arrayToList" takes in an array as an argument. Inside the function, the variable
// "list" is initialized as null. Then, there is a for loop that starts at the last index of the input
// array and iterates backwards through the array. For each iteration, the current value of the array is added to an
// object with the properties "value" and "rest", and the current value of "list" is assigned as the value of the "rest" property.
// Finally, the "list" object is returned as the output of the function. This function effectively converts an array into a linked
// list, with the elements of the array becoming the "value" properties of the objects in the linked list and each object's "rest"
// property pointing to the next object in the list.

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

//2) List to Array

// This function called "listToArray" takes in a linked list as an argument. Inside the function, an empty array called "arr"
// is initialized. Then, there is a for loop that starts with the input "list" and assigns it to a variable "node". The loop continues while
// "node" has a truthy value. In each iteration, the "value" property of the current "node" object is pushed to the "arr" array and "node"
// is assigned to "node.rest", this way it will iterate over all elements of the linked list. Finally, the "arr" array is returned as the
// output of the function. This function effectively converts a linked list into an array, with the "value" properties of the objects in the
// linked list becoming the elements of the array.

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

//3) prpend function
function prepend(element, list) {
  return { value: element, rest: list };
}
//4) finding the value in a linked list at a certain position

// This function called "nth" takes in a linked list and a number (n) as arguments. The function uses recursion to find the nth element of
// the linked list.
// The function first checks if the input "list" is undefined or null, if it is, it returns undefined.
// If the input number n is zero, it returns the value property of the first object in the linked list.
// If n is greater than zero, the function will call itself with the rest property of the current object in the linked list and n decremented by 1.
// It will keep doing this until it reaches the nth element of the linked list, then it will return its value.
// In other words, the function will look for the nth element starting at the head of the list, recursing down the rest of the list until it finds the
// element at the nth position, or until it reaches the end of the list and returns undefined.

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(0, arrayToList([10, 20, 30])));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
