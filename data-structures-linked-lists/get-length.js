/* exported getLength */

function getLength(list) {
  let counter = 1;
  for (; list.next !== null;) {
    counter++;
    list = list.next;
  }
  return counter;
}
