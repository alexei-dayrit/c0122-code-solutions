const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names2 = [
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

console.log('USING BONUS CHALLENGE BELOW');

function filter(array, predicate) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const currentArrayItem = array[i];
    // Check if 'truthy' not necessarily true
    if (predicate(currentArrayItem)) {
      newArr.push(currentArrayItem);
    }
  }
  return newArr;
}

const evenNumbersFilter = filter(numbers2, num => num % 2 === 0);
console.log('evenNumsFilter const:', evenNumbersFilter);

const overFiveFilter = filter(numbers2, num => num >= 5);
console.log('overFiveFilter const:', overFiveFilter);

const startWithEFilter = filter(names2, name => name.startsWith('E'));
console.log('startWithEFilter const:', startWithEFilter);

const haveDFilter = filter(names2, name => name.includes('D') || name.includes('d'));
console.log('haveDFilter const:', haveDFilter);
