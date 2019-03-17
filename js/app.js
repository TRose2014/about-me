'use strict';

var score = 0;
// eslint-disable-next-line no-redeclare
var name = prompt('Whats your name?');
var thankYou = alert('Hi ' + name + '!, Welcome to my site. Enjoy!');

// function name1(){
//   name = prompt('Whats your name?');
// }

//Button One -  Scaared of Dogs?
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

//Button Two - Watch Football?
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


//Button Three - Like Cheese?
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

//Button Four - Like Working Out?
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

//Button Five - Like Doughnuts?
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

//Button Six - Fave Number?
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
    } if (turns < 1) {
      alert('Hey ' + name + '! I said you were out of turns!');
    } if (guess === myNum){
      alert('OMG! You are right!');
      score++;
    }
  }
  while (guess !== myNum && turns >= 1);

}


// Button Seven - Countries I Lived?
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
        alert('You guessed: ' + user + '. That\'s right! I have lived in the United States, Scotland, England and Italy!');
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
  alert(name + ', your current score is ' + score);
}
