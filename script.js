// // Assignment Code
// // var generateBtn = document.querySelector("#generate");

const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generate');


// Generate Random Values Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()=+[{]},<.>/?'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());


// Prompt User for Input

function generateLength() {
  do { 
    var pwLengthReq = parseInt(window.prompt("Please enter a number from 8 to 128"));
  } 
  while(isNaN(pwLengthReq) || pwLengthReq > 128 || pwLengthReq < 8);
  

  console.log(pwLengthReq);

  return this.pwLengthReq;
});


generateBtn.addEventListener('click', function generateCriteria() {

  const pwSymReq = confirm("Click 'Ok' to include Special Characters. Click 'Cancel' to disclude Special Characters.");
  const pwUpperReq = confirm("Click 'Ok' to include Upper-Case Characters. Click 'Cancel' to disclude Upper-Case Characters.");
  const pwLowerReq = confirm("Click 'Ok' to include Lower-Case Characters. Click 'Cancel' to disclude Lower-Case Characters.");
  const pwNumReq = confirm("Click 'Ok' to include Numbers. Click 'Cancel' to disclude Numbers.");

  console.log(pwSymReq);
  console.log(pwUpperReq);
  console.log(pwLowerReq);
  console.log(pwNumReq);
});

// const length = pwLengthReq.value;
// const hasLower = pwLowerReq.true;
// const hasUpper = pwUpperReq.true;
// const hasNumber = pwNumReq.true;
// const hasSymbol = pwSymReq.true;
// passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);


  lower = getRandomLower();
  upper = getRandomUpper();
  number = getRandomNumber();
  symbol = getRandomSymbol();
  length = generateLength();


// // // Generate Password Function

// function generatePassword(lower, upper, number, symbol, length) {
//   let generatedPassword = '';
//   const typesCount = getRandomLower + getRandomUpper + getRandomNumber + getRandomSymbol; 
//   console.log('typesCount: ', typesCount);
//   const typesArr = [{ getRandomLower }, {getRandomUpper}, {getRandomNumber}, {getRandomSymbol}].filter(item => Object.values(item)[0]);
//   console.log('typesaArr: ', typesArr);


//   // Doesn't have a selected type 

//   if(typesCount === 0) {
//     return '';
//   } 

//   // Creates a Loop

//   for(let i=0; i<length; i+=typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];
//       generatedPassword += pwFunc[funcName]();
//     });
//   }

//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// }


// // Write password to the #password input

// generateBtn.addEventListener("click", function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// });
