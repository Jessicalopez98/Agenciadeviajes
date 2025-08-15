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
const botonguardar=document.getElementById("btnGuardar");
const tablaListaPaquetes = document.getElementById("tablaListaPaquetes");
const modal = new bootstrap.Modal(document.getElementById('formModal'));

// orejita de boton
botonguardar.addEventListener("click", function(event) {
    event.preventDefault();
        const name = iptName.value.trim();
        const precio = iptPrecio.value.trim();
        const lugar = iptLugar.value.trim();
        const dias = iptDias.value.trim();
        const noches = iptNoches.value.trim();

        if (!name || !precio || !lugar || !dias || !noches) {
          alert('Todos los campos son obligatorios.');
          return;
        }
  

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
        iptAlerta.style.display = "block"; // Mostrar el div
        iptAlerta.innerHTML = mensajesError.join("<br>");
    } else {
        //Mostrar mensaje éxito
        iptAlerta.style.display = "block";
        iptAlerta.classList.remove("alert-danger");
        iptAlerta.classList.add("alert-success");
        iptAlerta.innerHTML = "¡Formulario enviado correctamente!";

        // Limpiar campos
        //iptName.value = '';
        //iptPrecio.value = '';
        //iptDias.value = '';
        //iptNoches.value = '';
        //checkNewsletter.checked = false;
       //setTimeout(() => location.reload(), 3000);
    }
});

	// JSON NUEVO PAQUETE
        const nuevoPaquete = { name, proveedor, precio, inicio, fin, descuento };
        const paquetes = JSON.parse(localStorage.getItem('paquetes')) || [];
        paquetes.push(nuevoPaquete);
        localStorage.setItem('paquetes', JSON.stringify(paquetes));

        agregarPaqueteATabla(nuevoPaquete);

        // Limpiar formulario
        iptName.value = '';
        iptProvedor.value = '';
        iptPrecio.value = '';
        iptInicio.value = '';  // Checar si los date se limpian
        iptFin.value = '';    // Checar si los date se limpian
        iptDescuento.value = '';

        // Cerrar modal
        modal.hide();

//Función para la tabla de los paquetes.

        function agregarPaqueteATabla(paquete) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${paquete.name}</td>
          <td>${paquete.precio}</td>
          <td>${paquete.lugar}</td>
          <td>${paquete.dias}</td>
          <td>${paquete.noches}</td>
        `;
        tablaListaPaquetes.appendChild(fila);
      }

      function cargarPaquetes() {
        const paquetes = JSON.parse(localStorage.getItem('paquetes')) || [];
        paquetes.forEach(agregarUsuarioATabla);
      }
      cargarPaquetes();


      //});