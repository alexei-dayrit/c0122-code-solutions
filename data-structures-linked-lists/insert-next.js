/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const everythingElse = list.next;
  list.next = new LinkedList(value);
  // console.log('list after:', list.print());
  list.next.next = everythingElse;
}
