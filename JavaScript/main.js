import { validarNombre, validarMensaje, validarTelefono, validarEmail } from "./validaciones.js";

// Variables referidas desde el HTML
const iptName = document.getElementById("iptName");
const iptEmail = document.getElementById("iptEmail");
const iptTelefono = document.getElementById("iptTelefono");
const iptMensaje = document.getElementById("iptMensaje");
const alertResultado = document.getElementById("alertResultado");

// Botón de enviar
const btnEnviar = document.querySelector("#btnEnviar button");

// Orejita del botón enviar
btnEnviar.addEventListener("click", function(event) {
    event.preventDefault();

    // Alertas de los mensajes
    alertResultado.classList.remove("alert-success");
    alertResultado.classList.add("alert-danger");

    let mensajesError = [];

    // Condiciones para las Validaciones
    if (!validarNombre(iptName.value)) {
        mensajesError.push("El nombre debe tener al menos 3 caracteres y ser texto.");
    }

    if (!validarEmail(iptEmail.value)) {
        mensajesError.push("El correo electrónico ingresado no es válido.");
    }

    if (!validarTelefono(iptTelefono.value)) {
        mensajesError.push("El teléfono debe contener 10 dígitos numéricos.");
    }

    if (!validarMensaje(iptMensaje.value)) {
        mensajesError.push("El mensaje debe tener entre 1 y 150 caracteres.");
    }

    if (mensajesError.length > 0) {
        // Mostrando errores concatenados en el div
        alertResultado.style.display = "block"; // Mostrar el div
        alertResultado.innerHTML = mensajesError.join("<br>");
    } else {
        alertResultado.style.display = "block";
        alertResultado.classList.remove("alert-danger");
        alertResultado.classList.add("alert-success");
        alertResultado.innerHTML = "¡Formulario enviado correctamente!";
    }
});
