//Uma função de CallBack é uma função que recebe uma outra funçáo e returna ela


function calcular(a, b, callback) {
    return callback(a+b)
}

function callback (a, b) {
    return a+b;
}


console.log(calcular (4,3, somar))

