/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const originalFront = queue.dequeue();
  queue.enqueue(originalFront);
  return queue.dequeue();
}
