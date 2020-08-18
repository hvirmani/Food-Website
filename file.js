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
function finish(){
	alert(`Congratulations your order has been placed.\nPlease pay ${total}$ and grab your meal.`);
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
var add = document.getElementsByClassName("cart");
var total = 0;
for (i = 0; i < add.length; i++) {
	add[i].onclick = function () {
		var name = this.parentElement.parentElement.children[0].children[0].children[0].textContent;
		var amount = parseInt(this.parentElement.parentElement.children[0].children[0].children[1].textContent);
		var z = 0;
		total = total + amount;
		var last = document.getElementsByClassName("item_name");
		for (j = 0; j < last.length; j++) {
			if (name === last[j].textContent) {
				var quantity = parseInt(last[j].parentElement.children[1].textContent);
				quantity += 1;
				last[j].parentElement.children[1].textContent = quantity;
				last[j].parentElement.children[2].textContent = quantity * amount + "$";
				z = 1;
				break;
			}

		}
		if (z === 1)
			return 0;
		var element = document.createElement("li");
		element.innerHTML = `<span class="item_name">${name}</span><span class="item_quantity">1</span><span class="item_amount">${amount}$</span>`
		document.getElementById("cart_content").appendChild(element);
		document.getElementById("cart").style.display = "block";
		document.getElementById("book").style.display="none";
	}

}