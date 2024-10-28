"use strict";

const humanize_format = (n) => {
  if (n === undefined) {
    return "";
  } else if (n.toString().slice(-1) == 1) {
    return "1st";
  } else if (n.toString().slice(-1) == 2) {
    return n + "nd";
  } else {
    return n + "th";
  }
};
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
