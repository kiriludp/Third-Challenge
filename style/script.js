// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Create Arrays

generateBtn.addEventListener("click", writePassword);

var specSymb = '!@#$%^&*()-_+='.split(' ');
console.log(specSymb);

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split(' ');
console.log(lowerCase);

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(' ');
console.log(upperCase);

var numbers = '123456789'.split(' ');
console.log(numbers);

//make generatePassword function
//prompt for password length is a number
    //if statment if number is above 8 && below 128

function generatePassword() {
    userInput = prompt("Enter number of characters between 8 and 128 for new password");
     console.log(user.Input + ",Selected");
    
    if (!userInput) {
        alert("ERROR: Input required");
    }
    
    else if (passwordLength(x) ||x <8 , x >128) {
       userInput = alert ("Selection must be more than 8, Less than 128");
    
    console.log(userInput + ",Selected");
    return;
 
    }
}

//confirm for lowercase, uppercase, numeric and special characters
//store there response in a variable

function results() {
     numbersConfirm = confirm("Would you like numbers in your password?")
     console.log("Numbers are " + numbersConfirm)
     lowerCaseConfirm =confirm("Would you like lowercase letters in your password?");
     console.log("Lowercase is " + lowerCaseConfirm)
     upperCaseConfirm =confirm("Would you like upper case letters in your password?");
     console.log("Uppercase is " + upperCaseConfirm)
     specSymbConfirm = confirm ("Would you like to include special characters in your password?");
     console.log("Special characters are " + specSymbConfirm)
}

if (!specSymbConfirm && !numbersConfirm && !lowerCaseConfirm && !upperCaseConfirm < 1) {
   
    alert("Selection Required");
        return

} else {
if (numbersConfirm) 
    selections = selections.concat (numbers);
}
if (lowerCaseConfirm) {
    selections = selections.concat (lowerCase);
}

if (upperCaseConfirm) {
    selections = selection.concat (upperCase);
}

if (specSymbConfirm) {
    selections = selection.concat (specSymb);
}
 console.log(selections);
 results();

//pull random characters from the array using math.random 

randomizer = '';
for (i=0, i< userInput; i++;) {
    final= Math.floor(Math.random()*selections.length);
    randomizer += selections[final]
return randomizer

}