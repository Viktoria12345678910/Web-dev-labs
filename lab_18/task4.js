"use strict"
const cont = document.getElementById("btns");
class Button{
	constructor(text, border, color, background){
		this.text = text;
		this.border = border;
		this.color = color;
		this.background = background;
		console.log("button created "+text);
	}
	render(){
		const btn = document.createElement("button");
		btn.textContent = this.text;
		btn.style.border = this.border;
		btn.style.color = this.color;
		btn.style.background = this.background;
		btn.addEventListener("click", () => {
			console.log("Кнопка "+this.text+" натиснута.\nКолір кнопки - "+this.background);
			}
		)
		this.element = btn;
		btns.appendChild(btn);
		console.log("button rendered");
	}
}

class RoundedButton extends Button{
	constructor(text, border, borderRadius, color, background){
		super(text, border, color, background);
		this.borderRadius = borderRadius;
	}

	render(){
		super.render();
		this.element.style.borderRadius = this.borderRadius;
	}

	dropShadow(){
		this.element.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
	}
}

let btn1 = new Button("click me", "solid", "white", "blue");
btn1.render();

let btn2 = new Button("press here", "dotted", "black", "lightgreen");
btn2.render();

let btn3 = new Button("click here", "dotted", "black", "lightblue");
btn3.render();

let btn4 = new RoundedButton("rounded_1", "solid", "25px", "blue", "lightgreen");
btn4.render();

let btn5 = new RoundedButton("rounded_2", "solid", "15px", "white", "orange");
btn5.render();

let btn6 = new RoundedButton("rounded_3", "dotted", "5px", "blue", "lightgrey");
btn6.render();
btn6.dropShadow();
