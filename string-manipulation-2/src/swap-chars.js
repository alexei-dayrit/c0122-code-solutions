/* exported swapChars */

/*
  - Create an empty string variable
  - Store both input indexes into separate variables
  - Loop through string
  - If current index (i) === firstIndex, then concat new variable with value at secondIndex
  - If current index (i) === secondIndex, then concat new variable with value at firstIndex
  - If both false, then concat new variable with current index value
  - Return new string variable
*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var valOne = firstIndex;
  var valTwo = secondIndex;
  for (var i = 0; i < string.length; i++) {
    if (i === valOne) {
      newString += string[valTwo];
    } else if (i === valTwo) {
      newString += string[valOne];
    } else {
      newString += string[i];
    }
  } return newString;
}
