/* exported initial */

/*
  - Create variable for an empty array
  - Loop through array input with condition to stop before last array element
  - Push each current value of array into new empty array variable
  - Return new array variable
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
