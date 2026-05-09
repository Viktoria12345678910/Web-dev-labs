"use strict"
async function getData() {
	const response = await fetch('http://localhost:3000/product/list');
	const data = await response.json();
	console.log(data);
}

async function postData(){
	const response = await fetch('http://localhost:3000/product/create', {
		method:'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({name:"Ipad" , category:"tech", price:"12"})
	});
	const data = await response.json();
	console.log(data);
}

async function putData(){
	const response = await fetch('http://localhost:3000/product/1', {
		method:'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({name:"Ipad" , category:"tech", price:"10"})
	});
	const data = await response.json();
	console.log(data);
}

async function deleteData(){
	const response = await fetch("http://localhost:3000/product/2", {
		method: "DELETE"
	});
	const data = await response.json();
	console.log(data);
}
postData();
putData();
deleteData();
getData();
