/* exported omit */

/*
  - Create newObj variable
  - Create storage variable
  - Loop through source object
    - If current prop is equal to keys array at i,
      - Then add it to storage
    - Else new object at current prop is equal to current key
  - Return new object

  // Problem is that key array isn't same order as the actual object
  // So I need to check if current key is found in the ENTIRE object, not at just that
  spot of the object
*/

function omit(source, keys) {
  // var newObject = {};
  // for (var i = 0; i < keys.length; i++) {
  //   for (var prop in source) {
  //     if (keys[i] !== source[prop]) {
  //       newObject[prop] = source[prop];
  //     }
  //   }
  // }
  // return newObject;
  var newObject = {};
  var allKeys = Object.keys(source);
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== allKeys[i]) {
        newObject[keys[i]] = source[prop];
        console.log('object:', newObject[keys[i]]);
        console.log('source[prop]:', source[prop]);
      }
    }
  }
  return newObject;
}
