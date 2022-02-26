/* exported omit */

/*
  - Create newObj variable
  - Loop through source object
    - If keys array DOES NOT (!) include current property name,
      - set newObj to have current prop name and key
  - Return new object
*/

function omit(source, keys) {
  var newObject = {};
  for (var prop in source) {
    if (!keys.includes(prop)) {
      newObject[prop] = source[prop];
    }
  }
  return newObject;
}

// Need to check if current key is found in the ENTIRE object, not just current prop
