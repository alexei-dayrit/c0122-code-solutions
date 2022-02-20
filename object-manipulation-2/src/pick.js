/* exported pick */

/*
  - Create new object variable
  - Loop through source object
    - If first key is equal to current property,
      - Then new object at that property is set to current key
    - If second key is equal to current prop.
      - Then new object at current prop is set to current key
  - Return new object
*/

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (source[prop] === undefined) {
        continue;
      } else if (keys[i] === prop) {
        newObject[prop] = source[prop];
      }
    }
  }
  return newObject;
}
// for (var prop in source) {
//   if (keys[0] === prop) {
//     newObject[prop] = source[prop];
//   } else if (keys[1] === prop) {
//     newObject[prop] = source[prop];
//   }
// }
// return newObject;
