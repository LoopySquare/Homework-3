// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

  
}
function generatePassword (){
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const num = "0123456789"
  const special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var lengthChoice = window.prompt("How many characters would you like to use?")
  if (lengthChoice > 128) {
    window.alert("Your password can not exceed 128 characters");
    return
  } else if (lengthChoice < 8) {
    window.alert("Your password must be at least 8 characters");
    return
  }
  
  var lowerChoice = window.confirm("Would you like to include lower case letters?")
  
  var upperChoice = window.confirm("Would you like to include upper case letters?")

  var numChoice = window.confirm("Would you like to include numbers?")

  var specialChoice = window.confirm("Would you like to include special characters?")
  
  if (!lowerChoice && !upperChoice && !numChoice && !specialChoice) {
    choices = alert("You must choose a criteria!");
  } 
  // 4 positive
  else if (lowerChoice && upperChoice && numChoice && specialChoice) {
    choices = lowerCase.concat(upperCase, num, special);
  }
  // 3 positive
  else if (lowerChoice && upperChoice && numChoice) {
    choices = lowerCase.concat(upperCase, num)
  }
  else if (lowerChoice && upperChoice && specialChoice) {
    choices = lowerCase.concat(upperCase, special)
  }
  else if (lowerChoice && numChoice && specialChoice) {
    choices = lowerCase.concat(num, special)
  }
  else if (upperChoice && numChoice && specialChoice) {
    choices = upperCase.concat(num, special)
  }
  //2 positive
  else if (lowerChoice && upperChoice) {
    choices = lowerCase.concat(upperCase)
  }
  else if (lowerChoice && numChoice) {
    choices = lowerCase.concat(num)
  }
  else if (lowerChoice && specialChoice) {
    choices = lowerCase.concat(special)
  }
  else if (upperChoice && numChoice) {
    choices = upperCase.concat(num)
  }
  else if (upperChoice && specialChoice) {
    choices = upperCase.concat(special)
  }
  else if (numChoice && specialChoice) {
    choices = num.concat(special)
  }
  //1 positive
  else if (lowerChoice) {
    choices = lowerCase
  }
  else if (upperChoice) {
    choices = upperCase
  }
  else if (numChoice) {
    choices = num
  }
  else if (specialChoice) {
    choices = special
  }

  var pass = [];

    for (var i = 0; i < lengthChoice; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        pass.push(pickChoices);
    }

   window.alert(pass.join("")) 
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);