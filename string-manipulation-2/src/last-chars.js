/* exported lastChars */

/*
  - Create variable
  - Access string at it's character length MINUS input length
  - Return variable
*/

function lastChars(length, string) {
  var last = string.substring(string.length - length);
  return last;
}
