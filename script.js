"use strict";

const removeStr = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (str.length < arr[i].length) {
      str = arr[i];
    }
  }
  return str;
};

console.log(removeStr(["omar", "zhioua"]));
