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
  var newObj = {};
  var storage = {};
  for (var prop in source) {
    if (prop === keys[0] || prop === keys[1]) {
      storage[prop] = source[prop];
    } else {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}
