function alertaPuntosTotales() {
    const todosLosPuntos = [];

    for (let index = 1; index < 73; index++) {
        const element = document.getElementById("q" + index).value;
        todosLosPuntos.push(parseInt(element));
    }

    let total = 0;
    todosLosPuntos.forEach(addToVariable);


    function addToVariable(item, _) {
        total += item;
    }

    if (total === 180) {
        return true;
    }
    else {
        alert("Revisa tus respuestas. Recuerda que en ninguna fila puedes repetir los valores 1,2,3 y 4");
        return false;
    }
}

function nombreForm() {
    const name = document.getElementById("nombre").value;

    if (name == "") {
        alert("No olvides llenar el campo de nombre o seudónimo");
        return false;
    }
}

function referenciaForm() {
    const ref = document.getElementById("referencia").value;

    if (ref == "") {
        alert("No olvides llenar el campo de referencia con el número que te dieron en la sesión");
        return false;
    }
}

function validar() {
    const puntos = alertaPuntosTotales();
    const nombre = nombreForm();
    const refer = referenciaForm();
    return puntos && nombre && refer;
}