"use strict";

const flat = (str) => {
  let include = str.includes(" ");
  if (typeof str === "string") {
    console.log(str === str.toLowerCase() && !include);
  } else {
    console.log("It must be a string.");
  }
};

flat("java exercises");
flat("j");
flat("JavaScriptExercises");
flat("javascriptexercises");
flat(12356);
