/* exported capitalizeWord */

/*
  - Create variable for new string
  - Loop through word and make all letters lowercase
  - Make word into all lowercase
  - if (word lowercased === javascript) then capitalize j and s index
  - Then create new variable which upper cases first letter and adds lowercased
  - Return uppercase variable
*/

function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    return 'JavaScript';
  }
  var firstCap = newWord[0].toUpperCase() + newWord.slice(1);
  return firstCap;
}
