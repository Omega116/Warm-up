"use strict";

const swap = (arr) => {
  if (arr.length % 2 != 0) {
    return "not even length";
  } else {
    let newArr = arr.slice(0, arr.length / 2);
    let newArr1 = arr.slice(arr.length / 2);
    return [...newArr1, ...newArr];
  }
};

console.log(swap([1, 5, 9, 25]));
