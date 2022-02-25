/* exported reverseWords */

/*
  - Create var for string split by words
  - Create empty array for reversed string
  - Loop through split array:
    -Split each index at split array by letter, reverse it, then join them by letter
    -Then push that value into reversed array
  -Make reversed string variable which joins reversed array by space
  -Return reversed string outside loop
*/

function reverseWords(string) {
  var splitWordsArr = string.split(' ');
  var reversedArr = [];
  for (var i = 0; i < splitWordsArr.length; i++) {
    reversedArr.push(splitWordsArr[i].split('').reverse().join(''));
  }
  var reversedStr = reversedArr.join(' ');
  return reversedStr;
}
