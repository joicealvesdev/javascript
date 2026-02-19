const pessoa = [
    
     {  name:"joice" , cidade: "Belo Jardim" , idade: 17},
       {name: "Carlos", idade: 22, cidade: "Olinda"},
     {name: "André", idade: 25, cidade: "Recife"}
] ;

console.log(pessoa[0].name);
console.log(pessoa[2].cidade);


const iphone = [
    {name: "Iphone 8 Plus", model: "2015", version: "1.16"},
    {name: "Iphone 8 Pro", model: "2017", version: "1.26"}
]

console.log(iphone[0].name);
console.log(iphone[1].version) 

// Usando o Map () para transformar cada item 

const nomes = pessoa.map(p => p.name); console.log(nomes); // pegamos apenas os nomes de cada objeto


// Utilizando o Filter()

const maiorIdade = pessoa.filter(p => p.idade >=18);
console.log(maiorIdade);


//Utilizando o Reduce

const somaidade = pessoa.reduce((acumulador, p) => acumulador + p.idade, 0);
console.log(somaidade); 


//Truque para eu nunca mais esquecer

//-> Map() puxar ou transforma uma coluna inteira
// -> filter filtrar os que passam no teste, exemplo >= 22
// -> reduce resumir em um só valor, exemplo somar todas as idade, = 64