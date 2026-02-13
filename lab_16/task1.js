"use strict"
const newElement = document.getElementById("addElement");
const cont = document.querySelector("#container");
newElement.onclick = function() {
let div = document.createElement('div');
cont.appendChild(div);
div.style.backgroundColor = "pink";
div.style.borderStyle = "dotted";
div.style.borderColor = "white";}
