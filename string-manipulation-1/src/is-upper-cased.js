/* exported isUpperCased */

/*
  1. Create loop to look at each character of the word
  2. Create if statement to check if the current character is capitalized
  3. Should return fasle if even one character is lower cased
  4. Return true if if statement doesn't return false
*/

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
