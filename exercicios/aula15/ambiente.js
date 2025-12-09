let num = [5, 8 ,9 , 3, 7] /*posição ou elementos, tem 5*/ 
num[3] = 6  /*0, 1 , 2, 3 , 4 indice*/ 
num.push(1) 
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor da posição é ${num[2]} `)

for (let pos = 0; pos<num.length;pos++) {
    console.log(num[pos])
}