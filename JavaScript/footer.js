const piePagina = `
    <footer class="footer">
      <div class="footer-container">

        <!-- Logo -->
        <div class="footer-logo">
          <img src="./assets/Logo-Nadia_Isotipo.png" alt="Logo NAD">
          <p><br> BEST DREAMS<br>VACATIONS</p>
        </div>

        <!-- Iconos de redes sociales -->
        <div class="footer-social">
          <a href="https://instagram.com/nadbestdreamsvacations" target="_blank" class="social-icon">
            <img src="./assets/IconoINSTAGRAM.png" alt="Instagram">
          </a>
          <a href="https://www.facebook.com/share/1LBy2YZcR4/" target="_blank" class="social-icon">
            <img src="./assets/IconoFACEBOOK.png" alt="Facebook">
          </a>
          <a href="https://www.tiktok.com/@nadbestdreamsvacations" target="_blank" class="social-icon">
            <img src="./assets/IconoTIKTOK.png" alt="TikTok">
          </a>
        </div>

        <!-- Información de contacto -->
        <div class="footer-contact">
          <p class="contact-item">
            <img src="./assets/IconoWhatsApp.svg.png" alt="WhatsApp" class="contact-icon-img">
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
            <span class="contact-icon icon-location">📍</span>
            <span>Pachuca, Hidalgo</span>
          </p>
        </div>

        <!-- Políticas -->
        <div class="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
`
const footer = document.getElementsByTagName("footer").item(0);
footer.insertAdjacentHTML("afterbegin", piePagina);