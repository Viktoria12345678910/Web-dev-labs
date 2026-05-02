"use strict"
const path = require('path');
const fs = require('fs/promises');
const readline = require('readline/promises');

async function read(){
		const configPath = path.join(__dirname, 'state.txt');
		const states = await fs.readFile(configPath, 'utf8');
		console.log(states);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function writeNew(){
	const configPath = path.join(__dirname, 'state.txt');
	const name = await rl.question("What is their name? ");
	const state = await rl.question("Are they free or busy? ");
	const usr = name+" is "+state;
	console.log(usr);
	await fs.appendFile(configPath, usr);
}
async function main() {
	await read();
	const answer = await rl.question("Would you like to add a new user(y/n) ");
	if(answer == "n"){
		console.log("exiting...");
		rl.close();
		process.exit();
	}
	if(answer == "y"){
		console.log("yes was chosen");
		await writeNew();
		rl.close();
	}
}
main();
