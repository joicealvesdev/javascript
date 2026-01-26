 /*function processarDados (array, callback) {
    for (let i = 0; i <array.length; i++) {
        callback(array[i]);
    }
} 

function exibirElemento (elemento) {
    console.log(elemento);
}

const numeros = [1, 2, 3 , 4 , 5];
processarDados(numeros,exibirElemento);
*/


function processarDados(array, callback) {
    for (let i = 0; i <=array.length; i++) {
        callback(array[i])
    }
}

const numeros = [1, 2 ,3 ,4 , 5, 8];
processarDados(numeros,exibirElementos);

function exibirElementos (elemento) {
    console.log(elemento);
}



