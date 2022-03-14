/* exported isPalindromic */

/*
  - Remove spaces from string:
    - Make var to split string by space into an array
    - Make var to join string by letter
  - Reverse string:
    - Make var to split string by letter into an array
    - Make var for no spaces array
    - Loop through array of letters:
      - If current index is not an empty string,
        - Push array at current index into no spaces array
    - Use methods to reverse and then join no space array
  - If joined string === reversed string,
    - Return true
    - Else return false
*/

function isPalindromic(string) {
  var noSpacesArr = string.split(' ');
  var joinedStr = noSpacesArr.join('');

  var splitChars = string.split('');
  var noSpacesArr2 = [];
  for (var i = 0; i < splitChars.length; i++) {
    if (splitChars[i] !== ' ') {
      noSpacesArr2.push(splitChars[i]);
    }
  }
  var reversedStr = noSpacesArr2.reverse().join('');

  if (!(joinedStr === reversedStr)) {
    return false;
  } else {
    return true;
  }
}
