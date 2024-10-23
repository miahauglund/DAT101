"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeupTime4 = 7;
wakeupTime4 = Math.ceil(Math.random () * 3)+ 5;

if (wakeupTime4 === 7 ){
 /*printOut(" I can catch the bus to school.");*/

} else {
  /*printOut("I cannnot catch the bus to school");*/

} 
printOut (" Wake up time = " + wakeupTime4);



let wakeUpTime3 = Math.floor (Math.random () * 3) +6 ;
if (wakeUpTime3 === 7){
  printOut("I can take the bus to school.")

} else if (wakeUpTime3 === 7){
  printOut(" I can take the train to school.")

}else { (wakeUpTime3 === 8)
  printOut(" I have to take the car to school")
} 
printOut("--- Part 4,5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut ("Oppgave 4 og 5");
printOut ("Oppgave 4 value = -1")

/*let test = 5; 
if (test > 0){
  printOut("Value is positive");
} else if (test < 0){
  printOut("Value is negative");

} else {
  printOut("Value is zero");
}*/ 

let test2 = -1;
if (test2 > 0){
  printOut ("Value is positive");
} else if (test2 < 0){
  printOut ("Value is negative")
}  else {
  printOut ("Value is zero"); 
} 
//printOut("Oppgave 4 value =" + test2);
printOut

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomSize = Math.floor(Math.random()* 8) + 1;
let imageSize = randomSize * 0.5;
printOut("Uploaded image size " + imageSize + " MP");

if (imageSize >= 4){
  printOut("Thank you");
} else  {
  printOut ("The image size is too small");
}   

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomSize2 = Math.floor( Math.random ()* 8)+ 1;
let imageSize2 = randomSize2 * 1;
printOut (" Uploaded image size " + imageSize2 + " MP ");

if (imageSize2 >= 6 ){
  printOut (" Image size is too large");

} else if (imageSize2 >= 4){
  printOut ("Thank you");

} else {
  printOut(" The image size is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const montList = [ "Januar", "Februar", "Mars", "April", "Mai", 
  "Juni", "Juli", "August", "September", " November", "Desember"];
  
const nofMonth = montList.length;
const monthName = montList[ Math.floor(Math.random()* nofMonth)];

if (monthName.includes("r")) {
  printOut("Month is = " + monthName);
  printOut (" You must take vitamin D");
} else {
  printOut ("Month is = " + monthName);
  printOut(" You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const montList1 = [
  {name: "Januar", days: 31},
  {name: "Februar", days: 28}, // Tok ikke med skuddåret
  {name: "Mars", days: 31},
  {name: "April", days: 30},
  {name: "Mai", days: 31},
  {name: "Juni", days: 30},
  {name: "Juli", days: 31}, 
  {name: "August", days: 31},
  {name: "September", days: 30},
  {name: "Oktober", days: 31}, 
  {name: "November", days:30},
  {name: "Desember", days: 31}
];

const noOfMonth = montList1.length;
const randomIndex = Math.floor(Math.random() * noOfMonth);
const month = montList1 [randomIndex];
const monthName1 = month.name;
const daysInMonth1 = month.days;

printOut ( "It is " + daysInMonth1 + " days in " + monthName1);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const montList2 = [
  {name: "Januar", days: 31},
  {name: "Februar", days: 28}, // Tok ikke med skuddåret
  {name: "Mars", days: 31},
  {name: "April", days: 30},
  {name: "Mai", days: 31},
  {name: "Juni", days: 30},
  {name: "Juli", days: 31}, 
  {name: "August", days: 31},
  {name: "September", days: 30},
  {name: "Oktober", days: 31}, 
  {name: "November", days:30},
  {name: "Desember", days: 31}
];

const noOfMonth2 = montList2.length;
const randomIndex2 = Math.floor(Math.random() * noOfMonth);
const month2 = montList2 [randomIndex2];
const monthName2 = month.name;


if (monthName2 === "Mars", monthName2 === "Mai" ) {
  printOut (" In " + monthName2 + " the art gallery is closed for refurbishment. ");

} else if (monthName2 === "April") {
printOut ("In " + monthName2 + " the Art gallery have temporary premises in the building next door." );

} else {
  printOut ("The Art gallery is open in " + monthName2 + ", Welcome! ");
}

printOut(newLine);
