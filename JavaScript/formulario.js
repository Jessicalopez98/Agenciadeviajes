import {
  validarNombre,
  validarPrecio,
  validarDias,
  validarNoches,
  validarLugar,
} from "./valform.js";

document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  const botonCrear = document.getElementById("botoncrear");


  botonCrear.addEventListener("click", () => modal.show());

  const iptName = document.getElementById("iptName");
  const iptPrecio = document.getElementById("iptPrecio");
  const iptLugar = document.getElementById("iptLugar");
  const iptDias = document.getElementById("iptDias");
  const iptNoches = document.getElementById("iptNoches");
  const iptAlerta = document.getElementById("iptAlerta");
  const iptNoIncluye = document.getElementById("iptNoIncluye");
  const iptIncluye = document.getElementById("iptIncluye");
  const iptImagen = document.getElementById("iptImagen");
  const preview = document.getElementById("imagePreview");
  let imagenBase64 = ""; // Guardar la imagen convertida

  const cardTotalPaquetes = document.getElementById("total-paquetes");
  const cardPaquetesActivos = document.getElementById("paquetes-activos");
  const botonguardar = document.getElementById("btnGuardar");
  const tablaListaPaquetes = document.getElementById("tablaListaPaquetes");

  // --- Vista previa de la imagen ---
  iptImagen.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("La imagen es demasiado grande. Máximo 2MB.");
        iptImagen.value = "";
        preview.innerHTML = "";
        imagenBase64 = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = function (e) {
        imagenBase64 = e.target.result; // guardar en base64
        preview.innerHTML = `<img src="${imagenBase64}" alt="preview" style="max-width:100%; border-radius:8px; margin-top:10px;">`;
      };
      reader.readAsDataURL(file);
    }
  });

  // --- Botón guardar ---
  botonguardar.addEventListener("click", async function (event) {
    event.preventDefault();
    const titulo = iptName.value.trim();
    const precio = iptPrecio.value.trim();
    const lugar = iptLugar.value.trim();
    const dias = iptDias.value.trim();
    const noches = iptNoches.value.trim();
    const noincluye = iptNoIncluye.value.trim();
    const incluye = iptIncluye.value.trim();
    const archivo = iptImagen.files[0]; // archivo de imagen

    iptAlerta.style.display = "none";
    iptAlerta.classList.remove("alert-danger", "alert-success");
    iptAlerta.innerHTML = "";

    let mensajesError = [];
    if (!titulo || !precio || !lugar || !dias || !noches || !noincluye || !incluye) {
      mensajesError.push("Todos los campos son obligatorios.");
    }
    if (!validarNombre(titulo)) mensajesError.push("El nombre debe tener al menos 3 caracteres y ser texto.");
    if (!validarPrecio(precio)) mensajesError.push("El precio debe de ser un dato numérico");
    if (!validarLugar(lugar)) mensajesError.push("El lugar debe tener al menos 3 caracteres y ser texto");
    if (!validarDias(dias)) mensajesError.push("Los días deben ser un dato numérico");
    if (!validarNoches(noches)) mensajesError.push("Las noches deben ser un dato numérico");

    if (mensajesError.length > 0) {
      iptAlerta.style.display = "block";
      iptAlerta.classList.add("alert-danger");
      iptAlerta.innerHTML = mensajesError.join("<br>");
      return;
    }

    iptAlerta.style.display = "block";
    iptAlerta.classList.add("alert-success");
    iptAlerta.innerHTML = "¡Formulario enviado correctamente!";

    // Convertir imagen a base64
    let base64 = "";
    if (archivo) {
      base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }

    // Guardar paquete con id 
    const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
    const nuevoId = paquetes.length + 1;
    const nuevoPaquete = { id: nuevoId, titulo, precio, lugar, dias, noches, noincluye, incluye, img: base64 };
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
    iptImagen.value = "";
    preview.innerHTML = "";
    imagenBase64 = "";

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
      <td><img src="${paquete.img}" style="width:60px; border-radius:6px;"></td>
    `;
    tablaListaPaquetes.appendChild(fila);
  }

  function actualizarContadoresPaquetes() {
    const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
    const total = paquetes.length;
    cardTotalPaquetes.textContent = total;
    cardPaquetesActivos.textContent = total;
  }

  function cargarPaquetesEnTabla() {
    const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
    tablaListaPaquetes.innerHTML = "";
    paquetes.forEach(paquete => agregarPaqueteATabla(paquete));
  }

  actualizarContadoresPaquetes();
  cargarPaquetesEnTabla();
});
