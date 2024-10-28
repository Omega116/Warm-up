"use strict";

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const removeProperty = (obj, prop) => {
  delete obj[prop];
};

console.log(student);
removeProperty(student, "rollno");
console.log(student);
