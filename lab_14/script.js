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

//task5
const modal = document.getElementById("myModal");
const buyModal = document.getElementById("buyModal");
const span = document.getElementsByClassName("close");
const productSelect = document.getElementById("productToBuy");
const addBtn = document.getElementById("add");
const writeBtn = document.getElementById("write");
const buyBtn = document.getElementById("buy");
const nameField = document.forms["myForm"]["name"];
const amountField = document.forms["myForm"]["amount"];
const boughtField = document.forms["myForm"]["bought"];
let groceryList = [];
//add items to the list
function addToList(name, amount = 1, bought = false){
	console.log("adding item...")
	let product = {productName: name, amountNeeded: amount, isBought: bought};
	console.log(product);
	groceryList.push(product);
	console.log(groceryList);
}
// write to console
function writeToConsole(){
	console.log(groceryList);
}
// buy
function buy(name){
	let iteam = groceryList.findIndex(obj => obj.name === name);
	
	console.log(iteam);

	if (!groceryList[iteam].isBought){
		groceryList[iteam].isBought = true;
		groceryList.splice(iteam, 1);
	} else if(groceryList[iteam].isBought){
		alert("the product is bought");
	}
		
}
//user wants to add item

async function onAddClicked(){
	event.preventDefault();
	let name, amount;
	await new Promise(resolve => {
		myForm.addEventListener("submit", function() {
	event.preventDefault();
	name = nameField.value;
	amount = amountField.value;
	resolve();
	});
	});

	addToList(name, amount);
}

addBtn.onclick = function() {
	modal.style.display = "block";
	onAddClicked();
} 

span.onclick = function() {
	modal.style.display = "none";
	buyModal.style.display = "none";
}

/*[].forEach.call(span, function(closeBtn){
			closeBtn.onclick = function(){modal.style.display = "none"; buyModal.style.display= "none"}
			}
		);*/
Array.from(span).forEach( function(closeBtn){
			closeBtn.onclick = function(){modal.style.display = "none"; buyModal.style.display= "none"}
			}
)
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
	buyModal.style.display = "none";
  }
}

writeBtn.onclick = function() {writeToConsole();}
buyBtn.onclick = function(){groceryList.forEach(async function(item){
				buyModal.style.display = "block";
				console.log("buy button pressed")
				let itemOption = document.createElement('option');
				itemOption.value = item;
				itemOption.textContent = item.productName;
				document.getElementById("productToBuy").append(itemOption);
				await new Promise(resolve => {
					buyForm.addEventListener("submit", function() {
						event.preventDefault();
						name = nameField.value;
						amount = amountField.value;
						resolve();
						});
					});
				buy(productSelect.value);
					}
				)
			}
