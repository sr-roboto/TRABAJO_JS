let dia = parseInt(prompt("Ingrese un número del 1 al 7, que corresponda a un día de la semana"))


switch (dia) {
    case 1:
        dia = "LUNES"
        document.write(`Usted ha elegido el dia ${dia}`)
        break;
    case 2:
        dia = "MARTES"
        document.write(`Usted ha elegido el dia ${dia}`)
        break;
    case 3:
        dia = "MIÉRCOLES"
        document.write(`Usted ha elegido el dia ${dia}`)
        break;
    case 4:
        dia = "JUEVES"
        document.write(`Usted ha elegido el dia ${dia}`)
        break;
    case 5:
        dia = "VIERNES"
        document.write(`Usted ha elegido el dia ${dia}`)
        break;
    case 6:
        dia = "SÁBADO"
        document.write(`Usted ha elegido el dia ${dia}`)
        break;
    case 7:
        dia = "DOMINGO"
        document.write(`Usted ha elegido el dia ${dia}`)
        break;
    default:
        document.write(`Ingrese un numero valido`)
        break;
}

