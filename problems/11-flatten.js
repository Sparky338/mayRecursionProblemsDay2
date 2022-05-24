/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]     [2, [3]]     [ [3] ]
***********************************************************************/

// your code here
const flatten = (arr) => {
  if (arr.length === 0) return [];

  let firstEl = arr[0];

  if (Array.isArray(firstEl)) {
    firstEl = flatten(firstEl)
  }

  let myNums = [];
  myNums = myNums.concat(firstEl);

  return myNums.concat(flatten(arr.slice(1)))
}

flatten([1, [2, [3]]]); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
