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
    printOut ("Kun" + daysLeft + "dager igjen til den episke lanseringen av 2xko!");
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
    
    printOut ("Diameter: "+ diameter);
    printOut("Cirumference: " + circumference.toFixed(2));
    printOut ("Area:" + area.toFixed(2));
}
circelProperties(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateRectangleProperties(rectangle){
    const width= rectangle.width;
    const height= rectangle.height;

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut ( "width " + width + " height " + height);

    printOut ("circumference: " + circumference.toFixed(2));
    printOut (" Arena: "+ area.toFixed(2));
}
const rectangle = { width: 4, height: 3 };
calculateRectangleProperties(rectangle);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function convertTemperature (value, type) {
    let celsius, fahrenheit, kelvin;

    if (type.toLowerCase() === "celsius") {
        celsius = value;
        fahrenheit= Math.round((celsius * 9/ 5)+ 32);
        kelvin= Math.round(celsius + 273.15);
    
    } else if (type.toLowerCase() === "fahrenheit") {
        fahrenheit = value;
        celsius = Math.round((fahrenheit - 32) * 5/9);
        kelvin = Math.round(celsius + 273.15);
    
    }  else if (type.toLowerCase() === "kelvin") {
        kelvin= value;
        celsius = Math.round(kelvin - 273.15);
        fahrenheit= Math.floor((celsius * 9 / 5)+ 32);
    } 
    
    printOut( "Convert " + value + " " + type);
    printOut ("Celsius = " + celsius);
    printOut("fahrenheit = " + fahrenheit);
    printOut ("kelvin = " + kelvin);   

   printOut("");
}
  

convertTemperature(47,"Celsius");
convertTemperature(100 ,"Fahrenheit");
convertTemperature(300 ,"Kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateNetPrice(gross, vatGroup){

const vatRates ={
    normal: 25,
    food: 15,
    hotel: 10,
    transport: 10,
    cinema: 10
};

vatGroup = vatGroup.toLowerCase();

if (vatGroup in vatRates){
    const vat = vatRates[vatGroup];
    const netPrice = (100 * gross ) / (vat + 100);
    return netPrice.toFixed(2);

} else {
    /*printOut("Unkown VAT group!");*/
    return NaN;
    }
}
let netPrice;

netPrice= calculateNetPrice(100, "normal");
printOut(" 100 is " + netPrice +" without tax");

netPrice = calculateNetPrice( 150, "food");
printOut( " 150 is "+ netPrice + " without tax" );

netPrice = calculateNetPrice(50, "hotel");
printOut(" 50 is " + netPrice + " without tax");

netPrice= calculateNetPrice(100, "textile");
if (isNaN(netPrice)){
    printOut( "Textile is unknown tax-group");
}   

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* NESTEN FERDIG, MANGLER Å FÅ INN 50 KM*/

function calculate(speed, distance, time){
    let missingCount= 0;

    if (speed === undefined) {
        missingCount++;
    }
    if (distance === undefined) {
        missingCount++;
    }
    if (time === undefined || isNaN(Number(time))) {
        missingCount++;
    }
    if (missingCount > 1) {
        return { speed: undefined, distance: undefined, time: NaN };
    }
    if ( typeof time === "string"){
        time = Number(time);
    }
    if (speed === undefined && distance !== undefined && time !== undefined){
        speed = distance / time;
       
    } else if (distance === undefined && speed !== undefined && time !== undefined){
        distance = speed * time;
        
    } else if (time === undefined && speed !== undefined && distance !== undefined){
        time= distance/ speed;
        
        }   
        return { speed, distance, time};
    
    }
    let result1 = calculate(75,120,2);
    printOut("Speed = " + result1.speed + " km/h");
    printOut("Distance = " + result1.distance + " km");
    printOut("Time = " + result1.time.toFixed(2) + " h");
    
    printOut("")

    let result2 = calculate(70, undefined,1.5);
    printOut("Speed = " + result2.speed + " km/h");
    printOut("Distance = " + result2.distance + " km");
    printOut("Time = " + result2.time.toFixed(2) + " h");

    printOut(" ")
    
    let result3 = calculate(undefined , 50, undefined);
    printOut("Speed = " + result3.speed + " km/h");
    printOut("Distance = "  + result3.distance + " km");

    if (isNaN(result3.time)){
       printOut(" Time = NaN h");
    } else {
        printOut( "Time = " + result3.time.toFixed(2) + " h"); 
    }


    

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function adjustText(text, maxSize, char, insertBefore){
    while (text.length < maxSize){
        if (insertBefore){
            text= char+text;
        } else {
            text= text + char;
        }
    }
    return text.slice(0,maxSize);
    
}

let tekst = "This is a text";
let maxLengde = 560;
let tegn = "&nbsp;";
let legtilforan = false;

let venstrejustert = adjustText(tekst,maxLengde,tegn,legtilforan);
printOut("« " + venstrejustert + " » " );

let høyreJustert = adjustText(tekst, maxLengde, tegn, true);
printOut("« " + høyreJustert + " »" );
  

            
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*function testMathExpressions(lines) {
    let currentNumber = 1;

    for (let i = 1; i <= lines; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let leftNumbers = [];
        let rightNumbers = [];

        // Beregn venstre sum og legg til tall
        for (let j = 0; j < i; j++) {
            leftNumbers.push(currentNumber);
            leftSum += currentNumber; // Bruk += for å summere tallene
            currentNumber++;
        }

        // Beregn høyre sum og legg til tall
        for (let j = 0; j < i + 1; j++) {
            rightNumbers.push(currentNumber);
            rightSum += currentNumber; // Bruk += for å summere tallene
            currentNumber++;
        }

        let leftString = leftNumbers.join(" ");
        let rightString = rightNumbers.join(" ");
        
        let totalLength = 20;
        let leftPadded = leftString.padEnd(totalLength);
        let rightPadded = rightString;

        // Skriv ut resultatet
        console.log(leftPadded + " = " + rightPadded);

        // Sjekk om summene er like (bruk == for sammenligning)
        if (leftSum === rightSum) {
            console("The sums are equal: " + leftSum);
        }
    }
}

testMathExpressions(7);
console.log("Maths Fun!");*/
//----------------------------------//

/*function testMathExpressions(lines) {
    let currentNumber = 1;

    for (let i = 1; i <= lines; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let leftNumbers = [];
        let rightNumbers = [];

        // Beregn venstre sum og legg til tall
        for (let j = 0; j < i; j++) {
            leftNumbers.push(currentNumber);
            leftSum += currentNumber; // Bruk += for å summere tallene
            currentNumber++;
        }

        // Beregn høyre sum og legg til tall
        for (let j = 0; j < i + 1; j++) {
            rightNumbers.push(currentNumber);
            rightSum += currentNumber; // Bruk += for å summere tallene
            currentNumber++;
        }

        // Lag strenger for venstre og høyre tall
        let leftString = leftNumbers.join(" ");
        let rightString = rightNumbers.join(" ");

        // Sette padding på venstre og høyre side for justering
        let totalLength = 20; // Totalt ønsket lengde for venstre side
        let leftPadded = leftString.padEnd(totalLength);
        let rightPadded = rightString.padEnd(totalLength);

        // Skriv ut resultatet
        printOut(leftPadded + " = " + rightPadded);

        // Sjekk om summene er like og skriv ut melding hvis de er det
        if (leftSum === rightSum) {
            printOut("The sums are equal: " + leftSum);
        }
    }
}

testMathExpressions(7);
console.log("Maths Fun!");*/

function testMathExpressions(lines) {
    let currentNumber = 1;

    for (let i = 1; i <= lines; i++) {
        let leftNumbers = [];
        let rightNumbers = [];

        // Beregn venstre tall og legg til tall
        for (let j = 0; j < i; j++) {
            leftNumbers.push(currentNumber);
            currentNumber++;
        }

        // Beregn høyre tall og legg til tall
        for (let j = 0; j < i + 1; j++) {
            rightNumbers.push(currentNumber);
            currentNumber++;
        }

        // Lag strenger for venstre og høyre tall
        let leftString = leftNumbers.map(num => num.toString().padStart(3, ' ')).join(" ");
        let rightString = rightNumbers.map(num => num.toString().padStart(3, ' ')).join(" ");


        // Skriv ut resultatet uten ekstra padding
        printOut(leftString + " = " + rightString + "<br>");
    }
}

testMathExpressions(7);
printOut("Maths Fun!");



printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n){
    if (n === 0 || n=== 1){
        return 1;
    } else{
        return n * factorial(n - 1);
    }
}
let number = 9;
let result = factorial(number);
printOut("factorial (" +  number+ ") is " + result);

printOut(newLine);
