const Person = {
    name: "Joice",
    idade: "17 anos",
    cidade: "Belo Jardim"
}

console.log(`Me chamo`, Person.name + ' e tenho ' ,Person.idade, ' e atualmente moro em ', Person.cidade)


const texto = JSON.stringify(Person);  //utilizando JsonStringify()
console.log(texto);