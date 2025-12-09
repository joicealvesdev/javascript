
function verificar () {
    let num = document.getElementById('txtnu')  // pega o input
    let tab = document.getElementById('selectab') // pega o select
    
    if (num.value.length == 0) {     // se não digitou nada
         window.alert('Por favor, digite um número')
        
    } else {
         let n = Number(num.value)  // transforma o valor em número 
         let c = 1                  // contador começa em 1 
         tab.innerHTML = ''         // limpa a lista 
         
         while (c <= 10) {          // enquanto c ≤ 10
            let item = document.createElement('option') // cria option
            item.text = `${n} x ${c} = ${n*c}`          // texto da tabuada
            item.value = `tab${c}`                      // valor interno            
            tab.appendChild(item)                       // coloca no select
            c++                                         // aumenta o contador
        }
    }
}
