"use strict"
// task1
let cities = ["Ternopil", "Lviv", "Warsaw"];
const citiesDisplay = document.getElementById("cities");
let citiesString = "";
let city;
for (city of cities){
	citiesString += city + "*";
}
citiesString = citiesString.slice(0, -1);
citiesDisplay.textContent = " " + citiesString;

//task2
const multDisplay = document.getElementById("multiply");
let arr = [2, 3, 4, 5];
let m = 1;
//через for
for (let i of arr){
	m *=i; 	
	console.log(m);
}
multDisplay.textContent += m;
//через while
let i = 0;
while (i < arr.lenght - 1){
	m *= arr[i]
	i++
}

