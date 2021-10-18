"use strict"

function mainMenu(){
    validatePin();
    if(validatePin = true){
        validatePin();
    }
    else{
        return promptFor("What would you like to do today?", chars);
    }
    switch(userInput){
    case getBalance:
        break;
    case withdraw:
        break;
    case deposit:
        break;
    case "quit":
        alert("Have a great day!")
    default:
        mainMenu(userInput);

    }
}