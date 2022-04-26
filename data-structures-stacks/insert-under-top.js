/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const last = stack.pop();
  stack.push(value);
  stack.push(last);
}

/*
Alternative solution:

const top = stack.pop()
if (typeof top === 'undefined') return;
stack.push(value);
stack.push(top);

*/
