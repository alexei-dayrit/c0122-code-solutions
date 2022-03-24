const takeAChance = require('./take-a-chance');

const myLuck = takeAChance('Alexei');

myLuck.then(value => {
  console.log(value); // Fulfilled msg
}, error => {
  console.error(error.message); // Rejected msg
});
