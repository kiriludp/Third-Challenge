// Assignment Code
var generateBtn = document.querySelector("#generate");


specSymb = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
console.log(specSymb)

lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(lowerCase)

upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
console.log(upperCase)

numbers = [1,2,3,4,5,6,7,8,9,0];
console.log(numbers);

selections= [];

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


//make generatePassword function
//prompt for password length is a number
    //if statment if number is above 8 && below 128

function generatePassword() {
    userInput = prompt("Enter number of characters between 8 and 128")
     console.log(userInput+ ",Selected");
    
    if (!userInput) {
       userInput = alert("ERROR: Input required");
    }

    else if (userInput <8 || userInput >128) {
       userInput = alert("Selection must be more than 8, Less than 128");
    
    console.log(userInput+ ",Selected");
    return;
    }
    

//confirm for lowercase, uppercase, numeric and special characters
//store there response in a variable

function results () {
     numbersConfirm = confirm("Would you like numbers in your password?")
     console.log("Numbers are " + numbersConfirm) 
     lowerCaseConfirm =confirm("Would you like lowercase letters in your password?")
     console.log("Lowercase is " + lowerCaseConfirm)
     upperCaseConfirm =confirm("Would you like upper case letters in your password?")
     console.log("Uppercase is " + upperCaseConfirm)
     specSymbConfirm = confirm ("Would you like to include special characters in your password?")
     console.log("Special characters are " + specSymbConfirm)


if (!specSymbConfirm && !numbersConfirm && !lowerCaseConfirm && !upperCaseConfirm) {
   
    alert("ERROR: Selection Required");
        return;

} else {
    if (numbersConfirm) {
    selections = selections.concat(numbers);
    }
    if (lowerCaseConfirm) {
    selections = selections.concat(lowerCase);
    }   

    if (upperCaseConfirm) {
    selections = selections.concat(upperCase);
    }

    if (specSymbConfirm) {
    selections = selections.concat(specSymb);
    }
}
    }   
 console.log(selections)
 results();

//pull random characters from the array using math.random

randomizer = '';
for (i=0; i< userInput; i++) {
    final= Math.floor(Math.random()*selections.length);
    randomizer += selections[final]

}
    return randomizer

}

