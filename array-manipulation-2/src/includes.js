/* exported includes */

/*
  - Loop through array
  - If array at current index is equal to input value,
    - then return true
  - Return false outside of loop
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
