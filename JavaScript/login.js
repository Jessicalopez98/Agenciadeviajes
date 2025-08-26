let intentos = 0;

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Para que no se refesque la página antes

  const email = document.getElementById("correoLogin").value;
  const password = document.getElementById("contrasenaLogin").value;
  const alertLogin = document.getElementById("alertLogin");

  // Recuperar usuarios guardados
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar usuario que coincida
  const usuarioEncontrado = usuarios.find(
    u => u.email === email && u.contraseña === password
  );

  if (usuarioEncontrado) {
    alertLogin.className = "alert alert-success";
    alertLogin.innerHTML = `✅ Bienvenido, ${usuarioEncontrado.nombre}`;
    intentos = 0; // Reinicia intentos
    // Guardar el usuario autenticado como usuarioActivo
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
    //redireccionar a Index una vez inciada sesión
      setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
// Se estipulan 3 intentos para que el usuario introduzca su contraseña
  } else {
   intentos++;

  if (intentos >= 3) {
    intentos = 3; 
    alertLogin.className = "alert alert-danger";
    alertLogin.innerHTML = ` Has superado los 3 intentos.<br>
      ¿Has olvidado tu contraseña? <a href="./Recuperar.html">Recupérala aquí</a>`;
  } else {
    alertLogin.className = "alert alert-warning";
    alertLogin.innerHTML = `❌ Correo o contraseña incorrectos. Intento ${intentos} de 3.`;
  }

  // Guardamos el valor actualizado
  localStorage.setItem("intentosFallidos", intentos);

  }
});

