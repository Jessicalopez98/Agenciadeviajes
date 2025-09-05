const navbar = `<nav class="navbar navbar-expand-lg bg-primary px-4" id="navBar" data-bs-theme="dark">
    <div class="container">
      <!-- Logo-->
       <a href="./index.html">
       <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824177/Logo_Nadia__solo_Isotipo_p55llq.png" alt="NAD Logo" width="70" height="70">
      </a>

      <!-- -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navegacion -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto gap-4">
          <li class="nav-item mx-5" id="acercaNosotras">
            <a class="nav-link text-white fw-medium" href="./Acercadenosotras.html">Acerca de Nosotras</a>
          </li>
          <li class="nav-item mx-5" id="listaProductos">
            <a class="nav-link text-white fw-medium" href="./listaProductos.html">Paquetes</a>
          </li>
          <li class="nav-item mx-5" id="contactanos">
            <a class="nav-link text-white fw-medium" href="./contactanos.html">Contáctanos</a>
          </li>
        </ul>

        <!-- iconos -->
        <div class="d-flex">
        <a href="./Registro.html ">
          <button class="btn btn-outline-light me-2" type="button">
         <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
          </button>
          </a>
          <a href="./formulario.html">
          <button class="btn btn-outline-light me-2" type="button">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>
          </button>
          <a href="./login.html" id="btnRegistro">
          <button class="btn btn-outline-light me-2"type="button">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
          </button>
          </a>
          <button class="btn btn-outline-light me-2" type="button" id="cerrarSesion">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3m0 6l3 -3" /></svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <style>
/* Estilo para el link activo en la navbar */
#navBar .nav-link.active {
  border: none !important;              
  background-color:rgba(0, 0, 0, 0.15) !important; 
  border-radius: 999px !important;      
  padding: 6px 16px !important;          
}
#navBar {
 background: linear-gradient(90deg, #27538C, #4CAF50) !important;
}

/* Texto de los links de la navbar */
#navBar .nav-link {
  color: #FFFFFF !important;   /* blanco sólido */
}

/* Texto del brand (logo) */
#navBar .navbar-brand {
  color: #FFFFFF !important;   /* blanco sólido */
}

/* Botones de la navbar */
#navBar .btn-outline-light {
  color: #FFFFFF !important;
  border-color: #FFFFFF !important;
}

/* Hover de los links */
#navBar .nav-link:hover {
  color: #A9D943 !important;  /* verde suave como acento */
}

/* Hover de los botones*/
  #navBar .btn-outline-light:hover {
  background-color: #FFFFFF !important;
  color: #27538C !important;   /* azul profundo para contraste */
}
  .nav-item {
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  gap: 4rem;
}
  </style>`;

const body = document.getElementsByTagName("body").item(0);
body.insertAdjacentHTML("afterbegin", navbar);
// --- Marcar link activo según la página ---
(function marcarActivo() {
  const here = new URL(location.href);
  const current = (here.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll("#navBar .nav-link").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.includes(current)) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    } else {
      a.classList.remove("active");
      a.removeAttribute("aria-current");
    }
  });
})();



