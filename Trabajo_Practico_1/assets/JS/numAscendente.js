let nro1 = parseInt(prompt("Ingrese el primer número"));
let nro2 = parseInt(prompt("Ingrese el segundo número"));
let nro3 = parseInt(prompt("Ingrese el tercer número"));

if (nro1 > nro2 && nro2 > nro3) {
    document.write(`${nro3}, ${nro2}, ${nro1}`);
} else if (nro3 > nro2 && nro2 > nro1) {
    document.write(`${nro1}, ${nro2}, ${nro3}`);
} else if (nro2 > nro1 && nro1 > nro3) {
    document.write(`${nro3}, ${nro1}, ${nro2}`);
} else if (nro3 > nro1 && nro1 > nro2) {
    document.write(`${nro2}, ${nro1}, ${nro3}`);
} else if (nro1 > nro3 && nro3 > nro2) {
    document.write(`${nro2}, ${nro3}, ${nro1}`);
} else if (nro2 > nro3 && nro3 > nro1) {
    document.write(`${nro1}, ${nro3}, ${nro2}`);
} else {
    document.write(`Ingrese un valor valido`);
}
