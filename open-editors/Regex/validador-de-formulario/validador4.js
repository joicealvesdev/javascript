function validadorCep(cep) {
    let regex = ^\d{5}-\d{3}$
    return regex.test(cep);
}

console.log(validadorCep("12345-678"));
console.log(validadorCep("12843"));




