var button = document.getElementById("enter");
var input = document.getElementById("input");
var list = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var i =0;
Processing();
//Getting Input length
function inputLength(){
return input.value.length;
}
function mouseAdding(){ 
if(inputLength() > 0){
addingItem();
}
}
function addingEnter(event){
if(inputLength() > 0  && event.keyCode === 13){
addingItem();
}
}
function addingItem(){ 
var li = document.createElement("li");
li.appendChild(document.createTextNode(input.value));
var div = document.createElement("div");
list.appendChild(div);
div.appendChild(li);
div.setAttribute("class", "listCon");
ButtonsRelated();
addLiEvent();
input.value = "";

}
// Event to use function toggle
function Processing(){
   document.getElementById("list").addEventListener("click",function(e) {
        // e.target is our targetted element.
        // try doing console.log(e.target.nodeName), it will result LI
        if(e.target && e.target.nodeName == "LI") {
            e.target.classList.toggle("done");
            console.log(e.target.nodeName);
        }
    });
}
function ButtonsRelated() {
var del = document.createElement("button");
del.appendChild(document.createTextNode("Delete"));
listItems[i].appendChild(del);
del.setAttribute("class", "bd");
i++;
}
var removingTask = function() {
var liItem = event.target.parentNode;
var liParent = liItem.parentNode;
var divParent = liParent.parentNode;
divParent.removeChild(liParent);
i--;
}
function addLiEvent() {

for(i = 0; i < listItems.length; i++) {
document.querySelectorAll(".bd")[i].addEventListener("click", removingTask);
}
}
button.addEventListener("click", mouseAdding);
input.addEventListener("keypress", addingEnter);