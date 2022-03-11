/* exported intersection */

/*
  - Create new array variable
  - Loop through first array
    - If second array includes first array at current index,
      - then push into new array variable
  - Return new array var outside loop
*/

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
