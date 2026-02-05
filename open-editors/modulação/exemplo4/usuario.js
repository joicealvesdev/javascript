export default function criarUsuario (nome, idade) {
    return {nome, idade}
}

export function validarIdade(idade) {
  return idade >=18
}

export function capitalizar (nome) {
 return nome.charAt(0).toUpperCase() + nome.slice(1); //toUpperCase (letra maiuscula) //nome.slice é a concatenação, junção do nome 
}