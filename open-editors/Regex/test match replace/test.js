let cpf = "12345678901";
console.log(/^\d{11}$/.test(cpf));

let email = "joice@gmail.com";
console.log(/\w+@\w+\.\w{2,3}$/.test(email));



//validar se uma placa antiga esta correta

let placa = "ABC-1234";
console.log(/^[A-Z]{3}-\d{4}$/.test(placa));
