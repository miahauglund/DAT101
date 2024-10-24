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
function getGrade(points) {
    const percentage = (points / 236)*100;
    
    if (percentage >= 89) return " A ";
    if (percentage >= 77) return " B ";
    if (percentage >= 65) return " C ";
    if (percentage >= 53) return " D";
    if (percentage >= 41) return " E ";
    return "F ";
}

function simulateSingleGrades(){
    let grades = "";

        const points = Math.floor(Math.random ()* 236)+ 1;
        const percentage = (points / 236) * 100;
        const grade = getGrade (points);
        printOut (" Kandidaten fikk " + points + " poeng. Som er " + percentage.toFixed(2) + " % og som gir karakter" + grade + " . ");
    }

 simulateSingleGrades();
printOut("");


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString()+ ",";
diceThrow += d2.toString()+ ",";
diceThrow += d3.toString()+ ",";
diceThrow += d4.toString()+ ",";
diceThrow += d5.toString()+ ",";
diceThrow += d6.toString();

printOut ("diceThrow : "+ diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString();
printOut ("Dicecount : " + diceCount)

const equals1 = (diceCount.match (/1/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;
printOut ("Full straight: " + equals1.toString());
printOut (" Yatzy : " + equals6.toString ());

if (equals1 === 6){
    printOut ("Full straight");
} else if (equals6 === 1 ){
    printOut("Yatzy!!");
}*/

function rollDice() {
    return [
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6)
    ];
}

function countOccurrences(roll) {
    const counts = Array(7).fill(0);
    roll.forEach(num => counts[num]++);
    return counts;
}

function checkThreePairs(counts) {
    return counts.filter(count => count === 2).length === 3;
}

function checkFullHouse(counts) {
    return counts.includes(3) && counts.includes(2);
}

function checkTower(counts) {
    return counts.includes(4) && counts.includes(2);
}

function checkYahtzee(counts) {
    return counts.some(count => count === 6);
}

function simulateThreePairs() {
    let rolls = 0;
    let achieved = false;

    while (!achieved) {
        const rollResult = rollDice();
        const counts = countOccurrences(rollResult);
        rolls++;

        const diceThrow = rollResult.join(", ");
        const hasThreePairs = checkThreePairs(counts);
        
        if (hasThreePairs) {
            achieved = true;
            printOut(diceThrow);
            printOut("3 par "); 
            printOut( "På " + rolls + " kast!");
        }
    }
}



// Start the simulations
simulateThreePairs();


printOut("");
/* Put your code below here!*/
function simulateFullHouse() {
    let rolls = 0;
    let achieved = false;

    while (!achieved) {
        const rollResult = rollDice();
        const counts = countOccurrences(rollResult);
        rolls++;

        const diceThrow = rollResult.join(", ");
        const hasFullHouse = checkFullHouse(counts);
        
        if (hasFullHouse) {
            achieved = true;
            printOut(diceThrow);
            printOut(" Full straight ")
            printOut ("På " + rolls + " kast!");
        }
    }
}


simulateFullHouse();
printOut (" ");

function simulateTower(){
    let rolls = 0;
    let achieved = false;

    while (!achieved){ 
        const rollResult = rollDice();
        const counts = countOccurrences (rollResult);
        rolls++;

        const diceThrow = rollResult.join(",");
        const hasTower = checkTower(counts);

        if (hasTower){
            achieved = true;
            printOut (diceThrow);
            printOut ("Tårn")
            printOut( "På " + rolls + " kast!");
        }
    }
}
simulateTower();



printOut("");
/* Put your code below here!*/

function simulateYahtzee() {
    let rolls = 0;
    let achieved = false;

    while (!achieved) {
        const rollResult = rollDice();
        const counts = countOccurrences(rollResult);
        rolls++;

        const diceThrow = rollResult.join(", ");
        const hasYahtzee = checkYahtzee(counts);
        
        if (hasYahtzee) {
            achieved = true;
            printOut(diceThrow);
            printOut("Yatzy");
            printOut(" På " + rolls + " kast! "); 
        }
    }
}
simulateYahtzee();


/* Task 10*/
printOut("");

