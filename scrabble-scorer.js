// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	//let letterPoints = "";
  let letterPoints=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += transform(word[i]);
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let response = input.question("Let's play some scrabble! Enter a word : ");
   //console.log(oldScrabbleScorer(response));
   return response;
};

let simpleScore;

const simplePointStructure = {
  1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

function simpleScorer(word) {
	word = word.toUpperCase();
	//let simpleScore = "";
  let simpleScore=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			//simpleScore += `Points for '${word[i]}': ${pointValue}\n`
      simpleScore += Number(pointValue);
		 }
 
	  }
	}
	return simpleScore;
 }

let vowelBonusScore;

const vowelPointStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

function vowelBonusScorer(word) {
	word = word.toUpperCase();
	//let vowelBonusScore = "";
  let vowelBonusScore=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			//vowelBonusScore += `Points for '${word[i]}': ${pointValue}\n`
      vowelBonusScore += Number(pointValue);
		 }
 
	  }
	}
	return vowelBonusScore;
 }

let scrabbleScore;

const scoringAlgorithms = [
  ['Simple Score','Each letter is worth 1 point.','oldScrabbleScorer'],['Bonus Vowels','	Vowels are 3 pts, consonants are 1 pt.','simpleScore'],['Scrabble','The traditional scoring algorithm.','vowelBonusScore']
];

function scorerPrompt(word) {
  let score;
  console.log("Which scoring algorithm would you like to use?\n");

  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  let response = input.question("Enter 0, 1, or 2: ");
  if (response == 0)
  {
    score = simpleScorer(word);
  }
  else if (response == 1)
  {
    score = vowelBonusScorer(word);
  }
  else if (response == 2)
  {
    score = oldScrabbleScorer(word);
  }
  console.log("Score for 'coconut': "+score);
}


const newPointStructure = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
};

//let newPointStructure;

function transform(key) 
{
  //key = key.toLowerCase();
	//let letterPoints = "";
  let letterPoints=0;	
 
	  for (const pointValue in newPointStructure) {
 
	   if (key == pointValue)
     {
       letterPoints += newPointStructure[key];
     }
 
	  }
	
	return letterPoints;
};


function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

