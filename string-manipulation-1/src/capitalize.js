/* exported capitalize */

/*
  - Make variable to house first char as uppercase
  - Make variable to house rest of chars as lowercase
  - Add both variables together and return them
*/

function capitalize(word) {
  var cap = word[0].toUpperCase();
  var lower = word.slice(1).toLowerCase();
  return cap + lower;
}
