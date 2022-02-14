/* exported take */

/*
  - Make new array variable
  - Loop through array with condition i less than input count
    - If length of array is strictly equal to 0,
      - then return empty array
    - Push current index of array into new array variable
  - Return new array variable outside loop
*/

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    }
    newArray.push(array[i]);
  }
  return newArray;
}

/* FIRST ATTEMPT
  - Make new array variable
  - Loop through input array
  - If current index is less than count,
    - then push array at current index into new array variable
  - Return new array variable outside loop
----------------
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
*/
