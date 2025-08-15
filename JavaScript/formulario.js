import {
  validarNombre,
  validarPrecio,
  validarDias,
  validarNoches,
  validarLugar,
} from "./valform.js";


const modal = new bootstrap.Modal(document.getElementById("formModal"));
document.getElementById("botoncrear").addEventListener("click", () => {
  modal.show();
});

const iptName = document.getElementById("iptName");
const iptPrecio = document.getElementById("iptPrecio");
const iptLugar = document.getElementById("iptLugar");
const iptDias = document.getElementById("iptDias");
const iptNoches = document.getElementById("iptNoches");
const iptAlerta = document.getElementById("iptAlerta");
const iptNoIncluye = document.getElementById("iptNoIncluye")
const iptIncluye = document.getElementById("iptIncluye")

//boton de crear
const botonguardar = document.getElementById("btnGuardar");
const tablaListaPaquetes = document.getElementById("tablaListaPaquetes");


// orejita de boton
botonguardar.addEventListener("click", function (event) {
  event.preventDefault();
  const name = iptName.value.trim();
  const precio = iptPrecio.value.trim();
  const lugar = iptLugar.value.trim();
  const dias = iptDias.value.trim();
  const noches = iptNoches.value.trim();
  const noIncluye = iptNoIncluye.value.trim();
  const incluye = iptIncluye.value.trim();

  // Ocultar alerta al iniciar
  iptAlerta.style.display = "none";
  iptAlerta.classList.remove("alert-danger", "alert-success");
  iptAlerta.innerHTML = "";

  let mensajesError = [];

  if (!name || !precio || !lugar || !dias || !noches || !noIncluye || !incluye) {
    mensajesError.push("Todos los campos son obligatorios.");
  }
  if (!validarNombre(name)) {
    mensajesError.push(
      "El nombre debe tener al menos 3 caracteres y ser texto."
    );
  }
  if (!validarPrecio(precio)) {
    mensajesError.push("El precio debe de ser un dato numérico");
  }
  if (!validarLugar(lugar)) {
    mensajesError.push("El lugar debe tener al menos 3 caracteres y ser texto");
  }
  if (!validarDias(dias)) {
    mensajesError.push("Los días deben ser un dato numérico");
  }
  if (!validarNoches(noches)) {
    mensajesError.push("Las noches deben ser un dato numérico");
  }

  if (mensajesError.length > 0) {
    iptAlerta.style.display = "block";
    iptAlerta.classList.add("alert-danger");
    iptAlerta.innerHTML = mensajesError.join("<br>");
    return;
  }

  // Mostrar mensaje de éxito
  iptAlerta.style.display = "block";
  iptAlerta.classList.add("alert-success");
  iptAlerta.innerHTML = "¡Formulario enviado correctamente!";

  // Guardar paquete
  const nuevoPaquete = { name, precio, lugar, dias, noches, noIncluye, incluye };
  const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
  paquetes.push(nuevoPaquete);
  localStorage.setItem("paquetes", JSON.stringify(paquetes));
  agregarPaqueteATabla(nuevoPaquete);

  // Limpiar campos

  iptName.value = "";
  iptPrecio.value = "";
  iptLugar.value = "";
  iptDias.value = "";
  iptNoches.value = "";
  iptNoIncluye.value = "";
  iptIncluye.value = "";

  // Ocultar alerta y cerrar modal después de un breve tiempo
  setTimeout(() => {
    iptAlerta.style.display = "none";
    modal.hide();
  }, 1200);
});

function agregarPaqueteATabla(paquete) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
          <td>${paquete.name}</td>
          <td>${paquete.precio}</td>
          <td>${paquete.lugar}</td>
          <td>${paquete.dias}</td>
          <td>${paquete.noches}</td>
        `;
  tablaListaPaquetes.appendChild(fila);
}
