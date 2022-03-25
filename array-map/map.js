const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages2 = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

function map(array, transform) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(transform(array[i]));
  }
  return newArr;
}

console.log('USING BONUS CHALLENGE BELOW');

const doubledMap = map(numbers2, num => num * 2);
console.log('doubledMap const:', doubledMap);

const pricesMap = map(numbers2, num => `$${num.toFixed(2)}`);
console.log('pricesMap const:', pricesMap);

const upperCasedMap = map(languages2, lang => lang.toUpperCase());
console.log('upperCasedMap const:', upperCasedMap);

const firstLettersMap = map(languages2, lang => lang[0]);
console.log('firstLettersMap const:', firstLettersMap);
