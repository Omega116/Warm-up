"use strict";

const pattern = (n, el) => {
  for (let i = 1; i <= n; i++) {
    console.log(el.repeat(i));
  }
};

pattern(5, "*");
