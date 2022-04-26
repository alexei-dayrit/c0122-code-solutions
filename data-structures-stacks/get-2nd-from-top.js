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
