export function validarNombre(nombre){
if (typeof nombre !== 'string') return false;
    if (nombre.trim().length < 3) return false;
    return true;
};

export function validarPrecio(precio){
    const regex = /^\d{5}$/;
    if (!regex.test(precio)) return false;

    // Validar que no sean 10 dígitos iguales en el teléfono
    const primerDigito = precio[0];
    const todosIguales = precio.split('').every(d => d === primerDigito);
    if (todosIguales) return false;

    return true;
};

export function validaLugar(lugar){
     return typeof lugar === 'string' && nombre.trim().length > 0 && lugar.trim().length <= 150;
}

export function validarDias(dias){
    const regex = /^\d{2}$/;
    if (!regex.test(dias)) return false;

    // Validar que no sean 10 dígitos iguales en el teléfono
    const primerDigito = dias[0];
    const todosIguales = dias.split('').every(d => d === primerDigito);
    if (todosIguales) return false;

    return true;

}

export function validarNoches(noches){
    const regex = /^\d{2}$/;
    if (!regex.test(noches)) return false;

    // Validar que no sean 10 dígitos iguales en el teléfono
    const primerDigito = noches[0];
    const todosIguales = noches.split('').every(d => d === primerDigito);
    if (todosIguales) return false;

    return true;
}
