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
      if (keys[i] !== prop) {
        storage[prop] = source[prop];
        console.log('storage:', storage);
        console.log('newObj:', newObject);
        break;
      } else {
        newObject[prop] = source[prop];
      }
    }
  }
  return newObject;
}
