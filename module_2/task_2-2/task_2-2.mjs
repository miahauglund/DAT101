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
printOut ( " 6322.52 minutes is:" + " Days = "+ part4_days + " ,Hours = " + part4_hours + " ,Minutes = " + part4_minutes + " ,Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOR -> USD and USD -> NOK.
USe 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars"*/

const NOK = 76 / 8.6; 
const USD = 8.6 / 76;
let amontUSD = 54;
const amontNOK = Math.round (amontUSD * NOK);
printOut (amontUSD + " dollars is " + amontNOK + " Kroner" );

amontUSD =Math.round (amontNOK *USD);
printOut (amontNOK + " Kroner is " + amontUSD+ " Dollars " );

//printOut(amontUSD + " Dollar is " + amontNOK + " Kroner and " + amontNOK + " Kroner is " + amontUSD + " Dollars ");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
Print the number of characters in the text.
Print the character at position number 19.
Print the characters starting at position number 35 and 8 characters forward.
print the index at which "earth" starts in the text.*/

const text = "There is much between heaven and earth that we do not understand.";
const numberOfCharacters= text.length;
const expectedLength = 53;

const characterAtPosition19 = text.charAt(19);

const substringFrom35= text.substring(35, 8);

const indexOfJord = text.indexOf ("jord");


printOut(text);
printOut ("The text has " + expectedLength + " characters.");
printOut(" The character at position 19:" + characterAtPosition19);
printOut("The substring from position 35 and 8 places is: " + substringFrom35);
printOut("The word jord starts at position " + indexOfJord);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const isFeveGreaterThenThree = 5>3;
printOut ("Is 5 greater than 3?" + isFeveGreaterThenThree);

const isSevengreaterThanOrequalSeven =  7>=7;
printOut("Is 7 great then or equal to 7?" + isSevengreaterThanOrequalSeven);

const isOneLessThanA = 1 < a ;
printOut ("Is 1 less than a?"+ isOneLessThanA);

const is2500LessThanABCD = 2500 < abcd;
printOut ("Is 2500 less than abcd?"+ is2500LessThanABCD);

const 
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