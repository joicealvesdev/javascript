//Uma função de CallBack é uma função que recebe uma outra funçáo e returna ela


function calcular(a, b, callback) {
    return callback(a+b)
}

function somar(a, b) {
    return a+b;
}





function saudar (nome, callback) {
    console.log(`Olá`, nome);
    callback();
}

function despedida () {
    console.log('Até mais!');
}
saudar('Maria', despedida);

//Outra forma de usar CallBack é usando funções anônimas

saudar('João', function() {
    console.log('Até logo!');
});
console.log('Fim do programa');









