/* exported dropRight */

/*
// INITIAL PSEUDO
  - Create new array variable
  - Loop through input array
  - If current index is less than array length MINUS count,
  (condition makes it so we can stop looping once we reach count)
    - Then push array at current index into new array var,
    - Else return new array variable now
  - Return new array variable outside loop

// FINAL PSEUDO
  - Create new array variable
  - Loop through input array - input count
    - Push current index into new array
  - Return new array variable
  (Don't need if statements if I can change loop condition instead)
*/

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/*

FIRST ATTEMPT (it works, but more code)
----------------------------------
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - count) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}

*/
