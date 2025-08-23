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
            <a class="nav-link text-white fw-medium" href="./Acercadenosotras.html">Acerca de Nosotros</a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link text-white fw-medium" href="./listaProductos.html">Paquetes</a>
          </li>
          <li class="nav-item mx-5">
            <a class="nav-link text-white fw-medium" href="./contactanos.html">Contáctanos</a>
          </li>
        </ul>

        <!-- iconos -->
        <div class="d-flex">
          <button class="btn btn-outline-light me-2" type="button">
            🔔
          </button>
          <a href="./formulario.html">
          <button class="btn btn-outline-light me-2" type="button">
            ⚙️
          </button>
          <a href="./Registro.html">
          <button class="btn btn-outline-light me-2"type="button">👤</button>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <style>
  
#navBar {
  background-color: #27538C !important; /* Azul profundo */
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
  </style>`;

const body = document.getElementsByTagName ("body"). item(0) ;
body. insertAdjacentHTML ("afterbegin", navbar);

// ------ FOOTER - PIE DE PAGINA ----------------------

// const piePagina = `
//     <footer class="footer" >
//       <div class="footer-container" id="footerOr">
//       <!-- Columna 1: Logo + Redes sociales -->
//       <div class="footer-column">
//         <!-- Logo -->
//         <div class="footer-logo">
//           <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824177/Logo-Nadia_Isotipo_esidic.png" alt="Logo NAD" style="width: 80px; height: 80px;>
//           <p> BESTDREAMS<br>VACATIONS</p>
//         </div>
//       </div>
        
//         <!-- Iconos de redes sociales -->
//         <div class="footer-column">
//         <div class="footer-social">
//           <a href="https://instagram.com/nadbestdreamsvacations" target="_blank" class="social-icon">
//             <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoINSTAGRAM_q0gla0.png" alt="Instagram" style="width: 30px; height: 30px;">
//           </a>
//           <a href="https://www.facebook.com/share/1LBy2YZcR4/" target="_blank" class="social-icon">
//             <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoFACEBOOK_hqkj2c.png" alt="Facebook" style="width: 30px; height: 30px;">
//           </a>
//           <a href="https://www.tiktok.com/@nadbestdreamsvacations" target="_blank" class="social-icon">
//             <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoTIKTOK_d9uan8.png" alt="TikTok" style="width: 30px; height: 30px;">
//           </a>
//         </div>
//        </div>

//         <!-- Columna 2: Información de contacto -->
//         <div class="footer-contact">
//         <div class="footer-column">
//           <p class="contact-item">
//             <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824177/IconoWhatsApp.svg_zm2lfa.png" alt="WhatsApp" class="contact-icon-img" style="width: 20px; height: 20px;">
//             <a href="https://wa.me/5277134742377" target="_blank" style="color: black; text-decoration: none;">
//               (+52) 771 34 74 237
//             </a>
//           </p>
//           <p class="contact-item">
//             <span class="contact-icon icon-email" style="width: 20px; height: 20px;">📧</span>
//             <a href="https://mail.google.com/mail/?view=cm&to=bestdreamsvacations@gmail.com" target="_blank">
//               bestdreamsvacations@gmail.com
//             </a>
//           </p>
//           <p class="contact-item">
//             <span class="contact-icon icon-location" onclick="mostrarMapa()" style="width: 20px; height: 20px;">📍</span>
//             <a onclick="mostrarMapa()" target="_blank">Pachuca, Hidalgo</a>            
//           </p>
        
//         <!-- Contenedor del mapa (oculto al inicio) -->
//           <div class="mapa" id="mapa" style="display:none; margin-top:10px;">
//             <iframe 
//               src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3747.6172923766026!2d-98.75963952476924!3d20.066466681352868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAzJzU5LjMiTiA5OMKwNDUnMjUuNCJX!5e0!3m2!1ses!2smx!4v1755744663016!5m2!1ses!2smx" 
//               width="300" 
//               height="100" 
//               tyle="border:0;" 
//               allowfullscreen="" 
//               loading="lazy" 
//               referrerpolicy="no-referrer-when-downgrade">
//             </iframe>
//           </div>
//           </div> 
//         </div>

              
//         <!-- Columna 3: Términos y Políticas -->
//         <div class="footer-links">
//         <div class="footer-column">
//           <a href="https://www.megatravel.com.mx/info/politica-de-privacidad">Política de Privacidad</a>
//           <a href="https://www.megatravel.com.mx/info/terminos-y-condiciones">Términos y Condiciones</a>
//         </div>
//         </div>


        
//       </div>

//       <!-- Línea inferior -->
//         <div class="footer-bottom">
//           © 2025 NADBestDreamsVacations - derechos reservados
//         </div>
//     </footer>

//   <style>

//    #footerOr {
//   background-color: #d9d9d9;
//   color: black;
//   pading: 2rem 0;
//   margin: 2rem 0 0 0;
//   align-items: center;
//   display: flex;
//   justify-content: space-between;
//   }
  
// // .footer-container {
// //   max-width: 1000px;
// //   margin: 0 auto;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   flex-wrap: wrap;
// //   padding: 0 2rem;
// //   color: black;
// // }

// // .footer-logo {
// //   flex: 0 0 auto;
// //   margin-right: 2rem;
// // }




//   </style>
// `
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
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoINSTAGRAM_q0gla0.png" alt="Instagram" width="30px" height="30px">
          </a>
          <a href="https://www.facebook.com/share/1LBy2YZcR4/" target="_blank" class="social-icon">
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoFACEBOOK_hqkj2c.png" alt="Facebook" width="30px" height="30px">
          </a>
          <a href="https://www.tiktok.com/@nadbestdreamsvacations" target="_blank" class="social-icon">
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoTIKTOK_d9uan8.png" alt="TikTok" width="30px" height="30px">
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
  background-color: #d9d9d9;
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



