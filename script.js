"use strict";

const showDay = (date) => {
  let ourDate = new Date(
    Number(date.slice(-4)),
    Number(date.slice(3, 5)) - 1,
    Number(date.slice(0, 2))
  );
  if (Number(date.slice(3, 5)) - 1 > 12 || Number(date.slice(0, 2)) > 30) {
    return "not a valid date";
  } else {
    return ourDate.toLocaleDateString("en-us", { weekday: "long" });
  }
};

console.log(showDay("07/11/2000"));
console.log(showDay("11/06/2017"));
console.log(showDay("11/26/2017"));
