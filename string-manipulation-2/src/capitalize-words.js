/* exported capitalizeWords */

/*
  - Create variable for input string
  - Split input string into array by spaces
  - Loop through array
  - At current index of array, make first letter uppercase and remainder lowercase
  - Return the array variable joined at spaces

*/

function capitalizeWords(string) {
  var wordsArray = string.split(' ');
  for (var i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i][0].toUpperCase() +
    wordsArray[i].substring(1).toLowerCase();
  }
  return wordsArray.join(' ');
}
