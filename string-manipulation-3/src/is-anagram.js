/* exported isAnagram */

/*
  - Create var to split firstString by letter
  - Create var to split secondString by letter
  - Loop through split secondString:
    - If current index at secondString is NOT an empty space, push into new secondArr
  - Loop through split firstString:
    - If current index at firstString is an empty space or undefined, continue
      - Else, push current index at firstString into new firstArr
  - Create two variables for firstArr and secondArr
    - Sort and join both vars
  - If sorted and joined vars equal each other return true, else return false

*/
function isAnagram(firstString, secondString) {
  var splitFirstStr = firstString.split('');
  var splitSecondStr = secondString.split('');

  var secondArr = [];
  for (var i = 0; i < splitSecondStr.length; i++) {
    if (splitSecondStr[i] !== ' ') {
      secondArr.push(splitSecondStr[i]);
    }
  }

  var firstArr = [];
  for (var a = 0; a < splitFirstStr.length; a++) {
    if (splitFirstStr[a] === undefined || splitFirstStr[a] === ' ') {
      continue;
    } else {
      firstArr.push(splitFirstStr[a]);
    }
  }

  var noSpaceFirst = firstArr.sort().join('');
  var noSpaceSecond = secondArr.sort().join('');

  if (noSpaceFirst === noSpaceSecond) {
    return true;
  } else {
    return false;
  }
}
