"use strict";
const{ getBalance, withdraw, deposit, validatePin } = require(`./atm`);


mainMenu(userInput);


function mainMenu(userInput){
    validatePin(userInput);
    if(ture){
     promptFor("What would you like to do today?", chars);
    }
    else{
        return validatePin(userInput); 
    }
    switch(userInput){
    case "get balance":
        getBalance(balance);
        return balance;
        break;
    case "withdraw":
        withdraw(balance)
        break;
    case "deposit":
        deposit(balance);
        return;
        break;
    case "quit":
        alert("Have a great day!")
    default:
        mainMenu(userInput);

    }
}