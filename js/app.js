'use strict';

//5 functions tied to corresponding buttons that display prompt and alert after user types in answer

function questionOne(){
  var isScaredOfDogs = prompt('Am I scared of big dogs?');
  if (isScaredOfDogs.toLowerCase() === 'yes' || isScaredOfDogs.toLowerCase() === 'y'){
    alert('You are right!');
  }else{
    alert('Sorry, buddy that\'s incorrect');
  }
  console.log(isScaredOfDogs);
}

function questionTwo(){
  var likesFootball = prompt('Do I enjoy watching football?')
  if(likesFootball.toLowerCase() === 'yes' || likesFootball.toLowerCase() === 'y'){
    alert('You know me so well!');
  }else{
    alert('Wow, why are you even taking this quiz');
  }
  console.log(likesFootball);
}

function questionThree(){
  var likesCheese = prompt('Do I like cheese?');
  if(likesCheese.toLowerCase() === 'no' || likesCheese.toLowerCase() === 'n'){
    alert('Wow, we really are besties');
  }else{
    alert('Ewwww cheese, gross');
  }
  console.log(likesCheese);
}

function questionFour(){
  var likesWorkingOut = prompt('Do I like working out?');
  if(likesWorkingOut.toLowerCase() === 'no' || likesWorkingOut.toLowerCase() ==='n'){
    alert('You got that right!');
  }else{
    alert('Sorry, I am the laziest person ever');
  }
  console.log(likesWorkingOut);
}
function questionFive(){
  var likesDoughnuts = prompt('Do I like doughnuts?');
  if(likesDoughnuts.toLowerCase() === 'yes' || likesDoughnuts.toLowerCase() === 'y'){
    alert('Mmmmmm doughnuts');
  }else{
    alert('Who doesn\'t like doughnuts');
  }
  console.log(likesDoughnuts);
}
