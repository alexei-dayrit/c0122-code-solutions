/* exported countValues */

function countValues(stack) {
  let counter = 0;
  for (; stack.peek() !== undefined;) {
    stack.pop();
    counter++;
  }
  return counter;
}

/*
Code reading:
'typeof the return of the pop method being called on stack obj with no arguments is NOT strictly equal to string undefined

Alternative solution:
while (typeof stack.pop() !== 'undefined') {
  counter++
}
*/
