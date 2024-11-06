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
printOut("Replace this with you answer!");
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
