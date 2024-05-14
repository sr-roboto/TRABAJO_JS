let numero = parseInt(prompt("Ingrese un número"))
let resto = (numero % 2);

if (resto !== 0 && resto > 0) {
    document.write(`el número ${numero} es impar`)
} else if (resto == 0) {
    document.write(`el número ${numero} es par`)
} else {
    document.write(`Ingrese un valor valido`)
}