// MATH OBJECT
var num1 = 4;
var num2 = 5;
var num3 = 10;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Batman', 'Thor', 'Superman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// ARRAY METHODS
var library = [
  {
    title: 'Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding'
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

// STRING METHODS
var fullName = 'Alexei Dayrit';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
