"use strict";

const capitalize = (str) => {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
};

console.log(capitalize("omar zhioua"));
