const regex = /^\S+$/;
let menu = 0;
let list = [];


function crearLista(x) {
    if (regex.test(x)) {
        list.push(x);
    } else {
        alert("No se puede ingresar espacios en blanco");
    }
}

function leerLista(x) {
    if (list.length > 0) {
        alert(list.join("\n"))
    } else {
        alert("La lista esta vacía");
    }

}

function modificarLista(x, y) {
    let index = list.indexOf(x);
    if (regex.test(x)) {
        if (index > -1) {
            list[index] = y;
        } else {
            alert("No hay registro de esta tarea: " + x);
        }
    } else {
        alert("No se puede modificar una tarea que no existe");
    }
}

function eliminarLista(x) {
    let index = list.indexOf(x);
    if (regex.test(x)) {
        if (index > -1) {
            list.splice(index, 1);
            alert("Tarea: " + x + "\neliminada con exito")
        } else {
            alert("No hay registro de esta tarea: " + x)
        }
    } else {
        alert("No se puede eliminar una tarea que no existe");
    }
}

while (menu <= 4) {
    menu = parseInt(prompt("LISTA DE TAREAS" + "\n1: Crear una tarea" + "\n2: Leer lista de tareas" + "\n3: Modificar una tarea" + "\n4: Eliminar una tarea" + "\n5: Salir"));
    switch (menu) {
        case 1:
            crearLista(prompt("Ingresar una nueva tarea"));
            break;

        case 2:
            leerLista();
            break;

        case 3:
            let x = prompt("Ingresar una tarea para modificar");
            let y = prompt("Ingresar la nueva tarea");
            modificarLista(x, y);
            break;

        case 4:
            eliminarLista(prompt("Ingresar una tarea a eliminar"));
            break;

        case 5:
            menu = 5
            alert("¡Gracias por usar esta Lista de Tareas!")
            break;

        default:
            alert("Opción invalida");
            break;

    }
}