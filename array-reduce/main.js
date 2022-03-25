const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previous, current) => previous + current);
console.log('sum const:', sum);

const getProduct = (previous, current) => previous * current;
const product = numbers.reduce(getProduct);
console.log('product const:', product);

const initialValue = 0;
const getBalance = (previous, current) => {
  let currentBalance = 0;
  if (current.type === 'deposit') {
    currentBalance += previous + current.amount;
  } else {
    currentBalance += previous - current.amount;
  }
  return currentBalance;
};
const balance = account.reduce(getBalance, initialValue);
console.log('balance const:', balance);

const getComposite = (previous, current) => Object.assign(previous, current);
const composite = traits.reduce(getComposite);
console.log('composite const:', composite);
