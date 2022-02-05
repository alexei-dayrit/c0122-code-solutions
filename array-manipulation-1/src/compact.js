/* exported compact */

/*
  - Make variable for new array to house non falsy values
  - Make variable to house all falsy values
  - Loop through input array
  - Create if statement with condition to check if array index is falsy
  - If falsy push into falsy array
  - If truthy push into new array
  - Return new array outside loop
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
