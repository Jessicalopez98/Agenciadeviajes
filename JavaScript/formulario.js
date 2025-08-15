import { validarNombre, validarPrecio, validarDias, validarNoches, validarLugar } from "./valform.js";

document.getElementById("botoncrear").addEventListener("click", () => {
  // https://getbootstrap.com/docs/5.0/components/modal/
  let modal = new bootstrap.Modal(document.querySelector(".modal"));
  modal.show();
});

const iptName=document.getElementById("iptName");
const iptPrecio=document.getElementById("iptPrecio");
const iptLugar=document.getElementById("iptLugar");
const iptDias=document.getElementById("iptDias");
const iptNoches=document.getElementById("iptNoches");
const iptAlerta=document.getElementById("iptAlerta");

//boton de crear
const iptboton=document.getElementById("iptboton");

// orejita de boton
iptboton.addEventListener("click", function(event) {
    event.preventDefault();
  

//Alertas de los mensajes 
iptAlerta.classList.remove("alert-danger");
 iptAlerta.classList.add("alert-danger");
 iptAlerta.style.display = "none"; // Oculto inicialmente

  let mensajesError = [];

//condiciones de validaciones 

if (!validarNombre(iptName.value)) {
        mensajesError.push("El nombre debe tener al menos 3 caracteres y ser texto.");
    }

if(!validarPrecio(iptPrecio.value)){
        mensajesError.push("El precio debe de ser un dato numérico");
}

if(!validaLugar(iptLugar.value)){
        mensajesError.push("El lugar debe tener al menos 3 caracteres y ser texto");
}

if(!validarDias(iptDias.value)){
        mensajesError.push("Los dias deben ser un dato numérico");
}

if(!validarNoches(iptNoches.value)){
        mensajesError.push("Los dias deben ser un dato numérico");
}

 if (mensajesError.length > 0) {
        // Mostrando errores concatenados en el div
        alertResultado.style.display = "block"; // Mostrar el div
        alertResultado.innerHTML = mensajesError.join("<br>");
    } else {
        //Mostrar mensaje éxito
        alertResultado.style.display = "block";
        alertResultado.classList.remove("alert-danger");
        alertResultado.classList.add("alert-success");
        alertResultado.innerHTML = "¡Formulario enviado correctamente!";

        // Limpiar campos
        iptName.value = '';
        iptPrecio.value = '';
        iptDias.value = '';
        iptNoches.value = '';
        checkNewsletter.checked = false;
       setTimeout(() => location.reload(), 3000);
    }
//});
