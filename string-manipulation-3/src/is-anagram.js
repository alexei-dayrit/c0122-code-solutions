/* exported isAnagram */

/*
  - Create var to split firstString by letter
  - Create var to split secondString by letter
  - Loop through

*/
function isAnagram(firstString, secondString) {
  var splitFirstStr = firstString.split('');
  var splitSecondStr = secondString.split('');
  console.log('split first string:', splitFirstStr);
  var secondArr = [];
  for (var i = 0; i < splitSecondStr.length; i++) {
    if (splitSecondStr[i] !== ' ') {
      secondArr.push(splitSecondStr[i]);
    }
  }
  var firstArr = [];
  for (var a = 0; a < splitFirstStr.length; a++) {
    if (splitFirstStr[a] === undefined || splitFirstStr[a] === ' ') {
      break;
      // splice???
    } else {
      firstArr.push(splitFirstStr[a]);
    }
  }
  // WRONG: SCHOOL returns true and DEBIT CARD returns false
  // BOTH have first array losing second word, in general first array loses second word
  console.log('first NO SPACE: ', firstArr);
  console.log('second NO SPACE: ', secondArr);

  var noSpaceFirst = firstArr.sort().join('');
  var noSpaceSecond = secondArr.sort().join('');

  // console.log('first SORTED: ', noSpaceFirst);
  // console.log('second SORTED: ', noSpaceSecond);
  if (noSpaceFirst === noSpaceSecond) {
    return true;
  } else {
    return false;
  }
}
