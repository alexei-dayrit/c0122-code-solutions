/* exported zip */

/*
  - Create new array variable to return
  - Create new temporary array variable to store each pair
  - Create new variable to hold smallest array
  - If first.length is less than second.length,
    - then first is smallest, else second is smallest
  - Loop through smaller array
    - push first array at current index into temp array var
    - push second array at current index into temp array var
    - Push temp array var into new array variable
    - Clear temp array
  - Return new array variable
*/

function zip(first, second) {
  var newArray = [];
  var tempArray = [];
  var smallestArray = [];
  if (first.length < second.length) {
    smallestArray = first;
  } else {
    smallestArray = second;
  }
  for (var i = 0; i < smallestArray.length; i++) {
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    newArray.push(tempArray);
    tempArray = [];
  }
  return newArray;
}
