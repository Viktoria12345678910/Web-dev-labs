const changeTextBtn = document.getElementById("changeText");
const textDiv = document.getElementById("someText");

changeTextBtn.onclick=function(){
				let newText = prompt("what should new text be?", "");
				textDiv.textContent = newText;
}
