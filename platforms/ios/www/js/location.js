//@author Selassie Golloh

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCurrentlocation);
	} else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}


function getCurrentlocation(position){
	var latititude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var uluru = {lat: latititude, lng: longitude};
	return uluru;

}




