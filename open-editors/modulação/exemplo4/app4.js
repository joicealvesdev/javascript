import criarUsuario , {validarIdade, capitalizar}from "./usuario.js";


const nome = capitalizar ('marcos');
const idade = 15;

const user = criarUsuario (nome, idade);

console.log(user)
console.log('é maior de idade?', validarIdade(idade));