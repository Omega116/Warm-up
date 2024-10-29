"use strict";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chunkArray = (arr, m, n) => {
  let myArr = [];
  let c = 0;
  while (c < m * n) {
    myArr.push(arr.slice(c, c + n));
    c += n;
  }
  for (let i = m * n; i < arr.length; i++) {
    myArr.push(arr[i]);
  }
  return myArr;
};
console.log(chunkArray(arr, 2, 5));
console.log(chunkArray(arr, 3, 3));
