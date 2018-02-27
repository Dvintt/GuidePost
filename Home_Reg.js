function openTab(event, tabNames) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabNames).style.display = "block";
    event.currentTarget.className += "active";
}

/* Add List to schedule Box */
function newList() {
	"use strict";
	var newDates, newSize, newLoc, newStatus, newCont, inDates, inSize, inLoc, inStatus;

	/* Creating new elements */
	newDates = document.createElement("P");
	newSize = document.createElement("P");
	newLoc = document.createElement("P");
    //button = document.createElement("button");
    //button.innerHTML = going!;
    newStatus = document.createElement("P");
    newCont = document.createElement("DIV");

	/* Assigning Div a new class */
	newCont.className = "schBox";

	/* Creating new textNodes based on user input */
	inDates = document.createTextNode("Dates: " + document.getElementById("in1").value);
	inSize = document.createTextNode("Party Size: " + document.getElementById("in2").value);
	inLoc = document.createTextNode("Location: " + document.getElementById("in3").value);
    inStatus = document.createTextNode("Status: " + document.getElementById("in4").value);
    
	/* Appending user information to new elements */
	newDates.appendChild(inDates);
	newSize.appendChild(inSize);
	newLoc.appendChild(inLoc);
    newStatus.appendChild(inStatus);
	
	/* Adding Elements to new Div and pushing it to the list div in html */
	newCont.appendChild(newDates);
	newCont.appendChild(newSize);
	newCont.appendChild(newLoc);
    newCont.appendChild(newStatus);
	document.getElementById("list").appendChild(newCont);

	/*Resetting Fields */
	document.getElementById("in1").value = "";
	document.getElementById("in2").value = "";
	document.getElementById("in3").value = "";
    document.getElementById("in4").value = "";

}