"use strict";

const swapcase = (str) => {
  let newStr = "";
  for (const letter of str) {
    if (letter === letter.toUpperCase()) {
      newStr += letter.toLowerCase();
    } else {
      newStr += letter.toUpperCase();
    }
  }
  return newStr;
};
console.log(swapcase("AaBbc"));
