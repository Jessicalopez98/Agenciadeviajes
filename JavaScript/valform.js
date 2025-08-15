export function validarNombre(nombre) {
    if (typeof nombre !== 'string') return false;
    if (nombre.trim().length < 3) return false;
    return true;
}

export function validarPrecio(precio) {
    if (isNaN(precio) || precio === '') { // Changed 'input' to 'precio'
        // alert('Por favor ingrese sólo números.');
        return false;
    }
    return true;
}

export function validarLugar(lugar) {
    return typeof lugar === 'string' && lugar.trim().length > 0 && lugar.trim().length <= 150;
}

export function validarDias(dias) {
    if (isNaN(dias) || dias.trim() === "") {
        // alert("Por favor ingrese sólo número.");
        return false;
    }
    return true;

}

export function validarNoches(noches) {
    if (isNaN(noches) || noches.trim() === "") {
        // alert("Por favor ingrese sólo número.");
        return false;
    }
    return true;
}
