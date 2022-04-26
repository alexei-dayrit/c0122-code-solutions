/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;

  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) return first;

  let min = queue.peek();
  if (first < second) {
    min = first;
    queue.enqueue(second);
  } else if (first > second) {
    min = second;
    queue.enqueue(first);
  } else if (first === second) {
    min = first;
    queue.enqueue(first);
  }
  return min;
}
