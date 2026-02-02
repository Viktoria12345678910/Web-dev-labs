"use strict"
//task 2
console.log("Байдецька");
//task 3
let a;
let b;
a = 20;
b = "I am the main charachter";
const display = document.getElementById("variables");
display.textContent = "a = " + a + "\nb = " + b;
//task 4
const Obj = {
	str: "Oh god i am wonderfull",
	num: 13,
	bool: true,
	und: undefined,
	n: null,
};
//task 5 
let isAdult = confirm("Are you 18+?");
console.log(isAdult);

//task 6
let name = "Viktoria";
let lastName = "Baydetska";
let group = "Kn-321";
let birth = 2008;
let isMarried = false;
console.log(birth, typeof birth);
console.log(isMarried, typeof isMarried);
console.log(name, typeof name);
console.log(lastName, typeof lastName);
console.log(group, typeof group);
let workplace = undefined;
a = null;
console.log(workplace);
console.log(a);
// task 7
let userName = prompt("what is your login? ", "");
let email = prompt("what is your email?", "");
let passwd = prompt("what is your password", "");
alert("Dear " + userName + ", your email is " + email + ", your password is " + passwd);
// task 8
let hour = 60*1;
let day = hour*24;
let month = day * 30;
const seconds = document.getElementById("seconds");
seconds.textContent = "There are "+ hour +" seconds in an hour There are "+day+" seconds in a day \nThere are "+month+"seconds in a month";
