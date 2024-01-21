'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Coding Challange #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinhio', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...scorers) {
  console.log(typeof scorers);
  console.log(
    `Scorers: ${scorers.join(', ')}. Number of goals: ${scorers.length}`
  );
};

team1 < team2 && console.log('Team 1 is likely to win');
team2 < team1 && console.log('Team 2 is likely to win');

printGoals(...game.scored);

/************************************************************************************/

// Coding Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').textContent = 'Submit';

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  console.log(text);
  //const splittedTextArr =  text.split(/[\n\s]+/); - REGEX USAGE for whitespace and newline, thus we can spare using the trim method.
  const splittedTextArr = text.split('\n');
  for (const [wordIndex, word] of splittedTextArr.entries()) {
    let [firstWord, secondWord] = word.trim().toLowerCase().split('_');
    if (secondWord) {
      console.log(
        [
          firstWord,
          secondWord.replace(secondWord[0], secondWord[0].toUpperCase()),
        ]
          .join('')
          .padEnd(30, ' '),
        '✅'.repeat(wordIndex + 1)
      );
    } else console.log(firstWord.padEnd(30, ' '), '✅'.repeat(wordIndex + 1));
  }
});
