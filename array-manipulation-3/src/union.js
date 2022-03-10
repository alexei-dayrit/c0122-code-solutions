/* exported union */

/*
  - Create new array variable
  - Loop through first array
    - If new array does NOT include first array at current index,
      - then push current value into new array variable
  - Loop through second array
    - If new array does NOT include second array at current index,
      - then push current value into new array varaible
  - Return new array variable
*/

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (!newArray.includes(second[a])) {
      newArray.push(second[a]);
    }
  }
  return newArray;
}
