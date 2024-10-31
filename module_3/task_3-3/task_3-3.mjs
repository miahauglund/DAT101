"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate(){
    const today = new Date();
    const options = {
    weekday: 'long' ,
    year: 'numeric' ,
    month: 'long' ,
    day: 'numeric'

};
const norwegianDate = today.toLocaleDateString('no-No', options).replace(',' ,'');
printOut(norwegianDate);
}
printTodaysDate();
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate2(){
    const today = new Date ();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
};

const norwegianDate = today.toLocaleDateString('no-No', options).replace(',', '');
printOut(`I dag er det: ${norwegianDate}`);
return today; 

}
function calculateDaysUntilRelease (releaseDate){
    const today = new Date();
    const timeDiff = releaseDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}

function revealReleaseCountdown(){ 
    const releaseDate = new Date("2025-05-14");
    const daysLeft = calculateDaysUntilRelease(releaseDate);
    printOut (`Kun ${daysLeft} dager igjen til den episke lanseringen av 2xko!`);
}
function main(){
    printTodaysDate2();
    revealReleaseCountdown();    
    
}
main();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circelProperties (radius){
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI *radius;
    const area = Math.PI * Math.pow (radius, 2);
    
    printOut (`Diameter: ${diameter}`);
    printOut(`Cirumference: ${circumference.toFixed(2)}`);
    printOut (`Area: ${area.toFixed(2)}`);
}
circelProperties(5);

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
