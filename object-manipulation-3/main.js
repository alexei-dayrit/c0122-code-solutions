console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playersObj = [
  {
    name: 'Player1',
    hand: null,
    score: 0
  },
  {
    name: 'Player2',
    hand: null,
    score: 0
  },
  {
    name: 'Player3',
    hand: null,
    score: 0
  },
  {
    name: 'Player4',
    hand: null,
    score: 0
  }
];

var ranks = ['A', 'K', 'Q', 'J', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];

/*
  - Create deck array var
  - Create object var holding with property names of 'suit' and 'rank'
  - Loop through suits,
    - Loop through ranks
      - At each index assign suit value and rank value
      - Push card into deck
      - Clear card object
  - Return deck array
*/

function createDeck() {
  var deck = [];
  var card = { suit: '', rank: '' };
  for (var i = 0; i < suits.length; i++) {
    for (var a = 0; a < ranks.length; a++) {
      card.suit = suits[i];
      card.rank = ranks[a];
      deck.push(card);
      card = { suit: '', rank: '' };
    }
  }
  return deck;
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log('create deck:', createDeck());
var gameDeck = createDeck();
console.log('shuffled deck:', shuffle(gameDeck));
var shuffledGameDeck = shuffle(gameDeck);

/*
  - Create card array variable
  - Loop through playersObj
    - pop two cards and push them into cards array
    - give two cards to current player by assigning hand to cards array
  - return deck
*/

function dealCards(deck) {
  var cards = [];
  for (var i = 0; i < playersObj.length; i++) {
    cards.push(deck.pop());
    cards.push(deck.pop());
    playersObj[i].hand = cards;
    cards = [];
  }
  return deck;
}
console.log('deck after dealCards:', dealCards(shuffledGameDeck));

/*
  Rules:
  1. Aces = 11 pts
  2. Face Cards = 10 pts
  3. # cards = their value
  Find highest score

  - Loop through playersObj
    - Loop through player hands
      - Check current player hand for card ranks
        - If Aces then add 11 to points
          - Add up points and store it into each playerObj.score
        - If Face Cards add 10 points
          - Add up points and store it into each playerObj.score
        - If # add # to points (convert to int first?)
          - Add up points and store it into each playerObj.score
*/

function calculateScore() {
  for (var i = 0; i < playersObj.length; i++) {
    for (var a = 0; a < playersObj[i].hand.length; a++) {
      if (playersObj[i].hand[a].rank === 'A') {
        playersObj[i].score += 11;
      } else if (playersObj[i].hand[a].rank === 'K' || playersObj[i].hand[a].rank === 'Q' ||
        playersObj[i].hand[a].rank === 'J') {
        playersObj[i].score += 10;
      } else {
        playersObj[i].score += parseInt(playersObj[i].hand[a].rank);
      }
    }
  }
}

calculateScore();

/*
  Find winner
  - Make winner object with name and score
  - Loop through playersObj
    - If current players score is greater than current winner score.
      - Then winner score = current player's score
      - Then winner name = current player's name
  - console.log winner statement
  - return winner
*/

function findWinner() {
  var winner = { name: '', score: 0 };
  for (var i = 0; i < playersObj.length; i++) {
    if (playersObj[i].score > winner.score) {
      winner.score = playersObj[i].score;
      winner.name = playersObj[i].name;
    }
  }
  console.log('The winner is... ' + winner.name + '!');
  return winner;
}

console.log('winner:', findWinner());
console.log('playersObj at the end:', playersObj);
