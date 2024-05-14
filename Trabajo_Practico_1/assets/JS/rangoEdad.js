let edad = parseInt(prompt("Ingrese su edad"))

if (edad > 0 && edad < 120) {
    if (edad >= 60) {
        document.write("Usted es adulto mayor")
    } else if (edad >= 20 && edad <= 59) {
        document.write("Usted es adulto")
    } else if (edad >= 13 && edad <= 19) {
        document.write("Usted es adolescente")
    } else {
        document.write("Usted es un niño")
    }
} else {
    document.write("Ingrese una edad valida")
}