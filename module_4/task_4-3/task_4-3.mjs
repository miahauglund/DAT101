"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.getElementById("cmbTask1Calculate").addEventListener("click", function () {

  const width = parseFloat(document.getElementById("txtRectWidth").value);
  const height = parseFloat(document.getElementById("txtRectHeight").value);


  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      document.getElementById("txtTask1Output").textContent = 
          "Please enter valid positive numbers for both width and height.";
      return;
  }


  const perimeter = 2 * (width + height);
  const area = width * height;

  document.getElementById("txtTask1Output").textContent = 
      `Circumference = ${perimeter}, Area = ${area}`;
});


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const newGirlsName = GirlsNames.splice(1,4);
printOut(GirlsNames.join(", "));
printOut("");
printOut(newGirlsName.join(", "));

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
