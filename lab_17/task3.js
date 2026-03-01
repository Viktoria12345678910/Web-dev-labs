"use strict"
let ukrCities = ["Вінниця", "Дніпро", "Донецьк", "Житомир", "Запоріжжя", "Івано-Франківськ", "Київ", "Кропивнийький", "Луганськ", "Луцьк", "Львів", "Миколаїв", "Одеса", "Полтава", "Рівне", "Суми", "Тернопіль", "Ужгород", "Харків", "Херсон", "Хмельницький", "Черкаси", "Чернігів", "Чернівці"];
let gerCities = ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig']; 
const usaCities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'Dallas'];
const citiesEl = document.getElementById("cities");
const countryEl = document.getElementById("country");

function loadCities(cities){
	cities.forEach(opt =>{
	const el = document.createElement("option");
	el.textContent = opt;
	citiesEl.appendChild(el);
	});
}
function loadNewCities(){
	citiesEl.innerHTML = '';
	const country = countryEl.value;
	switch(country){
		case "ukr":
			loadCities(ukrCities);
			break;
		case "ger":
			loadCities(gerCities);
			break;
		case "usa":
			loadCities(usaCities);
			break;
	}
	const place=document.getElementById("loc");
	console.log(place);
	let text=countryEl.value+", "+citiesEl.value;
	console.log(text);
	place.textContent = text;
	citiesEl.addEventListener("change",()=>{
		text = countryEl.value+", "+citiesEl.value;
		place.textContent=text;
	})
}
countryEl.addEventListener("change", loadNewCities);
