/* exported reverseWord */

/*
  - Create empty string variable
  - Create loop that starts at the last character of the word and decrements to the first character
  - Add each character to the new string variable
  - Return new string variable
*/

function reverseWord(word) {
  var backwards = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  return backwards;
}
