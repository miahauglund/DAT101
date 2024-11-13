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
/* Mangler en WITHDRAWAL of 10 new balance is 0 og change*/

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
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*class BankAccount3 {
    constructor(type = "Checking2", balance = 0, accountCurrency = "NOK") {
        this.type = type;
        this.balance = balance;
        this.withdrawalCount = 0;
        this.accountCurrency = accountCurrency;
    }

    static currencyData = {
        "NOK": { name: "Norske kroner", symbol: "kr", rate: 1 },
        "USD": { name: "United States dollar", symbol: "$", rate: 10.83 },
        "GBP": { name: "Pound sterling", symbol: "£", rate: 12.80 },
        "CAD": { name: "Canadiske dollar", symbol: "C$", rate: 7.54 },
        "INR": { name: "Indiske rupee", symbol: "₹", rate: 0.11 },
        "SEK": { name: "Svenske korner", symbol: "kr", rate: 0.94 }
    };

    getBalance() {
        return this.balance;
    }

    formatAmount(amount) {
        return amount.toFixed(2);
    }

    setCurrency(newCurrency) {
        if (newCurrency in BankAccount3.currencyData) {
            const oldCurrency = this.accountCurrency;
            const oldRate = BankAccount3.currencyData[oldCurrency].rate;
            const newRate = BankAccount3.currencyData[newCurrency].rate;

            this.balance = (this.balance * oldRate) / newRate;
            this.accountCurrency = newCurrency;

            printOut(
                `The account currency has changed from ${BankAccount3.currencyData[oldCurrency].name} to ${BankAccount3.currencyData[newCurrency].name}`
            );
            printOut(`New balance is ${this.formatAmount(this.balance)} ${BankAccount3.currencyData[newCurrency].symbol}`);
        } else {
            printOut("Invalid currency code.");
        }
    }

    deposit(amount, currency = "NOK") {
        if (amount > 0) {
            const depositCurrency = BankAccount3.currencyData[currency];
            const accountCurrency = BankAccount3.currencyData[this.accountCurrency];

            if (depositCurrency) {
                const convertedAmount = (amount * depositCurrency.rate) / accountCurrency.rate;
                this.balance += convertedAmount;

                printOut(
                    `Deposit of ${this.formatAmount(amount)} ${depositCurrency.name}, new balance is ${this.formatAmount(this.balance)}${accountCurrency.symbol}`
                );
            } else {
                printOut("Invalid deposit currency.");
            }
        } else {
            printOut("Deposit amount must be positive.");
        }
    }

    withdraw(amount, currency = "NOK") {
        if (amount <= 0) {
            printOut("Withdrawal amount must be positive.");
            return;
        }

        const withdrawCurrency = BankAccount3.currencyData[currency];
        const accountCurrency = BankAccount3.currencyData[this.accountCurrency];

        if (withdrawCurrency) {
            const convertedAmount = (amount * withdrawCurrency.rate) / accountCurrency.rate;

            if (this.balance < convertedAmount) {
                printOut(`Insufficient funds for withdrawal of ${this.formatAmount(amount)} ${withdrawCurrency.name}.`);
                return;
            }

            this.balance -= convertedAmount;

            if (this.balance === 0) {
                printOut(`Account balance is exactly 0.00 ${accountCurrency.symbol}`);
            }
        } else {
            printOut("Invalid withdrawal currency.");
        }
    }
}


let myAccount3 = new BankAccount3("Checking2", 247.94);

myAccount3.deposit(12, "USD");
myAccount3.withdraw(10, "GBP");

myAccount3.setCurrency("CAD");
myAccount3.withdraw(20.36, "CAD");

myAccount3.setCurrency("INR");
myAccount3.withdraw(1111.06, "INR"); 

myAccount3.withdraw(150.11, "SEK"); */


class BankAccount3 {
    constructor(type = "Checking", balance = 0, accountCurrency = "NOK") {
        this.type = type;
        this.balance = balance;
        this.accountCurrency = accountCurrency;
    }

    static currencyData = {
        "NOK": { name: "Norske kroner", symbol: "kr", rate: 1 },
        "USD": { name: "United States dollar", symbol: "", rate: 10.83 },
        "GBP": { name: "Pound sterling", symbol: "", rate: 12.80 },
        "CAD": { name: "Canadiske dollar", symbol: "C$", rate: 7.54 },
        "INR": { name: "Indiske rupee", symbol: "₹", rate: 0.11 },
        "SEK": { name: "Svenske kroner", symbol: "", rate: 0.94 }
    };

