function validadorCpf(cpf){
    let regex = /^\d{11}$/;
    return regex.test(cpf);
}

console.log(validadorCpf("08967846508"));
console.log(validadorCpf("12345"));