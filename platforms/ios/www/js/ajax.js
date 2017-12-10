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
				document.location.assign("../login/index.html");
			}
			else{
				alert("Unable to register");
			}
		}
	};
	request.open("GET","http://172.20.23.189/CrimeReporter/www/processunsecure.php?username="+username+"&email="+email+"&phonenumber="+phonenumber+"&age="+age+"&organization="+organization+"&gender="+gender+"&register=register",true);
	request.send();
}