// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";


function generatePassword() {
  var userchosenPassword = '';
  var emptyStringPool = '';
  var passwordLength = parseInt(prompt("Choose a password length from 8-128."));
    if (!passwordLength) {
      return "";
    }
    else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a number in between 8-128");
      return "";
    }
    var lowerCaseLetterChoice = confirm("Click OK if you want lowercase letters in your password.");
    if (lowerCaseLetterChoice === true) {
      emptyStringPool += lowercaseChar;
    }
    var upperCaseLetterChoice = confirm("Click OK if you want upprcase letters in your password.");
    if (upperCaseLetterChoice === true) {
      emptyStringPool += uppercaseChar;
    }
    var numericChoice = confirm("Click OK if you want numbers in your password.");
    if (numericChoice === true) {
      emptyStringPool += numericalChar;
    }
    var specialCharChoice = confirm("Click OK if you want special characters in your password.");
    if (specialCharChoice === true) {
      emptyStringPool += specialChar;
    }
    if (lowerCaseLetterChoice === false && upperCaseLetterChoice === false && numericChoice === false && specialCharChoice === false) {
      alert("You MUST choose at least one element! Try again.")
      return "";
    }

    for (var i = 0; i <= passwordLength; i++) {
    var placeHolder = emptyStringPool[Math.floor(Math.random() * emptyStringPool.length)];
    userchosenPassword += placeHolder;
  }
    return userchosenPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

