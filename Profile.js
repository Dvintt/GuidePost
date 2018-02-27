
function updateUser(){		
	document.getElementById("profile").innerHTML = window.getCookie("username");
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = window.getCookie("username");
console.log(typeof(username));
console.log(username) + "I am in line 30";
    if (username != "") {
        alert("Welcome again " + username);
    } else {
//        username = prompt("Please enter your name:", "");
		username = document.getElementById("emailorUsername").value;
console.log(username);
        if (username != "" && username != null) {
            window.setCookie("username", username, 365);
        }
    }
}

function saveLanguage(){
console.log("I am here!!");
	document.getElementById("showl").innerHTML = document.getElementById("language").value;
}