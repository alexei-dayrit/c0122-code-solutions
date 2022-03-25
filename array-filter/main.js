const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('evenNumbers const:', evenNumbers);

const overFive = numbers.filter(num => num >= 5);
console.log('overFive const:', overFive);

const startWithE = names.filter(name => name[0] === 'E');
console.log('startWithE const:', startWithE);

const startWithE2 = names.filter(name => name.startsWith('E'));
console.log('startWithE2 const:', startWithE2);

const haveD = names.filter(name => {
  let nameD = '';
  for (let i = 0; i < name.length; i++) {
    if (name[i] === 'D' || name[i] === 'd') {
      nameD = name;
    }
  }
  return nameD;
});
console.log('haveD const:', haveD);

const haveD2 = names.filter(name => name.includes('D') || name.includes('d'));
console.log('haveD2 const:', haveD2);
