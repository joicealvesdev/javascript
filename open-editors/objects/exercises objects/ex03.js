/* function Pessoa  (name,idade) {
        this.name = name;
        this.idade = idade; 

}



const user1 = new Pessoa ("Joi" , 22);
const user2 = new Pessoa ("Mag" , 23); 

console.log(user1.name);
console.log(user2.idade); */

function carro (modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
}

const carro1 = new carro ("HB20", 2026);
const carro2 = new carro ("Corola" , 2019);

console.log(carro1.modelo);
console.log(carro2.ano);