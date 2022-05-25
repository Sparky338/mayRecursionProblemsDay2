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

  if (!arr.length) return [[]];
  debugger
  let prevSubsets = subsets(arr.slice(0, arr.length - 1));    // arr = [1, 2]    sliced => []
  // console.log(`prevSubsets: ${prevSubsets}`)
  debugger
  let last = arr[arr.length - 1];                     // last = 2
  // console.log(last)
  debugger
  // console.log('This is prevSubet :', prevSubsets)
  let addedSubsets = prevSubsets.map(subArray => {
    debugger
    return [...subArray, last]
  })
  // [ [] ]             [  [1]  ]
  // console.log(addedSubsets)

  debugger
  return prevSubsets.concat(addedSubsets);

}
subsets([1, 2, 3])
// const subsets = (arr) => {
//   if (!arr.length) return [[]];

//   const last = arr[arr.length - 1];
//   const subs = subsets(arr.slice(0, arr.length - 1));

//   return subs.concat(subs.map((el) => {
//     let newArr = el.slice(0)
//     newArr.push(last);
//     return newArr;
//   }));
// }




// const subsets = (arr, subArr = []) => {
//   if (arr.length === 0) return [[]];
//   // let subArr = [];
//   // let subArr = [];
//   // let firstEl = arr[0];
//   // if (subArr === undefined) return subArr.push([]);
//   // if (arr.length === 1) return subArr.push(firstEl);


//   //look at array indiceies, determine if we want them there or not, go to next index, etc.
//   let tempPop = arr.slice(0, 1);
//   let tempInc = arr.slice(0, 1);

//   debugger
//   // Don't include
//   // console.log(tempPop)
//   // console.log(tempInc)
//   // console.log(subArr);
//   tempPop.pop();
//   // subArr.push(arr.slice(0, 0));
//   // subArr.push(tempPop)
//   debugger
//   subArr.push(tempPop.concat(subsets(arr.slice(1)), subArr))
//   debugger;
//   // subArr.push(tempPop);

//   // debugger;
//   // Include this element
//   // subArr.push(tempInc);
//   debugger;
//   subArr.push(tempInc.concat(subsets(arr.slice(1)), subArr))
//   debugger;
//   // subArr.push(tempInc);
//   // debugger;

//   console.log(subArr);
//   // if (arr.length === 2) {

//   // }

//   // return subArr;
// }
// subsets([1, 2]) // [[], [1]]
// console.log(subsets([1, 2, 3]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
