//funçoes construtoras 

function  Pessoa  (name,idade) {
    this.name = name; //usa-se para definir propriedades e métados
    this.idade = idade;
}
 
//criando instancias 

const user1 = new Pessoa ("Joice" , 22); // new cria novo objeto e associa ao this
const user2 = new Pessoa ("Marcella", 22); 
 
console.log(user1.name);
console.log(user2.idade);  
 /*
const user1 = new Pessoa ("Joi" , 22);
const user2 = new Pessoa ("Mag", 22); */
























