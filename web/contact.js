let nombre_field;
let contrasena_field;
let fecha_field;
let color_field;
let mensaje_field;
let subscribe;
let contact_form;

document.addEventListener("DOMContentLoaded", (event) => {
	
	nombre_field = document.getElementById("nombre-field");
	contrasena_field = document.getElementById("contrasena-field");
	fecha_field = document.getElementById("fecha-field");
	color_field = document.getElementById("color-field");
	mensaje_field = document.getElementById("mensaje-field");
	subscribe = document.getElementById("subscribe");
	contact_form = document.getElementById("contact-form");

	subscribe.addEventListener("click", function(event){
		if (event.target.checked){
			console.log("JAJAJAJAJA! Tu alma es mia");
		}else{
			console.log("Noooooooooooooooo!");
		}
	});
	
	contact_form.addEventListener("submit", (event) => {
		let send = true;
		
		if(nombre_field.value.length <= 2 || nombre_field.value.length > 32){
			send = false;
			alert("Nombre demasiado corto: el nombre debe tenr minimo 3 caracteres.");
			nombre_field.style.border = "2px solid red";
		}
		else{
			nombre_field.style.border = "2px solid green";
		}
		
		if(fecha_field.value == "" || fecha_field.value.length != 10){
			send = false;
			fecha_field.style.border = "2px solid red";
		}
		else{
			let date = fecha_field.value.split("-");
			
			
			let year = parseInt(date[0])
			let month = parseInt(date[1])
			let day = parseInt(date[2])
			
			if (isNaN(year) || isNaN(month) || isNaN(day)){
				send = false;
				alert("Error en la fecha: formato de fecha no aceptado.");
				fecha_field.style.border = "2px solid red";
			}else{
				if (year <= 0 || year > 2025){
					send = false;
					fecha_field.style.border = "2px solid red";
				}
				else if(month <= 0 || month > 12){
					send = false;
					fecha_field.style.border = "2px solid red";
				}
				else if(day <= 0 || day > 31){
					send = false;
					fecha_field.style.border = "2px solid red";
				}else{
					fecha_field.style.border = "2px solid green";
				}
			}
		}
	
		if (contrasena_field.value.length < 8) {
			send = false;
			alert("Contraseña demasiado corta: la contraseña debe tenr minimo 8 caracteres.")
			contrasena_field.style.border = "2px solid red";
		}else{
			contrasena_field.style.border = "2px solid green";
		}

		if (color_field.value.length !== 7 || color_field.value[0] !== "#") {
				send = false;
				alert("Error en el color: formato de color no aceptado.")
				color_field.style.border = "2px solid red";
		}else{
			color_field.style.border = "2px solid green";
		}
		
		if(mensaje_field.value.length < 5 || mensaje_field.value.length > 255){
			send = false;
			alert("Mensaje demasido corto: el mensaje debe tener mas de 4 caracteres.");
			mensaje_field.style.border = "2px solid red";
		}
		else {
			mensaje_field.value.replace(/'/g, "\\'");
			mensaje_field.style.border = "2px solid green";
		}
		
		send = false;
		if(!send){
			event.preventDefault();
			
		}
	});


});
