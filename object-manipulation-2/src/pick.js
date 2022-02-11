/* exported pick */
function pick(source, keys) {
  var keyOne = keys[0];
  var keyTwo = keys[1];
  var newObject = {};
  for (var prop in source) {
    if (keyOne === prop) {
      newObject[keyOne] = source[prop];
    } else if (keyTwo === prop) {
      newObject[keyTwo] = source[prop];
    }
  }
  return newObject;
}
