var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.getElementsByTagName("ul")[0];
var list2 = document.querySelector("ul");
var btn = document.getElementsByClassName("bd");
var list = document.getElementsByTagName("li");
var j=0;

function addLiEvent() {
		// Loops through all li's
	for(i = 0; i < list.length; i++) {
		// Listens for click event on delete button, then runs deleteListItem function
		document.querySelectorAll(".bd")[i].addEventListener("click", deleteListItem);
	}
}

function inputLength() {
	return input.value.length;
}

function addOnMouse() {
	if (inputLength() > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		var div = document.createElement("div");
		ul.appendChild(div);
		div.appendChild(li);
		div.setAttribute("class", "listCont");
		abcd();
		addLiEvent();
		input.value="";
	}
}

function addOnKey(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		var div = document.createElement("div");
		ul.appendChild(div);
		div.appendChild(li);
		div.setAttribute("class", "listCont");
		abcd();
		addLiEvent();
		input.value="";

	}
}

function toggleList(event) {
	
	event.target.classList.toggle("done");

}
function abcd() {

	var del = document.createElement("button");
	del.appendChild(document.createTextNode("X"));
	document.getElementsByTagName("li")[j].appendChild(del);
		del.setAttribute("class", "bd");
		j++;

	// for (i=0; i<document.getElementsByTagName("li").length; i++) {
		
	// }
}

// Function to delete li on DELETE button click
var deleteListItem = function() {
	// Selects button's parent node, the li
	var liItem = event.target.parentNode;
	// Selects the li's parent node, the div
	var liParent = liItem.parentNode;
	// Selects the div's parent node
	var divParent = liParent.parentNode;
	// Removed the ul's child node, the li
	divParent.removeChild(liParent);
	j--;
}

button.addEventListener("click", addOnMouse);

input.addEventListener("keydown", addOnKey);
list2.addEventListener("click", toggleList);