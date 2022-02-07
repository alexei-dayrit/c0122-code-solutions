/* exported compact */

/*
  - Make variable for new array to house truthy values
  - Loop through input array
  - Create if statement with condition to check if array index is truthy
  - If truthy push into new array variable
  - Return new array variable outside loop
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

/*
  NOTE FOR MYSELF
  "if (array[i])" checks if value is truthy.
  Conditionals execute if condition resolves to a truthy value.
*/
