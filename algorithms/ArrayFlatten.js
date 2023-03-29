function steamrollArray(arr) {
  let flatten = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten = flatten.concat(steamrollArray(arr[i]));
    } else flatten.push(arr[i]);
  }

  return flatten;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

function flatten(arr) {
  let newArr = arr.reduce((initial, elem) => {
    if (elem instanceof Array) { return initial.concat(flatten(elem)) }
    else {
      initial.push(elem)
      return initial;
    }
  }, [])

  return newArr
}

// const flatten = arr => arr.reduce((a, v) => {
//   if (v instanceof Array) {
//     return a.concat(flatten(v))
//   } else {
//     a.push(v);
//     return a;
//   }
// }, [])
console.log(flatten([1, [2], [3, [[4], [4, [7, [8, [10, [55]], [5]]]]]]]));
