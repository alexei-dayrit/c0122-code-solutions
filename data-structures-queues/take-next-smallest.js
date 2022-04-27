/* exported takeNextSmallest */

// Ex: 4 < - 3 < - 5 < - 2 <- 3
// answer would be 3 because 3 is less than 5

// pseudo code: dequeue first item, and then compare it to the new first item
// if not less than the put it in the back and start again

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

/*
  Alternate solution:

  let nextSmallest = queue.dequeue();
  while (nextSmallest > numberQueue.peek()) {
    queue.enqueue(nextSmallest);
    nextSmallest = numberQueue.dequeue();
  }
  return nextSmallest
*/
