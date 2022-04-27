/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  let copy = list;
  const newHead = list.next;
  const everythingElse = list.next.next;
  copy = newHead;
  copy.next = list;
  copy.next.next = everythingElse;
  return copy;
}
