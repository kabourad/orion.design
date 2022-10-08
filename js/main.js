
const botona=document.querySelector(".switch")
let img=document.querySelector("#icon_mode")
let me=document.querySelector("#art")

const all=document.querySelector("html")
const body=document.querySelector("body")
const state=localStorage.getItem("tfado")
var base_url = window.location.origin;
const our_url = window.location.origin.includes("github") ? base_url+"/"+ "orion.design" : base_url



const swap=()=>{

	if(img.src.includes("night.png"))
	{
		all.style.filter=""
		img.src = our_url + "/assets/sun.png"
		img.style.filter=""
		me.style.filter=""
		body.style.backgroundColor= "bisque"
		localStorage.setItem("tfado", "nor");
	}
	else
	{
		all.style.filter="invert(100%) hue-rotate(180deg)"
		me.style.filter="invert(100%) hue-rotate(180deg)"
		body.style.backgroundColor= "white"
		
		img.src = our_url + "/assets/night.png"
		img.style.filter="invert(100%) hue-rotate(180deg)"
		localStorage.setItem("tfado", "dlam");
	}
}

if(state=="dlam" || state=="nor")
{
	swap()
}


botona.addEventListener("click", swap)
