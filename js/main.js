
const botona=document.querySelector(".switch")
let img=document.querySelector("#icon_mode")
let me=document.querySelector("#art")

const all=document.querySelector("html")
const body=document.querySelector("body")
const state=localStorage.getItem("tfado")



console.log(img.src)


const swap=()=>{

	if(img.src.includes("night.png"))
	{
		all.style.filter=""
		img.src = "/assets/sun.png"
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
		
		img.src = "/assets/night.png"
		img.style.filter="invert(100%) hue-rotate(180deg)"
		localStorage.setItem("tfado", "dlam");
	}
}

if(state=="dlam" || state=="nor")
{
	swap()
}

botona.addEventListener("click", swap)
