export function validarNombre(Nombre) {
    if (typeof Nombre !== 'string') return false;
    if (Nombre.trim().length < 3) return false;
    return true;
}

export function validarNumTelefono(numTelefono) {
    const regex = /^\d{10}$/;
    if (!regex.test(numTelefono)) return false;

    // Validar que no sean 10 dígitos iguales en el teléfono
    const primerDigito = numTelefono[0];
    const todosIguales = numTelefono.split('').every(d => d === primerDigito);
    if (todosIguales) return false;

    return true;
}

export function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validarContraseña(contraseña) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    return regex.test(contraseña);
}

export function validarConfirmarContraseña(confirmarContraseña, contraseña) {
    if (contraseña !== confirmarContraseña) {
        // alert("La contraseña no coincide");
        return false;
    }
    return true;
}

// regexp_password

