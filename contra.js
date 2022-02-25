// function encriptar(elemento) {
// 	var contra  = document.getElementsByTagName('input')[0].value;
// 	var contra_codificada = btoa(contra);
// 	document.getElementById("result").innerHTML = contra_codificada;
	
// }


function encriptar(elemento) {

	//CONTRASEÑAS
	var contra1  = document.getElementById('contra1').value;
	var contra2  = document.getElementById('contra2').value;
	var contra_codificada = btoa(contra1);
	var contraMin = contra1.toLowerCase().length;
	var contraMayus = contra1.toUpperCase().length;
	error=0;




if (contra1.length == 0 || contra2.length == 0) {
	  alert("No se aceptan campos vacios, favor de escribir contraseñas");
	  error=1;
}

if (contra1.length < 8 && contra2.length < 8) {
	  	//alert("La contraseña debe ser mayor a 8 digitos");
	  	document.getElementById("d8").style.color = "red";
	  	error=1;
}

if (contra1 != contra2) {
		alert("Las contraseñas deben de coincidir");
		error=1;

		

}


if (contra1.search(/[0-9]/)<1 && contra2.search(/[0-9]/)<1) {
			document.getElementById("num").style.color = "red";
			error=1;
		}

		if (contra1.search(/[A-Z]/)==-1 && contra2.search(/[A-Z]/)==-1) {
			document.getElementById("ma").style.color = "red";
			error=1;
		}

 		if (contra1.search(/[a-z]/)==-1 && contra2.search(/[a-z]/)==-1){
			document.getElementById("mn").style.color = "red";
			error=1;
		}

if (error == 0) {
	document.getElementById("result").innerHTML = contra_codificada;

}

}


function desencriptar(elemento){
	var contra1  = document.getElementById('contra1').value;
	var contra2  = document.getElementById('contra2').value;
	var contra_descodificada = atob(contra1);


if (contra1 != contra2) {
		alert("Las contraseñas deben de coincidir");

}
	document.getElementById("result").innerHTML = contra_descodificada;



}


	


