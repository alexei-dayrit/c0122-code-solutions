/* exported isEmpty */

function isEmpty(queue) {
  if (queue.peek() === undefined) return true;
  return false;
}

/*
  Alternate solution:

  return typeof queue.peek() === 'undefined'
*/
