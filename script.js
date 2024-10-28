"use strict";

const days_passed = (date) => {
  return (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24);
};

console.log(days_passed(new Date(2015, 0, 15)));

console.log(days_passed(new Date(2015, 11, 14)));
