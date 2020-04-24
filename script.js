// // Assignment Code

// const randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol
// }

var passwordEl = document.getElementById('password');
var generateBtn = document.getElementById('generate');


// Prompt User for Input

function getLength() {
  do { 
    var pwLengthReq = parseInt(window.prompt("Please enter a number from 8 to 128"));
  } 
  while(isNaN(pwLengthReq) || pwLengthReq > 128 || pwLengthReq < 8);

  return pwLengthReq;
}
// var length = getLength();
// console.log(length);


// Generate Random Values Functions

function getRandomLower(pwLowerReq) {

  if (pwLowerReq === true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
    else {
      return '';
    }
}
// var lower = getRandomLower();
// console.log(lower);

function getRandomUpper(pwUpperReq) {

  if (pwUpperReq === true) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
    else {
      return '';
    }
}
// var upper = getRandomUpper();
// console.log(upper);

function getRandomNumber(pwNumReq) {
  if (pwNumReq === true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
    else {
      return '';
    }
}
// var number = getRandomNumber();
// console.log(number);

function getRandomSymbol(pwSymReq) {
  const symbols = '!@#$%^&*()=+[{]},<.>/?'
  if (pwSymReq === true) {
    return symbols[Math.floor(Math.random() * symbols.length)]; //<--- assign value, console log that result, return that result
    }
    else {
      return '';
    }
}
// var symbol = getRandomSymbol();
// console.log(symbol);


// Generate Password Function

function generatePassword(){
  var passwordLength = getLength();
  var pwSymReq = confirm("Click 'Ok' to include Special Characters. Click 'Cancel' to disclude Special Characters.");
  var pwNumReq = confirm("Click 'Ok' to include Numbers. Click 'Cancel' to disclude Numbers.");
  var pwUpperReq = confirm("Click 'Ok' to include Upper-Case Characters. Click 'Cancel' to disclude Upper-Case Characters.");
  var pwLowerReq = confirm("Click 'Ok' to include Lower Case. Click 'Cancel' to disclude Numbers.");
  var generatedPassword = [];

  for (i = 0; i <= passwordLength; i++) {
    var symbol = getRandomSymbol(pwSymReq);
    var lower = getRandomLower(pwLowerReq);
    var upper = getRandomUpper(pwUpperReq);
    var number = getRandomNumber(pwNumReq);
    generatedPassword.push(lower, upper, number, symbol);
// console.log each one of these values. 
// grab the prompt info, put prompts in the top of the generate function
  }
  return generatedPassword; 
}
//Take return out of for loop - below line 92...
// because of return for loop runs one interation and doesn't occur again...
// final password.join


// var finalPassword = generatePassword();
//   console.log(finalPassword);


// Write Password To Screen

generateBtn.addEventListener("click", function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = finalPassword.join('');
    console.log(finalPassword)
}); 


// empty '' otherwise get commas

// symbol = symbol + getRandomSymbol();

// userScore = userScore + userCardChoice();

//console log every function 