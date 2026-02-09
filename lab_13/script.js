"use strikt"
// task1
let x = 1;
let y = 2;

let res1 = x.toString() + y;
console.log(res1);
console.log(typeof res1);

let res2 = (!!x).toString() + y;
console.log(res2);
console.log(typeof res2)

let res3 = !!(x+y);
console.log(res3);
console.log(typeof res3);

let res4 = parseInt(res2);
console.log(res4);
console.log(typeof res4);

// task2
let n = prompt("Enter a number", "")
let res = false;
if(n%2 === 0 && n > 0){
	res = true;
}
console.log(res);

// task3
const display = document.getElementById("Adult");
let isAdult = prompt("Are you an adult?(yes or no)");
if (isAdult.toLowerCase() === "yes") {
	display.textContent = "Ви досягли повнолітнього вік";
}
else if (isAdult.toLowerCase() === "no"){
	display.textContent = "Ви ще надто молод";
}

//task4
let a = parseInt(prompt("How long is the first side"));
let b = parseInt(prompt("How long is the second side"));
let c = parseInt(prompt("How long is the third side"));

let p = (a+b+c)/2;
let area = p*(p-a)*(p-b)*(p-c);
area = Math.sqrt(area)
console.log(area);

if ( a**2 + b**2 === c**2) {
	console.log("triangle has angle 90");
} else {
	console.log("triangle does not have angle 90");
}

//task5
let time = new Date();
let hour = time.getHours();
let greeting = document.getElementById("greeting");

//with if
/*
if (hour >= 23 && hour < 5) {
	greeting.textContent = "Доброї ночі";
}
else if (hour >= 5 && hour < 11){
	greeting.textContent = "Доброго ранку";
}
else if (hour >= 11 && hour < 17) {
	greeting.textContent = "Доброго дня";
}
else if (hour >= 17 && hour < 23) {
	greeting.textContent = "Доброго вечора";
}
*/

//with switch
switch(true) {
	case (hour >= 23 && hour < 5): 
		greeting.textContent = "Доброї ночі";
		break;
	case (hour >= 5 && hour < 11):
		greeting.textContent = "Доброго ранку";
		break;
	case (hour >= 11 && hour < 17):
		greeting.textContent = "Доброго дня";
		break;
	case (hour >= 17 && hour < 23):
		greeting.textContent = "Доброго вечора";
		break;
}
