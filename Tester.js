function myFunction() {
	var newMsg = document.createElement("P");
	var tex = document.getElementById("num1").value;
	var lol = document.createTextNode(tex);
	
	newMsg.appendChild(lol);
	
	newMsg.className ="chatBox";
	
	document.getElementById("chatC").appendChild(newMsg);
	
	document.getElementById("num1").value = "";
}
