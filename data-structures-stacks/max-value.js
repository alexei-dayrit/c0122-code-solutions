/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxVal = stack.peek();
  for (; stack.peek() !== undefined;) {
    const currentVal = stack.pop();
    if (currentVal > maxVal) {
      maxVal = currentVal;
    }
  }
  return maxVal;
}
