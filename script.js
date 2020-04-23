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

function getRandomLower() {
  var pwLowerReq = confirm("Click 'Ok' to include Lower-Case Characters. Click 'Cancel' to disclude Lower-Case Characters.");
  if (pwLowerReq === true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
    else {
      return '';
    }
}
// var lower = getRandomLower();
// console.log(lower);

function getRandomUpper() {
  var pwUpperReq = confirm("Click 'Ok' to include Upper-Case Characters. Click 'Cancel' to disclude Upper-Case Characters.");
  if (pwUpperReq === true) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
    else {
      return '';
    }
}
// var upper = getRandomUpper();
// console.log(upper);

function getRandomNumber() {
  var pwNumReq = confirm("Click 'Ok' to include Numbers. Click 'Cancel' to disclude Numbers.");
  if (pwNumReq === true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
    else {
      return '';
    }
}
// var number = getRandomNumber();
// console.log(number);

function getRandomSymbol() {
  var pwSymReq = confirm("Click 'Ok' to include Special Characters. Click 'Cancel' to disclude Special Characters.");
  const symbols = '!@#$%^&*()=+[{]},<.>/?'
  if (pwSymReq === true) {
    return symbols[Math.floor(Math.random() * symbols.length)];
    }
    else {
      return '';
    }
}
// var symbol = getRandomSymbol();
// console.log(symbol);


// Generate Password Function

function generatePassword(){
  var length = getLength();
  var symbol = getRandomSymbol();
  var lower = getRandomLower();
  var upper = getRandomUpper();
  var number = getRandomNumber();
  var generatedPassword = [];
  for (i = 0; i <= length; i++) {
    generatedPassword = generatedPassword.push(lower, upper, number, symbol);
    return generatedPassword; 
  }
}
// var finalPassword = generatePassword();
//   console.log(finalPassword);


// Write Password To Screen

generateBtn.addEventListener("click", function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}); 