function exibirResultado (resultado, callback) {
    console.log(`O resultado é: ${resultado}`)
}

function calcular(calculo) {
    let resultado = eval (calculo);
    console.log(resultado); //função eval pega uma string e executa como codigo javaScript
}

calcular(window.prompt('Informe um calculo!'))