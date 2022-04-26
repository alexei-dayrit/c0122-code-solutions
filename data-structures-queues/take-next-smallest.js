/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;

  let front = queue.dequeue();
  let next = queue.peek();
  if (!next) return front;

  for (; front > next;) {
    queue.enqueue(front);
    front = queue.dequeue();
    next = queue.peek();
  }
  return front;
}
