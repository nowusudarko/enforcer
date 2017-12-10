var lat, longi;
document.addEventListener("deviceready",function(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCurrentlocation);
		
	} else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
})



function getCurrentlocation(position){
	var latititude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var uluru = {lat: latititude, lng: longitude};
	var para = document.getElementById("me");
	para.innerHTML = uluru['lat'] + " " + uluru['lng'];
	lat = uluru['lat'];
	longi = uluru['lng'];""
	return uluru;

}


function loginAjax () {
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;

	var request = new XMLHttpRequest();

	request.onreadystatechange=function(){
		if (this.status==200 && this.readyState == 4) {
			if (this.responseText === "successful") {
				document.location.assign("../index.html");
			}
			else{
				alert("Unable to login");
			}
		}
	};
	request.open("GET","http://172.20.23.189/CrimeReporter/www/processunsecure.php?username="+username+"&email="+email+"&login=login",true);
	request.send();
}

function register () {
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var phonenumber = document.getElementById('phonenumber').value;
	var age = document.getElementById('age').value;
	var organization = document.getElementById('organization').value;
	var gender = document.getElementById('gender').value;

	var request = new XMLHttpRequest();

	request.onreadystatechange=function(){
		if (this.status==200 && this.readyState == 4) {
			if (this.responseText === "successful") {
				document.location.assign("../index.html");
			}
			else{
				alert("Unable to login");
			}
		}
	};
	request.open("GET","http://172.20.23.189/CrimeReporter/www/processunsecure.php?username="+username+"&email="+email+"&login=login",true);
	request.send();
}



function registerAjax () {
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var phonenumber = document.getElementById('phonenumber').value;
	var age = document.getElementById('age').value;
	var organization = document.getElementById('organization').value;
	var gender = document.getElementById('gender').value;


	var request = new XMLHttpRequest();

	request.onreadystatechange=function(){
		if (this.status==200 && this.readyState == 4) {
			if (this.responseText === "successful") {
				document.location.assign("../index.html");
			}
			else{
				alert("Unable to Register");
			}
		}
	};
	request.open("GET","http://172.20.23.189/CrimeReporter/www/processunsecure.php?username="+username+"&email="+email+"&phonenumber="+phonenumber+"&age="+age+"&organization="+organization+"&gender="+gender+"&register=register",true);
	request.send();
}



function submitdetails(){
	//var takepic = document.getElementById('cameraTakePicture').value;
	var image = document.getElementById('myImage').value;
	var org = document.getElementById('org').value;
	var msg = document.getElementById('message').value;

	var date = new Date();
	var date = date.toString();
	console.log(date, image, org, msg);
	 firebase.database().ref("users").push({
	    org: org,
	    msg: msg,
	    date: date,
	    lat: lat,
		long:longi,
		//image: image
	 }).then(()=>{
	 	console.log("added");
	 })
} 

var infoSubmit  = document.getElementById("infoSubmit");
infoSubmit.addEventListener("click", submitdetails);



