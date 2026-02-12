"use strict"
//task1
console.log("script started");
const studentDisplay = document.getElementById("studentInfo");
const carDisplay = document.getElementById("carInfo");
const bookDisplay = document.getElementById("bookInfo");
//part 1
const student = {name: "Peter",
		age: 18,
		gender: "male"}

const { name: studentName, age: studentAge, gender: studentGender} = student;
let studentInfo = "Name: "+studentName+" Age: "+student.age+" Gender: "+studentGender;
studentDisplay.textContent += studentInfo 

//part 2
const car ={
	engine: {
		cylinders: 4,
		horsepower: 50,
		}
	}
const {engine: {cylinders: engineCylinders, horsepower: engineHorsepower}} = car;
let carInfo = "Cylinders: "+engineCylinders+" Horsepower: "+engineHorsepower;
carDisplay.textContent += carInfo;

//part 3
const book = {title: "hamlet",
		author: "shakespear"}
const {title: bookTitle, author: bookAuthor} = book;
let bookInfo = "Title: "+bookTitle+" Author: "+bookAuthor;

bookDisplay.textContent += bookInfo;

//task2
//part 1
let numbers = [1, 2, 3];
const [firstNumber, secondNumber, thirdNumber]=numbers
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

//part 2
let fruits = ["apple", "orange", "banana"];


const [firstFruit, ...restFruits] = fruits;
console.log(firstFruit);
console.log(restFruits);

//part 3
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = [...arr1,...arr2];
console.log(combinedArray)

//task3
function capitalize(phrase){
	phrase = phrase.toLowerCase();
	phrase = phrase.split(" ");
	let result = [];
	console.log(phrase);
	for (let word of phrase){
		let cWord = word[0].toUpperCase() + word.slice(1);
		result.push(cWord);
	}
	phrase = result.join(" ");
	console.log(phrase);
	return phrase;
}
capitalize("i lIke jAvascRipt");

//task4
function camelCase(style){
	style = style.split("-");
	let result = [];
	result.push(style[0]);
	for (let i=1; i < style.length; i++){
		let part = style[i];
		style[i] = part[0].toUpperCase() + part.slice(1);
		result.push(style[i]);
	}
	result = result.join("");
	return result;
}


console.log(camelCase("font-size"));

//task5
function toNewYear(){
	const now = new Date();
	const newYear = new Date(new Date().getFullYear() +1, 0, 1);

	const diff = newYear - now;

	const days = Math.floor(diff/(1000*60*60*24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  	const seconds = Math.floor((diff % (1000 * 60)) / 1000);

	document.getElementById("days").textContent = days;
	document.getElementById("hours").textContent = hours;
	document.getElementById("minutes").textContent = minutes;
	document.getElementById("seconds").textContent = seconds;
}
setInterval(toNewYear)
