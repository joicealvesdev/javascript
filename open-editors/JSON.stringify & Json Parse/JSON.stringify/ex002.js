/*const Person = {
    name: "Joice",
    idade: "17 anos",
    cidade: "Belo Jardim"
}

console.log(`Me chamo`, Person.name + ' e tenho ' ,Person.idade, ' e atualmente moro em ', Person.cidade)


const texto = JSON.stringify(Person);  //utilizando JsonStringify()
console.log(texto);       */             //o Objeto virou uma Stirng Pura em JsonStringify 
                                      //Essa String não é mais um objeto que posso acessar com Person.name, 
                                      //È agora --apenas texto--

// ------------------------------------------------------------------------------------//

//Inverso Json Parse 

//Se O JSON.stringify() tira uma foto textual do objeto , O Json.parse() pega essa foto (string Json) e revive como objeto novamente



//--------------------------------//

//EXEMPLO PRATICO 


//temos um objeto 

const person = {name: "Joice", idade: "17 anos" , cidade: "Belo Jardim"};

//Transformamos em string JSON

const texto = JSON.stringify(person);
console.log(texto);


//Agora Usamos o JSON.parse para reviver 

const objetoNovo = JSON.parse(texto);
console.log(objetoNovo.name); // "Joice"
console.log(objetoNovo.idade); //"17 anos"
console.log(objetoNovo.cidade); // "Belo Jardim"


 /*
Passo 1 Objeto 
Passo 2 Transformar o Objeto em String pura (JsonStringify)
Passo 3 Inverter a String pura para um novo objetoNovo, resumidamente, retornando o valor anterior */








