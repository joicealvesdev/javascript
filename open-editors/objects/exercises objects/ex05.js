//funçoes construtoras

function objeto (nomeDoObjeto, ano) {
    this.nomeDoObjeto = nomeDoObjeto;
    this.ano = ano;
}

const objeto1 = new objeto ("Mesa", "3 cadeiras");
const objeto2 = new objeto ("Caneta" , "Azul");

console.log(objeto1.nomeDoObjeto);
console.log(objeto2.ano);