    formatAmount(amount) {
        return amount.toFixed(2);
    }

    setCurrency(newCurrency) {
        if (newCurrency in BankAccount3.currencyData) {
            const oldCurrency = this.accountCurrency;
            const oldRate = BankAccount3.currencyData[oldCurrency].rate;
            const newRate = BankAccount3.currencyData[newCurrency].rate;

            // Convert balance to the new currency
            this.balance = (this.balance * oldRate) / newRate;
            this.accountCurrency = newCurrency;

            printOut(`The account currency has changed from ${BankAccount3.currencyData[oldCurrency].name} to ${BankAccount3.currencyData[newCurrency].name}.`);
            printOut(`New balance is ${this.formatAmount(this.balance)} ${BankAccount3.currencyData[newCurrency].symbol}`);
        } else {
            printOut("Invalid currency code.");
        }
    }

    deposit(amount, currency = "NOK") {
        if (amount > 0) {
            const depositCurrency = BankAccount3.currencyData[currency];
            const accountCurrency = BankAccount3.currencyData[this.accountCurrency];

            if (depositCurrency) {
                const convertedAmount = (amount * depositCurrency.rate) / accountCurrency.rate;
                this.balance += convertedAmount;

                printOut(`Deposit of ${this.formatAmount(amount)} ${depositCurrency.name}, new balance is ${this.formatAmount(this.balance)} ${accountCurrency.symbol}`);
            } else {
                printOut("Invalid deposit currency.");
            }
        } else {
            printOut("Deposit amount must be positive.");
        }
    }

    withdraw(amount, currency = "NOK") {
        if (amount <= 0) {
            printOut("Withdrawal amount must be positive.");
            return;
        }

        const withdrawCurrency = BankAccount3.currencyData[currency];
        const accountCurrency = BankAccount3.currencyData[this.accountCurrency];

        if (withdrawCurrency) {
            const convertedAmount = (amount * withdrawCurrency.rate) / accountCurrency.rate;

            if (this.balance < convertedAmount) {
                printOut(`Insufficient funds for withdrawal of ${this.formatAmount(amount)} ${withdrawCurrency.name}.`);
                return;
            }

            this.balance -= convertedAmount;

            printOut(`Withdrawal of ${this.formatAmount(amount)} ${withdrawCurrency.name}, new balance is ${this.formatAmount(this.balance)} ${accountCurrency.symbol}`);

            if (this.balance === 0) {
                printOut(`Account balance is exactly 0.00 ${accountCurrency.symbol}`);
            }
        } else {
            printOut("Invalid withdrawal currency.");
        }
    }
}

// Example usage:
let myAccount3 = new BankAccount3("Checking", 247.94);

// Deposit in USD and withdraw in GBP
myAccount3.deposit(12, "USD");          // Expected close to 259.94 NOK after deposit
myAccount3.withdraw(10, "GBP");         // Expected close to 141.88 NOK after withdrawal

// Change currency to CAD and withdraw the remaining balance in CAD
myAccount3.setCurrency("CAD");          // Expected balance close to 20.36 CAD
myAccount3.withdraw(20.36, "CAD");      // Withdraw the exact balance to bring to 0.00 CAD

// Change currency to INR and withdraw remaining balance in a different currency
myAccount3.setCurrency("INR");          // Expected balance close to 1111.06 INR
myAccount3.withdraw(150.11, "SEK");     // Expected balance to be exactly 0.00 after this transaction









printOut("--- Part 8 ----------------------------------------------------------------------------------------------")
function modifyText(text, maxSize, char, insertAtEnd) {
    
    if (typeof text !== "string" || typeof char !== "string" 
        || char.length !== 1 || typeof maxSize !== "number" 
        || typeof insertAtEnd !== "boolean") {
    printOut("Invalid input parameters.");
        return;
    }
    
    if (text.length >= maxSize) {
        printOut("Text is already at or above maximum size:", text);
        return text;
    }

    const paddingNeeded = maxSize - text.length;
    
    
    const padding = char.repeat(paddingNeeded);

    
    const result = insertAtEnd ? text + padding : padding + text;

    
    printOut("Modified text:", result);
    return result;
}


modifyText("Hello", 10, "*", true);  
modifyText("Hello", 10, "*", false)