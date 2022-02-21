/* exported omit */

/*
  - Create newObj variable
  - Create storage variable
  - Loop through source object
    - If current prop is equal to first or second key,
      - Then add it to storage
    - Else new object at current prop is equal to current key
  - Return new object
*/

function omit(source, keys) {
  var newObject = {};
  var storage = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (keys[i] === prop) {
        storage[prop] = source[prop];
        break;
      } else if (keys[i] !== prop) {
        newObject[prop] = source[prop];
      }
    }
  }
  return newObject;
}

// function omit(source, keys) {
//   var newObject = {};
//   for (var i = 0; i < keys.length; i++) {
//     for (var prop in source) {
//       if (keys[i] === prop) {
//         break;
//       } else if (keys[i - 1] !== prop) {
//         newObject[prop] = source[prop];
//       }
//     }
//   }
//   return newObject;
// }
