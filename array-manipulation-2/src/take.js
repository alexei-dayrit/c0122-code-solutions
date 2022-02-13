/* exported take */

/*
  - Make new array variable
  - Loop through input array
  - If current index is less than count,
    - then push array at current index into new array variable
  - Return new array variable outside loop
*/

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
