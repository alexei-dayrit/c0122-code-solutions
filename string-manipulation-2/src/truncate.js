/* exported truncate */

/*
  - Create variable
  - Evaluate string until input length
  - Cut off remaining string
  - Append "..." to end of return value
*/

function truncate(length, string) {
  var trunc = string.substring(0, length);
  return trunc + '...';
}
