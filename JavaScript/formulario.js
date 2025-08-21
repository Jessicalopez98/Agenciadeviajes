import {
  validarNombre,
  validarPrecio,
  validarDias,
  validarNoches,
  validarLugar,
} from "./valform.js";

document.addEventListener("DOMContentLoaded", () => {
  // Botones del HTML
  const botonCrear = document.getElementById("botoncrear");
  const botonguardar = document.getElementById("btnGuardar");
  const btnCerrar = document.getElementById("btnCerrar");

  // Inputs del Modal
  const iptName = document.getElementById("iptName");
  const iptPrecio = document.getElementById("iptPrecio");
  const iptLugar = document.getElementById("iptLugar");
  const iptDias = document.getElementById("iptDias");
  const iptNoches = document.getElementById("iptNoches");
  const iptAlerta = document.getElementById("iptAlerta");
  const iptNoIncluye = document.getElementById("iptNoIncluye");
  const iptIncluye = document.getElementById("iptIncluye");
  const iptImagen = document.getElementById("iptImagen");

  // previsualizacion de la imagen
  const preview = document.getElementById("imagePreview");

  // Tarjetas de información
  const cardTotalPaquetes = document.getElementById("total-paquetes");
  const cardPaquetesActivos = document.getElementById("paquetes-activos");

  // Tabla con lista de paquetes
  const tablaListaPaquetes = document.getElementById("tablaListaPaquetes");

  // Creamos el modal y escuchamos el evento de click para abrirlo
  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  botonCrear.addEventListener("click", () => modal.show());

  // Evento para mostrar vista previa de la imagen al seleccionar un archivo
  iptImagen.addEventListener("change", vistaPreviaImagen);

  // Evento para guardar el paquete al hacer clic en el botón "Guardar"
  botonguardar.addEventListener("click", async function () {
    // se extraen valores de los inputs y se quita espacios vacios al inicio y final
    const titulo = iptName.value.trim();
    const precio = iptPrecio.value.trim();
    const lugar = iptLugar.value.trim();
    const dias = iptDias.value.trim();
    const noches = iptNoches.value.trim();
    const noincluye = iptNoIncluye.value.trim();
    const incluye = iptIncluye.value.trim();
    const archivo = iptImagen.files[0];

    // se limpia la alerta por si habia una previa
    limpiarAlerta();

    let mensajesError = [];
    // si un campo falta se agrega a la lista de errores
    if (!titulo || !precio || !lugar || !dias || !noches || !noincluye || !incluye || !archivo) {
      mensajesError.push("Todos los campos son obligatorios.");
    }
    if (!validarNombre(titulo)) mensajesError.push("El nombre debe tener al menos 3 caracteres");
    if (!validarPrecio(precio)) mensajesError.push("El precio debe de ser un dato numérico");
    if (!validarLugar(lugar)) mensajesError.push("El lugar debe tener al menos 3 caracteres");
    if (!validarDias(dias)) mensajesError.push("Los días deben ser un dato numérico");
    if (!validarNoches(noches)) mensajesError.push("Las noches deben ser un dato numérico");
    if (!archivo) mensajesError.push("Debes seleccionar una imagen antes de guardar");

    // si hay algun valor en la lista de errores se muestra en la alerta
    if (mensajesError.length > 0) {
      crearAlerta("danger", mensajesError.join("<br>"));
      return;
    }

    // se desactiva el botón de guardar para evitar múltiples envíos
    botonguardar.disabled = true;

    // se muestra un mensaje de carga
    limpiarAlerta();
    crearAlerta("info", "Subiendo imagen, por favor espera...");

    let urlCloudinary = "";
    try {
      const formData = new FormData();
      formData.append("file", archivo);
      formData.append("upload_preset", "project");
      formData.append("folder", "folder/sub-folder");
      const response = await fetch("https://api.cloudinary.com/v1_1/dnweilptt/image/upload", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      urlCloudinary = data.secure_url;
      if (!urlCloudinary) throw new Error("No pudimos obtener la URL de Cloudinary");
    } catch (error) {
      limpiarAlerta();
      crearAlerta("danger", "Error al subir la imagen a Cloudinary.");
      return;
    }

    limpiarAlerta();
    crearAlerta("success", "¡Formulario enviado correctamente!");

    // Se trae lo que ya hay en el localStorage
    const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
    // creamos un Id para el nuevo paquete
    const nuevoId = paquetes.length + 1;
    // agregamos el nuevo paquete a la lista
    paquetes.push({ id: nuevoId, titulo, precio, lugar, dias, noches, noincluye, incluye, img: urlCloudinary });
    // actualizamos el localStorage con el nuevo paquete
    localStorage.setItem("paquetes", JSON.stringify(paquetes));

    agregarPaqueteATabla({ id: nuevoId, titulo, precio, lugar, dias, noches, img: urlCloudinary });
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

    setTimeout(() => {
    limpiarAlerta();
    modal.hide();
    botonguardar.disabled = false; // Reactivar el botón de guardar
    }, 1000);
  });

  document.getElementById("btnCerrar").addEventListener("click", () => {
    limpiarAlerta();
    iptName.value = "";
    iptPrecio.value = "";
    iptLugar.value = "";
    iptDias.value = "";
    iptNoches.value = "";
    iptNoIncluye.value = "";
    iptIncluye.value = "";
    iptImagen.value = "";
    preview.innerHTML = "";
  });

  // crea elemento "tr" agrega los td con la informacion y añáde como hijo a la tabla
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
      <td>
        <button class="btn btn-danger rounded-pill px-lg-4"
            style=" background-color: #d94375 !important;" onclick="eliminarPaquete(${paquete.id})">Eliminar</button>
      </td>
    `;
    tablaListaPaquetes.appendChild(fila);
  }

  window.eliminarPaquete = function(id) {
    const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
    const nuevosPaquetes = paquetes.filter(paquete => paquete.id !== id);
    localStorage.setItem("paquetes", JSON.stringify(nuevosPaquetes));
    cargarPaquetesEnTabla();
    actualizarContadoresPaquetes();
  }

  // saca los paquetes del local storage mira el ".length" y lo asigna a las tarjetas
  function actualizarContadoresPaquetes() {
    const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
    const total = paquetes.length;
    cardTotalPaquetes.textContent = total;
    cardPaquetesActivos.textContent = total;
  }
  // extrae los datos del local storage, vacia la tabla y luego los agrega
  function cargarPaquetesEnTabla() {
    const paquetes = JSON.parse(localStorage.getItem("paquetes")) || [];
    tablaListaPaquetes.innerHTML = "";
    paquetes.forEach(paquete => agregarPaqueteATabla(paquete));
  }

  // pasa el display a none y quita las clases si las tenia, y el contenido
  function limpiarAlerta() {
    iptAlerta.style.display = "none";
    iptAlerta.classList.remove("alert-danger", "alert-success", "alert-info");
    iptAlerta.innerHTML = "";
  }

  // Crea una alerta con lo que recibe ejemplo danger, success o info mas el mensaje
  function crearAlerta(tipo, mensaje){
    iptAlerta.style.display = "block";
    iptAlerta.classList.add(`alert-${tipo}`);
    iptAlerta.innerHTML = mensaje;
  }

  // Muestra una vista previa de la imagen seleccionada en el input
  function vistaPreviaImagen() {
    // Obtener el archivo seleccionado al cual se le agrego el evento "change"
    const file = this.files[0];
    if (file) {
      // si el tamaño del archivo es mayor a 2MB
      if (file.size > 2 * 1024 * 1024) {
        iptAlerta.style.display = "block";
        iptAlerta.classList.add("alert-danger");
        iptAlerta.innerHTML = "La imagen es demasiado grande. Máximo 2MB.";
        iptImagen.value = "";
        preview.innerHTML = "";
        return;
      }
      // Si no es mayor a 2MB se lee y se muestra la vista previa
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="preview" style="max-width:100%; border-radius:8px; margin-top:10px;">`;
      };
      reader.readAsDataURL(file);
      limpiarAlerta();
    }
  }

  // Actualiza los contadores de paquetes al entrar a la web
  actualizarContadoresPaquetes();

  // Carga los paquetes en la tabla al ingresar al sitio
  cargarPaquetesEnTabla();
});
