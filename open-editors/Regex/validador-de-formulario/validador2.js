function validadorCpf(cpf){
    let regex = /^\d{11}$/;
    return regex.test(cpf);
}

console.log(validadorCpf("08967846508"));
console.log(validadorCpf("12345"));

function validadorCpf1(cpf){
    let regex = /^\d{11}$/;
    return regex.test(cpf);
}

console.log(validadorCpf1("34576589034"));

function validarCpf2 (cpf){
    let regex = /^\d{11}$/;
    return regex.test(cpf);
}

console.log(validarCpf2("23423423456"));


function validarCpf3(cpf) {
    let regex = /^\d{11}$/;
    return regex.test(cpf);
}

console.log(validarCpf3("1234"));