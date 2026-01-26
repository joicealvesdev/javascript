/*function processarDados(array, callback) {
    for (let i = 0; i <array.length; i++) {
        callback(array[i])
    }
}

const numeros = [1, 2 ,3 ,4 , 5];
processarDados(numeros,exibirElementos);

function exibirElementos (elemento) {
    console.log(elemento);
}*/



/*function processarDados(array, callback) {
    for (let i= 0; i <array.length; i++) {
        callback(array[i])
    }
}

const numeros = [4, 6, 7, 2, 9];
processarDados(numeros,exibirElementos);

function exibirElementos (elemento) {
    console.log(elemento);
}


function lendoelementos (array,callback) {
    for(let i = 0; i <array.length; i++) {
        callback(array[i])
    }
} 

const numerosdeelementos =[8, 9, 4, 6, 2];{
    lendoelementos (numerosdeelementos, exibirvalores);
}

function exibirvalores (valores) {
    console.log(valores);
}
 */

function puxarDados (array, callback) {
    for (let i = 0; i<array.length; i++)
        callback(array[i])
}

function exibirResultado (valores){
    console.log(valores)
}
const Dados = [2, 5, 6 , 6, 8]; {
      puxarDados(Dados, exibirResultado); 
}

function Gato (nome, callback) {
  console.log('Seu gato é um ' + nome)
  callback();
}

Gato ('Peludo? e ', finalizar)

function finalizar () {
  console.log('Loirinho?')
}









