/* exported countValues */

function countValues(stack) {
  let counter = 0;
  for (; stack.peek() !== undefined;) {
    stack.pop();
    counter++;
  }
  return counter;
}
