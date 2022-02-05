/* exported isLowerCased */

/*
  - Create loop to check each character of the word
  - Create if statement to return false if word is NOT lowercased
  - Return true outside of loop
*/

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  } return true;
}
