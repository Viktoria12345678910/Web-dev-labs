"use strict"
class Shape{
	constructor(color){
		this.color = color;
	}
	calculateArea() {
		throw new Error('Method calculateArea should be implemented in the subclass');
	}


	calculateP() {
		throw new Error('Method calculateP should be implemented in the subclass');
	}
}

class Circle extends Shape {
	constructor(radius, color){
		super(color);
		this.radius = radius;
	}
	
	calculateArea(){
		return Math.PI*Math.pow(this.radius, 2);
	}

	calculateP(){
		return Math.PI*(this.radius*2);
	}
}

class Rectangle extends Shape{
	constructor(width, height, color){
	super(color);
	this.width = width;
	this.haight = height;
	}

	calculateArea(){
		return this.width*this.height;
	}

	calculateP(){
		return this.width*2+this.height*2;
	}
}

let circle = new Circle(14, "blue");
let rect = new Rectangle(10, 5, "green");

console.log("CIRCLE===================================");
console.log("color: "+circle.color+" area: "+circle.calculateArea()+" lenght: "+circle.calculateP());

console.log("RECTANGLE===================================");
console.log("color: "+rect.color+" area: "+rect.calculateArea()+" lenght: "+rect.calculateP());
