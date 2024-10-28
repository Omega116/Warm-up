"use strict";

const filter_array_values = (arr) => {
  return arr.filter((el) => {
    if (el) {
      return el;
    }
  });
};

console.log(filter_array_values([58, "", "abcd", true, null, false, 0]));
