"use strict";

const even = (arr) => {
  let largestEvenNumber = -1;
  for (let i = 0; i < arr.length; i++) {
    let lastDigit = arr[i] % 10;
    if (largestEvenNumber < arr[i] && lastDigit % 2 === 0) {
      largestEvenNumber = arr[i];
    }
  }
  return largestEvenNumber;
};

console.log(even([12, 0, 8, 60, 901]));
