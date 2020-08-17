function showveg() {
	document.getElementById("non_veg").style.display = "none";
	document.getElementById("veg").style.display = "block";
}

function shownon_veg() {
	document.getElementById("veg").style.display = "none";
	document.getElementById("non_veg").style.display = "block";

}

function toggle() {
	var element = document.getElementById("menu");
	element.classList.toggle("active");
	var navo = document.getElementById("bars");
	navo.classList.toggle("active");
}