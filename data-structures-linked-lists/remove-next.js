/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const removedSecond = list.next.next;
  list.next = removedSecond;
}
