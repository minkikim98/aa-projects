/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array 
of objects as the first parameter and a string as the second. The 
`keyInObjectArray` function will return `true` if any of the objects contains 
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // your code here
  let exists = false;
  objArray.forEach(curr => {
    // console.log(curr[keyString]);
    if (curr[keyString] !== undefined) exists = true;
  });
  return exists;
}

// let objArray = [
//   { name: "Rupert" },
//   { age: 42 },
//   { planet: "Earth", system: "Milky Way" }
// ];
// console.log(keyInObjectArray(objArray, "planet"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
