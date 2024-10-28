"use strict";

const date_diff_indays = (date1, date2) => {
  return (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
};

console.log(date_diff_indays("04/02/2014", "11/04/2014"));
console.log(date_diff_indays("12/02/2014", "11/04/2014"));