// -- footer ---
const piePagina = `
    <footer class="footer">
      <div class="footer-container">
      <!-- Columna 1: Logo + Redes sociales -->
      <div class="footer-column">
        <!-- Logo -->
        <div class="footer-logo">
          <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824177/Logo-Nadia_Isotipo_esidic.png" alt="Logo NAD">
          <p> BESTDREAMS<br>VACATIONS</p>
        </div>
      </div>

        <!-- Iconos de redes sociales -->
        <div class="footer-column">
        <div class="footer-social">
          <a href="https://instagram.com/nadbestdreamsvacations" target="_blank" class="social-icon">
           <svg  style="max-width: 30px; max-height: 30px;" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#IconifyId198e49d4fcb744f7f2)" rx="60"/><rect width="256" height="256" fill="url(#IconifyId198e49d4fcb744f7f3)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="IconifyId198e49d4fcb744f7f2" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="IconifyId198e49d4fcb744f7f3" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></g></svg>
          </a>
          <a href="https://www.facebook.com/share/1LBy2YZcR4/" target="_blank" class="social-icon">
<svg  style="max-width: 30px; max-height: 30px;" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@nadbestdreamsvacations" target="_blank" class="social-icon">
<svg  style="max-width: 30px; max-height: 30px;" xmlns="http://www.w3.org/2000/svg" width="113" height="128" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"/><path fill="#00F2EA" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"/></svg>
          </a>
        </div>
       </div>

        <!-- Columna 2: Información de contacto -->
        <div class="footer-contact">
        <div class="footer-column">
          <p class="contact-item">
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824177/IconoWhatsApp.svg_zm2lfa.png" alt="WhatsApp" class="contact-icon-img" width="30px" height="30px">
            <a href="https://wa.me/5277134742377" target="_blank" style="color: black; text-decoration: none;">
              (+52) 771 34 74 237
            </a>
          </p>
          <p class="contact-item">
            <span class="contact-icon icon-email">📧</span>
            <a href="https://mail.google.com/mail/?view=cm&to=bestdreamsvacations@gmail.com" target="_blank" style="color:black;">
              bestdreamsvacations@gmail.com
            </a>
          </p>
          <p class="contact-item">
            <span class="contact-icon icon-location" onclick="mostrarMapa()">📍</span>
            <a onclick="mostrarMapa()" target="_blank">Pachuca, Hidalgo</a>
          </p>

        <!-- Contenedor del mapa (oculto al inicio) -->
          <div class="mapa" id="mapa" style="display:none; margin-top:10px;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3747.6172923766026!2d-98.75963952476924!3d20.066466681352868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAzJzU5LjMiTiA5OMKwNDUnMjUuNCJX!5e0!3m2!1ses!2smx!4v1755744663016!5m2!1ses!2smx"
              width="300"
              height="100"
              tyle="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          </div>
        </div>


        <!-- Columna 3: Términos y Políticas -->
        <div class="footer-links">
        <div class="footer-column">
          <a href="https://www.megatravel.com.mx/info/politica-de-privacidad" style="text-decoration:none; color:black; font-weight:bold; margin-bottom: 0.5rem; display:block; text-align: center;">Política de Privacidad</a>
          <a href="https://www.megatravel.com.mx/info/terminos-y-condiciones" style="text-decoration:none; color:black; font-weight:bold; margin-bottom: 0.5rem" display:block; text-align: center;">Términos y Condiciones</a>
        </div>
        </div>



      </div>

      <!-- Línea inferior -->
        <div class="footer-bottom" style="text-align:center; margin-top: 2rem;">
          © 2025 NADBestDreamsVacations - derechos reservados
        </div>
    </footer>

    <style>
  .contact-item {
  margin: 0.3rem 0;
  display: flex;
  align-items: center;
  color: black;
}
  .footer {
  background-image:url(../assets/GreenFooter3.png);
  background-size: cover; 
  color: black;
  padding: 2rem 0;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  color: black;
}

.footer-logo {
  flex: 0 0 auto;
  margin-right: 2rem;
}
  .footer-logo {
  flex: 0 0 auto;
  margin-right: 2rem;
}

.footer-logo img {
  width: 80px;
  height: 80px;
}

.footer-logo p {
  font-weight: bold;
  margin: 0.5rem 0 0 0;
  font-size: 0.9rem;
  text-align: center;
}

.footer-social {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 2rem;
  color: black;
}




/*Forma Responsiva*/
@media (max-width: 768px) {
  .header-container,
  .footer-container,
  .main-container,
  .card-footer {
    flex-direction: column;
    text-align: center;
  }

  .navbar {
  text-align: center;
}
  .list-group-item,
  .list-unstyled {
    flex-direction: column;
    text-align: left;
  }

  .footer-logo,
  .footer-social,
  .footer-contact,
  .footer-links {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .footer-social {
    flex-direction: row;
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: row;
    text-align: center; /* Espacio entre elementos */
  }

  .footer-links {
    flex-direction: row;
    text-align: center;
  }

  .mapa {
    flex-direction: row;
    text-align: center;
  }
  .footer-contact {
    flex-direction: row;
    text-align: center;
  }

  div.container {
    flex-direction: row;
    grid-template-columns: auto;
    text-align: center;
  }
  div.table-responsive{
    flex-direction: row;
    text-align: center;
  }

}

@media (max-width: 600px) {
  th, td {
    padding: 8px;       /* reduce padding en móviles */
  }
}
    </style>
`

// document.addEventListener("DOMContentLoaded", () => {
//   const mensajeUsuario = document.getElementById("mensajeUsuario");
//   let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

//   if (usuarioActivo) {
//     mensajeUsuario.innerHTML = `👤 Sesión iniciada como: <strong>${usuarioActivo.nombre}</strong>`;
//   } else {
//     mensajeUsuario.innerHTML = `⚠ No hay sesión activa.`;
//   }
// });

// OCULTA EL BOTON DE REGISTRO SI HAY SESION INICIADA
document.addEventListener("DOMContentLoaded", () => {
  const btnRegistro = document.getElementById("btnRegistro");
  let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

  if (usuarioActivo) {
    btnRegistro.style.display = "none"; // Oculta el botón si hay sesión activa
  } else {
    btnRegistro.style.display = "block"; // Muestra el botón si no hay sesión activa
  }
});

// FUNCIONALIDAD DEL BOTON CERRAR SESION CUANDO HAY SESION INICIADA
document.addEventListener("DOMContentLoaded", () => {
  const cerrarSesion = document.getElementById("cerrarSesion");
  let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  if (usuarioActivo) {
    cerrarSesion.style.display = "block"; // Muestra el botón si hay sesión activa
    cerrarSesion.insertAdjacentHTML("afterbegin", `Cerrar sesión, ${usuarioActivo.nombre.split(" ")[0]}`); // Muestra el nombre del usuario
  } else {
    cerrarSesion.style.display = "none"; // Oculta el botón si no hay sesión activa
  }
  cerrarSesion.addEventListener("click", () => {
    const body = document.getElementsByTagName("body").item(0);
    body.insertAdjacentHTML("afterbegin", `<div class="alert alert-success alert-dismissible fade show" role="alert" style="text-align: center;">
    <strong>✔ Has cerrado sesión correctamente.</strong> Redirigiendo a la página de inicio...
    </div>`);
    cerrarSesion.style.display = "none"; // Oculta el botón al cerrar sesión
    localStorage.removeItem("usuarioActivo"); // Elimina la sesión activa
    setTimeout(() => {
      window.location.href = "index.html"; // Redirige a la página de inicio después de 2 segundos
    }, 1200);
  });
});


// -- funcion para el mapa --

const footer = document.getElementsByTagName("footer").item(0);
footer.insertAdjacentHTML("afterbegin", piePagina);

function mostrarMapa() {
  let mapa = document.getElementById("mapa");
  // Alterna entre mostrar y ocultar
  if (mapa.style.display === "none") {
    mapa.style.display = "block";
  } else {
    mapa.style.display = "none";
  }
}



