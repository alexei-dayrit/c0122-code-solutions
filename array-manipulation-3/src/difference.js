/* exported difference */

/*
  - Create new array variable
  - Loop through first input array
    - If second array does NOT include first array at current index,
      - then push current value into new array var
  - Loop through second input array
    - If first array does NOT include second array at current index,
      - then push current value into new array var
  - Return new array var outside loop
*/

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (!first.includes(second[a])) {
      newArray.push(second[a]);
    }
  }
  return newArray;
}
