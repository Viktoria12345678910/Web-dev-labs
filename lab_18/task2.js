"use strict"
//function Student(name, age, grade){
//	this.name = name;
//	this.age = age;
//	this.grade = grade;
//	this.study = function(){
//		console.log("|=== "+name+" === "+age+" === "+grade+" ===|");
//	}
//}

//let student1 = new Student("Villiam", "19", "5");
//let student2 = new Student("Jd", "17","3");
//let student3 = new Student("alexander", "14", "5+");

//console.log("         Students    ");
//console.log("|=== name === age === grade ===|")
//student1.study();
//student2.study();
//student3.study();
//

class Student{
	constructor(name, age, grade){
		this.name = name;
		this.age = age;
		this.grade = grade;
	}

	study(){
		console.log("|=== "+this.name+" === "+this.age+" === "+this.grade+" ===|");
	}
}


let student1 = new Student("Villiam", "19", "5");
let student2 = new Student("Jd", "17","3");
let student3 = new Student("alexander", "14", "5+");

console.log("         Students    ");
console.log("|=== name === age === grade ===|")
student1.study();
student2.study();
student3.study();


