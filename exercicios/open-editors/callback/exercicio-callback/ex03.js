function saudação (nome,callback) {
    console.log('Olá ' + nome);
    callback();
}
saudação ('Joice', despedida); 



function despedida () {  //função callback
    console.log('Ate logo');
}

//callback é uma função que passa para dentro de outra função