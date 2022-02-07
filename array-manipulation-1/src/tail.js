/* exported tail */

/*
  - Create variable for empty array
  - Loop through array, but skip first index
  - Push into new empty array
  - Return new array variable
*/

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
