//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
var user_list = [];
var UserName = "";
var language = "";
var loca = "";
var tg = "";

function updateUser(){	
//console.log("Iam in updateUser");
	UserName = JSON.parse(localStorage.getItem("stUser"));
	console.log(UserName);
	user_list = JSON.parse(localStorage.getItem("Users"));
	console.log(user_list);
	language = JSON.parse(localStorage.getItem("stLan"));
	console.log(language);
	loca = JSON.parse(localStorage.getItem("stLoca"));
	console.log(loca);
	tg = JSON.parse(localStorage.getItem("stTg"));
	console.log(tg);

	if(window.UserName != ""){
		document.getElementById("profile").innerHTML =UserName;
		document.getElementById("showl").innerHTML =language;
		document.getElementById("showlocation").innerHTML =loca;
		document.getElementById("showtg").innerHTML =tg;
	}
}

function store() {
//	"use strict";	
	var user = {name:"", email:"", pwd:"", location:"", language:"", tg:"" };
	
	var newuser = new Object();
	newuser.name = document.getElementById("usernameUP").value;

	newuser.email = document.getElementById("emailUP").value;
	newuser.pwd = document.getElementById("passwordUP").value;
	
	for(i = 0; i<user_list.length; i++){
		if(user_list[i].name === newuser.name){
			document.getElementById("demo").innerHTML = "The username have been used.";
			break;
		}
		else if(user_list[i].email === newuser.email ){
			document.getElementById("demo").innerHTML = "The email have been registed.";
			break;
		}
	}
	user_list.push(newuser);
	console.log(user_list);

	if (typeof (Storage) !== "undefined") {
    	// Store
   		localStorage.setItem("Users", JSON.stringify(user_list));
		window.scrollTo(0,document.body.scrollHeight);
		document.getElementById("demo2").innerHTML = "Ready to login";

    	// Retrieve
    	document.getElementById("demo").innerHTML = "finish signed up ";
	} else {
      	document.getElementById("demo").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function check(){
//	"use strict";
	// entered data from the login-form
    var loginNameEmail = document.getElementById("emailorUsername").value;
    var loginPw = document.getElementById("password2").value;
	
	var storedUsers = JSON.parse(localStorage.getItem("Users"));
	
	var storedPw = null, auser;
	for(i = 0; i < storedUsers.length; i++){
		auser = storedUsers[i];
		if(auser.name == loginNameEmail || auser.email == loginNameEmail){
			storedPw = auser.pwd;
		}
	}
    // check if stored data from register-form is equal to data from login form
	if(storedPw === null){
		document.getElementById("demo2").innerHTML = "The username or email does not exist!";
	} else if(storedPw !== null && storedPw !== loginPw) {
		document.getElementById("demo2").innerHTML = "The password is incorrect";
	} 
	else if( storedPw !== null && storedPw === loginPw){
		document.getElementById("demo2").innerHTML = "log in successful!";
		localStorage.setItem("stUser", JSON.stringify(auser.name));
		window.location.href = "Home_Registered.html";
	}
}

function saveLanguage(){
	user_list = JSON.parse(localStorage.getItem("Users"));
	console.log(user_list);
	for(i = 0; i<user_list.length; i++){
		if(user_list[i].name === UserName){
			user_list[i].language = document.getElementById("language").value;
			document.getElementById("showl").innerHTML = user_list[i].language;
			localStorage.setItem("stLan", JSON.stringify(user_list[i].language));
		}
	}
}

function saveLocation(){
	user_list = JSON.parse(localStorage.getItem("Users"));
	console.log(user_list);
	for(i = 0; i<user_list.length; i++){
		if(user_list[i].name === UserName){
			user_list[i].location = document.getElementById("location").value;
			document.getElementById("showlocation").innerHTML = user_list[i].location;
			localStorage.setItem("stLoca", JSON.stringify(user_list[i].location));
		}
	}
}

function saveTg(){
	user_list = JSON.parse(localStorage.getItem("Users"));
	console.log(user_list);
	for(i = 0; i<user_list.length; i++){
		if(user_list[i].name === UserName){
			user_list[i].tg = document.getElementById("tg").value;
			document.getElementById("showtg").innerHTML =user_list[i].tg;
			localStorage.setItem("stTg", JSON.stringify(user_list[i].tg));
		}
	}
}


