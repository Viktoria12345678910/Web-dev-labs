"use strict"

function Car(brand, model, year){
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.displayInfo = function() {
		console.log("brand: "+brand);
		console.log("model: "+model);
		console.log("year: "+year);
	};
	this.drive = function() {
		console.log("рух "+brand+" "+model+" розпочато");
	};
}

const car1 = new Car("Toyota","Camry","2020");
const car2 = new Car("BMW", "M3", "2022" );
const car3 = new Car( "Honda", "Civic", "2019");

console.log("=======Car 1==============");
car1.displayInfo();
car1.drive();


console.log("=======Car 2==============");
car2.displayInfo();
car2.drive();


console.log("=======Car 3==============");
car3.displayInfo();
car3.drive();
