const translations = {
    'es': {
        'name': 'No olvides llenar el campo de nombre',
        'ref': 'No olvides llenar el campo de referencia con el número que te dieron en la sesión',
        'points': 'Revisa tus respuestas. Recuerda que en ninguna fila puedes repetir los valores 1,2,3 y 4'
    },
    'en': {
        'name': 'Don\'t forget to fill the name or pseudonym field',
        'ref': 'Don\'t forget to fill the reference field with the number you were given in the session',
        'points': 'Check your answers. Remember that in no row can you repeat the values 1,2,3 and 4'
    },
    'cat': {
        'name': 'No oblidis omplir el camp de nom',
        'ref': 'No oblidis omplir el camp de referència amb el número que et van donar a la sessió',
        'points': 'Revisa les teves respostes. Recorda que en cap fila pots repetir els valors 1,2,3 i 4'
    }
}

function totalPointsAlert(language) {
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
        const label = translations[language].points;
        alert(label);
        return false;
    }
}

function formNameAlert(language) {
    const name = document.getElementById("nombre").value;

    if (name == "") {
        const label = translations[language].name;
        alert(label);
        return false;
    }
}

function formReferenceAlert(language) {
    const ref = document.getElementById("referencia").value;

    if (ref == "") {
        const label = translations[language].ref;
        alert(label);
        return false;
    }
}

function validate(language) {
    const puntos = totalPointsAlert(language);
    const nombre = formNameAlert(language);
    const refer = formReferenceAlert(language);
    return puntos && nombre && refer;
}