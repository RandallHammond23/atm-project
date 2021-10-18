"use strict"


const {pin, balance, promptFor, chars} = require();



balance;



function getBalance(balance){
    alert("Your balance is" + balance );

}


function withdraw(){
let userInput = promptFor("How much do you want to withdraw?", chars);
let withdrawAmount; 
 switch(number){
    case 20:
    withdrawAmount = 20;
    break;
    case 40:
    withdrawAmount = 40;
    break;
    case 60: 
    withdrawAmount = 60;
    break;
    case 80:
    withdrawAmount = 80;
    break;
    case 100:
    withdrawAmount = 100;
     break;
    case userInput:
    withdrawAmount = userInput;
    break;
 }
    return withdrawAmount;
}

function deposit(balance){
let userInput = promptFor("How much do you want to deposit?", chars);
let newBalance =userInput + balance;
return newBalance;

}

function validatePin(){

    
}
