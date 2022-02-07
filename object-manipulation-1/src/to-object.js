/* exported toObject */

/*
  - Create an empty object variable
  - Create key variable to access input parameter at index 0
  - Create value variable to access input parameter at index 1
  - Make empty object variable at key equal the value variable
  - Return object variable
*/

function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var val = keyValuePair[1];
  object[key] = val;
  return object;
}
