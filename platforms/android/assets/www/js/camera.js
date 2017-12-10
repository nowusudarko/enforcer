//@author Selassie Golloh

document.addEventListener("deviceready",function(){
    console.log(navigator.camera);
});


var cameraTakePicture = document.getElementById("cameraTakePicture");
cameraTakePicture.addEventListener("click",function(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    	destinationType: Camera.DestinationType.FILE_URI 
	});
});



function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
