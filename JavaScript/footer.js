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
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoINSTAGRAM_q0gla0.png" alt="Instagram">
          </a>
          <a href="https://www.facebook.com/share/1LBy2YZcR4/" target="_blank" class="social-icon">
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoFACEBOOK_hqkj2c.png" alt="Facebook">
          </a>
          <a href="https://www.tiktok.com/@nadbestdreamsvacations" target="_blank" class="social-icon">
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824176/IconoTIKTOK_d9uan8.png" alt="TikTok">
          </a>
        </div>
       </div>

        <!-- Columna 2: Información de contacto -->
        <div class="footer-contact">
        <div class="footer-column">
          <p class="contact-item">
            <img src="https://res.cloudinary.com/dte9mtmma/image/upload/v1755824177/IconoWhatsApp.svg_zm2lfa.png" alt="WhatsApp" class="contact-icon-img">
            <a href="https://wa.me/5277134742377" target="_blank" style="color: black; text-decoration: none;">
              (+52) 771 34 74 237
            </a>
          </p>
          <p class="contact-item">
            <span class="contact-icon icon-email">📧</span>
            <a href="https://mail.google.com/mail/?view=cm&to=bestdreamsvacations@gmail.com" target="_blank">
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
          <a href="https://www.megatravel.com.mx/info/politica-de-privacidad">Política de Privacidad</a>
          <a href="https://www.megatravel.com.mx/info/terminos-y-condiciones">Términos y Condiciones</a>
        </div>
        </div>


        
      </div>

      <!-- Línea inferior -->
        <div class="footer-bottom">
          © 2025 NADBestDreamsVacations - derechos reservados
        </div>
    </footer>
    

`
const footer = document.getElementsByTagName("footer").item(0);
footer.insertAdjacentHTML("afterbegin", piePagina);
