menu = 1;
let list = [];

function CREATE(x) {
    push.list(x);
}

function READ(x) {
    push.list(x);
}

function UPDATE(x) {
    push.list(x);
}

function DELETE(x) {
    push.list(x);
}

while (menu !== 0) {
    menu = parseInt(prompt("LISTA DE TAREAS" + "\n1:Crear lista de tareas" + "\n2:Leer lista de tareas" + "\n3:Modificar lista de tareas" + "\n4:Elminar lista tareas" + "\n0:Salir"))
    switch (menu){
        case 1:
        list.CREATE()
        break;

        case 0:
            menu = 0
        break;
        
    }
}




