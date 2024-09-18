"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let test= 2+(3*(2-4))*6 
printOut(" 2+ (3*(2-4))*6 "+test.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("konverter 25m og 34 cm til inches ");
const antallMeter= 25;
const antallCM= 34;
let meterIMillimeter= antallMeter*1000;
printOut("Meter i MM "+meterIMillimeter);

let CMInMillimeter= antallCM*10;
printOut("CM i mm "+CMInMillimeter);

let antallMM= meterIMillimeter+ CMInMillimeter;
printOut("Antall Inches "+ antallMM);

let MMtoinches= antallMM/25.4;
printOut("Antall Inches "+MMtoinches.toFixed(2));
printOut(newLine);


printOut(antallMM.toString()); 
printOut(MMtoinches.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Antall dager, timer , minutter og sekunder

const days= 3;
const hours = 12;
const minutes = 14;
const seconds= 45;

// Totalt antall minutter 
const totalMinutes = (days * 24 * 60) + (hours *60) + minutes + (seconds / 60);
printOut (" 3 days, 12 hours, 14 minutes, and 45 seconds = "+ totalMinutes.toFixed(2));
//printOut(totalMinutes.toFixed(2));




printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*  Convert 6,322.52 minutes to days, hours, minutes and seconds
*/
const nummerOfMinutes = 6322.52;

const hoursInDay = 24;
const minutesInHour = 60;
const secondsInMinute = 60; 

let part4_Calc = nummerOfMinutes / (minutesInHour * hoursInDay);
const part4_days = Math.floor ( part4_Calc);
//printOut ("Days = " + part4_days );

part4_Calc = part4_Calc - part4_days;
part4_Calc = part4_Calc * hoursInDay;
const part4_hours = Math.floor (part4_Calc);
//printOut ("Hours =" + part4_hours);

part4_Calc = part4_Calc - part4_hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_minutes = Math.floor (part4_Calc);
//printOut ("Minutes = " + part4_minutes);

part4_Calc = part4_Calc - part4_minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor (part4_Calc);
//printOut ("Seconds = " + part4_Seconds);
printOut ( "Days = "+ part4_days + " ,Hours = " + part4_hours + " ,Minutes = " + part4_minutes + " ,Seconds = " + part4_Seconds);
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