/* exported getIndexes */

function getIndexes(array) {
  var newArray = [];
  for (var i = 1; i <= array.length; i++) {
    newArray.push(i - 1);
  } return newArray;
}
