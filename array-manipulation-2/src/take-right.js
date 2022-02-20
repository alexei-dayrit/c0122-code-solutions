/* exported takeRight */

/*
  - Create new array variable
  - If count is greater than array length,
    - then return array input
  - Loop through array, with initialization at array.length - count
  - Return new array outside loop
*/

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
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
