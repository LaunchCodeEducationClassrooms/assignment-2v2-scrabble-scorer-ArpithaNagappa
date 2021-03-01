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
	word = word.toLowerCase();
	//let letterPoints = "";
  let letterPoints=0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += Number(pointValue);
      
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

//let simpleScore;

const simplePointStructure = {
  1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

function simpleScore(word) {
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

//let vowelBonusScore;

const vowelPointStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

function vowelBonusScore(word) {
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

//let scrabbleScore;
function scrabbleScore(word) {
	word = word.toLowerCase();
	//let letterPoints = "";
  let letterPoints=0;
  let transformedLetter;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in newPointStructure) {
 
		 if (pointValue==word[i]) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += newPointStructure[word[i]];
		 }
 
	  }
	}
	return letterPoints;
 }

const scoringAlgorithms = [
['Simple Score', 'Bonus Vowels','Scrabble'],
['Each letter is worth 1 point.','Vowels are 3 pts, consonants are 1 pt.','The traditional scoring algorithm.'],
['simpleScore()','vowelBonusScore()','scrabbleScore()']
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
    score = simpleScore(word);
  }
  else if (response == 1)
  {
    score = vowelBonusScore(word);
  }
  else if (response == 2)
  {
    score = scrabbleScore(word);
  }
  console.log(`Score for '${word}': ${score}`);
}


let newPointStructure = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
};

//let newPointStructure;

function transform(oldObject) 
{
  //key = key.toLowerCase();
	let letterPoints = "";
  //let letterPoints=0;	
  let newObject = {}
 
	  for (const pointValue in oldObject) {
 
	   //if (key == pointValue)
     //{
       //letterPoints += newPointStructure[key];
     //}
 
	  }
	
	return newObject;
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

