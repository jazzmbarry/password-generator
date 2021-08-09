// Assignment code here
// Arrays for possible choices
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialChar = "!#$%&()*+,-./:;<=>?@\^"
var password = ""

// Randomizer
function randomizer(max) {
  var random = Math.floor(Math.random() * max)

  return random
}

function generatePassword() {
  // reset password field
  var password = ""

  // user Inputs for characters
  var lowerCaseInput = window.prompt("How many lower case letters would you like to include?")
  var upperCaseInput = window.prompt("How many upper case letters would you like to inclued?")
  var numbersInput = window.prompt("How many numbers would you like to include?")
  var specialCharInput = window.prompt("How many special characters would you like to include?")

  // Randomizers for each character choices
  for (var i = 0; i < parseInt(lowerCaseInput); i++)  {
    var rLowerCaseInput = lowerCase[randomizer(lowerCase.length - 1)]
    password = password + rLowerCaseInput
  };

  for (var i = 0; i < parseInt(upperCaseInput); i++)  {
    var rUpperCaseInput = upperCase[randomizer(upperCase.length - 1)]
    password = password + rUpperCaseInput
  };

  for (var i = 0; i < parseInt(numbersInput); i++)  {
    var rNumbersInput = numbers[randomizer(numbers.length - 1)]
    password = password + rNumbersInput
  };

  for (var i = 0; i < parseInt(specialCharInput); i++)  {
    var rSpecialCharInput = specialChar[randomizer(specialChar.length - 1)]
    password = password + rSpecialCharInput
  };

  // Split, shuffle and join password to make it random
  var splitPassword = password.split("")
  var shufflePassword = splitPassword.sort(function() {
    return 0.5 - Math.random();
  });  
  var joinPassword = shufflePassword.join("")

  // return password to be displayed
  return joinPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
