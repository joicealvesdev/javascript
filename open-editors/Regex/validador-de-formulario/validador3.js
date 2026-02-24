function validarSenha(senha) {
    let regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(senha);
}

console.log(validarSenha("Senha123"));
console.log(validarSenha("senha"));



function validarSenha1(senha) {
    let regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(senha);
}

console.log(validarSenha1("Senha567"));


function validadorSenha2(senha){
    let regex =/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(senha);
}

console.log(validadorSenha2("Senha239103"));
console.log(validarSenha1("senha09"));

function validarsenha3(senha){
    let regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(senha);
}

console.log(validarsenha3("SenhaMiojinho123"))




