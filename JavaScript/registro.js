import{validarNombre,validarNumTelefono,validarEmail, validarContraseña, validarConfirmarContraseña} from "./valregistro.js";

const alertRegistro = document.getElementById("alertRegistro");
const Nombre=document.getElementById("Nombre");
const numTelefono=document.getElementById("numTelefono");
const email=document.getElementById("email");
const contraseña=document.getElementById("contraseña");
const confirmarContraseña=document.getElementById("confirmarContraseña");
const btnEnviar=document.getElementById("btnEnviar");



// orejita de boton
btnEnviar.addEventListener("click", function(event) {
event.preventDefault();
const nombre_completo = Nombre.value.trim();
const numeroDeTelefono =numTelefono.value.trim();
const correo = email.value.trim();
const password = contraseña.value.trim();
const confpassword = confirmarContraseña.value.trim();

// Ocultar alerta al iniciar
alertRegistro.style.display = "none";
alertRegistro.classList.remove("alert-danger", "alert-success");
alertRegistro.innerHTML = "";

let mensajesError = [];

//condiciones de validaciones 
if (!nombre_completo || !numeroDeTelefono || !correo || !password || !confpassword) {
    mensajesError.push("Todos los campos son obligatorios.");
  }

if (!validarNombre(nombre_completo)) {
        mensajesError.push("El nombre debe tener al menos 3 caracteres y ser texto.");
    }

if(!validarNumTelefono(numeroDeTelefono)){
        mensajesError.push("El precio debe de ser un dato numérico");
}

if(!validarEmail(correo)){
        mensajesError.push("El correo electrónico ingresado no es valido");
}

if(!validarContraseña(password)){
        mensajesError.push("La contraseña debe contener------");
}

if(!validarConfirmarContraseña(confpassword)){
        mensajesError.push("La contraseña no coincide, favor de verificar");
}

if (mensajesError.length > 0) {
        // Mostrando errores concatenados en el div
    alertRegistro.classList.add("alert-danger");
    alertRegistro.innerHTML = mensajesError.join("<br>");
    return;
} 
        
// Mostrar mensaje de éxito
alertRegistro.style.display = "block";
alertRegistro.classList.add("alert-success");
alertRegistro.innerHTML = "¡Formulario enviado correctamente!";

 // Limpiar campos
Nombre.value = '';
numTelefono.value = '';
email.value = '';
contraseña.value = '';
confirmarContraseña.value = '';






});