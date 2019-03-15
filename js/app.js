'use strict';

var score = 0;
var name;

function name1(){
  name = prompt('Whats your name?');
}

function questionOne(){
  var isScaredOfDogs = prompt('Am I scared of big dogs?');
  if (isScaredOfDogs.toLowerCase() === 'yes' || isScaredOfDogs.toLowerCase() === 'y'){
    alert('You are right!');
    score++;
  }else{
    alert('Sorry, buddy that\'s incorrect');
  }
  console.log(isScaredOfDogs);
}

function questionTwo(){
  var likesFootball = prompt('Do I enjoy watching football?');
  if(likesFootball.toLowerCase() === 'yes' || likesFootball.toLowerCase() === 'y'){
    alert('You know me so well!');
    score++;
  }else{
    alert('Wow, why are you even taking this quiz');
  }
  console.log(likesFootball);
}

function questionThree(){
  var likesCheese = prompt('Do I like cheese?');
  if(likesCheese.toLowerCase() === 'no' || likesCheese.toLowerCase() === 'n'){
    alert('Wow, we really are besties');
    score++;
  }else{
    alert('Ewwww cheese, gross');
  }
  console.log(likesCheese);
}

function questionFour(){
  var likesWorkingOut = prompt('Do I like working out?');
  if(likesWorkingOut.toLowerCase() === 'no' || likesWorkingOut.toLowerCase() ==='n'){
    alert('You got that right!');
    score++;
  }else{
    alert('Sorry, I am the laziest person ever');
  }
  console.log(likesWorkingOut);
}
function questionFive(){
  var likesDoughnuts = prompt('Do I like doughnuts?');
  if(likesDoughnuts.toLowerCase() === 'yes' || likesDoughnuts.toLowerCase() === 'y'){
    alert('Mmmmmm doughnuts');
    score++;
  }else{
    alert('Who doesn\'t like doughnuts');
  }
  console.log(likesDoughnuts);
}
function questionSix(){
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
      score++;
    }
  }
  while (guess !== myNum && turns >= 1);

}


// // Need to still have user attempt 5 more times and count how many guesses it took
function questionSeven(){
  var countriesLived = ['united states', 'scotland', 'england', 'italy'];
  var arrayTurns = 5;
  // var index = -1;
  var correctGuess = false;

  while(arrayTurns > 0 && correctGuess === false){

    var user = prompt('What countries have I lived in?').toLowerCase();


    for(var i = 0; i < countriesLived.length; i++){
      if (countriesLived[i] === user){
        arrayTurns--;
        alert('You guessed: ' + user + '. That\'s right! Now you have ' + arrayTurns + ' turns left.');
        score++;
        correctGuess = true;

        // break;
      } //else{
      //   arrayTurns--;
      //   alert('Sorry, you didn\'t get it right. Now you have ' + arrayTurns + ' turns left.');
      //   user = prompt('Try again!').toLowerCase();
      // }

    }
  }
}

function totalScore(){
  alert(name + ' current score is ' + score);
}