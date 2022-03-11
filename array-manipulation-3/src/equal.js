/* exported equal */

/*
  - Check if first and second array are of equal length,
    - If they're not, return false
  - Loop through one of the input arrays,
    - Then compare both arrays to each other at every index
    - Return false if they're not equal, return true outside function if they're all equal
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
