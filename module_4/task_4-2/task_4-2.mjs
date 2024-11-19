"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 
    17, 18, 19, 20];
printOut(points.toString());
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const points2= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 
    17, 18, 19, 20];
    printOut(points2.join(' '));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Hello there, how are you?";
const words = text.split(/\s+/);
for (let i = 0; i < words.length; i++){
    printOut("Word: " + words[i]);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", 
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeName(array, nameToRemove) {
    const index = array.indexOf(nameToRemove);

    if(index !== -1){
        array.splice(index, 1);
        printOut(nameToRemove + " has been removed.");
    } else {
        printOut(nameToRemove + " does not exsist in the array");
    }
}
removeName(names, "Marit");
removeName(names, "John");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 const girlNames =["Anne", " Inger", " Kari", " Marit", " Ingrid", " Liv", " Eva", " Berit", " Astrid", 
    " Bjørg", " Hilde", " Anna", " Solveig", " Marianne", " Randi", " Ida", " Nina", " Maria", " Elisabeth", " Kristin"];

const boyNames = ["Jakob", " Lucas", " Emil", " Oskar", " Oliver", " William", " Filip", " Noah", 
    " Elias", " Isak", " Henrik", " Aksel", " Kasper", " Mathias", " Jonas", " Tobias", " Liam", " Håkon", " Theodor", " Magnus"];
   
const allNames = [...girlNames, ...boyNames];
printOut(allNames.slice(0, allNames.length / 2). toString());
printOut(allNames.slice(allNames.length / 2). toString());

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor( title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    toString(){
        return "Title: " + this.title + ", Author: " + this.author  + ", ISBN: " + this.isbn;
    }
}
const books = [
    new TBook ("It ends with Us", "Colleen Hoover", "9781501110368" )
    
];
for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};

const weekDaysKeys = Object.keys(EWeekDays);

for (let i = 0; i < weekDaysKeys.length; i++){
    const key = weekDaysKeys[i];
    const day = EWeekDays[key];
    printOut ("Name: " + day.name + ", Value = " + day.value);
}

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
