"use strict";

const replace = (str) => {
  let newStr = str.replace(/\d/, "$");
  if (newStr.includes("$")) {
    return newStr;
  } else {
    return "no digits";
  }
};

console.log(replace("sdfv6v0"));
