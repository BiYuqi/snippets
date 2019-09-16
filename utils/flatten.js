const flatten = (arr, max = 1) => 
  arr.reduce((initial, curr, index) => 
  Array.isArray(curr) ? initial.concat(flatten(curr)) : initial.concat(curr), [])

console.log(flatten([1, 2, 3, [3, [4, [5, [9, 10]]]]]))