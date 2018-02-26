/* Chat Message */
function myFunction() {
	"use strict";
	
	var newMsg, inputText, outputText;
	newMsg = document.createElement("P");
	inputText = document.getElementById("num1").value;
	outputText = document.createTextNode(inputText);

	/* Appending user information to new element*/
	newMsg.appendChild(outputText);

	/* Giving <p> a new class */
	newMsg.className = "chatFrame";

	/* Adding Elements to new Div and pushing it to the list div in html */
	document.getElementById("chatBox").appendChild(newMsg);

	/*Resetting Fields */
	document.getElementById("num1").value = "";
}

function Remove(form_id) { 
        var f = document.getElementById(form_id);
        f.parentNode.removeChild(f); 
}


/* Add List to schedule Box */
function newList() {
	"use strict";
	var newDate, newTime, newLoc, newDesc, newCont, inDate, inTime, inLoc, inDesc, removeBtn , btnText , idNUM , idTxt;

	/* Creating new elements */
	newDate = document.createElement("P");
	newTime = document.createElement("P");
	newLoc = document.createElement("P");
	newDesc = document.createElement("P");
	newCont = document.createElement("DIV");
	idNUM = Math.floor((Math.random() * 100) + 1);
	idTxt = "Remove("+idNUM+ ")";
	
	/* Setting custom id for div content */
	newCont.setAttribute("id",idNUM);

	/*Creating remove button */
	removeBtn = document.createElement("BUTTON");	
	removeBtn.setAttribute("onclick", idTxt );
	
	/* Assigning Div a new class */
	newCont.className = "schFrame";

	/* Creating new textNodes based on user input */
	inDate = document.createTextNode("Date: " + document.getElementById("in1").value);
	inTime = document.createTextNode("Time: " + document.getElementById("in2").value);
	inLoc = document.createTextNode("Loc: " + document.getElementById("in3").value);
	inDesc = document.createTextNode("Description: " + document.getElementById("in4").value);	
	btnText = document.createTextNode("Remove");
		
	/* Appending user information to new elements */
	newDate.appendChild(inDate);
	newTime.appendChild(inTime);
	newLoc.appendChild(inLoc);
	newDesc.appendChild(inDesc);	
	removeBtn.appendChild(btnText);

	/* Adding Elements to new Div and pushing it to the list div in html */
	newCont.appendChild(newDate);
	newCont.appendChild(newTime);
	newCont.appendChild(newLoc);
	newCont.appendChild(newDesc);
	newCont.appendChild(removeBtn);
	
	document.getElementById("list").appendChild(newCont);

	/*Resetting Fields */
	document.getElementById("in1").value = "";
	document.getElementById("in2").value = "";
	document.getElementById("in3").value = "";
	document.getElementById("in4").value = "";

}
