"use strict";
let str = "Ali";

const removeStr = (str, letter, index) => {
  let result = "";
  let exist = false;
  for (let i = 0; i < str.length; i++) {
    if (!(i === index)) {
      result += str[i];
    }
    if (str[i] === letter) {
      exist = true;
    }
  }
  if (exist === false) {
    return `"${letter}" dosen’t exist in this string`;
  } else if (exist && str[index] != letter) {
    return `"${letter}" dosen’t exist in this position`;
  } else {
    return result;
  }
};
console.log(removeStr(str, "A", 0));
console.log(removeStr(str, "l", 2));
console.log(removeStr(str, "b", 1));
