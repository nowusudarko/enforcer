//@author Selassie Golloh

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
	return uluru;

}



