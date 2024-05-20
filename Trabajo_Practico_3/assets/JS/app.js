
const regex = /^\S+$/;
let menu = 0;
let list = [];


function CREATE(x) {
    if (regex.test(x)) {
        list.push(x);
    } else {
        alert("no se puede ingresar espacios en blanco");
    }
}

function READ(x) {
    if (list.length > 0) {
        alert (list.join("\n"))
    } else {
        alert("La lista esta vacia");
    }
    
}

function UPDATE(x) {
    push.list(x);
}

function DELETE(x) {
    if (regex.test(x)) {
        list.shift(x);
        alert("Tarea: " + x + "\neliminada con exito")
    } else {
        alert("no se puede eliminar una tarea que no existe");
    }
}

while (menu <= 4) {
    menu = parseInt(prompt("LISTA DE TAREAS" + "\n1:Crear lista de tareas" + "\n2:Leer lista de tareas" + "\n3:Modificar lista de tareas" + "\n4:Eliminar lista tareas" + "\n5:Salir"));

    switch (menu) {
        case 1:
            CREATE(prompt("Ingresar una nueva tarea"));
            break;
        
        case 2:
            READ();
            break;

        case 3:

        break;

        case 4:
            DELETE(prompt("Ingresar una tarea a eliminar"));
            break;

        case 5:
            menu = 5
            break;
        
        default:
            alert("Opcion invalida");
            break;

    }
}




