"use strict";


const { pin, bal, promptFor, chars } = require( `./account`);


bal = 7000;




function getBalance(bal){
   
    alert("Your balance is" + bal );

}


function withdraw(balance){
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

function validatePin(userInput){
    userInput = promptFor("What is your pin?", chars);
    if(userInput != pin){
        promptFor("What is your pin?",chars);
    }


}




module.export ={
    getBalance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    validatePin: validatePin

};
