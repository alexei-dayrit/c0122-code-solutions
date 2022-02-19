/* exported takeRight */

/*
  - Create new array variable
  - Loop through array, with initialization at array.length - count
    - If count is greater than array length,
      - then return array input
    - Else push array at current index into new array
  - Return new array
*/

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      return array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* FIRST ATTEMPT
---------------
  - Create new array variable
  - Loop through array
  - If current index is greater than or equal to array length MINUS count,
  (this condition makes it so we don't have to start from beginning of array )
    - Then push array at current index into new array var
    - Return new array variable
    ---------------
    function takeRight(array, count) {
      var newArray = [];
      for (var i = 0; i < array.length; i++) {
        if (i >= array.length - count) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    }
*/
