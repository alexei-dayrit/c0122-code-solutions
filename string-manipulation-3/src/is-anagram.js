/* exported isAnagram */

/*
  - Create var to split firstString by letter
  - Create var to split secondString by letter
  - Loop through

*/
// might have to split by word first?
function isAnagram(firstString, secondString) {
  var splitFirstStr = firstString.split('');
  var splitSecondStr = secondString.split('');
  console.log('split', splitFirstStr);
  var firstArr = [];
  var secondArr = [];

  for (var i = 0; i < splitSecondStr.length; i++) {
    if (splitSecondStr[i] !== ' ') {
      secondArr.push(splitSecondStr[i]);
      firstArr.push(splitFirstStr[i]);
    }
  }
  var firstCleanArr = [];
  for (var a = 0; a < splitFirstStr.length; a++) {
    if (splitFirstStr[a] !== undefined) {
      firstCleanArr.push(firstArr[a]);
    }
  }

  console.log('first:  ', firstCleanArr);
  console.log('second:  ', secondArr);

  var noSpaceFirst = firstArr.sort().join('');
  var noSpaceSecond = secondArr.sort().join('');

  // console.log('firstArr: ', noSpaceFirst);
  // console.log('secondArr: ', noSpaceSecond);
  if (noSpaceFirst === noSpaceSecond) {
    return true;
  } else {
    return false;
  }
}
