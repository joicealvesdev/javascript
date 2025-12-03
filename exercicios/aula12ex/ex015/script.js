
window.alert('Preencha os campos corretamente!')
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var foto = document.getElementById('foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados!')
        return
    }

    let fsex = document.getElementsByName('sexano')
    let idade = ano - Number(fano.value)
    let genero = ''

    // limpa classes antigas
    foto.className = ""

    if (fsex[0].checked) {
        genero = 'Homem'

        if (idade < 18) {
            foto.classList.add('jovem-m')
        } else if (idade < 59) {
            foto.classList.add('adulto-m')
        } else {
            foto.classList.add('idoso')
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher'

        if (idade < 18) {
            foto.classList.add('jovem-f')
        } else if (idade < 50) {
            foto.classList.add('adulto-f')
        } else {
            foto.classList.add('idosa')
        }
    }

    res.innerHTML = `${genero} com ${idade} anos.`
}




