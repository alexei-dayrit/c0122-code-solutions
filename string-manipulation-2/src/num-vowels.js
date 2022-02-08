/* exported numVowels */

/*
  - Create a counter variable
  - Create array of all vowels
  - Loop through string input
  - If current string char is in vowels array then add 1 to counter
  - Return counter
*/

function numVowels(string) {
  var counter = 0;
  var vowels = ['a', 'A', 'e', 'E', 'o', 'O', 'u', 'U', 'i', 'I'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      counter += 1;
    }
  }
  return counter;
}

/*
ANOTHER WAY

function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A') {
      counter += 1;
    } else if (string[i] === 'a' || string[i] === 'A') {
      counter += 1;
    } else if (string[i] === 'i' || string[i] === 'I') {
      counter += 1;
    } else if (string[i] === 'u' || string[i] === 'U') {
      counter += 1;
    } else if (string[i] === 'o' || string[i] === 'O') {
      counter += 1;
    } else if (string[i] === 'e' || string[i] === 'E') {
      counter += 1;
    }
  }
  return counter;
}

*/
