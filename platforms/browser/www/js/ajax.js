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
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
		window.location.href  = "../main/main.html"
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	  });
}
var loginSubmit  = document.getElementById("loginSubmit");
//loginSubmit.addEventListener("click", loginAjax);

function register () {	
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var phonenumber = document.getElementById('phonenumber').value;
	var age = document.getElementById('age').value;
	var organization = document.getElementById('organization').value;
	var gender = document.getElementById('gender').value;
	var password = document.getElementById('password').value;
	//auth 
	firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
		firebase.auth().currentUser.sendEmailVerification()
		.then(()  =>{
		 	alert("You have been sent an email. Verify that and login in")	   
		firebase.database().ref("users").push({
			username: username,
			email: email,
			phonenumber: phonenumber,
			age: age,
			organization:organization,
			gender:gender,
		}).then(()=>{
			window.location.href  = "../index.html"
		})
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	})
	})
}
var registerSubmit  = document.getElementById("registerSubmit");
registerSubmit.addEventListener("click", register);

function submitdetails(){
	//var takepic = document.getElementById('cameraTakePicture').value;
	var image = document.getElementById('myImage').value;
	var org = document.getElementById('org').value;
	var msg = document.getElementById('message').value;

	var date = new Date();
	var date = date.toString();
	 firebase.database().ref("report").push({
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



