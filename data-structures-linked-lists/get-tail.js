/* exported getTail */

function getTail(list) {
  let copy = list;
  let last = copy.data;
  while (copy.next !== null) {
    copy = copy.next;
    last = copy.data;
  }
  return last;
}
