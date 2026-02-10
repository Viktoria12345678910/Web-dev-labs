"use strict"
let cities = ["Ternopil", "Lviv", "Warsaw"];
const citiesDisplay = document.getElementById("cities");
let citiesString = "";
let city;
for (city of cities){
	citiesString += city + "*";
}
citiesString = citiesString.slice(0, -1);
citiesDisplay.textContent = " " + citiesString;
