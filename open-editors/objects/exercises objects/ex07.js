function pc (name , model) {
    this.name = name;
    this.model = model;
}

const pc1 = new pc ("AMD ", "Processador Intel i5 9Geração ")

const pc2 = new pc ("Duex" , "Processador Intel  i 5 9Geração");


console.log(pc1.name);
console.log(pc2.model); 


