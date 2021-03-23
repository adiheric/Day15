const myArray = (arrayl, array2) => {
  "use strict";
  return arrayl.concat(array2);
};
console.log(myArray([10, 11], [12, 13, 14, 15]));
module.exports = myArray;
