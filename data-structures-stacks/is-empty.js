/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() === undefined) {
    return true;
  }
  return false;
}

/*
  Alternative solution:
  // checking the return value of the peek method being called on the stack obj with no args
  // undefined is a string because typeof returns a string

  return typeof stack.peek() === 'undefined';
*/
