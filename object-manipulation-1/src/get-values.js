/* exported getValues */

/*
  - Create empty array variable
  - Loop through object
  - Push property values by accessing object at current key of loop
  - Return array
*/

function getValues(object) {
  var val = [];
  for (var key in object) {
    val.push(object[key]);
  }
  return val;
}
