/* exported chunk */

/*
  - Create new variable
  - Loop through entire input array, but make final expression to i += input size
  (assign final expression like this to start next iteration after we've sliced the correct 'chunk')
    - Assign variable to array.slice with arguments to (start at current index) and (end at current index PLUS size)
    - Push sliced variable into new array
  - Return new array outside loop
*/

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var sliced = array.slice(i, i + size);
    newArray.push(sliced);
  }
  return newArray;
}

/*
Notes for future self:

  ... array.slice(0, 0 + 2)
  final expression: i = 2

  ... array.slice(2, 2+ 2)
  final expression: i = 4

*/
