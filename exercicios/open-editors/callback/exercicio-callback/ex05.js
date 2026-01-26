

// função anonima autoexecutavel (IIFE)

/*(function(a,b){
    console.log(a+b)
    return a+ b;
})(5, 5); */


function puxarDados(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const Dados = [1, 5, 6, 7 ,8]; 


puxarDados(Dados, valor => console.log ("Processando" , valor * 2));


