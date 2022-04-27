/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const originalFront = queue.dequeue();
  queue.enqueue(originalFront);
}
