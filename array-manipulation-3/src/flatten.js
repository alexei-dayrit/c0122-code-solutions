/* exported flatten */

/*
  - Create new array variable
  - Loop through input array
    - Check if current index is an array,
      - If it is, then loop through the nested array at the current index,
        - Push values of current index at input array at nested array into new array var
      - Else if not an array, push array at current index to new variable
  - Return new array variable outside loop
*/

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var a = 0; a < array[i].length; a++) {
        newArr.push(array[i][a]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
