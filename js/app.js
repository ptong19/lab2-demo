'use strict';

alert('Ready');
alert('3');
alert('2');
alert('1');


var userName = prompt(' Hi there what is your name?');
console.log('The users name is '+ userName);
alert('My name is PT Nice to meet you ' + userName);

var comeFrom = prompt('Hey!!' + userName + ' Do you know that I came from Southeast Asia?');

comeFrom = comeFrom.toLocaleLowerCase();

if (comeFrom === 'yes') {
    alert('I am from Thailand');
    console.log(userName+ " "+ 'know that I am from Thailand');
} else {
    alert('how can you not tell that I came from thailand');
    console.log(userName+ " "+ 'don\'t know that I am from Thailand');

}

var barTender = prompt(userName + " " + 'Do you like cocktail? ');

barTender = barTender.toLocaleLowerCase();

if (barTender === 'yes') {
    alert('I am bartender that what I like to do for living');
    console.log(userName+ " "+ 'Like to drink cocktail');
} else {
    alert('why you don\'t like drinking alcohol, I can make you a yummy drink')
    console.log(userName+ " "+ 'Like to drink cocktail');

}


var codeFellow = prompt(userName + " " + ' Have you heard about codefellows?');


codeFellow = codeFellow.toLocaleLowerCase();

if (codeFellow === 'yes') {
    alert('That why I am here to change my future ')
    console.log(userName+ " "+ 'know about school');

} else {
    alert(' Really!! This coding school is very poppular')
    console.log(userName+ " "+ 'may not heard about it');
}

var thisSchool = prompt(userName + " " + 'Do you think I love coding  than bartender?');

thisSchool = thisSchool.toLocaleLowerCase();

if (thisSchool === 'yes') {
    alert('I really really  love coding & I wanna be python developer ')
    console.log(userName+ " "+ 'think that I like to code');
} else {
    alert('what make you think that I love bartender more than coding')
    console.log(userName+ " "+ 'think that I love to be bartender');
}

var lastQuestion = prompt(userName + " " + 'Do you know software delveloper is my dream job?  ');

lastQuestion = lastQuestion.toLocaleLowerCase();

if (lastQuestion === 'yes') {
    alert('It is absoutely my dream job')
    console.log(userName+ " "+ 'know that is my dream job');
} else {
    alert('I already told you I love coding and  I really wanna be developer')
    console.log(userName+ " "+ 'do not know if I love to be software develpoer ');
}

alert('Wow !!! '+ userName + " " + ' you are such a good gussing ');
alert('Have a wonderful day'+ " " + userName)
