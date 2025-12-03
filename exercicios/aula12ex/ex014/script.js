
function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são exatamente ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/dia.png' 
        document.body.style.background = '#568eb1' //* muda cor de fundo da pagina
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background ='#d5b785'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#674a69'
    }
}

//> maior que 
//< menor que 