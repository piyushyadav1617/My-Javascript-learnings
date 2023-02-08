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
