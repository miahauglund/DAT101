"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const acconutTypes = {
    Normal: "Brukskonto",
    Saving: "Sparekonsto",
    Credit: "Kreditkonto",
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
        printOut("Account is changed from " + this.type + " to " + newType);
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
/* Mangler en WITHDRAWAL of 10 new balance is 0 og change på slutten*/

class BankAccount2 {
    constructor(type = "Sparekonto", balance = 0) {
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
    deposit(amount) {
        if(amount > 0){
            this.balance += amount;
            this.withdrawalCount = 0;
            printOut("Deposit of " + amount + ", new balance is " + this.balance);
        } else  {   
            printOut("Deposit amount must be positive");
        }
    }
    
    withdraw(amount) {
    if (amount <= 0) {
        printOut("Withdrawal amount must be positive.");
        return;
    }
    switch (this.type)  {
        case "Sparekonto":
            if (this.withdrawalCount >= 3){
                printOut( "You can`t withdraw from a Sparekonto more than tree times");
                this.setType("Pensionskonto");

            } else if (amount > this.balance){
                printOut(" Insufficient funds for withdrawal.");
            } else  {
                this.balance -= amount;
                this.withdrawalCount++;
               
                
                if (this.balance === 0){
                    printOut( "Withdrawal of " + amount + ", new balance is 0");
                    this.setType("Pensionskonto");
                } else  {
                    printOut("Withrawal of " + amount + ", new balance is " + this.balance);
                }
            }
            break;

            case "Pensionskonto": 
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
    myAccount2.withdraw(10);
    myAccount2.withdraw(5);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TAccount {
    #balance = 0;
    #currencyType = "NOK"; 

    static CurrencyTypes = {
        "NOK": { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        "EUR": { value: 0.0985, name: "Europeiske euro", denomination: "€" },
        "USD": { value: 0.1091, name: "United States dollar", denomination: "$" },
        "GBP": { value: 0.0847, name: "Pound sterling", denomination: "£" },
        "INR": { value: 7.3809, name: "Indiske rupee", denomination: "₹" },
        "AUD": { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
        "PHP": { value: 6.1539, name: "Filippinske peso", denomination: "₱" },
        "SEK": { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        "CAD": { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        "THB": { value: 3.3289, name: "Thai baht", denomination: "฿" }
    };

    formatAmount(amount) {
        return amount.toFixed(2);
    }

    deposit(amount, currency = "NOK") {
        if (amount <= 0) {
            printOut("Deposit amount must be positive.");
            return;
        }

        const depositCurrency = TAccount.CurrencyTypes[currency];
        const accountCurrency = TAccount.CurrencyTypes[this.#currencyType];

        if (!depositCurrency) {
            printOut("Invalid deposit currency.");
            return;
        }

        const convertedAmount = (amount * depositCurrency.value) / accountCurrency.value;
        this.#balance += convertedAmount;

        printOut(`Deposit of ${this.formatAmount(amount)}${depositCurrency.denomination}, new balance is ${this.formatAmount(this.#balance)}${accountCurrency.denomination}`);
    }
}
const myAccount4 = new TAccount(); 
printOut("---------- Task 5 ----------------");
myAccount4.deposit(150); 

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Tallene stemmer ikke med oppgaven, men det er tall der. */
class TAccount2 {
    #balance = 150;
    #currencyType = "NOK";

    // Define available currency types with conversion rates, names, and symbols
    static CurrencyTypes = {
        "NOK": { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        "EUR": { value: 0.0985, name: "Europeiske euro", denomination: "€" },
        "USD": { value: 0.1091, name: "United States dollar", denomination: "$" },
        "GBP": { value: 0.0847, name: "Pound sterling", denomination: "£" },
        "INR": { value: 7.3809, name: "Indiske rupee", denomination: "₹" },
        "AUD": { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
        "PHP": { value: 6.1539, name: "Filippinske peso", denomination: "₱" },
        "SEK": { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        "CAD": { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        "THB": { value: 3.3289, name: "Thai baht", denomination: "฿" }
    };


    formatAmount(amount) {
        return amount.toFixed(2);
    }


    setCurrencyType(newCurrencyType) {

        if (newCurrencyType === this.#currencyType) {
            return;
        }


        const currentCurrency = TAccount2.CurrencyTypes[this.#currencyType];
        const newCurrency = TAccount2.CurrencyTypes[newCurrencyType];


        if (!newCurrency) {
            printOut("Invalid currency type.");
            return;
        }

        this.#balance = (this.#balance * currentCurrency.value) / newCurrency.value;

        printOut(`The account currency has changed from ${currentCurrency.name} to ${newCurrency.name}`);
        printOut(`New balance is ${this.formatAmount(this.#balance)}${newCurrency.denomination}`);

        this.#currencyType = newCurrencyType;
    }
}


const myAccount3 = new TAccount2();


myAccount3.setCurrencyType("SEK");
myAccount3.setCurrencyType("USD");
myAccount3.setCurrencyType("NOK");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Samme her tallene er feil og jeg mangler en settning. */

class TAccount3 {
    #balance = 0;
    #currencyType = "NOK";
    #withdrawCount = 0;

    static CurrencyTypes = {
        "NOK": { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        "USD": { value: 10.39, name: "United States dollar", denomination: "$" },
        "GBP": { value: 12.82, name: "Pound sterling", denomination: "£" },
        "CAD": { value: 7.89, name: "Canadiske dollar", denomination: "C$" },
        "INR": { value: 0.13, name: "Indiske rupee", denomination: "₹" },
        "SEK": { value: 0.98, name: "Svenske kroner", denomination: "kr" }
    };

    formatAmount(amount) {

        return parseFloat(amount.toFixed(2));
    }

    setCurrencyType(newCurrencyType) {
        if (newCurrencyType === this.#currencyType) {
            return;
        }

        const currentCurrency = TAccount3.CurrencyTypes[this.#currencyType];
        const newCurrency = TAccount3.CurrencyTypes[newCurrencyType];

        if (!newCurrency) {
            printOut("Invalid currency type.");
            return;
        }


        this.#balance = (this.#balance * currentCurrency.value) / newCurrency.value;


        printOut(`The account currency has changed from ${currentCurrency.name} to ${newCurrency.name}`);
        printOut(`New balance is ${this.formatAmount(this.#balance)}${newCurrency.denomination}`);


        this.#currencyType = newCurrencyType;
    }

    deposit(amount, currency = "NOK") {
        if (amount <= 0) {
            printOut("Deposit amount must be positive.");
            return;
        }

        const currencyData = TAccount3.CurrencyTypes[currency];
        const amountInNOK = amount * currencyData.value;
        this.#balance += amountInNOK / TAccount3.CurrencyTypes[this.#currencyType].value;

        printOut(`Deposit of ${amount.toFixed(2)} ${currencyData.name}, new balance is ${this.formatAmount(this.#balance)}${TAccount3.CurrencyTypes[this.#currencyType].denomination}`);
    }

    withdraw(amount, currency = "NOK") {
        if (amount <= 0) {
            printOut("Withdrawal amount must be positive.");
            return;
        }

        const currencyData = TAccount3.CurrencyTypes[currency];
        const amountInNOK = amount * currencyData.value;
        const amountInAccountCurrency = amountInNOK / TAccount3.CurrencyTypes[this.#currencyType].value;

        if (amountInAccountCurrency > this.#balance) {
            /*printOut("Insufficient funds for withdrawal.");*/
            return;
        }

        this.#balance -= amountInAccountCurrency;
        printOut(`Withdrawal of ${amount.toFixed(2)} ${currencyData.name}, new balance is ${this.formatAmount(this.#balance)}${TAccount3.CurrencyTypes[this.#currencyType].denomination}`);
    }
}

const myAccount5 = new TAccount3();


myAccount5.deposit(12.00, "USD"); 
myAccount5.withdraw(10.00, "GBP"); 
myAccount5.setCurrencyType("CAD"); 
myAccount5.setCurrencyType("INR"); 
myAccount5.withdraw(150.11, "SEK");




printOut("--- Part 8 ----------------------------------------------------------------------------------------------")

function expandText(text, maxSize, char, insertBefore) { 
    while (text.length < maxSize) {
        if (insertBefore) {
            text = char + text; 
        } else {
            text = text + char; 
        }
    }
    return text;
}

const result = expandText("Hello", 12, "*", false); 

printOut(result); 
printOut(newLine);