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
          <button class="btn btn-outline-light me-2" type="button">
            ⚙️
          </button>
          <a href="./Registro.html">
          <button class="btn btn-outline-light me-2"type="button">👤</button>
          </a>
        </div>
      </div>
    </div>
  </nav>`;

const body = document.getElementsByTagName ("body"). item(0) ;
body. insertAdjacentHTML ("afterbegin", navbar);