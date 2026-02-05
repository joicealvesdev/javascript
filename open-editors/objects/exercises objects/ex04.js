function animal (name, idade) {
    this.name = name;
    this.idade = idade;
}

const animal1 = new animal ("Gato" , 6);
const animal2 = new animal ("Gato", 7);


console.log(animal1.name);
console.log(animal2.idade);