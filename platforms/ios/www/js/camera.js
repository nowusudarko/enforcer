//@author Selassie Golloh

function cameraGetPicture(){
navigator.camera.getPicture(function(result){
console.log(result);
},function(error){
console.log(error);
},{
sourceType : Camera.PictureSourceType.CAMERA
});
}


// function cameraGetPicture() {
//    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
//       destinationType: Camera.DestinationType.DATA_URL,
//       sourceType: Camera.PictureSourceType.PHOTOLIBRARY
//    });

//    function onSuccess(imageURL) {
//       var image = document.getElementById('myImage');
//       image.src = imageURL;
//    }

//    function onFail(message) {
//       alert('Failed because: ' + message);
//    }

// }


document.getElementById("cameraTakePicture").addEventListener 
   ("click", cameraTakePicture); 



   function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      destinationType: Camera.DestinationType.DATA_URL 
   });  
   
   // function onSuccess(imageData) { 
   //    var image = document.getElementById('myImage'); 
   //    image.src = "data:image/jpeg;base64," + imageData; 
   // }  
   
   // function onFail(message) { 
   //    alert('Failed because: ' + message); 
   // } 
}