/* exported drop */

/*
  - Create new array variable
  - Loop through input array, initialize var i at count
  (starting at count, makes loop "skip" elements we want to drop)
    - Push array at current index into new array variable
  - Return new array outside of loop
*/

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/* FIRST ATTEMPT
---------------
  - Create new array variable
  - Loop through input array
  - If current index is greater than or equal to input count,
    - then push array at current index into new array var
  - Return new array variable outside loop
--------------
function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
*/
