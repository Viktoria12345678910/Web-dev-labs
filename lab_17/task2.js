"use strict"
const navEl = document.querySelector('.nav');
const hamburgerEl = document.getElementById('hamburger');
console.log(hamburgerEl);
hamburgerEl.addEventListener("click", () => {
	navEl.classList.toggle('nav--open');
	console.log("pressed")})

