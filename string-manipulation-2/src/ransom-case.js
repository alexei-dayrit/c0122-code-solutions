/* exported ransomCase */

/*
  - Create an empty string variable
  - Loop through input string
  - If current character index is even then make it lowercase and add to empty variable
  - If current character index is odd then make it uppercase and add to empty variable
  - Return variable
*/

function ransomCase(string) {
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
