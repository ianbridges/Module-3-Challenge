// Assignment code here
var generateBtn = document.querySelector("#generate");


// Variables
var numbers = ['0123456789']
var lowerCase = ['abcdefghijklmnopqrstuvwxyz']
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var specialCharacters = ['!@$%^*&_+=-?']
var passLength;
var numCheck;
var upCheck;
var lowCheck;
var spclCheck;


// Promt questions to determine included variables and length
function lengthQ() {
  passLength = prompt("please enter a password length between 8 & 128");
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("please enter a password length between 8 & 128");
  }
}

function numbersQ() {
  var input = prompt("Would you like to include numbers ('YES or NO')");
  while (input != "YES" && input != "NO") {
    input = prompt("Would you like to include numbers ('YES or NO')");
  }
  if (input == "YES") {
    numCheck = true;
  }
  else {
    numCheck = false;
  }
}

function lowerCaseQ() {
  var input = prompt("Would you like to include lowercase characters ('YES or NO')");
  while (input != "YES" && input != "NO") {
    input = prompt("Would you like to include lowercase characters ('YES or NO')");
  }
  if (input == "YES") {
    lowCheck = true;
  }
  else {
    lowCheck = false;
  }
}

function upperCaseQ() {
  var input = prompt("Would you like to include uppercase characters ('YES or NO')");
  while (input != "YES" && input != "NO") {
    input = prompt("Would you like to include uppercase characters ('YES or NO')");
  }
  if (input == "YES") {
    upCheck = true;
  }
  else {
    upCheck = false;
  }
}

function specialQ() {
  var input = prompt("Would you like to include special characters ('YES or NO')");
  while (input != "YES" && input != "NO") {
    input = prompt("Would you like to include special characters ('YES or NO')");
  }
  if (input == "YES") {
    spclCheck = true;
  }
  else {
    spclCheck = false;
  }
}


  // Generating Password Function
function generatePassword() {
  
  
  // Determining Variables
  lengthQ();
  lowerCaseQ();
  upperCaseQ();
  numbersQ();
  specialQ();
  while (!lowCheck && !upCheck && !numCheck && !spclCheck) {
    alert("please select at least one type of character");
    lowerCaseQ();
    upperCaseQ();
    numbersQ();
    specialQ();
  }

  var characters = "";
  var password = "";


  // Function Declares Included Variables
  if (lowCheck) {
    characters += lowerCase;
  }
  if (upCheck) {
    characters += upperCase;
  }
  if (numCheck) {
    characters += numbers;
  }
  if (spclCheck) {
    characters += specialCharacters;
  }

  for (var i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}


// Write password to #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
