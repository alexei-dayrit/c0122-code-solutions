/* exported isVowel */

/*
  - Create variable with array of all vowels
  - Create loop to look at each element in array
  - Within the loop, create an if statement to return true if "char" is in array
  - Return false outside of loop
*/

function isVowel(char) {
  var vowels = ['a', 'A', 'e', 'E', 'o', 'O', 'i', 'I', 'u', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}

/*
// FIRST ATTEMPT //

function isVowel(char) {
  if (char === 'a' || char === 'A') {
    return true;
  } else if (char === 'o' || char === 'O') {
    return true;
  } else if (char === 'e' || char === 'E') {
    return true;
  } else if (char === 'i' || char === 'I') {
    return true;
  } else if (char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
*/
