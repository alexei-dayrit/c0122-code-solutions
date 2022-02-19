/* exported invert */

/*
  - Create new object variable
  - Loop through source object
    - New object at key value is equal to current prop
  - Return new object
*/

function invert(source) {
  var newObj = {};
  for (var prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}

/*
  source = object
  prop = object keys
  source[prop] = key value
*/
