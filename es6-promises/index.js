const takeAChance = require('./take-a-chance');

const myLuck = takeAChance('Alexei');

myLuck.then(fulfillmentValue => {
  console.log(fulfillmentValue);
}).catch(error => {
  console.error(error.message);
});
