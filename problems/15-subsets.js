/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
const subsets = (arr) => {
  if (arr.length === 0) return [];

  let subArr = [];
  let firstEl = arr[0];
  if (subArr === undefined) return subArr.push([]);
  if (arr.length === 1) return subArr.push(firstEl);

  //look at array indiceies, determine if we want them there or not, go to next index, etc.
  let currArr = arr.slice(0, 1);

  
  // if (arr.length === 2) {

  // }

}
subsets([1]) // [[], [1]]
console.log(subsets([1]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
