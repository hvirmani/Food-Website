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

function show() {
	var txt = document.getElementById("input_txt").value;
	var member = document.getElementById("member").value;
	var msg = document.getElementById("msg").value;

	if (msg === '')
		alert(`Congrats ${txt} a table of ${member} members has been booked.`);
	else
		alert(`Congrats ${txt} a table of ${member} members has been booked.\nWe will take care of special message!`);
}