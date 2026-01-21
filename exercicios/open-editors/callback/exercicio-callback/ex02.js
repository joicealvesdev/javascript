function fazerBolo(callback) {
    console.log('colocando o bolo no forno...')
}

//Depois de um tempo, o bolo fica pronto 
setTimeout(() => {
    console.log('Bolo Pronto');
    callback(); //chama a função que foi passada!

}, 2000); //espera 2 segundos 
function comerBolo() {
    console.log('HUmm delicia ');
} 

//Aqui eu digo: depois de fazer o bolo, me chama para comer
 







