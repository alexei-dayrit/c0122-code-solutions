/* exported titleCase */

/*
  - Make empty string variable to hold answer
  - Make empty string var to hold current word of loop
  - Make array variable to hold capitalized words
  - Make array var for hypen words
  - Make var that holds the input string split by each word into an array and make everything lowercase
  - Loop through words array
    - If current word is javascript then,
      - Capitalize first letter and the index of 's'
      - Push capitalized word into capitalized array
    - If current word is API then,
      - Capitalize all letters
      - Push capitalized word into capitalized array
    - If current index is 0 then,
      - Push capitalized word into capitalized array
    - If previous word includes ':' then,
      - capitalize first letter then push word into capitalized array
    - If current word includes '-' then,
      - Loop through current word,
        - If previous letter is === '-' then,
          - Capitalize current letter and push into hyphenWord array
        - If current letter is the first index then,
          - Capitalize current letter and push into hyphenWord array
        - Else, push current letter into hyphenWord array
      - Push hyphenWord joined by empty string into capitalized array
    - If current word === in, for, the, of, to, on, and... then,
      - Push word into capitalized array
    - Else, capitalize first letter and push word into capitalized array
  - Make answer string equal to capitalized array joined by space
  - Return answer string
*/

function titleCase(string) {
  var answerString = '';
  var capitalizedWord = '';
  var capitalizedArr = [];
  var words = string.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'javascript' || words[i] === 'javascript:') {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1, 4) + words[i][4].toUpperCase() + words[i].slice(5);
      capitalizedArr.push(capitalizedWord);
    } else if (words[i] === 'api') {
      capitalizedWord = words[i].toUpperCase();
      capitalizedArr.push(capitalizedWord);
    } else if (i === 0) {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    } else if (capitalizedArr[i - 1].includes(':')) {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    } else if (words[i].includes('-')) {
      var letter = '';
      var hyphenWord = [];
      for (var a = 0; a < words[i].length; a++) {
        if (words[i][a - 1] === '-') {
          letter = words[i][a].toUpperCase();
          hyphenWord.push(letter);
        } else if (a === 0) {
          letter = words[i][a].toUpperCase();
          hyphenWord.push(letter);
        } else {
          letter = (words[i][a]);
          hyphenWord.push(letter);
        }
      }
      capitalizedArr.push(hyphenWord.join(''));
    } else if (words[i] === 'in' || words[i] === 'for' || words[i] === 'of' || words[i] === 'the' ||
      words[i] === 'to' || words[i] === 'on' || words[i] === 'and') {
      capitalizedArr.push(words[i]);
    } else {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    }
  }
  answerString = capitalizedArr.join(' ');
  return answerString;
}
