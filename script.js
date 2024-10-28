"use strict";

const isPropExist = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};
const obj1 = { name: "alison", age: 26, role: "developer" };

console.log(isPropExist(obj1, "name"));

const obj2 = { name: "ali", age: 26, role: "developer" };

console.log(isPropExist(obj2, "password"));
