let num = [5, 8 ,9 , 3, 7] /*posição ou elementos, tem 5*/ 
  /*0, 1 , 2, 3 , 4 indice*/ 
num.push(1) 
num.sort()
num[3] = 6
console.log(num)                                   /*pos = posição*/ 
console.log(`O vetor tem ${num.length} posições`) /*num.length = tamanho total*/ 
console.log(`O primeiro valor da posição é ${num[2]} `)

for (let pos = 0; pos<num.length;pos++) /*(pos<num.length) se a posição for menor que o tamanho total*/{  
    console.log(num[pos])
} 

for (let pos = 0; pos<num.length; pos++) {
   console.log(num[pos])
    
}