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

if(!validarConfirmarContraseña(confpassword, password)){
        mensajesError.push("La contraseña no coincide, favor de verificar");
}

if (mensajesError.length > 0) {
    alertRegistro.style.display = "block";
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

 // local store
    let usuariosArray = [];

    const datosPrevios = localStorage.getItem("usuarios");
    if (datosPrevios) {
      usuariosArray = JSON.parse(datosPrevios);
    }

    //mostrar datos al cargar 
    mostrarUsuarios();

    //Evento al hacer clic en el botón, carga los campos 
    document.getElementById("btnEnviar").addEventListener("click", function () {
      // Obtener valores del formulario con esta forma
      // AGREGAR CONTRASEÑA
      const contraseña=document.getElementById("contraseña").value.trim();
      const nombre = document.getElementById("Nombre").value.trim();
      const telefono = document.getElementById("numTelefono").value.trim();
      const email = document.getElementById("email").value.trim();

      // Validar campos AQUI IRIA EL MENSAJE COMPLETO DE COMPLETA TODOS LOS CAMPOS Y 
      // LAS OTRAS VALIDACIONES 
      //if (!nombre || !edad || !email) {
      //  alert("Por favor completa todos los campos.");
      //  return;
      //}

      //1- Crear objeto con los datos
      const usuario = {
        contraseña:contraseña,
        nombre: nombre,
        telefono: parseInt(telefono),
        email: email
      };

      //Agregar al array en memoria
      usuariosArray.push(usuario);
  

      //Guardar en localStorage
      localStorage.setItem("usuarios", JSON.stringify(usuariosArray));

      //Mostrar en pantalla
      mostrarUsuarios();

      //Limpiar el formulario
      document.getElementById("formulario").reset();
    });

    //Función para mostrar los usuarios guardados
    function mostrarUsuarios() {
      document.getElementById("resultado").textContent = JSON.stringify(usuariosArray, null, 2);
    }