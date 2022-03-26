const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account2 = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits2 = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

function reduce(array, combine, initialValue) {
  let i = 0;
  if (arguments.length === 2) {
    i = 1;
    initialValue = array[0];
  }
  for (; i < array.length; i++) {
    initialValue = combine(initialValue, array[i], i, array);
  }
  return initialValue;
}

/* FIRST ATTEMPT
function reduce(array, reducer, initialValue) {
  let total = 0;
  if (initialValue) {
    total = initialValue;
  }
  for (let i = 0; i < array.length; i++) {
    // previous, current, index, array
    total = reducer(total, array[i], i, array);
  }
  return total;
}
*/

console.log('USING BONUS CHALLENGE BELOW');

const sumReduce = reduce(numbers2, (previous, current) => {
  return previous + current;
});
console.log('sumReduce const:', sumReduce);

const getProduct2 = (previous, current) => previous * current;
const productReduce = numbers2.reduce(getProduct2);
console.log('productReduce const:', productReduce);

const initialValue2 = 0;
const getBalance2 = (previous, current) => {
  let currentBalance = 0;
  if (current.type === 'deposit') {
    currentBalance += previous + current.amount;
  } else {
    currentBalance += previous - current.amount;
  }
  return currentBalance;
};
const balanceReduce = account2.reduce(getBalance2, initialValue2);
console.log('balanceReduce const:', balanceReduce);

const getComposite2 = (previous, current) => Object.assign(previous, current);
const compositeReduce = traits2.reduce(getComposite2, {});
console.log('compositeReduce const:', compositeReduce);
