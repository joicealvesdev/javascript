function tv (name, model) {
    this.name = name;
    this.model = model;
}

const tv1 = new tv ("TV AOC" , 43 );
const tv2 = new tv ("TV SANSUNG" , 50); 

console.log(tv1.name); 
console.log(tv2.model);