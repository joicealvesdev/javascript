 function somar (a, b) {
    return a + b

} 

function subtrair (a,b) {
    return a - b
}

function multiplicar (a, b) {
    return a * b
}

function dividir (a,b) {
    if (b === 0) {
        return "Não é possivel dividir por 0"
    } return a / b
}

console.log (somar(5, 6))
console.log(subtrair(5,6))
console.log(multiplicar(5,6))
console.log(dividir(5,6)) 


const operações = [
    function (a, b) {return a + b},
    function (a, b) {return a - b},
    function (a, b) { return a * b},
    function (a, b) {return b === 0 ? "erro": a / b },
]

function calcular (a, b, indice ) {
    return operações [indice] (a, b)
}

console.log (calcular(10, 5, 0)) //soma
console.log(calcular(10, 5, 3)) //divisão



