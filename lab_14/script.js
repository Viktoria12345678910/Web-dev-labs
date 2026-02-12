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
}
multDisplay.textContent += m;
//через while
let i = 0;
while (i < arr.lenght - 1){
	m *= arr[i]
	i++
}

//task3
const smallestDisplay = document.getElementById("smallest");
let argument;
function findMin(){
	let min = arguments[0];
	for (argument of arguments){
		if (argument < min){
			min = argument;
		}
	}

	return min
}

smallest = findMin(1, 5, -3, 4, 6, 12);
smallestDisplay.textContent += smallest.toString();

//task4
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
const uniqueDisplay = document.getElementById("unique")
function findUnique(arr){
	arr.sort();
	let prev;
	let el;
	for (el of arr){
		if (prev === el){
			return false;
		}
		prev = el
	}
	return true;
}

let unique = findUnique(arr);
uniqueDisplay.textContent += unique.toString();

