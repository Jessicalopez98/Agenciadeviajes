
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
const cardTotalPaquetes = document.getElementById("total-paquetes");
const cardPaquetesActivos = document.getElementById("paquetes-activos");

//boton de crear
const botonguardar = document.getElementById("btnGuardar");
const tablaListaPaquetes = document.getElementById("tablaListaPaquetes");

// orejita de boton
botonguardar.addEventListener("click", function (event) {
  event.preventDefault();
  const titulo = iptName.value.trim();
  const precio = iptPrecio.value.trim();
  const lugar = iptLugar.value.trim();
  const dias = iptDias.value.trim();
  const noches = iptNoches.value.trim();
  const noincluye = iptNoIncluye.value.trim();
  const incluye = iptIncluye.value.trim();
  const img = "https://one.cdnmega.com/images/viajes/covers/16100-estrellas-de-europa-1024x575_67fff59a24661.webp";

  // Ocultar alerta al iniciar
  iptAlerta.style.display = "none";
  iptAlerta.classList.remove("alert-danger", "alert-success");
  iptAlerta.innerHTML = "";

  let mensajesError = [];

  if (!titulo || !precio || !lugar || !dias || !noches || !noincluye || !incluye) {
    mensajesError.push("Todos los campos son obligatorios.");
  }
  if (!validarNombre(titulo)) {
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

  // Guardar paquete con id autoincremental
  const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
  let nuevoId = paquetes.length + 1;
  const nuevoPaquete = { id: nuevoId, titulo, precio, lugar, dias, noches, noincluye, incluye,img };
  paquetes.push(nuevoPaquete);
  localStorage.setItem("paquetes", JSON.stringify(paquetes));
  agregarPaqueteATabla(nuevoPaquete);
  actualizarContadoresPaquetes();
  cargarPaquetesEnTabla();

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
        <td>${paquete.id}</td>
          <td>${paquete.titulo}</td>
          <td>${paquete.precio}</td>
          <td>${paquete.lugar}</td>
          <td>${paquete.dias}</td>
          <td>${paquete.noches}</td>
        `;
  tablaListaPaquetes.appendChild(fila);
}

function actualizarContadoresPaquetes() {
  const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
  const total = paquetes.length;
  cardTotalPaquetes.textContent = total;
  cardPaquetesActivos.textContent = total;
}

actualizarContadoresPaquetes();

// Cargar paquetes en la tabla al iniciar
function cargarPaquetesEnTabla() {
  const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
  // Limpiar la tabla antes de agregar
  tablaListaPaquetes.innerHTML = "";
  paquetes.forEach(paquete => {
    agregarPaqueteATabla(paquete);
  });
}

cargarPaquetesEnTabla();
