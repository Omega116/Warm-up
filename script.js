"use strict";

const FizzBuzz = (n) => {
  let arr = [];
  if (n === "Fizz") {
    let multiply = 3;
    let counter = 1;
    while (counter * multiply <= 100) {
      arr.push(counter * multiply);
      counter++;
    }
  } else if (n === "Buzz") {
    let multiply = 5;
    let counter = 1;
    while (counter * multiply <= 100) {
      arr.push(counter * multiply);
      counter++;
    }
  } else if (n === "FizzBuzz") {
    for (let i = 3; i < 100; i++) {
      if (i % 3 === 0) {
        arr.push(i);
      }
      if (i % 5 === 0) {
        arr.push(i);
      }
    }
  } else {
    arr = Array.from({ length: 100 }, (_, i) => i + 1);
  }
  for (const item of arr) {
    console.log(item);
  }
};

console.log(FizzBuzz("FizzBuzz"));
