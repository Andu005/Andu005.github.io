let numero = Math.floor(Math.random()*100)+1;
		let contador = 0;

		

		function compara_numero(event)
		{
			event.preventDefault();
			if (contador <= 10){	
				
				let submit_input = document.getElementById("field-submit");
				
				submit_input.value = "Adivina ("+contador+")";
				
				let my_num_input = document.getElementById("field-number");
				
				let my_num = document.getElementById("field-number").value;
				  
				let resultado = document.getElementById("resultado");
				if (my_num < 1 || my_num > 100) {
					resultado.innerHTML = "<h4>Error, el numero debe estar entre el rango (1-100)</h4>";
					resultado.style.color = "#ff0000";
					my_num_input.style.borderColor = "#ff0000";
					my_num_input.style.borderWidth = "1px";
					document.getElementById("progreso").value = contador;
				}
				else if (my_num > numero) {
					resultado.innerHTML = "<h4>Es menor que " + my_num + "</h4>";
					resultado.style.color = "#ff0000";
					my_num_input.style.borderColor = "#ff0000";
					my_num_input.style.borderWidth = "1px";
					contador++;
					document.getElementById("progreso").value = contador;
				}
				else if (my_num < numero) {
					resultado.innerHTML = "<h4>Es mayor que " + my_num+ "</h4>";
					resultado.style.color = "#ff0000";
					my_num_input.style.borderColor = "#ff0000";
					my_num_input.style.borderWidth = "1px";
					contador++;
					document.getElementById("progreso").value = contador;
				}
				else{
					resultado.innerHTML = "<h4>CORRECTO!!! " + my_num +"</h4>";
					resultado.style.color = "#00ff00";
					my_num_input.style.borderColor = "#00ff00";
					my_num_input.style.borderWidth = "1px";
					submit_input.disabled = true;
					document.getElementById("progreso").value = contador;
				}
			} else {
				submit_input.disabled = true;
			}
		}