"use strict";

const difference = (arr, arr2) => {
  let array = [...arr, ...arr2];
  let set = new Set(array.flat(Infinity));
  let finalArr = Array.from(set).sort((a, b) => a - b);
  return finalArr.map((el) => el.toString());
};

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
