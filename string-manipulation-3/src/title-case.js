/* exported titleCase */

/* TASKS:
  - Capitalize the first word of the title and of any subtitle.
  - Capitalize all “major” words(nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words(e.g., Self - Report not Self - report).
  - Capitalize all words of four letters or more.
*/
// something like if current word is less than certian number count??

/*
 Loop through string,
 - if there's a space before or after then capitalize next word
  - unless it's a preposition
 - If there's a hyphen capitalize next word
*/

function titleCase(string) {
  // var split = string.split(' ');
  // console.log('split', split);
  // var word1 = split[0].toLowerCase();
  // console.log(word1);
  // console.log(word1[0].toUpperCase());
  // for (var i = 0; i < split.length; i++) {
  // console.log(string[i]);
  // var lowerCased = split[i].toLowerCase();
  // console.log('lower', lowerCased);
  // var upperCased = lowerCased[i][0].toUpperCase() + lowerCased.slice(1);
  // console.log('upper:', upperCased);
}

// FIRST ATTEMPT
// function titleCase(string) {
//   var splitWordsArr = string.split(' ');
//   var lowerCasedArr = [];
//   var upperCasedArr = [];
//   for (var i = 0; i < splitWordsArr.length; i++) {
//     var lowerCased = splitWordsArr[i].toLowerCase();
//     // lowerCasedArr.push(lowerCased);
//     if (lowerCased.length > 3) {
//       var capitalized = lowerCased[0].toUpperCase() + lowerCased.slice(1);
//       upperCasedArr.push(capitalized);
//     }
//   }
// console.log('upperCased array:', upperCasedArr);
// console.log('lowerCased array:', lowerCasedArr);
// var joinedLower = lowerCasedArr.join(' ');
// console.log('joinedLower words:', joinedLower);

// console.log('lowerCased words:', lowerCased);
// console.log('capitalized words:', capitalized);
// }
