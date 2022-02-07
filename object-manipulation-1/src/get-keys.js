/* exported getKeys */

/*
  - Create variable for empty array
  - Loop through object
  - Push keys into empty array
  - Return empty array
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
