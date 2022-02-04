/* exported getWords */

/*
  - Make variable for array of words in the string
  - Create empty array variable for empty string inputs
  - Create if statement to return empty array if input is an empty string
  - Return array
*/

function getWords(string) {
  var words = string.split(' ');
  var empty = [];
  if (string === '') {
    return empty;
  }
  return words;
}
