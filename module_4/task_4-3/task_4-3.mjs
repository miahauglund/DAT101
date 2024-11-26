"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));



/*const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];*/

/*const MovieGenre = [
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
];*/

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

const task2Words = [];

document.getElementById("txtTask2Word").addEventListener("keypress", function (event) {

    if (event.key === "Enter" || event.key === "Return") {
        event.preventDefault(); 

        const word = event.target.value.trim();


        if (word !== "") {
            task2Words.push(word); 

            document.getElementById("txtTask2Output").innerHTML = `
                <p>Total words: ${task2Words.length}</p>
                <p>Words: ${task2Words.join(", ")}</p>
            `;


            event.target.value = "";
        }
    }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.getElementById("cmbTask3CheckAnswer").addEventListener("click", function () {
  // Get all checkboxes with the name "chkTask3"
  const checkboxes = document.querySelectorAll("input[name='chkTask3']:checked");
  

  const selectedValues = [];


  checkboxes.forEach(checkbox => {
      selectedValues.push(checkbox.value);
  });


  const outputElement = document.getElementById("txtTask3Output");


  if (selectedValues.length > 0) {
      outputElement.textContent = `You selected: ${selectedValues.join(", ")}`;
  } else {
      outputElement.textContent = "No checkboxes are selected.";
  }
});



//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/


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


const divTask4Cars = document.getElementById("divTask4Cars");


function createRadioButtons() {
  divTask4Cars.innerHTML = '';


  for (let i = 0; i < CarTypes.length; i++) {
    const car = CarTypes[i];


    const label = document.createElement("label");


    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "car";  
    radio.value = car.value; 
    radio.id = `car${car.value}`; 

    label.appendChild(radio);
    label.appendChild(document.createTextNode(` ${car.caption}`));


    divTask4Cars.appendChild(label);
    divTask4Cars.appendChild(document.createElement("br"));
  }
}


function displaySelectedCar() {
  const selectedRadio = document.querySelector("input[name='car']:checked");


  const outputElement = document.getElementById("txtTask4Output");

  if (selectedRadio) {

    outputElement.textContent = `You selected: ${selectedRadio.nextSibling.nodeValue.trim()}`;
  } else {

    outputElement.textContent = "No car selected.";
  }
}


createRadioButtons();


divTask4Cars.addEventListener("change", displaySelectedCar);

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");


selectTask5Animals.addEventListener("change", function() {

  const selectedAnimal = selectTask5Animals.value;

  txtTask5Output.textContent = `You selected: ${selectedAnimal.charAt(0).toUpperCase() + selectedAnimal.slice(1)}`;
});


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Array of girls' names
const GirlsNames = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", 
  "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", 
  "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];


const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");


function populateSelect() {

  selectTask6Girls.innerHTML = '';

 
  GirlsNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name.toLowerCase();  
    option.textContent = name;  
    selectTask6Girls.appendChild(option); 
  });
}

selectTask6Girls.addEventListener("change", function() {
  const selectedName = selectTask6Girls.value;


  txtTask6Output.textContent = `You selected: ${selectedName.charAt(0).toUpperCase() + selectedName.slice(1)}`;
});


populateSelect();

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
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