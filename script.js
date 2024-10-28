"use strict";

const repeat = (el, n = 1) => {
  return el.repeat(n);
};

console.log(repeat("Ha!"), repeat("Ha!", 2), repeat("Ha!", 3));
