function validarSenha(senha) {
    let regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(senha);
}

console.log(validarSenha("Senha123"));
console.log(validarSenha("senha"));






