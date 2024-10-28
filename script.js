"use strict";
const users = [
  { name: "fred", language: "Javascript" },
  { name: "barney", language: "TypeScript" },
  { name: "frannie", language: "Javascript" },
  { name: "anna", language: "Java" },
  { name: "jimmy" },
  { name: "nicky", language: "Python" },
];

const orderWith = (arr, prop, order) => {
  let final = [];
  let semiFinal = [];
  let c = 0;
  while (c < order.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][prop] === order[c]) {
        final.push(arr[i]);
      }
    }
    c++;
  }

  return final;
};

console.log(orderWith(users, "language", ["Javascript", "TypeScript", "Java"]));
