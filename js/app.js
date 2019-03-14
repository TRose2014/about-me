'use strict';

var myNum = 7;
var turns = 4;

var guess = parseInt(prompt('Hi! Do you think you can guess my favorite number? You have 4 attempts'));
do{
  if (guess > myNum){
    turns--;
    alert('Too high, try again. You have ' + turns + ' remaining');
    guess = parseInt(prompt ('What is my number?'));
  } if (guess < myNum){
    turns--;
    alert('Too low, try again. You have ' + turns + ' remaining');
    guess =parseInt(prompt ('What is my number?'));
  } if (turns <= 0) {
    alert('Hey! I said you were out of turns cheater');
  } if (guess === myNum){
    alert('OMG! You are right!'); 
  }
}
while (guess !== myNum && turns >= 1);




// // Need to still have user attempt 5 more times and count how many guesses it took

var countriesLived = ['united states', 'scotland', 'england', 'italy'];
var arrayTurns = 5;
var index = -1;
var user = prompt('What countries have I lived in?').toLowerCase();

do{
  for(var i = 0; i < countriesLived.length; i++){
    if (countriesLived[i] === user){
      arrayTurns--;
      alert('You guessed: ' + user + '. That\'s right! Now you have ' + arrayTurns + ' turns left.');
      user = prompt('Guess again!');
      index = i;
      // break;
    }else{
      arrayTurns--;
      alert('Sorry, you didn\'t get it right. Now you have ' + arrayTurns + ' turns left.');
      user = prompt('Try again!');
    }
  // if (index > -1){
  //   alert('You guessed: ' + user + '. That\'s right!');
  // }else{
  //   alert('Sorry, you didn\'t get any right');
  }
} 
while(turns < 0);




// var countriesLived = ['united states', 'scotland', 'england', 'italy'];
// var arrayTurns = 5;
// var index = -1;

// do{
//   var user = prompt('What countries have I lived in?').toLowerCase();
//   for(var i = 0; i < countriesLived.length; i++){
//     if (countriesLived[i] === user){
//       index = i;
//       // break;
//     }
//   }
//   if (index > -1){
//     alert('You guessed: ' + user + '. That\'s right!');
//   }else{
//     alert('Sorry, you didn\'t get any right');
//   }
// }
// while(index === -1);
