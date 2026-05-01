"use stict"
//$(".logo img").attr("src", "./img/icon1.png" ); 
let start = $("a").attr("href");
if(start.startsWith("https")){
	$("a").attr("target", "_blank");
}

