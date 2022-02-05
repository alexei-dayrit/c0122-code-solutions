/* exported reverse */

/*
  - Create a variable for an empty array to house reverse order of input array
  - Loop through input array with iniatilization at 1 less than the input array length
  - Set condition to stop once at 0
  - Decrement test variable i
  - Push array[i] into new array variable
  - Return new array
*/

function reverse(array) {
  var backwards = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
