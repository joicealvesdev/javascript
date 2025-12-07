var Agora = new Date()
var hora = Agora.getHours()
    console.log (`Agora sao exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <=18) {
    console.log('Boa Tarde')
}else if (hora > 18  || hora < 23) {
    console.log('Boa noite')
} 