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


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class BankAccount2 {
    constructor(type = "Sparekonto", balance = 0){
        this.type = type;
        this.balance = balance;
        this.withdrawalCount = 0;
    }
    setType(newType) {
        this.type = newType;
        this.withdrawalCount = 0;
        printOut( "Account is changed form Sparekonto to Pensionskonto.");
    }
    getBalance (){
        return this.balance;
    }
    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            this.withdrawalCount = 0;
            printOut("Deposit of " + amount + ", new balance is " + this.balance);
        } else  {   
            printOut("Deposit amount must be positive");
        }
    }
    
    withdraw(amount) {
    if (amount <= 0){
        printOut("Withdrawal amount must be positive.");
        return;
    }
    switch (this.type)  {
        case "Sparekonto":
            if (this.withdrawalCount >= 3){
                printOut( "You can`t withdraw form a Sparekonto more than tree times");
                this.setType("PensionsKonto");

            } else if (amount > this.balance){
                printOut(" Insufficient founds for withdrawal.");
            } else  {
                this.balance -= amount;
                this.withdrawalCount++;
                printOut( "Withdrawal of " + amount + ", new balance is " + this. balance.toFixed());
            }
                break;

                case "PensionsKonto": 
                printOut("You can't withdraw from a Pensionskonto!");

                break;

                default: 
                printOut("Unknown account type.");
            
        }
    }
}  
    let myAccount2 = new BankAccount2("Sparekonto",75);
    myAccount2.deposit(25);
    myAccount2.withdraw(30);
    myAccount2.withdraw(30);
    myAccount2.withdraw(30);
    myAccount2.withdraw(50);
    myAccount2.withdraw(10);
    myAccount2.withdraw(10);

    


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
