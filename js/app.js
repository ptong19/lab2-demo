'use strict';

// alert('Ready');
// alert('3');
// alert('2');
// alert('1');


var userName = prompt(' Hi there what is your name?');
console.log('The users name is '+ userName);
alert('My name is PT Nice to meet you ' + userName);

// var comeFrom = prompt('Hey!!' + userName + ' Do you know that I came from Southeast Asia?');

// comeFrom = comeFrom.toLocaleLowerCase();

// if (comeFrom === 'yes') {
//     alert('I am from Thailand');
//     console.log(userName+ " "+ 'know that I am from Thailand');
// } else {
//     alert('how can you not tell that I came from thailand');
//     console.log(userName+ " "+ 'don\'t know that I am from Thailand');

// }

// var barTender = prompt(userName + " " + 'Do you like cocktail? ');

// barTender = barTender.toLocaleLowerCase();

// if (barTender === 'yes') {
//     alert('I am bartender that what I like to do for living');
//     console.log(userName+ " "+ 'Like to drink cocktail');
// } else {
//     alert('why you don\'t like drinking alcohol, I can make you a yummy drink')
//     console.log(userName+ " "+ 'Like to drink cocktail');

// }


// var codeFellow = prompt(userName + " " + ' Have you heard about codefellows?');


// codeFellow = codeFellow.toLocaleLowerCase();

// if (codeFellow === 'yes') {
//     alert('That why I am here to change my future ')
//     console.log(userName+ " "+ 'know about school');

// } else {
//     alert(' Really!! This coding school is very poppular')
//     console.log(userName+ " "+ 'may not heard about it');
// }

// var thisSchool = prompt(userName + " " + 'Do you think I love coding  than bartender?');

// thisSchool = thisSchool.toLocaleLowerCase();

// if (thisSchool === 'yes') {
//     alert('I really really  love coding & I wanna be python developer ')
//     console.log(userName+ " "+ 'think that I like to code');
// } else {
//     alert('what make you think that I love bartender more than coding')
//     console.log(userName+ " "+ 'think that I love to be bartender');
// }

// var lastQuestion = prompt(userName + " " + 'Do you know software delveloper is my dream job?  ');

// lastQuestion = lastQuestion.toLocaleLowerCase();

// if (lastQuestion === 'yes') {
//     alert('It is absoutely my dream job')
//     console.log(userName+ " "+ 'know that is my dream job');
// } else {
//     alert('I already told you I love coding and  I really wanna be developer')
//     console.log(userName+ " "+ 'do not know if I love to be software develpoer ');

// }


function endGame(tries){
  if (tries === 3)
  {
    console.log('sorry your guess is over');
    alert('done');
    return true;
  }
  else
  {
    return false;
  }


}

var guess = prompt(userName + 'What is the date of my birthday? hint between 1 to 10');

for( var i = 0; i < 4; i++)
{
// Guess less than six
  if (guess < 6)
  {
    console.log('guessed too low!');
    alert('too low!!');
    //Calls a function that checks if the last guess has been made and ends game if true
    if (endGame(i)) break;

    guess = prompt('Try more');
  }


  //guess is greater than six
  else if (guess > 6)
  {
    console.log('guessed too high!');
    alert('too High!!');

    //Calls a function that checks if the last guess has been made and ends game if true
    if (endGame(i)) break;

    guess = prompt('Try more');
  }
  else
  {
    console.log('Good Job!');
    alert('Bravo U got it!!');
    break;
  }
}


// var viSit = prompt(userName+' Let guess Where I would like to visit?')
// var wannaGo =['Paris','Tokyo','China','London','Venice','Singapore']

// viSit = viSit.toLocaleUpperCase();

// // var i = 0;
// // while(i < 6) {

// //     if (viSit === wannaGo[0] || wannaGo[1] || wannaGo[2] || wannaGo[3] || wannaGo[4] || wannaGo[5]) {
// //         viSit = prompt( 'Try again plz Hint Japan city , England city ,Italy city');
// //     } else  {
// //         alert('Niceeeeeee!!! How do you know !!!!!');
// //         break;
// //     } 
// //            i++;
// // }


var wannaGo = ['Paris','Tokyo','China','London','Venice','Singapore'];
var j = 0;
var isCorrect = false;
while(j < 6){
    var whereTo = prompt('Where I would like to visit?');
    j++;
    for(var a = 0; a < wannaGo.length; a++){
        if (whereTo === wannaGo[a]){
       alert('You got it! I really want to visit'+ wannaGo); 
       isCorrect = true;
       break;
     }

    }

    if(isCorrect === true){
        break;
    }

 }

// alert('Wow !!! '+ userName + " " + ' you are such a good gussing ');
// alert('Have a wonderful day'+ " " + userName)
// 

// viSit === wannaGo[0] || wannaGo[1] || wannaGo[2] || wannaGo[3] || wannaGo[4] || wannaGo[5] ) {
//     alert('Niceeeeeee!!! How do you know !!!!!');