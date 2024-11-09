"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const acconutTypes = {
    Normal: "Brukskonto",
    Saving: "Sparekonsto",
    Credit: "kreditkonto",
    Pension: "Pensionskonto"
};
printOut(acconutTypes.Normal + ", "+ acconutTypes.Saving + ", "+ acconutTypes.Credit 
    +", " + acconutTypes.Pension);
    
    
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class BankAccount {
    constructor(type){
        this.type = type;
    }
    toString()  {
        return this.type;
    }
    
    setType(newType){
        printOut("Account is changed form " + this.type + " to " + newType);
        this.type = newType;
    }
}

const myAccount = new BankAccount(" Brukskonto");
printOut("myAcconst =" + myAccount.toString());

myAccount.setType(" Sparekonto");

printOut("myAccount =" + myAccount.toString());

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class BankAccount1 {
    constructor(type, balance = 1){
        this.type = type;
        this.balance = balance;
    }
    toString() {
        return this.type;
    }
    getBalance() {
        return this.balance;
    }
    
    deposit(amount){
        if (amount > 0){
            this.balance += amount;
            printOut ("Deposit of " + amount + ", new balance is " + this.balance);
        } else {
            printOut ("Deposit amount must be positive.");
        }
    }
    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            printOut(" Withdrawal of " + amount + ", new balance is " + this.balance.toFixed(2));  
        } else if (amount > this.balance) {
            printOut(" Insufficient founds for withdrawal.")
        } else {
            printOut(" Withdrawal amount must be positive.");      
        }
    }
}

let myAccount1 = new BankAccount1("Checking", 100);

myAccount1.deposit(100);

myAccount1.withdraw(25);
printOut("My account balance is " + myAccount1.getBalance().toFixed(2));




printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
