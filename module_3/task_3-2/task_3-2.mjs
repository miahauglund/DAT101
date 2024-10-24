"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const answerNumber = 45;
let guessNumber = 0;
while (answerNumber !== guessNumber){
    guessNumber = Math.ceil(Math.random() * 60);
}
printOut ("Guess Number = " + guessNumber.toString());
printOut(" ");   

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while (answerNumber !== guessNumber){
    guessCount++;
    guessNumber = Math.ceil(Math.random() * 1000000);
}
const endTime = Date.now();
const timeUsed = endTime - startTime;
printOut ( " Antall gjetninger " + guessCount.toString()+ " tok " + timeUsed.toString() + " ms ") ;  
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

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
