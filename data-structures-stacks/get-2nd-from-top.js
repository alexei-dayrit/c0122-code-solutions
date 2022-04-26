/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const lastVal = stack.pop();
  const secondToLast = stack.peek();
  stack.push(lastVal);
  return secondToLast;
}

/*
  Alternative solution:

  const top = stack.pop()
  if (typeof top === 'undefined') return; // this is a guard (returns undefined)
  const next = stack.peek();
  stack.push(top);
  return next;
*/
