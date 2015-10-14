var div = document.querySelector('.salida');

function unsort (a, b) {
    return Math.random() * 10 - 5; 
}

function limpiarSalida() {
    div.innerHTML = '';
}

function agregarTexto (texto) {
    var txt = document.createTextNode(texto);
    div.appendChild(txt);
    div.appendChild(document.createElement('br'));
}

var list = [];

for (var i = 1; i <= 15; i++) {
    list.push(i);
}

list.sort(unsort);

agregarTexto(list.toString());
agregarTexto("");

function insertSort (lista) {
    var i , j;
    var aux;
    for (i = 0; i < lista.length - 1; i++){

        if (lista[i] > lista[i+1]) {
            aux = lista[i + 1];
            lista[i + 1] = lista[i];
            lista[i] = aux;

            j = i;
            while (j > 0 && lista[j] < lista[j-1]) {
                aux = lista[j - 1];
                lista[j - 1] = lista[j];
                lista[j] = aux;
                j--;
            }
        }

    }
}

insertSort(list);

agregarTexto(list.toString());

//Paso a pasito
list.sort(unsort);

var estado = {
    lista: list,
    i: 0,
    j: 0,
    direccion: true
};

console.log(estado);

function sortPasoPaso (objEstado) {
    var aux;
    if (objEstado.i < objEstado.lista.length - 1) {
        if (objEstado.direccion) {
            if (objEstado.lista[objEstado.i] > objEstado.lista[objEstado.i + 1]) {
                aux = objEstado.lista[objEstado.i + 1];
                objEstado.lista[objEstado.i + 1] = objEstado.lista[objEstado.i];
                objEstado.lista[objEstado.i] = aux;

                objEstado.j = objEstado.i;
                objEstado.direccion = false;
            }

            objEstado.i = objEstado.i + 1;
        } else {
            if (objEstado.j > 0) {
                if (objEstado.lista[objEstado.j] < objEstado.lista[objEstado.j-1]) {
                    aux = objEstado.lista[objEstado.j - 1];
                    objEstado.lista[objEstado.j - 1] = objEstado.lista[objEstado.j];
                    objEstado.lista[objEstado.j] = aux;
                    objEstado.j--;
                } else {
                    objEstado.direccion = true;
                }
            } else {
                objEstado.direccion = true;
            }

        }
    }
    agregarTexto(objEstado.lista.toString());
}

function autoPasoPaso (objEstado) {
    while (objEstado.i < objEstado.lista.length - 1) {
        sortPasoPaso(objEstado);
    }
}


