"use strict";

const PromptSync = require("prompt-sync");



let userInput = promptFor("What is your pin?", chars);

promptFor() = require(PromptSync);
var pinNumber = userInput;

var balance = 7000;
function promptFor(question, valid){
    do{
        var response = prompt(question).trim();
    } while(!response || !valid(response));
    return response;
}

function chars(userInput){
    return true;
}


module.export = {
    pin: pinNumber,
    bal: balance,
    promptFor: promptFor,
    chars: chars
};