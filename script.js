"use strict";

const unzip = (arr) => {
  arr = arr.flat();
  let arr1 = arr.filter((el) => {
    if (typeof el === "number") {
      return el;
    }
  });
  let arr2 = arr.filter((el) => {
    if (typeof el === "string") {
      return el;
    }
  });
  let arr3 = arr.filter((el) => {
    if (typeof el === "boolean") {
      return `${el}`;
    }
  });
  console.log([arr1, arr2, arr3]);
};
unzip([
  ["a", 1, true],
  ["b", 2, false],
]);
unzip([
  ["a", 1, false],
  ["b", 2],
]);
