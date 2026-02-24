function determinarDia() {
    
    let dia = prompt("Ingrese el número del día de la semana (1 = Lunes, 2 = Martes, ..., 7 = Domingo):");
    let mensaje = "";

    switch(dia) {
        case "1":
            mensaje = "Hoy es Lunes";
            break;
        case "2":
            mensaje = "Hoy es Martes";
            break;
        case "3":
            mensaje = "Hoy es Miércoles";
            break;
        case "4":
            mensaje = "Hoy es Jueves";
            break;
        case "5":
            mensaje = "Hoy es Viernes";
            break;
        case "6":
            mensaje = "Hoy es Sábado";
            break;
        case "7":
            mensaje = "Hoy es Domingo";
            break;
        default:
            mensaje = "Número inválido. Debe ingresar del 1 al 7.";
    }

    document.getElementById("resultado").innerText = mensaje;
}