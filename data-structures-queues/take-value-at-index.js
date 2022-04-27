/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  let front = queue.dequeue();
  for (let i = 0; index > i; i++) {
    queue.enqueue(front);
    front = queue.dequeue();
  }
  return front;
}
