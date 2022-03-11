/* exported unique */

/*
  - Create new array variable
  - Loop through entire input array
    - If current index value is NOT found in new array then add it to new array
  - Return new array variable
*/

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
