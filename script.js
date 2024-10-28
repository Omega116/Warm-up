"use strict";

const showDay = (date) => {
  let ourDate = new Date(
    Number(date.slice(-4)),
    Number(date.slice(3, 5)) - 1,
    Number(date.slice(0, 2))
  );
  let c = 0;
  while (ourDate.toLocaleString("en-us", { weekday: "long" }) != "Monday") {
    ourDate = new Date(
      Number(date.slice(-4)),
      Number(date.slice(3, 5)) - 1,
      Number(date.slice(0, 2)) - c
    );
    c++;
  }
  /* let j = 0;
  let nextDate = ourDate;
  while (ourDate.toLocaleString("en-us", { weekday: "long" }) != "Sunday") {
    nextDate = new Date(
      Number(date.slice(-4)),
      Number(date.slice(3, 5)) - 1,
      Number(date.slice(0, 2)) + j
    );
    j++;
  } */
  console.log(ourDate);
  console.log(new Date(ourDate.setDate(ourDate.getDate() + 6)));
};

console.log(showDay("05/12/2022"));
console.log(showDay("30/12/2022"));
