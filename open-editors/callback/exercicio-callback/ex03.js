function saudação (nome,callback) {
    console.log('Olá ' + nome);
    callback();
}
saudação ('Joice', despedida); 



function despedida () {  //função callback
  console.log('Ate logo');
}

//callback é uma função que passa para dentro de outra função



function carro (nome, callback) {
    console.log('Modelo do Carro ' + nome, ) 
    callback();
}

carro ('HB20' , ano);

function ano () {
    console.log('2026');
}

function Roupa (nome, callback) {
    console.log('OLá eu quero uma ' + nome)
    callback ();
}
function finalizar () {
    console.log('Cinza');
}

Roupa ('Jaqueta', finalizar);



function Iphone (nome, callback) {
    console.log(`Modelo do Iphone ${nome}` );
    callback();
}

Iphone ('15 Pro Max' , finalizar); //callback

function finalizar () {  //callback
  console.log('Ano 2026')
}



function Gato (nome, callback) {
  console.log('Seu gato é um ' + nome)
  callback();
}

Gato ('Peludo? e ', finalizar)

function finalizar () {
  console.log('Loirinho')
}










